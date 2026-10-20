---
# Single source of truth for this project: the homepage (Selected Work), the Projects index,
# the Experience related-project cards and this page all read these fields.
title: "Optimal Modified Feedback Strategies in LQ Games under Control Imperfections"
category: control-dynamics-estimation
order: 5
featured: 2
date_label: "Fall 2025"
# Static fallback / social-preview image (a frame of the cover video, 3:2)
image: /assets/video/previews/lq-games-preview.jpg
description: "Analyzed how execution errors in one player's feedback Nash strategy affect the other player's performance, and developed a disturbance-aware compensation law for finite-horizon LQ games."
outcome_label: "Key Result"
outcome: "In a simulated two-cart system, compensated feedback reduced Player 1's cost by 10.7% and integrated squared error by 41.3% relative to uncompensated feedback under the same actuator lag."
# Thumbnail preview (3:2) used on the homepage, Projects index and Experience cards
preview_video: /assets/video/previews/lq-games-preview.mp4
preview_poster: /assets/video/previews/lq-games-preview.jpg
# Large cover on this page (source: assets/images/optimal_modified/results.mp4)
cover_video: /assets/video/previews/lq-games-cover.mp4
cover_poster: /assets/video/previews/lq-games-cover.jpg
cover_width: 1500
cover_height: 1500
cover_caption: "Two-cart spring–damper example, all three cases on a synchronized time axis from the same initial condition: nominal feedback Nash (top), Player 2 actuator lag with reference feedback (middle), and the same lag with Player 1's compensated feedback (bottom)."
meta:
  - label: "Role"
    value: "Researcher"
  - label: "Institution"
    value: "<a href=\"https://nazarilab.ucdavis.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">CORE Lab, UC Davis</a>"
  - label: "Year"
    value: "Fall 2025"
  - label: "Publication"
    value: "2026 American Control Conference (ACC), pp. 777–784"
  - label: "Presented"
    value: "ACC 2026"
---

<h2 class="case-heading" id="overview">Overview</h2>

<p>Feedback Nash equilibrium provides state-dependent strategies for interacting agents, but typically assumes that computed inputs are executed exactly. In practice, actuator dynamics can introduce deviations between intended and applied inputs. Because players interact through shared dynamics, one player's execution error can also affect the other player's cost.</p>

<p>This work characterizes that effect and develops a compensated feedback strategy that uses measurable execution deviations to mitigate the resulting performance loss.</p>

{% include case-cover.html %}

<h2 class="case-heading" id="key-results">Key results</h2>

<div class="metrics">
  <div class="metric">
    <p class="metric__value">10.7%</p>
    <p class="metric__label">lower Player 1 cost</p>
  </div>
  <div class="metric">
    <p class="metric__value">41.3%</p>
    <p class="metric__label">lower Player 1 integrated squared error</p>
  </div>
</div>

<p class="metric-note">Both relative to uncompensated reference feedback (REF) with the same Player 2 actuator lag, in a finite-horizon LQ two-cart spring–damper numerical example.</p>

<h2 class="case-heading" id="problem">Problem formulation</h2>

<p>Two players interact over a finite horizon in a discrete-time linear–quadratic (LQ) dynamic game, each minimizing its own quadratic cost. Their feedback Nash policies are computed assuming nominal input execution.</p>

<p>Player 2's applied input, however, deviates from its nominal Nash command; in the benchmark, because of first-order actuator lag. The deviation propagates through the shared closed-loop dynamics, so Player 1's realized state trajectory and objective change as well, even though Player 1 executes its own policy exactly.</p>

<figure class="figure">
  <a class="figure__zoom" href="/assets/images/optimal_modified/system.png" target="_blank" rel="noopener" title="Open full-size image"><img src="/assets/images/optimal_modified/system.png" width="1910" height="651" loading="lazy" decoding="async" alt="Two-cart spring–damper system at its initial condition: Player 2 (orange cart, input u2) and Player 1 (blue cart, input u1) are coupled by a spring and a damper and start at offsets from the origin."></a>
  <figcaption aria-hidden="true">The two-cart benchmark: each cart is one player, and the carts are coupled by a spring and a damper, so each player's input affects the other's motion.</figcaption>
