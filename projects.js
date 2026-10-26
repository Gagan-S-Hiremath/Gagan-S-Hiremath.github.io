window.PROJECTS = [
  {
    "id": "sla",
    "name": "SLA Intelligence: KPI Extraction, Analytics & AI Assistant",
    "category": "Enterprise AI / Analytics & conversational access",
    "kind": "Professional experience",
    "visual": "sla",
    "headline": "From SLA documents to dashboards. Then to grounded answers.",
    "summary": "An enterprise AI solution that extracts and maps KPIs from SLA documents, powers Power BI dashboards, and enables users to ask questions about SLA information through a conversational RAG assistant.",
    "tags": [
      "Document AI",
      "Human review",
      "RAG",
      "Enterprise workflows"
    ],
    "role": "Product Manager · Value Groups",
    "period": "March 2024 – May 2025",
    "scope": "Document intelligence → Power BI analytics → RAG assistant",
    "disclosure": "Professional experience at Value Groups. The title is descriptive. The two capabilities reflect the professional project; the diagrams, PRD, backlog, synthetic examples, and evaluation plans are retrospective portfolio reconstructions.",
    "problem": "SLA information was spread across documents with different layouts, contractual definitions, targets, and conditions. Analysts had to extract and reconcile that information before it could support consistent business reporting. Power BI addressed reporting needs; a later RAG assistant addressed the separate need to find and understand SLA content in natural language.",
    "persona": "Operations lead / SLA analyst",
    "empathy": "SLA analysts need reviewable fields and source context. Reporting teams need approved KPI mappings that fit downstream data assets. Business users need Power BI views for performance analysis and conversational access for questions about definitions, targets, and contractual conditions.",
    "discovery": [
      "Professional context: document variability, merged cells, repeated attributes, and schema expansion informed the workflow requirements.",
      "Reconstructed discovery: map analyst review, dashboard use, and document lookup as distinct user journeys. No interview findings or quotes are presented.",
      "Further validation proposed: observe representative reporting and SLA lookup tasks; establish separate baselines for review effort and time to a supported answer."
    ],
    "ai": "Azure AI Document Intelligence handles OCR and layout extraction for scanned and digital documents. Azure OpenAI supports semantic interpretation, KPI identification, and mapping inconsistent terms to business definitions. RAG subsequently makes relevant SLA content available to a language model for contextual answers. Structured checks, approved mappings, and human validation remain essential.",
    "alternative": "Use conventional parsing for stable layouts and explicit fields, SQL and data pipelines for structured transformations, and Power BI for reporting. AI adds value where language and document structure vary. Conversational retrieval complements dashboards; it does not replace deterministic metric calculations.",
    "decision": "Build validated KPI extraction and Power BI reporting first, then add document-grounded conversational access. Preserve the distinction between contractual SLA knowledge and live operational performance.",
    "metrics": [
      [
        "Field extraction accuracy",
        "Correct annotated field values ÷ annotated required fields",
        "Proposed held-out document review; no historical score",
        "Prevents missing or incorrect definitions, targets and conditions."
      ],
      [
        "Semantic mapping accuracy",
        "Correct approved-definition and asset mappings ÷ reviewed mapping decisions",
        "Business-owner gold labels; analyse ambiguous mappings separately",
        "Prevents equivalent labels being confused with different contractual obligations."
      ],
      [
        "Source traceability",
        "Extracted fields with correct supporting document context ÷ reviewed fields",
        "Audit source/context linkage; separate from chatbot citations",
        "Lets reviewers resolve errors before reporting publication."
      ],
      [
        "Retrieval relevance",
        "Relevant evidence retrieved ÷ reviewed retrieved items; also track evidence coverage",
        "Proposed expert-labelled SLA question set",
        "Identifies whether retrieval gives the model the material needed to answer."
      ],
      [
        "Answer correctness and groundedness",
        "Correct answers ÷ reviewed answers; supported factual claims ÷ reviewed factual claims",
        "Score separately using SLA references and an analyst rubric",
        "Separates an accurate conclusion from one merely phrased convincingly."
      ],
      [
        "Unsupported-answer rate",
        "Answers containing unsupported factual claims ÷ reviewed answers",
        "Include unanswerable and contradictory questions; report counts",
        "Determines whether scope or retrieval must be tightened before expansion."
      ],
      [
        "Human correction and task completion",
        "Corrected fields ÷ reviewed fields; correctly completed tasks ÷ attempted tasks",
        "Reviewer workflow and observed user tasks; baseline not documented",
        "Shows hidden review work and whether users finish their actual task."
      ],
      [
        "Latency and total task cost",
        "p50/p95 end-to-end duration; processing + retry + review cost ÷ successful tasks",
        "Separate documents and questions; establish budgets before a pilot",
        "Balances user responsiveness and operating cost with quality."
      ]
    ],
    "architecture": [
      "SLA documents",
      "OCR & layout",
      "KPI extraction & mapping",
      "Validation & human review",
      "Approved structured data",
      "Power BI dashboards"
    ],
    "archNote": "Capability 1: SharePoint and Power Automate support intake; Azure AI Document Intelligence extracts OCR/layout; Azure OpenAI supports interpretation and KPI mapping. SQL tracks structured records and validation. Azure Data Factory and Databricks support downstream integration with Hive-based data assets and reporting tables; Power BI presents analytics. Capability 2 was added later: user question → retrieval of relevant SLA content → context-grounded generation → response. The available evidence does not establish a specific index service, chunking strategy, citation feature, or live dashboard query integration.",
    "tradeoffs": [
      [
        "Flexible schema vs. reliable reporting",
        "Use a versioned canonical KPI model, retaining additional attributes separately to contain schema expansion."
      ],
      [
        "Automation vs. accountability",
        "Propose extracted values with evidence; require review for ambiguity and preserve validation status."
      ],
      [
        "Fast answers vs. grounded answers",
        "Retrieve approved records and source passages; decline answers without sufficient evidence."
      ]
    ],
    "prd": {
      "goal": "Turn document-bound SLA commitments into approved KPI data, business analytics, and subsequent natural-language access to SLA knowledge.",
      "user": "SLA analysts, reporting teams, operations leaders, and business users.",
      "include": "Original capability: document intake, OCR/layout, KPI extraction and semantic mapping, validation, structured data integration, and Power BI dashboards. Subsequent enhancement: retrieval and context-grounded answers about SLA content.",
      "exclude": "Autonomous contract changes, legal advice, unvalidated data publication, and claims of live Power BI queries or guaranteed citations in the assistant.",
      "requirements": "Capture KPI name, definition, target, unit, threshold, period, conditions and exclusions when present. Preserve contractual context and source references. Map to approved business definitions and downstream assets. Require validation before publication. Keep conversational answers within retrieved SLA evidence.",
      "failure": "Unreadable input requires review or a clearer document. Conflicting fields retain both contexts for resolution. Unmapped definitions remain exceptions. Proposed assistant acceptance behavior: say when the available SLA evidence cannot support an answer and route the question for review."
    },
    "backlog": [
      [
        "P0 · Original capability",
        "Document intake and OCR/layout",
        "Preserve document identity and layout context; unreadable or incomplete inputs enter review."
      ],
      [
        "P0 · Original capability",
        "KPI extraction and semantic mapping",
        "Retain definition, target, unit and conditions where present; unresolved business mappings cannot be silently accepted."
      ],
      [
        "P0 · Original capability",
        "Validation and downstream reporting",
        "Only approved records enter reporting; reconcile document, KPI mapping and dashboard interpretation."
      ],
      [
        "P1 · Subsequent enhancement",
        "SLA conversational retrieval",
        "Given a question about an SLA clause, retrieve relevant document content before generating an answer; do not describe a contractual target as measured performance."
      ],
      [
        "P1 · Reconstructed quality requirement",
        "Insufficient or conflicting answer evidence",
        "Communicate insufficient evidence or ambiguity; unsupported answers fail qualification."
      ],
      [
        "P1 · Proposed improvement",
        "Regression and monitoring loop",
        "Map each confirmed failure to a regression case, accountable backlog item and re-release decision."
      ]
    ],
    "steps": [
      [
        "Extract",
        "Capture the contractual fields",
        "A synthetic logistics clause illustrates the extraction shape; it is not a client document or a verified implemented KPI.",
        "Illustrative clause: “The on-time delivery target is 98% for the monthly reporting period. Approved customer-requested deferrals are excluded.”"
      ],
      [
        "Map & review",
        "Preserve the agreement’s meaning",
        "Keep the source label, target, period and exclusion together. A business reviewer must approve any mapping to a canonical definition.",
        "Synthetic fields: name = on-time delivery; target = 98%; period = monthly; exclusion = approved customer deferrals; formula = not specified."
      ],
      [
        "Analyse",
        "Make approved information usable in Power BI",
        "Validated structured KPI data supports reporting integration and Power BI dashboard analysis. This is a workflow illustration, not a dashboard screenshot.",
        "Original capability: approved records → downstream data assets → reporting tables → Power BI."
      ],
      [
        "Ask",
        "Add conversational access to SLA content",
        "Later, a user can ask about the relevant contractual condition. The RAG workflow retrieves SLA evidence and uses that context to formulate an answer.",
        "Synthetic question: “Which deferrals are excluded?”\nSupported content: approved customer-requested deferrals.\nThis does not establish current delivery performance."
      ]
    ],
    "offline": [
      [
        "Evidence status",
        "Reconstructed evaluation design; no execution scores or dataset size are claimed. Software tests, deterministic validation, model-quality evaluation and human review must be reported separately."
      ],
      [
        "Document dataset",
        "Curate authorised or synthetic scanned/digital documents with varied layouts, merged cells, repeated fields and conflicting targets. Split by contract family/version to prevent leakage."
      ],
      [
        "Extraction and mapping labels",
        "Domain reviewers label required fields, source context and approved business/asset mappings; adjudicate disagreements. Slice failures by field, layout and scan quality."
      ],
      [
        "RAG dataset",
        "Create answerable, unanswerable, conflicting and live-performance questions with relevant source passages and reference answers. Evaluate retrieval before answer generation."
      ],
      [
        "Release analysis",
        "Compare versions on the same held-out set. Record per-capability failures, critical regressions, abstentions, correction effort, latency and cost. Source-attribution scoring applies only if a citation feature is verified."
      ]
    ],
    "online": [
      [
        "Document and reporting quality",
        "Proposed: sample approved records and downstream mappings; track corrections, reconciliation errors, queue age and document-format drift."
      ],
      [
        "Conversational quality",
        "Proposed: sample permission-controlled traces and analyst reviews for correctness, groundedness, unsupported answers, evidence insufficiency and retrieval failure."
      ],
      [
        "Operations and privacy",
        "Proposed: track latency, tool failures and total task cost with redacted logs, access restrictions and defined retention. LangSmith is a possible tracing/evaluation improvement, not a tool claimed for this project."
      ],
      [
        "Business outcomes",
        "Proposed: measure processing/review effort, reporting-task completion, time to a supported SLA answer and repeat usage against comparable manual tasks. Do not infer business uplift from model scores."
      ]
    ],
    "evalCases": [
      [
        "DOC-01",
        "Merged target cells and repeated KPI names",
        "Preserve header/condition context and map the applicable field to its source.",
        "Material"
      ],
      [
        "MAP-01",
        "Same label, different contractual exclusions",
        "Keep the definitions distinct until an approved business mapping resolves them.",
        "Material"
      ],
      [
        "DOC-02",
        "Conflicting targets across clauses",
        "Retain both contexts and require resolution before reporting publication.",
        "Critical"
      ],
      [
        "RAG-01",
        "Question answerable from the SLA",
        "Retrieve the relevant content and return an answer supported by that content.",
        "Material"
      ],
      [
        "RAG-02",
        "Insufficient or conflicting evidence",
        "State the limitation or ambiguity; do not invent the missing fact.",
        "Critical"
      ],
      [
        "RAG-03",
        "“What was our actual OTIF performance yesterday?”",
        "Do not infer live operational performance from a contractual SLA target.",
        "Critical"
      ]
    ],
    "launch": "Professional project sequence: document processing, KPI mapping and Power BI dashboards, followed by the RAG assistant. The release gates and pilot sequence described here are reconstructed recommendations, not a claim about the original launch procedure.",
    "gate": "Proposed release decision: agree task-specific quality thresholds with business owners; resolve critical extraction and mapping failures; verify approval boundaries and downstream reconciliation; qualify retrieval and answers separately; demonstrate support, privacy controls and rollback. No historical scores or universal numerical threshold is asserted.",
    "rollback": "Proposed operating control: pause affected reporting publication on material mapping errors and route documents to manual review. Disable conversational answers for affected content when evidence quality fails; retain dashboard access where unaffected. Revert the relevant model, prompt, mapping, or retrieval configuration after impact review.",
    "next": "Separate extraction errors, mapping errors, retrieval failures, and unsupported answers in the feedback backlog. Requalify affected document families and question types before each release.",
    "sources": [],
    "slug": "sla-document-intelligence",
    "featured": true,
    "status": "Professional experience",
    "users": "SLA analysts & operations leaders",
    "evidence": "Professional project context · two-capability architecture · reconstructed product artifacts",
    "contribution": "Product definition, phased MVP scope, user stories, acceptance criteria, and coordination across extraction, KPI mapping, analytics, and subsequent conversational access.",
    "learning": "Extraction, reporting, and conversational access solve different tasks. A correct extracted target is not a live performance reading, and a fluent answer is not evidence of correctness. Prioritise source-backed mappings and independent retrieval/answer evaluation before expanding coverage.",
    "outcome": "Delivered connected capabilities for turning SLA documents into structured KPI information, analysing performance through Power BI dashboards, and retrieving and understanding SLA content through a subsequent RAG assistant. Numerical business impact and production evaluation scores are not presented."
  },
  {
    "id": "yoyo",
    "slug": "yoyo-prospecting-agent",
    "name": "LinkedIn Prospect Research & Personalised Outreach Agent",
    "headline": "Research-led prospecting with a human decision at the end.",
    "summary": "A local B2B prospecting prototype that connects account research, capability mapping, draft validation, and human review.",
    "category": "B2B SaaS / Agentic AI",
    "kind": "Independent prototype",
    "visual": "yoyo",
    "featured": true,
    "status": "Local prototype · offline-tested",
    "users": "Sales development & account teams",
    "role": "Independent product definition & AI workflow design",
    "period": "Prototype reviewed · October 2026",
    "scope": "Prospect context → research → strategy → draft → review",
    "evidence": "158 offline tests passed · 11 live tests skipped · genuine prototype UI",
    "contribution": "Define the prospecting workflow, qualify product claims, scope human review, and translate reliability requirements into agent handoffs and acceptance criteria.",
    "disclosure": "Independent prototype for researching user-supplied prospect context and preparing personalised outreach drafts. It does not log into LinkedIn, scrape profiles, or send messages. No employment, partnership, or endorsement by LinkedIn or YOYO is implied. Offline checks use mocked provider responses; customer response and conversion outcomes have not been measured.",
    "problem": "Sales teams must research an account, decide whether it is relevant, identify a supported business need, and write a credible first message. Manual research is inconsistent, while automated outreach can produce generic copy or unsupported claims. The product opportunity is to reduce research effort while preserving relevance, factual support, and reviewer control.",
    "persona": "Sales development representative / sales manager",
    "quote": "Give me a relevant reason to contact this account, and show me the evidence before I approve the message.",
    "empathy": "The sales representative needs a concise research brief and an editable draft. The sales manager needs consistent qualification and a review trail. Both need the product to distinguish a verified account signal from a role-based hypothesis.",
    "discovery": [
      "Map the current account-research and message-review workflow with sales users.",
      "Compare generic drafting with evidence-led drafting on the same prospect set.",
      "Validate qualification criteria, reviewer workload, and acceptable research cost before testing outbound engagement."
    ],
    "ai": "Web research collects account evidence. Specialist model calls select an outreach angle and draft a message from a bounded brief. Deterministic checks enforce identity, approved capabilities, evidence linkage, and review state. LangGraph coordinates the workflow and pauses for a human decision.",
    "alternative": "Use a rules-based eligibility check and a fixed template when context is limited. Reserve model calls for research synthesis and account-specific drafting. Do not add model agents for exact validation or database updates.",
    "decision": "Separate verified account signals from role-based hypotheses. Hold unsupported claims and require human approval rather than allowing the workflow to send messages.",
    "metrics": [
      [
        "Qualification precision",
        "Reviewer-confirmed suitable prospects ÷ prospects marked eligible",
        "Proposed pilot metric",
        "Prevents research and review effort being spent on irrelevant accounts."
      ],
      [
        "Evidence coverage",
        "Draft factual claims linked to valid supporting evidence ÷ factual claims",
        "Required before review",
        "Protects against unsupported account and product assertions."
      ],
      [
        "Draft approval / edit rate",
        "Approved unchanged or edited drafts ÷ reviewed drafts",
        "Track separately by strategy and reviewer",
        "Shows whether the output reduces effort or merely shifts it to editing."
      ],
      [
        "Positive reply rate",
        "Prospects with a positive reply ÷ distinct prospects manually contacted",
        "Future real-outreach pilot only",
        "Tests whether relevance translates into qualified engagement."
      ],
      [
        "Qualified meeting conversion",
        "Qualified meetings ÷ distinct contacted prospects",
        "Future real-outreach pilot only",
        "Connects drafting quality with a commercial outcome."
      ],
      [
        "Time per reviewed prospect",
        "Research + drafting + review time per prospect",
        "Compare with the manual baseline",
        "Measures net productivity after human review."
      ],
      [
        "Cost per reviewed prospect",
        "Provider + search + operational cost ÷ reviewed prospects",
        "Set budget after representative runs",
        "Makes the workflow economically viable."
      ],
      [
        "Opt-out / complaint rate",
        "Opt-outs or complaints ÷ distinct contacted prospects",
        "Pilot guardrail",
        "Prevents engagement gains at the expense of recipient trust."
      ]
    ],
    "architecture": [
      "CSV validation",
      "Context & eligibility",
      "OpenAI web search",
      "Opportunity strategy",
      "Draft & validation",
      "Human review / SQLite"
    ],
    "archNote": "Verified implementation: Streamlit UI, Python validation, OpenAI Responses SDK with hosted web search, LangGraph state transitions and interrupts, and SQLite persistence. Tavily, Firecrawl, numerical ICP scoring, and automatic message sending are not implemented in this version.",
    "tradeoffs": [
      [
        "Evidence-led vs. role-led drafting",
        "Use verified company evidence when available. If research fails, permit a bounded role-led question or hold the prospect; never invent an account event."
      ],
      [
        "Agent autonomy vs. reviewer control",
        "Generate a draft, validate it, and pause for Approve, Edit, or Reject. No sending capability exists."
      ],
      [
        "Flexible research vs. bounded cost",
        "The normal path has three specialist model calls. Follow-up research and writer corrections are bounded; exact validation runs in Python."
      ],
      [
        "Throughput vs. review integrity",
        "Process prospects independently and persist identifiers. Resume the correct review thread and reject stale or mismatched records."
      ]
    ],
    "prd": {
      "goal": "Help sales users prepare supported, relevant outreach with less manual research and a clear approval trail.",
      "user": "Sales development representatives, account researchers, and sales managers.",
      "include": "CSV upload and validation; context normalization; capability eligibility; account research; opportunity strategy; outreach draft; deterministic validation; persistent Approve/Edit/Reject review.",
      "exclude": "LinkedIn login or scraping, direct Sales Navigator API integration, automatic sending, distributed deployment, and numerical ICP scoring.",
      "requirements": "Retain evidence provenance; hold company/title conflicts; restrict product claims to approved wording; isolate prospect state; validate edited drafts; prevent duplicate review events.",
      "failure": "Research failure → bounded role-led fallback or hold. Unsupported claims → correction, then hold if unresolved. Stale review state → suppress action controls and require a fresh record."
    },
    "backlog": [
      [
        "P0 · implemented",
        "Validate prospect input",
        "Missing required fields and conflicting company/title values hold the affected row."
      ],
      [
        "P0 · implemented",
        "Evidence-aware strategy",
        "Signal-led drafting requires supported company evidence; role-led output must not invent account events."
      ],
      [
        "P0 · implemented",
        "Human approval",
        "Approve, Edit, and Reject resume the correct thread; edited copy is revalidated."
      ],
      [
        "P0 · implemented",
        "Idempotent review",
        "A repeated submission or review event does not create duplicate execution or decisions."
      ],
      [
        "P1 · proposed",
        "Numerical ICP scoring",
        "Define transparent, reviewer-labeled eligibility criteria before adding a score and threshold."
      ],
      [
        "P1 · proposed",
        "Controlled outreach experiment",
        "Record consented manual outreach outcomes with distinct-prospect denominators; synthetic rows remain excluded."
      ]
    ],
    "steps": [
      [
        "Input",
        "Validate the prospect",
        "The implemented workflow normalizes CSV fields and holds missing or conflicting identity data.",
        "SYNTHETIC EXAMPLE\nCompany: Example Motors\nRole: Head of dealer development\nStatus: eligible context / no field conflict"
      ],
      [
        "Research",
        "Choose a supported outreach angle",
        "The research and strategy stages distinguish source-backed company signals from a role-based hypothesis.",
        "Evidence available → signal-led strategy\nEvidence unavailable → role-led question or hold\nNo invented company initiative"
      ],
      [
        "Validate",
        "Check the draft before review",
        "Deterministic validation checks approved product wording, evidence linkage, and unsupported assertions.",
        "Unsupported product or performance claim → correction\nOne bounded correction → revalidate\nUnresolved issue → HOLD"
      ],
      [
        "Review",
        "Keep the human decision explicit",
        "The graph pauses for a reviewer. Edits are validated and linked to the previous draft.",
        "Actions: Approve / Edit / Reject\nPersistence: draft + version + review event\nMessage sending: not implemented"
      ]
    ],
    "offline": [
      [
        "Executed checks",
        "The full offline suite passed 158 tests in 37.71 seconds; 11 opt-in live-provider tests were skipped. Coverage includes agent contracts, persistence, review controls, Streamlit UI and startup, and claim boundaries. This is software regression evidence, not model-quality accuracy."
      ],
      [
        "Dataset and boundaries",
        "Tests use synthetic prospect fixtures, API-shaped doubles, temporary SQLite databases, and real LangGraph checkpoints. No real outreach was sent."
      ],
      [
        "Release-blocking failures",
        "Unsupported product expansion, wrong-prospect review, unlinked evidence, duplicate events, or synthetic contacts entering real outcome metrics."
      ],
      [
        "Model-quality evaluation",
        "Create a separate reviewer-labeled dataset for qualification and message relevance. Historical documents describe synthetic live smoke checks; no live API check was re-run for this portfolio update."
      ]
    ],
    "online": [
      [
        "Reviewer workflow",
        "Track unchanged approval, edits, rejection reasons, review time, and repeated use in a limited internal pilot."
      ],
      [
        "Commercial experiment",
        "Only after manual outreach is authorized, compare evidence-led and baseline messages with predeclared segmentation and sample-size requirements."
      ],
      [
        "Correct denominators",
        "Measure positive replies and qualified meetings per distinct manually contacted prospect; exclude synthetic rows."
      ],
      [
        "Quality and trust",
        "Audit factual support and generic or duplicate copy; track opt-outs, complaints, dependency failures, and cost."
      ]
    ],
    "evalCases": [
      [
        "YOYO-01",
        "Conflicting company or title",
        "Hold the prospect until the conflicting fields are resolved.",
        "Critical"
      ],
      [
        "YOYO-02",
        "Unsupported performance claim",
        "Request bounded correction; hold if the claim remains unsupported.",
        "Critical"
      ],
      [
        "YOYO-03",
        "Repeated review submission",
        "Apply the decision once to the correct persisted draft.",
        "Material"
      ]
    ],
    "launch": "Current state: a local prototype with source-reviewed workflow and focused offline regression evidence. Proposed next steps: representative live-model evaluation, staff-only review pilot, then a controlled manual-outreach experiment. It is not a production SaaS deployment.",
    "gate": "Require valid evidence boundaries, isolated prospect state, reliable review actions, and no unresolved critical regressions. Pilot approval also requires acceptable reviewer-labeled relevance, cost, and manual-review effort.",
    "rollback": "Pause new jobs on provider or integrity failures. Preserve persisted drafts and review records. Return to manual research and drafting; do not automatically replay interrupted paid calls.",
    "next": "Prioritize reviewer-labeled prospect suitability and draft relevance. Add numerical ICP scoring only after eligibility criteria are stable and validated.",
    "outcome": "Implemented CSV-to-human-review workflow with persistent state and bounded model/tool stages. The full offline suite passed 158 tests; 11 opt-in live-provider tests were skipped. There is no measured reply-rate, meeting-conversion, or customer-efficiency improvement.",
    "learning": "Reliability depends on evidence boundaries and review-state integrity as much as message quality. The next product decision is whether the workflow saves reviewer time while improving qualified engagement.",
    "sources": []
  },
  {
    "id": "cartwise",
    "name": "CartWise",
    "category": "Commerce / Product discovery",
    "kind": "Independent design study",
    "visual": "cart",
    "headline": "CartWise · AI Shopping Advisor",
    "summary": "Translate shopping requirements into product constraints, explain trade-offs, and build a suitable shortlist.",
    "tags": [
      "Agentic commerce",
      "Recommendations",
      "Experiment design",
      "Catalog grounding"
    ],
    "role": "Independent product strategy & design",
    "period": "Portfolio study · 2026",
    "scope": "Discover → compare → shortlist",
    "disclosure": "Independent product design. The catalog and shopping journey are synthetic. Evaluation targets and deployment steps are proposed; purchase conversion has not been measured.",
    "problem": "A shopper choosing a commuter backpack must compare laptop compatibility, budget, weather protection, and availability across multiple pages. Filters narrow the catalog, but the shopper still has to interpret specifications and resolve trade-offs.",
    "persona": "Shopper choosing a commuter backpack",
    "quote": "I know what I need it for. I don’t know which specifications actually matter.",
    "empathy": "The shopper needs a suitable product and a reason to trust the recommendation. A low price is not useful if the laptop does not fit. Merchants need accurate product claims, current inventory, and a smooth checkout handoff.",
    "discovery": [
      "Observe shoppers selecting a backpack using conventional filters.",
      "Identify abandoned searches, repeated comparisons, and non-negotiable constraints.",
      "Test whether conversation adds value versus a better filter interface before committing to an agent."
    ],
    "ai": "Natural-language understanding converts the shopper’s request into explicit constraints. Retrieval finds matching products. The model explains catalog-backed trade-offs and asks for missing preferences. Deterministic filters enforce budget, compatibility, price, and inventory.",
    "alternative": "Keep conventional filters and a comparison table. Evaluate whether conversation improves complex decisions enough to justify additional interaction.",
    "decision": "Treat budget and compatibility as hard constraints. If no product qualifies, explain the conflict and ask which requirement can change.",
    "metrics": [
      [
        "Constraint satisfaction",
        "Recommendations meeting every hard constraint ÷ recommendations",
        "Proposed: 100% in qualification",
        "Protects the shopper from unsuitable recommendations."
      ],
      [
        "Grounded-claim accuracy",
        "Supported product claims ÷ reviewed product claims",
        "Proposed: zero unsupported claims in qualification",
        "Builds trust in dimensions, features, price, and availability."
      ],
      [
        "Selection completion",
        "Users selecting a qualifying product ÷ task participants",
        "Compare with conventional filters",
        "Measures whether the assistant helps users reach a suitable decision."
      ],
      [
        "Time to shortlist",
        "Median time to select suitable options",
        "Compare identical tasks across both experiences",
        "Measures reduction in comparison effort."
      ],
      [
        "Checkout handoff rate",
        "Users proceeding to checkout ÷ eligible sessions",
        "Measure in a merchant pilot",
        "Connects product discovery with commercial intent."
      ],
      [
        "Wrong-fit feedback",
        "Confirmed suitability complaints ÷ completed purchases",
        "Monitor only after real merchant deployment",
        "Checks that short-term engagement does not reduce purchase quality."
      ]
    ],
    "architecture": [
      "User intent",
      "Constraint extraction",
      "Catalog search",
      "Deterministic checks",
      "Rank & explain",
      "Cart handoff"
    ],
    "archNote": "Proposed MVP: one synthetic backpack catalog; required structured fields; retrieval plus constraint filters; evidence-linked comparison; cart preview. Checkout is a handoff design, not an autonomous payment capability.",
    "tradeoffs": [
      [
        "Personalization vs. friction",
        "Ask one consequential question at a time. Do not require a long profile before showing useful options."
      ],
      [
        "Fluent answers vs. factual claims",
        "Every recommendation references catalog attributes; missing features stay unknown."
      ],
      [
        "Conversion vs. fit",
        "Do not sacrifice explicit constraints for a more expensive or higher-margin recommendation."
      ]
    ],
    "prd": {
      "goal": "Help shoppers form a suitable shortlist with less effort than browsing alone.",
      "user": "English-speaking shoppers selecting a commuter backpack.",
      "include": "Budget and laptop-size constraints, use-case clarification, three-option comparison, explanations, no-match recovery, and sandbox cart preview.",
      "exclude": "Real checkout, autonomous payments, cross-merchant scraping, and unsupported claims about comfort or water resistance.",
      "requirements": "Use catalog-backed specifications; preserve hard constraints; expose trade-offs; handle unavailable stock; recheck price and availability at handoff.",
      "failure": "No valid match → explain and ask to revise constraints. Missing laptop dimensions → ask, not guess. Price/stock change → disclose before proceeding."
    },
    "backlog": [
      [
        "P0",
        "Hard constraints",
        "Given a budget of ₹4,000, no item above ₹4,000 appears as a qualifying recommendation."
      ],
      [
        "P0",
        "Evidence-based fit",
        "Given a 16-inch laptop request, confirm compatibility only where catalog dimensions or fit data support it."
      ],
      [
        "P0",
        "No-match recovery",
        "Given no item satisfies all hard constraints, show no-match and ask which constraint can change."
      ],
      [
        "P1",
        "Comparison",
        "Given a shortlist, compare the same attributes and mark missing values as unknown."
      ],
      [
        "P1",
        "Cart handoff",
        "Given stock or price changes, require renewed confirmation before handoff."
      ]
    ],
    "steps": [
      [
        "Understand",
        "Start with a real need",
        "The shopper asks for a commuter backpack with a clear spending limit.",
        "“A backpack under ₹4,000 for my 16-inch laptop and daily commute.”"
      ],
      [
        "Clarify",
        "Ask the question that changes the choice",
        "The assistant clarifies whether weather protection is a must-have.",
        "“Is a rain cover essential, or is light splash resistance enough?”\nSelected: rain cover essential"
      ],
      [
        "Compare",
        "Explain the shortlist",
        "A synthetic catalog yields one qualifying product; another fails the rain-cover requirement.",
        "ILLUSTRATIVE CATALOG\nMetro 24: ₹3,600 · 16-inch fit · rain cover\nTrail 20: ₹3,200 · 16-inch fit · no rain cover"
      ],
      [
        "Handoff",
        "Confirm before continuing",
        "The cart preview repeats specifications and checks availability. Real purchase completion is outside this walkthrough.",
        "Selected: Metro 24\nTotal: ₹3,600 (synthetic)\nAction: revalidate stock → merchant checkout"
      ]
    ],
    "offline": [
      [
        "Dataset",
        "50 development shopping scenarios plus separate held-out scenarios; include no-match, missing specs, conflicting preferences, and adversarial requests."
      ],
      [
        "Gold criteria",
        "Label explicit hard constraints and the qualifying catalog set. Use human judgments for preference ranking."
      ],
      [
        "Checks",
        "Constraint satisfaction, grounded claims, price/stock correctness, ranking relevance, and cart-state correctness."
      ],
      [
        "Regression",
        "Evaluate catalog updates and prompt changes by task difficulty; re-run after inventory and policy changes."
      ]
    ],
    "online": [
      [
        "Task study",
        "Randomize shoppers between conversational assistance and filters; counterbalance task order and use consistent catalogs."
      ],
      [
        "User value",
        "Measure successful selection, time to shortlist, perceived effort, and post-task confidence."
      ],
      [
        "Behavior",
        "Track accepted recommendations, changes to constraints, handoff and abandonment; distinguish curiosity from purchase intent."
      ],
      [
        "Guardrails",
        "Audit wrong-fit complaints and unsupported product claims. Real sales uplift requires merchant traffic and a powered experiment."
      ]
    ],
    "evalCases": [
      [
        "CART-01",
        "Budget + laptop + rain cover",
        "Recommend only products satisfying all three constraints.",
        "Material"
      ],
      [
        "CART-02",
        "No qualifying item",
        "Explain no match and clarify; do not quietly relax the budget.",
        "Material"
      ],
      [
        "CART-03",
        "Inventory changes mid-session",
        "Revalidate and disclose unavailability before handoff.",
        "Material"
      ]
    ],
    "launch": "Proposed release: moderated prototype sessions → sandbox task study → one-category merchant pilot → gradual catalog expansion. Use the same catalog and product availability across experiment arms.",
    "gate": "Proposed gate: no explicit hard-constraint violations or unsupported specifications in qualification; users can understand and correct preferences. Pilot expansion depends on observed task success, not a claimed conversion target.",
    "rollback": "Fall back to conventional filters on catalog outages, unsupported claims, or invalid cart states. Disable recommendation generation while preserving the product list and user-selected constraints.",
    "next": "Run a counterbalanced shopping study against filters. Evaluate suitability, selection time, effort, and confidence before testing real checkout conversion.",
    "sources": [],
    "slug": "cartwise",
    "featured": true,
    "status": "Independent design study",
    "users": "Shoppers comparing commuter backpacks",
    "evidence": "Product requirements · constraint tests · scripted walkthrough",
    "contribution": "Problem framing, AI suitability assessment, MVP scope, recommendation guardrails, and experiment design.",
    "outcome": "This study defines a testable shopping workflow and a filter-based comparison experience. Customer interviews, model evaluations, and purchase experiments remain planned.",
    "learning": "Conversation is valuable only when it improves the selection. The next decision is whether clarification reduces wrong-fit choices enough to justify additional turns."
  },
  {
    "id": "evalgate",
    "name": "EvalPilot",
    "category": "AI platform / Evaluation",
    "kind": "Independent design study",
    "visual": "eval",
    "headline": "EvalPilot · AI Evaluation & Release Management",
    "summary": "Compare AI versions, investigate regressions, and make release decisions using quality, risk, latency, and cost.",
    "tags": [
      "AI evaluation",
      "Release gates",
      "Human review",
      "Observability"
    ],
    "role": "Independent product strategy & design",
    "period": "Portfolio study · 2026",
    "scope": "Compare → inspect → decide",
    "disclosure": "Independent product design. Screens and scenarios are illustrative. Evaluation targets and deployment steps are proposed; live results are not claimed.",
    "problem": "AI teams review model quality, latency, and cost separately. An update can improve the overall pass rate while introducing a critical failure. Product and engineering teams need a consistent way to identify regressions and decide whether a candidate is ready for release.",
    "persona": "AI PM / evaluation lead",
    "quote": "Show me what broke, who it affects, and whether the improvement is worth the risk.",
    "empathy": "The AI PM needs an explainable go/no-go decision. Engineers need the failing input, output, tool response, and version. Domain reviewers need a focused queue for ambiguous results. Each role needs the same evidence and a clear decision owner.",
    "discovery": [
      "Observe an existing release review and map how evidence is assembled.",
      "Interview AI PMs, engineers, and reviewers about missed regressions and false alarms.",
      "Baseline review time, decision disagreements, and evidence gaps before proposing automation."
    ],
    "ai": "An LLM judge scores criteria such as relevance and policy adherence. Failure clustering helps reviewers identify recurring issues. Deterministic checks calculate exact matches, costs, missing cases, and release gates. Human reviewers adjudicate disputed judgments.",
    "alternative": "Use scripts and spreadsheets for a small, stable test suite. A shared product becomes valuable when repeated releases, multiple reviewers, and different evaluators make decisions difficult to reproduce.",
    "decision": "Block a candidate with a confirmed critical regression even when its average pass rate improves.",
    "metrics": [
      [
        "Critical-defect recall",
        "Detected critical defects ÷ known critical defects",
        "Proposed: 100% on seeded qualification cases",
        "Measures whether the platform catches release-blocking failures."
      ],
      [
        "False approval rate",
        "Unsafe candidates approved ÷ unsafe candidates reviewed",
        "Proposed: zero in qualification; monitor in pilot",
        "Prevents a misleading release recommendation."
      ],
      [
        "False block rate",
        "Acceptable candidates blocked ÷ acceptable candidates reviewed",
        "Set the threshold with pilot reviewers",
        "Controls unnecessary release delays and alert fatigue."
      ],
      [
        "Human–judge agreement",
        "Matching labels ÷ independently reviewed judgments",
        "Proposed: ≥90% per criterion before automation",
        "Shows whether automated scoring reflects domain expectations."
      ],
      [
        "Release review time",
        "Median time to complete a version comparison",
        "Proposed: 30% below the existing workflow",
        "Measures product value for the team making the decision."
      ],
      [
        "Evaluation cost",
        "Total grading cost ÷ evaluated traces",
        "Track by evaluator and task type",
        "Keeps continuous evaluation affordable."
      ]
    ],
    "architecture": [
      "Trace / dataset import",
      "Versioned evaluators",
      "Comparison engine",
      "Human review",
      "Release policy",
      "Decision record"
    ],
    "archNote": "Proposed MVP: one JSON trace format, two text-based task types, versioned datasets, deterministic checks, an optional calibrated judge, and a manual release approval. Continuous deployment control is out of scope.",
    "tradeoffs": [
      [
        "Judge automation vs. trustworthy labels",
        "Calibrate fuzzy criteria against independent human labels; preserve unknown and disagreement states."
      ],
      [
        "One score vs. useful slices",
        "Show task, language, risk, and failure-category slices; a weighted average cannot override a critical gate."
      ],
      [
        "Broad platform vs. a buildable MVP",
        "Support two trace types first; defer SDKs, agent hosting, and enterprise connectors."
      ]
    ],
    "prd": {
      "goal": "Help an AI team compare two versions and produce an auditable go / no-go recommendation.",
      "user": "AI product manager, AI engineer, and domain reviewer.",
      "include": "Dataset upload, baseline/candidate comparison, per-case evidence, human labels, versioned thresholds, and release report.",
      "exclude": "Training models, hosting agents, automatic production rollout, and claiming a universal quality score.",
      "requirements": "Pin dataset and evaluator versions; flag missing runs; keep human adjudication separate; retain the reason for each blocked gate.",
      "failure": "Missing evidence → incomplete. Judge disagreement → human review. Critical regression → block regardless of average improvement."
    },
    "backlog": [
      [
        "P0",
        "Comparable versions",
        "Given two runs, compare only matching case IDs and report missing or duplicate IDs."
      ],
      [
        "P0",
        "Critical release gate",
        "Given one confirmed critical regression, show BLOCK even if the average score improves."
      ],
      [
        "P0",
        "Evidence inspection",
        "Given a failed criterion, show input, output, rule/judge rationale, and evaluator version."
      ],
      [
        "P1",
        "Human adjudication",
        "Given a reviewer disagrees, preserve both labels and record the decision and rationale."
      ],
      [
        "P1",
        "Live trace sampling",
        "Given pilot traces, sample by risk as well as random selection and redact sensitive fields."
      ]
    ],
    "steps": [
      [
        "Import",
        "Start with comparable evidence",
        "Select a versioned dataset and import baseline and candidate outputs. Match case IDs before comparing.",
        "Dataset: booking-scenarios-v1\nBaseline: prompt-v1\nCandidate: prompt-v2"
      ],
      [
        "Compare",
        "An average can hide a failure",
        "A synthetic candidate improves an illustrative average but incorrectly books an unavailable slot.",
        "ILLUSTRATIVE DATA\nBaseline: 40 / 50 pass\nCandidate: 44 / 50 pass\nCritical regression: VOICE-017"
      ],
      [
        "Inspect",
        "Read the case behind the score",
        "A reviewer compares the tool response, final booking state, and agent claim.",
        "Tool response: slot_unavailable\nAgent: “Your appointment is confirmed.”\nReviewer: critical false confirmation"
      ],
      [
        "Decide",
        "Block for a reason",
        "The policy blocks this candidate. The release report records the failed gate and next action.",
        "Recommendation: BLOCK\nReason: false booking confirmation\nNext: fix state handling; re-run full suite"
      ]
    ],
    "offline": [
      [
        "Dataset",
        "Seed known defects into trace pairs; include clean pairs and ambiguous outputs. Hold out defect families when testing generalization."
      ],
      [
        "Independent labels",
        "Two reviewers label criticality and correctness; adjudicate before evaluating the judge."
      ],
      [
        "Checks",
        "Defect recall, false approval rate, false block rate, judge agreement, and repeatability by task type."
      ],
      [
        "Regression",
        "Compare judge/rubric versions on the same independent suite; include judge failures in the release report."
      ]
    ],
    "online": [
      [
        "Product value",
        "Measure review-task completion time and whether reviewers can explain the release decision."
      ],
      [
        "Quality",
        "Audit sampled approvals and blocks with independent human review; track overrides and missing evidence."
      ],
      [
        "Operations",
        "Track evaluation spend, queue delay, evaluator failures, and alert burden."
      ],
      [
        "Feedback loop",
        "Route disputed evaluations to adjudication; add resolved errors to a versioned benchmark without contaminating held-out tests."
      ]
    ],
    "evalCases": [
      [
        "EVAL-01",
        "Higher mean; critical regression",
        "Block and identify the exact failing gate.",
        "Critical"
      ],
      [
        "EVAL-02",
        "Candidate missing five cases",
        "Mark comparison incomplete; do not score absent cases as passes.",
        "Material"
      ],
      [
        "EVAL-03",
        "Judge says pass; gold says fail",
        "Record disagreement and request adjudication.",
        "Material"
      ]
    ],
    "launch": "Proposed internal pilot: run EvalPilot alongside existing manual reviews. Compare decisions without granting deployment authority. Expand to a second task type only after reviewers trust the evidence trail.",
    "gate": "Proposed qualification gate: every seeded critical defect is detected, missing evidence never produces a pass, and the measured false-block rate is acceptable to pilot reviewers. Report denominators and confidence intervals.",
    "rollback": "Disable automatic recommendations if an adjudicated critical false approval occurs. Keep raw comparisons accessible and revert to manual release review. Version and roll back faulty evaluator configurations.",
    "next": "Run a release-review task study with AI PMs and engineers. Compare review time, critical-defect detection, and decision agreement against their existing process.",
    "sources": [],
    "slug": "evalpilot",
    "featured": false,
    "status": "Additional design study",
    "users": "AI PMs, engineers & domain reviewers",
    "evidence": "Release-policy example · evaluator design · regression scenarios",
    "contribution": "Evaluation-product design, metric definitions, release gates, and reviewer workflow.",
    "outcome": "A release-management design with explicit critical-failure rules and a reviewer workflow. The storyboard is illustrative; there is no running evaluation platform or measured reduction in review time.",
    "learning": "A high average can conceal a critical regression. The next decision is which evaluation criteria can be automated reliably and which still require domain review."
  },
  {
    "id": "voice",
    "name": "ClinicVoice",
    "category": "Voice AI / Healthcare operations",
    "kind": "Independent design study",
    "visual": "voice",
    "headline": "ClinicVoice · AI Appointment Receptionist",
    "summary": "Complete routine English-language appointment requests with accurate scheduling, explicit confirmation, and staff escalation.",
    "tags": [
      "Conversational AI",
      "Scheduling",
      "Latency budgets",
      "Human handoff"
    ],
    "role": "Independent product strategy & design",
    "period": "Portfolio study · 2026",
    "scope": "Understand → confirm → book",
    "disclosure": "Independent English-only product design. Calls, slots, and booking records are synthetic. The walkthrough illustrates an MVP; it does not process real calls or provide clinical advice.",
    "problem": "Clinic receptionists manage phone calls while supporting patients at the desk. Callers may abandon the queue, repeat information, or receive an incorrect booking. Automating routine scheduling can free reception capacity, but a false confirmation creates more work and undermines patient trust.",
    "persona": "Patient booking a routine clinic appointment",
    "quote": "Please confirm the doctor, date, and time. I need to know the booking actually exists.",
    "empathy": "The caller needs the correct doctor, date, time, and clinic location. Reception staff need reliable booking records and a complete handoff summary. Callers must be able to interrupt, correct details, and request a person.",
    "discovery": [
      "Map calls by intent: booking, rescheduling, cancellation, administrative FAQ, and staff requests.",
      "Interview receptionists about interruptions, failed transfers, duplicate bookings, and common date ambiguities.",
      "Baseline caller wait, abandonment, booking accuracy, and staff effort before setting pilot targets."
    ],
    "ai": "Speech recognition captures the request. Conversational AI manages clarification and interruptions. Scheduling APIs provide available slots and booking status. A confirmation gate checks the caller’s approval before a booking is created.",
    "alternative": "Retain online booking and the existing phone menu. Voice AI serves callers who prefer conversation or need help navigating appointment options.",
    "decision": "Confirm the appointment only after the scheduling system returns a successful booking ID. Transfer clinical requests and uncertain cases to staff.",
    "metrics": [
      [
        "Booking accuracy",
        "Bookings matching confirmed doctor, date, time and patient ÷ audited bookings",
        "Proposed: ≥95% routine-task accuracy",
        "Measures whether the caller receives the intended appointment."
      ],
      [
        "False confirmation rate",
        "Claimed bookings without a valid record ÷ confirmations",
        "Proposed: zero in qualification",
        "Prevents callers arriving for appointments that do not exist."
      ],
      [
        "Task completion rate",
        "Correctly completed routine requests ÷ eligible calls",
        "Compare with the reception baseline",
        "Measures usable automation rather than conversational fluency."
      ],
      [
        "Response latency",
        "Time from caller finishing to first agent audio",
        "Proposed p95 ≤1.5 seconds for simple turns",
        "Keeps the conversation responsive; report tool-dependent turns separately."
      ],
      [
        "Handoff success rate",
        "Successful staff connections ÷ requested transfers",
        "Agree operational target before pilot",
        "Ensures callers can reach a person when automation cannot help."
      ],
      [
        "Cost per correct task",
        "Voice + model + tools + follow-up cost ÷ correct completions",
        "Compare with the existing service cost",
        "Tests whether the workflow improves operating efficiency."
      ]
    ],
    "architecture": [
      "English audio",
      "Speech-to-text",
      "Intent & policy",
      "Scheduling tools",
      "Confirmation gate",
      "Speech / handoff"
    ],
    "archNote": "Proposed modular design: streaming speech recognition, bounded dialogue state, read-only availability lookup, idempotent booking endpoint, speech synthesis, and staff-transfer integration. A speech-to-speech alternative should be compared on latency and observability before choosing a vendor.",
    "tradeoffs": [
      [
        "Speed vs. correct booking",
        "Use quick acknowledgments while a tool runs, but never speak a booking confirmation before a successful write."
      ],
      [
        "Natural flow vs. exact details",
        "Support interruption, then explicitly confirm doctor, absolute date, time, and clinic timezone."
      ],
      [
        "Automation vs. safe scope",
        "Handle administrative requests; honor staff requests and clinical escalation with context."
      ]
    ],
    "prd": {
      "goal": "Help callers complete routine English-language scheduling tasks with accurate confirmation and a reliable staff path.",
      "user": "Clinic callers and reception staff.",
      "include": "One clinic, English, new appointment, reschedule, cancellation, administrative FAQs, interruption handling, and human transfer.",
      "exclude": "Diagnosis, treatment guidance, emergency triage decisions, payments, and multilingual support.",
      "requirements": "Disclose AI assistance; verify identity appropriately for changes; clarify dates; recheck availability; require confirmation; write once; verify transaction; pass context to staff.",
      "failure": "Unclear speech → ask to repeat, then offer staff. Calendar failure → state booking is not confirmed. Clinical or urgent language → use clinic-approved escalation wording and staff transfer; no medical assessment."
    },
    "backlog": [
      [
        "P0",
        "Explicit confirmation",
        "Given a chosen slot, read back doctor, date, time, and timezone before creating the booking."
      ],
      [
        "P0",
        "Truthful booking state",
        "Given the scheduling API fails, never say the appointment is confirmed."
      ],
      [
        "P0",
        "Safe rescheduling",
        "Given rescheduling fails, preserve the original appointment and explain its status."
      ],
      [
        "P0",
        "Human transfer",
        "Given a caller requests staff, transfer with captured context; on failure offer an agreed callback path."
      ],
      [
        "P1",
        "Interruptions and retries",
        "Given an interruption, stop speech promptly; given a repeated booking request, use an idempotency key to avoid duplicates."
      ]
    ],
    "steps": [
      [
        "Listen",
        "Understand the administrative request",
        "An English-speaking caller asks for a routine appointment. This scripted transcript is a storyboard; the microphone is not accessed.",
        "CALLER: “I’d like a routine appointment tomorrow afternoon.”\nAGENT: “I can help with scheduling. Which doctor would you prefer?”"
      ],
      [
        "Clarify",
        "Turn “tomorrow” into an exact date",
        "Resolve the relative date using the clinic timezone, then offer only tool-returned availability.",
        "SYNTHETIC SESSION: 26 Oct 2026 · Asia/Kolkata\nOffered: Dr Rao · 27 Oct 2026 · 3:30 PM IST"
      ],
      [
        "Confirm",
        "Read back before taking action",
        "The caller confirms all details. The booking write uses a unique transaction key.",
        "AGENT: “Dr Rao, Tuesday 27 October, 3:30 PM IST. Shall I book that?”\nCALLER: “Yes.”"
      ],
      [
        "Resolve",
        "State the real outcome",
        "A successful tool response permits confirmation. If it fails, preserve state and offer staff assistance instead.",
        "SUCCESS: booking_id DEMO-1042 → confirm\nFAILURE: slot_unavailable → not confirmed\nFallback: offer another slot or reception staff"
      ]
    ],
    "offline": [
      [
        "Dataset",
        "Proposed 50 scripted development calls and a held-out suite with accents, noise, silence, interruptions, date changes, and tool failures. Audio testing is required beyond text transcripts."
      ],
      [
        "Gold criteria",
        "Label intended slot, required confirmation, final booking state, correct escalation, and identity checks."
      ],
      [
        "Checks",
        "Task/state correctness, false confirmations, slot entity accuracy, duplicate booking prevention, and interruption latency."
      ],
      [
        "Severity",
        "Clinical advice, wrong-patient actions, false confirmations, and dropped urgent/staff handoffs are release blockers. Speech recognition error alone is not the business outcome."
      ]
    ],
    "online": [
      [
        "Actual outcome",
        "Reconcile conversation claims against scheduling records; sample calls for independent quality review."
      ],
      [
        "Conversation",
        "Measure end-of-turn to first audio, tool latency, repetition, interruption recovery, and abandonment."
      ],
      [
        "Operations",
        "Track successful staff transfers, callback completion, corrections, duplicate bookings, and cost per correctly completed task."
      ],
      [
        "Feedback loop",
        "Review failed and unknown calls; add de-identified scenarios to regression tests. Monitor model, policy, calendar, and input-mix changes."
      ]
    ],
    "evalCases": [
      [
        "VOICE-01",
        "Caller changes the time mid-sentence",
        "Clarify the final intended slot; confirm absolute date and time.",
        "Material"
      ],
      [
        "VOICE-02",
        "Availability API timeout",
        "Say not confirmed; offer staff or retry without duplicate writes.",
        "Critical"
      ],
      [
        "VOICE-03",
        "Caller asks for clinical advice",
        "Stay within administrative scope and transfer using approved wording.",
        "Critical"
      ]
    ],
    "launch": "Proposed sequence: scripted text checks → prerecorded audio evaluation → staff-only sandbox calls → shadow review → limited routine-scheduling pilot with staffed handoff. Production calling is outside this portfolio scope.",
    "gate": "Proposed gate: no false confirmations, wrong-patient mutations, or clinical advice in qualification; handoff and rollback paths demonstrated; latency and routine-task targets met with denominators reported. Human review and operational approval precede any patient pilot.",
    "rollback": "Route incoming calls to the existing reception/IVR path on critical failures, calendar outages, or unavailable handoff capacity. Reconcile in-flight transactions before retrying. Do not cancel valid bookings during rollback.",
    "next": "Review the scheduling flow with reception staff. Evaluate prerecorded English calls, interruption handling, calendar failures, and staff-transfer capacity before a pilot.",
    "sources": [],
    "slug": "clinicvoice",
    "featured": false,
    "status": "Additional design study",
    "users": "Clinic callers & reception staff",
    "evidence": "English dialogue storyboard · scheduling acceptance criteria",
    "contribution": "Administrative scheduling design, confirmation controls, failure handling, and handoff requirements.",
    "outcome": "An English-only scheduling design study. No patient calls, clinical service, production scheduling integration, or live voice performance is claimed.",
    "learning": "A booking confirmation must reflect system state. The next decision is whether the scheduling and staff-transfer dependencies can support a reliable pilot."
  }
];
window.projectBrief = function(p) {
  const lines = (rows) => rows.map(row=>'- '+(Array.isArray(row)?row.join(' | '):row)).join('\n');
  const sections = [
    ['01 · Problem statement',p.problem+'\n\nProduct objective: '+p.prd.goal],
    ['02 · Why AI is the right approach',p.ai+'\n\nAlternative considered: '+p.alternative+'\n\nProduct decision: '+p.decision],
    ['03 · User empathy & discovery',p.prd.user+'\n\n'+p.empathy+'\n\nDiscovery approach:\n'+lines(p.discovery)],
    ['04 · Success metrics', 'Metric | Measurement | Target / benchmark | Why it matters\n\n'+lines(p.metrics)+(p.outcomes?'\n\nReported professional outcomes:\n'+lines(p.outcomes)+'\n\n'+p.outcomeNote:'')],
    ['05 · Solution architecture',p.architecture.join(' → ')+'\n\n'+p.archNote+'\n\nArchitecture decisions:\n'+lines(p.tradeoffs)],
    ['06 · MVP scope & prototyping','MVP scope: '+p.prd.include+'\n\nOut of scope: '+p.prd.exclude+'\n\n'+p.steps.map((s,i)=>'### '+(i+1)+'. '+s[1]+'\n'+s[2]+'\n\n'+s[3]).join('\n\n')],
    ['07 · AI product requirements','Goal: '+p.prd.goal+'\n\nRequirements: '+p.prd.requirements+'\n\nFailure handling: '+p.prd.failure],
    ['08 · Backlog & acceptance criteria','Priority | Capability | Acceptance criterion\n\n'+lines(p.backlog)],
    ['09 · Evaluation metrics & decision rules','Assess task correctness, critical failures, regressions, latency, and total cost per successful task.\n\n'+p.gate],
    ['10 · Offline evaluation plan',lines(p.offline)+'\n\nExample cases — not executed:\n'+lines(p.evalCases)],
    ['11 · Online evaluation plan',lines(p.online)+'\n\nRun a controlled pilot before broad release. Declare the primary outcome, guardrails, randomization unit, and sample-size plan before an A/B test.'],
    ['12 · Deployment & go-live',p.launch+'\n\nDeployment readiness: version the model, prompt, tools, and configuration; complete staging and user acceptance testing; assign owners; verify alerting and rollback.\n\nRollback: '+p.rollback+'\n\nPost-launch priorities: '+p.next]
  ];
  return '# '+p.name+'\n\nGagan S S — AI Product Manager\n\n'+p.disclosure+'\n\n'+sections.map(([title,body])=>'## '+title+'\n\n'+body).join('\n\n')+'\n';
};
