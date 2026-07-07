---
title: "Research & Engineering Portfolio"
layout: "project"

groups:

  # ─── IISc ────────────────────────────────────────────────────────────────
  - name: "Indian Institute of Science"
    tagline: "Bengaluru, India · 2022–Present"
    icon: "fa-flask"
    items:

      - main_text: "SAR-Based Soil Moisture Estimation with Machine Learning"
        sub_text: "2024–2025"
        role: "Research Associate"
        summary: "Soil-specific Random Forest calibration for SAR-based soil moisture retrieval, achieving a 34% accuracy improvement for sandy textures. Submitted to Remote Sensing Letters."
        description: |
            **Breakthrough Achievement:** Developed soil-specific Random Forest calibration achieving **34% accuracy improvement** for sandy textures in SAR-based soil moisture retrieval.
            
            **Scientific Impact:**  
            - Analyzed 677 paired SAR-soil moisture observations across 5 soil textures  
            - Discovered counterintuitive vegetation enhancement effect (r=0.743 vegetated vs r=0.380 bare soil)  
            - Developed information proxy framework predicting calibration success  
            - **Publication:** Submitted to *Remote Sensing Letters* (2024)
            
            **Innovation:** Combined physics-based understanding with machine learning to solve operational remote sensing challenges.
        skills:
          - type: "font"
            icon: "fa-brain"
            description: "Random Forest"
          - type: "font"
            icon: "fa-satellite"
            description: "SAR Remote Sensing"
          - type: "font"
            icon: "fa-python"
            description: "Python/Scikit-learn"

      - main_text: "Surface Moisture Diagnostics for Watershed Interventions (REWARD Project)"
        sub_text: "2025–Present"
        role: "Project Lead (Research Associate)"
        summary: "Sentinel-1-based diagnostic evaluating whether watershed interventions produce a measurable dry-season surface moisture advantage over untreated neighbouring land, applied across multiple watersheds in North Karnataka over two successive dry seasons."
        description: |
            **Context:** Satellite-based diagnostic evaluating whether watershed interventions produce a measurable dry-season surface moisture advantage over untreated neighbouring land.

            **Approach:** A local control-ring design — treated points inside each intervention polygon compared against a surrounding untreated ring, with the difference referenced to a pre-intervention baseline. Applied across two successive dry seasons.

            **What was found:** Roughly half the watersheds showed either a persistent or emerging positive dry-season moisture signal. A subset held the advantage consistently across both years; others showed it emerging or weakening. The analysis identifies which watersheds are strongest candidates for detailed field follow-up.

            A companion assessment examined pre-monsoon surface moisture behaviour in a single taluk during a drought year, showing that one long-treated watershed retained its moisture advantage while untreated neighbours declined.

            **Status:** Internal diagnostic report (May 2026); IISc Civil Engineering, Bengaluru.
        skills:
          - type: "font"
            icon: "fa-satellite"
            description: "Sentinel-1 SAR"
          - type: "font"
            icon: "fa-water"
            description: "Watershed Hydrology"
          - type: "font"
            icon: "fa-chart-bar"
            description: "Treatment-Control Analysis"

      - main_text: "Active-Passive Microwave Fusion for Decadal Soil Moisture Monitoring"
        sub_text: "2025–Present"
        role: "Research Associate (First Author)"
        summary: "Fused Sentinel-1 SAR with SMAP-400m passive microwave to bridge the systematic monsoon data gap in passive retrievals, producing a 129-month continuous soil moisture record (2016–2026) for a 5400-ha watershed in Karnataka. Submitted to International Journal of Remote Sensing."
        description: |
            **Problem:** Satellite passive microwave (SMAP-400m) fails on fewer than 12% of monsoon days over the Harave watershed — precisely when hydrology is most active. Cloud cover blocks the optical downscaling inputs; L-band is attenuated under dense wet canopy.

            **Approach:** Calibrated a dry-season empirical transfer function between Sentinel-1 VV backscatter and SMAP-400m soil moisture, selected from four functional forms using the Bayesian Information Criterion and validated by leave-one-year-out cross-validation.

            **Key Findings:**
            - Linear model retained for operational use (yields absolute volumetric estimates)
            - Sentinel-2 NDVI did not improve calibration — vegetation structure already embedded in SMAP-400m via VIIRS leaf area index
            - Fused record validated against independent rainfall and TDR observations in adjacent Mallaiinupura watershed without recalibration

            **Output:** 129-month continuous monthly soil moisture record, 2016–2026, covering 58 monsoon months where SMAP-400m was unavailable.

            **Submitted to:** *International Journal of Remote Sensing* (IJRS)
        skills:
          - type: "font"
            icon: "fa-satellite"
            description: "Sentinel-1 SAR / SMAP"
          - type: "font"
            icon: "fa-water"
            description: "Sensor Fusion"
          - type: "font"
            icon: "fa-chart-line"
            description: "Time-series Analysis"

      - main_text: "High-Frequency Soil Hydrothermal Observations from a Semi-Arid Monsoon Catchment, 2016–2025"
        sub_text: "2025–Present"
        role: "Research Associate (First Author)"
        summary: "A decade-long, 15-minute resolution record of soil moisture, temperature, and electrical conductivity from the Berambadi agricultural catchment, Karnataka — covering 944 rainfall events across wet, drought, and recovery years. Submitted to Scientific Data, June 2026."
        description: |
            **Dataset:** Continuous 15-minute measurements of soil moisture, temperature, and electrical conductivity (or dielectric permittivity from 2021) at 5 cm and 50 cm depths, with an additional 15 cm depth from 2021 onwards. Co-located precipitation recorded at the same interval. Delivered as annual CSV files in Indian Standard Time.

            **Study site:** Berambadi agricultural catchment, Mysore Plateau, Karnataka (~84 km²). Part of the Kabini Critical Zone Observatory and the OZCAR network. Mixed rainfed and groundwater-irrigated agriculture under semi-arid monsoon conditions (~800 mm/yr).

            **Record span:** 2016–2025. Covers event, seasonal, and interannual scales including a wet year (2016), drought (2023), and recovery (2024). Sensor transition in 2021 (EC → dielectric permittivity) with one year of overlap to support continuity.

            **What it provides:**
            - 944-event rainfall catalogue with sub-hourly resolution
            - Depth-dependent thermal and hydraulic response of the soil profile
            - One of the few long-term, sub-hourly soil hydrothermal records from the Indian monsoon belt

            **Submitted to:** *Scientific Data* (June 2026, under review after revision)
        skills:
          - type: "font"
            icon: "fa-chart-line"
            description: "Time-series Analysis"
          - type: "font"
            icon: "fa-water"
            description: "Soil Hydrology"
          - type: "font"
            icon: "fa-database"
            description: "Open Dataset"

  # ─── Forschungszentrum Jülich ─────────────────────────────────────────────
  - name: "Forschungszentrum Jülich"
    tagline: "Germany · 2023–2025"
    icon: "fa-seedling"
    items:

      - main_text: "Agricultural Digital Twin Model Coupling"
        sub_text: "2023–2025"
        role: "Research Software Engineer"
        summary: "Coupled 1D crop models (C/C++) with 3D functional-structural plant models (Fortran/CPlantBox) for the PhenoRob project, enabling realistic soil-plant-atmosphere simulation."
        description: |
            **System Integration:** Coupled 1D crop models (C/C++) with 3D Functional-Structural Plant Models (Fortran/CPlantBox), enabling realistic simulation of soil-plant-atmosphere dynamics.
            
            **Technical Achievement:**  
            - Implemented loose-coupling data exchange with timestep synchronization  
            - Created mechanistic sink-term for AgroC using dynamic root architecture  
            - Built cross-platform PyQt5 GUI for model configuration  
            - Packaged workflows with Docker for HPC deployment
            
            **Scientific Communication:**  
            - Led monthly project coordination  
            - Authored review paper on model coupling & digital twins (*In Silico Plants*, under review)  
            - Contributed book chapters on LLMs and UAVs in agriculture
        skills:
          - type: "font"
            icon: "fa-cogs"
            description: "C++/Fortran Integration"
          - type: "font"
            icon: "fa-docker"
            description: "Docker/HPC"
          - type: "font"
            icon: "fa-laptop-code"
            description: "Scientific Computing"

      - main_text: "Docker Containers for Agricultural Modeling"
        sub_text: "2024"
        role: "Research Software Engineer"
        summary: "Containerized CPlantBox and DuMuX-ROSI environments for plant modeling research, including VNC-enabled 3D visualization. Available on DockerHub."
        description: |
            **Reproducible Science:** Created containerized environments for plant modeling frameworks, dramatically improving accessibility and reproducibility.
            
            **CPlantBox GUI Docker:**  
            - Integrated VNC viewer for 3D root visualization  
            - Bundled scientific packages (NumPy, SciPy, VTK)  
            - [DockerHub: satraox/cplantbox-gui](https://hub.docker.com/r/satraox/cplantbox-gui)
            
            **DuMuX-ROSI-Jupyter:**  
            - Pre-configured Jupyter environment for soil-plant simulations  
            - Coupled multi-phase flow (DuMuX) with root models (ROSI)  
            - [DockerHub: satraox/dumux-rosi-jupyter](https://hub.docker.com/r/satraox/dumux-rosi-jupyter)
        videos:
          daa_channel:
            - title: "Running CPlantBox with Docker"
              id: "UN6D1_cXeT8"
        skills:
          - type: "font"
            icon: "fa-docker"
            description: "Docker"
          - type: "font"
            icon: "fa-server"
            description: "DevOps"
          - type: "font"
            icon: "fa-leaf"
            description: "Plant Modeling"

      - main_text: "PhenoRob Digital Agricultural Avatar Website"
        sub_text: "2023–2024"
        role: "Web Developer & Technical Lead"
        summary: "Hugo-based documentation platform for PhenoRob agricultural modeling tools, with interactive guides, scientific visualizations, and custom SCSS/JavaScript."
        description: |
            **Project Website:** Developed comprehensive documentation platform for agricultural modeling tools integration.
            
            **Features:**  
            - Interactive documentation for crop modeling workflows  
            - Scientific visualizations and animations  
            - Hugo-based static site with custom SCSS/JavaScript  
            - Integration guides for multiple modeling frameworks
            
            [Visit Project Website](https://sraocodes.github.io/Phenorob-DAA/)
        videos:
          daa_channel:
            - title: "AgroC Crop Model: Installation Guide"
              id: "1E9nW_TAp0c"
        skills:
          - type: "font"
            icon: "fa-code"
            description: "Hugo/JavaScript"
          - type: "font"
            icon: "fa-palette"
            description: "Web Design"
          - type: "font"
            icon: "fa-book-open"
            description: "Documentation"

  # ─── UCLouvain PhD ────────────────────────────────────────────────────────
  - name: "UCLouvain — PhD Research"
    tagline: "Belgium · 2016–2020 · FNRS Research Fellow"
    icon: "fa-graduation-cap"
    items:

      - main_text: "Doctoral Thesis: Non-Invasive Geo-Electrical Imaging of Plant Roots"
        sub_text: "2016–2020"
        role: "FNRS Research Fellow"
        summary: "Four-year investigation into non-invasive geo-electrical imaging of plant roots, producing the first coupled hydro-geophysical framework linking root architecture, water uptake, and electrical signatures. 4 papers, 135+ citations."
        description: |
            **Thesis Title:** "Investigation of signatures of plant roots from non-invasive geo-electrical measurements"
            
            **Research Problem:** How do plant roots influence soil electrical properties? Can we "see" roots without digging them up?
            
            Created the first coupled hydro-geophysical framework linking root architecture, water uptake, and electrical signatures — enabling non-invasive root phenotyping at scales from centimeters to field plots.
            
            **Funding:** Belgian FNRS (Fonds National de la Recherche Scientifique) - Grant T.1088.15  
            **Defense:** 2020, UCLouvain (during COVID-19 pandemic)  
            **Supervisors:** Prof. Mathieu Javaux (UCLouvain), Prof. Frédéric Nguyen (ULiège), Prof. Sarah Garré (Gembloux)
            
            **Impact:**  
            - 4 peer-reviewed papers (135+ citations)  
            - 5 international conference presentations  
            - Multiple international collaborations (Germany, Austria, Israel)  
            - Established new research field: Computational Root Geophysics
        skills:
          - type: "font"
            icon: "fa-cube"
            description: "FEM (500k elements)"
          - type: "font"
            icon: "fa-leaf"
            description: "Root Biophysics"
          - type: "font"
            icon: "fa-bolt"
            description: "Geoelectrical Methods"

      - main_text: "Process-Based Mechanistic Model for Soil-Root Electrical Conduction"
        sub_text: "2017–2018"
        role: "PhD Researcher"
        summary: "First mechanistic model to couple root water uptake (R-SWMS) with 3D electrical simulations (PyGIMLi), quantifying how roots distort standard petrophysical relations. Published in Vadose Zone Journal, 2019."
        description: |
            **Research Question:** Can we build a mechanistic model incorporating BOTH root architecture and water dynamics?
            
            **Innovation — Coupled Framework:**  
            - Integrated R-SWMS (root water uptake) with PyGIMLi (electrical modeling)  
            - 3D finite element models with 500,000+ tetrahedral elements  
            - Separated **direct** (root conductivity) vs **indirect** (moisture) electrical effects  
            - First model to achieve this level of physical realism
            
            **Key Discovery:**  
            Roots impact petrophysical relations — the standard Archie's Law doesn't work when roots are present. We quantified exactly how roots modify the soil's electrical behavior.
            
            **Publication:** *Vadose Zone Journal* (2019), 35 citations  
            **Thesis Chapter:** 3  
            **Tools:** Python, PyGIMLi, Gmsh, R-SWMS, EIDORS
        skills:
          - type: "font"
            icon: "fa-project-diagram"
            description: "Coupled Modeling"
          - type: "font"
            icon: "fa-water"
            description: "Root Hydraulics"
          - type: "font"
            icon: "fa-python"
            description: "Python/PyGIMLi"

      - main_text: "Electrical Anisotropy as Root Architecture Fingerprint"
        sub_text: "2018–2019"
        role: "PhD Researcher (Visiting Scholar, Univ. Bonn)"
        summary: "Demonstrated that electrical anisotropy encodes root architecture — species discrimination at 95% accuracy using k-NN on electrical signatures alone. First mechanistic proof of 3D structural information in geoelectrical data."
        description: |
            **Research Question:** Does electrical anisotropy contain information about root architecture?
            
            **Breakthrough Discovery:**  
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
        skills:
          - type: "font"
            icon: "fa-brain"
            description: "k-NN/PCA/ML"
          - type: "font"
            icon: "fa-chart-area"
            description: "Anisotropy Tensors"
          - type: "font"
            icon: "fa-seedling"
            description: "Root Architecture"

      - main_text: "Field-Scale ERT Phenotyping Under Water Deficit"
        sub_text: "2018–2020"
        role: "PhD Researcher"
        summary: "Multi-season ERT field campaign across 6 grassland species under controlled water deficit. Successfully discriminated species by their electrical-hydraulic fingerprints. Published in Plant and Soil, 2020."
        description: |
            **Research Question:** Can ERT discriminate between plant species in real field conditions?
            
            **Field Experimental Campaign:**  
            - Multi-season ERT surveys across 6 grassland species (alfalfa, red clover, chicory, plantain, ryegrass, fescue)  
            - Controlled water deficit experiment (ForDrought project)  
            - Integration with TDR sensors for soil moisture validation  
            - Repeated 3D ERT measurements during drying cycles
            
            **Novel Methodology — "Model-Informed ERT Interpretation":**  
            Run synthetic forward models to test what should happen, then compare to observations.
            
            **Major Finding:**  
            Successfully discriminated 5 grass species based on their electrical-hydraulic fingerprints. Species-specific depletion zones were clearly visible and statistically significant.
            
            **Publications:**  
            - *Plant and Soil* (2020), 29 citations  
            - Field data supported by Région Wallonne (ForDrought D31-1341)
            
            **Thesis Chapters:** 5 & 6  
            **Collaborations:** Prof. Sarah Garré, Dr. Florian Wagner (RWTH Aachen), Dr. Nolwenn Lesparre (Strasbourg)
        skills:
          - type: "font"
            icon: "fa-broadcast-tower"
            description: "Field ERT"
          - type: "font"
            icon: "fa-chart-line"
            description: "Time-series/Gaussian Fitting"
          - type: "font"
            icon: "fa-vial"
            description: "Experimental Design"

      - main_text: "Comprehensive Review: Electrical Properties of Roots"
        sub_text: "2016–2017"
        role: "PhD Researcher"
        summary: "Comprehensive synthesis of geoelectrical methods for soil-root studies, with original lab measurements of root electrical properties. 71 citations in Vadose Zone Journal — the most-cited paper of the PhD."
        description: |
            **Comprehensive Review:** State-of-the-art in geoelectrical methods for soil-root studies.
            
            **Coverage:**  
            - Theoretical background (lossy dielectrics, polarization mechanisms)  
            - Measured electrical properties of plant tissues (resistive & capacitive)  
            - Overview of ERT and EIT methods for root investigation  
            - Petrophysical transfer relations (Archie's Law, vegetation impact)  
            - Need for explicit root modeling (limitations of mixing models)
            
            **Experimental Work:**  
            - Electrical measurements on root segments (DC resistance, polarization signatures)  
            - Laboratory characterization of rapeseed root electrical properties  
            - Time-Domain and Spectral Induced Polarization (TDIP/SIP) experiments
            
            **Key Insight:**  
            Existing mixing models don't capture physics correctly. You need explicit 3D representation of root architecture.
            
            **Publication:** *Vadose Zone Journal* (2020), **71 citations**  
            **Thesis Chapter:** 2  
            **Laboratory Collaborations:** Dr. Solomon Ehosioke (ULiège)
        skills:
          - type: "font"
            icon: "fa-book"
            description: "Literature Synthesis"
          - type: "font"
            icon: "fa-microscope"
            description: "Root Measurements"
          - type: "font"
            icon: "fa-bolt"
            description: "Electrical Spectroscopy"

      - main_text: "Open-Source Root-ERT Modeling Pipeline"
        sub_text: "2016–2020"
        role: "PhD Researcher & Software Developer"
        summary: "Modular, reproducible framework for root-soil electrical modeling: from root architecture generation (C-Rootbox) through water uptake (R-SWMS) to 3D FEM electrical simulation (PyGIMLi/Gmsh)."
        description: |
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
        skills:
          - type: "font"
            icon: "fa-python"
            description: "Python/C++"
          - type: "font"
            icon: "fa-cube"
            description: "FEM/Gmsh"
          - type: "font"
            icon: "fa-server"
            description: "HPC/Parallel Computing"

  # ─── Earlier Research ─────────────────────────────────────────────────────
  - name: "Earlier Research"
    tagline: "USA & Germany · 2010–2016"
    icon: "fa-atom"
    items:

      - main_text: "Plasma Physics Simulations"
        sub_text: "2010–2013"
        role: "Research Assistant (MS) · University of Alabama in Huntsville"
        summary: "Extended a 2D electrostatic particle-in-cell code into a full 3D electromagnetic plasma simulation framework. 3 papers in Physics of Plasmas, 69 citations."
        description: |
            **Computational Physics:** Extended 2D electrostatic Particle-in-Cell plasma code into fully functional 3D electromagnetic simulation framework.
            
            **Achievements:**  
            - Developed Helmholtz coil field generation modules for plasma thruster digital twins  
            - Implemented MPI/OpenMP parallelization for HPC scaling  
            - Captured wave-particle interactions and plasma instabilities
            
            **Funding:** NSF grant ATM0647157  
            **Publications:** 3 papers in *Physics of Plasmas* (69 citations)
        skills:
          - type: "font"
            icon: "fa-bolt"
            description: "FORTRAN/MPI"
          - type: "font"
            icon: "fa-server"
            description: "HPC"
          - type: "font"
            icon: "fa-calculator"
            description: "Numerical Methods"

      - main_text: "Maxwell-Bloch Equations for Exciton-Polariton Propagation"
        sub_text: "2015–2016"
        role: "Research Assistant · University of Paderborn"
        summary: "FORTRAN solver for exciton-polariton propagation in semiconductors using coupled Maxwell-Bloch equations, with 4th-order Runge-Kutta temporal integration."
        description: |
            **Research Project:** Numerical modeling of light propagation in semiconductor optical systems using coupled Maxwell-Bloch equations.
            
            **Physical System:**  
            Exciton-polaritons in semiconductors — quasi-particles from strong coupling between photons and excitonic resonances, crucial for optical switches and quantum information devices.
            
            **Numerical Implementation:**  
            - FORTRAN code development for Maxwell-Bloch solver  
            - 4th-order Runge-Kutta method for temporal integration  
            - Finite-difference methods for spatial derivatives  
            - Adaptive time-stepping for numerical stability
            
            **Supervision:** Prof. Torsten Meier (Theoretical Physics)  
            **Funding:** DFG optical signal processing project
        skills:
          - type: "font"
            icon: "fa-wave-square"
            description: "FORTRAN/Numerical PDE"
          - type: "font"
            icon: "fa-atom"
            description: "Quantum Optics"
          - type: "font"
            icon: "fa-calculator"
            description: "Runge-Kutta/Finite-Diff"

      - main_text: "Laser-Matter Interaction Research"
        sub_text: "2013–2014"
        role: "Research Assistant (MS) · Alabama A&M University"
        summary: "Experimental study of laser-induced photodegradation of Rhodamine 6G — cleanroom operations, AFM, and high-value laser systems. GPA 4.0/4.0."
        description: |
            **Experimental & Theoretical Physics:** Investigated laser-induced photodegradation of dye molecules (Rhodamine 6G).
            
            **Laboratory Skills:**  
            - Performed photo-patterning and bio-deposition in cleanroom  
            - Operated high-value laser systems and AFM with nanometer precision  
            - Analyzed biomolecule deposition patterns  
            - Teaching Assistant for Physics 101
            
            **Academic Performance:** GPA 4.0/4.0
        skills:
          - type: "font"
            icon: "fa-microscope"
            description: "AFM/Laser Systems"
          - type: "font"
            icon: "fa-vial"
            description: "Experimental Physics"
          - type: "font"
            icon: "fa-atom"
            description: "Photodegradation"

  # ─── Independent ──────────────────────────────────────────────────────────
  - name: "Independent"
    tagline: "2020–Present"
    icon: "fa-user-astronaut"
    items:

      - main_text: "Sentinel-2 NDVI Trends as a Groundwater Extraction Indicator (Tamil Nadu)"
        sub_text: "2026"
        role: "Independent Researcher (Solo)"
        summary: "Independent analysis testing whether block-scale Sentinel-2 peak-NDVI trends track CGWB groundwater extraction gradients across six over-exploited blocks in Tiruvannamalai district, Tamil Nadu. Found a borderline-significant positive association (r=0.814, p=0.049)."
        description: |
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
        skills:
          - type: "font"
            icon: "fa-satellite"
            description: "Sentinel-2 / GEE"
          - type: "font"
            icon: "fa-tint"
            description: "Groundwater Remote Sensing"
          - type: "font"
            icon: "fa-chart-bar"
            description: "Trend Analysis"

      - main_text: "Compute Stories YouTube Channel"
        sub_text: "2024–Present"
        role: "Content Creator & Educator"
        summary: "Educational videos on computational science, data analysis, and modeling for students and professionals."
        description: |
            **Science Communication:** Produce educational videos simplifying computational science, data analysis, and modeling.
            
            **Content Focus:**  
            - Computational modeling fundamentals  
            - Data science workflows  
            - Technical writing best practices  
            - Research methodologies
            
            **Production Skills:** Video editing (Final Cut Pro, DaVinci Resolve), 2D animation (Pencil2D), visual storytelling
            
            [Watch on YouTube](https://www.youtube.com/@ComputeStories)
        videos:
          compute_channel:
            - title: "Canonical Correspondence Analysis"
              id: "AmmajDBSLFM&t=92s"
            - title: "Statistical Arbitrage in Trading"
              id: "ZkhP0Vdlkok&t=37s"
            - title: "Soil Moisture Explained"
              id: "9GOKTmn8tO0&t=324s"
        skills:
          - type: "font"
            icon: "fa-video"
            description: "Video Production"
          - type: "font"
            icon: "fa-youtube"
            description: "Content Creation"
          - type: "font"
            icon: "fa-chalkboard-teacher"
            description: "Science Communication"

      - main_text: "How Not to Die in Indian Traffic: A Scientist's Survival Guide to Bengaluru Roads (Book)"
        sub_text: "March 2026"
        role: "Author · Kindle Edition"
        summary: "A traffic awareness book exploring Bengaluru roads as a human system — psychology, risk perception, social norms, and urban density — drawn from daily commute observations and analytical thinking. Published March 2026."
        description: |
            Rather than treating traffic as an engineering problem, this book approaches it as a complex human system shaped by psychology, cognitive decision-making, and social behavior under stress.

            The ideas grew out of daily riding observations in Bengaluru — recurring patterns, predictable mistakes, and the dynamics that make Indian urban traffic what it is.

            **Published:** 20 March 2026  
            **Format:** Kindle Edition, 61 pages  
            **ASIN:** B0GT7D2NMN

            [Available on Amazon](https://www.amazon.in/How-Not-Die-Indian-Traffic-ebook/dp/B0GT7D2NMN)
        skills:
          - type: "font"
            icon: "fa-book"
            description: "Popular Science"
          - type: "font"
            icon: "fa-brain"
            description: "Behavioral Analysis"
          - type: "font"
            icon: "fa-pen"
            description: "Science Writing"

      - main_text: "Digital Twins: From Apollo to Smart Farming (Book)"
        sub_text: "2025"
        role: "Author · Notion Press"
        summary: "Monograph on digital twin technology from Apollo missions to precision agriculture. ISBN: 979-8900231457."
        description: |
            **Published Monograph:** Comprehensive exploration of digital twin technology evolution from aerospace engineering to modern agriculture.
            
            **Coverage:**  
            - Historical development (Apollo missions → Industry 4.0)  
            - Agricultural applications and precision farming  
            - Integration of IoT, AI, and simulation technologies  
            - Future directions in digital agriculture
            
            **ISBN:** 979-8900231457  
            [Available on Amazon](https://www.amazon.in/dp/B0FP5JS1KL)
        skills:
          - type: "font"
            icon: "fa-book"
            description: "Technical Writing"
          - type: "font"
            icon: "fa-pen"
            description: "Publishing"
          - type: "font"
            icon: "fa-robot"
            description: "Digital Twins"

      - main_text: "Algorithmic Trading Systems"
        sub_text: "2020–2022"
        role: "Independent Consultant"
        summary: "Python-based automated trading systems with real-time WebSocket tick data and broker API integration (Angel Broking, Zerodha). Built during the COVID-19 pandemic."
        description: |
            **Financial Technology:** Developed algorithmic trading strategies and execution systems for clients using Python.
            
            **Technical Implementation:**  
            - WebSocket integration for real-time tick data  
            - Trading strategies based on moving averages  
            - Integration with broker APIs (Angel Broking, Zerodha)  
            - Automated stock selection and order execution
            
            **Period Context:** Maintained active skill-building during COVID-19 pandemic while pursuing academic opportunities.
        skills:
          - type: "font"
            icon: "fa-chart-line"
            description: "Algorithmic Trading"
          - type: "font"
            icon: "fa-python"
            description: "Python/APIs"
          - type: "font"
            icon: "fa-network-wired"
            description: "WebSocket"

---
