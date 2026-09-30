---
title: Open-Source Root-ERT Modeling Pipeline
date: '2016-01-01'
period: 2016–2020
theme: roots
weight: 6
featured: false
institution: UCLouvain — PhD Research
role: PhD Researcher & Software Developer
methods:
- Python/C++
- FEM/Gmsh
- HPC/Parallel Computing
summary: 'Modular, reproducible framework for root-soil electrical modeling: from
  root architecture generation (C-Rootbox) through water uptake (R-SWMS) to 3D FEM
  electrical simulation (PyGIMLi/Gmsh).'
software: true
---

**Objective:** Create reproducible, modular framework for root-soil electrical modeling.

**Full Pipeline:**
```
Root Architecture (C-Rootbox)
        ↓
Water Uptake (R-SWMS)
        ↓
3D Mesh Generation (Gmsh + Python)
        ↓
Electrical Forward Model (PyGIMLi)
        ↓
ERT Inversion & Analysis
        ↓
Visualization (ParaView, Matplotlib)
```

**Key Features:**
- Automatic mesh generation from root architectures
- Coupled hydro-electrical data exchange
- Scalable from rhizotron to field
- HPC-ready parallelization

**Open Science Contribution:**
- Shared datasets for benchmarking
- Contributed code to PyGIMLi community
- Trained 5+ students in framework usage

**Repository:** Available for collaboration (contact for details)
