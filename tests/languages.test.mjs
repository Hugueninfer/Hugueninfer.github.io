import test from 'node:test';
import assert from 'node:assert/strict';
import {getLocale,translateText,translateContent,translateProps} from '../reference/custom/i18n.mjs';
test('locale defaults safely and accepts only supported stored preferences',()=>{
 assert.equal(getLocale({getItem:()=>null}),'pt');
 assert.equal(getLocale({getItem:()=> 'de'}),'de');
 assert.equal(getLocale({getItem:()=> 'fr'}),'pt');
 assert.equal(getLocale({getItem:()=>{throw Error('blocked')}}),'pt');
});
test('translation retains rich-text markers and spacing while leaving names intact',()=>{
 assert.equal(translateText(' IA aplicada ','en'),' Applied AI ');
 assert.equal(translateText('*IA aplicada.*','de'),'*Angewandte KI.*');
 assert.equal(translateText('PostgreSQL','de'),'PostgreSQL');
});
test('content translation never changes routes or identifiers',()=>{
 const data={id:'Sobre',href:'/about',label:'Sobre',children:['Contato'],src:'/media/pedro/portrait.jpeg'};
 assert.deepEqual(translateContent(data,'de'),{id:'Sobre',href:'/about',label:'Über mich',children:['Kontakt'],src:'/media/pedro/portrait.jpeg'});
 assert.equal(data.label,'Sobre');
});
test('JSX translation preserves events, refs, class names and element objects',()=>{
 const handler=()=>{}, element={type:'em',props:{children:'Sobre'}};
 const props={className:'Sobre',id:'Sobre',onClick:handler,children:['Sobre',element],'aria-label':'Contato',title:'Sobre'};
 const result=translateProps(props,'en');
 assert.equal(result.children[0],'About');assert.equal(result.children[1],element);
 assert.equal(result.onClick,handler);assert.equal(result.className,'Sobre');assert.equal(result.id,'Sobre');
 assert.equal(result['aria-label'],'Contact');assert.equal(result.title,'About');
});
test('terminal messages translate without changing command names',()=>{
 assert.equal(translateText('oops: unknown command — `help` lists them','de'),'oops: unbekannter Befehl — `help` zeigt alle Befehle');
 assert.equal(translateText('no project called "test" — try `list`','de'),'Kein Projekt namens "test" — `list` ausprobieren');
});
