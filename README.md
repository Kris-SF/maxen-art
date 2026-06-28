# Maxen's Art Site

A simple, flexible art gallery. The layout is **masonry**, so pictures of any
size or shape (tall, wide, square) fit together and are **never cropped**.

## The only file you edit

**`config.js`** — your name, your bio, your links, and the list of art.
Everything else runs itself.

## How to add a new piece of art

1. Put the image file in the `images` folder (drag it in).
2. Open `config.js` and copy one line in the `ARTWORKS` list, like:
   `{ src: "images/sky-dragon.svg", title: "Sky Dragon", medium: "Markers", year: "2026", collection: "paintings" },`
3. Change `src` to your file name, and fill in the title/medium/year.
4. Set `collection` to `"paintings"` or `"drawings"` (or make up your own —
   just remember to add a matching page if you want a whole new section).

## The files

- `config.js`  — EDIT THIS (your info + art list)
- `index.html` — home page (shows all art)
- `digital.html`, `graphite.html`, `marker.html` — section pages (one per medium)
- `about.html` — text page
- `contact.html` — embedded Google Form (link set in `config.js` → `contactForm`)
- `style.css`  — colors & layout (change colors at the very top)
- `site.js`    — the engine (don't touch)
- `images/`    — your pictures live here

## Putting it online with Replit

1. Make a new Repl → choose the **HTML, CSS, JS** template (or a blank static one).
2. Upload **all** of these files into it, keeping the `images` folder as a folder.
3. Press **Run** to preview it.
4. Click **Deploy** → choose **Static** → Deploy. Replit gives you a public link.

That's it. To update later, change `config.js` or add images, then Deploy again.

## Tips for photos of real art

- **Any orientation is fine** — the wall arranges them automatically.
- Phone photos work great. Shoot the art flat, in good light, straight-on.
- For fast loading, save images around **1500 px on the longest side** and
  keep each file **under ~500 KB** if you can.
- Use `.jpg` for paintings/photos, `.png` if you need a see-through background.
- Name files simply: `dragon.jpg`, not `IMG_2931 copy (final).JPG`.

## Want a different look?

- Open `style.css`. The top section has the colors — change `--paper`
  (background) and `--accent` (the bright color) to anything you like.
- In `config.js`, set `showCaptions: false` for a pure clean gallery with no
  text under the pictures (like the mosz.com style).
