import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as r from 'react';
import * as h from 'react/jsx-runtime';
import {renderToStaticMarkup} from 'react-dom/server';
test('language menu exposes a collapsed accessible trigger instead of native options',async()=>{
 const source=await readFile(new URL('../reference/custom/LanguageSelector.js',import.meta.url),'utf8');
 const code=source.replace(/^import .*;\n/gm,'').replace('export function','function');
 const Component=vm.runInNewContext(code+';LanguageSelector',{h,r,getLocale:()=> 'pt',setLocale:()=>{}});
 const html=renderToStaticMarkup(h.jsx(Component,{}));
 assert.match(html,/aria-haspopup="menu"/);
 assert.match(html,/aria-expanded="false"/);
 assert.doesNotMatch(html,/<select/);
 assert.match(html,/>PT</);
});
