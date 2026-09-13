// Content-only changes layered after the established scene adapters.
function replace(input, from, to) {
  if (!input.includes(from)) throw new Error(`Personal adapter anchor missing: ${from.slice(0,90)}`);
  return input.replace(from,to);
}
export function personalize(name,input) {
  let code=input;
  if(name==='index-DwCqBxFL.js') {
    code='import {localizedRuntime,translateContent,translateText,initializeLocale} from "./custom/i18n.mjs";\ninitializeLocale();\n'+code;
    code=replace(code,'var r = xe();','var r = localizedRuntime(xe());');
    code=replace(code,'return await response.json();','return translateContent(await response.json());');
    code=replace(code,'document.title = t.title','document.title = translateText(t.title)');
    code=code.replaceAll('"content", t.desc','"content", translateText(t.desc)').replaceAll('"content", t.title','"content", translateText(t.title)');
    code=replace(code,'const a = { ...B };','const a = {};');
    code=code.replace(/e\.(STATS|FOCUS|AI_WORK|AI_TOOLS|WORK|WORK_FEED|COMPANIES|STREET_BRANDS|SCREENSHOTS) && e\.\1\.length/g,'Array.isArray(e.$1)');
    code=replace(code,'s = U.filter((n) => !a.has(n.id)),','s = [],');
    code=replace(code,'const a = { ...$ };','const a = {};');
    code=replace(code,'o = { ...($[s] || {}) };','o = {};');
    code=replace(code,'? i.length','? true');
    code=code.replace(/      desc: "[^"\n]*",/g,'      desc: "Pedro Huguenin — engenharia de software, backend e transição para IA aplicada.",');
    code=code.replace('Product Designer and AI Product Builder','Engenharia de Software e IA Aplicada');
  }
  if(name==='SiteHome-T3GVTo95.js') {
    code='import {BackendScene} from "./custom/CareerSections.js";\n'+code;
    code='import {streetOffsets,streetCopies} from "./custom/street-motion.mjs";\n'+code;
    code=replace(code,'(u = (u + (T * E) / 1e3) % S),','(u = u + (T * E) / 1e3),');
    code=replace(code,'${(-u).toFixed(2)}px','${(-streetOffsets(u,S).mid).toFixed(2)}px');
    code=replace(code,'${(-((u * 0.35) % as)).toFixed(2)}px','${(-streetOffsets(u,S).far).toFixed(2)}px');
    code=replace(code,'${(-((u * 1.14) % U)).toFixed(2)}px','${(-streetOffsets(u,S).near).toFixed(2)}px');
    code=replace(code,'children: [0, 1].map((g) =>\n                  s.jsxs(','children: Array.from({length:streetCopies(w,S)},(_,index)=>index).map((g) =>\n                  s.jsxs(');
    code=replace(code,'s.jsx(ce, { shots: p, lead: vs })','s.jsx(BackendScene, {})');
    code=code.replace('to: "/work",\n          ref: $,','to: "/about",\n          ref: $,').replace('"Explore all work"','"Conheça minha trajetória"').replace('"Selected screens"','"Minha história em imagens"');
    code=code.replace('n.unit.replace("+ yrs", "+ YEARS")','n.unit.replace("+ yrs", "+ ANOS")');
  }
  if(name==='Console-CyBRxdTz.js') {
    code='import {additionalStack, aiStudies} from "./custom/stack-catalog.mjs";\n'+code;
    code=replace(code,'src: B(`assets/logos/${e.id}.${e.ext || "webp"}`),','src: e.iconUrl || B(`assets/logos/${e.id}.${e.ext || "webp"}`),\n            onError: event => { const img=event.currentTarget; if (!img.dataset.fallback) { img.dataset.fallback="true"; img.src="/assets/logos/stack-fallback.svg"; } },');
    code=replace(code,'s.jsx("span", { className: "name", children: i.name }),','');
    code=replace(code,'      id: "tools",','      id: "tools",');
    const markStart=code.indexOf('function ss('),markEnd=code.indexOf('function ws(',markStart);
    code=code.slice(0,markStart)+`function ss({tool:e,className:c=""}) {
      return s.jsxs("span", {className:"sv-mark stack-tooltip-trigger "+c,tabIndex:0,role:"group","aria-label":e.name,"aria-describedby":"stack-tip-"+e.id,
        onKeyDown:event=>{if(event.key==="Escape")event.currentTarget.dataset.dismissed="true";},
        onMouseEnter:event=>{delete event.currentTarget.dataset.dismissed;},
        onFocus:event=>{delete event.currentTarget.dataset.dismissed;},
        children:[s.jsx("span",{
          className:"personal-stack-icon","aria-hidden":true,
          style:{maskImage:"url("+e.iconUrl+")",WebkitMaskImage:"url("+e.iconUrl+")"}
        }),s.jsxs("span",{className:"stack-tooltip",role:"tooltip",id:"stack-tip-"+e.id,children:[
          s.jsx("strong",{children:e.name}),s.jsx("span",{children:e.role})
        ]})]
      });
    }
    `+code.slice(markEnd);
    const toolsEnd=code.indexOf('const V = 1e3,');
    const section=code.slice(0,toolsEnd);
    const anchor=section.lastIndexOf('      ],');
    if(anchor<0)throw new Error('Tool section closing anchor missing');
    code=code.slice(0,anchor)+'        s.jsx("p", {className:"stack-notes", children:additionalStack}),\n        s.jsx("p", {className:"stack-studies", children:aiStudies}),\n        s.jsx("a", {className:"stack-credit", href:"https://simpleicons.org/", target:"_blank", rel:"noopener noreferrer", children:"Ícones: Simple Icons ↗"}),\n'+code.slice(anchor);
    code=replace(code,'["figma", "cursor", "claude"]','["php", "laravel", "api"]');
    code=replace(code,'["agents", "mcp", "claude"]','["llm", "mcp", "integração"]');
    code=replace(code,'["research", "ui", "ship"]','["orbit", "agency hub", "full stack"]');
    const words={
      'Pleurat':'Pedro','agents: 11 · tools: mcp':'Fluxo: agentes · MCP','/sena build the Badge component':'Interpretar uma despesa por áudio','Reading the registry — 12 parts, 3 pending.':'Fluxo ilustrativo de IA aplicada.','Handing off to the squad':'Validar a resposta antes de salvar','✓ badge.tsx + badge.css':'→ resposta estruturada','✓ contrast 4.9:1 — AA':'→ validação dos dados','registry updated':'→ persistência no backend','1.4s':'Exemplo','Figma → React':'Modelo → API','scope + variants':'contexto + entrada','WCAG AA, contrast':'validação + revisão','docs + registry':'logs + persistência','make the rail crop the second card':'Organizar a API em camadas','On it — a 24px reveal on the second.':'Controller → Service → Repository','Editing WorkRail.tsx':'Arquitetura de backend','drivers can\'t find the next pickup':'Organizar projetos e tarefas','14 interviews · 3 patterns':'Agency Hub · gestão de agências','Route first, list second':'Quadros, tarefas e controle de tempo','v3 · after the third round':'Representação conceitual','Watch fourteen people':'Entender o problema,','miss the same thing,':'construir, testar','then move it.':'e melhorar.','12 parts · 4 brands':'Interface · componentes','✓ 12 components rebuilt':'→ componentes reutilizáveis','ten years, and they all rhyme':'projetos próprios, contextos diferentes','the portfolio — type `help`, or press a key below':'Portfólio interativo — digite help ou escolha uma seção','Double-click to clear':'Clique duas vezes para limpar','AI tools':'Tecnologias','Empty state?':'Sem dados?','ask design':'Tratar na API'};
    for(const [from,to] of Object.entries(words))code=code.split(from).join(to);
  }
  if(name==='SiteAbout-59Cd-HJn.js') {
    code='import {Education} from "./custom/CareerContent.js";\nimport {photos as personalPhotos} from "./custom/personal-content.mjs";\n'+code;
    code=replace(code,'src: ts(n),\n                alt: "",','src: ts(n),\n                alt: personalPhotos.find(photo => photo.src === n)?.alt || "Foto pessoal",');
    code=replace(code,'d = u((l - j.top) / (l + j.height), 0, 1),','d = u(-j.top / Math.max(1, j.height - l), 0, 1),');
    code=replace(code,'g = Math.min(N, 0.45 * (l + j.height));','g = Math.max(0, c.scrollWidth - n.clientWidth);');
    code=replace(code,'s.jsx(ys, {})','s.jsx(Education, {})');
    code=code.replace("And yes — I'm still deep in UX/UI and Figma every day. ",'Minha próxima etapa conecta essa base à inteligência artificial. ');
    code=code.replace("That's the fun part.",'Integrar, validar e evoluir.');
    code=replace(code,'const gs = [\n  "Lead / Product",\n  "Design systems",\n  "Brand",\n  "AI workflows",\n  "UX / UI",\n  "Figma",\n];','const gs = ["Backend", "APIs REST", "Multi-tenant", "IA aplicada", "Full stack", "Laravel"];');
    code=code.replace('"How I work"','"Como trabalho"');
  }
  if(name==='SiteWork-CLDoUXyQ.js') {
    code='import {ProjectCards, Skills} from "./custom/CareerContent.js";\n'+code;
    code=replace(code,'e.jsx(oe, { stations: r })','null');
    const start=code.indexOf('      e.jsx(me, { title: n.ndaTitle');
    const end=code.indexOf('      e.jsx(se, {',start);
    if(start<0||end<0)throw new Error('Work content anchors missing');
    code=code.slice(0,start)+'      e.jsx(ProjectCards, {}),\n      e.jsx(Skills, {}),\n'+code.slice(end);
  }
  if(name==='SiteAi-CZJgsaIq.js') {
    code='import {ProjectCards, Skills} from "./custom/CareerContent.js";\n'+code;
    code=replace(code,'s.jsx(q, { mode: "ai", title: t.buildCaption, sub: t.buildHint })','s.jsx(ProjectCards, {})');
    code=replace(code,'s.jsx(W, { tools: D, title: N(t.stackTitle), sub: t.stackSub })','s.jsx(Skills, {})');
  }
  if(name==='SiteContact-BsBFIpEY.js') {
    code='import {WhatsAppButton} from "./custom/CareerContent.js";\n'+code;
    code=replace(code,'s.jsx(v, { as: "p", className: "sv-cn-sub", children: l.heroSub }),','s.jsx(v, { as: "p", className: "sv-cn-sub", children: l.heroSub }),\n            s.jsx(WhatsAppButton, {}),');
    code=replace(code,'ns = () => o.socials.map((e) => [e.label, e.url, rs(e.url)]);','ns = () => o.socials.filter(e => e.label !== "WhatsApp").map((e) => [e.label, e.url, rs(e.url)]);');
  }
  if(name==='theme-CvJK8SGN.js') {
    code='import {LanguageSelector} from "./custom/LanguageSelector.js";\n'+code;
    code=replace(code,'          n &&\n            e.jsx("button", {','          e.jsx(LanguageSelector, {}),\n          n &&\n            e.jsx("button", {');
    code=replace(code,'children: e.jsx(he, { className: "sv-brand-logo" })','children: e.jsx("span", { className: "personal-wordmark", children: "huguenin" })');
    code=replace(code,'      o &&\n        e.jsx("div", {\n          className: "sv-foot-lead",','      o && ie.length > 0 &&\n        e.jsx("div", {\n          className: "sv-foot-lead",');
  }
  if(name==='SiteCase-BNC6h7lD.js') {
    code='import {ProjectLinks} from "./custom/CareerContent.js";\n'+code;
    code=replace(code,'(h = a.results) != null && h.length','s.jsx(ProjectLinks, {name:a.name}),\n            (h = a.results) != null && h.length');
    code=code.replace('← All work','← Todos os projetos');
  }
  if(name==='Ledger-DHCOg5iE.js') code='export {ExperienceTimeline as L} from "./custom/CareerSections.js";\n';
  if(/\.js$/.test(name)) {
    for(const [from,to] of Object.entries({'Pleurat Shala':'Pedro Huguenin','Pristina · CET':'Rio de Janeiro · Brasil','Selected Work':'Projetos','Selected work':'Projetos','Next case study':'Próximo projeto','Explore project':'Conhecer projeto','Explore portfolio':'Explorar projetos','All rights reserved':'Todos os direitos reservados','What shipped':'Funcionalidades','Contact — ':'Contato — ','"Welcome"':'"Início"','"The record"':'"Trajetória"','"AI workflow"':'"IA aplicada"','"Profile"':'"Sobre"','"Contact"':'"Contato"','"Privacy"':'"Privacidade"','"Sitemap"':'"Navegação"','"Elsewhere"':'"Redes"','"Studio"':'"Localização"','"Response "':'"Resposta "','"Copied"':'"Copiado"','"Copy"':'"Copiar"'})) code=code.split(from).join(to);
  }
  return code;
}
