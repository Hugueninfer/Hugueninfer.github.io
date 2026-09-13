// Static publishing shell for the existing client-side portfolio. No server required.
import {cp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {buildPersonalContent} from '../reference/custom/personal-content.mjs';

const root=resolve(import.meta.dirname,'..');
const out=resolve(root,'out');
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp(resolve(root,'public'),out,{recursive:true});
const html=`<!doctype html>
<html lang="pt-BR"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pedro Huguenin — Engenharia de Software e IA Aplicada</title>
<meta name="description" content="Backend, projetos full stack e transição para engenharia de software com IA aplicada.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg">
<link rel="stylesheet" href="/fonts/fonts.css">
<link rel="stylesheet" href="/assets/index-sXIK4by5.css">
<link rel="stylesheet" href="/assets/theme-DOAwoE7X.css">
<link rel="stylesheet" href="/assets/custom/interface-palette.css">
<link rel="stylesheet" href="/assets/custom/personal-content.css">
<style>:root{color-scheme:light;background:#fffcf0}:root[data-theme='dark']{color-scheme:dark;background:#13120d}#reference-root{min-height:100svh}</style>
</head><body><div id="reference-root"><div id="reference-status" role="status" style="padding:40px;font-family:General Sans,sans-serif">Pedro Huguenin</div></div>
<noscript>Ative o JavaScript para explorar o portfólio interativo de Pedro Huguenin.</noscript>
<script type="module">
try {
  await import('/assets/index-DwCqBxFL.js');
  await window.__PLEURAT_LOCAL__.mount(document.getElementById('reference-root'));
} catch(error) {
  console.error(error);
  const status=document.getElementById('reference-status');
  if(status) status.textContent='Não foi possível carregar o portfólio. Atualize a página.';
}
</script></body></html>`;
const content=buildPersonalContent();
const routes=['','about','work','ai','contact','privacy',...content.PROJECT_ORDER.map(id=>'work/'+id)];
for(const route of routes) {
  if(!/^[a-z0-9/-]*$/.test(route)||route.includes('..')) throw new Error('Unsafe route');
  await mkdir(resolve(out,route),{recursive:true});
  await writeFile(resolve(out,route,'index.html'),html);
}
await writeFile(resolve(out,'404.html'),html);
await writeFile(resolve(out,'.nojekyll'),'');
await writeFile(resolve(out,'robots.txt'),'User-agent: *\nAllow: /\n');
const entry=resolve(out,'assets/index-DwCqBxFL.js');
await writeFile(entry,(await readFile(entry,'utf8')).replaceAll('"noindex, nofollow"','"index, follow"'));
console.log(`GitHub Pages: ${routes.length} routes exported to out/.`);
