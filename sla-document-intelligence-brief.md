# SLA Intelligence: KPI Extraction, Analytics & AI Assistant

An enterprise AI solution that extracts and maps KPIs from SLA documents, powers Power BI dashboards, and enables users to ask questions about SLA information through a conversational RAG assistant.

Professional experience at Value Groups. The title is descriptive. The two capabilities reflect the professional project; the diagrams, PRD, backlog, synthetic examples, and evaluation plans are retrospective portfolio reconstructions.

## 1. Problem Definition

SLA information was spread across documents with different layouts, contractual definitions, targets, and conditions. Analysts had to extract and reconcile that information before it could support consistent business reporting. Power BI addressed reporting needs; a later RAG assistant addressed the separate need to find and understand SLA content in natural language.

## 2. User Empathy and Discovery

SLA analysts need reviewable fields and source context. Reporting teams need approved KPI mappings that fit downstream data assets. Business users need Power BI views for performance analysis and conversational access for questions about definitions, targets, and contractual conditions.

Professional context: document variability, merged cells, repeated attributes, and schema expansion informed the workflow requirements.
Reconstructed discovery: map analyst review, dashboard use, and document lookup as distinct user journeys. No interview findings or quotes are presented.
Further validation proposed: observe representative reporting and SLA lookup tasks; establish separate baselines for review effort and time to a supported answer.

## 3. Why AI Was Appropriate

Azure AI Document Intelligence handles OCR and layout extraction for scanned and digital documents. Azure OpenAI supports semantic interpretation, KPI identification, and mapping inconsistent terms to business definitions. RAG subsequently makes relevant SLA content available to a language model for contextual answers. Structured checks, approved mappings, and human validation remain essential.

Alternative: Use conventional parsing for stable layouts and explicit fields, SQL and data pipelines for structured transformations, and Power BI for reporting. AI adds value where language and document structure vary. Conversational retrieval complements dashboards; it does not replace deterministic metric calculations.

## 4. Business KPI Definition

- Document-to-report effort | Median analyst minutes per approved document; compare equivalent document families | Review timestamps or observed tasks | Shows whether automation reduces total work after corrections.
- Reporting task completion | Correctly completed reporting tasks ÷ attempted tasks | Observed Power BI reporting tasks and business-owner review | Checks whether the structured data supports useful analysis.
- Time to a supported SLA answer | Median time to locate and correctly explain the relevant SLA content | Comparable manual lookup and assistant tasks | Tests the user need behind the RAG enhancement.
- Adoption and repeat usage | Active users or teams completing the defined task per period; repeat users ÷ activated users | Permission-controlled usage events and task feedback | Shows whether reporting and conversational access become useful habits.
- Cost per completed task | Processing, retries and review cost ÷ correctly completed tasks | Usage records plus reviewer effort | Tests economic value separately for documents and questions.

Baselines and business impact are not measured here. Contractual KPI names are not verified by the available inventory; illustrative examples are in the evidence note.

## 5. Success Criteria

- Business value | Demonstrate useful reporting and correct document-lookup task completion against a comparable baseline. | Proposed validation; historical baseline not published.
- AI quality | Agree field, mapping, retrieval and answer thresholds by risk; investigate every critical regression. | Proposed thresholds; no arbitrary percentage.
- Operations | Validate task latency, review capacity, retry behavior, access control, support and rollback. | Reconstructed release requirements.
- Guardrails | Prevent unresolved fields from publication; qualify evidence insufficiency and live-data questions for the assistant. | Human validation is part of the documented workflow; assistant pass/fail controls are proposed.

## 6. AI Evaluation Metrics

- Field extraction accuracy | Correct annotated field values ÷ annotated required fields | Proposed held-out document review; no historical score | Prevents missing or incorrect definitions, targets and conditions.
- Semantic mapping accuracy | Correct approved-definition and asset mappings ÷ reviewed mapping decisions | Business-owner gold labels; analyse ambiguous mappings separately | Prevents equivalent labels being confused with different contractual obligations.
- Source traceability | Extracted fields with correct supporting document context ÷ reviewed fields | Audit source/context linkage; separate from chatbot citations | Lets reviewers resolve errors before reporting publication.
- Retrieval relevance | Relevant evidence retrieved ÷ reviewed retrieved items; also track evidence coverage | Proposed expert-labelled SLA question set | Identifies whether retrieval gives the model the material needed to answer.
- Answer correctness and groundedness | Correct answers ÷ reviewed answers; supported factual claims ÷ reviewed factual claims | Score separately using SLA references and an analyst rubric | Separates an accurate conclusion from one merely phrased convincingly.
- Unsupported-answer rate | Answers containing unsupported factual claims ÷ reviewed answers | Include unanswerable and contradictory questions; report counts | Determines whether scope or retrieval must be tightened before expansion.
- Human correction and task completion | Corrected fields ÷ reviewed fields; correctly completed tasks ÷ attempted tasks | Reviewer workflow and observed user tasks; baseline not documented | Shows hidden review work and whether users finish their actual task.
- Latency and total task cost | p50/p95 end-to-end duration; processing + retry + review cost ÷ successful tasks | Separate documents and questions; establish budgets before a pilot | Balances user responsiveness and operating cost with quality.

