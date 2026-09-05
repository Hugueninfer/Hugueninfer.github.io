import test from 'node:test';
import assert from 'node:assert/strict';
import { createLocalMount } from '../public/local-mount.mjs';

function setup(loadContent = async () => ({ title: 'Local' })) {
  const events = [];
  const controller = createLocalMount({
    loadContent,
    applyContent: value => events.push(['content', value.title]),
    createRoot: element => {
      events.push(['create', element.id]);
      return { render: () => events.push(['render', element.id]), unmount: () => events.push(['unmount', element.id]) };
    },
    render: () => 'portfolio',
  });
  return { controller, events };
}

test('repeated mount on the same container never creates a duplicate root', async () => {
  const { controller, events } = setup();
  const element = { id: 'one', isConnected: true };
  await controller.mount(element);
  await controller.mount(element);
  assert.deepEqual(events, [['content', 'Local'], ['create', 'one'], ['render', 'one']]);
});

test('remount releases the previous renderer and keeps one content snapshot', async () => {
  const { controller, events } = setup();
  await controller.mount({ id: 'one', isConnected: true });
  const second = { id: 'two', isConnected: true };
  await controller.mount(second);
  controller.unmount(second);
  assert.deepEqual(events, [['content', 'Local'], ['create', 'one'], ['render', 'one'], ['unmount', 'one'], ['create', 'two'], ['render', 'two'], ['unmount', 'two']]);
});

test('a disconnected container does not mount after content finishes loading', async () => {
  let finish;
  const { controller, events } = setup(() => new Promise(resolve => { finish = resolve; }));
  const element = { id: 'one', isConnected: true };
  const pending = controller.mount(element);
  await Promise.resolve();
  element.isConnected = false;
  finish({ title: 'Local' });
  await pending;
  assert.equal(events.some(([type]) => type === 'create'), false);
});
