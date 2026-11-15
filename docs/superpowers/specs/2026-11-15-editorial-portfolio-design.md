# Editorial portfolio redesign

## Intent
Replace the current portfolio (a compiled-bundle adaptation of another site) with a
hand-written, editorial "technical review" layout: cream paper background, serif
display type, a sticky left index with numbered sections, and projects told as
Context / Approach / System / Outcome. Audience: recruiters and engineering
managers, mostly international, so English is the default with a Portuguese option.

## Goals
- English at `/`, Portuguese at `/pt/`, language switch on every page.
- Projects come from the public GitHub repositories of `Hugueninfer`.
- Static output deployed to GitHub Pages by the existing workflow.
- Works at phone width; respects `prefers-reduced-motion`.

## Non-goals / anti-goals
- No copied code, text, logos or badges from the reference site — layout,
  typography and section rhythm are reproduced from scratch.
- No invented content: no recommendations or awards sections (no source material).

## Approaches
1. **Astro static site (chosen)** — zero JS by default, one component per section,
   two routes generated from one typed content file. Small, fast, easy to edit.
2. Vite + React SPA — works, but ships a runtime for a document that is static and
   makes per-language URLs awkward.
3. Keep the current Next/vinext wrapper — tied to the old compiled bundles; rejected.

## Sections
00 Overview · 01 About · 02 Trajectory (experience + education) · 03 Results by area
· 04 Featured projects · 05 More builds · 06 Stack · 07 Contact.

## Content sources
- Experience, education, metrics, LinkedIn/WhatsApp: previous `personal-content.mjs`.
- Projects: repository READMEs (orbit, agency-hub, complyflow-ai, bidstream,
  emporio-da-musica-agent, ledgerlight, smart-waste-ai, cineflix-recomendador, Jus,
  amazon-price-monitor). Excluded: profile repo, this repo, and
  client-costumization-plugin (no README).

## Builder's calls
Fonts (Playfair Display, DM Sans, DM Mono via Google Fonts), exact palette,
section copy wording, scroll-spy behaviour for the index.