## 7. AI PRD

Goal: Turn document-bound SLA commitments into approved KPI data, business analytics, and subsequent natural-language access to SLA knowledge.

Requirements: Capture KPI name, definition, target, unit, threshold, period, conditions and exclusions when present. Preserve contractual context and source references. Map to approved business definitions and downstream assets. Require validation before publication. Keep conversational answers within retrieved SLA evidence.

Dependencies: authorised documents, approved definitions, reviewers, downstream data owners and retrievable SLA content.

Proposed non-functional requirements: access boundaries, version identity, task-specific cost/latency budgets, review auditability.

Failure handling: Unreadable input requires review or a clearer document. Conflicting fields retain both contexts for resolution. Unmapped definitions remain exceptions. Proposed assistant acceptance behavior: say when the available SLA evidence cannot support an answer and route the question for review.

## 8. MVP and Solution Scope

Original capability: document intake, OCR/layout, KPI extraction and semantic mapping, validation, structured data integration, and Power BI dashboards. Subsequent enhancement: retrieval and context-grounded answers about SLA content.

Non-goals: Autonomous contract changes, legal advice, unvalidated data publication, and claims of live Power BI queries or guaranteed citations in the assistant.

Capture the contractual fields
A synthetic logistics clause illustrates the extraction shape; it is not a client document or a verified implemented KPI.
Illustrative clause: “The on-time delivery target is 98% for the monthly reporting period. Approved customer-requested deferrals are excluded.”

Preserve the agreement’s meaning
Keep the source label, target, period and exclusion together. A business reviewer must approve any mapping to a canonical definition.
Synthetic fields: name = on-time delivery; target = 98%; period = monthly; exclusion = approved customer deferrals; formula = not specified.

Make approved information usable in Power BI
Validated structured KPI data supports reporting integration and Power BI dashboard analysis. This is a workflow illustration, not a dashboard screenshot.
Original capability: approved records → downstream data assets → reporting tables → Power BI.

Add conversational access to SLA content
Later, a user can ask about the relevant contractual condition. The RAG workflow retrieves SLA evidence and uses that context to formulate an answer.
Synthetic question: “Which deferrals are excluded?”
Supported content: approved customer-requested deferrals.
This does not establish current delivery performance.

## 9. Solution Architecture

Capability 1: SharePoint and Power Automate support intake; Azure AI Document Intelligence extracts OCR/layout; Azure OpenAI supports interpretation and KPI mapping. SQL tracks structured records and validation. Azure Data Factory and Databricks support downstream integration with Hive-based data assets and reporting tables; Power BI presents analytics. Capability 2 was added later: user question → retrieval of relevant SLA content → context-grounded generation → response. The available evidence does not establish a specific index service, chunking strategy, citation feature, or live dashboard query integration.

- Intake | SharePoint and Power Automate | Document arrival and processing trigger.
- Document understanding | Azure AI Document Intelligence | OCR and layout for scanned and digital inputs.
- Semantic interpretation | Azure OpenAI | KPI extraction and interpretation of inconsistent terminology.
- Structured state and validation | SQL and human-review web application | Structured records, validation status and approval before publication.
- Downstream integration | Azure Data Factory, Azure Databricks, Hive-based data assets | Business transformations and reporting data integration; exact service topology is abstracted.
- Analytics | Power BI | Business dashboarding using the approved data integration and reporting path.
- Later conversational capability | RAG over relevant SLA content | Retrieval → grounded generation → answer. No specific index vendor or live Power BI connector is asserted.

## 10. Prioritised Backlog

