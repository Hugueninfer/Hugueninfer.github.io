import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { jsx } from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';
import * as adapters from '../scripts/reference-adapters.mjs';

// Load the delivered SVG components with the real React JSX runtime, without
// bootstrapping the unrelated browser/router entry point.
const dataModule = source => `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const jsxRuntime = import.meta.resolve('react/jsx-runtime');
const commuterSource = await readFile(new URL('../reference/source/Commuter-BHE77-Jm.js', import.meta.url), 'utf8');
const commuterUrl = dataModule((adapters.adaptCommuter?.(commuterSource) ?? commuterSource)
  .replace('import { j as C } from "./index-DwCqBxFL.js";', `import * as C from "${jsxRuntime}";`));
const familySource = await readFile(new URL('../reference/custom/FamilyCharacters.js', import.meta.url), 'utf8');
const familyUrl = dataModule(familySource
  .replace('import { j as h } from "../index-DwCqBxFL.js";', `import * as h from "${jsxRuntime}";`)
  .replace('"./family-spec.mjs"', JSON.stringify(new URL('../reference/custom/family-spec.mjs', import.meta.url).href))
  .replace('"../Commuter-BHE77-Jm.js"', JSON.stringify(commuterUrl)));
const { C: Man } = await import(commuterUrl);
const { W: Wife } = await import(familyUrl);

const paths = markup => [...markup.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map(match => match[1]);
const shape = (markup, className) => markup.match(new RegExp(`<path class="${className}" d="([^"]+)"`))?.[1];

test('wife renders the same torso, leg and hand anatomy as the man', () => {
  const man = renderToStaticMarkup(jsx('svg', { children: jsx(Man, { x: 0, uid: 'man' }) }));
  const wife = renderToStaticMarkup(jsx('svg', { children: jsx(Wife, {}) }));
  const wifePaths = paths(wife);
  for (const part of ['coat', 'trews', 'shoe', 'hand']) {
    const original = shape(man, part);
    assert.ok(original, `reference ${part} must exist`);
    assert.ok(wifePaths.includes(original), `wife has a different ${part} anatomy`);
  }
});

test('two wife instances do not collide in articulated-arm clip paths', () => {
  const markup = renderToStaticMarkup(jsx('svg', { children: [
    jsx(Wife, { uid: 'wife-one' }, 'one'),
    jsx(Wife, { uid: 'wife-two', active: true }, 'two'),
  ] }));
  const ids = [...markup.matchAll(/<clipPath id="([^"]+)"/g)].map(match => match[1]);
  assert.ok(ids.length >= 8, 'both arms must have independent joint clips');
  assert.equal(new Set(ids).size, ids.length, 'arm clipping leaks between characters');
  for (const [, id] of markup.matchAll(/clip-path="url\(#([^)]+)\)"/g)) {
    assert.ok(ids.includes(id), `unresolved arm clip ${id}`);
  }
});
