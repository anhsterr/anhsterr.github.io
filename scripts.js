function setText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value ?? "";
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function makeThumb({ a, b, label }) {
  const safeLabel = String(label ?? "").replace(/[<>]/g, "");
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a || "#7c3aed"}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${b || "#22d3ee"}" stop-opacity="0.9"/>
    </linearGradient>
    <radialGradient id="r" cx="20%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feColorMatrix in="blur" type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.35 0" />
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="700" fill="url(#g)"/>
  <rect width="1200" height="700" fill="url(#r)"/>

  <g opacity="0.28" filter="url(#soft)">
    <circle cx="220" cy="160" r="170" fill="#ffffff"/>
    <circle cx="980" cy="520" r="220" fill="#ffffff"/>
    <circle cx="700" cy="170" r="120" fill="#ffffff"/>
  </g>

  <g>
    <rect x="60" y="70" width="1080" height="560" rx="44" ry="44" fill="rgba(0,0,0,0.14)" stroke="rgba(255,255,255,0.25)"/>
    <text x="90" y="160" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
      font-size="42" fill="rgba(255,255,255,0.92)" font-weight="800">${safeLabel}</text>
    <text x="90" y="220" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      font-size="20" fill="rgba(255,255,255,0.75)" font-weight="700">Thumbnail</text>

    <path d="M110 520 C 280 440, 400 590, 560 520 S 820 420, 1060 520" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="10" stroke-linecap="round"/>
    <path d="M110 560 C 280 480, 400 630, 560 560 S 820 460, 1060 560" fill="none" stroke="rgba(255,255,255,0.40)" stroke-width="10" stroke-linecap="round"/>
  </g>
</svg>`.trim();

  return svgToDataUri(svg);
}

function renderTimeline(items) {
  const root = document.getElementById("timelineList");
  if (!root) return;
  root.innerHTML = "";

  (items || []).forEach((it) => {
    const card = document.createElement("div");
    card.className = "timelineCard";

    const dateEl = document.createElement("div");
    dateEl.className = "timelineCard__date";
    dateEl.textContent = it.date ?? "";

    const lineEl = document.createElement("div");
    lineEl.className = "timelineCard__line";
    const content = [
      it.title ?? "",
      it.org ? `(${it.org})` : "",
      it.desc ? `- ${it.desc}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    lineEl.textContent = content;

    card.appendChild(dateEl);
    card.appendChild(lineEl);
    root.appendChild(card);
  });
}

function renderEducation(items) {
  const root = document.getElementById("educationList");
  if (!root) return;
  root.innerHTML = "";
  (items || []).forEach((it) => {
    const card = document.createElement("div");
    card.className = "eduCard";
    card.innerHTML = `
      <div class="eduCard__top">
        <div>
          <div class="eduCard__degree">${it.degree ?? ""}</div>
          <div class="eduCard__where">${it.where ?? ""}</div>
        </div>
        <div class="eduCard__dates">${it.dates ?? ""}</div>
      </div>
      <div class="eduCard__desc">${it.desc ?? ""}</div>
    `;
    root.appendChild(card);
  });
}

function renderPublications(items) {
  const root = document.getElementById("publicationsList");
  if (!root) return;
  root.innerHTML = "";
  (items || []).forEach((it) => {
    const wrapper = document.createElement("div");
    wrapper.className = "pubItem";

    const linksHtml = (it.links || [])
      .filter((l) => l && l.href && l.href !== "#")
      .map((l) => `<a class="linkChip" href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`)
      .join("");

    wrapper.innerHTML = `
      <div class="pubItem__year">${it.year ?? ""}</div>
      <div>
        <div class="pubItem__titleRow">
          <div class="pubItem__title">${it.title ?? ""}</div>
        </div>
        <div class="pubItem__venue">${it.venue ?? ""}</div>
        ${it.desc ? `<div class="pubItem__desc">${it.desc}</div>` : ""}
        ${linksHtml ? `<div class="pubLinks">${linksHtml}</div>` : ""}
      </div>
    `;
    root.appendChild(wrapper);
  });
}

