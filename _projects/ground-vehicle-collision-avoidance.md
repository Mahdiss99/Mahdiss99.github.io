---
# Single source of truth for this project (homepage, Projects index, Experience cards, this page).
# Figures verified against Mahdiss99/VehicleMPC.jl: docs/media/*_meta.json (recorded showcase runs,
# commit b982f1b), docs/dynamic_bicycle_mpc.md, docs/nmpc_formulation.md,
# docs/benchmark_comparison.md and benchmarks/results/dynamic_showcase.md.
title: "Path-Planning and Collision Avoidance of Ground Vehicles"
category: autonomous-systems-planning
order: 4
featured: 4
date_label: "Summer 2023 – Summer 2024"
image: /assets/video/pathplanningGround/multiple_obstacles_dynamic_poster.png
description: "Developed nonlinear and linearized MPC controllers in Julia for constrained vehicle racing and collision avoidance, including a dynamic-bicycle demonstration with six stationary obstacles."
outcome_label: "Key Result"
outcome: "In a 25 s closed-loop simulation, nonlinear MPC with a six-state dynamic bicycle model completed 2.29 laps past six stationary obstacles, with all 250 MPC updates accepted and no physical contact."
# Cover everywhere: the six-obstacle run (16:9, shown whole in 3:2 thumbnails on its own edge colour)
preview_video: /assets/video/pathplanningGround/multiple_obstacles_dynamic.mp4
preview_poster: /assets/video/pathplanningGround/multiple_obstacles_dynamic_poster.png
preview_fit: contain
preview_background: "#0A1424"
meta:
  - label: "Role"
    value: "Researcher"
  - label: "Institution"
    value: "<a href=\"https://nazarilab.ucdavis.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">CORE Lab, UC Davis</a>"
  - label: "Duration"
    value: "Summer 2023 – Summer 2024 (original project)"
  - label: "Software"
    value: "VehicleMPC.jl, expanded after the original project"
  - label: "Tools"
    value: "Julia, JuMP, Ipopt, OSQP"
---

<h2 class="case-heading" id="overview">Overview</h2>

<p>This project develops a Julia framework for constrained trajectory planning and collision avoidance of ground vehicles with model predictive control (MPC). It combines nonlinear and successively linearized optimization, kinematic and nonlinear dynamic bicycle models, a piecewise-curvature track representation, and stationary-obstacle avoidance. The optimal control problems are built with JuMP and solved with Ipopt or OSQP, and every controller is evaluated in reproducible closed-loop simulation on a multi-curvature circuit, with independent validation of each plan and measured computation time.</p>

<p>The original CORE Lab project (Summer 2023 – Summer 2024) produced the Julia vehicle model and the linear and nonlinear MPC formulations with collision avoidance. The open-source implementation, VehicleMPC.jl, was expanded afterwards; the dynamic-bicycle controller, the multi-obstacle formulation and the results on this page come from that later work.</p>

<h2 class="case-heading" id="multi-obstacle">Multi-obstacle collision avoidance</h2>

<figure class="figure figure--video">
  <video controls playsinline muted preload="none" poster="{{ page.preview_poster | relative_url }}" width="1280" height="720" aria-label="Six-obstacle racing simulation: nonlinear MPC with a dynamic bicycle model">
    <source src="{{ page.preview_video | relative_url }}" type="video/mp4">
  </video>
  <figcaption>Closed-loop nonlinear MPC past six stationary obstacles. The overlay is drawn from the recorded run: Ipopt status and plan acceptance for every cycle, MPC computation time, speed, steering, lap progress, and current and minimum obstacle clearance. The vehicle body is illustrative; the collision proxy is a 5 cm disk.</figcaption>
</figure>

<p>The vehicle is a six-state nonlinear dynamic bicycle model with lateral tyre forces, controlled by nonlinear MPC solved with JuMP and Ipopt at every 0.1 s control step. It races the original 34.85 m multi-curvature circuit past six stationary obstacles placed in a left-hand and a right-hand 1 m bend, a 2 m bend and on three straights; two of them lie 1.8 m apart on opposite sides of the same straight, so both fall inside a single prediction horizon.</p>

