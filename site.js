/* =====================================================================
   THE ENGINE.  You don't need to edit this file.
   It reads config.js and builds every page.
   ===================================================================== */

// which page am I on? e.g. "art.html" (defaults to index.html)
const CURRENT = (location.pathname.split("/").pop() || "index.html");

// ---------- build the top header ----------
function buildHeader() {
  const links = NAV.map(n => {
    const active = (n.file === CURRENT) ? ' class="active"' : "";
    return `<a href="${n.file}"${active}>${n.label}</a>`;
  }).join("");
  return `
    <header class="site-header">
      <a class="logo" href="index.html">${SITE.name}</a>
      <nav class="site-nav">${links}</nav>
    </header>`;
}

// ---------- build the footer ----------
function buildFooter() {
  const socials = SITE.socials
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
    .join("");
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div>${socials}</div>
      <div style="margin-top:10px">© ${year} ${SITE.name}</div>
    </footer>`;
}

// ---------- build one gallery (optionally filtered by collection) ----------
function buildGallery(filter) {
  const list = (filter === "all")
    ? ARTWORKS
    : ARTWORKS.filter(a => a.collection === filter);

  if (list.length === 0) {
    return `<div class="gallery"><p style="color:var(--muted)">No pieces here yet — add some in config.js!</p></div>`;
  }

  const cards = list.map((a, i) => {
    const cap = SITE.showCaptions
      ? `<div class="caption"><div class="t">${a.title}</div><div class="m">${a.medium} · ${a.year}</div></div>`
      : "";
    // data-index lets the lightbox know which piece was clicked
    return `<a class="piece" data-index="${i}" href="${a.src}">
              <img src="${a.src}" alt="${a.title}" loading="lazy">${cap}
            </a>`;
  }).join("");

  return `<div class="gallery">${cards}</div>`;
}

// ---------- the full-screen viewer ----------
function buildLightbox() {
  return `
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Artwork viewer">
      <button class="lb-btn lb-close" id="lbClose" aria-label="Close">×</button>
      <button class="lb-btn lb-prev"  id="lbPrev"  aria-label="Previous">‹</button>
      <img id="lbImg" alt="">
      <button class="lb-btn lb-next"  id="lbNext"  aria-label="Next">›</button>
      <div class="lb-cap" id="lbCap"></div>
    </div>`;
}

// keeps track of the pieces currently shown, for prev/next
let VIEW = [];
let POS = 0;

function openLightbox(i) {
  POS = i;
  showLightbox();
  document.getElementById("lightbox").classList.add("open");
}
function showLightbox() {
  const a = VIEW[POS];
  if (!a) return;
  document.getElementById("lbImg").src = a.src;
  document.getElementById("lbImg").alt = a.title;
  document.getElementById("lbCap").textContent =
    SITE.showCaptions ? `${a.title} — ${a.medium}, ${a.year}` : "";
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("open"); }
function step(d) { POS = (POS + d + VIEW.length) % VIEW.length; showLightbox(); }

// ---------- text pages ----------
function buildAbout() {
  const paras = SITE.about.map(p => `<p>${p}</p>`).join("");
  return `<section class="page"><h2>About me</h2>${paras}
    <p>Want to say hi? Email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p></section>`;
}
function buildContact() {
  const field = (name, label, type) => `
    <label class="cf-field">
      <span class="cf-label">${label} <span class="cf-req">(required)</span></span>
      ${type === "textarea"
        ? `<textarea class="cf-input cf-textarea" name="${name}" rows="6" required></textarea>`
        : `<input class="cf-input" type="${type}" name="${name}" required>`}
    </label>`;
  return `<section class="page contact">
    <h2>Contact</h2>
    <form id="contactForm" class="contact-form">
      ${field("name", "Name", "text")}
      ${field("email", "Email", "email")}
      ${field("subject", "Subject", "text")}
      ${field("message", "Message", "textarea")}
      <button class="cf-submit" type="submit">Submit</button>
      <p class="cf-note" id="contactNote" role="status" aria-live="polite" hidden></p>
    </form>
  </section>`;
}

// turns the contact form into a pre-filled email (no server needed)
function wireContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const get = k => (data.get(k) || "").toString().trim();
    const to = SITE.contactTo || SITE.email;
    const body = `Name: ${get("name")}\nEmail: ${get("email")}\n\n${get("message")}`;
    const href = `mailto:${to}`
      + `?subject=${encodeURIComponent(get("subject"))}`
      + `&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    const note = document.getElementById("contactNote");
    if (note) {
      note.textContent = "Opening your email app to send the message…";
      note.hidden = false;
    }
  });
}

// ---------- put it all together when the page loads ----------
document.addEventListener("DOMContentLoaded", () => {
  document.title = SITE.name.replace(/\b\w/g, c => c.toUpperCase());

  const header = document.getElementById("site-header");
  const main   = document.getElementById("main");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = buildHeader();
  if (footer) footer.innerHTML = buildFooter();

  const mode = document.body.dataset.render;     // set on each page's <body>
  const coll = document.body.dataset.collection; // e.g. "all", "paintings"

  if (main) {
    if (mode === "about")   main.innerHTML = buildAbout();
    else if (mode === "contact") { main.innerHTML = buildContact(); wireContactForm(); }
    else { // gallery
      let html = "";
      if (coll === "all" && SITE.tagline) {
        html += `<section class="intro"><h1>${SITE.tagline}</h1><p>${SITE.intro}</p></section>`;
      }
      html += buildGallery(coll || "all");
      main.innerHTML = html;

      // wire up the lightbox for the pieces now on screen
      VIEW = (coll === "all" || !coll) ? ARTWORKS : ARTWORKS.filter(a => a.collection === coll);
      document.querySelectorAll(".piece").forEach(el => {
        el.addEventListener("click", e => {
          e.preventDefault();
          openLightbox(parseInt(el.dataset.index, 10));
        });
      });
    }
  }

  // lightbox controls
  document.body.insertAdjacentHTML("beforeend", buildLightbox());
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => step(-1));
  document.getElementById("lbNext").addEventListener("click", () => step(1));
  document.getElementById("lightbox").addEventListener("click", e => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", e => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
});
