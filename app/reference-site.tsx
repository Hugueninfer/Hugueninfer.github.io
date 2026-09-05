'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    __PLEURAT_LOCAL__?: {
      mount(element: HTMLElement): Promise<void>;
      unmount(element: HTMLElement): void;
    };
  }
}

export default function ReferenceSite() {
  useEffect(() => {
    const container = document.getElementById('reference-root');
    if (!container) return;
    const showError = () => {
      const status = document.getElementById('reference-status');
      if (status) status.textContent = 'Unable to load the local portfolio. Please refresh.';
    };
    const mount = () => { void window.__PLEURAT_LOCAL__?.mount(container).catch(showError); };
    let script = document.querySelector<HTMLScriptElement>('script[data-reference-entry]');
    if (window.__PLEURAT_LOCAL__) mount();
    else {
      if (!script) {
        script = document.createElement('script');
        script.type = 'module';
        script.src = '/assets/index-DwCqBxFL.js';
        script.dataset.referenceEntry = 'true';
        document.body.appendChild(script);
      }
      script.addEventListener('load', mount);
      script.addEventListener('error', showError);
    }
    return () => {
      script?.removeEventListener('load', mount);
      script?.removeEventListener('error', showError);
      queueMicrotask(() => {
        if (!container.isConnected) window.__PLEURAT_LOCAL__?.unmount(container);
      });
    };
  }, []);

  return (
    <div id="reference-root" suppressHydrationWarning>
      <div id="reference-status" role="status" style={{ padding: '40px', fontFamily: 'General Sans, sans-serif' }}>
        Pedro Huguenin
      </div>
    </div>
  );
}
