# YOYO Prospecting Agent

Gagan S S — AI Product Manager

Independent prototype based on accessible local source. No employment, partnership, or endorsement by YOYO is implied. Offline checks use mocked provider responses; customer response and conversion outcomes have not been measured.

## 01 · Problem statement

Sales teams must research an account, decide whether it is relevant, identify a supported business need, and write a credible first message. Manual research is inconsistent, while automated outreach can produce generic copy or unsupported claims. The product opportunity is to reduce research effort while preserving relevance, factual support, and reviewer control.

Product objective: Help sales users prepare supported, relevant outreach with less manual research and a clear approval trail.

## 02 · Why AI is the right approach

Web research collects account evidence. Specialist model calls select an outreach angle and draft a message from a bounded brief. Deterministic checks enforce identity, approved capabilities, evidence linkage, and review state. LangGraph coordinates the workflow and pauses for a human decision.

Alternative considered: Use a rules-based eligibility check and a fixed template when context is limited. Reserve model calls for research synthesis and account-specific drafting. Do not add model agents for exact validation or database updates.

Product decision: Separate verified account signals from role-based hypotheses. Hold unsupported claims and require human approval rather than allowing the workflow to send messages.

## 03 · User empathy & discovery

Sales development representatives, account researchers, and sales managers.

The sales representative needs a concise research brief and an editable draft. The sales manager needs consistent qualification and a review trail. Both need the product to distinguish a verified account signal from a role-based hypothesis.

Discovery approach:
- Map the current account-research and message-review workflow with sales users.
- Compare generic drafting with evidence-led drafting on the same prospect set.
- Validate qualification criteria, reviewer workload, and acceptable research cost before testing outbound engagement.

## 04 · Success metrics

Metric | Measurement | Target / benchmark | Why it matters

- Qualification precision | Reviewer-confirmed suitable prospects ÷ prospects marked eligible | Proposed pilot metric | Prevents research and review effort being spent on irrelevant accounts.
- Evidence coverage | Draft factual claims linked to valid supporting evidence ÷ factual claims | Required before review | Protects against unsupported account and product assertions.
- Draft approval / edit rate | Approved unchanged or edited drafts ÷ reviewed drafts | Track separately by strategy and reviewer | Shows whether the output reduces effort or merely shifts it to editing.
- Positive reply rate | Prospects with a positive reply ÷ distinct prospects manually contacted | Future real-outreach pilot only | Tests whether relevance translates into qualified engagement.
- Qualified meeting conversion | Qualified meetings ÷ distinct contacted prospects | Future real-outreach pilot only | Connects drafting quality with a commercial outcome.
- Time per reviewed prospect | Research + drafting + review time per prospect | Compare with the manual baseline | Measures net productivity after human review.
- Cost per reviewed prospect | Provider + search + operational cost ÷ reviewed prospects | Set budget after representative runs | Makes the workflow economically viable.
- Opt-out / complaint rate | Opt-outs or complaints ÷ distinct contacted prospects | Pilot guardrail | Prevents engagement gains at the expense of recipient trust.

## 05 · Solution architecture

CSV validation → Context & eligibility → OpenAI web search → Opportunity strategy → Draft & validation → Human review / SQLite

Verified implementation: Streamlit UI, Python validation, OpenAI Responses SDK with hosted web search, LangGraph state transitions and interrupts, and SQLite persistence. Tavily, Firecrawl, numerical ICP scoring, and automatic message sending are not implemented in this version.

Architecture decisions:
- Evidence-led vs. role-led drafting | Use verified company evidence when available. If research fails, permit a bounded role-led question or hold the prospect; never invent an account event.
- Agent autonomy vs. reviewer control | Generate a draft, validate it, and pause for Approve, Edit, or Reject. No sending capability exists.
- Flexible research vs. bounded cost | The normal path has three specialist model calls. Follow-up research and writer corrections are bounded; exact validation runs in Python.
- Throughput vs. review integrity | Process prospects independently and persist identifiers. Resume the correct review thread and reject stale or mismatched records.

## 06 · MVP scope & prototyping

MVP scope: CSV upload and validation; context normalization; capability eligibility; account research; opportunity strategy; outreach draft; deterministic validation; persistent Approve/Edit/Reject review.

Out of scope: LinkedIn login or scraping, direct Sales Navigator API integration, automatic sending, distributed deployment, and numerical ICP scoring.

### 1. Validate the prospect
The implemented workflow normalizes CSV fields and holds missing or conflicting identity data.

SYNTHETIC EXAMPLE
Company: Example Motors
Role: Head of dealer development
Status: eligible context / no field conflict

