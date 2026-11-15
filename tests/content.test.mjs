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
  assert.ok(!JSON.stringify(en).includes('"en":'), 'an {en, pt} pair was left unresolved');
});

test('navigation covers every section in order', () => {
  for (const locale of locales) {
    assert.deepEqual(getContent(locale).nav.map((n) => n.id), sectionIds);
  }
});

test('work experience and education are separate lists', () => {
  const { experience, education, certifications } = getContent('en');
  assert.ok(experience.items.length >= 5);
  assert.deepEqual(education.items.map((e) => e.school), ['UNIPDS', 'UniFOA', 'Escola Técnica Pandiá Calógeras']);
  assert.ok(experience.items.every((e) => !('school' in e)));
  assert.ok(certifications.items.length >= 4);
  for (const c of certifications.items) assert.match(c.year, /^\d{4}$/);
});

test('every project has a unique slug, a repository and a full case study', () => {
  for (const locale of locales) {
    const { projects } = getContent(locale);
    const slugs = projects.map((p) => p.slug);
    assert.equal(new Set(slugs).size, slugs.length, 'duplicate slug');
    assert.ok(projects.filter((p) => p.featured).length >= 5);
    for (const p of projects) {
      assert.match(p.slug, /^[a-z0-9-]+$/);
      assert.match(p.repo, /^https:\/\/github\.com\/Hugueninfer\/[\w.-]+$/);
      if (p.live) assert.match(p.live, /^https:\/\//);
      assert.equal(p.blocks.length, 4, `${p.name}: needs four blocks`);
      assert.ok(p.tech.length > 0, `${p.name}: no tech`);
      assert.ok(p.sections.length >= 4, `${p.name}: case study too short`);
      for (const s of [...p.blocks.map((b) => ({ heading: b.label, text: b.text })), ...p.sections]) {
        assert.ok(s.heading.trim() && s.text.trim(), `${p.name}: empty block`);
      }
      for (const s of p.sections) if (s.image) assert.match(s.image.src, /^https:\/\/github\.com\/Hugueninfer\//);
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
