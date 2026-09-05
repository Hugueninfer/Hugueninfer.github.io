import {translations} from './translations.mjs';
let activeLocale;
export function getLocale(storage){
 if(!storage&&activeLocale)return activeLocale;
 if(!storage&&typeof location!=='undefined'){const query=new URL(location.href).searchParams.get('lang');if(['pt','en','de'].includes(query))return query;}
 try { const value=(storage??globalThis.localStorage)?.getItem('portfolio-language');return ['pt','en','de'].includes(value)?value:'pt'; } catch{return 'pt';}
}
export function translateText(value,locale=getLocale()){
 if(typeof value!=='string')return value;
 const clean=value.trim(), key=clean.replace(/\s+/g,' '), pair=translations[key];
 const translated=pair?.[locale==='pt'?2:locale==='de'?1:0];
 if(translated!==undefined)return value.slice(0,value.length-value.trimStart().length)+translated+value.slice(value.trimEnd().length);
 const unknown=/^(.*): unknown command — `help` lists them$/.exec(value);
 if(unknown)return locale==='de'?`${unknown[1]}: unbekannter Befehl — \`help\` zeigt alle Befehle`:locale==='pt'?`${unknown[1]}: comando desconhecido — use \`help\``:value;
 const absent=/^no project called "(.*)" — try `list`$/.exec(value);
 if(absent)return locale==='de'?`Kein Projekt namens "${absent[1]}" — \`list\` ausprobieren`:locale==='pt'?`Nenhum projeto chamado "${absent[1]}" — use \`list\``:value;
 if(locale==='pt')return value;
 const prefixPatterns=[['↳ ', '↳ ', '↳ '],['opening the ', 'opening ', 'Öffne '],['A walk across the board: ', 'A walk across the board: ', 'Ein Rundgang über die Platine: ']];
 for(const [prefix,en,de] of prefixPatterns)if(value.startsWith(prefix))return (locale==='de'?de:en)+translateText(value.slice(prefix.length),locale);
 if(value.includes(' — TODOS OS DIREITOS RESERVADOS'))return value.replace('TODOS OS DIREITOS RESERVADOS',locale==='de'?'ALLE RECHTE VORBEHALTEN':'ALL RIGHTS RESERVED');
 // Rich headings are split into emphasis fragments by the reference renderer.
 if(clean.includes('*'))return value.split('*').map(part=>translateText(part,locale)).join('*');
 if(value.includes(' · '))return value.split(' · ').map(part=>translateText(part,locale)).join(' · ');
 const sentences=value.split(/(?<=\.)\s+(?=[A-ZÀ-Ý])/);if(sentences.length>1)return sentences.map(part=>translateText(part,locale)).join(' ');
 if(/^\d{2}\/\d{4} — atual$/.test(clean))return value.replace('atual',locale==='de'?'heute':'present');
 return value;
}
const protectedKeys=new Set(['id','href','url','src','iconUrl','repo','live','key','slug','mark','ext','className','path','d']);
export function translateContent(value,locale=getLocale(),key=''){
 if(protectedKeys.has(key))return value;
 if(typeof value==='string')return translateText(value,locale);
 if(Array.isArray(value))return value.map(item=>translateContent(item,locale));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,translateContent(v,locale,k)]));
 return value;
}
const visibleProps=new Set(['children','title','sub','desc','label','alt','placeholder','aria-label','aria-description','data-badge','caption','cap']);
export function translateProps(props,locale=getLocale()){
 if(!props)return props;
 const result={...props};
 const leaf=v=>typeof v==='string'?translateText(v,locale):Array.isArray(v)?v.map(leaf):v;
 for(const key of visibleProps)if(key in result)result[key]=leaf(result[key]);
 return result;
}
export function localizedRuntime(runtime){
 return {...runtime,jsx:(type,props,key)=>runtime.jsx(type,translateProps(props),key),jsxs:(type,props,key)=>runtime.jsxs(type,translateProps(props),key)};
}
export function setLocale(locale){
 if(!['pt','en','de'].includes(locale))return;
 try{localStorage.setItem('portfolio-language',locale);}catch{}
 // Reload only the current URL: no route, hash, query or animation state is rewritten.
 const url=new URL(location.href);url.searchParams.set('lang',locale);location.assign(url.href);
}
export function initializeLocale(){
 if(typeof document==='undefined')return;
 const requested=new URL(location.href).searchParams.get('lang');
 if(['pt','en','de'].includes(requested)){try{localStorage.setItem('portfolio-language',requested);}catch{}}
 activeLocale=getLocale();
 document.documentElement.lang={pt:'pt-BR',en:'en',de:'de'}[activeLocale];
}
