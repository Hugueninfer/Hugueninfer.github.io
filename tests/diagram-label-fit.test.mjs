import test from 'node:test';
import assert from 'node:assert/strict';
import {fitDiagramLabel} from '../reference/custom/diagram-label-fit.mjs';

test('localized diagram labels shrink only when their narrow SVG box requires it', () => {
  assert.deepEqual(fitDiagramLabel('Add to lib', 92), {style:{fontSize:'9px',letterSpacing:'0em'},textLength:84,lengthAdjust:'spacingAndGlyphs'});
  assert.deepEqual(fitDiagramLabel('Ship', 56), {style:{fontSize:'9px',letterSpacing:'0em'},textLength:48,lengthAdjust:'spacingAndGlyphs'});
  assert.deepEqual(fitDiagramLabel('Reuse', 92), {style:{fontSize:'9px',letterSpacing:'0em'},textLength:84,lengthAdjust:'spacingAndGlyphs'});
  assert.equal(fitDiagramLabel('New pattern', 110), undefined);
});
