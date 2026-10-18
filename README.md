# QILUVI — Vietnam Market Intelligence & Business Expansion

**CLARITY BEYOND BORDERS · 看見更真實的越南**

Public QILUVI website: https://02zmarketingcontact-del.github.io/qiluvi/  
Founder: Felix 陳歸 · +84 966 108 018 (Zalo / WeChat / WhatsApp; no unverified WeChat account published)

## Five service brands and website
- QiInsight — source-led market and industry research
- QiBridge — entry feasibility, partner screening and business coordination
- QiReal — investment and site advisory with price/data confidence labels
- QiBuild — design/procurement/project coordination with qualified professional delivery
- QiGrow — localized brand, digital, CRM and channel growth

Four actual language routes: root Vietnamese `/`, English `/en/`, Simplified Chinese `/zh-cn/`, Traditional Chinese `/zh-tw/`. Each has About, Services, Solutions, Insights, Portfolio, Approach, Contact plus five service detail pages at `/services/{qiinsight,qibridge,qireal,qibuild,qigrow}/`. GitHub Pages is static HTML/CSS; original SVG icon and QiMap redirect remain.

## Deliverable library
- `research/`: 33 initial source/benchmark references, 17 hypothesized buyer jobs, 60 pain hypotheses, 25 competitor/adjacent models and 2026 Vietnam market entry source note.
- `commercial/`: 15 package design specifications, five optional combos, costing/margin framework. No official selling prices or guaranteed results are claimed.
- `brand/`: purpose, corporate/short/founder stories and five sub-brand narratives.
- `portfolio/`: evidence register for INDEPENDENT RESEARCH, DEMONSTRATION, PRODUCT and permission-gated REAL PROJECT.
- `operations/`: five service blueprints / 35 explicit WBS tasks, 12-stage SOP and responsibility split.
- `templates/`: 12 lean operating templates; client personal data must remain private.
- Root master plan/backlog/research/service/website progress, quality report and executive status.

## Website validation and deployment
- GitHub Actions `QILUVI V6 static website QA` runs `node scripts/check-v6-site.cjs` on branch/PR/main HTML changes. Validates **52 actual localized routes** + the QiMap redirect, internal links/assets, language alternates and required elements.
- `.github/workflows/verify-site.yml` verifies external GitHub Pages HTTP status and **distinctive V6 content** on representative VI/EN/简/繁 and five service pages; after modification it can be started manually or on workflow-file push.
- Sitemap and robots.txt cover public localized pages.
- Any merge still requires confirmation of actual Pages run and externally accessible content, not simply a green source-code check.

## Important limits and safety
- **QiMap** is a separate product and repository: https://github.com/02zmarketingcontact-del/atlas-bds-tphcm. The website only links to it; this rollout did not change its data.
- Market listings, asking prices or candidate coordinates are **not independently verified transactions or statutory title records**.
- Professional duties requiring licenses must be handled by qualified organizations/people. No company registration, credentials, client success, research subscriptions or 24/7 autonomous agents are invented.
- Public marketing does not include real client cases without performance proof and publication rights.
- Sources and legal/regulatory wording must be rechecked for the client sector and decision date.

## Operating files
Start from `EXECUTIVE_STATUS.md`, `TASK_BACKLOG.md`, `MASTER_PLAN.md`, `QUALITY_REPORT.md`. Use branch and PR for material updates. Do not put confidential customer records, API keys, supplier quotes or restricted photos in public git.
