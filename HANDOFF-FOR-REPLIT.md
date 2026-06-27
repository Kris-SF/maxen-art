# Handoff Guide for Replit

You have two ways to do this: **the click path** (no AI, ~2 minutes) or
**the AI path** (paste a prompt and let Replit's Agent do it). Both work.
The site is already built — Replit's job is only to host it, not design it.

---

## OPTION A — The click path (recommended, simplest)

1. Go to replit.com → **Create Repl**.
2. Choose the **HTML, CSS, JS** template. Name it something like `art-site`.
3. Delete the sample files it created (index.html, style.css, script.js).
4. **Upload** every file from the `art-site` folder. Drag the whole thing in,
   and make sure the **`images` folder stays a folder** (don't flatten it).
   Your file list should look like:
   ```
   index.html  art.html  drawings.html  about.html  contact.html
   config.js   site.js   style.css   README.md   images/
   ```
5. Click **Run** to preview inside Replit.
6. Click **Deploy** (top right) → choose **Static** → **Deploy**.
   Replit gives you a public link like `your-art-site.replit.app`.

To update later: change `config.js` or add images, then hit **Deploy** again.

---

## OPTION B — The AI path (paste this to Replit's Agent)

If you'd rather have Replit's Agent set it up, upload the files first, then
paste this prompt:

> I've uploaded a finished static website (HTML, CSS, and JavaScript) for my
> kid's art gallery. The files are index.html, art.html, drawings.html,
> about.html, contact.html, config.js, site.js, style.css, and an images/
> folder. Please DO NOT redesign it or change the look — it's already done.
> Just set it up to run as a static site and configure a Static Deployment so
> I get a public URL. Tell me the URL when it's live.

### If the Agent tries to rebuild or restyle it, push back with:

> Stop — don't change the design or rewrite the files. Keep my HTML/CSS/JS
> exactly as-is. Only configure static hosting and deploy.

---

## Handy follow-up prompts for Replit's Agent

**Resize big photos (do this after adding real art):**
> The images in my images/ folder are phone photos and too large. Resize every
> image so the longest side is 1500px and each file is under 500KB, keeping the
> same file names and the same folder. Don't change anything else.

**Add a new gallery section (e.g. "Digital"):**
> Add a new page called digital.html that works exactly like art.html but shows
> pieces where collection is "digital". Add a "Digital" link to the nav in
> config.js. Don't change the design or the engine in site.js.

**Use my own web address:**
> I bought a domain from [registrar]. Walk me through pointing it at my Replit
> Static Deployment, step by step.

---

## What NOT to ask Replit to do

- Don't ask it to "clone mosz.com" or copy any other artist's site or images —
  use your son's own art. The design is already yours, built from scratch.
- Don't let it move the art list out of config.js — that one-file simplicity is
  the whole point.
