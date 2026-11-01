# Consent-aware intelligence verification — 1 November 2026

This section records the current enhancement checks. The older verification report below is retained as historical coverage, not a claim that every old UI check was repeated today.

## Current build and automated verification

- TypeScript project check passed: `node node_modules/typescript/bin/tsc -b`.
- Production build passed: `node node_modules/vite/bin/vite.js build`, 43 modules, bundled CSS and JavaScript in dist.
- `node scripts/test-core.mjs`: **98 checks passed**. This includes the original 70 checks plus consent guards, exact phone notice, partial Zoom permission, decline/withdrawal content suppression, scheduled notices, processing provenance, malformed saved permission state, persistence/migration, source-linked decision examples, status conflicts, reason-required manager resolution, non-final review actions, explicit supported confirmation, separate status/decision-reason validation, duplicate prompts and terminal unrecorded state.
- No dependencies were added. npm is not supplied in this execution environment; the equivalent local Node entry points above were used. Existing npm scripts and Windows launcher are retained.

## Browser checks actually performed

Used isolated localhost ports 5200 (Vite development) and 5201 (production preview). Existing demo data/server on port 5173 was not reset or stopped.

- Outgoing phone: exact notice appeared before recording; decline, continue unrecorded and end produced blocked transcription, no transcript/processing control and minimal activity logging.
- Permitted phone: agree, active recording, refresh, reopen saved active interaction, end, process, inspect nine extraction categories and source excerpts. Refresh retained active and completed state. Production incoming-call processing and refresh also passed.
- Zoom: no responses and only one participant response both left recording disabled. Both agreements enabled recording. Withdrawal stopped it; ending retained no transcript and blocked processing. A separate permitted Zoom meeting completed and processed successfully.
- Scheduled meeting: saved a future IST date, inspected scheduled state with recording not started and transcription not created.
- Governance: proposed Ananya as Not Interested against her continued-interest evidence, supplied context, re-evaluated with conflict unresolved, switched to manager and accepted Follow-up Required. The resolved review retained the source quote and audit trail. Separately, a matching proposal required explicit representative confirmation and survived refresh.
- Decision insights: loaded the opt-in fictional history, verified source-linked records, filtered Declined (five matching examples) and Purchased (one example), opened an original transcript. Unique-customer versus interaction counts are also covered by automated checks.
- Coaching: proposed from a successful example, manager approved with reason, published, representative used the published playbook; usage incremented and a draft appeared in Activity.
- Existing guidance/outcome flow: reviewed updated guidance, captured Follow-up agreed with a note and inspected it in Activity alongside simulation/consent records.
- Settings: added a pipeline classification and verified its displayed value.
- Opened all seven production workspace routes; each rendered its heading with no page-level horizontal overflow. Inspected customer profile, Zoom processing modal, review queue, coaching, insights and Activity at desktop size, lead table at 1024 x 768, profile and consent modal at 390 x 844. Mobile modal scroll and journey horizontal scroll remain intentional.
- A development-time source encoding error was recovered from the previous source archive. A duplicate discovery-prompt warning found during regression checking was fixed. The final production smoke session reported **no browser console warnings or errors**.

## Limits of verification

The four manager dispositions are available; the browser exercised accepting the CRM recommendation and explicit matching confirmation. Other review dispositions were checked in domain tests rather than individually clicked in the browser. The date/model/pipeline/representative cluster filters share the predicate logic; outcome filtering was exercised in the browser. This is a local deterministic demonstration, not a live-provider, legal-compliance, security, cross-browser or production-load certification. Role simulation and localStorage do not enforce real security. Consent withdrawal blocks the entire synthetic transcript; completed-session privacy requests are outside the demo. The approved presentation was not modified.

---

# Verification report

Updated 1 November 2026 for persistent customer journeys and multi-interaction intelligence. Tested with the Codex in-app Chromium browser on Windows, using isolated test ports 5190 and 4191. Existing user workspace/browser data on port 5173 was not reset or stopped.

## Build and automated checks

- TypeScript: `node node_modules/typescript/bin/tsc -b` passed.
- Production build: `node node_modules/vite/bin/vite.js build` passed, transforming 38 modules. These are the two commands in `npm run build`.
- `node scripts/test-core.mjs`: **70 checks passed**.
- New checks cover stable customer IDs, immutable original interactions, repeated stages, backdating, revisiting stages, confirmed versus unconfirmed preferences, test-drive feedback, concern resolution/reopening, preserved evidence, immutable assessment/recommendation snapshots, commitments, stage-aware guidance, draft context signatures, separate customer/interaction counts, explicit decisions, reopening a closed opportunity, recorded loss reasons, legacy storage migration, invalid references, duplicate protection, specific-concern outcomes, and the seven-stage example.
- The environment supplies bundled Node/pnpm rather than npm. The literal `npm install` command was not run here. The standard npm scripts and existing Windows launcher are retained. No new dependencies were required.

