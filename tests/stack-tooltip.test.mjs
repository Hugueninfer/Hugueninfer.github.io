import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as s from 'react/jsx-runtime';
test('technology icon is keyboard reachable and linked to its named tooltip',async()=>{
 const source=await readFile(new URL('../public/assets/Console-CyBRxdTz.js',import.meta.url),'utf8');
 const fn=source.slice(source.indexOf('function ss('),source.indexOf('function ws('));
 const icon=vm.runInNewContext(fn+';ss({tool:{id:"php",name:"PHP",role:"Backend",iconUrl:"/php.svg"}})',{s});
 assert.equal(icon.props.tabIndex,0);
 const tip=icon.props.children.find(child=>child.props.role==='tooltip');
 assert.ok(tip);
 assert.equal(icon.props['aria-describedby'],tip.props.id);
 assert.equal(tip.props.children[0].props.children,'PHP');
});
