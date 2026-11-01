# NextGen Customer Intelligence: proposed technical design

This is an engineering proposal for one automotive dealership or a small pilot group. It does not implement integrations or claim production compliance. The existing CRM prototype remains unchanged. The source brief is the user-supplied engineering assignment. No existing presentation was found in the project inventory.

## End-to-end processing

1. Phone and Zoom adapters receive authenticated provider events. Website enquiries enter through application APIs. Showroom and test-drive records use structured notes in the MVP. WhatsApp/email synchronisation and automated showroom capture are deferred.
2. A policy service verifies tenant, participant notice, consent or other applicable processing authority, purpose and current withdrawal state. A provider recording event is not evidence of permission. If required authorisation is absent, do not record, transcribe or analyse media. Permitted structured manual notes remain available.
3. FastAPI validates an interaction envelope containing tenant ID, customer ID, interaction ID, provider ID, event timestamp, permission reference and idempotency key. An asynchronous durable queue handles recording retrieval, transcription and extraction. Use bounded retries, dead-letter routing, replay controls and out-of-order event checks. Choose the queue implementation during architecture readiness; an Azure queue service is a candidate rather than an extra required system.
4. Secure Azure Blob Storage holds recordings and original transcripts. Transcript segments retain immutable speaker/timestamp anchors. PostgreSQL holds structured customer/interaction/opportunity/decision/audit records and secure evidence references, rather than unrestricted copies of media.
5. Retrieve relevant context from the complete customer journey, with tenant, role and purpose filters. RAG combines that context with versioned, dealership-approved product, price and finance knowledge. Vector search is an index, not the source of truth. Proposed initial implementation can use PostgreSQL-compatible vector retrieval to minimise infrastructure.
6. LangGraph receives the event or business request, loads a context version and selects relevant agents. Durable workflow checkpoints preserve routing, retries and pending approvals. They are distinct from customer domain records. A cohort analysis can execute independently of any single call.
7. Agents return structured proposals with evidence IDs, uncertainties, context version and model/prompt versions. Validate schema, factual grounding, evidence sufficiency and authorised tool use. Transcript content is untrusted input and cannot grant tool permissions.
8. Reps review guidance and proposed facts. Consequential opportunity changes follow configured human approval. Managers resolve unresolved conflicts and approve playbooks. A policy service revalidates permissions and current record version before an atomic transaction. The model has no unrestricted CRM write or customer-send tool.
9. The approved transaction appends status history and audit records and updates the persistent journey. The next interaction retrieves prior preferences, concerns, commitments and outcomes. BI groups multiple unique customers rather than counting repeated interactions as extra customers.

## Persistent domain model

Suggested entities: Tenant, User/Role, Customer, Interaction, TranscriptSegment, EvidenceReference, CustomerPreference, Concern/ConcernHistory, Commitment, Opportunity, OpportunityDimensionHistory, DecisionReason, ApprovalCase, ReviewEvent, PlaybookVersion, ConsentPurposeLedger and AuditEvent.

Customer intelligence must retain complete interaction history, preferences, buying signals, open and resolved concerns, prior commitments, purchase intent/progress, decisions, opportunity history, evidence references and outcomes. Updates are versioned deltas. Resolve a concern without deleting its earlier state. Preserve contradictory observations for review rather than silently replacing them.

Every interaction retrieves prior context and adds evidence to the same customer. Repeat visits at one stage and returns to earlier stages are supported. Identity reconciliation must precede automatic merging of customer records. Uncertain matches require review.

Three independent CRM dimensions:

| Dimension | Examples |
|---|---|
| Customer Lifecycle Stage | Prospect, Lead, Engaged, Qualified Prospect, Customer, Repeat Customer, Advocate |
| Sales Pipeline Stage | New Enquiry, Discovery, Showroom Visit, Test Drive, Evaluation, Quotation, Negotiation, Booking, Delivery, Post-Sale |
| Opportunity Status | New, Open, Contact Attempted, Connected, In Progress, Follow-up Required, Nurturing, Bad Timing, On Hold, Not Interested, Unqualified, Disqualified, Closed Won, Closed Lost |

The brief's “Active Prospect” example is treated as a human-readable description of an active customer, not a fourth status taxonomy or a merged dimension.

## Four specialised agents

| Agent | Trigger | Output |
|---|---|---|
| Customer Intelligence Agent | New permitted transcript or structured interaction | Requirements, signals, preferences, objections, information gaps and commitments linked to evidence |
| Conversation Guidance Agent | Rep preparation request | Personalised talking points, response drafts and discovery questions grounded in history and approved knowledge |
| Opportunity Governance Agent | New evidence or rep proposal | Independent lifecycle/pipeline/status recommendations, evidence conflict and review request |
| Business Intelligence & Sales Coaching Agent | Scheduled cohort analysis or manager request | Unique-customer reason clusters, business hypotheses, evidence-backed coaching and proposed playbook changes |

