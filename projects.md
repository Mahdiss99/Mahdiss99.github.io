---
layout: page
title: "Projects"
permalink: /projects/
---

<div class="projects-section">

  <h2 class="section-spotlight">Research (UC Davis)</h2>

  <!-- NEW Project: Autonomous Racing Stack in Simulation -->
  <article class="project-card">
    <h3 class="project-title">Minimum Lap Time Autonomous Racing Stack in AutoDrive Simulator</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> RoboCORE Team Leader (Control / Planning / State Estimation)</p>
        <p><strong>Institution:</strong> <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
        <p><strong>Year:</strong> 2025</p>
        <ul>
          <li><strong>Reactive control (LiDAR):</strong> implemented a LiDAR-based reactive controller for track following in simulation.</li>
          <li><strong>Planning + tracking:</strong> developed a planning and tracking pipeline on a new track, using <strong>PID</strong> for tracking.</li>
          <li><strong>Localization transition:</strong> validated the planning stack using an <strong>idealized high-accuracy localization source</strong>, then worked to replace it with onboard estimation.</li>
          <li><strong>Sensor fusion:</strong> fused <strong>LiDAR, IMU, and wheel encoders</strong> to estimate global <strong>X, Y, yaw</strong>, and <strong>velocity</strong>.</li>
          <li><strong>Estimation methods explored:</strong> implemented and evaluated <strong>EKF</strong>, <strong>SLAM</strong>-based mapping/localization, and a <strong>learning-based estimator</strong>.</li>
          <li><strong>Key insight:</strong> achieved low estimation RMSE, but observed large closed-loop tracking error—highlighting integration challenges between estimation quality and control performance (timing, tuning, interfaces).</li>
        </ul>
        <p><strong>Artifacts:</strong>
          <a href="https://hub.docker.com/r/mahdiss99/robocore" target="_blank" rel="noopener noreferrer">Docker Image</a>
        </p>
        <p><strong>Skills:</strong> Docker, LiDAR, Reactive Control, Motion Planning, PID Tracking, EKF, Sensor Fusion, SLAM, Deep Learning</p>
        <p class="project-note">
          <em>Note:</em> Team qualified in the qualification round of
          <a href="https://autodrive-ecosystem.github.io/competitions/roboracer-sim-racing-cdc-tf-2025/"
             target="_blank" rel="noopener noreferrer">
            AutoDRIVE RoboRacer Sim Racing (CDC-TF 2025)
          </a>.
        </p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/Network_estimation.png" alt="MLP trained for state estimation by fusing LiDAR, IMU, and wheel encoders.">
          <img src="/assets/images/EKF_and_SLAM.png" alt="(a) State Estimation using EKF, (b) SLAM offline mapping/localization.">
          <video controls class="project-video">
            <source src="/assets/video/Qualification_round.mp4" type="video/mp4">
          </video>
          <video controls class="project-video">
            <source src="/assets/video/Final_round.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </article>


  <!-- Project: Multi-Step Deep Koopman -->
  <article class="project-card project--video-bottom">
    <h3 class="project-title">Multi-Step Deep Koopman for Vehicle Control in Frenet Frame</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
        <p><strong>Year:</strong> Spring 2025</p>
        <ul>
          <li>Implemented cross-language integration by embedding Python in MATLAB/Simulink for a trajectory tracking MPC for high fidelity CarSim-modeled C-Class Hatchback vehicle.</li>
          <li>Presented at IROS 2025.</li>
        </ul>
        <p><strong>Skills:</strong> Python, MATLAB/Simulink, MPC Design, Koopman Operator, Deep learning-based system identification</p>
      </div>
      <!-- Right column: image only -->
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/Plot_MPC_comp.png"
              alt="Comparison between MPC performance with LTI model vs MDK model and the reference trajectory." width="90%"> 
        </div>
      </div>
      <!-- Full-width bottom: video -->
      <div class="project-bottom">
        <video controls class="project-video">
          <source src="/assets/video/MDK-Net.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </article>



  <!-- Project: Neural A* (no media; still same card style) -->
  <article class="project-card project--no-split">
    <h3 class="project-title">Path-Planning and Collision Avoidance: Neural Network Approach</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Student</p>
        <p><strong>Institution:</strong> UC Davis</p>
        <p><strong>Year:</strong> 2024</p>
        <ul>
          <li>Reproduced key results from Neural A* and U-Net–based path planning studies, implementing and benchmarking architectures in PyTorch.</li>
          <li>Analyzed encoder–decoder variants (VGG-16, ResNet-50) and proposed modifications for dynamic and multi-agent navigation.</li>
        </ul>
        <p><strong>Skills:</strong> PyTorch, Deep Learning, Path Planning, Neural Networks</p>
      </div>
      <div class="project-media">
        <div class="project-actions right">
          <a href="/assets/pdfs/neural%20Astar.pdf" target="_blank" rel="noopener" class="project-pdf">Project PDF</a>
        </div>
      </div>
    </div>
  </article>



  <!-- Project: MIMO Robust Control -->
  <article class="project-card">
    <h3 class="project-title">MIMO Optimal Robust Control for Fixed-Wing UAVs</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Student</p>
        <p><strong>Institution:</strong> UC Davis</p>
        <p><strong>Year:</strong> 2024</p>
        <ul>
          <li>Designed and compared <strong>PID</strong>, <strong>Youla</strong>, and <strong>H∞</strong> robust controllers for fixed-wing UAV dynamics using MATLAB/Simulink.</li>
          <li>Analyzed performance and robustness under model uncertainty using frequency-domain tools.</li>
        </ul>
        <p><strong>Skills:</strong> MATLAB/Simulink, Robust Control, MIMO Systems, UAV Dynamics</p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/mimo.png" alt="Control performance comparison for fixed-wing UAV.">
        </div>
      </div>
    </div>
  </article>


  <!-- Project: Ground Vehicle Collision Avoidance -->
  <article class="project-card">
    <h3 class="project-title">Path-Planning and Collision Avoidance of Ground Vehicles</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
        <p><strong>Duration:</strong> Summer 2023 – Summer 2024</p>
        <ul>
          <li>Created a vehicle dynamic model in Julia.</li>
          <li>Augmented collision avoidance in optimal control problems using linear and nonlinear MPC.</li>
        </ul>
        <p><strong>Skills:</strong> Julia, Object-oriented programming, Vehicle dynamics, MPC</p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/OSQP_MPC.png" alt="OSQP / MPC illustration."  width="80%">
        </div>
      </div>
    </div>
  </article>


  <!-- Project: RC Car Estimation (two images + pdf centered below) -->
  <article class="project-card">
    <h3 class="project-title">Position and Orientation Estimation of an RC Car Using Kalman Filtering</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> UC Davis</p>
        <p><strong>Duration:</strong> Spring 2023</p>
        <ul>
          <li>Modeled and simulated vehicle dynamics in MATLAB.</li>
          <li>Designed Kalman and Extended Kalman Filters.</li>
        </ul>
        <p><strong>Skills:</strong> MATLAB, Kalman Filter</p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/estimationError.jpg" alt="Estimation error.">
          <img src="/assets/images/state-comparison.jpg" alt="State comparison.">
        </div>
        <div class="media-actions right">
          <a href="/assets/pdfs/Estimation.pdf" target="_blank" class="project-pdf">Project PDF</a>
        </div>
      </div>
    </div>
  </article>


