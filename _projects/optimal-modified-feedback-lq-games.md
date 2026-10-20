---
title: "Optimal Modified Feedback Strategies in LQ Games under Control Imperfections"
category: control-dynamics-estimation
order: 5
featured: 2
date_label: "Fall 2025"
image: /assets/images/thumbs/optimal-modified-feedback-lq-games.jpg
description: "Designed a deviation-aware compensation strategy for two-player LQ games in which the opponent's commands are executed imperfectly (e.g., actuator lag)."
outcome_label: "Key Result"
outcome: "In a spring–damper two-cart example, compensation reduced Player 1's lag penalty relative to the uncompensated case and kept trajectories closer to the nominal Nash behavior."
meta:
  - label: "Role"
    value: "Researcher"
  - label: "Institution"
    value: "<a href=\"https://nazarilab.ucdavis.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">CORE Lab, UC Davis</a>"
  - label: "Year"
    value: "Fall 2025"
---

<p>
  Looked at a practical issue in two-player “game-theoretic” control: even if both players compute a Nash strategy, real hardware
  rarely executes commands perfectly (actuator lag, delays, saturation). Those small execution errors can throw off the interaction
  and increase the other player’s cost.
</p>

<ul>
  <li>
    Modeled the opponent’s execution mismatch as a measurable disturbance entering the coupled dynamics.
  </li>
  <li>
    Designed a deviation-aware compensation strategy using <strong>LQR-style tools</strong> by augmenting the state and solving
    an <strong>augmented Riccati recursion</strong>.
  </li>
</ul>

<figure class="figure">
  <a class="figure__zoom" href="/assets/images/ACC-01.png" target="_blank" rel="noopener" title="Open full-size image"><img src="/assets/images/ACC-01.png" width="1020" height="1158" loading="lazy" decoding="async" alt="Schematic of the two-cart setup and qualitative final positions under the three cases. Case I (FNE) shows near-symmetric convergence near the origin. Case II (REF) illustrates how Player 2’s actuator lag degrades both players’ positions relative to nominal. Case III (CF) shows that the compensated policy enables Player 1 to mitigate the error and approach its nominal outcome, while Player 2 remains misaligned due to its uncompensated lag."/></a>
  <figcaption aria-hidden="true">Schematic of the two-cart setup and qualitative final positions under the three cases. Case I (FNE) shows near-symmetric convergence near the origin. Case II (REF) illustrates how Player 2’s actuator lag degrades both players’ positions relative to nominal. Case III (CF) shows that the compensated policy enables Player 1 to mitigate the error and approach its nominal outcome, while Player 2 remains misaligned due to its uncompensated lag.</figcaption>
</figure>

<p>
  <strong>Outcome:</strong> in a spring–damper two-cart example, the compensated controller reduced Player 1’s lag penalty (vs. no
  compensation) and kept the trajectories closer to the nominal Nash behavior.
</p>

<figure class="figure">
  <a class="figure__zoom" href="/assets/images/Table_optimalModified.png" target="_blank" rel="noopener" title="Open full-size image"><img src="/assets/images/Table_optimalModified.png" width="1267" height="429" loading="lazy" decoding="async" alt="FINITE-HORIZON COSTS UNDER THE THREE CASES (τ = 0.8 S, α ≈ 0.9814). CF (CASE III) REDUCES PLAYER 1’S LAG PENALTY RELATIVE TO CASE II." /></a>
  <figcaption aria-hidden="true">FINITE-HORIZON COSTS UNDER THE THREE CASES (τ = 0.8 S, α ≈ 0.9814). CF (CASE III) REDUCES PLAYER 1’S LAG PENALTY RELATIVE TO CASE II.</figcaption>
</figure>

<div class="project__skills">
  <p class="project__skills-label">Skills</p>
  <ul class="skill-tags">
    <li>Dynamic Games</li>
    <li>Robust/Optimal Control</li>
    <li>Interaction Modeling</li>
    <li>Riccati Methods</li>
    <li>Simulation</li>
  </ul>
</div>