<p>The obstacles are part of the optimization problem, not decoration: every obstacle within reach of the horizon is imposed simultaneously as a separation constraint, and the controller chooses steering and acceleration to satisfy all of them while maximizing progress. The trajectory in the video is not a prerecorded path. It is the result of 250 consecutive MPC solves, each applied to an independently integrated plant and checked for track departure and obstacle contact before it is accepted.</p>

<h2 class="case-heading" id="results">Selected results</h2>

<div class="metrics metrics--4">
  <div class="metric">
    <p class="metric__value">6</p>
    <p class="metric__label">stationary obstacles, constrained simultaneously</p>
  </div>
  <div class="metric">
    <p class="metric__value">250/250</p>
    <p class="metric__label">MPC updates accepted</p>
  </div>
  <div class="metric">
    <p class="metric__value">2.29</p>
    <p class="metric__label">laps in 25 s of simulated time</p>
  </div>
  <div class="metric">
    <p class="metric__value">0</p>
    <p class="metric__label">physical contacts; minimum clearance 1.94 cm</p>
  </div>
</div>

<p class="metric-note">Six-obstacle dynamic-bicycle run, horizon N = 10, 0.1 s control step. These results come from an offline closed-loop simulation; computation time is measured and discussed below, not guaranteed.</p>

<h2 class="case-heading" id="racing">Nonlinear MPC racing on a multi-curvature circuit</h2>

<figure class="figure figure--video">
  <video controls playsinline muted preload="none" poster="/assets/video/pathplanningGround/race_dynamic_poster.png" width="1280" height="720" aria-label="Full-track racing simulation: nonlinear MPC with a dynamic bicycle model">
    <source src="/assets/video/pathplanningGround/race_dynamic.mp4" type="video/mp4">
  </video>
  <figcaption>Full-track racing with the same controller and vehicle, without obstacles. The overlay shows the recorded vehicle state, solver status and MPC computation time of every cycle.</figcaption>
</figure>

<p>Without obstacles, the same controller races the full circuit from the same initial condition. It maximizes forward progress subject to steering and acceleration limits, while the dynamic model accounts for lateral velocity and yaw rate. The circuit alternates straights with tight turns of both signs of curvature, including a left-hand 1 m semicircle followed immediately by a right-hand one. As in the obstacle run, the trajectory is generated by repeated MPC solves on a simulated plant, and the animation shows the actual state, controller status and computation time of each cycle.</p>

<h2 class="case-heading" id="formulation">Problem formulation</h2>

<p>At each control step the controller measures the vehicle state, solves a finite-horizon optimal control problem, applies the first input, and repeats:</p>

<div class="equation equation--block" role="math" aria-label="minimize J of x zero and U over the input sequence, subject to the discrete-time dynamics, state and input constraints, and track and obstacle constraints">
  min<sub><var>u</var><sub>0</sub>, …, <var>u</var><sub><var>N</var>−1</sub></sub> &nbsp;<var>J</var>(<var>x</var><sub>0</sub>, <var>U</var>)<br>
  subject to &nbsp;<var>x</var><sub><var>k</var>+1</sub> = <var>f</var><sub>d</sub>(<var>x</var><sub><var>k</var></sub>, <var>u</var><sub><var>k</var></sub>), &nbsp;&nbsp;<var>x</var><sub><var>k</var></sub> ∈ 𝒳, &nbsp;&nbsp;<var>u</var><sub><var>k</var></sub> ∈ 𝒰,<br>
  <span class="equation__indent"></span>track-corridor and obstacle-separation constraints, &nbsp;<var>x</var><sub>0</sub> = measured state.
</div>

<p>The objective is a progress-maximizing surrogate for minimum time: it rewards the arc length gained over the horizon and penalizes deviation from the centreline, heading error, input magnitude and input changes. All terms are normalized so that the weights are dimensionless:</p>

