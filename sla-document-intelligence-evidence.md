# SLA Intelligence — evidence and synthetic example

Status: retrospective portfolio artifact. No customer document, production screenshot or executed evaluation result is reproduced.

## Confirmed professional scope

The professional project covered document ingestion, OCR/layout, KPI extraction and semantic mapping, human validation, structured data integration and Power BI dashboards. A conversational RAG assistant was developed subsequently to retrieve and explain SLA information.

Documented technologies: SharePoint, Power Automate, Azure AI Document Intelligence, Azure OpenAI, SQL, Azure Data Factory, Azure Databricks, Hive-based data assets and Power BI. These are component responsibilities, not a public reproduction of proprietary deployment configuration.

The RAG capability is confirmed by professional context. A specific retrieval/index service, chunking policy, reranker, citation feature, live Power BI integration or LangSmith deployment is not established by the available artifacts and is not claimed.

## Synthetic source clause

“The on-time delivery target is 98% for the monthly reporting period. Approved customer-requested deferrals are excluded.”

This is invented sample content for demonstrating the field model. It is not a client clause or evidence that OTD was an implemented KPI.

| Field | Synthetic extraction |
| --- | --- |
| Source identity | synthetic-logistics-sla, example clause 1 |
| Source KPI label | On-time delivery |
| Target | 98% |
| Unit | Percentage |
| Measurement period | Monthly |
| Exclusion | Approved customer-requested deferrals |
| Calculation formula | Not specified; do not infer |
| Separate threshold | Not specified |
| Canonical business definition | Pending business-owner validation |
| Downstream asset mapping | Pending authorised mapping; no production asset name published |
| Approval state | Synthetic example; not published |

Mapping flow: source label + definition + conditions → candidate business-definition match → reviewer validation → approved mapping → downstream reporting asset.

A repeated “on-time” field under a different heading must retain its own conditions. Similar names alone do not establish semantic equivalence.

## Contractual KPI inventory

The supplied professional materials describe SLA KPI coverage but do not identify a verified named inventory. OTIF, OTD, in-full delivery, SLA compliance, lead-time adherence, order cycle time, damage rate, return rate, fill rate, order accuracy, delivery exception rate, claims rate and on-time pickup are candidate domain examples only. No claim is made that every measure, or any particular named measure, appeared in the implemented extraction or dashboard.

For a verified contract, preserve its exact name, definition, formula, numerator/denominator, unit, target, period, conditions and exclusions where documented. Missing values remain unspecified. Business-owner approval precedes a canonical mapping.

## Synthetic conversational example

Question: “Which deferrals are excluded under this agreement?”

Relevant content: the synthetic clause above.

Reference answer for proposed evaluation: “The clause excludes approved customer-requested deferrals.”

This demonstrates a reference answer for an evaluation design, not an observed chatbot response. No citation interface is implied.

Counterexample: “What was actual on-time delivery yesterday?” The clause supplies a contractual target, not observed delivery records. The assistant must not turn that target into a live performance claim. Evidence insufficiency handling is a proposed pass/fail criterion, not a claimed production test result.

## Evaluation and visual status

The companion evaluation CSV contains illustrative DOC/MAP/RAG scenarios and required behavior, not scored model outputs. The PRD defines business KPIs separately from AI evaluation metrics, with no invented baselines, scores or impact.

The two-capability SVG is a reconstructed architecture diagram. No original Power BI dashboard or RAG interface screenshot was available for safe publication, so none is fabricated.
