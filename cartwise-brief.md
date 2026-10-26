# CartWise

Gagan S S — AI Product Manager

Independent product design. The catalog and shopping journey are synthetic. Evaluation targets and deployment steps are proposed; purchase conversion has not been measured.

## 01 · Problem statement

A shopper choosing a commuter backpack must compare laptop compatibility, budget, weather protection, and availability across multiple pages. Filters narrow the catalog, but the shopper still has to interpret specifications and resolve trade-offs.

Product objective: Help shoppers form a suitable shortlist with less effort than browsing alone.

## 02 · Why AI is the right approach

Natural-language understanding converts the shopper’s request into explicit constraints. Retrieval finds matching products. The model explains catalog-backed trade-offs and asks for missing preferences. Deterministic filters enforce budget, compatibility, price, and inventory.

Alternative considered: Keep conventional filters and a comparison table. Evaluate whether conversation improves complex decisions enough to justify additional interaction.

Product decision: Treat budget and compatibility as hard constraints. If no product qualifies, explain the conflict and ask which requirement can change.

## 03 · User empathy & discovery

English-speaking shoppers selecting a commuter backpack.

The shopper needs a suitable product and a reason to trust the recommendation. A low price is not useful if the laptop does not fit. Merchants need accurate product claims, current inventory, and a smooth checkout handoff.

Discovery approach:
- Observe shoppers selecting a backpack using conventional filters.
- Identify abandoned searches, repeated comparisons, and non-negotiable constraints.
- Test whether conversation adds value versus a better filter interface before committing to an agent.

## 04 · Success metrics

Metric | Measurement | Target / benchmark | Why it matters

- Constraint satisfaction | Recommendations meeting every hard constraint ÷ recommendations | Proposed: 100% in qualification | Protects the shopper from unsuitable recommendations.
- Grounded-claim accuracy | Supported product claims ÷ reviewed product claims | Proposed: zero unsupported claims in qualification | Builds trust in dimensions, features, price, and availability.
- Selection completion | Users selecting a qualifying product ÷ task participants | Compare with conventional filters | Measures whether the assistant helps users reach a suitable decision.
- Time to shortlist | Median time to select suitable options | Compare identical tasks across both experiences | Measures reduction in comparison effort.
- Checkout handoff rate | Users proceeding to checkout ÷ eligible sessions | Measure in a merchant pilot | Connects product discovery with commercial intent.
- Wrong-fit feedback | Confirmed suitability complaints ÷ completed purchases | Monitor only after real merchant deployment | Checks that short-term engagement does not reduce purchase quality.

## 05 · Solution architecture

User intent → Constraint extraction → Catalog search → Deterministic checks → Rank & explain → Cart handoff

Proposed MVP: one synthetic backpack catalog; required structured fields; retrieval plus constraint filters; evidence-linked comparison; cart preview. Checkout is a handoff design, not an autonomous payment capability.

Architecture decisions:
- Personalization vs. friction | Ask one consequential question at a time. Do not require a long profile before showing useful options.
- Fluent answers vs. factual claims | Every recommendation references catalog attributes; missing features stay unknown.
- Conversion vs. fit | Do not sacrifice explicit constraints for a more expensive or higher-margin recommendation.

## 06 · MVP scope & prototyping

MVP scope: Budget and laptop-size constraints, use-case clarification, three-option comparison, explanations, no-match recovery, and sandbox cart preview.

Out of scope: Real checkout, autonomous payments, cross-merchant scraping, and unsupported claims about comfort or water resistance.

### 1. Start with a real need
The shopper asks for a commuter backpack with a clear spending limit.

“A backpack under ₹4,000 for my 16-inch laptop and daily commute.”

### 2. Ask the question that changes the choice
The assistant clarifies whether weather protection is a must-have.

“Is a rain cover essential, or is light splash resistance enough?”
Selected: rain cover essential

