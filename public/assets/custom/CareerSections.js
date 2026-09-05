import { j as h } from '../index-DwCqBxFL.js';
import { experience } from './personal-content.mjs';
export function Certifications(){
 const items=[['Scrum Fundamentals','2024','Agilidade',''],['OWASP Top 10','2024','Segurança',''],['React e TypeScript','2022','Frontend','Alura'],['Laravel MVC','2021','Backend','Alura']];
 return h.jsxs('div',{className:'career-certifications',children:[h.jsx('p',{className:'career-eyebrow',children:'Formação complementar'}),h.jsx('h2',{children:'Certificações'}),h.jsx('div',{className:'certificate-grid',children:items.map(([title,year,area,issuer])=>h.jsxs('article',{className:'certificate-card',children:[h.jsxs('div',{className:'certificate-top',children:[h.jsx('svg',{viewBox:'0 0 40 40',width:36,height:36,'aria-hidden':true,children:h.jsx('path',{d:'M20 4 25 7l6 1 1 6 4 6-4 5-1 6-6 1-5 4-5-4-6-1-1-6-4-5 4-6 1-6 6-1ZM13 20l5 5 9-10',fill:'none',stroke:'currentColor',strokeWidth:1.5})}),h.jsx('span',{children:year})]}),h.jsx('h3',{children:title}),h.jsx('p',{children:issuer||area}),issuer&&h.jsx('span',{className:'certificate-area',children:area})]},title))})]});
}

export function ExperienceTimeline() {
  return h.jsxs('section',{className:'sv-wrap sv-pad career-timeline',id:'experiencia','data-badge':'Trajetória',children:[
    h.jsx('p',{className:'career-eyebrow',children:'2021 — hoje · Engenharia de software'}),
    h.jsx('h2',{children:h.jsx('em',{children:'Experiência profissional.'})}),
    h.jsx('p',{className:'career-lead',children:'Experiência em backend, aplicações full stack e integrações, com foco em desempenho, automação e evolução de sistemas.'}),
    h.jsx('ol',{className:'career-entries',children:experience.map((job,index)=>{
      const split=job.note.indexOf('. ');
      const description=split<0?job.note:job.note.slice(0,split+1);
      const result=split<0?'':job.note.slice(split+2);
      return h.jsxs('li',{className:'career-entry',children:[
        h.jsxs('div',{className:'career-period',children:[h.jsx('span',{className:'career-number',children:String(index+1).padStart(2,'0')}),h.jsx('span',{children:job.span}),job.span.includes('atual')&&h.jsx('span',{className:'career-current',children:'Atual'})]}),
        h.jsxs('article',{className:'career-job',children:[h.jsx('h3',{children:job.name}),h.jsx('p',{className:'career-role',children:job.role}),h.jsx('p',{className:'career-description',children:description}),result&&h.jsxs('div',{className:'career-impact',children:[h.jsx('span',{children:'Impacto'}),h.jsx('p',{children:result})]})]}),
      ]},job.name);
    })}),
  ]});
}

export function BackendScene(){
 const nodes=[{x:48,name:'Backend',detail:'APIs · regras · segurança'},{x:292,name:'IA aplicada',detail:'contexto · modelo · revisão'},{x:536,name:'Dados',detail:'validação · persistência'}];
 return h.jsxs('section',{className:'sv-wrap sv-pad backend-scene','aria-labelledby':'backend-scene-heading',children:[
  h.jsx('p',{className:'career-eyebrow',children:'A próxima etapa'}),
  h.jsxs('h2',{id:'backend-scene-heading',children:['Engenharia que conecta.',h.jsx('br',{}),h.jsx('em',{children:'IA que faz sentido.'})]}),
  h.jsx('p',{className:'career-lead',children:'Da aplicação ao modelo, da resposta ao dado validado. Minha transição para IA aplicada parte de uma base consistente de engenharia de software.'}),
  h.jsxs('svg',{viewBox:'0 0 780 330',role:'img','aria-label':'Fluxo ilustrativo animado: backend, inteligência artificial e dados conectados, com revisão humana.',children:[
    h.jsx('rect',{x:1,y:1,width:778,height:328,rx:18,className:'backend-bg'}),
    ...[70,130,190,250].map(y=>h.jsx('path',{d:`M24 ${y} H756`,className:'backend-grid'},y)),
    h.jsx('path',{d:'M246 151H292 M490 151H536',className:'backend-wire'}),
    h.jsx('path',{d:'M635 221V280H147V221',className:'backend-return'}),
    ...nodes.map((n,i)=>h.jsxs('g',{className:`backend-node backend-node-${i}`,children:[
      h.jsx('rect',{x:n.x,y:81,width:196,height:142,rx:12,className:'backend-card'}),
      h.jsx('circle',{cx:n.x+25,cy:106,r:4,className:'backend-light'}),
      h.jsx('text',{x:n.x+25,y:153,className:'backend-name',children:n.name}),
      h.jsx('text',{x:n.x+25,y:181,className:'backend-detail',children:n.detail}),
    ]},n.name)),
    h.jsx('path',{d:'M256 144l9 7-9 7m244-14 9 7-9 7',className:'backend-arrow'}),
    h.jsx('text',{x:390,y:306,textAnchor:'middle',className:'backend-detail',children:'VALIDAR → OBSERVAR → MELHORAR'}),
    h.jsx('circle',{r:5,className:'backend-packet',children:h.jsx('animateMotion',{dur:'5s',repeatCount:'indefinite',path:'M147 151 H635 V280 H147 Z'})}),
    h.jsx('circle',{r:4,className:'backend-packet',children:h.jsx('animateMotion',{dur:'5s',begin:'2.5s',repeatCount:'indefinite',path:'M147 151 H635 V280 H147 Z'})}),
  ]}),
  h.jsx('p',{className:'backend-caption',children:'Fluxo conceitual de uma aplicação com IA: integrar, validar e evoluir.'}),
 ]});
}