</figure>

<h2 class="case-heading" id="contributions">Contributions</h2>

<ol class="contributions">
  <li>
    <p><strong>Sensitivity analysis.</strong> Derived a first-order characterization of the effect of Player 2's execution deviations on the joint closed-loop state and Player 1's objective.</p>
  </li>
  <li>
    <p><strong>Deviation-aware compensation.</strong> Developed a causal compensated-feedback strategy that combines state feedback with a feedforward term based on measured execution deviations. The controller is obtained through an augmented finite-horizon LQ formulation using a Riccati recursion:</p>
    <p class="equation" role="math" aria-label="u sub 1 comma k equals minus K sub k x sub k minus L sub k w sub k"><var>u</var><sub>1,<var>k</var></sub> = −<var>K</var><sub><var>k</var></sub> <var>x</var><sub><var>k</var></sub> − <var>L</var><sub><var>k</var></sub> <var>w</var><sub><var>k</var></sub></p>
    <p class="equation-note">where <var>x</var><sub><var>k</var></sub> is the joint state, <var>w</var><sub><var>k</var></sub> is the measured execution deviation of Player 2, and the gains <var>K</var><sub><var>k</var></sub>, <var>L</var><sub><var>k</var></sub> come from the augmented Riccati recursion.</p>
  </li>
  <li>
    <p><strong>Theoretical analysis.</strong> Established that the compensated policy is optimal within the specified causal affine policy class, which contains the uncompensated reference feedback, and a local improvement guarantee: under the paper's assumptions, for sufficiently small deviations it performs no worse than the uncompensated feedback to second order.</p>
  </li>
</ol>

<h2 class="case-heading" id="evaluation">Numerical evaluation</h2>

<p>All three cases start from the same initial condition over the same horizon (N = 40 steps, ΔT = 0.015 s); Player 2's actuator lag has time constant τ = 0.8 s.</p>

<dl class="case-defs">
  <div><dt>FNE</dt><dd>Both players execute their nominal feedback Nash policies exactly.</dd></div>
  <div><dt>REF</dt><dd>Player 2 experiences actuator lag; Player 1 keeps its nominal feedback law.</dd></div>
  <div><dt>CF</dt><dd>Player 2 experiences the same lag; Player 1 uses the compensated feedback.</dd></div>
</dl>

<div class="table-wrap">
  <table class="results-table">
    <caption>Finite-horizon results for the two-cart example</caption>
    <thead>
      <tr><th scope="col">Metric</th><th scope="col">FNE</th><th scope="col">REF</th><th scope="col">CF</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Player 1 cost</th><td>325.31</td><td>492.40</td><td>439.67</td></tr>
      <tr><th scope="row">Player 1 integrated squared error</th><td>0.1655</td><td>0.4566</td><td>0.2681</td></tr>
      <tr><th scope="row">Player 2 cost</th><td>330.45</td><td>492.11</td><td>556.40</td></tr>
    </tbody>
  </table>
</div>

<ul class="findings">
  <li>Player 2's actuator lag raises Player 1's cost from 325.31 under FNE to 492.40 under REF.</li>
  <li>Compensated feedback reduces Player 1's cost from 492.40 to 439.67, a 10.7% reduction relative to REF, and Player 1's integrated squared error from 0.4566 to 0.2681, a 41.3% reduction.</li>
  <li>Measured against the FNE benchmark, compensation recovers about 31.6% of the additional Player 1 cost introduced by the lag.</li>
  <li>Player 2's cost increases under CF (556.40 vs. 492.11), so this is an improvement for the compensating player, not a Pareto improvement.</li>
</ul>

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
