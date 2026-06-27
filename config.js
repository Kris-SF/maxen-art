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

  // Where the Contact form sends to. Clicking "Submit" opens the
  // visitor's own email app with a message addressed here.
  contactTo: "kris@moontowermeta.com",

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
  { label: "All Art",        file: "index.html"          },
  { label: "Colored Pencil", file: "colored-pencil.html" },
  { label: "Digital",        file: "digital.html"        },
  { label: "Graphite",       file: "graphite.html"       },
  { label: "Marker",         file: "marker.html"         },
  { label: "About",          file: "about.html"          },
  { label: "Contact",        file: "contact.html"        },
];

/* =====================================================================
   👇  THE ART.  Add a new piece by copying one { ... } line,
   pasting it, and changing the details. Put a comma after each one.

   src        = the picture file inside the "images" folder
   title      = what it's called
   medium     = what it's made of (Markers, Paint, Digital, Crayon...)
   year       = when he made it
   collection = which menu page it shows on (must match a page below):
                "colored-pencil" -> Colored Pencil page
                "digital"        -> Digital page
                "graphite"       -> Graphite page
                "marker"         -> Marker page
                (every piece shows on the All Art home page no matter what)

   Pictures can be ANY size or shape — tall, wide, or square.
   The gallery fits them together automatically and never crops them.
   ===================================================================== */
const ARTWORKS = [
  { src: "images/bulb-of-imagination.jpeg", title: "Bulb of Imagination", medium: "Colored pencil", year: "2026", collection: "colored-pencil" },
  { src: "images/sushi-dragon.jpeg",        title: "Sushi Dragon",        medium: "Marker",         year: "2026", collection: "marker"         },
  { src: "images/soccer-player.jpeg",       title: "Soccer Player",       medium: "Graphite",       year: "2026", collection: "graphite"       },
  { src: "images/crumply-pillow.png",       title: "Bedtime",             medium: "Graphite",       year: "2026", collection: "graphite"       },
  { src: "images/bop-it.jpeg",              title: "Bop It",              medium: "Graphite",       year: "2026", collection: "graphite"       },
  { src: "images/fierce-jaguar.jpg",        title: "Fierce Jaguar",       medium: "Digital",        year: "2026", collection: "digital"        },
  { src: "images/magic-touch.jpeg",         title: "Magic Touch",         medium: "Colored pencil", year: "2026", collection: "colored-pencil" },
];
