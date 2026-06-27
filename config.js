/* =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.  ✏️
   Change the words between the "quotes". Don't delete commas or brackets.
   ===================================================================== */

const SITE = {
  name: "MAXEN",

  tagline: "Hi, I'm Maxen. I make art.",
  intro:   "I'm 10 years old and I love making art. This is my gallery — new work coming soon.",

  about: [
    "Hi, I'm Maxen. I'm 10 years old and I love making art.",
    "I'm just getting my gallery started, so check back soon — there's a lot more on the way.",
  ],

  email: "hello@maxen-art.com",

  socials: [
    { label: "Email", url: "mailto:hello@maxen-art.com" },
  ],

  showCaptions: true,
};

/* =====================================================================
   THE MENU ACROSS THE TOP.
   Each line is one button. "file" is which page it opens.
   Leave these as-is unless you want to rename or remove a section.
   ===================================================================== */
const NAV = [
  { label: "All Art",   file: "index.html"    },
  { label: "Paintings", file: "art.html"      },
  { label: "Drawings",  file: "drawings.html" },
  { label: "About",     file: "about.html"    },
  { label: "Contact",   file: "contact.html"  },
];

/* =====================================================================
   👇  THE ART.  Add a new piece by copying one { ... } line,
   pasting it, and changing the details. Put a comma after each one.

   src        = the picture file inside the "images" folder
   title      = what it's called
   medium     = what it's made of (Markers, Paint, Digital, Crayon...)
   year       = when he made it
   collection = which gallery it belongs in:
                "paintings"  -> shows on the Paintings page
                "drawings"   -> shows on the Drawings page
                (every piece shows on the All Art home page no matter what)

   Pictures can be ANY size or shape — tall, wide, or square.
   The gallery fits them together automatically and never crops them.
   ===================================================================== */
const ARTWORKS = [
  { src: "images/sushi-dragon.jpg",  title: "Sushi Dragon",   medium: "Markers",        year: "2026", collection: "drawings"  },
  { src: "images/sky-dragon.svg",    title: "Sky Dragon",     medium: "Markers",        year: "2026", collection: "paintings" },
  { src: "images/space-whale.svg",   title: "Space Whale",    medium: "Acrylic paint",  year: "2025", collection: "paintings" },
  { src: "images/forest-king.svg",   title: "The Forest King",medium: "Colored pencil", year: "2026", collection: "drawings"  },
  { src: "images/robot-friend.svg",  title: "Robot Friend",   medium: "Digital",        year: "2025", collection: "paintings" },
  { src: "images/volcano.svg",       title: "Volcano",        medium: "Watercolor",     year: "2026", collection: "paintings" },
  { src: "images/my-cat-pixel.svg",  title: "My Cat Pixel",   medium: "Crayon",         year: "2024", collection: "drawings"  },
  { src: "images/ocean-monster.svg", title: "Ocean Monster",  medium: "Ink",            year: "2026", collection: "drawings"  },
  { src: "images/rocket-town.svg",   title: "Rocket Town",    medium: "Markers",        year: "2025", collection: "paintings" },
];
