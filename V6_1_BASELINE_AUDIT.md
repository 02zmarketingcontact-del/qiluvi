# QILUVI V6.1 — Initial Baseline Audit
Date: 2026-10-18
Status: PARTIAL AUDIT / NEEDS_VERIFICATION

## Verified from connected GitHub
- QILUVI README documents five brands, four language routes and static site QA.
- EXECUTIVE_STATUS records successful 15/15 live HTTP route checks in V6.0, but device visual QA remains outstanding.
- Latest retrieved QILUVI commit: 399202da4d3e46adf4b2ff699a4ecb34a2513afe.
- Open PR search returned no open PRs at inspection time.
- QiMap README reports 150 project/phase name records, 32 map-located records, 3 coordinate flags and zero independently verified prices. These are repository-reported counts, not independently recounted.

## P0 data defect
research/CUSTOMER_PAIN_MATRIX.md uses QI01 in QiInsight and QiBridge. Enforce unique IDs per service prefix before joining datasets. Preserve existing IDs through an explicit migration mapping.

## V6.1 research gap
The 60 pain records are hypotheses, not customer interviews. Current matrix uses urgency 30%, impact 25%, frequency 15%, budget 15%, feasibility 15%, whereas V6.1 specifies 25%,25%,15%,15%,20%. Version scoring method; do not silently reinterpret old scores.

## Immediate acceptance gates
1. Reconcile source register and evidence timestamps.
2. Upgrade QiInsight and QiBridge decision demonstrations with evidence and explicit limitations.
3. Define unique pain IDs and record migration mapping.
4. Perform mobile/tablet visual checks and multilingual terminology review.
5. Keep QiMap unverified asking prices, legal claims and coordinates out of verified marketing claims.

## Evidence
- https://github.com/02zmarketingcontact-del/qiluvi/blob/main/README.md
- https://github.com/02zmarketingcontact-del/qiluvi/blob/main/EXECUTIVE_STATUS.md
- https://github.com/02zmarketingcontact-del/qiluvi/blob/main/research/CUSTOMER_PAIN_MATRIX.md
- https://github.com/02zmarketingcontact-del/atlas-bds-tphcm/blob/main/README.md

This document does not claim full V6.1 completion, a new live deployment, or independently verified current legal/market facts.
