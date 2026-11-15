// A `{ en, pt }` pair is a translatable leaf; `localize` resolves a whole tree
// of them to plain strings for one locale.

export type Locale = 'en' | 'pt';
export const locales: Locale[] = ['en', 'pt'];

export type T = { en: string; pt: string };
export const t = (en: string, pt: string): T => ({ en, pt });

export type Localized<V> = V extends T
  ? string
  : V extends readonly (infer I)[]
    ? Localized<I>[]
    : V extends object
      ? { [K in keyof V]: Localized<V[K]> }
      : V;

const isPair = (v: unknown): v is T =>
  !!v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).sort().join() === 'en,pt';

export function localize<V>(value: V, locale: Locale): Localized<V> {
  if (isPair(value)) return value[locale] as Localized<V>;
  if (Array.isArray(value)) return value.map((v) => localize(v, locale)) as Localized<V>;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localize(v, locale)]),
    ) as Localized<V>;
  }
  return value as Localized<V>;
}

/** Site-relative URL for a path in the given locale (`/x/` or `/pt/x/`). */
export function href(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return locale === 'pt' ? `/pt/${clean}` : `/${clean}`;
}