## Mandatory browser journey performed

1. Opened Overview, navigated to Leads, found Ananya, opened her profile, and verified her four original interactions.
2. Opened Customer Intelligence, verified the potential affordability concern and original evidence, then opened guidance using the existing history.
3. Added a synthetic showroom visit with a summary, questions, explored vehicle category, representative notes and a product-fit signal. Timeline count became five and the current stage became Showroom Visit.
4. Added a completed test drive with feedback, a new unresolved rear-seat comfort concern and an explicitly confirmed Core variant preference. Timeline count became six; stage became Product Demonstration / Test Drive; the confirmed preference appeared and its gap was removed.
5. Added a follow-up addressing the original cost concern while retaining the distinct product-fit concern. Recorded a next step and explicit commitment. Timeline count became seven and stage became Follow-up.
6. Opened intelligence and verified the addressed cost concern, remaining rear-seat concern, source links and confirmed preference.
7. Reopened guidance and verified it reflected the follow-up and remaining question rather than repeating the original introduction. Reviewed it and recorded an additional-information outcome.
8. Refreshed: timeline retained seven interactions plus the outcome, current stage, original price enquiry, preferences and resolution history.
9. Opened Customer Insights and verified unique customer aggregation. Cost support was three customers with six supporting interactions and two potential/unresolved concerns; product fit was four customers with five supporting interactions and one recorded outcome at that point.
10. Saved an investigation note, refreshed and verified persistence; later confirmed reset cancellation retained it.
11. Confirmed Reset Demo Data on the isolated test workspace, refreshed and verified the original four-entry journey, Discovery stage, empty recommendation history, and restored unconfirmed preference gaps.

## Additional functional checks actually performed

- Repeated follow-up in the same stage persisted separately, with no original record overwritten. After refresh, the timeline contained eight interactions/outcome entries before the second follow-up and nine after it.
- Inspected stored recommendation snapshots and expandable test-drive feedback and assessment details.
- Loaded the seven-stage synthetic example only after explicitly choosing Open — Decision Pending. All seven stages showed interactions. Five examples were added once; refresh did not duplicate them and the import action became disabled.
- Purchase Decision save without a decision showed a validation error. Explicit Won, Open and Lost selections updated opportunity status and corresponding guidance. Reopening did not silently delete the earlier decision history.
- Won guidance offered handover follow-through. Lost guidance respected the decision. A recorded loss reason appeared in business insights as representative-reported evidence, with root cause unverified.
- Saved a won-stage draft, then recorded an open decision. The earlier draft remained available while the new suggestion used the reopened context and required fresh review.
- Targeted a specific rear-seat concern with a Concern addressed outcome, rather than resolving every concern in the topic.
- Future interaction dates, missing test-drive completion, and preference updates lacking explicit confirmation all produced validation errors. Cancelling these invalid entries left the timeline count unchanged.
- Activity Interactions showed 23 actual conversation records across the test dataset at the expanded stage of testing; outcomes were separate. Selecting a captured follow-up opened and highlighted that exact timeline entry.
- Dashboard metrics were calculated from current records. Explicit closed/lost opportunities were removed from the active priority list, with the badge count updating accordingly.
- Browser warning/error log queries returned no entries during the tested development and production journeys.

## Production bundle smoke test

Served the final dist on a separate Vite preview port. Opened the original customer intelligence, added a showroom interaction, refreshed and verified five retained interactions and the Showroom Visit stage. Guidance referred to the showroom visit while retaining the earlier affordability context. Business insights reflected the extra product-fit support from the same customer without inflating the customer denominator. A further production check captured a customer-confirmed financing concern for Meera: business totals showed four unique customers, six supporting interactions, and one customer-confirmed concern; the supporting example showed the same verification status. Production browser warning/error logs returned no entries.

## Visual and responsive inspection

Inspected Overview, Leads through customer navigation, profile progress, expandable timeline, intelligence, guidance, Add Interaction, Activity, and business insights. Used 1440 x 900 for desktop and 390 x 844 for mobile checks. The mobile document width was 375px inside a 390px viewport, and the Add Interaction dialog was approximately 360px wide. The long form has its own vertical scroll and visible save/cancel actions. Journey stages, tables and loop diagrams use internal horizontal scrolling rather than widening the page.

## Limits

No separate Safari/Firefox test, physical mobile device test or screen-reader audit was performed. Backdated-stage rules, migration and malformed-storage cases were tested through the actual modules in Node. Storage quota exhaustion and clipboard denial were not forced. All intelligence is deterministic simulation over synthetic data; there is no LLM, actual agent execution, backend, live messaging, pricing calculation or financing approval. The original PowerPoint was not edited.