function renderProjects(items) {
  const root = document.getElementById("projectsGrid");
  if (!root) return;
  root.innerHTML = "";
  (items || []).forEach((p) => {
    const card = document.createElement("article");
    card.className = "projectCard";

    const thumb = makeThumb(p.thumbnail || {});
    const tagsHtml = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="projectCard__thumb">
        <img src="${thumb}" alt="Thumbnail for ${p.name ?? "project"}" />
      </div>
      <div class="projectCard__body">
        <div class="projectCard__name">${p.name ?? ""}</div>
        <div class="projectCard__desc">${p.description ?? ""}</div>
        <div class="projectCard__tags" aria-label="Project tags">
          ${tagsHtml}
        </div>
      </div>
    `;

    root.appendChild(card);
  });
}

function renderContactActions(actions) {
  const root = document.getElementById("contactActions");
  if (!root) return;
  root.innerHTML = "";

  (actions || []).forEach((a) => {
    const btn = document.createElement("a");
    const isMail = String(a.href || "").startsWith("mailto:");
    btn.className = isMail ? "btn btn--primary" : "btn btn--ghost";
    btn.href = a.href || "#";
    btn.target = isMail ? "_self" : "_blank";
    btn.rel = "noreferrer";
    btn.textContent = a.label || "Link";
    root.appendChild(btn);
  });
}

function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  if (stored === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (stored === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    // Default: light mode.
    document.documentElement.setAttribute("data-theme", "light");
  }

  const applyIcon = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const icon = toggle.querySelector(".icon-btn__icon");
    if (!icon) return;
    icon.textContent = current === "light" ? "☀" : "◐";
  };

  applyIcon();

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    applyIcon();
  });
}

function setupMobileMenu() {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  setOpen(false);

  btn.addEventListener("click", () => {
    setOpen(menu.hidden);
  });

  menu.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") setOpen(false);
  });
}

function setupActiveNav() {
  const links = Array.from(document.querySelectorAll(".nav__link[data-nav]"));
  if (!links.length) return;

  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const mapById = new Map();
  sections.forEach((s) => mapById.set(s.id, s));

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (!visible) return;

      const id = visible.target.id;
      links.forEach((l) => {
        l.classList.remove("is-active");
        if (l.getAttribute("href") === `#${id}`) {
          l.classList.add("is-active");
          l.setAttribute("aria-current", "page");
        } else {
          l.removeAttribute("aria-current");
        }
      });
    },
    { root: null, threshold: [0.2, 0.35, 0.5] }
  );

  sections.forEach((s) => io.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  const d = window.portfolioData || {};

  setText("brandName", d.name);
  setText("heroTitle", d.title);
  setText("subtitlePill", d.subtitlePill);
  setText("heroIntro", d.intro);

  setText("metaFocus", d.highlights?.focusV);
  setText("metaRole", d.highlights?.focusK);
  setText("metaWorkMode", d.highlights?.locationV);
  setText("metaLocation", d.highlights?.locationK);
  setText("metaJob", d.highlights?.statusV);
  setText("metaStatus", d.highlights?.statusK);

  setText("footerName", d.name);

  const pubs = d.publications || [];
  const projects = d.projects || [];
  setText("statPubs", pubs.length);
  setText("statProjects", projects.length);

  renderTimeline(d.timeline);
  renderEducation(d.education);
  renderPublications(pubs);
  renderProjects(projects);

  const c = d.contact || {};
  setText("contactEmail", c.email);
  setText("contactHint", c.hint);
  renderContactActions(c.actions);

  // Light touch: update the page title for better previews.
  if (d.name && d.title) document.title = `${d.name} — ${d.title}`;

  setupThemeToggle();
  setupMobileMenu();
  setupActiveNav();
});

