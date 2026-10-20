---
title: "Minimum Lap Time Autonomous Racing Stack in AutoDrive Simulator"
category: autonomous-systems-planning
order: 1
featured: 1
date_label: "Fall 2025"
image: /assets/images/thumbs/minimum-lap-time-autonomous-racing.jpg
description: "Developed reactive control and explored LiDAR, IMU, and wheel-encoder state estimation (EKF, SLAM, and an MLP estimator) for an autonomous racing stack in the AutoDRIVE simulator."
# Short muted loop shown on the homepage (Selected Work) only
preview_video: /assets/video/previews/roboracer-preview.mp4
preview_poster: /assets/video/previews/roboracer-preview.jpg
outcome_label: "Key Result"
outcome: "In simulation, the LiDAR-based reactive controller completed 10 consecutive collision-free laps on the Qualification Track; the team qualified in the AutoDRIVE RoboRacer Sim Racing qualification round."
meta:
  - label: "Role"
    value: "Researcher"
  - label: "Institution"
    value: "<a href=\"https://nazarilab.ucdavis.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">CORE Lab, UC Davis</a>"
  - label: "Year"
    value: "Fall 2025"
---

<ul>
  <li>
    <strong>Reactive control (LiDAR):</strong>
    Designed and implemented a LiDAR-based reactive controller for track following,
    achieving 100% collision-free operation over 10 consecutive laps on the Qualification Track.
  </li>
</ul>

<figure class="figure">
  <video poster="/assets/images/posters/Qualification_round.jpg" controls preload="metadata" playsinline aria-label="Qualification round video">
    <source src="/assets/video/Qualification_round.mp4" type="video/mp4">
  </video>
  <figcaption aria-hidden="true">Qualification round</figcaption>
</figure>

<ul>
  <li>
    <strong>Path planning (prototype):</strong>
    Prototyped a <strong>Delaunay Triangulation–based (DTR)</strong> raceline generation approach and shared
    findings with the teammate owning the final planning module.
  </li>
  <li>
    <strong>Tracking control:</strong>
    Tuned the path-tracking <strong>PID controller</strong> to improve stability and lap consistency.
    This stage was validated using an idealized localization source (IPS) as a baseline.
  </li>
  <li>
    <strong>Localization transition:</strong>
    Worked on replacing IPS with onboard state estimation to enable fully autonomous operation.
  </li>
  <li>
    <strong>Sensor fusion & state estimation:</strong>
    Explored multi-sensor localization by fusing <strong>LiDAR, IMU, and wheel encoders</strong> to estimate
    global position, yaw, and velocity.
  </li>
  <li>
    <strong>Estimation methods explored:</strong>
    Implemented and evaluated <strong>EKF</strong>, <strong>SLAM-based mapping/localization</strong>,
    and a <strong>learning-based (MLP) estimator</strong>.
  </li>
</ul>

<div class="figure-row">
<figure class="figure figure--half">
  <a class="figure__zoom" href="/assets/images/Network_estimation.png" target="_blank" rel="noopener" title="Open full-size image"><img src="/assets/images/web/Network_estimation.jpg" alt="MLP trained for state estimation by fusing LiDAR, IMU, and wheel encoders." width="1800" height="1014" loading="lazy" decoding="async"></a>
  <figcaption aria-hidden="true">MLP trained for state estimation by fusing LiDAR, IMU, and wheel encoders.</figcaption>
</figure>
<figure class="figure figure--half">
  <a class="figure__zoom" href="/assets/images/EKF_and_SLAM.png" target="_blank" rel="noopener" title="Open full-size image"><img src="/assets/images/web/EKF_and_SLAM.jpg" alt="(a) State Estimation using EKF, (b) SLAM offline mapping/localization." width="1800" height="1717" loading="lazy" decoding="async"></a>
  <figcaption aria-hidden="true">(a) State Estimation using EKF, (b) SLAM offline mapping/localization.</figcaption>
</figure>
</div>

<ul>
  <li>
    <strong>Key insight:</strong>
    Achieved low estimation RMSE, yet observed large closed-loop tracking error, highlighting
    practical integration challenges between estimation quality and control performance
    (latency, tuning, and interfaces).
  </li>
</ul>

<figure class="figure">
  <video poster="/assets/images/posters/Final_round.jpg" controls preload="metadata" playsinline aria-label="Final round video">
    <source src="/assets/video/Final_round.mp4" type="video/mp4">
  </video>
  <figcaption aria-hidden="true">Final round</figcaption>
</figure>

<p class="project__detail">
  <strong>Artifacts:</strong>
  <a href="https://hub.docker.com/r/mahdiss99/robocore" target="_blank" rel="noopener noreferrer">
    Docker Image
  </a>
</p>

<div class="project__skills">
  <p class="project__skills-label">Skills</p>
  <ul class="skill-tags">
    <li>LiDAR</li>
    <li>Reactive Control</li>
    <li>Path Planning</li>
    <li>PID Control</li>
    <li>EKF</li>
    <li>Sensor Fusion</li>
    <li>SLAM</li>
    <li>Deep Learning</li>
    <li>Docker</li>
  </ul>
</div>

<p class="project__note"> <em>Note:</em> Team qualified in the qualification round of <a href="https://autodrive-ecosystem.github.io/competitions/roboracer-sim-racing-cdc-tf-2025/" target="_blank" rel="noopener noreferrer"> AutoDRIVE RoboRacer Sim Racing (CDC-TF 2025)</a>. </p>
