import test from 'node:test';
import assert from 'node:assert/strict';
import {fitDiagramLabel} from '../reference/custom/diagram-label-fit.mjs';

test('localized diagram labels shrink only when their narrow SVG box requires it', () => {
  assert.deepEqual(fitDiagramLabel('Add to lib', 92), {fontSize:'6.1px',letterSpacing:'0em'});
  assert.deepEqual(fitDiagramLabel('Ship', 56), {fontSize:'7.7px',letterSpacing:'0em'});
  assert.deepEqual(fitDiagramLabel('Reuse', 92), {fontSize:'9px',letterSpacing:'0em'});
  assert.equal(fitDiagramLabel('New pattern', 110), undefined);
});
