(function () {
  const ITEMS = window.TIMELINE;
  const byId = {};
  ITEMS.forEach((it) => (byId[it.id] = it));
  const CHAPTERS = window.CHAPTERS.map((id) => byId[id]);
  const parentOf = (id) => CHAPTERS.find((c) => (c.subs || []).includes(id));
  // Reading order for prev/next: each chapter, then what's nested under it.
  const ORDER = [];
  CHAPTERS.forEach((c) => {
    ORDER.push(c.id);
    (c.subs || []).forEach((s) => ORDER.push(s));
  });

  const AI_NOTE = "I set the product and the technical direction, and Claude Code wrote most of the implementation.";
  const MOUNTAIN =
    '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 31 L15 15 L21 23 L26 17 L36 31 Z" fill="currentColor"/><path d="M15 15 L18.5 20 L16.5 19 L14 21 L12.5 19.2 Z" fill="#0a0e17" opacity=".55"/></svg>';
  // Simple line symbols (24x24, stroked) for Beyond tech and for items without a logo.
  const LINE_ICONS = {
    sprint: '<circle cx="15" cy="4.5" r="1.6"/><path d="M5 13l3-4 4-1 3 3 4 1M11 8l-2 6 4 3v4M9 14l-4 5"/>',
    dumbbell: '<path d="M3 10v4M6 8v8M18 8v8M21 10v4M6 12h12"/>',
    science: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9"/>',
    chinese: '<path d="M4 5h9M8.5 3v2M6 5c0 4 2.5 7 6 8.5M11 5c-.5 4-3 7-6.5 8.5M13 21l4-10 4 10M14.5 17.5h5"/>',
    design: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.7-1.7-.7-2.5c0-1 .8-1.5 1.7-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3"/>',
    column: '<path d="M4 7h16M5 7l7-3 7 3M6 7v11M10 7v11M14 7v11M18 7v11M4 18h16M3 21h18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    alert: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16zM10 20.5a2 2 0 0 0 4 0"/><path d="M12 2.5v1.5"/>',
    sunrise: '<path d="M3 18h18M5 21h14M7.5 18a4.5 4.5 0 0 1 9 0M12 4v4M4.9 8.9l1.8 1.8M19.1 8.9l-1.8 1.8M2 14h2.5M19.5 14H22"/>',
    hammer: '<path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9M17.64 15L22 10.64M20.91 11.7l-1.25-1.25a2 2 0 0 1-.59-1.42V7.86l-2.36-2.36A6 6 0 0 0 12.46 4H9l.92.82A6.18 6.18 0 0 1 12 9.5v1.43l2 2h2.47l2.26 1.91"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  };
  const lineSvg = (name, cls) =>
    '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    (LINE_ICONS[name] || "") + "</svg>";
  const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const firstImage = (it) => it.image || (it.gallery && it.gallery[0] && (it.gallery[0].src || it.gallery[0].poster));

  const indexEl = document.getElementById("index");
  const tl = document.getElementById("tl");
  const panel = document.getElementById("panel");
  const dlg = document.getElementById("detail");
  const side = document.getElementById("d-side");
  const main = document.getElementById("d-main");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function icon(it, cls) {
    cls = "icon " + (cls || "");
    if (it.sym) return '<span class="' + cls + ' glyph sym">' + lineSvg(it.sym) + "</span>";
    if (it.next || it.art) return '<span class="' + cls + ' glyph next-ic">' + MOUNTAIN + "</span>";
    if (it.icon)
      return (
        '<span class="' + cls + (it.mark ? " mark" : it.iconFit === "contain" ? " fit" : "") + '"' + (it.iconBg ? ' style="background:' + it.iconBg + '"' : "") +
        '><img src="' + esc(it.icon) + '" alt="" loading="lazy"></span>'
      );
    if (it.sym) return '<span class="' + cls + ' glyph sym">' + lineSvg(it.sym) + "</span>";
    const tint = it.glyphBg ? ' style="background:' + it.glyphBg + ";color:" + (it.glyphInk || "#fff") + '"' : "";
    return '<span class="' + cls + ' glyph' + (it.glyphMono ? " mono-glyph" : "") + '"' + tint + ">" + esc(it.glyph || it.title[0]) + "</span>";
  }

  // The big picture on a chapter card: a photo if there is one, otherwise art or the logo.
  function mosaic(it) {
    const tiles = (it.subs || []).map((id) => icon(byId[id], "mz-ic")).join("");
    return '<span class="cover mosaic"><span class="mz-grid">' + tiles + "</span></span>";
  }

  function cover(it) {
    if (it.mosaic) return mosaic(it);
    if (it.art || (it.next && !firstImage(it))) return '<span class="cover art">' + MOUNTAIN + "</span>";
    const img = firstImage(it);
    if (img) return '<span class="cover"><img src="' + esc(img) + '" alt="" loading="lazy"></span>';
    return '<span class="cover logo">' + icon(it, "big") + "</span>";
  }

  /* ---------- Index ---------- */

  function renderIndex() {
    const I = window.INDEX;
    const row = (id) => {
      const it = byId[id];
      return (
        '<a class="ix" href="#/' + id + '" data-go="' + id + '" style="--c:' + it.color + '">' +
        '<span class="ix-dot"></span>' + icon(it, "ix-ic") +
        '<span class="ix-t"><small>' + esc(it.date) + "</small><b>" + esc(it.title) + "</b><em>" + esc(it.sub) + "</em></span></a>"
      );
    };
    indexEl.innerHTML =
      '<p class="ix-h">My journey</p>' + I.journey.map(row).join("") +
      '<p class="ix-h">Projects &amp; side quests</p>' + I.projects.map(row).join("") +
      '<p class="ix-h">Beyond tech</p>' +
      I.beyond
        .map(
          (b) =>
            '<span class="ix beyond"><span class="ix-dot"></span>' + lineSvg(b.icon, "ix-line") + '<span><b class="by-l">' + esc(b.label) + "</b>" +
            (b.items ? '<span class="by-tags">' + b.items.map((t) => "<i>" + esc(t) + "</i>").join("") + "</span>" : "") + "</span></span>"
        )
        .join("") +
      (I.books && I.books.length
        ? '<p class="ix-h">On my shelf</p>' +
          I.books
            .map(
              (b) =>
                '<span class="ix book"><span class="ix-dot"></span><img class="bk" src="' + esc(b.cover) + '" alt="">' +
                "<span class=\"ix-t\">" + (b.now ? '<small class="bk-now">Reading now</small>' : "") + "<b>" + esc(b.title) + "</b><em>" + esc(b.author) + "</em></span></span>"
            )
            .join("")
        : "");
  }

  // Index links scroll the timeline to the card and preview it, rather than opening the full page.
  indexEl.addEventListener("click", (e) => {
    const a = e.target.closest("[data-go]");
    if (!a) return;
    e.preventDefault();
    const card = tl.querySelector('[data-id="' + a.dataset.go + '"]');
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    showPanel(a.dataset.go);
  });

  /* ---------- Timeline ---------- */

  // Sprint Rivals is pre-launch with a real audience: say so loudly and link out.
  const EXT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function launchStats(l) {
    return '<div class="ln-stats">' + l.stats.map((x) => "<span><b>" + esc(x[0]) + "</b>" + esc(x[1]) + "</span>").join("") + "</div>";
  }
  function launchCta(l, cls, short) {
    return '<a class="ln-cta ' + (cls || "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(short ? l.ctaShort || l.cta : l.cta) + EXT + "</a>";
  }
  function launchPill(l) {
    return '<span class="ln-pill"><i></i>' + esc(l.label) + "</span>";
  }

  function subCard(it) {
    if (it.launch) return launchCard(it);
    const img = firstImage(it);
    return (
      '<a class="sub" href="#/' + it.id + '" data-id="' + it.id + '" style="--c:' + it.color + '">' +
      icon(it, "sub-ic") +
      '<span class="sub-t"><b>' + esc(it.title) + "</b>" +
      "<small>" + esc(it.kind) + " &middot; " + esc(it.date) + "</small>" +
      "<em>" + esc(it.blurb) + "</em></span>" +
      (it.collage ? "" : img ? '<span class="sub-shot"><img src="' + esc(img) + '" alt="" loading="lazy"></span>' : "") +
      (it.collage ? '<span class="sub-collage">' + it.collage.map((c) => '<img src="' + esc(c) + '" alt="" loading="lazy">').join("") + "</span>" : "") +
      "</a>"
    );
  }

  function launchCard(it) {
    const l = it.launch, img = firstImage(it);
    return (
      '<div class="sub sub-launch" data-id="' + it.id + '" style="--c:' + it.color + '">' +
      '<div class="ln-top">' + icon(it, "sub-ic") +
      '<span class="sub-t">' + launchPill(l) + "<b>" + esc(it.title) + "</b>" +
      "<small>" + esc(it.kind) + " &middot; " + esc(it.date) + "</small>" +
      "<em>" + esc(it.blurb) + "</em></span>" +
      (img ? '<span class="sub-shot"><img src="' + esc(img) + '" alt="" loading="lazy"></span>' : "") + "</div>" +
      launchStats(l) +
      '<div class="ln-actions">' + launchCta(l) +
      '<a class="ln-more" href="#/' + it.id + '">The full story &rarr;</a></div>' +
      "</div>"
    );
  }

  function renderTimeline() {
    tl.innerHTML = CHAPTERS.map((c) => {
      const subs = (c.subs || []).map((id) => byId[id]);
      return (
        '<article class="ch' + (c.art || c.next ? " glow-card" : "") + '" style="--c:' + c.color + '">' +
        '<span class="ch-dot" aria-hidden="true"></span>' +
        '<a class="ch-card" href="#/' + c.id + '" data-id="' + c.id + '">' + cover(c) +
        '<span class="ch-t"><small>' + esc(c.date) + "</small>" +
        "<h3>" + esc(c.title) + "</h3>" +
        '<span class="ch-sub">' + esc(c.sub) + "</span>" +
        '<span class="ch-blurb">' + esc(c.blurb) + "</span></span>" +
        '<span class="chev">' + CHEVRON + "</span></a>" +
        (subs.length ? '<div class="subs"><p class="subs-l">' + esc(c.subsLabel || "From this chapter") + "</p>" + subs.map(subCard).join("") + "</div>" : "") +
        "</article>"
      );
    }).join("");
  }

  /* ---------- Preview panel ---------- */

  let panelId = null;
  function showPanel(id) {
    if (!id || id === panelId) return;
    panelId = id;
    const it = byId[id];
    const img = firstImage(it);
    const thumbs = it.collage ? [] : (it.gallery || []).filter((g) => g.src || g.poster).slice(0, 3);
    const feats = it.highlights || (it.groups ? it.groups[0].items : null);
    const meta = it.next ? it.sub : [it.kind, it.date].filter((v, n, all) => v && all.indexOf(v) === n).join(" \u00b7 ");
    panel.style.setProperty("--c", it.color);
    panel.innerHTML =
      '<div class="pn-media">' +
      (it.mosaic ? mosaic(it) : it.collage ? '<span class="pn-collage">' + it.collage.map((c) => '<img src="' + esc(c) + '" alt="">').join("") + "</span>" : img ? '<img id="pn-img" src="' + esc(img) + '" alt="">' : it.art || (it.next && !firstImage(it)) ? '<span class="cover art">' + MOUNTAIN + "</span>" : '<span class="cover logo">' + icon(it, "big") + "</span>") +
      "</div>" +
      '<div class="pn-head">' + icon(it, "pn-ic") +
      '<div><h4>' + esc(it.title) + '</h4><p class="pn-meta">' + esc(meta) + "</p>" +
      (it.status ? '<span class="pn-status"><i></i>' + esc(it.status) + "</span>" : "") + "</div></div>" +
      '<p class="pn-text">' + esc(it.peek) + "</p>" +
      (it.launch ? '<div class="pn-launch">' + launchPill(it.launch) + launchStats(it.launch) + launchCta(it.launch, "block", true) + '<span class="pn-url">sprintrivals.com</span>' + "</div>" : "") +
      (it.ai ? '<p class="pn-ai"><span class="ai-tag">AI-first</span>Claude Code wrote most of the code</p>' : "") +
      (thumbs.length > 1
        ? '<div class="pn-thumbs">' + thumbs.map((g, n) => '<button data-pn="' + n + '"' + (n ? "" : ' class="on"') + ' aria-label="Show ' + esc(g.alt) + '"><img src="' + esc(g.src || g.poster) + '" alt=""></button>').join("") + "</div>"
        : "") +
      (feats ? '<p class="pn-h">' + (it.featLabel || "Key " + (it.kind === "Coalition" || it.groups || it.id === "coalition" ? "work" : "features")) + '</p><ul class="pn-list">' + feats.slice(0, 4).map((f) => "<li>" + esc(f) + "</li>").join("") + "</ul>" : "") +
      '<div class="pn-foot"><a class="pn-btn" href="#/' + it.id + '">' + (it.next ? "Get in touch" : "View the full story") + " &rarr;</a>" +
      '<button class="pn-next" data-pn-next aria-label="Preview the next item">' + CHEVRON + "</button></div>";
    tl.querySelectorAll(".is-active").forEach((el) => el.classList.remove("is-active"));
    const card = tl.querySelector('[data-id="' + id + '"]');
    if (card) card.classList.add("is-active");
    indexEl.querySelectorAll(".ix.on").forEach((el) => el.classList.remove("on"));
    const ix = indexEl.querySelector('[data-go="' + id + '"]') || indexEl.querySelector('[data-go="' + (parentOf(id) || {}).id + '"]');
    if (ix) ix.classList.add("on");
  }

  panel.addEventListener("click", (e) => {
    const th = e.target.closest("[data-pn]");
    if (th) {
      const g = byId[panelId].gallery.filter((x) => x.src || x.poster)[+th.dataset.pn];
      panel.querySelector("#pn-img").src = g.src || g.poster;
      panel.querySelectorAll("[data-pn]").forEach((b) => b.classList.toggle("on", b === th));
      return;
    }
    if (e.target.closest("[data-pn-next]")) {
      const next = ORDER[(ORDER.indexOf(panelId) + 1) % ORDER.length];
      showPanel(next);
    }
  });

  if (canHover) {
    tl.addEventListener("mouseover", (e) => {
      const el = e.target.closest("[data-id]");
      if (el) showPanel(el.dataset.id);
    });
  }
  tl.addEventListener("focusin", (e) => {
    const el = e.target.closest("[data-id]");
    if (el && !quiet) showPanel(el.dataset.id);
  });

  /* ---------- Detail page ---------- */

  function mediaEl(m) {
    if (!m) return "";
    if (m.youtube)
      return '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(m.youtube) + '?rel=0" title="' + esc(m.alt) +
        '" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" loading="lazy"></iframe>';
    if (m.video)
      return '<video src="' + esc(m.video) + '" poster="' + esc(m.poster || "") + '" controls playsinline preload="none" aria-label="' + esc(m.alt) + '"></video>';
    return '<img src="' + esc(m.src) + '" alt="' + esc(m.alt) + '">';
  }

  function renderDetail(it) {
    const parent = parentOf(it.id);
    const i = ORDER.indexOf(it.id);
    const before = i > 0 ? byId[ORDER[i - 1]] : null;
    const after = i >= 0 && i < ORDER.length - 1 ? byId[ORDER[i + 1]] : null;
    const kids = (it.subs || []).map((id) => byId[id]);
    const gallery = it.gallery || [];

    const sections = [["overview", "Overview"]];
    if (it.highlights || it.groups) sections.push(["highlights", "Highlights"]);
    // Section names that fit the item: software is "Built with", a job is its stack, creative work is what I did.
    const techLabel = it.techLabel || (it.ai || it.kind === "Course project" || it.kind === "Capstone" ? "Built with" : "Tech stack");
    if (gallery.length > 1) sections.unshift(["gallery", it.galleryLabel || "Gallery"]);
    if (kids.length) sections.push(["along", it.subsLabel || "From this chapter"]);
    if (it.tech) sections.push(["built", techLabel]);
    if (it.tools) sections.push(["tools", it.toolsLabel || "Made with"]);

    dlg.style.setProperty("--c", it.color);
    side.innerHTML =
      '<button class="back" data-act="close">&larr; Back to timeline</button>' +
      (parent ? '<a class="back sub-back" href="#/' + parent.id + '">&larr; ' + esc(parent.title) + "</a>" : "") +
      icon(it, "d-icon") +
      '<p class="d-kind">' + esc(it.kind) + "</p>" +
      '<h2 id="d-title">' + esc(it.title) + "</h2>" +
      '<p class="d-sub">' + esc(it.sub) + "</p>" +
      '<p class="d-date">' + esc(it.date) + (it.status ? " &middot; " + esc(it.status) : "") + "</p>" +
      (sections.length > 1
        ? '<nav class="d-nav" aria-label="Sections">' + sections.map((s) => '<a href="#sec-' + s[0] + '" data-sec="' + s[0] + '">' + esc(s[1]) + "</a>").join("") + "</nav>"
        : "") +
      (it.links
        ? '<div class="d-links">' +
          it.links.map((l, n) => '<a class="btn' + (n ? " ghost" : "") + '" href="' + esc(l.href) + '"' + (l.href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"') + ">" + esc(l.label) + " &nearr;</a>").join("") +
          "</div>"
        : "") +
      '<div class="d-step">' +
      (before ? '<a href="#/' + before.id + '" style="--c:' + before.color + '"><small>&larr; Newer</small>' + esc(before.title) + "</a>" : "<span></span>") +
      (after ? '<a class="r" href="#/' + after.id + '" style="--c:' + after.color + '"><small>Older &rarr;</small>' + esc(after.title) + "</a>" : "<span></span>") +
      "</div>";

    const hero = gallery[0];
    const L = it.launch;
    main.innerHTML =
      (L
        ? '<div class="ln-banner">' + launchPill(L) + "<h3>" + esc(L.headline) + "</h3>" + launchStats(L) +
          '<p class="ln-note">' + esc(L.note) + "</p>" + launchCta(L, "big") + "</div>"
        : "") +
      (hero
        ? '<figure class="g-hero' + (hero.tall ? " tall" : "") + (hero.contain ? " contain" : "") + '">' + mediaEl(hero) + "</figure>" +
          (gallery.length > 1
            ? '<div class="g-thumbs" id="sec-gallery">' +
              gallery.map((g, n) => '<button class="g-th' + (n ? "" : " on") + '" data-g="' + n + '" aria-label="Show ' + esc(g.alt) + '"><img src="' + esc(g.src || g.poster) + '" alt=""></button>').join("") +
              "</div>"
            : "")
        : it.art || (it.next && !firstImage(it))
        ? '<figure class="g-hero banner">' + (it.mosaic ? mosaic(it) : '<span class="cover art">' + MOUNTAIN + "</span>") + "</figure>"
        : "") +
      '<section id="sec-overview"><h3>Overview</h3>' +
      '<div class="ov' + (it.stat ? " has-stat" : "") + '"><div>' +
      (it.ai ? '<p class="ai-note"><span class="ai-tag">AI-first</span>' + esc(AI_NOTE) + "</p>" : "") +
      it.body.map((p) => "<p>" + esc(p) + "</p>").join("") + "</div>" +
      (it.stat ? '<aside class="stat"><b>' + esc(it.stat.value) + "</b><span>" + esc(it.stat.label) + "</span></aside>" : "") +
      "</div></section>" +
      (it.highlights ? '<section id="sec-highlights"><h3>Highlights</h3><ul class="hl">' + it.highlights.map((h) => "<li>" + esc(h) + "</li>").join("") + "</ul></section>" : "") +
      (it.groups
        ? '<section id="sec-highlights"><h3>Highlights</h3>' +
          it.groups.map((g) => "<h4>" + esc(g.title) + '</h4><ul class="hl">' + g.items.map((h) => "<li>" + esc(h) + "</li>").join("") + "</ul>").join("") +
          "</section>"
        : "") +
      (kids.length
        ? '<section id="sec-along"><h3>' + esc(it.subsLabel || "From this chapter") + '</h3><div class="kids">' +
          kids
            .map(
              (c) =>
                '<a class="kid" href="#/' + c.id + '" style="--c:' + c.color + '">' + (firstImage(c) ? '<img src="' + esc(firstImage(c)) + '" alt="">' : icon(c, "kid-ic")) +
                "<span><b>" + esc(c.title) + "</b><small>" + esc(c.kind) + " &middot; " + esc(c.date) + "</small><em>" + esc(c.blurb) + "</em></span></a>"
            )
            .join("") +
          "</div></section>"
        : "") +
      (it.tech ? '<section id="sec-built"><h3>' + esc(techLabel) + "</h3>" + '<div class="chips">' + it.tech.map((t) => "<span>" + esc(t) + "</span>").join("") + "</div></section>" : "") +
      (it.tools ? '<section id="sec-tools"><h3>' + esc(it.toolsLabel || "Made with") + '</h3><div class="chips">' + it.tools.map((t) => "<span>" + esc(t) + "</span>").join("") + "</div></section>" : "");

    main.scrollTop = 0;
    side.scrollTop = 0;
    dlg.scrollTop = 0;
    watchSections();
  }

  main.addEventListener("click", (e) => {
    const th = e.target.closest("[data-g]");
    if (!th) return;
    const g = byId[current].gallery[+th.dataset.g];
    const fig = main.querySelector(".g-hero");
    fig.className = "g-hero" + (g.tall ? " tall" : "") + (g.contain ? " contain" : "");
    fig.innerHTML = mediaEl(g);
    main.querySelectorAll(".g-th").forEach((b) => b.classList.toggle("on", b === th));
  });
  side.addEventListener("click", (e) => {
    if (e.target.closest('[data-act="close"]')) return close();
    const a = e.target.closest("[data-sec]");
    if (!a) return;
    e.preventDefault();
    const sec = main.querySelector("#sec-" + a.dataset.sec);
    if (!sec) return;
    pinned = a.dataset.sec;
    pinUntil = Date.now() + 1500;
    markSection(pinned);
    if (window.innerWidth > 860) {
      const y = sec.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop - 24;
      main.scrollTo({ top: y, behavior: "smooth" });
    } else {
      dlg.scrollTo({ top: sec.getBoundingClientRect().top + dlg.scrollTop - 16, behavior: "smooth" });
    }
  });

  // Section menu: highlight the last section whose heading has scrolled past the top,
  // or the last one once the page can't scroll any further. A click wins until the next manual scroll.
  let pinned = null, pinUntil = 0;
  function markSection(id) {
    side.querySelectorAll("[data-sec]").forEach((l) => l.classList.toggle("on", l.dataset.sec === id));
  }
  function syncSection() {
    const links = [...side.querySelectorAll("[data-sec]")];
    if (!links.length) return;
    if (pinned && Date.now() < pinUntil) return markSection(pinned);
    pinned = null;
    const box = window.innerWidth > 860 ? main : dlg;
    // The trigger line slides down the screen as you scroll, so short pages still reach every section.
    const max = Math.max(1, box.scrollHeight - box.clientHeight);
    const top = box.getBoundingClientRect().top + 120 + (box.scrollTop / max) * box.clientHeight * 0.6;
    // The section furthest down the page whose top has passed the line.
    let id = links[0].dataset.sec, best = -Infinity;
    links.forEach((l) => {
      const sec = main.querySelector("#sec-" + l.dataset.sec);
      const t = sec ? sec.getBoundingClientRect().top : Infinity;
      if (t <= top && t > best) (best = t), (id = l.dataset.sec);
    });
    if (box.scrollTop > 0 && box.scrollTop + box.clientHeight >= box.scrollHeight - 4) id = links[links.length - 1].dataset.sec;
    else if (box.scrollTop < 40 && links[0].dataset.sec === "gallery") id = "gallery";
    markSection(id);
  }
  main.addEventListener("scroll", syncSection, { passive: true });
  dlg.addEventListener("scroll", syncSection, { passive: true });
  ["wheel", "touchmove", "keydown"].forEach((ev) => dlg.addEventListener(ev, () => (pinUntil = 0), { passive: true }));
  function watchSections() {
    pinned = null;
    const first = side.querySelector("[data-sec]");
    if (first) markSection(first.dataset.sec);
    requestAnimationFrame(syncSection); // after the page is laid out, not before
  }

  let current = null;
  let quiet = false; // set while focus returns from the detail page, so the panel doesn't jump
  function open(id) {
    const it = byId[id];
    if (!it) return close();
    current = id;
    renderDetail(it);
    if (!dlg.open) {
      dlg.showModal();
      document.documentElement.classList.add("modal-open");
    }
    const back = side.querySelector(".back");
    if (back) back.focus({ preventScroll: true });
  }
  function close() {
    if (dlg.open) dlg.close();
    finish();
  }
  // Cleanup also runs from close() directly: some browsers close on Escape without firing "close".
  dlg.addEventListener("cancel", (e) => {
    e.preventDefault();
    close();
  });
  dlg.addEventListener("close", finish);
  function finish() {
    if (!current) return;
    document.documentElement.classList.remove("modal-open");
    main.querySelectorAll("video").forEach((v) => v.pause());
    main.querySelectorAll("iframe").forEach((f) => f.remove()); // stop any YouTube video still playing
    if (location.hash.startsWith("#/")) history.replaceState(null, "", location.pathname + location.search);
    const id = current;
    current = null;
    showPanel(id);
    const card = tl.querySelector('[data-id="' + id + '"]');
    if (card) {
      quiet = true;
      card.focus({ preventScroll: true });
      quiet = false;
      const r = card.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) card.scrollIntoView({ block: "center" });
    }
  }
  dlg.addEventListener("keydown", (e) => {
    if (e.target.closest("video")) return;
    const i = ORDER.indexOf(current);
    if (i < 0) return;
    if (e.key === "ArrowRight" && i < ORDER.length - 1) location.hash = "#/" + ORDER[i + 1];
    if (e.key === "ArrowLeft" && i > 0) location.hash = "#/" + ORDER[i - 1];
  });

  function route() {
    const m = location.hash.match(/^#\/([\w-]+)/);
    if (m) open(m[1]);
    else close();
  }
  window.addEventListener("hashchange", route);

  renderIndex();
  function fitIndex() {
    const spare = window.innerHeight - indexEl.offsetHeight - 24;
    indexEl.style.setProperty("--ix-top", Math.min(24, spare) + "px");
  }
  fitIndex();
  window.addEventListener("resize", fitIndex);
  window.addEventListener("load", fitIndex);
  renderTimeline();
  showPanel(window.FEATURED);
  route();

  // Live Sprint Rivals numbers from the same API the landing page reads (2026-10-09).
  // data.js keeps the last known values, so the page is still right if this call fails.
  function liveStats() {
    fetch("https://api.sprintrivals.com/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const sr = byId["sprint-rivals"];
        if (!sr || !d || typeof d.players !== "number" || !Array.isArray(d.countries) || !d.countries.length) return;
        const players = String(d.players), countries = String(d.countries.length);
        let changed = false;
        const set = (obj, key, val) => {
          if (obj[key] !== val) { obj[key] = val; changed = true; }
        };
        if (sr.launch) sr.launch.stats.forEach((s) => {
          if (/waitlist/.test(s[1])) set(s, 0, players);
          if (/countries/.test(s[1])) set(s, 0, countries);
        });
        if (sr.stat) {
          set(sr.stat, "value", players);
          set(sr.stat, "label", sr.stat.label.replace(/across \d+ countries/, "across " + countries + " countries"));
        }
        ITEMS.forEach((it) => (it.body || []).forEach((para, i) => {
          set(it.body, i, para.replace(/audience in \d+ countries/, "audience in " + countries + " countries"));
        }));
        if (!changed) return;
        renderTimeline();
        const shown = panelId;
        panelId = null;
        showPanel(shown);
        if (current) renderDetail(byId[current]);
      })
      .catch(() => {});
  }
  liveStats();
})();
