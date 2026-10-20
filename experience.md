---
layout: page
title: "Experience"
description: "Research experience of Mahdis Rabbani: Graduate Student Researcher in the CORE Lab at UC Davis, Research Intern at Honda Research Institute USA, and Research Assistant / Intern in the SEECS Lab at the University of Tehran."
permalink: /experience/
---
{%- comment -%}
  Generated from the _experiences collection; details live in _experiences/<slug>.md.
  Related-project cards come from each document's `related_projects` list (all shown).
{%- endcomment -%}
<div class="role-list">
{%- assign experiences = site.experiences | sort: "order" -%}
{%- for e in experiences %}
<article class="role">
<a class="role__link" href="{{ e.url | relative_url }}">
<span class="org-logo" aria-hidden="true"><img src="{{ e.logo | relative_url }}" alt="" width="{{ e.logo_width }}" height="{{ e.logo_height }}" loading="lazy" decoding="async"></span>
<span class="role__main">
<span class="role__when"><span class="role__period">{{ e.period }}</span> <span class="role__place">{{ e.location }}</span></span>
<h2 class="role__title">{{ e.position }}</h2>
<span class="role__org">{{ e.organization }}{% if e.lab %} — {{ e.lab }}{% endif %}</span>
<span class="role__more">View details <span aria-hidden="true">→</span></span>
</span>
</a>
{%- if e.related_projects and e.related_projects.size > 0 %}
<div class="role__related">
<h3 class="mini-heading">Related projects</h3>
{% include related-projects.html slugs=e.related_projects limit=e.related_projects.size %}
</div>
{%- endif %}
</article>
{%- endfor %}
</div>

<p class="logo-note">Logos identify the institutions where this work took place; they are trademarks of their respective owners and do not imply endorsement of this website.</p>
