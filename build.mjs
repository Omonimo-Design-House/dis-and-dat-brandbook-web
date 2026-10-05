// Builds a static site from the Figma-exported section components.
// 1. downloads Figma asset URLs into public/assets and rewrites them
// 2. renders every section to static HTML with React (build time only)
// 3. compiles the Tailwind classes into a plain CSS file
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import * as esbuild from 'esbuild';
import sharp from 'sharp';
import { sections as allSections } from './src/sections.mjs';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const sections = allSections.filter(s => existsSync(path.join(ROOT, 'src/sections', s.file + '.jsx')));
const SRC = path.join(ROOT, 'src/sections');
const TMP = path.join(ROOT, '.tmp');
const OUT = path.join(ROOT, 'docs');
const CACHE = path.join(ROOT, '.cache/assets'); // original Figma downloads (not published)
const ASSETS = path.join(OUT, 'assets');

// Figma font family -> utility class defined in src/styles.css
const FONT_MAP = { 'Alegreya_Sans': 'ff-alegreya', 'Baskervville': 'ff-baskervville', 'PP_Gosha_Sans': 'ff-gosha',
  'Grot10': 'ff-alegreya', // only on wrappers whose children set their own font
};
const STYLE_MAP = {
  Thin: ['font-thin'], Light: ['font-light'], Regular: ['font-normal'], Medium: ['font-medium'],
  SemiBold: ['font-semibold'], 'Semi_Bold': ['font-semibold'], Bold: ['font-bold'], ExtraBold: ['font-extrabold'],
  Black: ['font-black'], Italic: ['font-normal', 'italic'], 'Medium_Italic': ['font-medium', 'italic'],
  'Bold_Italic': ['font-bold', 'italic'],
};

function fixFonts(code) {
  return code.replace(/font-\['([^':]+):([^']+)'\]/g, (_, fam, style) => {
    const family = FONT_MAP[fam];
    if (!family) throw new Error(`Unknown font family ${fam}`);
    const extra = STYLE_MAP[style];
    if (!extra) throw new Error(`Unknown font style ${style}`);
    return `${family} ${extra.join(' ')}`;
  });
}

async function localizeAssets(code) {
  const urls = [...new Set(code.match(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/[\w-]+\.\w+/g) || [])];
  for (const url of urls) {
    const file = path.basename(url);
    const dest = path.join(CACHE, file);
    try { await fs.access(dest); } catch {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Asset download failed ${res.status}: ${url}`);
      await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
    }
    code = code.replaceAll(url, `assets/${await publishAsset(file)}`);
  }
  return code;
}

// Raster images are re-encoded as WebP (max 2560px), which keeps them sharp at
// retina sizes while cutting the weight by ~95%; SVGs are copied untouched.
async function publishAsset(file) {
  const src = path.join(CACHE, file);
  if (!file.endsWith('.png')) {
    await fs.copyFile(src, path.join(ASSETS, file));
    return file;
  }
  const out = file.replace(/\.png$/, '.webp');
  const dest = path.join(ASSETS, out);
  try { await fs.access(dest); } catch {
    await sharp(src).resize({ width: 2560, height: 2560, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 90 }).toFile(dest);
  }
  return out;
}

await fs.mkdir(CACHE, { recursive: true });
await fs.rm(ASSETS, { recursive: true, force: true });
await fs.mkdir(ASSETS, { recursive: true });
await fs.rm(TMP, { recursive: true, force: true });
await fs.mkdir(TMP, { recursive: true });

for (const file of (await fs.readdir(SRC)).filter(f => f.endsWith('.jsx'))) {
  let code = await fs.readFile(path.join(SRC, file), 'utf8');
  code = fixFonts(await localizeAssets(code));
  await fs.writeFile(path.join(TMP, file), code);
}

const entry = path.join(TMP, 'entry.jsx');
await fs.writeFile(entry, `
import { renderToStaticMarkup } from 'react-dom/server';
${sections.map((s, i) => `import S${i} from './${s.file}.jsx';`).join('\n')}
export const html = [${sections.map((_, i) => `renderToStaticMarkup(<S${i} />)`).join(', ')}];
`);
await esbuild.build({
  entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', jsx: 'automatic',
  outfile: path.join(TMP, 'render.mjs'), packages: 'external', logLevel: 'error',
});
const { html } = await import(pathToFileURL(path.join(TMP, 'render.mjs')).href);

const body = sections.map((s, i) =>
  `<section id="${s.id}" class="frame" style="height:${s.h}px">${html[i]}</section>`).join('\n');
const template = await fs.readFile(path.join(ROOT, 'src/index.html'), 'utf8');
// Version stamp so browsers (Safari especially) fetch fresh CSS/JS after each deploy
const v = Date.now().toString(36);
await fs.writeFile(path.join(OUT, 'index.html'), template.replace('<!--SECTIONS-->', body)
  .replace('href="styles.css"', `href="styles.css?v=${v}"`).replace('src="main.js"', `src="main.js?v=${v}"`));
await fs.copyFile(path.join(ROOT, 'src/main.js'), path.join(OUT, 'main.js'));
// Favicon: the Dis and Dat® monogram (Figma node 2013:643)
await fs.copyFile(path.join(CACHE, '6701a851-4572-4385-95fa-465177be3c34.svg'), path.join(OUT, 'favicon.svg'));
await fs.writeFile(path.join(OUT, '.nojekyll'), '');

execSync(`npx @tailwindcss/cli -i src/styles.css -o docs/styles.css --minify`, { cwd: ROOT, stdio: 'inherit' });
console.log(`Built ${sections.length} sections`);
