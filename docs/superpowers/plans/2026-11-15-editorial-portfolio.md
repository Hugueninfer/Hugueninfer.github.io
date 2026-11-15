# Editorial Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild hugueninfer.github.io as a bilingual (EN default, PT at `/pt/`) editorial one-page portfolio.

**Architecture:** Astro static site. One typed content module (`src/content/site.ts`) holds every string in `en` and `pt`; `src/pages/index.astro` and `src/pages/pt/index.astro` render the same `Portfolio.astro` layout with a locale. One small inline script handles scroll-spy and the results tabs.

**Tech Stack:** Astro 5, TypeScript, plain CSS, node:test for content/build checks.

**Spec:** `docs/superpowers/specs/2026-11-15-editorial-portfolio-design.md`

## Global Constraints
- Output directory `out/` (consumed by `.github/workflows/deploy-github-pages.yml`).
- No content copied from the reference site; no recommendations/awards sections.
- Every user-visible string exists in both `en` and `pt`.
- Commits: English, conventional, small, no AI co-author trailer.

## Review Focus
- Phone width (375px): sidebar collapses into a top bar, no horizontal scroll.
- Language switch keeps the current section anchor.
- Missing `live` URL on a project: card shows only the repo link.
- `prefers-reduced-motion`: no smooth scrolling / transitions.
- Direct load of `/pt/` on GitHub Pages resolves (`out/pt/index.html` exists).

---

### Task 1: Clean slate + Astro scaffold
**Files:** delete old Next/vinext/reference tree; create `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`.
- [ ] Remove old app, reference, public, scripts, tests, components, hooks, lib, configs.
- [ ] Add Astro (`outDir: './out'`, `site: 'https://hugueninfer.github.io'`).
- [ ] `npm run build` produces `out/index.html`. Commit.

### Task 2: Content module
**Files:** `src/content/site.ts`, `tests/content.test.mjs`
**Produces:** `type Locale = 'en' | 'pt'`; `getContent(locale: Locale): SiteContent`.
- [ ] Test: every project has name, repo URL on github.com/Hugueninfer, and non-empty context/approach/system/outcome in both locales; EN and PT have the same section ids.
- [ ] Implement content. Commit.

### Task 3: Layout, sidebar, sections, styles
**Files:** `src/layouts/Base.astro`, `src/components/*.astro`, `src/styles/global.css`, `src/pages/index.astro`, `src/pages/pt/index.astro`
- [ ] Test (`tests/build.test.mjs`, runs after build): `out/index.html` has `lang="en"` and all section ids `overview about trajectory results projects builds stack contact`; `out/pt/index.html` has `lang="pt-BR"`; each links to the other locale.
- [ ] Implement. Commit per component group.

### Task 4: Interactions + CI
**Files:** `src/scripts/page.ts`, `.github/workflows/deploy-github-pages.yml`, `README.md`
- [ ] Scroll-spy highlights index item; results tabs switch panels (keyboard accessible).
- [ ] Workflow: `npm ci` → `npm run build` → `npm test` → upload `out`.
- [ ] Verify in browser at desktop and 375px. Commit.
