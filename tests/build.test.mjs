// Checks the static export in out/. Run `npm run build` first (CI does).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { getContent, sectionIds } from '../src/content/site.ts';

const file = (path) => new URL(`../out/${path}`, import.meta.url);
const page = (path) => readFileSync(file(path), 'utf8');
const { projects } = getContent('en');

for (const [prefix, lang, other] of [
  ['', 'en', '/pt/'],
  ['pt/', 'pt-BR', '/'],
]) {
  test(`${prefix || '/'} home renders every section in ${lang}`, () => {
    const html = page(`${prefix}index.html`);
    assert.match(html, new RegExp(`<html lang="${lang}"`));
    for (const id of sectionIds) assert.match(html, new RegExp(`id="${id}"`), `missing #${id}`);
    assert.match(html, new RegExp(`<a[^>]+href="${other}"[^>]+data-lang-switch`));
    assert.match(html, /rel="alternate" hreflang="pt-BR"/);
    assert.match(html, /linkedin\.com\/in\/pedro-huguenin/);
  });

  test(`${prefix || '/'} home links every project to its case study`, () => {
    const html = page(`${prefix}index.html`);
    for (const p of projects) assert.ok(html.includes(`href="/${prefix}projects/${p.slug}/"`), `no link to ${p.slug}`);
  });

  for (const p of projects) {
    test(`${prefix}projects/${p.slug}/ exists and links back`, () => {
      const path = `${prefix}projects/${p.slug}/index.html`;
      assert.ok(existsSync(file(path)), `${path} missing`);
      const html = page(path);
      assert.match(html, new RegExp(`<html lang="${lang}"`));
      assert.match(html, new RegExp(`<h1[^>]*>${p.name}</h1>`));
      assert.ok(html.includes(`href="/${prefix}#projects"`) || html.includes(`href="/${prefix}#builds"`), 'no way back');
      assert.ok(html.includes(`href="${other}projects/${p.slug}/"`), 'language switch does not keep the project');
      assert.ok(html.includes(p.repo));
    });
  }
}

test('portuguese pages are actually translated', () => {
  assert.match(page('pt/index.html'), /Onde trabalhei\./);
  assert.doesNotMatch(page('pt/index.html'), /Where I have worked\./);
  assert.match(page('pt/projects/orbit/index.html'), /Todos os projetos/);
});