### 3. Explain the shortlist
A synthetic catalog yields one qualifying product; another fails the rain-cover requirement.

ILLUSTRATIVE CATALOG
Metro 24: ₹3,600 · 16-inch fit · rain cover
Trail 20: ₹3,200 · 16-inch fit · no rain cover

### 4. Confirm before continuing
The cart preview repeats specifications and checks availability. Real purchase completion is outside this walkthrough.

Selected: Metro 24
Total: ₹3,600 (synthetic)
Action: revalidate stock → merchant checkout

## 07 · AI product requirements

Goal: Help shoppers form a suitable shortlist with less effort than browsing alone.

Requirements: Use catalog-backed specifications; preserve hard constraints; expose trade-offs; handle unavailable stock; recheck price and availability at handoff.

Failure handling: No valid match → explain and ask to revise constraints. Missing laptop dimensions → ask, not guess. Price/stock change → disclose before proceeding.

## 08 · Backlog & acceptance criteria

Priority | Capability | Acceptance criterion

- P0 | Hard constraints | Given a budget of ₹4,000, no item above ₹4,000 appears as a qualifying recommendation.
- P0 | Evidence-based fit | Given a 16-inch laptop request, confirm compatibility only where catalog dimensions or fit data support it.
- P0 | No-match recovery | Given no item satisfies all hard constraints, show no-match and ask which constraint can change.
- P1 | Comparison | Given a shortlist, compare the same attributes and mark missing values as unknown.
- P1 | Cart handoff | Given stock or price changes, require renewed confirmation before handoff.

## 09 · Evaluation metrics & decision rules

Assess task correctness, critical failures, regressions, latency, and total cost per successful task.

Proposed gate: no explicit hard-constraint violations or unsupported specifications in qualification; users can understand and correct preferences. Pilot expansion depends on observed task success, not a claimed conversion target.

## 10 · Offline evaluation plan

- Dataset | 50 development shopping scenarios plus separate held-out scenarios; include no-match, missing specs, conflicting preferences, and adversarial requests.
- Gold criteria | Label explicit hard constraints and the qualifying catalog set. Use human judgments for preference ranking.
- Checks | Constraint satisfaction, grounded claims, price/stock correctness, ranking relevance, and cart-state correctness.
- Regression | Evaluate catalog updates and prompt changes by task difficulty; re-run after inventory and policy changes.

Example cases — not executed:
- CART-01 | Budget + laptop + rain cover | Recommend only products satisfying all three constraints. | Material
- CART-02 | No qualifying item | Explain no match and clarify; do not quietly relax the budget. | Material
- CART-03 | Inventory changes mid-session | Revalidate and disclose unavailability before handoff. | Material

## 11 · Online evaluation plan

- Task study | Randomize shoppers between conversational assistance and filters; counterbalance task order and use consistent catalogs.
- User value | Measure successful selection, time to shortlist, perceived effort, and post-task confidence.
- Behavior | Track accepted recommendations, changes to constraints, handoff and abandonment; distinguish curiosity from purchase intent.
- Guardrails | Audit wrong-fit complaints and unsupported product claims. Real sales uplift requires merchant traffic and a powered experiment.

Run a controlled pilot before broad release. Declare the primary outcome, guardrails, randomization unit, and sample-size plan before an A/B test.

## 12 · Deployment & go-live

Proposed release: moderated prototype sessions → sandbox task study → one-category merchant pilot → gradual catalog expansion. Use the same catalog and product availability across experiment arms.

Deployment readiness: version the model, prompt, tools, and configuration; complete staging and user acceptance testing; assign owners; verify alerting and rollback.

Rollback: Fall back to conventional filters on catalog outages, unsupported claims, or invalid cart states. Disable recommendation generation while preserving the product list and user-selected constraints.

Post-launch priorities: Run a counterbalanced shopping study against filters. Evaluate suitability, selection time, effort, and confidence before testing real checkout conversion.
