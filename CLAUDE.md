# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal portfolio site built with plain HTML, CSS, and vanilla JavaScript. There is no framework, no build step, and no dependencies (Cookie and Cormorant Garamond are loaded from Google Fonts). It is a single page whose sections (Home, About, Projects, Skills, Experience, Education, Contact) are reached by anchor links in a sticky nav.

## Running

Open `index.html` in a browser directly, or serve the folder to get the same behaviour as production:

```
python -m http.server 8000     # then open http://localhost:8000
```

There are no tests, linters, or build commands.

## Architecture

The site separates content from presentation, and the content is data-driven:

- `js/data.js` defines one global `PORTFOLIO` object that holds **all** site content: name, role, socials, about paragraphs, projects, skills, experience, education, and contact text. To change content, edit this file only.
- `index.html` is a static shell. Each section has an empty container with an id (`#projects-grid`, `#experience-list`, …) that `main.js` fills. Elements with `data-field="key"` get their text set to `PORTFOLIO[key]`.
- `js/main.js` runs once on load (an IIFE) and renders every section from `PORTFOLIO`. It escapes all values with `esc()` before inserting them with `innerHTML`, so keep that pattern when adding fields. It also handles the mobile menu, the theme toggle, and active-nav highlighting through an IntersectionObserver.
- Script order matters: `data.js` must load before `main.js`.

To add a new section, add a `<section id="…">` with an empty container to `index.html`, add a nav `<li>`, add the data to `PORTFOLIO`, and add a render block in `main.js`.

## Conventions

- **Theming:** colours are CSS custom properties on `:root` in `css/styles.css`. The dark palette is defined twice, once under `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])` and once under `:root[data-theme="dark"]`, so the OS setting applies unless the toggle overrides it. Change both blocks together. The toggle saves the choice to `localStorage`, and an inline script in `<head>` applies it before first paint.
- **Contact form:** there is no backend. On submit, the form builds a `mailto:` link to `PORTFOLIO.email`. Replacing this with a form service (for example Formspree) would mean editing the submit handler in `main.js`.
- **Optional fields:** an empty `avatar` falls back to initials, and an empty `resumeUrl` removes the CV button. A project with an empty `image`, `demo`, or `code` simply leaves that element out. `backgrounds` maps section ids to photos; an empty value leaves that section on the plain page background. Images and the CV are expected under `assets/`.
- Responsive breakpoint is `760px` (single column, collapsible nav).
