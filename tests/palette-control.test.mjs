import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('the blue palette control is absent while the light and dark control remains', async () => {
  const theme = await readFile(new URL('../public/assets/theme-CvJK8SGN.js', import.meta.url), 'utf8');
  assert.doesNotMatch(theme, /className:\s*["']sv-pal["']/);
  assert.doesNotMatch(theme, /className:\s*["']sv-nav-pal["']/);
  assert.doesNotMatch(theme, /Switch to the Millimeter palette/);
  assert.doesNotMatch(theme, /Millimeter/);
  assert.match(theme, /className:\s*["']sv-lights["']/);
  assert.match(theme, /Switch to dark/);
});
