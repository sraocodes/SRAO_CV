---
title: Active-Passive Microwave Fusion for Decadal Soil Moisture Monitoring
date: '2025-01-01'
period: 2025–Present
theme: water
weight: 3
featured: true
institution: Indian Institute of Science
role: Research Associate
methods:
- Sentinel-1 SAR / SMAP
- Sensor Fusion
- Time-series Analysis
summary: Fused Sentinel-1 SAR with SMAP-400m passive microwave to bridge the systematic
  monsoon data gap in passive retrievals, producing a 129-month continuous soil moisture
  record (2016–2026) for a 5400-ha watershed in Karnataka. Under review.
figure: images/satellite.png
figure_alt: Satellite Earth observation feeding computational analysis
---

**Problem:** Satellite passive microwave (SMAP-400m) fails on fewer than 12% of monsoon days over the Harave watershed — precisely when hydrology is most active. Cloud cover blocks the optical downscaling inputs; L-band is attenuated under dense wet canopy.

**Approach:** Calibrated a dry-season empirical transfer function between Sentinel-1 VV backscatter and SMAP-400m soil moisture, selected from four functional forms using the Bayesian Information Criterion and validated by leave-one-year-out cross-validation.

**Key Findings:**
- Linear model retained for operational use (yields absolute volumetric estimates)
- Sentinel-2 NDVI did not improve calibration — vegetation structure already embedded in SMAP-400m via VIIRS leaf area index
- Fused record validated against independent rainfall and TDR observations in adjacent Mallaiinupura watershed without recalibration

**Output:** 129-month continuous monthly soil moisture record, 2016–2026, covering 58 monsoon months where SMAP-400m was unavailable.

**Submitted to:** *International Journal of Remote Sensing* (IJRS)
