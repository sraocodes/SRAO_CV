---
title: "Research & Engineering Portfolio"
subtitle: "From quantum physics simulations to agricultural AI - Two decades of computational science"
layout: "project"

sections:
  - title: "Projects"
    items:
      # ===== CURRENT RESEARCH (2022-Present) =====
      
      - main_text: "SAR-Based Soil Moisture Estimation with Machine Learning"
        sub_text: "2024-2025"
        role: "Research Associate"
        institution: "Indian Institute of Science (IISc), Bengaluru"
        category: "Research & Science"
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

      - main_text: "Decade-Long Soil Hydrothermal Dataset (2016-2025)"
        sub_text: "2022-2025"
        role: "Research Associate"
        institution: "Indian Institute of Science (IISc), Bengaluru"
        category: "Research & Science"
        description: |
            **Dataset Contribution:** Curated and analyzed **10-year, 15-minute resolution** soil moisture and temperature observations from semi-arid agricultural catchment.
            
            **Key Discoveries:**  
            - Identified systematic increase in thermal inversions (+2.41%/year)  
            - Documented 79.3% percolation probability across 916 rainfall events  
            - Revealed "dry-soil advantage" for deep infiltration  
            - Detected emerging water stress trends (+4.6%/year)
            
            **Impact:** Provides critical tropical land surface data filling gap in global soil moisture networks.  
            **Publication:** In preparation for *Scientific Data* (2025)
        
        skills:
          - type: "font"
            icon: "fa-chart-line"
            description: "Time-series Analysis"
          - type: "font"
            icon: "fa-water"
            description: "Hydrology"
          - type: "font"
            icon: "fa-database"
            description: "Big Data Processing"

      # ===== SCIENTIFIC SOFTWARE & MODELING (2023-2025) =====

      - main_text: "Agricultural Digital Twin Model Coupling"
        sub_text: "2023-2025"
        role: "Research Software Engineer"
        institution: "Forschungszentrum Jülich (PhenoRob Project), Germany"
        category: "Research & Science"
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
        institution: "Forschungszentrum Jülich, Germany"
        category: "Technical Projects"
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

      # ===== PhD RESEARCH (2016-2020) =====

      - main_text: "Doctoral Thesis: Non-Invasive Geo-Electrical Imaging of Plant Roots"
        sub_text: "2016-2020"
        role: "FNRS Research Fellow (PhD)"
        institution: "UCLouvain, Belgium (Earth and Life Institute)"
        category: "Research & Science"
        description: |
            **Thesis Title:** "Investigation of signatures of plant roots from non-invasive geo-electrical measurements"
            
            **Research Problem:** How do plant roots influence soil electrical properties? Can we "see" roots without digging them up?
            
            **Breakthrough Achievement:**  
            Created **world's first coupled hydro-geophysical framework** linking root architecture, water uptake, and electrical signatures. This enables non-invasive root phenotyping at scales from centimeters to field plots.
            
            **Why This Matters:**  
            - 🌾 **Agriculture**: Real-time root monitoring without destructive sampling  
            - 🔬 **Plant Breeding**: Rapid phenotyping for drought tolerance  
            - 🌍 **Climate**: Quantify carbon sequestration in root systems  
            - 💧 **Water Management**: Optimize irrigation based on root activity
            
            **Funding:** Belgian FNRS (Fonds National de la Recherche Scientifique) - Grant T.1088.15  
            **Defense:** 2020, UCLouvain (during COVID-19 pandemic)  
            **Supervisors:** Prof. Mathieu Javaux (UCLouvain), Prof. Frédéric Nguyen (ULiège), Prof. Sarah Garré (Gembloux)
            
            **Impact:**  
            - 4 peer-reviewed papers (135+ citations)  
            - 5 international conference presentations  
            - Multiple international collaborations (Germany, Austria, Israel)  
            - Established new research field: **Computational Root Geophysics**
            
            **Consulting Applications:** Precision agriculture, breeding programs, environmental monitoring, AgTech startups
            
            *Expand below to explore 5 thesis components →*
        
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
        sub_text: "2017-2018 | PhD Research"
        role: "PhD Researcher"
        institution: "UCLouvain, Belgium"
        category: "Research & Science"
        description: |
            **Research Question:** Can we build a mechanistic model incorporating BOTH root architecture and water dynamics?
            
            **Innovation - Coupled Framework:**  
            - Integrated R-SWMS (root water uptake) with PyGIMLi (electrical modeling)  
            - 3D finite element models with 500,000+ tetrahedral elements  
            - Separated **direct** (root conductivity) vs **indirect** (moisture) electrical effects  
            - First model to achieve this level of physical realism
            
            **Key Discovery:**  
            **Roots impact petrophysical relations** - The standard Archie's Law doesn't work when roots are present! We quantified exactly how roots modify the soil's electrical behavior.
            
            **Technical Achievement:**  
            - Custom mesh generation pipeline (Gmsh + Python automation)  
            - Forward ERT simulations validated against rhizotron experiments  
            - Computed apparent vs. effective electrical conductivities  
            - Developed upscaling methodology for field applications
            
            **Validation:**  
            Synthetic measurements matched real rhizotron data for maize and lupin under controlled conditions.
            
            **Commercial Value:**  
            Framework can be adapted to ANY crop-soil system. Companies can use this to:
            - Design better root monitoring sensors  
            - Interpret field ERT data correctly  
            - Predict irrigation needs from electrical measurements
            
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
        sub_text: "2018-2019 | PhD Research"
        role: "PhD Researcher (Visiting Scholar)"
        institution: "University of Bonn, Germany & UCLouvain, Belgium"
        category: "Research & Science"
        description: |
            **Research Question:** Does electrical anisotropy (direction-dependent conductivity) contain information about root architecture?
            
            **Breakthrough Discovery:**  
            **YES!** Electrical anisotropy is a **fingerprint of root organization**. This was the first mechanistic proof that geoelectrical measurements encode 3D structural information.
            
            **Methodology:**  
            - Generated synthetic root architectures using C-Rootbox (monocots vs. dicots)  
            - Computed direction-dependent conductivity tensors  
            - Extracted geometrical indices (convex hull, depth, width, tortuosity)  
            - Applied machine learning (PCA + k-NN classification)
            
            **Key Results:**  
            - **Magnitude component** (low frequency): Water uptake patterns  
            - **Phase component** (high frequency): Root architecture directly  
            - **Anisotropy factor**: Strong correlation with root geometry indices  
            - **Species discrimination**: 95% accuracy using k-NN on electrical signatures alone!
            
            **Machine Learning Integration:**  
            - Principal Component Analysis for dimensionality reduction  
            - K-Nearest Neighbor classifier for species identification  
            - Statistical validation (ANOVA, Tukey HSD)  
            - Proven discriminatory power of anisotropy metrics
            
            **Why This Is Revolutionary:**  
            You can identify crop species and quantify root traits **without seeing the roots**. Just measure electrical anisotropy!
            
            **Commercial Applications:**  
            - Automated root phenotyping for breeding trials  
            - Early species detection in mixed cropping  
            - Root architecture quantification for precision agriculture  
            - Patent-worthy algorithms for AgTech companies
            
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
        sub_text: "2018-2020 | PhD Research"
        role: "PhD Researcher"
        institution: "UCLouvain & Gembloux Agro-Bio Tech, Belgium"
        category: "Research & Science"
        description: |
            **Research Question:** Can ERT discriminate between plant species in real field conditions?
            
            **Field Experimental Campaign:**  
            - Multi-season ERT surveys across 6 grassland species (alfalfa, red clover, chicory, plantain, ryegrass, fescue)  
            - Controlled water deficit experiment (ForDrought project)  
            - Integration with TDR sensors for soil moisture validation  
            - Repeated 3D ERT measurements during drying cycles  
            - Weather station data for ET₀ calculations
            
            **Novel Methodology - "Model-Informed ERT Interpretation":**  
            Problem: Field ERT is noisy. How do you know if changes are real or artifacts?  
            Solution: Run synthetic forward models to test what SHOULD happen, then compare to observations.
            
            **Analytical Innovation:**  
            - Fitted **Gaussian temporal curves** to quantify water uptake timing  
            - Computed spatial variability of transpiration demand  
            - Used numerical models to validate that changes were plant-driven  
            - Developed statistical framework to detect species-specific signatures
            
            **Major Finding:**  
            **Successfully discriminated 5 grass species** based on their electrical-hydraulic fingerprints! Species-specific depletion zones were clearly visible and statistically significant.
            
            **What Made This Difficult:**  
            - Soil heterogeneity (noise)  
            - Atmospheric variability (rain, temperature)  
            - Measurement artifacts (electrode contact)  
            - Small signal-to-noise ratio for subtle differences
            
            **How We Solved It:**  
            - Advanced data filtering (Adrián Flores Orozco, TU Vienna)  
            - Model-based artifact detection  
            - Temporal curve fitting to extract patterns  
            - Statistical validation against destructive sampling
            
            **Practical Impact:**  
            This proves ERT works for **operational field phenotyping**. Breeding programs can now:
            - Screen hundreds of varieties non-destructively  
            - Monitor root activity continuously  
            - Select for drought tolerance in-field  
            - Reduce phenotyping costs by 10x
            
            **Publications:**  
            - *Plant and Soil* (2020), 29 citations  
            - Field data supported by Région Wallonne (ForDrought D31-1341)
            
            **Thesis Chapters:** 5 & 6  
            **Collaborations:** Prof. Sarah Garré (field access), Dr. Florian Wagner (RWTH Aachen), Dr. Nolwenn Lesparre (Strasbourg)
        
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
        sub_text: "2016-2017 | PhD Research"
        role: "PhD Researcher"
        institution: "UCLouvain & University of Liège, Belgium"
        category: "Research & Science"
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
            - Time-Domain Induced Polarization (TDIP) experiments  
            - Spectral Induced Polarization (SIP) analysis
            
            **Key Insight:**  
            Existing "mixing models" (averaging soil + roots) **don't capture physics correctly**. You need explicit 3D representation of root architecture.
            
            **This Review Became Highly Cited:**  
            *Vadose Zone Journal* (2020), **71 citations** - Most cited paper of PhD!  
            
            "Sensing the electrical properties of roots: A review"  
            Comprehensive synthesis establishing foundation for thesis work.
            
            **Thesis Chapter:** 2  
            **Laboratory Collaborations:**  
            Dr. Solomon Ehosioke (ULiège) for root electrical parameterization experiments
        
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
        sub_text: "2016-2020 | PhD Research"
        role: "PhD Researcher & Software Developer"
        institution: "UCLouvain, Belgium"
        category: "Technical Projects"
        description: |
            **Objective:** Create reproducible, modular framework for root-soil electrical modeling.
            
            **Architecture - Full Pipeline:**  
            ```
            Root Architecture (C-Rootbox)
                    ↓
            Water Uptake (R-SWMS)
                    ↓
            3D Mesh Generation (Gmsh + Python)
                    ↓
            Electrical Forward Model (PyGIMLi)
                    ↓
            ERT Inversion & Analysis (PyGIMLi + SciPy)
                    ↓
            Visualization (ParaView, Matplotlib)
            ```
            
            **Key Components:**  
            - **Automatic mesh generation**: Converts root architectures to FEM-ready meshes  
            - **Coupled hydro-electrical**: Bidirectional data exchange  
            - **Scalability**: Rhizotron → Pot → Field  
            - **Parallelization**: HPC-ready for large simulations  
            - **Quality control**: Automated convergence checks
            
            **Software Stack:**  
            - **PyGIMLi**: Core ERT modeling and inversion library  
            - **Gmsh**: 3D tetrahedral mesh generation  
            - **R-SWMS**: Root water uptake (C++ backend)  
            - **C-Rootbox**: Root architecture generator  
            - **EIDORS**: Effective property calculations (MATLAB)  
            - **Python**: Pipeline orchestration (NumPy, SciPy, Pandas)  
            - **ParaView**: 3D visualization and rendering
            
            **Computational Challenges:**  
            - Models with 500,000+ elements require HPC  
            - Memory management for large meshes  
            - Numerical stability in coupled simulations  
            - Parallelization for parameter sweeps
            
            **Open Science Contribution:**  
            - Shared datasets for benchmarking  
            - Contributed code to PyGIMLi community  
            - Documented workflows for reproducibility  
            - Trained 5+ students in framework usage  
            - Active in PyGIMLi GitLab (Dr. Thomas Günther, Dr. Carsten Rücker)
            
            **Consulting Value:**  
            This is a **ready-to-deploy commercial framework**. Companies can license/adapt for:
            - Custom crop monitoring solutions  
            - Sensor design and validation  
            - Digital twin development for agriculture  
            - Real-time root activity estimation
            
            **Technical Depth:**  
            Full grasp of: Finite elements, inverse problems, geophysics, plant biophysics, scientific computing, HPC
            
            **Repository:** Available for collaboration/consulting (contact for details)
        
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

      # ===== EARLIER RESEARCH (2010-2016) =====

      - main_text: "Plasma Physics Simulations"
        sub_text: "2010-2013"
        role: "Research Assistant (MS)"
        institution: "University of Alabama in Huntsville, USA"
        category: "Research & Science"
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
        sub_text: "2015-2016"
        role: "Research Assistant"
        institution: "University of Paderborn, Germany"
        category: "Research & Science"
        description: |
            **Research Project:** Numerical modeling of light propagation in semiconductor optical systems using coupled Maxwell-Bloch equations.
            
            **Physical System:**  
            Exciton-polaritons in semiconductors - quasi-particles resulting from strong coupling between light (photons) and matter excitations (excitons). These systems are crucial for developing optical switches, modulators, and quantum information devices.
            
            **Theoretical Framework:**  
            - **Maxwell Equations**: Governs electromagnetic wave propagation  
            - **Optical Bloch Equations**: Describes two-level system dynamics (excitonic resonances)  
            - **Coupling**: Material response modeled as collection of two-level systems responding to optical fields
            
            **Technical Challenge:**  
            Solving coupled nonlinear partial differential equations (Maxwell) with ordinary differential equations (Bloch) requires sophisticated numerical methods and deep understanding of both quantum mechanics and electromagnetism.
            
            **Background Preparation:**  
            - Self-studied advanced quantum mechanics (second quantization, many-body theory)  
            - Learned solid-state physics and semiconductor optics (band structure, interband absorption, excitons, polaritons)  
            - Mastered optical Bloch equations for two-level systems  
            - Studied light-matter interaction theory from research literature
            
            **Numerical Implementation:**  
            - **FORTRAN code development** for Maxwell-Bloch solver  
            - **4th-order Runge-Kutta method** for temporal integration  
            - **Finite-difference methods** for spatial derivatives  
            - **Adaptive time-stepping** for numerical stability  
            - Handled stiff differential equations common in quantum-optical systems
            
            **Research Contribution:**  
            Developed working numerical solver capable of simulating:
            - Pulse propagation through semiconductor media  
            - Excitonic resonance effects  
            - Polariton formation and dynamics  
            - Nonlinear optical phenomena (self-induced transparency, solitons)
            
            **Technical Skills Acquired:**  
            - Quantum mechanics (Wannier equation, hydrogen atom solutions, raising/lowering operators)  
            - Many-body quantum mechanics and second quantization  
            - Semiconductor physics (optical excitations, band structure)  
            - Advanced numerical methods (Runge-Kutta, finite-difference, FDTD)  
            - High-performance scientific computing in FORTRAN
            
            **Supervision:** Prof. Torsten Meier (Theoretical Physics)  
            **Funding:** DFG (German Research Foundation) optical signal processing project
            
            **Consulting Relevance:**  
            Expertise in coupled physics-based simulations, numerical stability, and quantum-classical interfaces applicable to:
            - Optical device simulation  
            - Quantum computing systems  
            - Multiphysics modeling  
            - Scientific software development
        
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
        sub_text: "2013-2014"
        role: "Research Assistant (MS)"
        institution: "Alabama A&M University, USA"
        category: "Research & Science"
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

      # ===== CONTENT CREATION & WRITING =====

      - main_text: "Compute Stories YouTube Channel"
        sub_text: "2024-Present"
        role: "Content Creator & Educator"
        institution: "Independent"
        category: "Content Creation"
        description: |
            **Science Communication:** Produce educational videos simplifying computational science, data analysis, and modeling for students and professionals.
            
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

      - main_text: "Digital Twins: From Apollo to Smart Farming (Book)"
        sub_text: "2025"
        role: "Author"
        institution: "Notion Press"
        category: "Writing & Publishing"
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

      - main_text: "Scientific Publications & Book Chapters"
        sub_text: "2012-2025"
        role: "Author & Co-author"
        institution: "Multiple Institutions"
        category: "Writing & Publishing"
        description: |
            **Research Output:** 9 peer-reviewed journal articles (204+ citations), 2 book chapters, 5 conference presentations.
            
            **Recent Publications:**  
            - *Remote Sensing Letters* (2024, under review): SAR soil moisture calibration  
            - *In Silico Plants* (2024, under review): Digital twin architectures  
            - *Scientific Data* (2025, in prep): Decade-long soil dataset
            
            **Book Chapters:**  
            - Climate-Resilient Agriculture with LLMs (2025)  
            - UAVs as Data Feeders for Agricultural Digital Twins (2025, submitted)
            
            **Most Cited Papers:**  
            - "Sensing electrical properties of roots" (71 citations, *Vadose Zone Journal*)  
            - "Plasma waves in helicon magnetic nozzle" (39 citations, *Physics of Plasmas*)
        
        skills:
          - type: "font"
            icon: "fa-file-alt"
            description: "Scientific Writing"
          - type: "font"
            icon: "fa-chart-bar"
            description: "Research Communication"
          - type: "font"
            icon: "fa-book-open"
            description: "Peer Review"

      # ===== TECHNICAL/WEB PROJECTS =====

      - main_text: "PhenoRob Digital Agricultural Avatar Website"
        sub_text: "2023-2024"
        role: "Web Developer & Technical Lead"
        institution: "Forschungszentrum Jülich, Germany"
        category: "Technical Projects"
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

      # ===== INDEPENDENT R&D (2020-2022) =====

      - main_text: "Algorithmic Trading Systems"
        sub_text: "2020-2022"
        role: "Independent Consultant"
        institution: "Freelance Projects"
        category: "Technical Projects"
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

      - main_text: "Healthcare ML Architecture Consulting"
        sub_text: "2020-2022"
        role: "Independent Consultant"
        institution: "Freelance Projects"
        category: "Technical Projects"
        description: |
            **Machine Learning Consulting:** Advised on ML library selection and developed MVP for healthcare application using Gradio.
            
            **Deliverables:**  
            - ML pipeline architecture design  
            - Interactive UI prototypes with Gradio  
            - Time-series modeling for medical data  
            - Technical documentation and training
        
        skills:
          - type: "font"
            icon: "fa-brain"
            description: "Machine Learning"
          - type: "font"
            icon: "fa-heartbeat"
            description: "Healthcare Tech"
          - type: "font"
            icon: "fa-laptop-code"
            description: "Python/Gradio"
---