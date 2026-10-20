---
layout: page
title: "Experience"
permalink: /experience/
---
{%- comment -%}
  Generated from the _experiences collection; details live in _experiences/<slug>.md.
{%- endcomment -%}
<div class="role-list role-list--full">
{%- assign experiences = site.experiences | sort: "order" -%}
{%- for e in experiences %}
<article class="role">
<div class="role__when">
<p class="role__period">{{ e.period }}</p>
<p class="role__place">{{ e.location }}</p>
</div>
<div class="role__main">
<h2 class="role__title"><a href="{{ e.url | relative_url }}">{{ e.position }}</a></h2>
<p class="role__org">{{ e.organization }}{% if e.lab %} — {{ e.lab }}{% endif %}</p>
<p class="role__more" aria-hidden="true">View details <span>→</span></p>
</div>
</article>
{%- endfor %}
</div>
