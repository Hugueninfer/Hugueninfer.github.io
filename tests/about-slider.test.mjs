import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as s from 'react/jsx-runtime';
import {buildPersonalContent} from '../reference/custom/personal-content.mjs';
test('About mounts original scroll-driven slider with all five personal photos',async()=>{
 const source=await readFile(new URL('../public/assets/SiteAbout-59Cd-HJn.js',import.meta.url),'utf8');
 const code=source.slice(source.indexOf('function Hs()'),source.indexOf('export { Hs'));
 const data=buildPersonalContent();
 const context={s,P:data.COPY,k:data.SITE,X:data.LIFE_SHOTS,Y:data.COMPANIES,G:()=>[false,()=>{}],K:()=>['',()=>{}],Q:()=>{},ss:()=>'',R:x=>x};
 for(const name of ['Z','us','A','v','fs','ws','ls','ys','J','PhotoGallery','Education'])context[name]=name;
 const tree=vm.runInNewContext(code+';Hs()',context);
 const slider=tree.props.children.find(c=>c.type==='fs');
 assert.ok(slider,'original scroll slider was replaced');
 assert.equal(slider.props.shots.length,5);
});
