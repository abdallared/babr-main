# BABBR Creatives™ — Website

Arabic-first (RTL) marketing site for **BABBR Creatives**, a Libyan advertising
and creative-production agency. React + Vite + Tailwind v4 + Motion.

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # → dist/
npm run preview
```

---

## Where the brand came from

Everything visual is derived from the client's own assets rather than invented:

- **Logo path** — `src/lib/brand.js` → `MARK_PATH`. The bolt was **contour-traced
  from `mark-white-orange.png`** (Moore-neighbour boundary trace, then
  Douglas–Peucker simplified to its true 14 vertices). It is the real mark as
  vector geometry, so it scales, animates and strokes cleanly. No bitmap logo is
  used anywhere in the UI.
- **Palette** — sampled pixel-by-pixel from the official artwork:

  | Token | Hex | Where it came from |
  |---|---|---|
  | `babbr` | `#FC3B00` | primary orange, every logo file |
  | `ink` | `#0A0A0A` | logo-on-black variants |
  | `sand` | `#CEBB9F` | the Eid "sherpa" mark |
  | `periwinkle` | `#758BFD` | profile colourway 3 / 6 |
  | `blush` | `#FFCAD4` | profile colourway 3 / 7 |
  | `indigo` | `#27187E` | profile colourway 5 |
  | `lime` | `#E9FF70` | profile colourway 5 |
  | `teal` | `#2EC4B6` | profile colourway 6 / 7 |
  | `grass` | `#7CB518` | profile colourway 8 |

- **The 12 colourways** in `COLORWAYS` are the exact background/foreground pairs
  from the agency's own profile-picture set. The **Identity** section is built
  around them, because that set *is* the identity system.

## Content sources

| Fact | Source |
|---|---|
| Name, "FUTURE OF ADVERTISING" tagline | the Facebook page bio |
| Phone / WhatsApp `+218 91 319 2992` | Facebook contact info (listed as both mobile and WhatsApp) |
| `babar.ly`, category "Advertising/marketing" | Facebook about page |
| 3.7K followers, top reel 5.5K views | Facebook page, at time of build |

`babar.ly` itself was still serving the default LibyanSpider "your site is
active" page, so there was no existing copy to carry over — the Arabic copy here
is written for the Libyan market and is yours to edit.

## Things to replace before launch

These are marked in code so they're easy to find:

1. **`src/sections/Work.jsx`** — the six case studies are *placeholders*, rendered
   from brand colourways rather than photography. Add real work by dropping files
   into `public/work/` and giving an entry an `image` path; the tile renders the
   image instead of the generated panel.
2. **`src/sections/Stats.jsx`** — the two social figures are real and badged
   `live`. The "120+ projects" and "40+ brands" are badged `est.` and are guesses.
   Put your real totals in, or delete those two cards.
3. **`src/sections/Contact.jsx`** — budget bands in `BUDGETS` are guesses at
   Libyan market rates. Adjust to your actual pricing.
4. **`src/lib/brand.js`** — `email` is a placeholder (`hello@babar.ly`); the city
   is set to "ليبيا" generally, and About says "Tripoli · Libya". Set your real
   city and address.
5. There is **no testimonials section**: the Facebook page shows no ratings yet,
   so nothing was fabricated. Add one once you have real quotes.

## How the contact form works

There's no backend. The brief is assembled into a pre-filled WhatsApp message
and opened via `wa.me` — which is how most clients in Libya actually get in
touch, and it works on a static host with zero server. To store submissions
instead, replace the `window.open(...)` call in `Contact.jsx` with a `fetch` to
your endpoint.

## Notes on the Arabic typography

Two rules the code follows deliberately — worth keeping if you extend it:

- **Never split Arabic per character** for animation. Arabic is cursive; putting
  each letter in its own element breaks the joining forms (`نصنع` collapses into
  isolated glyphs). `RevealWords` and the hero headline split per *word* only.
- **No `overflow-hidden` word-masks on Arabic headlines.** Ascenders, descenders
  and diacritics (`ج`, `ى`, `ـً`, `ـُ`) sit outside the line box and get cropped.
  The reveals use travel + blur instead, which reads the same and never clips.

Latin runs that contain punctuation (`™`, `©`, `EST.`, hex codes, phone numbers)
are wrapped in `dir="ltr"` so bidi doesn't move the punctuation to the wrong end.

## Structure

```
src/
├── lib/
│   ├── brand.js        # traced logo path, 12 colourways, contact details
│   └── utils.js        # cn()
├── components/
│   ├── BabbrMark.jsx   # the mark: plain fill + self-drawing variant
│   ├── BrandIcons.jsx  # Facebook + WhatsApp (lucide v1 dropped brand glyphs)
│   ├── Interactive.jsx # magnetic button, spotlight card, tilt, counter,
│   │                   # cursor glow, scroll progress
│   ├── Marquee.jsx     # seamless -50% loop, pauses on hover
│   ├── Reveal.jsx      # scroll entrance + per-word headline cascade
│   ├── SectionHeading.jsx
│   └── Nav.jsx
└── sections/
    Hero · Services · Stats · Identity · Work · Process · About · Faq · Contact · Footer
```

Component conventions follow shadcn/[21st.dev](https://21st.dev) — React +
Tailwind, source-in-repo, no runtime UI dependency — so components from that
registry drop in without adaptation.

Every animation is behind `@media (prefers-reduced-motion: reduce)`.

## Deploying

`vite.config.js` sets `base: './'`, so **one build works in both places** — no
rebuild or config swap needed when you move hosts.

### GitHub Pages (live now)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Pages must be set to **Source: GitHub Actions** (Settings → Pages) once.

→ **https://abdallared.github.io/babr-main/**

### babar.ly (the real home)

`npm run build`, then upload the **contents** of `dist/` to the web root
(LibyanSpider cPanel → `public_html`), replacing the default landing page. No
Node runtime needed on the server.

When the domain goes live, update the two absolute URLs in `index.html` —
`og:url` and `og:image` — from the github.io address to `https://babar.ly/`.
Social crawlers require absolute URLs for those two, which is why they aren't
relative like everything else.