</div>



<div class="projects-section">
  <h2 class="section-spotlight">Earlier Research (University of Tehran)</h2>

  <!-- Project: Soft Magnetic Tactile Sensor (your custom collage preserved, but split title full-width) -->
  <article class="project-card">
    <h3 class="project-title">Design and Fabrication of a Soft Magnetic Tactile Sensor</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> Smart Electromechanical Energy Conversion Systems Lab (SEECS), University of Tehran</p>
        <p><strong>Duration:</strong> Feb. 2022 – Sep. 2022</p>
        <ul>
          <li>Performed mechanical analysis of dome deformation using resin, including stress-strain simulations.</li>
          <li>Utilized 3D-printing for prototyping and evaluated material properties through tensile testing.</li>
          <li>Designed and fabricated a Hall-effect-based tactile sensor for real-time force measurement.</li>
          <li>Developed and integrated data acquisition systems using Arduino for precise force measurements.</li>
          <li>Implemented a multi-layer perceptron to predict applied forces from Hall-effect signals.</li>
        </ul>
        <p><strong>Skills:</strong> C/C++, Electromechanical design, Embedded system, MLP, Mechanical analysis</p>
        <p><strong>Highlights:</strong> 4th best paper finalists at
          <a href="https://icrom.ir/" target="_blank" rel="noopener noreferrer">ICRoM 2022</a>.
        </p>
      </div>
      <div class="project-media">
      <div class="sensor-tiles">
        <img src="/assets/images/sensor-CAD.jpg" alt="Designed sensor parts." class="tile cad">
        <img src="/assets/images/tensile.jpg" alt="Tensile testing." class="tile tensile">
        <img src="/assets/images/disp.jpg" alt="Prediction vs actual." class="tile disp">
        <img src="/assets/images/force.jpg" alt="Dynamic response." class="tile force">
        <img src="/assets/images/sensor.jpg" alt="Fabricated sensor." class="tile sensor">
      </div>
      <div class="media-actions right">
        <a href="https://doi.org/10.1109/ICRoM57054.2022.10025333" target="_blank" class="project-pdf">Project PDF</a>
      </div>
    </div>
    </div>
  </article>



  <!-- Project: Test Rig -->
  <article class="project-card">
    <h3 class="project-title">Test Rig Design for Tactile Sensor</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> Smart Electromechanical Energy Conversion Systems Lab (SEECS), University of Tehran</p>
        <p><strong>Duration:</strong> Feb. 2022 – Sep. 2022</p>
        <ul>
          <li>Designed and built a test bed and integrated two cylindrical linear voice coil actuators for normal/tangential forces.</li>
          <li>Designed and simulated the electrical circuit (instrumentation amps, bridges, filters) using Altium.</li>
          <li>Designed PID controllers for two voice coils using STM32.</li>
        </ul>
        <p><strong>Skills:</strong> C/C++, Altium, Electromechanical Design, Embedded System, Filtering</p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/instrumentation.jpg" alt="Sensor testing instrumentation.">
          <video controls class="project-video">
            <source src="/assets/video/Tactile-test.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </article>


  <!-- Project: Hand Stabilizer (two images side-by-side) -->
  <article class="project-card">
    <h3 class="project-title">Hand Stabilizer Gloves for Parkinson Disease</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> Modal Analysis and Vibration Laboratory, University of Tehran</p>
        <p><strong>Duration:</strong> June 2020 – January 2021</p>
        <ul>
          <li>Design of a passive vibration absorber with a magnetic spring.</li>
          <li>Design of a vibrating shaft to simulate Parkinson tremors.</li>
        </ul>
        <p><strong>Skills:</strong> SOLIDWORKS, Design optimization</p>
        <p><strong>Highlights:</strong> Won research grant at
          <a href="https://2020.isav.ir/?lang=en" target="_blank" rel="noopener noreferrer">ISAV 2020</a>.
        </p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/hand1.JPG" alt="Passive vibration absorber." width="80%">
          <img src="/assets/images/hand2.JPG" alt="Hand tremor simulator." width="80%">
        </div>
      </div>
    </div>
  </article>



  <!-- Project: Macro-AFM (pdf below image) -->
  <article class="project-card">
    <h3 class="project-title">Macro-Atomic Force Microscopy</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Intern</p>
        <p><strong>Institution:</strong> Smart Electromechanical Energy Conversion Systems Lab (SEECS), University of Tehran</p>
        <p><strong>Duration:</strong> Summer 2021</p>
        <ul>
          <li>Modeling and analysis of the macro-AFM probe (mechanical + magnetic) using ANSYS.</li>
          <li>Study of frequency response and feedback.</li>
        </ul>
        <p><strong>Skills:</strong> SOLIDWORKS, Ansys, COMSOL, Frequency analysis</p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/intern1.png" alt="Macro-AFM designed in SOLIDWORKS." width="80%">
        </div>
        <div class="media-actions right">
          <a href="/assets/pdfs/Internship.pdf" target="_blank" class="project-pdf">Project PDF</a>
        </div>
      </div>
    </div>
  </article>