<div class="equation equation--block" role="math" aria-label="J equals minus w s times progress over v max N delta t, plus the sum of normalized lateral and heading error penalties, plus the sum of normalized input and input-rate penalties">
  <var>J</var> = −<var>w</var><sub>s</sub> (<var>s</var><sub><var>N</var></sub> − <var>s</var><sub>0</sub>) / (<var>v</var><sub>max</sub> <var>N</var> Δ<var>t</var>)
  + Σ<sub><var>k</var></sub> [ <var>q</var><sub><var>y</var></sub> (<var>e</var><sub><var>y</var>,<var>k</var></sub> / <var>e</var><sub><var>y</var>,max</sub>)² + <var>q</var><sub>ψ</sub> (<var>e</var><sub>ψ,<var>k</var></sub> / <var>e</var><sub>ψ,max</sub>)² ]<br>
  <span class="equation__indent"></span>+ Σ<sub><var>k</var></sub> [ <var>r</var><sub>δ</sub> (<var>δ</var><sub><var>k</var></sub> / <var>δ</var><sub>max</sub>)² + <var>r</var><sub><var>a</var></sub> (<var>a</var><sub><var>k</var></sub> / <var>a</var><sub>ref</sub>)² + <var>r</var><sub>Δδ</sub> ((<var>δ</var><sub><var>k</var></sub> − <var>δ</var><sub><var>k</var>−1</sub>) / <var>δ</var><sub>max</sub>)² + <var>r</var><sub>Δ<var>a</var></sub> ((<var>a</var><sub><var>k</var></sub> − <var>a</var><sub><var>k</var>−1</sub>) / <var>a</var><sub>ref</sub>)² ]
</div>

<p class="equation-note">Showcase weights: <var>w</var><sub>s</sub> = 10, <var>q</var><sub><var>y</var></sub> = <var>q</var><sub>ψ</sub> = 0.1, <var>r</var><sub>δ</sub> = <var>r</var><sub><var>a</var></sub> = 0.01, <var>r</var><sub>Δδ</sub> = 1, <var>r</var><sub>Δ<var>a</var></sub> = 0.1. Because progress is measured only at the end of a fixed horizon, nothing guarantees that the closed loop is time-optimal.</p>

<p>For the dynamic controller the constraints are: the lateral offset stays within the corridor (|<var>e</var><sub><var>y</var></sub>| ≤ 0.30 m on the 0.70 m road), the heading error within 60°, speed within 0.8–5 m/s, steering within ±25°, acceleration within ±5 m/s², tyre slip angles within 0.12 rad so the linear tyre model stays valid, and lateral acceleration within 4 m/s². Speed, slip and lateral-acceleration limits are imposed at every integration sub-step, not only at the knots.</p>

<h2 class="case-heading" id="models">Vehicle dynamics and track representation</h2>

<p><strong>Kinematic bicycle (four states).</strong> Referenced to the rear axle and written in track coordinates, the state is progress <var>s</var>, lateral offset <var>e</var><sub><var>y</var></sub>, heading error <var>e</var><sub>ψ</sub> and speed <var>v</var>; the inputs are steering <var>δ</var> and acceleration <var>a</var>. With wheelbase <var>L</var> and track curvature <var>κ</var>(<var>s</var>):</p>

<div class="equation equation--block" role="math" aria-label="kinematic bicycle model in Frenet coordinates">
  <var>ṡ</var> = <var>v</var> cos <var>e</var><sub>ψ</sub> / (1 − <var>κ</var> <var>e</var><sub><var>y</var></sub>), &nbsp;&nbsp;
  <var>ė</var><sub><var>y</var></sub> = <var>v</var> sin <var>e</var><sub>ψ</sub>, &nbsp;&nbsp;
  <var>ė</var><sub>ψ</sub> = <var>v</var> tan <var>δ</var> / <var>L</var> − <var>κ</var> <var>ṡ</var>, &nbsp;&nbsp;
  <var>v̇</var> = <var>a</var>
</div>

<p>This model is cheap to optimize and is used for the controller comparisons below. The nonlinear MPC uses its exact zero-order-hold discretization in Cartesian coordinates.</p>

