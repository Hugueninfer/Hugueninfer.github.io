import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

let adapters = {};
try {
  adapters = await import('../scripts/reference-adapters.mjs');
} catch {}

const about = await readFile(new URL('../reference/source/SiteAbout-59Cd-HJn.js', import.meta.url), 'utf8');
const contact = await readFile(new URL('../reference/source/SiteContact-BsBFIpEY.js', import.meta.url), 'utf8');
const home = await readFile(new URL('../reference/source/SiteHome-T3GVTo95.js', import.meta.url), 'utf8');

test('Home adapter describes the personalized blonde character', () => {
  assert.equal(typeof adapters.adaptHome, 'function', 'adaptHome must be implemented');
  const result = adapters.adaptHome(home);
  assert.match(result, /Um rapaz loiro caminha/);
  assert.doesNotMatch(result, /the walker says hi/);
});

test('Profile adapter exposes the click state to a wife and Maltese scene', () => {
  assert.equal(typeof adapters.adaptAbout, 'function', 'adaptAbout must be implemented');
  const result = adapters.adaptAbout(about);

  assert.match(result, /FamilyCharacters\.js/);
  assert.match(result, /className: "wife-stage"/);
  assert.match(result, /uid: "profile-dog", scene: "profile"/);
  assert.match(result, /children: s\.jsx\([^,]+, \{ active: a \}\)/);
  assert.match(result, /s\.jsx\(ps, \{ active: o \}\)/);
  assert.doesNotMatch(result, /uid: "deskkid"/);
  assert.doesNotMatch(result, /\[c, u\] = h\.useState\(0\)/);
  assert.doesNotMatch(result, /\["rock", "paper"\]/);
  assert.match(result, /sua esposa loira e um cachorro Maltês estão junto à mesa/);
});

test('adapted Profile remains a syntactically valid ESM module', () => {
  const result = adapters.adaptAbout(about);
  const encoded = Buffer.from(result).toString('base64');
  const parsed = spawnSync(process.execPath, [
    '--experimental-vm-modules',
    '--input-type=module',
    '--eval',
    'import { SourceTextModule } from "node:vm"; new SourceTextModule(Buffer.from(process.argv[1], "base64").toString())',
    encoded,
  ], { encoding: 'utf8' });

  assert.equal(parsed.status, 0, parsed.stderr);
});

test('Contact adapter replaces the playmate with a Maltese and removes its ball', () => {
  assert.equal(typeof adapters.adaptContact, 'function', 'adaptContact must be implemented');
  const result = adapters.adaptContact(contact);

  assert.match(result, /uid: "door-dog", scene: "door"/);
  assert.doesNotMatch(result, /className: "ball"/);
  assert.doesNotMatch(result, /className: "ball-ln"/);
  assert.match(result, /cachorro Maltês aparece quando a porta abre/);
});

test('family styles are appended exactly once', () => {
  assert.equal(typeof adapters.appendFamilyStyles, 'function', 'appendFamilyStyles must be implemented');
  const custom = '/* family-characters:start */\n.maltese{fill:white}\n/* family-characters:end */\n';
  const once = adapters.appendFamilyStyles('.base{color:black}\n', custom);
  const twice = adapters.appendFamilyStyles(once, custom);

  assert.equal(once, twice);
  assert.equal(once.match(/family-characters:start/g)?.length, 1);
});

test('Profile camera keeps the family ground and heads visible at maximum zoom', () => {
  const result = adapters.adaptAbout(about);
  const center = result.match(/I = \{ x: ([\d.-]+), y: ([\d.-]+) \}/).slice(1).map(Number);
  for (const [frameName, zoomName] of [['C', 'cs'], ['B', 'rs']]) {
    const frame = result.match(new RegExp(`${frameName} = \\{ x: ([\\d.-]+), y: ([\\d.-]+), w: ([\\d.-]+), h: ([\\d.-]+) \\}`)).slice(1).map(Number);
    const width = Number(result.match(new RegExp(`${zoomName} = (\\d+)`))[1]);
    const height = width * frame[3] / frame[2];
    assert.ok(center[1] + height / 2 >= 355, `${frameName}: ground cropped`);
    assert.ok(center[1] - height / 2 <= 170, `${frameName}: heads cropped`);
    assert.ok(center[0] - width / 2 <= 280, `${frameName}: man cropped`);
    assert.ok(center[0] + width / 2 >= 525, `${frameName}: dog cropped`);
  }
});

test('Profile reset waits until the wife finishes her gesture', async () => {
  const result = adapters.adaptAbout(about);
  const duration = Number(result.match(/is = (\d+)/)[1]);
  const css = await readFile(new URL('../reference/custom/family-characters.css', import.meta.url), 'utf8');
  for (const name of ['wife-wave', 'wife-forearm']) {
    const seconds = Number(css.match(new RegExp(`animation: ${name} ([\\d.]+)s`))[1]);
    assert.equal(duration, seconds * 1000, `${name} is cut off by React state reset`);
  }
});
