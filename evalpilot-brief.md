# EvalPilot

Gagan S S — AI Product Manager

Independent product design. Screens and scenarios are illustrative. Evaluation targets and deployment steps are proposed; live results are not claimed.

## 01 · Problem statement

AI teams review model quality, latency, and cost separately. An update can improve the overall pass rate while introducing a critical failure. Product and engineering teams need a consistent way to identify regressions and decide whether a candidate is ready for release.

Product objective: Help an AI team compare two versions and produce an auditable go / no-go recommendation.

## 02 · Why AI is the right approach

An LLM judge scores criteria such as relevance and policy adherence. Failure clustering helps reviewers identify recurring issues. Deterministic checks calculate exact matches, costs, missing cases, and release gates. Human reviewers adjudicate disputed judgments.

Alternative considered: Use scripts and spreadsheets for a small, stable test suite. A shared product becomes valuable when repeated releases, multiple reviewers, and different evaluators make decisions difficult to reproduce.

Product decision: Block a candidate with a confirmed critical regression even when its average pass rate improves.

## 03 · User empathy & discovery

AI product manager, AI engineer, and domain reviewer.

The AI PM needs an explainable go/no-go decision. Engineers need the failing input, output, tool response, and version. Domain reviewers need a focused queue for ambiguous results. Each role needs the same evidence and a clear decision owner.

Discovery approach:
- Observe an existing release review and map how evidence is assembled.
- Interview AI PMs, engineers, and reviewers about missed regressions and false alarms.
- Baseline review time, decision disagreements, and evidence gaps before proposing automation.

## 04 · Success metrics

Metric | Measurement | Target / benchmark | Why it matters

- Critical-defect recall | Detected critical defects ÷ known critical defects | Proposed: 100% on seeded qualification cases | Measures whether the platform catches release-blocking failures.
- False approval rate | Unsafe candidates approved ÷ unsafe candidates reviewed | Proposed: zero in qualification; monitor in pilot | Prevents a misleading release recommendation.
- False block rate | Acceptable candidates blocked ÷ acceptable candidates reviewed | Set the threshold with pilot reviewers | Controls unnecessary release delays and alert fatigue.
- Human–judge agreement | Matching labels ÷ independently reviewed judgments | Proposed: ≥90% per criterion before automation | Shows whether automated scoring reflects domain expectations.
- Release review time | Median time to complete a version comparison | Proposed: 30% below the existing workflow | Measures product value for the team making the decision.
- Evaluation cost | Total grading cost ÷ evaluated traces | Track by evaluator and task type | Keeps continuous evaluation affordable.

## 05 · Solution architecture

Trace / dataset import → Versioned evaluators → Comparison engine → Human review → Release policy → Decision record

Proposed MVP: one JSON trace format, two text-based task types, versioned datasets, deterministic checks, an optional calibrated judge, and a manual release approval. Continuous deployment control is out of scope.

Architecture decisions:
- Judge automation vs. trustworthy labels | Calibrate fuzzy criteria against independent human labels; preserve unknown and disagreement states.
- One score vs. useful slices | Show task, language, risk, and failure-category slices; a weighted average cannot override a critical gate.
- Broad platform vs. a buildable MVP | Support two trace types first; defer SDKs, agent hosting, and enterprise connectors.

## 06 · MVP scope & prototyping

MVP scope: Dataset upload, baseline/candidate comparison, per-case evidence, human labels, versioned thresholds, and release report.

Out of scope: Training models, hosting agents, automatic production rollout, and claiming a universal quality score.

### 1. Start with comparable evidence
Select a versioned dataset and import baseline and candidate outputs. Match case IDs before comparing.

Dataset: booking-scenarios-v1
Baseline: prompt-v1
Candidate: prompt-v2

### 2. An average can hide a failure
A synthetic candidate improves an illustrative average but incorrectly books an unavailable slot.

ILLUSTRATIVE DATA
Baseline: 40 / 50 pass
Candidate: 44 / 50 pass
Critical regression: VOICE-017

### 3. Read the case behind the score
A reviewer compares the tool response, final booking state, and agent claim.

Tool response: slot_unavailable
Agent: “Your appointment is confirmed.”
Reviewer: critical false confirmation

### 4. Block for a reason
The policy blocks this candidate. The release report records the failed gate and next action.

Recommendation: BLOCK
Reason: false booking confirmation
Next: fix state handling; re-run full suite

## 07 · AI product requirements

Goal: Help an AI team compare two versions and produce an auditable go / no-go recommendation.

Requirements: Pin dataset and evaluator versions; flag missing runs; keep human adjudication separate; retain the reason for each blocked gate.

Failure handling: Missing evidence → incomplete. Judge disagreement → human review. Critical regression → block regardless of average improvement.

## 08 · Backlog & acceptance criteria

Priority | Capability | Acceptance criterion

- P0 | Comparable versions | Given two runs, compare only matching case IDs and report missing or duplicate IDs.
- P0 | Critical release gate | Given one confirmed critical regression, show BLOCK even if the average score improves.
- P0 | Evidence inspection | Given a failed criterion, show input, output, rule/judge rationale, and evaluator version.
- P1 | Human adjudication | Given a reviewer disagrees, preserve both labels and record the decision and rationale.
- P1 | Live trace sampling | Given pilot traces, sample by risk as well as random selection and redact sensitive fields.

## 09 · Evaluation metrics & decision rules

Assess task correctness, critical failures, regressions, latency, and total cost per successful task.

Proposed qualification gate: every seeded critical defect is detected, missing evidence never produces a pass, and the measured false-block rate is acceptable to pilot reviewers. Report denominators and confidence intervals.

## 10 · Offline evaluation plan

- Dataset | Seed known defects into trace pairs; include clean pairs and ambiguous outputs. Hold out defect families when testing generalization.
- Independent labels | Two reviewers label criticality and correctness; adjudicate before evaluating the judge.
- Checks | Defect recall, false approval rate, false block rate, judge agreement, and repeatability by task type.
- Regression | Compare judge/rubric versions on the same independent suite; include judge failures in the release report.

Example cases — not executed:
- EVAL-01 | Higher mean; critical regression | Block and identify the exact failing gate. | Critical
- EVAL-02 | Candidate missing five cases | Mark comparison incomplete; do not score absent cases as passes. | Material
- EVAL-03 | Judge says pass; gold says fail | Record disagreement and request adjudication. | Material

## 11 · Online evaluation plan

- Product value | Measure review-task completion time and whether reviewers can explain the release decision.
- Quality | Audit sampled approvals and blocks with independent human review; track overrides and missing evidence.
- Operations | Track evaluation spend, queue delay, evaluator failures, and alert burden.
- Feedback loop | Route disputed evaluations to adjudication; add resolved errors to a versioned benchmark without contaminating held-out tests.

Run a controlled pilot before broad release. Declare the primary outcome, guardrails, randomization unit, and sample-size plan before an A/B test.

## 12 · Deployment & go-live

Proposed internal pilot: run EvalPilot alongside existing manual reviews. Compare decisions without granting deployment authority. Expand to a second task type only after reviewers trust the evidence trail.

Deployment readiness: version the model, prompt, tools, and configuration; complete staging and user acceptance testing; assign owners; verify alerting and rollback.

Rollback: Disable automatic recommendations if an adjudicated critical false approval occurs. Keep raw comparisons accessible and revert to manual release review. Version and roll back faulty evaluator configurations.

Post-launch priorities: Run a release-review task study with AI PMs and engineers. Compare review time, critical-defect detection, and decision agreement against their existing process.
