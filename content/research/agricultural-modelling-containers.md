---
title: Docker Containers for Agricultural Modeling
date: '2024-01-01'
period: '2024'
theme: crops
weight: 3
featured: false
institution: Forschungszentrum Jülich
role: Research Software Engineer
methods:
- Docker
- DevOps
- Plant Modeling
summary: Containerized CPlantBox and DuMuX-ROSI environments for plant modeling research,
  including VNC-enabled 3D visualization. Available on DockerHub.
software: true
videos:
- title: Running CPlantBox with Docker
  id: UN6D1_cXeT8
---

**Purpose:** Created containerized environments for plant modeling frameworks, dramatically improving accessibility and reproducibility.

**CPlantBox GUI Docker:**
- Integrated VNC viewer for 3D root visualization
- Bundled scientific packages (NumPy, SciPy, VTK)
- [DockerHub: satraox/cplantbox-gui](https://hub.docker.com/r/satraox/cplantbox-gui)

**DuMuX-ROSI-Jupyter:**
- Pre-configured Jupyter environment for soil-plant simulations
- Coupled multi-phase flow (DuMuX) with root models (ROSI)
- [DockerHub: satraox/dumux-rosi-jupyter](https://hub.docker.com/r/satraox/dumux-rosi-jupyter)
