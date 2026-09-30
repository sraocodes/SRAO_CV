---
title: Electrical Anisotropy as Root Architecture Fingerprint
date: '2018-01-01'
period: 2018–2019
theme: roots
weight: 3
featured: false
institution: UCLouvain — PhD Research
role: PhD Researcher (Visiting Scholar, Univ. Bonn)
methods:
- k-NN/PCA/ML
- Anisotropy Tensors
- Root Architecture
summary: Demonstrated that electrical anisotropy encodes root architecture — species
  discrimination at 95% accuracy using k-NN on electrical signatures alone. First
  mechanistic proof of 3D structural information in geoelectrical data.
figure: images/aniso.png
figure_alt: Directional conductivity structure of a simulated root system
---

**Research Question:** Does electrical anisotropy contain information about root architecture?

**Finding:**
Electrical anisotropy is a fingerprint of root organization — the first mechanistic proof that geoelectrical measurements encode 3D structural information.

**Methodology:**
- Generated synthetic root architectures using C-Rootbox (monocots vs. dicots)
- Computed direction-dependent conductivity tensors
- Extracted geometrical indices (convex hull, depth, width, tortuosity)
- Applied machine learning (PCA + k-NN classification)

**Key Results:**
- Magnitude component (low frequency): water uptake patterns
- Phase component (high frequency): root architecture directly
- Species discrimination: 95% accuracy using k-NN on electrical signatures alone

**Publications:** 2 conference papers (*Geophysical Research Abstracts*)
**Thesis Chapter:** 4
**Collaboration:** Prof. Andreas Kemna (Bonn)
