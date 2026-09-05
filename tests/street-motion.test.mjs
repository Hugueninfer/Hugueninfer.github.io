import test from 'node:test';
import assert from 'node:assert/strict';
const motion=await import('../reference/custom/street-motion.mjs').catch(()=>({}));
test('background does not reset when five-company foreground wraps',()=>{
 assert.equal(typeof motion.streetOffsets,'function');
 const before=motion.streetOffsets(1099,1100),after=motion.streetOffsets(1101,1100);
 assert.ok(Math.abs(after.far-before.far)<1);
 assert.equal(after.mid,1);
});
test('repeated city covers viewport at every phase',()=>{
 assert.equal(typeof motion.streetCopies,'function');
 assert.equal(motion.streetCopies(2320,1100),4);
});
