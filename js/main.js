// Renders the content from data.js (global PORTFOLIO) into index.html.
(function () {
  const d = PORTFOLIO;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
    );

  const link = (url, label) =>
    url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>` : "";

  // Simple text fields: any element with data-field="key" gets d[key].
  document.querySelectorAll("[data-field]").forEach((el) => {
    el.textContent = d[el.dataset.field] ?? "";
  });
  document.title = `${d.name} — ${d.role}`;
  $("#year").textContent = new Date().getFullYear();

  // Avatar: image if provided, otherwise initials.
  const avatar = $("#avatar");
  if (d.avatar) {
    avatar.innerHTML = `<img src="${esc(d.avatar)}" alt="${esc(d.name)}">`;
  } else {
    avatar.textContent = d.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  }

  // Section background photos: keys are section ids; empty values are skipped.
  Object.entries(d.backgrounds || {}).forEach(([id, src]) => {
    const section = document.getElementById(id);
    if (!section || !src) return;
    // Absolute URL, so the path isn't resolved relative to css/styles.css where var() is used.
    section.style.setProperty("--section-bg", `url("${new URL(src, document.baseURI).href}")`);
    section.classList.add("has-bg");
  });

  const resume = $("#resume-link");
  if (d.resumeUrl) resume.href = d.resumeUrl;
  else resume.remove();

  const socials = d.socials.map((s) => `<li>${link(s.url, s.label)}</li>`).join("");
  $("#hero-socials").innerHTML = socials;
  $("#contact-socials").innerHTML = socials;

  $("#about-content").innerHTML = d.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("#projects-grid").innerHTML = d.projects
    .map(
      (p) => `
      <article class="card project">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot">` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${p.points && p.points.length ? `<ul class="project-points">${p.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <div class="project-links">${link(p.demo, "Live demo")}${link(p.code, "Source code")}</div>
      </article>`
    )
    .join("");

  $("#skills-list").innerHTML = d.skills
    .map(
      (g) => `
      <div class="card">
        <h3>${esc(g.category)}</h3>
        <ul class="tags">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  $("#experience-list").innerHTML = d.experience
    .map(
      (e) => `
      <li>
        <div class="timeline-head">
          <h3>${esc(e.role)} · <span class="muted">${esc(e.company)}</span></h3>
          <span class="period">${esc(e.period)}${e.location ? ` · ${esc(e.location)}` : ""}</span>
        </div>
        <ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </li>`
    )
    .join("");

  $("#education-list").innerHTML = d.education
    .map(
      (e) => `
      <li>
        <div class="timeline-head">
          <h3>${esc(e.degree)}</h3>
          <span class="period">${esc(e.period)}</span>
        </div>
        <p class="muted">${esc(e.school)}</p>
        ${Array.isArray(e.details)
          ? `<ul>${e.details.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>`
          : e.details ? `<p>${esc(e.details)}</p>` : ""}
      </li>`
    )
    .join("");

  const mail = $("#contact-email");
  mail.href = `mailto:${d.email}`;
  mail.textContent = d.email;

  // Static site, no backend: the form opens the visitor's mail client.
  $("#contact-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${d.email}?subject=${subject}&body=${body}`;
  });

  // Mobile menu.
  const toggle = $(".menu-toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (ev) => {
    if (ev.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Theme toggle, persisted per browser.
  $(".theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Highlight the nav link for the section in view.
  const navLinks = [...links.querySelectorAll("a")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section").forEach((s) => observer.observe(s));
})();