</div>



<div class="projects-section">
  <h2 class="section-spotlight">Mentorship</h2>

  <!-- Mentorship 1 -->
  <article class="project-card project--no-split">
    <h3 class="project-title">CORE Lab Vehicle Trajectory Prediction Team</h3>
    <div class="project-content">
      <p><strong>Role:</strong> Mentor</p>
      <p><strong>Institution:</strong> <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
      <p><strong>Duration:</strong> April 2025 – Present</p>
      <ul>
        <li>Mentored an undergraduate team developing ML models for interactive vehicle behavior prediction in multi-agent environments.</li>
        <li>Guided data processing, training pipelines, and model validation.</li>
      </ul>
      <p><strong>Skills:</strong> Machine Learning, Python, Data Modeling, Mentorship</p>
    </div>
  </article>

  <!-- Mentorship 2 (two images side-by-side) -->
  <article class="project-card">
    <h3 class="project-title">F1tenth Autonomous Racing Platform</h3>
    <div class="project-body">
      <div class="project-content">
        <p><strong>Role:</strong> Supervisor</p>
        <p><strong>Institution:</strong> <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
        <p><strong>Duration:</strong> 2023 – 2025</p>
        <ul>
          <li>Co-supervised and co-developed the lab’s F1tenth platform, establishing repeatable calibration/validation procedures.</li>
          <li>Guided an undergraduate team through hardware bring-up, instrumentation, and testing.</li>
        </ul>
        <p><strong>Skills:</strong> Embedded Systems, Instrumentation, Leadership, Autonomous Racing</p>
      </div>
      <div class="project-media">
        <div class="media-stack">
          <img src="/assets/images/RC3.jpg" alt="F1tenth platform at CORE Lab.">
          <img src="/assets/images/RC1.jpg" alt="F1tenth platform at CORE Lab.">
        </div>
      </div>
    </div>
  </article>


</div>