<p><strong>Dynamic bicycle (six states).</strong> Referenced to the centre of mass, the state is <var>z</var> = [<var>X</var>, <var>Y</var>, ψ, <var>v</var><sub><var>x</var></sub>, <var>v</var><sub><var>y</var></sub>, <var>r</var>], with body-frame velocities and yaw rate, and the same inputs. Lateral and yaw dynamics come from linear axle tyre forces:</p>

<div class="equation equation--block" role="math" aria-label="six-state dynamic bicycle model with linear axle tyre forces">
  <var>Ẋ</var> = <var>v</var><sub><var>x</var></sub> cos ψ − <var>v</var><sub><var>y</var></sub> sin ψ, &nbsp;&nbsp;
  <var>Ẏ</var> = <var>v</var><sub><var>x</var></sub> sin ψ + <var>v</var><sub><var>y</var></sub> cos ψ, &nbsp;&nbsp;
  ψ̇ = <var>r</var><br>
  <var>v̇</var><sub><var>x</var></sub> = <var>a</var> − <var>F</var><sub><var>yf</var></sub> sin <var>δ</var> / <var>m</var> + <var>r</var> <var>v</var><sub><var>y</var></sub>, &nbsp;&nbsp;
  <var>v̇</var><sub><var>y</var></sub> = (<var>F</var><sub><var>yf</var></sub> cos <var>δ</var> + <var>F</var><sub><var>yr</var></sub>) / <var>m</var> − <var>r</var> <var>v</var><sub><var>x</var></sub>, &nbsp;&nbsp;
  <var>ṙ</var> = (<var>l</var><sub><var>f</var></sub> <var>F</var><sub><var>yf</var></sub> cos <var>δ</var> − <var>l</var><sub><var>r</var></sub> <var>F</var><sub><var>yr</var></sub>) / <var>I</var><sub><var>z</var></sub><br>
  <var>F</var><sub><var>yf</var></sub> = <var>C</var><sub><var>f</var></sub> [<var>δ</var> − atan((<var>v</var><sub><var>y</var></sub> + <var>l</var><sub><var>f</var></sub> <var>r</var>) / <var>v</var><sub><var>x</var></sub>)], &nbsp;&nbsp;
  <var>F</var><sub><var>yr</var></sub> = −<var>C</var><sub><var>r</var></sub> atan((<var>v</var><sub><var>y</var></sub> − <var>l</var><sub><var>r</var></sub> <var>r</var>) / <var>v</var><sub><var>x</var></sub>)
</div>

<p class="equation-note">The two models use different reference points (rear axle and centre of mass, related by <var>p</var><sub>CoM</sub> = <var>p</var><sub>rear</sub> + <var>l</var><sub><var>r</var></sub>(cos ψ, sin ψ)), and both showcases start from the same physical pose. The parameters describe a small-scale vehicle (1.98 kg, 0.25 m wheelbase) with synthetic, uncalibrated tyre stiffness. The model is only defined for <var>v</var><sub><var>x</var></sub> &gt; 0, so the controller keeps <var>v</var><sub><var>x</var></sub> ≥ 0.8 m/s, a bound chosen to keep the fast lateral and yaw modes within the stability limit of the RK4 integrator.</p>

<p><strong>Track geometry.</strong> The circuit is a sequence of eleven constant-curvature segments: straights of 2–6 m, an S-bend formed by a left and a right semicircle of 1 m radius, and four 2 m quarter turns, for a 34.85 m lap on a 0.70 m road. Vehicle states are expressed in Frenet coordinates (progress, lateral offset and heading error relative to the centreline) and converted back to Cartesian poses with exact segment-local formulas. This representation makes the corridor constraint simple, but it introduces three numerical difficulties: curvature jumps at segment boundaries, a narrow corridor in the tight bends, and progress that keeps increasing across repeated lap crossings. The nonlinear controllers handle them by assigning each prediction knot to a segment, re-checking that assignment after every solve, and carrying the lap offset in the assigned segment, so the start/finish line needs no special treatment.</p>

<h2 class="case-heading" id="controllers">Nonlinear and linearized MPC</h2>

