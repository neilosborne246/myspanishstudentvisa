# Google Search Console — Opportunity-Finder Routine

A repeatable monthly routine to turn Search Console data into a ranked list of
"do this next" actions. This is the feedback loop that replaces guessing.

## One-time setup
1. Verify `myspanishstudentvisa.com` in Search Console (DNS or HTML-file method).
2. Submit `https://myspanishstudentvisa.com/sitemap.xml` under **Sitemaps**.
3. Wait 2–4 weeks for impression data to accumulate before the first run.

## Monthly export (5 minutes)
In Search Console → **Performance → Search results**:
1. Date range: **Last 3 months**. Toggle on **Average position** and **CTR**.
2. **Queries** tab → Export → CSV. Save as `gsc-queries-YYYY-MM.csv`.
3. **Pages** tab → Export → CSV. Save as `gsc-pages-YYYY-MM.csv`.
4. (Optional) Filter to a single high-value page, switch to Queries, export — repeat for /pricing, /requirements, /by-consulate/*.

## The prompt to paste to me each month
> Here are this month's Search Console exports (queries + pages CSVs attached).
> Run the opportunity analysis: find striking-distance queries, high-impression
> low-CTR pages, query→page mismatches, and cannibalisation. Give me a ranked
> action list with the specific page and the specific edit for each.

## What I look for (the four plays)

**1. Striking-distance queries — positions 8–20.**
These already rank; a small push lands page one. For each: which page ranks, is
the query in the title/H1/first 100 words? Usually the fix is a targeted on-page
edit, not new content. *Highest ROI play.*

**2. High impressions + low CTR (below ~2% on positions 1–10).**
The page ranks but the SERP snippet doesn't earn the click. Fix = rewrite the
title/meta to match intent, add numbers/year/"2026", add FAQ schema for SERP
real estate.

**3. Query → page mismatch.**
A query is ranking a weaker page than the one built for it (e.g. a blog post
ranking for "spain student visa cost" instead of /pricing/). Fix = internal link
with exact-match anchor from the ranking page to the target, or consolidate.

**4. Cannibalisation.**
Two+ pages trading positions for the same query → both suppressed. Fix = pick
the canonical target, point the other(s) at it with internal links, differentiate
or merge.

## Cadence
- **Monthly:** run the four plays, action the top 10.
- **Quarterly:** re-pull and measure which actioned pages moved (proof the loop works).
- **Always:** after publishing/editing a page, check its query impressions 3–4
  weeks later to confirm it's being served for the intended terms.
