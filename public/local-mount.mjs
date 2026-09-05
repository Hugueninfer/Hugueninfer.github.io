/** Lifecycle bridge between the persistent app shell and the reference renderer. */
export function createLocalMount({ loadContent, applyContent, createRoot, render }) {
  let currentElement;
  let currentRoot;
  let pendingElement;
  let contentPromise;
  let generation = 0;

  return {
    async mount(element) {
      if (!element || (currentElement === element && currentRoot)) return;
      const ticket = ++generation;
      pendingElement = element;
      contentPromise ??= Promise.resolve().then(loadContent).then(applyContent);
      await contentPromise;
      if (ticket !== generation || !element.isConnected) return;
      currentRoot?.unmount();
      currentElement = element;
      currentRoot = createRoot(element);
      currentRoot.render(render());
      pendingElement = undefined;
    },
    unmount(element) {
      if (pendingElement === element) { generation++; pendingElement = undefined; }
      if (currentElement !== element) return;
      currentRoot?.unmount();
      currentRoot = undefined;
      currentElement = undefined;
    },
  };
}