<div class="arch-grid">
  <section class="arch">
    <h3 class="arch__title">Nonlinear MPC</h3>
    <p class="arch__tools">JuMP + Ipopt</p>
    <ul>
      <li>Nonlinear vehicle dynamics, direct multiple shooting with RK4</li>
      <li>Kinematic (four-state) and dynamic (six-state) variants</li>
      <li>Nonconvex obstacle-separation constraints, several obstacles at once in the dynamic variant</li>
      <li>Warm starts from the shifted previous plan, with alternative initial guesses when needed</li>
      <li>Every plan re-simulated and validated before it is applied</li>
    </ul>
  </section>
  <section class="arch">
    <h3 class="arch__title">Successively linearized MPC</h3>
    <p class="arch__tools">JuMP + OSQP</p>
    <ul>
      <li>Kinematic model only: local linearization of the exact discrete-time map, <var>z</var><sub><var>k</var>+1</sub> = <var>A</var><sub><var>k</var></sub><var>z</var><sub><var>k</var></sub> + <var>B</var><sub><var>k</var></sub><var>u</var><sub><var>k</var></sub> + <var>c</var><sub><var>k</var></sub></li>
      <li>Convex quadratic programs with affine track-coordinate approximations</li>
      <li>Supporting-halfspace obstacle constraints, softened with penalized slacks</li>
      <li>Trust region and successive re-linearization within a cycle</li>
      <li>Mandatory nonlinear rollout of each candidate plan</li>
    </ul>
  </section>
</div>

<p>The linearized controller was faster in every recorded benchmark, but its convex approximations cost progress, and a cycle may need several QP iterations before a candidate passes validation. The nonlinear controller predicts with the exact model and found plans with better objective values, at a higher cost per solve. The dynamic six-state controller and the six-obstacle demonstration are nonlinear MPC with Ipopt only; the linearized controller has no dynamic-model counterpart.</p>

<h2 class="case-heading" id="collision">Collision-avoidance constraints</h2>

<p>Each obstacle <var>i</var> is a circle with centre <var>o</var><sub><var>i</var></sub> and radius <var>r</var><sub><var>i</var></sub>, and the vehicle is approximated by a disk of radius <var>r</var><sub>ego</sub> at its centre of mass. The nonlinear controller imposes</p>

<div class="equation" role="math" aria-label="the squared distance between p k and o i is at least D i squared, where D i equals r ego plus r i plus the buffer">‖<var>p</var><sub><var>k</var></sub> − <var>o</var><sub><var>i</var></sub>‖<sub>2</sub><sup>2</sup> ≥ <var>D</var><sub><var>i</var></sub><sup>2</sup>, &nbsp;&nbsp; <var>D</var><sub><var>i</var></sub> = <var>r</var><sub>ego</sub> + <var>r</var><sub><var>i</var></sub> + <var>d</var><sub><var>b</var>,<var>i</var></sub></div>

<p class="equation-note">In the showcase <var>r</var><sub>ego</sub> = 5 cm, <var>r</var><sub><var>i</var></sub> = 10 cm and the planning buffer <var>d</var><sub><var>b</var></sub> = 3 cm, so <var>D</var> = 18 cm, while physical contact occurs at 15 cm.</p>

<p>The squared form is smooth and needs no choice of passing side inside the constraint. All six obstacles have their own constraint slot in the same nonlinear program; a slot is active whenever its obstacle lies within the distance the horizon could cover, so nothing is rebuilt as obstacles come into range. The constraints are imposed at every prediction knot and at every RK4 sub-step position.</p>

<p>Because Ipopt is a local solver, the initial guess determines which side of an obstacle the vehicle passes. For newly relevant obstacles the controller generates candidate guesses that pass each of the first two obstacles on either side, rolls them out with the dynamic model, and ranks them by feasibility and clearance before solving. In the linearized controller the circle is replaced by a supporting halfspace, <var>n</var><sup>⊤</sup>(<var>p</var> − <var>o</var>) ≥ <var>D</var> + ε with <var>n</var> pointing from the obstacle to the nominal position, which is a conservative convex inner approximation of the collision-free set.</p>

<p>The disks are simplified collision proxies, not a calibrated vehicle footprint.</p>

