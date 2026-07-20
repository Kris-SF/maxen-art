# Maxen's Art Site

A simple, flexible art gallery. The layout is **masonry**, so pictures of any
size or shape (tall, wide, square) fit together and are **never cropped**.

## The only file you edit

**`config.js`** — your name, your bio, your links, and the list of art.
Everything else runs itself.

## How to add a new piece of art (the current workflow)

This is the routine Kris uses to publish Maxen's art:

1. **On the computer:** save the photo into the **Maxen-art › Published** folder
   and rename the file to what Maxen wants it called. Simple names are best —
   lowercase with dashes instead of spaces, e.g. `coffee-mountain.jpg`.
2. **On GitHub:** open the **`images`** folder → **Add file → Upload files** →
   drop the photo in → **Commit changes**.
3. **Here in Claude Code:** open the session and tell Claude the new piece is up,
   along with its **medium** (Marker, Graphite, Digital, Colored pencil) and
   anything special (e.g. "mark it sold"):
   👉 https://claude.ai/code/session_015Q9tgjgvRoawQvD8uKfKEb

Claude then does the rest: adds the piece to `config.js`, sorts it onto the right
medium page, normalizes the filename (spaces/capitals) and verifies nothing is
broken, then pushes to `main`. **Vercel redeploys automatically**, so the live
site updates about a minute later.

> You never edit `config.js` by hand — just upload the image and say the word.
> To remove, rename, re-order, or mark a piece sold, ask Claude the same way.
>
> **The `collection` field** decides which menu page a piece shows on, and must
> match one of the section pages below (`"marker"`, `"graphite"`, `"digital"`,
> `"colored-pencil"`). Every piece also appears on the **All Art** home page.
> Add `sold: true` to a piece to show a red "Sold" label.

## The files

- `config.js`  — EDIT THIS (your info + art list)
- `index.html` — home page (shows all art)
- `colored-pencil.html`, `digital.html`, `graphite.html`, `marker.html` — section pages (one per medium)
- `about.html` — text page
- `contact.html` — embedded Google Form (link set in `config.js` → `contactForm`)
- `style.css`  — colors & layout (change colors at the very top)
- `site.js`    — the engine (don't touch)
- `images/`    — your pictures live here

## Hosting (Vercel)

The site is a plain static site hosted on **Vercel**, connected to this GitHub
repo. Vercel **auto-deploys from the `main` branch** — every push to `main`
(including the ones Claude makes) rebuilds the live site within about a minute.
There's no build step and nothing to run by hand.

Live site: **https://maxen-art.com**

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
