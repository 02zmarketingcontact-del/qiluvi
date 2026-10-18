# QILUVI — V6.0 Task Backlog
Statuses: COMPLETE = actual evidence exists; DRAFT = implementation artifact exists but is awaiting review; NEEDS VERIFICATION = externally material facts unconfirmed; BLOCKED = dependency inaccessible; NOT STARTED = not performed. No fabricated achievements.

| ID | Priority | Area | Work item | Status | Deliverable / evidence | Exit check |
|---|---|---|---|---|---|---|
| P0-01 | P0 | Repositories | Audit QILUVI/QiMap code and existing Actions | COMPLETE | GitHub baseline, MASTER_PLAN.md | No changes to QiMap |
| P0-02 | P0 | Evidence | 33-entry initial research register | DRAFT | research/SOURCE_REGISTER.md | Each item rechecked for publication |
| P0-03 | P0 | Customers | Segment 17 foreign-investor and enterprise buyer jobs | DRAFT | research/CUSTOMER_SEGMENTS.md | Buyer decision and trigger validated |
| P0-04 | P0 | Pains | First-pass 60 candidates across five services | DRAFT | research/CUSTOMER_PAIN_MATRIX.md | Primary interviews confirm severity |
| P0-05 | P0 | Competitors | Compare 25 relevant/adjacent service offers | DRAFT | research/COMPETITOR_BENCHMARK.md | Check deeper delivery, cases and prices |
| P0-06 | P0 | Commercial | Build 15 three-tier commercial products | DRAFT | commercial/SERVICE_CATALOGUE.md | Verified hours and first paid delivery |
| P0-07 | P0 | Commercial | Design 5 optional journeys/combos | DRAFT | commercial/SERVICE_CATALOGUE.md | Customer relevance and route validation |
| P0-08 | P0 | Pricing | Define internal cost-plus/margin framework | DRAFT | commercial/PRICING_FRAMEWORK.md | Add actual VND rate card and supplier quotes |
| P0-09 | P0 | Operations | 5 service WBS with 35 executable steps | DRAFT | operations/SERVICE_BLUEPRINTS.md | Verify competent delivery owners |
| P0-10 | P0 | Brand | Write corporate story and five subbrands | DRAFT | brand/BRAND_STORY.md | Founder approves public factual claims |
| P0-11 | P0 | Portfolio | Build evidence categories and seven draft cards | DRAFT | portfolio/PORTFOLIO_EVIDENCE_REGISTER.md | Proof for real projects or clearly labeled demo |
| P0-12 | P0 | Site | Author 20 localized service HTML files | DRAFT | 4 languages × 5 service paths | Link/SEO/mobile QA |
| P0-13 | P0 | Site | Author About/Solutions/Services/Insights/Portfolio/Approach/Contact in four languages | DRAFT | 28 HTML pages | Content and link QA |
| P0-14 | P0 | Site | Localized EN/CN/TW homepages | DRAFT | 3 localized home routes | Language UI and CSS QA |
| P0-15 | P0 | Site | Reuse existing homepage and link 5 service pages | DRAFT | index.html on feature branch | Preserve QiMap and original logo |
| P0-16 | P0 | Site | Add site QA script, workflow, sitemap and robots | COMPLETE | scripts/check-v6-site.cjs etc. | CI success and link QA |
| P0-17 | P0 | GitHub | Create safe PR against main | COMPLETE | GitHub PR URL | Review diff and CI |
| P0-18 | P0 | Deployment | Merge and validate live Pages | COMPLETE | PR merge + GitHub Pages/HTTP tests | 4 languages and five service pages live |
| P0-19 | P0 | Research | Validate 5+ real decision-maker interviews per service | NOT STARTED | Consent-backed field notes (private) | Verified buyer importance and willingness to pay |
| P0-20 | P0 | Claims | Verify client-facing legal, investment, construction language | NEEDS VERIFICATION | Legal reviewer / qualified partner check | No material inaccurate regulated claims |
| P1-01 | P1 | CRM | Secure pipeline + consent governance | DRAFT | templates/CRM_PIPELINE.md (template only) | Actual access-controlled private CRM |
| P1-02 | P1 | Commercial | First priced proposals / paid pilots | NOT STARTED | Costed signed statements of work | Positive validated economics or learnings |
| P1-03 | P1 | Partners | Validate professional partner credentials | NOT STARTED | Private partner register | Current licenses checked by sector |
| P1-04 | P1 | Portfolio | Add permission-backed REAL PROJECT case | BLOCKED | Client consent and verified outputs | Legal media/brand rights |
| P1-05 | P1 | Web | Real user accessibility/mobile visual inspection | NEEDS VERIFICATION | Screenshots/review and fixed issues | Responsive across target devices |
| P2-01 | P2 | Research | Sector-deep paid data and subscription | NOT STARTED | Legal data license and customer demand | Cost justified by revenue |
| P2-02 | P2 | Microsites | Separate domains for subbrands | NOT STARTED | Domain budget and routing plan | Only after measurable reason |
| P2-03 | P2 | Automation | Approved periodic source and health monitoring | NOT STARTED | Explicit workflow schedule, permissions and test history | Real recurring successful runs |

## GitHub implementation update — 18 Oct 2026
- PR [#1](https://github.com/02zmarketingcontact-del/qiluvi/pull/1) was merged as commit `fad3ebfa63801ec464ffa4ffaabe06f05e7a7f21`.
- [Static QA on main](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095532280): **SUCCESS**.
- [GitHub Pages build and deployment](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095532156): **SUCCESS**.
- Separate live HTTP multi-path verification is being added; treat public path verification as **PENDING** until the smoke run succeeds. Visual/device QA is still outstanding.

## Verified live release — 18 Oct 2026 / final run
**HTTP success 15/15.** GitHub Action [Verify QILUVI Website #39095652826](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095652826) completed **success**. Logs report HTTP 200 and V6 content signature on '/', '/en/', '/zh-cn/', '/zh-tw/', all five Vietnamese service detail URLs, '/en/services/qiinsight/', '/zh-cn/services/qibridge/', '/zh-tw/services/qireal/', '/portfolio/', '/insights/', and '/qimap/'. The final [Pages deployment #39095652777](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095652777) also completed **success** at commit b166d223dcc9b22c23030fa636adc0ec60ec4a6d.

**Release acceptance:** GitHub PR merged, static QA successful, Pages deployment successful, representative multi-language HTTP verification successful. **Not yet independently accepted:** responsive screenshot/device testing, detailed 4-language legal terminology certification, paid buyer/user testing or fully validated professional partner network. Such tasks remain P0/P1 follow-ups.
