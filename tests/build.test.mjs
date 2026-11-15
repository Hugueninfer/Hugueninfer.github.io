// Checks the static export in out/. Run `npm run build` first (CI does).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { sectionIds } from '../src/content/site.ts';

const page = (path) => readFileSync(new URL(`../out/${path}`, import.meta.url), 'utf8');

for (const [path, lang, other] of [
  ['index.html', 'en', '/pt/'],
  ['pt/index.html', 'pt-BR', '/'],
]) {
  test(`${path} renders every section in ${lang}`, () => {
    const html = page(path);
    assert.match(html, new RegExp(`<html lang="${lang}"`));
    for (const id of sectionIds) assert.match(html, new RegExp(`id="${id}"`), `missing #${id}`);
    assert.match(html, new RegExp(`<a[^>]+href="${other}"[^>]+data-lang-switch`));
    assert.match(html, /rel="alternate" hreflang="pt-BR"/);
    assert.match(html, /linkedin\.com\/in\/pedro-huguenin/);
  });
}

test('portuguese page is actually translated', () => {
  assert.match(page('pt/index.html'), /O caminho até aqui\./);
  assert.doesNotMatch(page('pt/index.html'), /The path so far\./);
});
