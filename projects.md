---
layout: page
title: "Projects"
permalink: /projects/
---
<div class="projects-section">
  <!-- Project 1 -->
  <div class="project-card">
    <div class="project-content">
      <h2>Path-Planning and Collision Avoidance of Ground Vehicles</h2>
      <p><strong>Role:</strong> Researcher</p>
      <p><strong>Institution:</strong>  <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
      <p><strong>Duration:</strong> Summer 2023 – Present</p>
      <ul>
        <li>Created a vehicle dynamic model in Julia.</li>
        <li>Augmented collision avoidance in optimal control problems using linear and nonlinear Model Predictive Control (MPC).</li>
      </ul>
      <p><strong>Skills:</strong> Julia, Object-oriented programming, Vehicle dynamics, MPC</p>
    </div>
    <div class="project-media">
      <img src="/assets/images/OSQP_MPC.png" alt="Project Image">
    </div>
  </div>

  <!-- Project 2 -->
  <div class="project-card">
    <div class="project-content">
      <h2>RC Team Management</h2>
      <p><strong>Role:</strong> Researcher</p>
      <p><strong>Institution:</strong> <a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab, UC Davis</a></p>
      <p><strong>Duration:</strong> Summer 2023 – Present</p>
      <ul>
        <li>Mentoring and leading the CORE Lab RC car team.</li>
        <li>Designed and tested wheel encoders using infrared sensors and Arduino.</li>
      </ul>
    </div>
    <div class="project-media">
      <img src="/assets/images/RC3.jpg" alt="Image of the Lab members with Prof. Nazari">
      <!-- <a href="/assets/pdfs/project2.pdf" target="_blank" class="project-pdf">Project PDF</a> -->
    </div>
  </div>

  <!-- Project 3 -->
  <div class="project-card">
    <div class="project-content">
      <h2>Position and Orientation Estimation of an RC Car Using Kalman Filtering</h2>
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
      <img src="/assets/images/estimationError.jpg" alt="Project Image">
      <img src="/assets/images/state-comparison.jpg" alt="Project Image">
      <a href="/assets/pdfs/Estimation.pdf" target="_blank" class="project-pdf">Project PDF</a>
    </div>
  </div>

  <!-- Project 4 -->
  <div class="project-card custom-layout">
    <div class="project-content">
        <h2>Design and Fabrication of a Soft Magnetic Tactile Sensor</h2>
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> Smart Electromechanical Energy Conversion Systems Lab (SEECS), University of Tehran</p>
        <p><strong>Duration:</strong> Feb. 2022 – Sep. 2022</p>
        <ul>
          <li>Performed mechanical analysis of dome deformation using resin, including stress-strain simulations.</li>
          <li>Utilized 3D-printing for prototyping of sensor components and evaluated material properties to optimize mechanical performance through tensile testing.</li>
          <li>Designed and fabricated a Hall-effect-based tactile sensor for real-time force measurement under applied loads.</li>
          <li>Developed and integrated data acquisition systems using Arduino for precise force measurements.</li>
          <li>Implemented a multi-layer perceptron to process sensor data and predict applied forces from Hall-effect signals.</li>
        </ul>
        <p><strong>Skills:</strong> C/C++, Electromechanical design, Embedded system, Multi-layer perceptron (MLP), Mechanical analysis</p>
        <p><strong>Highlights:</strong> 4th best paper finalists at <a href="https://icrom.ir/" target="_blank" rel="noopener noreferrer"> the 10th International Conference on Robotics and Mechatronics (ICRoM 2022)</a>.</p>
    </div>
    <div class="project-images">
        <div class="top-right">
            <img src="/assets/images/sensor-CAD.jpg" alt="Designed sensor parts." class="large-image">
            <div class="small-images-row">
                <img src="/assets/images/tensile.jpg" alt="Tensile testing on 3D-printing resin to obtain its mechanical properties." class="small-image narrow">
                <img src="/assets/images/disp.jpg" alt="Sensor prediction vs actual force applied on it." class="small-image wide">
            </div>
            <img src="/assets/images/force.jpg" alt="Dynamic response of the sensor." class="large-image">
        </div>
        <div class="wide-bottom">
            <img src="/assets/images/sensor.jpg" alt="Fabricated sensor." class="wide-image">
        </div>
        <div class="small-images-row">
            <a href="/assets/pdfs/tactile.pdf" target="_blank" class="project-pdf">Project PDF</a>
        </div>
    </div>
