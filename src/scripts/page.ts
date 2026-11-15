// Scroll-spy for the section index, keyboard-accessible result tabs, and a
// language switch that keeps the reader on the same section.

const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
const langSwitch = document.querySelector<HTMLAnchorElement>('[data-lang-switch]');
const langBase = langSwitch?.getAttribute('href') ?? '/';

function setCurrent(id: string) {
  for (const link of links) {
    if (link.dataset.spy === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
  if (langSwitch) langSwitch.href = `${langBase}#${id}`;
}

const sections = links
  .map((l) => document.getElementById(l.dataset.spy ?? ''))
  .filter((s): s is HTMLElement => s !== null);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((e) => e.isIntersecting);
    if (visible.length) setCurrent(visible[0].target.id);
  },
  { rootMargin: '-35% 0px -60% 0px' },
);
sections.forEach((s) => observer.observe(s));
if (location.hash) setCurrent(location.hash.slice(1));

// On narrow screens the index is a collapsible <details>; close it after a jump.
const index = document.querySelector<HTMLDetailsElement>('.index');
const narrow = matchMedia('(max-width: 900px)');
if (index) {
  index.open = !narrow.matches;
  narrow.addEventListener('change', (e) => (index.open = !e.matches));
}
links.forEach((l) => l.addEventListener('click', () => {
  if (index && narrow.matches) index.open = false;
}));

for (const tabs of document.querySelectorAll<HTMLElement>('[data-tabs]')) {
  const buttons = [...tabs.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const select = (target: HTMLButtonElement) => {
    for (const b of buttons) {
      const on = b === target;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(b.getAttribute('aria-controls') ?? '');
      if (panel) panel.hidden = !on;
    }
  };
  buttons.forEach((b, i) => {
    b.addEventListener('click', () => select(b));
    b.addEventListener('keydown', (e) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      const jump = e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : null;
      if (step === undefined && jump === null) return;
      e.preventDefault();
      const next = buttons[jump ?? (i + step! + buttons.length) % buttons.length];
      select(next);
      next.focus();
    });
  });
}

// Theme toggle: flips between light and dark and remembers the choice.
const root = document.documentElement;
const systemDark = matchMedia('(prefers-color-scheme: dark)');
const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches);
document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {}
});
