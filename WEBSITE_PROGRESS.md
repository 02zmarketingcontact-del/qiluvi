# Website Progress — QILUVI V6.0
**Main repository:** https://github.com/02zmarketingcontact-del/qiluvi  
**Independent QiMap repository:** https://github.com/02zmarketingcontact-del/atlas-bds-tphcm

## Baseline main
- Original single-page responsive VI/EN/简/繁 website with approved existing SVG asset, contact and QiMap redirect.
- Smoke workflow Verify QILUVI Website previously successful for main public URL but not a PR-preview validation.
- No native five service detail routes in original baseline.

## Feature branch changes, not yet live until merge
- 20 locale-specific individual service detail pages at /services/{qiinsight,qibridge,qireal,qibuild,qigrow}/ and /{en,zh-cn,zh-tw}/services/...
- 28 locale-specific About, Solutions, Services, Insights, Portfolio, Approach, Contact pages.
- 3 locale-specific language homepages; root homepage updated to preserve existing brand and connect new sections and services.
- New shared static CSS (no external CSS framework, tokens or backend); canonical/hreflang on fully constructed locale routes.
- Liabilities stated: independent research vs REAL PROJECT, price reference vs verified sale, no invented licenses or office.
- QiMap original redirect and external public website link maintained, not modified.

## Publication/QA gate
1. Static route existence and link checker.
2. Source integrity: 4 external Insights sources with dates and disclaimers.
3. No dead CTA, no unverifiable case or pricing promise.
4. Confirm keyboard/mobile nav and responsive layout; check major mobile widths.
5. PR branch CI successful.
6. Merge and GitHub Pages deployment, verify 200 and distinctive updated content for four homepages and all five VI service paths.
7. No statement of deployment or accessibility completeness until checks actually performed.

## Locale review needed
Multilingual commercial copy exists and is not a professional-certified translation of regulatory terms. Licensed professionals should review property, investment and construction wording before legal reliance.

## GitHub implementation update — 18 Oct 2026
- PR [#1](https://github.com/02zmarketingcontact-del/qiluvi/pull/1) was merged as commit `fad3ebfa63801ec464ffa4ffaabe06f05e7a7f21`.
- [Static QA on main](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095532280): **SUCCESS**.
- [GitHub Pages build and deployment](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095532156): **SUCCESS**.
- Separate live HTTP multi-path verification is being added; treat public path verification as **PENDING** until the smoke run succeeds. Visual/device QA is still outstanding.

## Verified live release — 18 Oct 2026 / final run
**HTTP success 15/15.** GitHub Action [Verify QILUVI Website #39095652826](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095652826) completed **success**. Logs report HTTP 200 and V6 content signature on '/', '/en/', '/zh-cn/', '/zh-tw/', all five Vietnamese service detail URLs, '/en/services/qiinsight/', '/zh-cn/services/qibridge/', '/zh-tw/services/qireal/', '/portfolio/', '/insights/', and '/qimap/'. The final [Pages deployment #39095652777](https://github.com/02zmarketingcontact-del/qiluvi/actions/runs/39095652777) also completed **success** at commit b166d223dcc9b22c23030fa636adc0ec60ec4a6d.

**Release acceptance:** GitHub PR merged, static QA successful, Pages deployment successful, representative multi-language HTTP verification successful. **Not yet independently accepted:** responsive screenshot/device testing, detailed 4-language legal terminology certification, paid buyer/user testing or fully validated professional partner network. Such tasks remain P0/P1 follow-ups.
