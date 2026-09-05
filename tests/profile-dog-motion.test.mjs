import assert from 'node:assert/strict';
import test from 'node:test';
import * as family from '../reference/custom/family-spec.mjs';

test('dog starts on the ground and advances continuously with scroll progress', () => {
  assert.equal(typeof family.profileDogFrame, 'function');
  for (const [progress, x] of [[0, 490], [.25, 527.5], [.5, 565], [.75, 602.5], [1, 640]]) {
    const frame = family.profileDogFrame(progress);
    assert.equal(frame.x, x);
    assert.equal(frame.y, 350, 'the dog must not float above the room floor');
  }
});

test('dog gait follows distance and reverses exactly when scrolling back', () => {
  assert.equal(typeof family.profileDogFrame, 'function');
  const first = family.profileDogFrame(.0625);
  assert.ok(first.nearAngle > 0 && first.farAngle < 0, 'legs must move in opposing phases');
  family.profileDogFrame(.8);
  assert.deepEqual(family.profileDogFrame(.0625), first, 'pose must not depend on elapsed time');
  assert.equal(family.profileDogFrame(0).nearAngle, 0);
});

test('dog remains within the scene on overscroll and invalid input', () => {
  assert.equal(typeof family.profileDogFrame, 'function');
  assert.equal(family.profileDogFrame(-1).x, 490);
  assert.equal(family.profileDogFrame(2).x, 640);
  assert.equal(family.profileDogFrame(NaN).x, 490);
});
