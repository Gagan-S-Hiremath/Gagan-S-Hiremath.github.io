# Gagan S S — AI Product Manager

**[View the live portfolio](https://gagan-s-hiremath.github.io/)**

Product strategy, agentic AI, generative AI, and enterprise workflows—from customer discovery and requirements to evaluation and delivery.

## Selected work

1. **SLA Document Intelligence** — professional enterprise experience. The descriptive title protects confidentiality; portfolio artifacts are retrospective reconstructions using synthetic examples.
2. **YOYO Prospecting Agent** — independent local B2B prototype. Source-reviewed CSV-to-research-to-human-review workflow; focused offline checks use provider doubles. No sending capability or measured commercial uplift.
3. **CartWise** — independent B2C shopping design study, with explicit constraints, product decisions and validation plan.

**Additional studies:** EvalPilot (evaluation and release management) and ClinicVoice (English-language administrative scheduling). Neither is presented as a production application.

## Evidence policy

Professional scope, executed software tests, synthetic examples and proposed targets are separated. Numerical business-impact claims without measurement context are omitted from promotional copy. The supplied resume is available unchanged. No customer data, credentials, private databases, or proprietary source code is published.

## Structure

- `home.template.html`: homepage source.
- `projects.js`: structured case-study content and brief generation.
- `case-view.js`: reusable static case-study and card rendering.
- `app.js`: optional walkthrough controls and legacy deep-link redirects.
- `styles.css`: responsive visual system and accessibility styles.
- `generate.cjs`: generates index, individual project pages, supporting artifacts and search metadata.
- `verify.cjs`: source, link, content and artifact checks.

## Build and verify

Requires Node.js; no package installation or API keys.

```sh
node generate.cjs
node verify.cjs
```

Commit generated files to `main`; GitHub Pages serves the repository root. Project pages, navigation and downloads remain usable without JavaScript. JavaScript enhances the scripted walkthrough controls.

WCAG 2.2 AA and good Core Web Vitals are design objectives, not certification or field-performance claims. Fonts use Google Fonts with local fallback fonts. The website collects no analytics and has no contact form.
