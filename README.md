# Pedro Huguenin — Portfolio

Personal portfolio of Pedro Huguenin, software engineer working on backend, full stack and applied AI.

Live: https://hugueninfer.github.io/ · Portuguese: https://hugueninfer.github.io/pt/

## Stack

- [Astro](https://astro.build/) static site, no client framework.
- Plain CSS with design tokens in `src/styles/global.css`.
- One small script (`src/scripts/page.ts`) for the section index, result tabs and language switch.

## Structure

| Path | Purpose |
|---|---|
| `src/content/site.ts` | Every string on the site, in English and Portuguese |
| `src/components/Portfolio.astro` | Page shell: masthead, sidebar, sections |
| `src/components/sections/` | One component per section |
| `src/pages/index.astro`, `src/pages/pt/index.astro` | English and Portuguese routes |
| `tests/` | Content consistency and build output checks |

## Develop

Requires Node.js 22+.

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # static output in out/
npm test          # run after build
```

Pushing to `main` builds, tests and publishes to GitHub Pages.

## Editing content

Add or change a project in `src/content/site.ts`. Each translatable string is a `t('english', 'português')` pair; the tests fail if a locale is missing a field or a project lacks a repository link or one of its four story blocks.

## Credits

Layout inspired by the editorial style of [ashwingupta.dev](https://www.ashwingupta.dev/). The code and content here are original; no affiliation.
