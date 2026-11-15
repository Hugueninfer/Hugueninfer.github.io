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
| `src/content/site.ts` | Home page strings: profile, experience, education, certifications, results, stack, contact |
| `src/content/projects.ts` | Projects: card summary and the full case study for each one |
| `src/content/i18n.ts` | `t()` pairs, locale resolution and localized URLs |
| `src/components/Portfolio.astro` | Home page: masthead, sidebar, sections |
| `src/components/ProjectPage.astro` | Case-study page for one project |
| `src/components/sections/` | One component per home section |
| `src/pages/` | English routes at `/`, Portuguese at `/pt/`, case studies at `projects/<slug>/` |
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

Each translatable string is a `t('english', 'português')` pair.

- **Project:** add an entry to `src/content/projects.ts` with a unique `slug`; `featured: true` puts it in the large cards. Its page is generated at `/projects/<slug>/` and `/pt/projects/<slug>/`.
- **Certification:** add an item to `certifications.items` in `src/content/site.ts`; set `url` to show a credential link.

The tests fail if a locale is missing a field, a slug repeats, or a project lacks a repository link, its four summary blocks or its case-study sections.

## Credits

Brand logos from [Simple Icons](https://simpleicons.org/) (CC0) and outline icons from [Tabler Icons](https://tabler.io/icons) (MIT), rendered to inline SVG at build time. Trademarks belong to their owners.

Layout inspired by the editorial style of [ashwingupta.dev](https://www.ashwingupta.dev/). The code and content here are original; no affiliation.
