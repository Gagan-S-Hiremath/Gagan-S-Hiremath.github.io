# SLA Document Intelligence

Gagan S S — AI Product Manager

Professional experience at Value Groups. The product title is descriptive. Portfolio diagrams, requirements, and evaluation plans are retrospective reconstructions using synthetic examples.

## 01 · Problem statement

SLA analysts manually searched contracts, interpreted KPI tables, and consolidated reporting. Different layouts, scanned pages, merged cells, and repeated attributes made the workflow slow and error-prone. Operations teams lacked a consistent view of their service commitments.

Product objective: Make approved SLA commitments accessible as structured data and source-grounded answers.

## 02 · Why AI is the right approach

OCR identifies text and document layout. An LLM maps different contractual terms to a standard KPI schema. Retrieval-augmented generation (RAG) provides answers from approved records and relevant clauses. Schema validation and human review control what reaches reporting.

Alternative considered: Use template-based parsing for consistent document layouts. Use AI where terminology and structure vary. Keep manual validation for ambiguous clauses and unreadable scans.

Product decision: Preserve the source clause for every extracted KPI. Route conflicting values to an analyst before publishing them.

## 03 · User empathy & discovery

SLA analysts, operations leads, and business reporting teams.

The analyst needs accurate extraction with clause-level traceability. The operations lead needs approved KPIs without opening every contract. Both need a clear review path when documents contain conflicting thresholds.

Discovery approach:
- Map document arrival, extraction, validation, reporting, and query workflows.
- Interview analysts and operations leads about review effort, exceptions, and trust.
- Baseline processing time and retrieval time separately, using comparable documents and tasks.

## 04 · Success metrics

Metric | Measurement | Target / benchmark | Why it matters

- KPI extraction accuracy | Correct required fields ÷ reviewed required fields | Proposed: ≥95% on the held-out set | Prevents incorrect contractual targets from entering reporting.
- Processing time | Median time from intake to approved KPI register | Compare with the manual baseline | Measures operational efficiency across extraction and review.
- Retrieval time | Median time to find the correct KPI and clause | Compare with the manual lookup baseline | Measures how quickly teams can act on contractual information.
- Reviewer correction rate | Corrected fields ÷ reviewed extracted fields | Track by document type; reduce over releases | Identifies extraction errors and hidden review effort.
- Active-team adoption | Teams using approved KPIs each month | Track activation and repeat usage | Shows whether the solution becomes part of the operating workflow.
- Cost per approved document | Processing + retries + review cost ÷ approved documents | Set a ceiling after baseline measurement | Keeps automation savings meaningful after human-review costs.

## 05 · Solution architecture

SharePoint intake → OCR & layout → LLM schema mapping → SQL validation → Human review → Power BI / RAG

The documented workflow uses SharePoint and Power Automate for intake, Azure AI Document Intelligence for OCR and layout, Azure OpenAI for semantic mapping, and SQL for validation state. Data Factory and Databricks support downstream data integration; Power BI provides reporting. Human approval precedes publication.

Architecture decisions:
- Flexible schema vs. reliable reporting | Use a versioned canonical KPI model, retaining additional attributes separately to contain schema expansion.
- Automation vs. accountability | Propose extracted values with evidence; require review for ambiguity and preserve validation status.
- Fast answers vs. grounded answers | Retrieve approved records and source passages; decline answers without sufficient evidence.

## 06 · MVP scope & prototyping

MVP scope: One representative document family first; 15 core KPI definitions; evidence links; validation queue; reporting export; grounded queries.

Out of scope: Contract interpretation as legal advice, autonomous contract changes, and automatic publication of unresolved values.

### 1. Start with the source
An analyst submits a synthetic SLA. The intake record preserves its version and processing state.

Illustrative file: managed-services-sample.pdf
Status: queued → processing

### 2. Make the evidence visible
OCR and semantic mapping propose a KPI with the source passage beside it.

KPI: Service availability
Target: 99.9%
Evidence: page 3, section 4.2

### 3. Treat uncertainty as a workflow
A second table contains a different threshold. The analyst must select the applicable clause before publication.

Conflict: 99.9% vs 99.5%
Action: requires human validation
Publish: blocked

### 4. Publish approved intelligence
The approved KPI appears in reporting and a grounded response can link back to its source.

Validation: approved (illustrative)
Output: KPI register + source reference
Next: dashboard / grounded query

## 07 · AI product requirements

Goal: Make approved SLA commitments accessible as structured data and source-grounded answers.

Requirements: Preserve source references; version schemas; detect missing required fields; record reviewer decisions; prevent unapproved records entering reporting.

Failure handling: Unreadable scans → request a clearer copy. Conflicting values → show both sources and require review. Missing evidence → do not invent a value.

## 08 · Backlog & acceptance criteria

Priority | Capability | Acceptance criterion

- P0 | Evidence-linked extraction | Given a KPI is extracted, its source document, page, and supporting text are visible.
- P0 | Validation queue | Given required values conflict, publication is blocked until a reviewer resolves the conflict.
- P0 | Canonical schema | Given a new layout, output must pass the versioned schema or enter review; fields are not silently discarded.
- P1 | Grounded query | Given no approved evidence supports an answer, the interface states that it cannot confirm the answer.
- P1 | Feedback and audit | Given a correction, retain the prior value, reviewer decision, and document version.

## 09 · Evaluation metrics & decision rules

Assess task correctness, critical failures, regressions, latency, and total cost per successful task.

Proposed launch gate: required-field quality meets the predeclared target, unresolved conflicts cannot publish, and no critical leakage or instruction-following failures occur in the qualification suite. A zero count in a small test set is not proof of zero production risk.

## 10 · Offline evaluation plan

- Dataset | Proposed 50-case development set: 30 typical, 10 edge, 10 adversarial; separate 50-case held-out set. Split by base document to avoid near-duplicate leakage.
- Gold labels | An analyst labels fields and supporting evidence; a second reviewer resolves disagreements.
- Checks | Exact field match, source entailment, table-context mapping, required-field completeness, injection resistance.
- Analysis | Compare prompt versions by document family, merged cells, repeated keys, scan quality, and severity. List every regression.

Example cases — not executed:
- SLA-01 | Merged target table | Preserve heading context and extract the correct target. | Material
- SLA-02 | Unreadable scan | Request clearer input; do not fabricate a threshold. | Material
- SLA-03 | Instructions hidden in document | Treat embedded instructions as source data, not system commands. | Critical

## 11 · Online evaluation plan

- Quality | Sample approved records for source-backed correctness; track reviewer correction rate and escaped errors.
- User value | Observe completion time for processing and retrieval as separate workflows.
- Operations | Monitor queue age, human-review workload, p50/p95 latency, failures, and cost per accepted document.
- Feedback loop | Turn corrected and failed documents into new regression cases; re-run after prompt, model, or schema changes.

Run a controlled pilot before broad release. Declare the primary outcome, guardrails, randomization unit, and sample-size plan before an A/B test.

## 12 · Deployment & go-live

Proposed sequence: offline qualification → internal analyst review → shadow processing → a limited document-family pilot → gradual expansion. No historical rollout evidence is claimed here.

Deployment readiness: version the model, prompt, tools, and configuration; complete staging and user acceptance testing; assign owners; verify alerting and rollback.

Rollback: Pause automated publication on a critical evidence failure or data exposure. Revert to manual validation, retain queued documents, and roll back the prompt/schema version. Name an operations owner and on-call engineering owner before a pilot.

Post-launch priorities: Prioritize document families by ambiguity and review burden. Measure extraction quality and reviewer effort together before expanding automated publication.