- P0 · Original capability | Document intake and OCR/layout | Preserve document identity and layout context; unreadable or incomplete inputs enter review.
- P0 · Original capability | KPI extraction and semantic mapping | Retain definition, target, unit and conditions where present; unresolved business mappings cannot be silently accepted.
- P0 · Original capability | Validation and downstream reporting | Only approved records enter reporting; reconcile document, KPI mapping and dashboard interpretation.
- P1 · Subsequent enhancement | SLA conversational retrieval | Given a question about an SLA clause, retrieve relevant document content before generating an answer; do not describe a contractual target as measured performance.
- P1 · Reconstructed quality requirement | Insufficient or conflicting answer evidence | Communicate insufficient evidence or ambiguity; unsupported answers fail qualification.
- P1 · Proposed improvement | Regression and monitoring loop | Map each confirmed failure to a regression case, accountable backlog item and re-release decision.

## 11. Acceptance Criteria

Missing fields stay missing or enter review. Conflicts block publication. Contractual targets cannot substitute for actual operational readings. Evidence-insufficient answers fail qualification. These are reconstructed/proposed pass-fail criteria.

## 12. Offline Evaluation

- Evidence status | Reconstructed evaluation design; no execution scores or dataset size are claimed. Software tests, deterministic validation, model-quality evaluation and human review must be reported separately.
- Document dataset | Curate authorised or synthetic scanned/digital documents with varied layouts, merged cells, repeated fields and conflicting targets. Split by contract family/version to prevent leakage.
- Extraction and mapping labels | Domain reviewers label required fields, source context and approved business/asset mappings; adjudicate disagreements. Slice failures by field, layout and scan quality.
- RAG dataset | Create answerable, unanswerable, conflicting and live-performance questions with relevant source passages and reference answers. Evaluate retrieval before answer generation.
- Release analysis | Compare versions on the same held-out set. Record per-capability failures, critical regressions, abstentions, correction effort, latency and cost. Source-attribution scoring applies only if a citation feature is verified.

Cases — not executed:
- DOC-01 | Merged target cells and repeated KPI names | Preserve header/condition context and map the applicable field to its source. | Material
- MAP-01 | Same label, different contractual exclusions | Keep the definitions distinct until an approved business mapping resolves them. | Material
- DOC-02 | Conflicting targets across clauses | Retain both contexts and require resolution before reporting publication. | Critical
- RAG-01 | Question answerable from the SLA | Retrieve the relevant content and return an answer supported by that content. | Material
- RAG-02 | Insufficient or conflicting evidence | State the limitation or ambiguity; do not invent the missing fact. | Critical
- RAG-03 | “What was our actual OTIF performance yesterday?” | Do not infer live operational performance from a contractual SLA target. | Critical

## 13. Go-Live Criteria

Professional project sequence: document processing, KPI mapping and Power BI dashboards, followed by the RAG assistant. The release gates and pilot sequence described here are reconstructed recommendations, not a claim about the original launch procedure.

Proposed release decision: agree task-specific quality thresholds with business owners; resolve critical extraction and mapping failures; verify approval boundaries and downstream reconciliation; qualify retrieval and answers separately; demonstrate support, privacy controls and rollback. No historical scores or universal numerical threshold is asserted.

Rollback: Proposed operating control: pause affected reporting publication on material mapping errors and route documents to manual review. Disable conversational answers for affected content when evidence quality fails; retain dashboard access where unaffected. Revert the relevant model, prompt, mapping, or retrieval configuration after impact review.

## 14. Online Evaluation

- Document and reporting quality | Proposed: sample approved records and downstream mappings; track corrections, reconciliation errors, queue age and document-format drift.
- Conversational quality | Proposed: sample permission-controlled traces and analyst reviews for correctness, groundedness, unsupported answers, evidence insufficiency and retrieval failure.
- Operations and privacy | Proposed: track latency, tool failures and total task cost with redacted logs, access restrictions and defined retention. LangSmith is a possible tracing/evaluation improvement, not a tool claimed for this project.

## 15. Business Outcome Monitoring

Proposed: measure processing/review effort, reporting-task completion, time to a supported SLA answer and repeat usage against comparable manual tasks. Do not infer business uplift from model scores.

Delivered connected capabilities for turning SLA documents into structured KPI information, analysing performance through Power BI dashboards, and retrieving and understanding SLA content through a subsequent RAG assistant. Numerical business impact and production evaluation scores are not presented.

## 16. Learning and Iteration

Extraction, reporting, and conversational access solve different tasks. A correct extracted target is not a live performance reading, and a fluent answer is not evidence of correctness. Prioritise source-backed mappings and independent retrieval/answer evaluation before expanding coverage.

Production signal → root cause → requirement/test → backlog → offline regression → release decision → monitoring.

Separate extraction errors, mapping errors, retrieval failures, and unsupported answers in the feedback backlog. Requalify affected document families and question types before each release.
