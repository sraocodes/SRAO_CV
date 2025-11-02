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

      - main_text: "PhD: Electrical Signatures of Plant Roots"
        sub_text: "2016-2020"
        role: "FNRS Research Fellow (PhD)"
        institution: "UCLouvain, Belgium"
        category: "Research & Science"
        description: |
            **Doctoral Research:** Developed computational framework for non-invasive root phenotyping using geoelectrical methods.
            
            **Technical Innovation:**  
            - Built finite element models with 500,000+ tetrahedral elements  
            - Integrated root water uptake dynamics into geoelectrical simulations  
            - Quantified electrical anisotropy signatures of root architecture  
            - Applied machine learning (k-NN, PCA) for root species discrimination
            
            **Experimental Work:**  
            - Conducted field-scale ERT experiments under drought stress  
            - Combined numerical modeling with sensor data (ERT, TDR)
            
            **Research Output:** 4 peer-reviewed papers (135+ citations), 5 conference presentations
        
        skills:
          - type: "font"
            icon: "fa-cube"
            description: "Finite Element Modeling"
          - type: "font"
            icon: "fa-python"
            description: "Python/Automation"
          - type: "font"
            icon: "fa-brain"
            description: "Machine Learning"

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

      - main_text: "Quantum Optics Simulations"
        sub_text: "2015-2016"
        role: "Research Assistant"
        institution: "University of Paderborn, Germany"
        category: "Research & Science"
        description: |
            **Optical Communication Research:** Developed FORTRAN-based numerical solvers for excitonic resonances in two-level systems.
            
            **Technical Work:**  
            - Implemented Maxwell-Bloch equations using high-order Runge-Kutta  
            - Applied adaptive time-stepping for solution stability  
            - Modeled photon-matter interactions under DFG-funded research
        
        skills:
          - type: "font"
            icon: "fa-wave-square"
            description: "FORTRAN"
          - type: "font"
            icon: "fa-atom"
            description: "Quantum Physics"
          - type: "font"
            icon: "fa-calculator"
            description: "Numerical Solvers"

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