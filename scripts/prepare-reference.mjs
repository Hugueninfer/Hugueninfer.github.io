// Reproducible local adaptation of the publicly delivered reference build.
// No editor, authentication, write API or remote analytics is used.
import { readFile, writeFile, mkdir, readdir, access, cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { assetPath, collectMedia, localizeContent } from './local-content.mjs';
import { adaptHome, adaptAbout, adaptContact, adaptCommuter, appendFamilyStyles } from './reference-adapters.mjs';
import { personalize } from './personal-adapters.mjs';
import { buildPersonalContent } from '../reference/custom/personal-content.mjs';

const root = resolve(import.meta.dirname, '..');
const source = resolve(root, 'reference/source');
const custom = resolve(root, 'reference/custom');
const publicDir = resolve(root, 'public');
const origin = 'https://www.pleurat.com';

async function save(path, content) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
}
async function download(url, path) {
  try { await access(path); return; } catch {}
  const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  const type = response.headers.get('content-type') ?? '';
  if (type.includes('text/html')) throw new Error(`Unexpected HTML for asset: ${url}`);
  await save(path, new Uint8Array(await response.arrayBuffer()));
}

function adaptEntry(input) {
  let entry = 'import { createLocalMount } from "../local-mount.mjs";\n' + input;
  entry = entry.replace(/var r = xe\(\),[\s\S]*?(?=const N =)/, 'var r = xe();\n');
  entry = entry.replace(/      \(\(u = \(c = window\.posthog\)[\s\S]*?page_title: t\.title,\n          }\)\);/, '      // Local study: analytics disabled.');
  entry = entry.replace('      r.jsx(He, {}),', '');
  entry = entry.replace(/  Tt = l\.lazy\([\s\S]*?(?=  Et =)/, '');
  entry = entry.replace('                  r.jsx(v, { path: "/ui", element: r.jsx(Tt, {}) }),', '');
  entry = entry.replace(/const Wt = 300 \* 1e3;[\s\S]*?(?=const re =)/, '');
  entry = entry.replace(/function Ht\(\) \{[\s\S]*?\nHt\(\);/, `window.__PLEURAT_LOCAL__ = createLocalMount({
  async loadContent() {
    try {
      const response = await fetch('/data/content.json');
      if (!response.ok) throw new Error('Local content unavailable');
      return await response.json();
    } catch (error) { console.warn('Using bundled defaults.', error); return {}; }
  },
  applyContent: mt,
  createRoot: element => ve.createRoot(element),
  render: re,
});`);
  entry = entry.replace('n || s === "/ui" ? "noindex, nofollow" : "index, follow"', '"noindex, nofollow"');
  // Dead dependency slots retain their indices, but no private editor/UI imports remain.
  entry = entry.replace(/assets\/(?:UIKit-D8rdnxEG\.js|UIKit-CqVRk1m9\.css|index-D8zjrZIf\.js|index-Di0mkZEe\.css)/g, 'assets/index-sXIK4by5.css');
  return entry;
}

function adaptTheme(input) {
  const paletteControl = /          r &&\n            q\(\) &&\n            e\.jsx\("button", \{[\s\S]*?              children: e\.jsx\(Se, \{\}\),\n            \}\),\n(?=          n &&)/;
  if (!paletteControl.test(input)) throw new Error('Palette control was not found in the reference theme');
  const mobilePalette = /            r &&\n              q\(\) &&\n              e\.jsxs\("div", \{\n                className: "sv-nav-pal",[\s\S]*?(?=            e\.jsxs\("div", \{\n              className: "sv-nav-foot")/;
  const withoutHeaderPalette = input.replace(paletteControl, '');
  if (!mobilePalette.test(withoutHeaderPalette)) throw new Error('Mobile palette control was not found in the reference theme');
  return withoutHeaderPalette.replace(mobilePalette, '');
}

async function prepareShell() {
  const familyStyles = await readFile(resolve(custom, 'family-characters.css'), 'utf8');
  const names = (await readdir(source)).filter(name => /\.(js|css)$/.test(name) && !name.startsWith('cms-'));
  for (const name of names) {
    let content = await readFile(resolve(source, name), 'utf8');
    if (name === 'index-DwCqBxFL.js') content = adaptEntry(content);
    if (name === 'theme-CvJK8SGN.js') content = adaptTheme(content);
    if (name === 'SiteAbout-59Cd-HJn.js') content = adaptAbout(content);
    if (name === 'SiteHome-T3GVTo95.js') content = adaptHome(content);
    if (name === 'SiteContact-BsBFIpEY.js') content = adaptContact(content);
    if (name === 'Commuter-BHE77-Jm.js') content = adaptCommuter(content);
    if (name === 'Daughter-HgqIGkFr.js') content = 'export { D } from "./custom/FamilyCharacters.js";\n';
    if (name === 'theme-DOAwoE7X.css') content = appendFamilyStyles(content, familyStyles);
    await save(resolve(publicDir, 'assets', name), personalize(name, content));
  }
  await cp(custom, resolve(publicDir, 'assets/custom'), { recursive: true, force: true });
  await save(resolve(publicDir, 'data/content.json'), JSON.stringify(buildPersonalContent(), null, 2));
  for (const name of ['react-dom-36navsnf.js', 'router-5ag9yOgs.js', 'SitePrivacy-QJ-JRPC-.js']) {
    await download(`${origin}/assets/${name}`, resolve(publicDir, 'assets', name));
  }
  const fontCssPath = resolve(publicDir, 'fonts/fonts.css');
  let fontCount = 0;
  try {
    const cachedCss = await readFile(fontCssPath, 'utf8');
    const cachedFonts = [...cachedCss.matchAll(/url\(['"]([^'"]+)/g)].map(match => match[1]);
    await Promise.all(cachedFonts.map(local => access(resolve(publicDir, `.${local}`))));
    if (!cachedFonts.length) throw new Error('Empty local font cache');
    fontCount = cachedFonts.length;
  } catch {
    const fontCssUrl = 'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap';
    let css = await (await fetch(fontCssUrl)).text();
    const urls = [...new Set([...css.matchAll(/(?:https:)?\/\/[^)'"\s]+/g)].map(match => match[0]))];
    for (const [index, url] of urls.entries()) {
      const absolute = url.startsWith('//') ? `https:${url}` : url;
      const ext = new URL(absolute).pathname.split('.').pop();
      const local = `/fonts/general-sans-${index}.${ext}`;
      await download(absolute, resolve(publicDir, `.${local}`));
      css = css.split(url).join(local);
    }
    await save(fontCssPath, css);
    fontCount = urls.length;
  }
  try { await access(resolve(publicDir, 'data/content.json')); } catch { await save(resolve(publicDir, 'data/content.json'), '{}'); }
  console.log(`Reference shell ready: ${names.length + 3} modules/styles, ${fontCount} fonts.`);
}

async function prepareContent() {
  // Run only the reference's read-only public content loader, outside the browser.
  let cms = await readFile(resolve(source, 'cms-rOwzeFgs.js'), 'utf8');
  cms = cms.replace('import { _ as Zr, A as Oi } from "./index-DwCqBxFL.js";', 'const Zr = fn => fn(), Oi = [];');
  cms = cms.replace('export { Sc as c, Rn as i, Ic as y };', 'export { wc as loadContent };');
  const { loadContent } = await import(`data:text/javascript;base64,${Buffer.from(cms).toString('base64')}`);
  const content = await loadContent();
  if (!content.SCREENSHOTS?.length || !content.PROJECTS) throw new Error('Public CMS snapshot is incomplete');
  const strings = [];
  for (const name of await readdir(source)) {
    if (!/\.(js|css)$/.test(name) || name.startsWith('cms-')) continue;
    const text = await readFile(resolve(source, name), 'utf8');
    strings.push(...[...text.matchAll(/["'](\/?assets\/[^"'\s]+\.(?:avif|webp|png|jpe?g|svg|gif|mp4))["']/g)].map(match => match[1]));
  }
  const tools = new Map([['claude', 'webp'], ['figma', 'webp'], ['cursor', 'webp'], ['supabase', 'webp'], ['vercel', 'webp'], ['openai', 'webp'], ['github', 'svg'], ['tailwind', 'svg'], ['grok', 'svg']]);
  for (const tool of content.AI_TOOLS ?? []) if (tool.kind !== 'ring' && tool.id !== 'meta') tools.set(tool.id, tool.ext || tools.get(tool.id) || 'webp');
  for (const [id, ext] of tools) strings.push(`/assets/logos/${id}.${ext}`);
  const media = [...new Set([...strings, ...collectMedia(content)])];
  const manifest = {};
  const failures = [];
  let completed = 0;
  const queue = [...media];
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const item = queue.shift();
      const isRemote = /^https?:/.test(item);
      const url = new URL(item, origin).href;
      const local = isRemote ? assetPath(url) : `/${item.replace(/^\//, '')}`;
      try {
        await download(url, resolve(publicDir, `.${local}`));
        manifest[item] = local;
      } catch (error) { failures.push({ item, error: error.message }); }
      completed++;
      if (completed % 40 === 0) console.log(`Local assets: ${completed}/${media.length}`);
    }
  }));
  const localized = localizeContent(content, manifest);
  await save(resolve(publicDir, 'data/content.json'), JSON.stringify(localized));
  await save(resolve(root, 'reference-manifest.json'), JSON.stringify({ source: origin, capturedAt: new Date().toISOString(), assets: manifest, failures }, null, 2));
  console.log(JSON.stringify({ screenshots: content.SCREENSHOTS.length, projects: Object.keys(content.PROJECTS), assets: Object.keys(manifest).length, failures }, null, 2));
}

if (process.argv.includes('--content')) await prepareContent();
else await prepareShell();
