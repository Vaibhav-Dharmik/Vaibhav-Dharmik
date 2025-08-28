// script.js - Minimal vanilla JS to render projects & small enhancements.
(function () {
  "use strict";

  // Utility: escape HTML to avoid injection (overkill for static data, shows best practice)
  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Project data (add more objects as needed)
  const projects = [
    {
      title: "Performance Dashboard",
      description:
        "A lightweight analytics UI showing real-time Web Vitals trends.",
      tech: ["TypeScript", "React", "Web Vitals"],
      url: "https://example.com/performance-dashboard",
    },
    {
      title: "Serverless Image Proxy",
      description:
        "Edge function that optimizes & caches images on-the-fly for responsive delivery.",
      tech: ["Node.js", "Edge", "CDN"],
      url: "https://example.com/image-proxy",
    },
    {
      title: "This Profile Repo",
      description:
        "Source for my GitHub profile README and static portfolio site.",
      tech: ["HTML", "CSS", "JS"],
      url: "../",
    },
  ];

  function renderProjects() {
    const container = document.getElementById("project-grid");
    if (!container) return;

    const frag = document.createDocumentFragment();

    projects.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${escapeHTML(p.title)}</h3>
        <p class="project-desc">${escapeHTML(p.description)}</p>
        <div class="badges">${p.tech
          .map((t) => `<span class="badge">${escapeHTML(t)}</span>`)
          .join("")}</div>
        <div class="card-actions">
          <a class="btn primary" href="${escapeHTML(
            p.url
          )}" target="_blank" rel="noopener" aria-label="Open project ${escapeHTML(
        p.title
      )} in new tab">Open ↗</a>
        </div>`;
      frag.appendChild(card);
    });

    container.appendChild(frag);
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("open");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    setYear();
    initNavToggle();
  });
})();
