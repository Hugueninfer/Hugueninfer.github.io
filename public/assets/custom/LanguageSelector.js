import {j as h} from '../index-DwCqBxFL.js';
import {r} from '../router-5ag9yOgs.js';
import {getLocale,setLocale} from './i18n.mjs';
export function LanguageSelector(){
 const [open,setOpen]=r.useState(false),root=r.useRef(null),trigger=r.useRef(null),menu=r.useRef(null);
 const id=r.useId(),locale=getLocale(),choices=['pt','en','de'];
 const close=(restore=false)=>{setOpen(false);if(restore)trigger.current?.focus();};
 r.useEffect(()=>{
  if(!open)return;
  menu.current?.querySelector('[aria-checked="true"]')?.focus();
  const outside=event=>{if(!root.current?.contains(event.target))setOpen(false);};
  document.addEventListener('pointerdown',outside);
  return ()=>document.removeEventListener('pointerdown',outside);
 },[open]);
 const keyboard=event=>{
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close(true);return;}
  if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
  event.preventDefault();
  if(!open){setOpen(true);return;}
  const items=[...menu.current.querySelectorAll('[role="menuitemradio"]')];
  const current=items.indexOf(document.activeElement);
  const next=event.key==='Home'?0:event.key==='End'?items.length-1:(current+(event.key==='ArrowDown'?1:-1)+items.length)%items.length;
  items[next]?.focus();
 };
 return h.jsxs('div',{className:'language-selector',ref:root,onKeyDown:keyboard,onBlur:event=>{if(!event.currentTarget.contains(event.relatedTarget))setOpen(false);},children:[
  h.jsx('button',{type:'button',className:'language-trigger',ref:trigger,'aria-label':'Idioma','aria-haspopup':'menu','aria-expanded':open,'aria-controls':id,onClick:()=>setOpen(value=>!value),children:locale.toUpperCase()}),
  open&&h.jsx('div',{id,ref:menu,className:'language-menu',role:'menu','aria-label':'Idioma',children:choices.map(value=>h.jsxs('button',{
   type:'button',role:'menuitemradio','aria-checked':value===locale,className:'language-option',tabIndex:0,
   onClick:()=>{close(true);if(value!==locale)setLocale(value);},
   children:[h.jsx('span',{children:value.toUpperCase()}),h.jsx('span',{'aria-hidden':true,className:'language-check',children:value===locale?'✓':''})],
  },value))}),
 ]});
}
