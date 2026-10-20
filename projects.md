---
layout: page
title: "Projects"
permalink: /projects/
toc_data: project_categories
description: "Research and engineering projects by Mahdis Rabbani in autonomous systems and planning, control and estimation, and embedded mechatronics, each with a short summary of the work and its outcome."
---
{%- comment -%}
  Generated from the _projects collection, grouped by _data/project_categories.yml.
  Each project's full content lives in _projects/<slug>.md (rendered at /projects/<slug>/).
{%- endcomment -%}
{%- assign projects = site.projects | sort: "order" -%}
{%- for category in site.data.project_categories %}
<section class="project-group{% if category.light %} project-group--light{% endif %}" id="{{ category.id }}" aria-labelledby="{{ category.id }}-heading">
{%- for legacy in category.legacy_ids %}
<span class="legacy-anchor" id="{{ legacy }}"></span>
{%- endfor %}
<h2 class="group-heading" id="{{ category.id }}-heading">{{ category.title }}</h2>
<div class="work-list">
{%- assign items = projects | where: "category", category.id -%}
{%- for project in items %}
{% include project-entry.html project=project light=category.light video=true %}
{%- endfor %}
</div>
</section>
{%- endfor %}
