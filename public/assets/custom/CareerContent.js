import { j as h } from '../index-DwCqBxFL.js';
import { L as Link } from '../router-5ag9yOgs.js';
import { projects, photos, studies, whatsapp } from './personal-content.mjs';
import { Certifications } from './CareerSections.js';

export function CareerOverview() {
  return h.jsxs('section',{className:'sv-wrap sv-pad personal-intro',children:[
    h.jsxs('div',{children:[h.jsx('p',{className:'personal-eyebrow',children:'Pedro Huguenin · Engenharia de software'}),h.jsxs('h2',{children:['Uma base sólida.',h.jsx('br',{}),h.jsx('em',{children:'Uma nova direção.'})]}),h.jsx('p',{children:'PHP, Laravel, APIs, bancos de dados e sistemas multi-tenant fazem parte da minha experiência profissional. Minha transição para IA aplicada conecta essa experiência a projetos próprios e à especialização em andamento.'}),h.jsx(Link,{className:'sv-btn sv-btn--amber',to:'/ai',children:'Conheça meu foco em IA ↗'})]}),
    h.jsx('img',{src:photos[0].src,alt:photos[0].alt,loading:'lazy',width:1066,height:1600}),
  ]});
}
export function ProjectCards({compact=false}={}) {
  return h.jsxs('section',{className:'sv-wrap sv-pad personal-projects',id:'projetos',children:[
    h.jsx('p',{className:'personal-eyebrow',children:'Projetos próprios · Engenharia na prática'}),
    h.jsx('div',{className:'personal-project-grid',children:projects.map((p,i)=>h.jsxs('article',{className:'personal-project',children:[
      h.jsxs('div',{className:`personal-cover personal-cover-${p.id}`,'aria-label':`Diagrama conceitual de ${p.name}`,children:[
        h.jsx('span',{className:'personal-cover-number',children:`0${i+1}`}),
        h.jsx('strong',{children:p.name}),
        h.jsx('div',{className:'personal-flow',children:(p.id==='orbit'?['Organização','Rotina','IA aplicada']:['Projeto','Tarefas','Entrega']).map(s=>h.jsx('span',{children:s},s))}),
        h.jsx('small',{children:'Visão conceitual do projeto'}),
      ]}),
      h.jsx('p',{className:'personal-eyebrow',children:p.kind}),h.jsx('h2',{children:p.name}),h.jsx('p',{children:p.summary}),
      h.jsx('div',{className:'personal-tags',children:p.stack.map(s=>h.jsx('span',{children:s},s))}),
      h.jsxs('div',{className:'personal-actions',children:[h.jsx(Link,{className:'sv-btn sv-btn--ghost',to:`/work/${p.id}`,children:'Conhecer projeto ↗'}),h.jsx('span',{className:'personal-status',children:p.status})]}),
    ]},p.id))}),
    compact&&h.jsx(Link,{className:'sv-btn sv-btn--ghost',to:'/work',children:'Todos os projetos ↗'}),
  ]});
}
export function Skills() {
  const groups=[['Backend & dados','PHP · Laravel · Python · FastAPI · MySQL · PostgreSQL · Redis'],['Interfaces & qualidade','React · TypeScript · Vue · pytest · Vitest · Playwright'],['Entrega & integrações','Docker · Linux · Git · CI/CD · APIs REST · OpenAPI · Webhooks'],['IA · especialização em andamento','LLMs · RAG · Embeddings · MCP · Agentes · LangChain · LangGraph']];
  return h.jsxs('section',{className:'sv-wrap sv-pad personal-skills',children:[h.jsx('p',{className:'personal-eyebrow',children:'Base técnica & especialização'}),h.jsxs('h2',{children:['Tecnologia com ',h.jsx('em',{children:'propósito.'})]}),h.jsx('div',{className:'personal-skills-grid',children:groups.map(([name,text])=>h.jsxs('article',{children:[h.jsx('h3',{children:name}),h.jsx('p',{children:text})]},name))})]});
}
export function PhotoGallery() {
  return h.jsxs('section',{className:'sv-wrap sv-pad personal-gallery',children:[h.jsxs('h2',{children:['Além do ',h.jsx('em',{children:'código.'})]}),h.jsx('div',{className:'personal-photo-grid',children:photos.map((p,i)=>h.jsxs('figure',{className:`personal-photo personal-photo-${i}`,children:[h.jsx('img',{src:p.src,alt:p.alt,loading:'lazy',decoding:'async'}),h.jsx('figcaption',{children:p.label})]},p.src))})]});
}
export function Education() {
  return h.jsxs('section',{className:'sv-wrap sv-pad personal-education',id:'formacao',children:[h.jsx('p',{className:'personal-eyebrow',children:'Formação'}),h.jsxs('h2',{children:['Conhecimento para ',h.jsx('em',{children:'construir.'})]}),...studies.map(s=>h.jsxs('article',{children:[h.jsx('span',{className:'personal-eyebrow',children:s.date}),h.jsx('h3',{children:s.title}),h.jsx('strong',{children:s.school}),h.jsx('p',{children:s.text})]},s.title)),h.jsx(Certifications,{}),h.jsx('p',{children:'Português nativo · Inglês intermediário/profissional.'})]});
}
export function WhatsAppButton(){return h.jsx('a',{className:'sv-btn sv-btn--amber personal-whatsapp',href:whatsapp,target:'_blank',rel:'noopener noreferrer',children:'Conversar no WhatsApp ↗'});}
export function ProjectLinks({name}) {
  const project=projects.find(p=>p.name===name);
  if(!project)return null;
  return h.jsxs('div',{className:'personal-actions sv-pad',children:[
    h.jsx('a',{className:'sv-btn sv-btn--amber',href:project.repo,target:'_blank',rel:'noopener noreferrer',children:'Ver código no GitHub ↗'}),
    project.live&&h.jsx('a',{className:'sv-btn sv-btn--ghost',href:project.live,target:'_blank',rel:'noopener noreferrer',children:'Abrir demonstração ↗'}),
  ]});
}
