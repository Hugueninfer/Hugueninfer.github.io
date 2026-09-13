import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import * as jsxRuntime from 'react/jsx-runtime';
import {buildPersonalContent, projects} from '../reference/custom/personal-content.mjs';

test('portfolio publishes Agency Hub as the second full case study', () => {
  assert.deepEqual(projects.map(({id}) => id), ['orbit', 'agency-hub']);

  const agencyHub = projects[1];
  assert.equal(agencyHub.name, 'Agency Hub');
  assert.equal(agencyHub.repo, 'https://github.com/Hugueninfer/agency-hub');
  assert.equal(agencyHub.live, 'https://agency-hub-bf8l.onrender.com');
  assert.ok(agencyHub.sections.length >= 8, 'Agency Hub should be as detailed as the Orbit case study');

  const screenshots = agencyHub.sections.map((section) => section[3]).filter(Boolean);
  assert.deepEqual(screenshots, [
    'https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/login.jpg',
    'https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/dashboard.jpg',
    'https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/projects.jpg',
    'https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/tasks.jpg',
  ]);
});

test('portfolio copy replaces Workflow claims with Agency Hub', () => {
  const content = buildPersonalContent();
  const serialized = JSON.stringify(content);

  assert.deepEqual(content.PROJECT_ORDER, ['orbit', 'agency-hub']);
  assert.doesNotMatch(serialized, /Workflow|Fathom/);
  assert.match(serialized, /Orbit e Agency Hub/);
  assert.match(serialized, /demonstração isolada por 24 horas/i);
});

test('personal content replaces reference projects and clears reference galleries', async () => {
  const entry = await readFile(new URL('../public/assets/index-DwCqBxFL.js', import.meta.url), 'utf8');
  const start = entry.indexOf('function mt(e) {');
  let depth = 1, end = entry.indexOf('{', start) + 1;
  for (; depth; end++) { if (entry[end] === '{') depth++; if (entry[end] === '}') depth--; }
  const context = { B: { original: {name:'Original client'} }, _: {}, rt:['old-image'], it:[], $:{}, ct:{}, payload:{PROJECTS:{orbit:{name:'Orbit'}},SCREENSHOTS:[]} };
  vm.runInNewContext(entry.slice(start, end) + ';mt(payload)', context);
  assert.deepEqual(Object.keys(context._), ['orbit']);
  assert.equal(context.rt.length, 0);
});

test('footer does not mount an animated board when its tool list is empty', async () => {
  const source=await readFile(new URL('../public/assets/theme-CvJK8SGN.js',import.meta.url),'utf8');
  const fn=source.slice(source.indexOf('function De({'),source.indexOf('const ee = "sv-theme"'));
  const context={e:jsxRuntime,ie:[],K:()=>[],L:'a',D:'svg',$e:'animated-board',S:'/',props:{email:'test@example.com',responseTime:'quando possível',socials:[]}};
  const footer=vm.runInNewContext(fn+';De(props)',context);
  assert.ok(!footer.props.children[0], 'empty board would divide by zero in its animation');
});
