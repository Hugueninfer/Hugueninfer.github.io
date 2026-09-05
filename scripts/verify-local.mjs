import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, basename } from 'node:path';
import { SourceTextModule } from 'node:vm';
import assert from 'node:assert/strict';
import { adaptHome, adaptAbout, adaptContact, adaptCommuter, appendFamilyStyles } from './reference-adapters.mjs';
import { personalize } from './personal-adapters.mjs';

const root = resolve(import.meta.dirname, '..');
const assets = resolve(root, 'public/assets');
const modules = new Map();
async function collectModules(directory) {
  const paths = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await collectModules(path));
    else if (/\.(?:js|mjs)$/.test(entry.name)) paths.push(path);
  }
  return paths;
}
const files = await collectModules(assets);
for (const path of files) {
  modules.set(path, new SourceTextModule(await readFile(path, 'utf8'), { identifier: path }));
}
const bridge = resolve(root, 'public/local-mount.mjs');
modules.set(bridge, new SourceTextModule(await readFile(bridge, 'utf8'), { identifier: bridge }));
const linker = (specifier, parent) => {
  const path = resolve(dirname(parent.identifier), specifier);
  assert.ok(modules.has(path), `Missing ESM module: ${specifier}`);
  return modules.get(path);
};
let imports = 0;
for (const [path, module] of modules) {
  if (module.status === 'unlinked') await module.link(linker);
  const code = await readFile(path, 'utf8');
  for (const [, specifier] of code.matchAll(/import\(["']([^"']+)["']\)/g)) {
    assert.ok(modules.has(resolve(dirname(path), specifier)), `Missing lazy module: ${specifier}`);
    imports++;
  }
}
const manifest = JSON.parse(await readFile(resolve(root, 'reference-manifest.json'), 'utf8'));
assert.deepEqual(manifest.failures, []);
for (const local of Object.values(manifest.assets)) {
  const info = await stat(resolve(root, `public${local}`));
  assert.ok(info.size > 0, `Empty asset: ${local}`);
}
const content = JSON.parse(await readFile(resolve(root, 'public/data/content.json'), 'utf8'));
const remoteImages = JSON.stringify(content).match(/https?:[^" ]+\.(avif|png|webp|jpg|svg)(?:\?[^" ]*)?/g) ?? [];
const approvedIcons = new Set(content.AI_TOOLS.map(tool => tool.iconUrl).filter(Boolean));
assert.deepEqual(remoteImages.filter(url => !approvedIcons.has(url)), [], 'Content contains unapproved nonlocal media');
const fonts = await readFile(resolve(root, 'public/fonts/fonts.css'), 'utf8');
assert.ok(!fonts.includes('//cdn.'));
for (const [, local] of fonts.matchAll(/url\(['"]([^'"]+)/g)) await stat(resolve(root, `public${local}`));

// Unadapted art and timings stay byte-for-byte identical to the inspected reference.
const original = resolve(root, 'reference/source');
for (const [name, adapt] of [['SiteHome-T3GVTo95.js', adaptHome], ['SiteAbout-59Cd-HJn.js', adaptAbout], ['SiteContact-BsBFIpEY.js', adaptContact], ['Commuter-BHE77-Jm.js', adaptCommuter]]) {
  assert.equal(await readFile(resolve(assets, name), 'utf8'), personalize(name, adapt(await readFile(resolve(original, name), 'utf8'))), `Nonreproducible scene: ${name}`);
}
const adapted = ['index-DwCqBxFL.js', 'theme-CvJK8SGN.js', 'SiteAbout-59Cd-HJn.js', 'SiteContact-BsBFIpEY.js', 'Daughter-HgqIGkFr.js', 'Commuter-BHE77-Jm.js', 'SitePrivacy-QJ-JRPC-.js', 'react-dom-36navsnf.js', 'router-5ag9yOgs.js'];
for (const path of files.filter(path => dirname(path) === assets && basename(path) !== 'SiteHome-T3GVTo95.js' && !adapted.includes(basename(path)))) {
  const name = basename(path);
  assert.equal(await readFile(resolve(assets, name), 'utf8'), personalize(name, await readFile(resolve(original, name), 'utf8')), `Reference drawing/animation changed: ${name}`);
}
assert.equal(await readFile(resolve(assets, 'index-sXIK4by5.css'), 'utf8'), await readFile(resolve(original, 'index-sXIK4by5.css'), 'utf8'), 'Reference base stylesheet changed');

const daughter = await readFile(resolve(assets, 'Daughter-HgqIGkFr.js'), 'utf8');
assert.equal(daughter, 'export { D } from "./custom/FamilyCharacters.js";\n', 'Child module was not replaced by the Maltese');
const about = await readFile(resolve(assets, 'SiteAbout-59Cd-HJn.js'), 'utf8');
assert.ok(about.includes('uid: "profile-dog", scene: "profile"'));
assert.ok(about.includes('W as FamilyWife'));
assert.ok(!about.includes('uid: "deskkid"'));
const contact = await readFile(resolve(assets, 'SiteContact-BsBFIpEY.js'), 'utf8');
assert.ok(contact.includes('uid: "door-dog", scene: "door"'));
assert.ok(!contact.includes('className: "ball"'));
const theme = await readFile(resolve(assets, 'theme-DOAwoE7X.css'), 'utf8');
assert.equal(theme, appendFamilyStyles(await readFile(resolve(original, 'theme-DOAwoE7X.css'), 'utf8'), await readFile(resolve(root, 'reference/custom/family-characters.css'), 'utf8')));
for (const name of ['FamilyCharacters.js', 'family-spec.mjs', 'family-characters.css']) {
  assert.equal(await readFile(resolve(assets, 'custom', name), 'utf8'), await readFile(resolve(root, 'reference/custom', name), 'utf8'));
}
assert.equal(theme.match(/family-characters:start/g)?.length, 1, 'Family styles must be appended once');
const familyModule = await readFile(resolve(assets, 'custom/FamilyCharacters.js'), 'utf8');
const familySpec = await readFile(resolve(assets, 'custom/family-spec.mjs'), 'utf8');
assert.ok(familyModule.includes('function D(') && familyModule.includes('function W('));
assert.deepEqual(`${familyModule}${familySpec}`.match(/https?:\/\//g) ?? [], [], 'Custom characters must not load remotely');

const routes = ['/', '/work', '/ai', '/about', '/contact', '/privacy', ...Object.keys(content.PROJECTS).map(slug => `/work/${slug}`), '/missing-page'];
for (const route of routes) {
  const response = await fetch(`http://localhost:3000${route}`);
  assert.equal(response.status, 200, `Route unavailable: ${route}`);
  assert.ok(response.headers.get('content-type')?.includes('text/html'));
  await response.arrayBuffer();
}
console.log(JSON.stringify({ modules: files.length, lazyImports: imports, localAssets: Object.keys(manifest.assets).length, screenshots: content.SCREENSHOTS.length, projects: Object.keys(content.PROJECTS).length, routes: routes.length, fonts: 'local', originalArtAndStyles: 'preserved with documented family adapters', status: 'passed' }, null, 2));
