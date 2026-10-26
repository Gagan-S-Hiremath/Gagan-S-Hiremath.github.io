# Gagan S S — AI Product Manager

**[View the live portfolio](https://gagan-s-hiremath.github.io/)**

Product strategy, agentic AI, generative AI, and enterprise workflows—from customer discovery and requirements to evaluation and delivery.

## Selected work

1. **SLA Intelligence: KPI Extraction, Analytics & AI Assistant** — professional enterprise experience. Document extraction and KPI mapping power Power BI analytics; a subsequent RAG assistant enables conversational SLA access. Portfolio artifacts are retrospective reconstructions using synthetic examples.
2. **LinkedIn Prospect Research & Personalised Outreach Agent** — independent local B2B prototype. User-supplied prospect context → account research → personalised draft → human review. No LinkedIn login, scraping or sending capability; no platform endorsement or measured commercial uplift. Existing project URLs and implementation identifiers are preserved.
3. **CartWise** — independent B2C shopping design study, with explicit constraints, product decisions and validation plan.

**Additional studies:** EvalPilot (evaluation and release management) and ClinicVoice (English-language administrative scheduling). Neither is presented as a production application.

## Evidence policy

Professional scope, executed software tests, synthetic examples and proposed targets are separated. Numerical business-impact claims without measurement context are omitted from promotional copy. The supplied resume is available unchanged. No customer data, credentials, private databases, or proprietary source code is published.

## Structure

- `home.template.html`: homepage source.
- `projects.js`: structured case-study content and brief generation.
- `case-view.js`: reusable static case-study and card rendering.
- `sla-case.js`: the SLA case study’s five-phase, sixteen-step lifecycle, two-capability architecture and PRD rendering.
- `lifecycle-case.js`: consistent five-phase, sixteen-step prospecting and CartWise case studies.
- `premium.css`: shared visual refinements, lifecycle navigation and mobile layouts.
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

## Prototype and publication boundaries

`outreach-prototype.png` is a genuine local Streamlit start screen with an empty preview database. No public prototype deployment is claimed. `prototype-hosting.md` documents the actual Python startup command, required host configuration and remaining account/secret-store step. Internal project IDs and published case URLs are preserved across the public rename.

The SLA case explains the original extraction/mapping/Power BI capability and later document-grounded RAG enhancement. It does not claim a live Power BI chatbot connector or verified chatbot citations. Contractual KPI examples are labelled synthetic or illustrative.