<h2 class="case-heading" id="implementation">Numerical implementation</h2>

<ul class="highlights">
  <li><strong>Accurate discretization.</strong> The dynamic NLP integrates with RK4 (four sub-steps per 0.1 s interval), giving each sub-step and RK4 stage its own variables. This keeps the expression graph linear in the horizon; nesting the stages symbolically made a solve about 12× slower in measurement. The kinematic controllers use an exact zero-order-hold map with a series-evaluated sinc function that stays smooth at zero curvature.</li>
  <li><strong>Persistent optimization models.</strong> Models are built once. The measured state, previous input, segment geometry and obstacle data are JuMP parameters updated each cycle, and the linearized controller updates its OSQP coefficients in place instead of rebuilding the QP.</li>
  <li><strong>Automatic differentiation.</strong> Jacobians for linearization come from ForwardDiff and are tested against central differences.</li>
  <li><strong>Curvature transitions.</strong> Knots are assigned to track segments, reassigned from the Cartesian solution when a solve moves them across a boundary, and bounded to their segment if the reassignment would cycle, a failure found and fixed during the final experiments.</li>
  <li><strong>Initialization and warm starts.</strong> Shifted warm starts, cold pure-pursuit guesses and side-sequence guesses for obstacles, with the work per cycle bounded by count (at most five initialization attempts and four reassignments) rather than by wall-clock time, so outcomes do not depend on machine speed.</li>
  <li><strong>Independent validation.</strong> Before a plan is applied, its inputs are re-simulated with a 1 ms RK4 integrator, checked against the plan, the real track geometry, the operating limits and a dense 50-sample-per-interval obstacle check. A rejected plan is never applied; the simulation stops instead.</li>
  <li><strong>End-to-end timing.</strong> Compilation is timed separately, runs are warmed up, and every cycle's complete computation time is recorded, including projection, initial guesses, solves and validation.</li>
</ul>

<h2 class="case-heading" id="validation">Validation and simulation results</h2>

<p>Each run is evaluated on the independently integrated plant trajectory: dynamics consistency between plan and rollout, track-boundary clearance, input and handling limits, obstacle separation sampled between constrained points, the closed-loop outcome, and the measured computation time of every cycle.</p>

<div class="table-wrap">
  <table class="results-table results-table--wrap">
    <caption>Recorded dynamic-bicycle showcase runs (25 s simulated, N = 10, 0.1 s step)</caption>
    <thead>
      <tr><th scope="col">Measurement</th><th scope="col">Full-track racing</th><th scope="col">Six-obstacle racing</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Completed laps</th><td>2.56</td><td>2.29</td></tr>
      <tr><th scope="row">Accepted MPC updates</th><td>250/250</td><td>250/250</td></tr>
      <tr><th scope="row">Median complete MPC cycle</th><td>87.5 ms</td><td>131.6 ms</td></tr>
      <tr><th scope="row">95th-percentile cycle</th><td>175.9 ms</td><td>268.7 ms</td></tr>
      <tr><th scope="row">Cycles within the 100 ms period</th><td>78.0%</td><td>7.2%</td></tr>
      <tr><th scope="row">Minimum track clearance</th><td>4.77 cm</td><td>4.77 cm</td></tr>
      <tr><th scope="row">Physical obstacle contacts</th><td>–</td><td>0</td></tr>
      <tr><th scope="row">Minimum clearance above contact</th><td>–</td><td>1.94 cm</td></tr>
    </tbody>
  </table>
</div>

<p>Both runs completed without a rejected plan, track departure or plant violation. In the obstacle run the trajectory never touched an obstacle, but between constrained sub-step points it entered the 3 cm planning buffer in 14 sampled positions, by at most 1.06 cm; contact itself is rejected by the validation.</p>

<p>Computation time is the main caveat. The median six-obstacle cycle in the recorded run exceeds the 0.1 s control period, and the simulation does not model computation delay: each control is applied at the start of its period regardless of how long the solve took. These are offline closed-loop simulations with measured computation time, not a demonstration of real-time control. Timing also varied between sessions on the same laptop: in three repeated benchmark runs of the same code the six-obstacle median was 62 ms, with 81–83% of cycles within 0.1 s. The trajectories, laps and clearances were identical in every repetition.</p>

