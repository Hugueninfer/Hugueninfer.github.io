import test from 'node:test';
import assert from 'node:assert/strict';
import { localizeContent, assetPath, collectMedia } from '../scripts/local-content.mjs';

test('preserves text and outbound links while localizing nested media', () => {
  const image = 'https://cdn.sanity.io/images/project/production/photo.jpg?w=1200';
  const input = { name: 'Pleurat', items: [{ url: image }], socials: [{ url: 'https://dribbble.com/Pleurat' }] };
  const output = localizeContent(input, { [image]: '/media/photo.jpg' });
  assert.deepEqual(output, { name: 'Pleurat', items: [{ url: '/media/photo.jpg' }], socials: [{ url: 'https://dribbble.com/Pleurat' }] });
  assert.equal(input.items[0].url, image);
});

test('asset paths are deterministic, query-sensitive, safe and retain format', () => {
  const url = 'https://cdn.sanity.io/images/p/d/image.png?w=100';
  assert.match(assetPath(url), /^\/media\/[a-f0-9]{20}\.png$/);
  assert.equal(assetPath(url), assetPath(url));
  assert.notEqual(assetPath(url), assetPath(url.replace('100', '200')));
  assert.throws(() => assetPath('file:///etc/passwd'));
});

test('media discovery excludes links, text and inline SVG/data', () => {
  const content = ['https://example.com/', '/assets/photo.avif', { src: 'https://cdn.sanity.io/images/p/d/a.jpg?w=10' }, 'data:image/svg+xml,abc', 'Product design'];
  assert.deepEqual(collectMedia(content), ['/assets/photo.avif', 'https://cdn.sanity.io/images/p/d/a.jpg?w=10']);
});
