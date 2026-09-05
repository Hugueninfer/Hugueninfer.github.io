import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';

test('Pages export serves every route with the existing renderer and local assets',()=>{
  const root=resolve(import.meta.dirname,'..');
  execFileSync(process.execPath,['scripts/build-pages.mjs'],{cwd:root});
  for(const route of ['','about','work','work/orbit','work/workflow','ai','contact','privacy']) {
    const html=readFileSync(resolve(root,'out',route,'index.html'),'utf8');
    assert.match(html,/id="reference-root"/);
    assert.match(html,/__PLEURAT_LOCAL__\.mount/);
    for(const [,path] of html.matchAll(/(?:href|src)="(\/[^"?#]+)"/g)) assert.ok(existsSync(resolve(root,'out','.'+path)),path);
    assert.doesNotMatch(html,/noindex|localhost:3000|src\/main\.tsx/);
  }
  assert.ok(existsSync(resolve(root,'out/404.html')));
  assert.match(readFileSync(resolve(root,'out/robots.txt'),'utf8'),/Allow: \//);
  assert.doesNotMatch(readFileSync(resolve(root,'out/assets/index-DwCqBxFL.js'),'utf8'),/"noindex, nofollow"/);
});