### 2. Choose a supported outreach angle
The research and strategy stages distinguish source-backed company signals from a role-based hypothesis.

Evidence available → signal-led strategy
Evidence unavailable → role-led question or hold
No invented company initiative

### 3. Check the draft before review
Deterministic validation checks approved product wording, evidence linkage, and unsupported assertions.

Unsupported product or performance claim → correction
One bounded correction → revalidate
Unresolved issue → HOLD

### 4. Keep the human decision explicit
The graph pauses for a reviewer. Edits are validated and linked to the previous draft.

Actions: Approve / Edit / Reject
Persistence: draft + version + review event
Message sending: not implemented

## 07 · AI product requirements

Goal: Help sales users prepare supported, relevant outreach with less manual research and a clear approval trail.

Requirements: Retain evidence provenance; hold company/title conflicts; restrict product claims to approved wording; isolate prospect state; validate edited drafts; prevent duplicate review events.

Failure handling: Research failure → bounded role-led fallback or hold. Unsupported claims → correction, then hold if unresolved. Stale review state → suppress action controls and require a fresh record.

## 08 · Backlog & acceptance criteria

Priority | Capability | Acceptance criterion

- P0 · implemented | Validate prospect input | Missing required fields and conflicting company/title values hold the affected row.
- P0 · implemented | Evidence-aware strategy | Signal-led drafting requires supported company evidence; role-led output must not invent account events.
- P0 · implemented | Human approval | Approve, Edit, and Reject resume the correct thread; edited copy is revalidated.
- P0 · implemented | Idempotent review | A repeated submission or review event does not create duplicate execution or decisions.
- P1 · proposed | Numerical ICP scoring | Define transparent, reviewer-labeled eligibility criteria before adding a score and threshold.
- P1 · proposed | Controlled outreach experiment | Record consented manual outreach outcomes with distinct-prospect denominators; synthetic rows remain excluded.

## 09 · Evaluation metrics & decision rules

Assess task correctness, critical failures, regressions, latency, and total cost per successful task.

Require valid evidence boundaries, isolated prospect state, reliable review actions, and no unresolved critical regressions. Pilot approval also requires acceptable reviewer-labeled relevance, cost, and manual-review effort.

## 10 · Offline evaluation plan

- Executed checks | A fresh focused run passed 69 tests across agent contracts, graph/review behavior, and product-claim validation. Provider responses were mocked; this is software regression evidence, not model-quality accuracy.
- Dataset and boundaries | Tests use synthetic prospect fixtures, API-shaped doubles, temporary SQLite databases, and real LangGraph checkpoints. No real outreach was sent.
- Release-blocking failures | Unsupported product expansion, wrong-prospect review, unlinked evidence, duplicate events, or synthetic contacts entering real outcome metrics.
- Model-quality evaluation | Create a separate reviewer-labeled dataset for qualification and message relevance. Historical documents describe synthetic live smoke checks; no live API check was re-run for this portfolio update.

Example cases — not executed:
- YOYO-01 | Conflicting company or title | Hold the prospect until the conflicting fields are resolved. | Critical
- YOYO-02 | Unsupported performance claim | Request bounded correction; hold if the claim remains unsupported. | Critical
- YOYO-03 | Repeated review submission | Apply the decision once to the correct persisted draft. | Material

## 11 · Online evaluation plan

- Reviewer workflow | Track unchanged approval, edits, rejection reasons, review time, and repeated use in a limited internal pilot.
- Commercial experiment | Only after manual outreach is authorized, compare evidence-led and baseline messages with predeclared segmentation and sample-size requirements.
- Correct denominators | Measure positive replies and qualified meetings per distinct manually contacted prospect; exclude synthetic rows.
- Quality and trust | Audit factual support and generic or duplicate copy; track opt-outs, complaints, dependency failures, and cost.

Run a controlled pilot before broad release. Declare the primary outcome, guardrails, randomization unit, and sample-size plan before an A/B test.

## 12 · Deployment & go-live

Current state: a local prototype with source-reviewed workflow and focused offline regression evidence. Proposed next steps: representative live-model evaluation, staff-only review pilot, then a controlled manual-outreach experiment. It is not a production SaaS deployment.

Deployment readiness: version the model, prompt, tools, and configuration; complete staging and user acceptance testing; assign owners; verify alerting and rollback.

Rollback: Pause new jobs on provider or integrity failures. Preserve persisted drafts and review records. Return to manual research and drafting; do not automatically replay interrupted paid calls.

Post-launch priorities: Prioritize reviewer-labeled prospect suitability and draft relevance. Add numerical ICP scoring only after eligibility criteria are stable and validated.
