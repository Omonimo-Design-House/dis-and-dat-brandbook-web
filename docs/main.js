// Prototype interactions from Figma, keyed by Figma node id.
const NAV = { // index item -> section (SCROLL_TO, smart animate)
  '2:25': '2:86', '2:30': '13:208', '2:35': '17:1485', '2:40': '18:2245', '2:45': '19:2758',
  '2:50': '27:485', '2:58': '27:654', '2:61': '29:776', '41:446': '2:12', // MENÚ -> Índice
};
// "Emblemas" (18:2245) is hidden in Figma; its link lands on the next visible section.
const FALLBACK = { '18:2245': '19:2758' };
const LINKS = {
  '41:454': 'https://drive.google.com/drive/folders/1b-VdOg4zEBGEI5WMku-qgJBc0TLL8PTQ?usp=drive_link',
  '13:288': 'https://drive.google.com/drive/folders/1FXkuwkmq-KCN1DAG_2MLEXyOtbmPGvA2?usp=sharing',
  '2033:670': 'https://drive.google.com/drive/folders/1q0LMJi5PA1Fjn-XtRa0ji1Gv_LPo2F6z?usp=sharing',
  '41:462': 'https://drive.google.com/drive/folders/1FXkuwkmq-KCN1DAG_2MLEXyOtbmPGvA2?usp=drive_link',
  '41:466': 'https://drive.google.com/drive/folders/1RUNrzzYJe4lv7Nd7fVOiRKf7mRTqBO61?usp=sharing',
  '41:470': 'https://drive.google.com/drive/folders/1LI3asbFLETMTU8w7GEWfv8eHu1JT6wtZ?usp=sharing',
  '41:474': 'https://drive.google.com/drive/folders/1q0LMJi5PA1Fjn-XtRa0ji1Gv_LPo2F6z?usp=sharing',
  '41:478': 'https://drive.google.com/drive/folders/1b-VdOg4zEBGEI5WMku-qgJBc0TLL8PTQ?usp=drive_link',
};

const page = document.querySelector('.page');
const fit = () => { page.style.zoom = window.innerWidth / 1920; };
fit();
window.addEventListener('resize', fit);

const byNode = id => document.querySelector(`[data-node-id="${id}"]`);
const sectionFor = id => document.getElementById('n' + (FALLBACK[id] || id).replace(':', '-'));

for (const [from, to] of Object.entries(NAV)) {
  const el = byNode(from);
  if (!el) continue;
  el.dataset.nav = to;
  el.setAttribute('role', 'link');
  el.tabIndex = 0;
  const go = () => sectionFor(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.addEventListener('click', go);
  el.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
}

for (const [id, href] of Object.entries(LINKS)) {
  const el = byNode(id);
  if (!el || el.tagName === 'A') continue; // already a real link in the markup
  const a = document.createElement('a');
  a.href = href; a.target = '_blank'; a.rel = 'noopener';
  a.className = el.className; a.style.cssText = el.style.cssText;
  a.dataset.nodeId = id;
  a.append(...el.childNodes);
  el.replaceWith(a);
}
