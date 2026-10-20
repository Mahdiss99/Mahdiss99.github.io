---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<!-- Hero -->
<section class="hero-band" aria-labelledby="hero-name">
  <div class="container hero">
    <div class="hero__text">
      <p class="hero__affiliation"><a href="https://nazarilab.ucdavis.edu/" target="_blank" rel="noopener noreferrer">CORE Lab</a> · University of California, Davis</p>
      <h1 id="hero-name" class="hero__name">Mahdis Rabbani</h1>
      <p class="hero__role">Ph.D. Candidate in Mechanical Engineering (Robotics &amp; Control)</p>

      <!-- Elevator pitch -->
      <div class="hero__pitch">
        <p>
        <em>“Ph.D. candidate in Robotics and Control at UC Davis, developing 
        <strong>real-time game-theoretic MPC methods for interaction-aware autonomous systems</strong>. 
        My work enables autonomous vehicles and robots to reason about the reactions of other agents 
        and plan safe, efficient decisions or trajectories in shared environments.”</em>
        </p>
      </div>

      <ul class="tags" aria-label="Research focus">
        <li>Interaction-Aware Planning</li>
        <li>Optimal Control</li>
        <li>Learning-Based Modeling</li>
      </ul>

      <ul class="hero__links">
        <li><a href="{{ '/about/' | relative_url }}">About me <span aria-hidden="true">→</span></a></li>
        <li><a href="https://scholar.google.com/citations?user=0O-aLs8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">{% include icon.html name="scholar" %}<span>Google Scholar</span></a></li>
        <li><a href="https://www.linkedin.com/in/mahdis-rabbani" target="_blank" rel="noopener noreferrer">{% include icon.html name="linkedin" %}<span>LinkedIn</span></a></li>
        <li><a href="mailto:mrabbani@ucdavis.edu">{% include icon.html name="email" %}<span>Email</span></a></li>
      </ul>
    </div>

    <!-- Profile Image -->
    <div class="hero__portrait">
      <img src="/assets/images/profile.jpg" alt="Mahdis Rabbani" width="1280" height="1280" fetchpriority="high">
    </div>
  </div>
</section>

<div class="home container">

  <!-- Selected Work: projects with `featured` in their front matter -->
  <section class="home-block" id="selected-work" aria-labelledby="selected-work-heading">
    <header class="home-block__header">
      <h2 class="home-block__heading" id="selected-work-heading">Selected Work</h2>
      <a class="more-link" href="{{ '/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
    </header>
    <div class="work-list">
      {%- assign featured = site.projects | where_exp: "p", "p.featured" | sort: "featured" -%}
      {%- for project in featured %}
      {% include project-entry.html project=project show_category=true video=true %}
      {%- endfor %}
    </div>
  </section>

  <!-- Experience preview: details live in _experiences/ -->
  <section class="home-block" id="experience" aria-labelledby="experience-heading">
    <header class="home-block__header">
      <h2 class="home-block__heading" id="experience-heading">Experience</h2>
      <a class="more-link" href="{{ '/experience/' | relative_url }}">View all experience <span aria-hidden="true">→</span></a>
    </header>
    <ul class="row-list">
      {%- assign experiences = site.experiences | sort: "order" -%}
      {%- for e in experiences %}
      <li class="row">
        <a class="row__link row__link--logo" href="{{ e.url | relative_url }}">
          <span class="org-logo org-logo--sm" aria-hidden="true"><img src="{{ e.logo | relative_url }}" alt="" width="{{ e.logo_small_width }}" height="{{ e.logo_small_height }}" loading="lazy" decoding="async"></span>
          <span class="row__main">
            <span class="row__title">{{ e.position_short }}</span>
            <span class="row__sub">{{ e.organization }}{% if e.lab_short %} — {{ e.lab_short }}{% endif %}</span>
          </span>
          <span class="row__date">{{ e.period }}</span>
        </a>
      </li>
      {%- endfor %}
    </ul>
  </section>

  <!-- Education preview: full details on /about/#education -->
  <section class="home-block" id="education" aria-labelledby="education-heading">
    <header class="home-block__header">
      <h2 class="home-block__heading" id="education-heading">Education</h2>
      <a class="more-link" href="{{ '/about/' | relative_url }}#education">Full education details <span aria-hidden="true">→</span></a>
    </header>
    <ul class="row-list">
      <li class="row row--static">
        <span class="row__main">
          <span class="row__title">University of California, Davis</span>
          <span class="row__sub">Ph.D. Candidate, Mechanical Engineering · Robotics &amp; Control</span>
          <span class="row__note">M.S. in Mechanical Engineering — 2025, earned en route to Ph.D.</span>
        </span>
        <span class="row__date">Expected graduation: June 2028</span>
      </li>
      <li class="row row--static">
        <span class="row__main">
          <span class="row__title">University of Tehran</span>
          <span class="row__sub">B.Sc. in Mechanical Engineering · Mechatronics &amp; Control</span>
        </span>
        <span class="row__date">2018–2022</span>
      </li>
    </ul>
  </section>
</div>

<script src="{{ '/assets/js/preview-video.js' | relative_url }}" defer></script>
