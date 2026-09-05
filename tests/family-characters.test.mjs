import assert from 'node:assert/strict';
import test from 'node:test';

let family = {};
try {
  family = await import('../reference/custom/family-spec.mjs');
} catch {}

test('Maltese state distinguishes Profile entry from the door pose', () => {
  assert.equal(typeof family.dogClassName, 'function', 'dogClassName must be implemented');
  assert.equal(family.dogClassName({ scene: 'profile', active: false }), 'maltese is-profile');
  assert.equal(family.dogClassName({ scene: 'profile', active: true }), 'maltese is-profile is-active');
  assert.equal(family.dogClassName({ scene: 'door', active: false }), 'maltese is-door');
});

test('wife state adds a gesture class only during Profile interaction', () => {
  assert.equal(typeof family.wifeClassName, 'function', 'wifeClassName must be implemented');
  assert.equal(family.wifeClassName(false), 'blond-wife');
  assert.equal(family.wifeClassName(true), 'blond-wife is-active');
});

test('SVG ids are safe and remain unique per character instance', () => {
  assert.equal(typeof family.svgId, 'function', 'svgId must be implemented');
  assert.equal(family.svgId('profile dog', 'fur clip'), 'profile-dog-fur-clip');
  assert.equal(family.svgId('door/dog', 'fur clip'), 'door-dog-fur-clip');
  assert.notEqual(family.svgId('profile dog', 'fur clip'), family.svgId('door/dog', 'fur clip'));
});

test('character anatomy exposes every independently animated part', () => {
  assert.deepEqual(family.MALTESE_PARTS, ['body', 'head', 'ear-near', 'ear-far', 'leg-near', 'leg-far', 'tail']);
  assert.deepEqual(family.WIFE_PARTS, ['body', 'head', 'hair', 'arm-wave', 'forearm-wave']);
});
