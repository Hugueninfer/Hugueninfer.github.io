// Build-time icon lookup. `si:<slug>` is a brand logo from Simple Icons, drawn
// in its brand colour; `tb:<name>` is an outline icon from Tabler, drawn in ink.
// Both render to inline SVG strings, so no icon code ships to the browser.

import * as simpleIcons from 'simple-icons';
import tablerNodes from '@tabler/icons/tabler-nodes-outline.json' with { type: 'json' };

type SimpleIcon = { slug: string; title: string; hex: string; path: string };
type TablerNode = [string, Record<string, string>];

const brands = new Map<string, SimpleIcon>(
  Object.values(simpleIcons as Record<string, SimpleIcon>)
    .filter((icon) => icon && typeof icon === 'object' && 'slug' in icon)
    .map((icon) => [icon.slug, icon]),
);
const outlines = tablerNodes as unknown as Record<string, TablerNode[]>;

const escape = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function hasIcon(key: string): boolean {
  const [set, name] = key.split(':');
  return set === 'si' ? brands.has(name) : set === 'tb' ? name in outlines : false;
}

/** Inline SVG markup for an icon key; throws on an unknown key so typos fail the build. */
export function iconSvg(key: string, size = 24): string {
  const [set, name] = key.split(':');
  if (set === 'si' && brands.has(name)) {
    const icon = brands.get(name)!;
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="#${icon.hex}" aria-hidden="true"><path d="${icon.path}"/></svg>`;
  }
  if (set === 'tb' && name in outlines) {
    const children = outlines[name]
      .map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${escape(v)}"`).join(' ')}/>`)
      .join('');
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${children}</svg>`;
  }
  throw new Error(`Unknown icon "${key}"`);
}
