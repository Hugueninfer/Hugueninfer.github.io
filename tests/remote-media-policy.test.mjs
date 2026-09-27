import test from 'node:test';
import assert from 'node:assert/strict';
import {isApprovedRemoteMedia} from '../scripts/remote-media-policy.mjs';

test('remote media policy permits only portfolio screenshots and catalog icons', () => {
  const icons = new Set(['https://cdn.simpleicons.org/react']);

  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/02-dashboard.png', icons), true);
  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/login.jpg', icons), true);
  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/smart-waste-ai/raw/main/docs/screenshots/dashboard.png', icons), true);
  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/dashboard.png', icons), true);
  assert.equal(isApprovedRemoteMedia('https://cdn.simpleicons.org/react', icons), true);
  assert.equal(isApprovedRemoteMedia('https://github.com/another-user/orbit/raw/main/docs/screenshots/image.png', icons), false);
  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/agency-hub/raw/dev/docs/screenshots/login.jpg', icons), false);
  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/smart-waste-ai/raw/dev/docs/screenshots/dashboard.png', icons), false);
  assert.equal(isApprovedRemoteMedia('https://github.com/Hugueninfer/complyflow-ai/raw/dev/complyflow-ai/docs/screenshots/live/dashboard.png', icons), false);
  assert.equal(isApprovedRemoteMedia('https://example.com/tracker.png', icons), false);
});