</div>

<!-- Project 5 -->
  <div class="project-card">
    <div class="project-content">
        <h2>Test Rig Design for Tactile Sensor</h2>
        <p><strong>Role:</strong> Researcher</p>
        <p><strong>Institution:</strong> Smart Electromechanical Energy Conversion Systems Lab (SEECS), University of Tehran</p>
        <p><strong>Duration:</strong> Feb. 2022 – Sep. 2022</p>
        <ul>
            <li>Designed and built a test bed for the tactile sensor and integrated two cylindrical linear voice coil actuators to generate normal and tangential forces.</li>
            <li>Designed and simulated the electrical circuit, utilizing instrumental amplifiers, bridges for deriving voice coils and low-pass filters, using Altium.</li>
            <li>Designed PID controllers for two voice coils using STM32.</li>
        </ul>
        <p><strong>Skills:</strong> C/C++, Altium, Electromechanical Design, Embedded System, Filtering</p>
    </div>
    <div class="project-media">
      <img src="/assets/images/instrumentation.jpg" alt="Sensor's testing instrumention.">
      <video controls width="100%" class="project-video">
        <source src="/assets/video/Tactile-test.mp4" type="video/mp4">
      </video>
    </div>
</div>

  <!-- Project 6 -->
<div class="project-card">
  <div class="project-content">
    <h2>Hand Stabilizer Gloves for Parkinson Disease</h2>
    <p><strong>Role:</strong> Researcher</p>
    <p><strong>Institution:</strong> Modal Analysis and Vibration Laboratory, University of Tehran</p>
    <p><strong>Duration:</strong> June 2020 – January 2021</p>
    <ul>
      <li>Design of a passive vibration absorber with a magnetic spring.</li>
      <li>Design of a vibrating shaft to simulate the vibrations in Parkinsson disease.</li>
      <!-- Add more bullet points as needed -->
    </ul>
    <p><strong>Skills:</strong> SOLIDWORKS, Design optimization</p>
    <p><strong>Highlights:</strong> Won research grant for the hand stabilizer gloves in <a href="https://2020.isav.ir/?lang=en" target="_blank" rel="noopener noreferrer"> the 10th International Conference on Acoustics and Vibration (ISAV 2020)</a> student competition.</p>
  </div>
  <div class="project-media">
    <img src="/assets/images/hand1.JPG" alt="The passive vibration absorber.">
    <img src="/assets/images/hand2.JPG" alt="Simulator of hand with Parkinson tremors.">
  </div>
</div>

  <!-- Add more projects similarly -->
  <!-- Project 7 -->
<div class="project-card">
  <div class="project-content">
    <h2>Macro-Atomic Force Microscopy</h2>
    <p><strong>Role:</strong> Intern</p>
    <p><strong>Institution:</strong> Smart Electromechanical Energy Conversion Systems Lab (SEECS), University of Tehran</p>
    <p><strong>Duration:</strong> Summer 2021</p>
    <ul>
      <li>Modeling and analysis of the macro-AFM probe, including mechanical and magnetic simulations using ANSYS.</li>
      <li>Study of the frequency response and the feedback.</li>
    </ul>
    <p><strong>Skills:</strong> SOLIDWORKS, Ansys, COMSOL, Frequency analysis</p>
  </div>
  <div class="project-media">
    <img src="/assets/images/intern1.png" alt="Macro-AFM desined in SOLIDWORKS.">
    <a href="/assets/pdfs/Internship.pdf" target="_blank" class="project-pdf">Project PDF</a>
  </div>
</div>


</div>
