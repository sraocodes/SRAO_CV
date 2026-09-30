---
title: Sentinel-2 NDVI Trends as a Groundwater Extraction Indicator (Tamil Nadu)
date: '2026-01-01'
period: '2026'
theme: water
weight: 6
featured: false
institution: Independent
role: Independent Researcher
methods:
- Sentinel-2 / GEE
- Groundwater Remote Sensing
- Trend Analysis
summary: Independent analysis testing whether block-scale Sentinel-2 peak-NDVI trends
  track CGWB groundwater extraction gradients across six over-exploited blocks in
  Tiruvannamalai district, Tamil Nadu. Found a borderline-significant positive association
  (r=0.814, p=0.049).
---

**Question:** Can freely available satellite vegetation trends serve as an annual spatial indicator of groundwater extraction intensity between CGWB assessment cycles?

**Approach:**
- Computed the "intensifier fraction" — the fraction of cropland pixels with strongly positive Sentinel-2 peak-NDVI trends (2018–2024)
- Evaluated consistency with CGWB extraction percentages across 6 over-exploited blocks (102–118% of annual recharge)
- Used Arunachala Hill (Tiruvannamalai) as geographic anchor for stratified sampling, controlling for broad-scale climate and topographic gradients
- Ran Sentinel-1 VV detectability analysis to explain why single-pixel SAR trend detection fails where block-level optical detection succeeds

**Key Results:**
- Intensifier fraction positively associated with extraction percentage: Pearson r = 0.814, p = 0.049, permutation p = 0.061
- Rainfall trends show no evidence of confounding
- Block-level aggregation necessary — per-pixel NDVI changes fall below the single-pixel detection bound

**Scope:** Proof-of-concept for one district; requires multi-district validation before operational use. Intended as a supplement to well monitoring, not a replacement.

**Status:** Manuscript prepared; independent work outside institutional affiliation.
