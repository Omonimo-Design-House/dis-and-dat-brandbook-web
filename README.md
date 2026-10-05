# Dis and Dat® — Brand guidelines

Versión web del brandbook de Dis and Dat®, diseñado en Figma por Omónimo Design House.

La página publicada (https://omonimo-design-house.github.io/dis-and-dat-brandbook-web/) está en la carpeta `docs/` (GitHub Pages la sirve desde ahí).

## Actualizar la página

```bash
npm install
npm run build
```

`build.mjs` toma las secciones de `src/sections/` (exportadas desde Figma), genera `docs/index.html`,
optimiza las imágenes y compila el CSS. Luego se suben los cambios con `git push`.
