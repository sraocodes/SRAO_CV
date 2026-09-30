---
title: Process-Based Mechanistic Model for Soil-Root Electrical Conduction
date: '2017-01-01'
period: 2017–2018
theme: roots
weight: 2
featured: false
institution: UCLouvain — PhD Research
role: PhD Researcher
methods:
- Coupled Modeling
- Root Hydraulics
- Python/PyGIMLi
summary: First mechanistic model to couple root water uptake (R-SWMS) with 3D electrical
  simulations (PyGIMLi), quantifying how roots distort standard petrophysical relations.
  Published in Vadose Zone Journal, 2019.
figure: images/currentlines.png
figure_alt: Current lines through the soil-root continuum, with the L-curve used to
  choose the regularisation parameter
---

**Research Question:** Can we build a mechanistic model incorporating BOTH root architecture and water dynamics?

**Approach:**
- Integrated R-SWMS (root water uptake) with PyGIMLi (electrical modeling)
- 3D finite element models with 500,000+ tetrahedral elements
- Separated **direct** (root conductivity) vs **indirect** (moisture) electrical effects
- First model to achieve this level of physical realism

**Finding:**
Roots impact petrophysical relations — the standard Archie's Law doesn't work when roots are present. We quantified exactly how roots modify the soil's electrical behavior.

**Publication:** *Vadose Zone Journal* (2019)
**Thesis Chapter:** 3
**Tools:** Python, PyGIMLi, Gmsh, R-SWMS, EIDORS
