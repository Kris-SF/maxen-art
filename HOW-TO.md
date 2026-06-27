# How to update the gallery 🎨

You don't need to know any code. Just **ask Claude in plain English** and it
will make the change, save it, and put it live. The website updates by itself
about a minute later (refresh the page to see it).

Live site: **https://maxen-art.com**

---

## The two things every artwork needs

Behind the scenes, each picture is just:

1. an **image file** in the `images/` folder, and
2. one **line** in `config.js` that gives it a title, year, etc.

Claude takes care of both. You only describe what you want.

---

## Adding art

**If you want Claude to draw a cartoon/placeholder picture**, just describe it:

> Add a new painting called *Dino Party* — a green T-rex at a birthday party.
> Markers, 2026.

**If you have a real photo or scan of Maxen's art**, attach the image to the
chat and say what it is:

> Here's my new drawing *Robot Castle*. Add it as a drawing for 2026.
> *(attach the photo)*

That's it. Claude saves the picture and adds it to the gallery.

> 💡 A real photo has to come *in* somehow — the easiest way is to **attach it
> in the chat**. Claude can only invent cartoon/SVG art from a description.

---

## Deleting art

> Remove *Volcano* from the gallery.

---

## Changing words

> Change my About text to say I'm 11 now.

> Rename *Sky Dragon* to *Fire Dragon*.

> Change the contact email to maxen@example.com.

---

## Moving things around

> Move *My Cat Pixel* to the Paintings page.

> Put *Rocket Town* first.

There are three places art can live:

- **All Art** (home page) — every picture shows here, always.
- **Paintings** page — pieces marked `paintings`.
- **Drawings** page — pieces marked `drawings`.

Just tell Claude which page you want something on.

---

## Good to know

- **Pictures can be any shape** — tall, wide, or square. The gallery fits them
  together automatically and never cuts them off.
- **Changes go live by themselves.** Claude saves to the `main` branch and the
  site rebuilds in about a minute. Just refresh the page.
- **`config.js` is the heart of the site.** It holds all the words and the list
  of art. It's written to stay simple — if you ever open it, you'll see each
  artwork is one easy-to-read line. Claude keeps it that way.
- **Each chat starts fresh**, and that's fine — the website itself is the
  memory. Just say what you want each time.

---

## If something looks broken

- Wait a minute and refresh — updates aren't instant.
- If a picture shows a broken icon, the filename probably doesn't match. Just
  tell Claude: *"the Dino Party image is broken, can you fix it?"* and it will
  sort it out.
