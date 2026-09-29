import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import * as jsxRuntime from 'react/jsx-runtime';
import {buildPersonalContent, projects} from '../reference/custom/personal-content.mjs';

test('portfolio publishes every full case study in its intended order', () => {
  assert.deepEqual(projects.map(({id}) => id), ['orbit', 'agency-hub', 'smart-waste-ai', 'cineflix', 'complyflow-ai']);

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

test('portfolio publishes ComplyFlow AI with its live product evidence', () => {
  const complyFlow = projects[4];

  assert.equal(complyFlow.name, 'ComplyFlow AI');
  assert.equal(complyFlow.repo, 'https://github.com/Hugueninfer/complyflow-ai');
  assert.equal(complyFlow.live, 'https://complyflow-ai.onrender.com');
  assert.deepEqual(complyFlow.stack, [
    'PHP 8.4', 'Laravel 13', 'Python', 'FastAPI', 'Vue 3', 'PostgreSQL', 'Groq', 'Gemini', 'Docker',
  ]);
  assert.ok(complyFlow.sections.length >= 10, 'ComplyFlow AI should be a detailed portfolio case study');
  assert.match(complyFlow.sections[1][2], /revisão humana mais recente/);
  assert.doesNotMatch(complyFlow.sections[1][2], /decisão humana prevalece/);

  const screenshots = complyFlow.sections.map((section) => section[3]).filter(Boolean);
  assert.deepEqual(screenshots, [
    'https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/login.png',
    'https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/dashboard.png',
    'https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/supplier-dossier.png',
    'https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/compliance-matrix.png',
    'https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/comparison.png',
    'https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/audit.png',
  ]);
});

test('portfolio publishes CineFlix with its live product evidence', () => {
  const cineflix = projects[3];

  assert.equal(cineflix.name, 'CineFlix');
  assert.equal(cineflix.repo, 'https://github.com/Hugueninfer/cineflix-recomendador');
  assert.equal(cineflix.live, 'https://recomendador-de-filmes-rho.vercel.app');
  assert.deepEqual(cineflix.stack, ['javascript', 'html5', 'css3', 'bootstrap', 'git', 'github']);
  assert.ok(cineflix.sections.length >= 5, 'CineFlix should be a detailed portfolio case study');

  const screenshots = cineflix.sections.map((section) => section[3]).filter(Boolean);
  assert.ok(screenshots.length >= 1, 'CineFlix should have at least one screenshot');
});

test('portfolio copy presents ComplyFlow AI across projects, applied AI and privacy', () => {
  const content = buildPersonalContent();
  const serialized = JSON.stringify(content);

  assert.deepEqual(content.PROJECT_ORDER, ['orbit', 'agency-hub', 'smart-waste-ai', 'cineflix', 'complyflow-ai']);
  assert.doesNotMatch(serialized, /Workflow|Fathom/);
  assert.match(content.COPY.work.railIntro, /ComplyFlow AI/);
  assert.match(content.COPY.ai.workSub, /ComplyFlow AI/);
  assert.match(content.COPY.privacy.sections[0].p[0], /ComplyFlow AI/);
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