<h2 class="case-heading" id="comparison">Controller comparison and computational performance</h2>

<p>A separate benchmark compares the kinematic nonlinear and linearized controllers under matched conditions (same vehicle, track, start states, horizon N = 10, period and weights; one session on one laptop). These are kinematic-model results and are not directly comparable with the dynamic-bicycle runs above.</p>

<div class="table-wrap">
  <table class="results-table results-table--wrap">
    <caption>Ten stationary-obstacle scenarios on the circuit, 250 cycles each (kinematic model)</caption>
    <thead>
      <tr><th scope="col">Measurement</th><th scope="col">Linearized MPC (OSQP)</th><th scope="col">Nonlinear MPC (Ipopt)</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Completed runs</th><td>30/30</td><td>9/10</td></tr>
      <tr><th scope="row">Progress</th><td>2.22–2.32 laps</td><td>2.46–2.58 laps</td></tr>
      <tr><th scope="row">Median cycle time</th><td>4.7–5.4 ms</td><td>9.9–10.8 ms</td></tr>
      <tr><th scope="row">Minimum clearance above contact</th><td>2.6 cm</td><td>2.6 cm</td></tr>
    </tbody>
  </table>
</div>

<p>The linearized controller completed all thirty runs (three per scenario) with about half the median computation time. The nonlinear controller made 7–10% more progress in every scenario it completed; its one incomplete run stopped when an 80 ms time budget skipped a segment-assignment correction. The comparison illustrates the trade-off between model fidelity and cost: exact nonlinear predictions give better plans, while convex approximations are faster but need trust regions, softened constraints and nonlinear validation to remain safe. The six-state dynamic model raises the cost further, to roughly an order of magnitude above the kinematic nonlinear controller per cycle.</p>

<h2 class="case-heading" id="reproducibility">Reproducibility and code</h2>


<p>The implementation is the VehicleMPC.jl repository. Every showcase run solves the MPC afresh; nothing is loaded from an earlier run, and the video is rendered only from the data the run exports. With Julia 1.10 or newer (and Python 3.10 or newer for rendering), the two demonstrations are reproduced from the repository root with:</p>

<pre class="code-block"><code>julia --project=. -e 'using Pkg; Pkg.instantiate()'
python -m pip install -r examples/showcase/requirements.txt

julia --project=. examples/showcase/race.jl --model=dynamic --video
julia --project=. examples/showcase/multiple_obstacles.jl --model=dynamic --video</code></pre>

<p>The repository also contains the automated test suite, the benchmark scripts and their recorded reports, and the mathematical documentation of each controller.</p>

<h2 class="case-heading" id="limitations">Limitations and future directions</h2>

<ul>
  <li>All results are from simulation. The plant and the prediction model are the same equations with different integrators, so there is no model mismatch, noise or state estimation, and the vehicle parameters are synthetic.</li>
  <li>Vehicle and obstacles are simplified disks. Collision constraints hold at the constrained points and are checked densely in between, but there is no continuous-time safety certificate.</li>
  <li>Ipopt returns local solutions and OSQP solves local convex approximations: trajectories are not globally optimal, and there is no recursive-feasibility guarantee or fallback controller.</li>
  <li>There is no hard real-time guarantee; some dynamic-controller cycles exceed the simulated control period.</li>
</ul>

<p>Natural next steps follow from these limits: modelling computation delay and plant–model mismatch, a low-speed or blended model for standing starts, multi-obstacle support in the kinematic and linearized controllers, and moving obstacles.</p>

<div class="project__skills">
  <p class="project__skills-label">Skills</p>
  <ul class="skill-tags">
    <li>Julia</li>
    <li>JuMP</li>
    <li>Ipopt</li>
    <li>OSQP</li>
    <li>Nonlinear MPC</li>
    <li>Vehicle dynamics</li>
    <li>Collision avoidance</li>
    <li>Numerical optimization</li>
    <li>Object-oriented programming</li>
  </ul>
</div>