The graph invokes only relevant branches. Tools include scoped customer/evidence retrieval, approved catalogue lookup, proposal persistence and review queue creation. The CRM commit tool accepts only validated, approved actions. Bounded failures retain workflow state; replayed tasks and approval resumption must not repeat side effects. Stale approvals require re-evaluation against the latest context version.

## Opportunity decision governance

AI reviews relevant customer history and new evidence, then recommends all three dimensions. The salesperson proposes or confirms a change. Compare the proposal with supporting evidence. Aligned changes follow configured approval policy. Conflicts keep the current approved record and request additional evidence. AI re-evaluates the complete record. If disagreement remains, an authorised manager decides with a recorded rationale. Record proposer, original and proposed values, evidence, justification, AI reassessment, manager decision and timestamps.

Example: “I like the vehicle. I want to discuss the EMI with my family. Please call me on Friday.” This supports a Follow-up Required proposal rather than inferring Not Interested. AI can be wrong, and later customer evidence can change the interpretation. Silence, a missed call or delayed purchase alone must not imply rejection. Capture the actual customer-stated decision reason, otherwise use Unknown.

## Decision intelligence and learning

Collect outcome reasons for Won/Lost/Postponed journeys. Group recurring reasons using unique customer coverage and supporting evidence, with sample size and unknown-reason coverage visible. Patterns suggest possible product, pricing, positioning or process issues, not established root causes. Avoid unsupported predictive conversion claims in the MVP.

Analyse successful and unsuccessful conversations. Extract effective discovery and objection handling, unresolved concerns and missed opportunities. Propose coaching and playbook improvements. Managers review and publish versioned playbooks; guidance retrieves approved versions only. Track adoption and feedback without arbitrary salesperson rankings.

## Recording governance

Proposed notice: “This call may be recorded and transcribed for quality assurance, training, service improvement and to help us better understand your requirements.”

The notice alone does not satisfy every jurisdiction or participant requirement. Appropriate privacy/legal specialists must review the pilot's notices, lawful processing mechanism, purpose restrictions and retention rules before live processing.

For every recorded interaction retain: customer ID, interaction ID, recording reference, notice/consent status, applicable consent timestamp, recording status, transcript reference, processing purpose, access history and retention/deletion policy reference. Also retain notice/policy version and provenance. Recheck authorisation before capture, transcription, analysis and later coaching reuse. Withdrawal stops capture and blocks queued processing. Deletion propagates to media, transcripts, derived context and retrieval indexes under approved policy, subject to applicable holds.

## Evaluation and operational gates

All measures below are proposed. Establish a representative labelled set and agree thresholds in discovery; no achieved results or invented baselines are claimed.

| Area | Proposed dimensions |
|---|---|
| Conversation | Transcription accuracy, speaker identification, entity/commitment extraction and evidence traceability |
| Customer context | Completeness, intent/objection quality, groundedness and repeated-interaction consistency |
| Opportunity governance | Status agreement, evidence sufficiency, conflict resolution time, escalation rate and correction rate |
| Business intelligence | Reason classification, cluster consistency, unique customer coverage and outcome traceability |
| Coaching | Relevance, evidence support, manager approval and approved-playbook adoption |
| Product validation | Capture coverage, preparation time saved, rep adoption, opportunity progression and conversion outcomes |

Quality validation must include missing transcripts, noisy speech, prompt injection, absent permission, withdrawal, cross-tenant retrieval, duplicate/out-of-order events, tool failures, approval resumption, stale record versions and deletion propagation. LangSmith/Azure Monitor are proposed monitoring tools. Redact sensitive content from traces and scope trace access/retention.

## Technology feasibility references

Official documentation checked during preparation on 1 November 2026. These support the proposed design, not confirmed account permissions or integration availability.

- LangGraph interrupt and resume: https://reference.langchain.com/python/langgraph/types/interrupt
- Azure batch transcription: https://learn.microsoft.com/en-au/azure/ai-services/speech-service/batch-transcription
- Zoom meeting events: https://developers.zoom.us/docs/api/rest/reference/zoom-api/events/

Selected telephony provider, with Exotel as a candidate, remains subject to technical, commercial, security and integration feasibility checks. Model availability, regional deployment, languages, data residency, provider scopes, recording entitlement and pricing need pilot-specific validation.
