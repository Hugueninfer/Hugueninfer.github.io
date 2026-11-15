import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getContent, locales, sectionIds } from '../src/content/site.ts';

const shape = (value) =>
  Array.isArray(value)
    ? value.map(shape)
    : value && typeof value === 'object'
      ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]))
      : typeof value;

test('both locales resolve to the same shape with no untranslated leaves', () => {
  const [en, pt] = locales.map(getContent);
  assert.deepEqual(shape(en), shape(pt));
  const leaves = JSON.stringify(en);
  assert.ok(!leaves.includes('"en":'), 'an {en, pt} pair was left unresolved');
});

test('navigation covers every section in order', () => {
  for (const locale of locales) {
    assert.deepEqual(getContent(locale).nav.map((n) => n.id), sectionIds);
  }
});

test('every project links to a Hugueninfer repository and tells the full story', () => {
  for (const locale of locales) {
    const { featured, builds } = getContent(locale);
    assert.ok(featured.length >= 5);
    for (const p of [...featured, ...builds]) {
      assert.match(p.repo, /^https:\/\/github\.com\/Hugueninfer\/[\w.-]+$/);
      for (const block of p.blocks) {
        assert.ok(block.label.trim() && block.text.trim(), `${p.name}: empty block`);
      }
      assert.equal(p.blocks.length, 4, `${p.name}: needs four blocks`);
      if (p.live) assert.match(p.live, /^https:\/\//);
    }
  }
});

test('contact links point to the right profiles', () => {
  const { contact } = getContent('en');
  const urls = contact.links.map((l) => l.url);
  assert.ok(urls.includes('https://www.linkedin.com/in/pedro-huguenin'));
  assert.ok(urls.includes('https://github.com/Hugueninfer'));
  assert.ok(urls.includes('mailto:hugueninpedro@gmail.com'));
});
