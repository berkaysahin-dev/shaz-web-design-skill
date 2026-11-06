# Shaz Agency Web Design — Variation Engine (Anti-Sameness & Anti-Slop)

This is **Step 0** of every `/shaz` run. It exists because the skill's own laws, examples and libraries pull every project toward the same result: a dark page, an italic serif accent word, a glass blob in the hero, JetBrains Mono labels, a coverflow, a logo marquee, a horizon footer with a city and a clock. The laws say what must **never** happen. This engine decides what **should** happen for *this* brief, so that two projects never come out as the same page with a different name.

The hard laws in `SKILL.md` §1 always win. Nothing in this file relaxes them; every option below is already law-compliant.

---

## 1. Read the brief before reading the library

Write down (internally) a **content inventory** from the user's words only:

| Field | What to record |
| :--- | :--- |
| Name & offer | Brand name, what is sold or done, for whom. |
| Real facts | Numbers, places, dates, people, products the user actually gave. |
| Assets | Image/video/logo files or URLs the user supplied (none = none). |
| Pages | What the visitor must be able to do (buy, book, read, apply, contact). |
| Unknowns | Everything the page needs that the brief does not say. |

**Unknowns are never invented as facts.** No made-up metrics (`140µs P99`, `12,000 clients`), awards, client logos, testimonials, founding years, street addresses, coordinates, opening hours or team names. Write copy that is true from the brief alone, or mark a replaceable value in the code (`{/* REPLACE: real address */}` inside JSX only, never in rendered HTML text — Law 7).

## 2. Find the concept in the subject's own world

Generic pages come from generic vocabulary. Before choosing any style:

1. List **6 concrete nouns from the subject's world** — materials, tools, rituals, places, documents, sounds. A bakery: *proofing basket, flour sack stencil, oven timer, crumb, order slip, chalkboard*. A logistics API: *bill of lading, container code, berth schedule, pallet label, tide table, manifest*.
2. Pick **one real-world artifact** from that list as the page's organizing object: a ticket, a field notebook, a specimen label, a timetable, a menu, a map legend, a score sheet, a recipe card, a catalogue page, a receipt, a programme, a lab protocol, a shipping manifest, a herbarium sheet, a contact sheet.
3. Write the **concept in one sentence**: *"The site reads like the bakery's handwritten order slip: one column, stamped quantities, a timer that counts the next bake."*

The artifact decides the grid, the type voice and the one signature interaction. If the concept would work unchanged for a competitor in a different sector, it is not a concept — redo step 2.

**Banned as concepts** (the skill's own defaults): *obsidian/luxury void, monolith, atelier, sanctuary, telemetry cockpit, liquid glass, cosmic particles* — unless the brief is literally about that thing.

## 3. Seed the variation axes

Different briefs must land on different combinations. Use a deterministic seed so the choice is not "whatever feels premium":

```
name = brand name, lowercased, letters a–z only (transliterate: ş→s, ü→u, é→e …)
S = sum of the character codes of name      ("loaf" → 108+111+97+102 = 418)
L = number of letters in name               ("loaf" → 4)
F = character code of the first letter      ("loaf" → 108)
axis index = (S + L×p + F×q) mod (number of options on that axis)
```

| Axis | p | q | options |
| :--- | :-: | :-: | :-: |
| A Grid | 0 | 0 | 12 |
| B Type | 5 | 1 | 24 |
| C Ground | 3 | 3 | 8 |
| D Hero | 7 | 2 | 6 |
| E Centerpiece | 2 | 5 | 7 |
| F Motion | 11 | 4 | 5 |
| G Nav | 13 | 7 | 5 |
| H Footer | 1 | 3 | 5 |
| I Sections (start) | 0 | 1 | 13 |

(Using three inputs instead of one keeps the axes independent: a single `seed mod n` makes grid, hero and type move together and collapses the variety.)

Then apply **at most two overrides**, each only when the brief clearly contradicts the seeded option (e.g. seeded "dark ground" for a children's clinic). Name every override and its reason in the Design Signature. If the user asks for "another version", add 1 to S and re-roll every axis.

### Axis A — Grid system (12)
0. Classic 12-column editorial grid with deliberate empty columns
1. 5-column asymmetric grid (content on 3, air on 2)
2. Single narrow reading column (max 680px) with marginalia in the outer margin
3. Full-bleed horizontal bands, each band a different height
4. Sticky split: one side pinned, the other scrolls
5. Index / table-of-contents layout (dense numbered list with hover previews)
6. Horizontal rail sections inside a vertical page
7. Poster stack: each section is one oversized composition
8. Broadsheet: 3–4 text columns with hairline rules
9. Catalogue: dense image/thumbnail matrix with filters
10. Timeline / chronological spine
11. Ledger: rows and columns of real data, almost no cards

### Axis B — Type pairing (24, Google Fonts)
0. Fraunces + Inter Tight · 1. Bricolage Grotesque + Source Serif 4 · 2. Syne + Manrope · 3. DM Serif Display + DM Sans · 4. Newsreader + Public Sans · 5. Archivo (+ Archivo Narrow) · 6. Anton + Work Sans · 7. Big Shoulders Display + Libre Franklin · 8. Unbounded + Onest · 9. Cormorant Garamond + Karla · 10. Libre Caslon Text + Hanken Grotesk · 11. EB Garamond + Figtree · 12. Young Serif + Instrument Sans · 13. Familjen Grotesk + Spectral · 14. Schibsted Grotesk + Literata · 15. Red Hat Display + Red Hat Text · 16. Chivo + Crimson Pro · 17. Bodoni Moda + Jost · 18. Gloock + Outfit · 19. Space Grotesk + Lora · 20. IBM Plex Serif + IBM Plex Sans · 21. Epilogue + Petrona · 22. Darker Grotesque + Source Sans 3 · 23. Instrument Serif + Geist

Rules:
- A monospace face is added **only** where the content is literally code, numbers in a table, or a timetable. Never for decoration.
- **Do not italicise one "focal word" inside a sans headline** by default. That is this skill's most recognisable tic. Use it at most once per site, and only when the concept calls for it.
- Use a real type scale (ratio 1.2–1.5 chosen per project), not the same `text-7xl / text-sm` everywhere.

### Axis C — Ground (palette method, 8)
0. Light paper · 1. Light cool/clinical · 2. Mid-tone (stone, clay, sage, slate ~L 60–75%) · 3. Colored ground (matte oxblood, ultramarine, olive, terracotta, ochre, teal — never neon) · 4. Dark warm · 5. Dark cool · 6. Two-ground: alternate light and colored bands · 7. Photographic ground (verified image does the color work)

Build the palette from **one material in the concept artifact** (the kraft of the order slip, the blue of a cyanotype, the green of a ledger book): `ground`, `ink`, `muted`, `accent`, optional `accent-2`. Check text contrast ≥ 4.5:1. Anti-Gold (Law 3) and the neon ban stay absolute. At least half of all seeded results are light or colored — dark is not the "premium" default.

### Axis D — Hero archetype (the 6 from Law 20)
0. Full-Bleed Ambient Canvas · 1. Asymmetric Monumental Typography · 2. Kinetic Horizontal Strip · 3. Fullscreen Editorial Curtain · 4. Split Typography (editorial dialogue) · 5. Zero-Specimen Typographic Stage

### Axis E — Visual centerpiece (7)
0. Typography only · 1. Inline SVG illustration drawn for the subject (diagram, map, pattern, schematic) · 2. Generative SVG/CSS pattern derived from the subject (tide lines, crop rows, stitch pattern) · 3. Verified photography (Unsplash direct URL, subject-accurate, Law 7/14/24) · 4. Real data visual (chart/table of the brief's own facts) · 5. 2D canvas physics tied to the concept · 6. WebGL scene from `library/05-3d-webgl/`

Option 6 is allowed only when the subject is physical or spatial **and** the chosen scene is about that subject. A glass/dispersion/particle blob that could sit on any site is filler — re-roll the axis.

### Axis F — Motion personality (5)
| # | Personality | Springs / timing | Use |
| :-: | :--- | :--- | :--- |
| 0 | Still | no idle motion; state feedback only, 150–200ms ease-out | documents, clinics, legal |
| 1 | Editorial reveal | clip/mask reveals on scroll, `cubic-bezier(0.22,1,0.36,1)` 600–800ms | magazines, studios |
| 2 | Mechanical | `stiffness 420, damping 34, mass 0.6`, stepped transitions | tools, hardware, data |
| 3 | Fluid | `stiffness 120, damping 20, mass 1.1` | hospitality, wellness, food |
| 4 | Playful | `stiffness 300, damping 14` (visible overshoot) | consumer, kids, events |

Never reuse `stiffness: 280, damping: 24` on every project. Respect `prefers-reduced-motion`. Blinking/pulsing stays banned in every personality.

### Axis G — Navigation (the 5 archetypes from `navigation-footer-archetypes.md`)
0. Full-Bleed Editorial Horizon · 1. Kinetic Two-Stage Scroll-Morphing Dock · 2. Minimal Corner Anchors · 3. Dual-Tier Precision Utility Header · 4. Asymmetric Brutalist Split & Fullscreen Drawer

### Axis H — Footer composition (Law 12 content, 5 layouts)
0. Left-aligned oversized invitation + single inquiry line · 1. Centered stack · 2. Two-column: invitation left, navigation deck right · 3. Footer as the last chapter of the concept artifact (e.g. the receipt total, the programme's back cover) · 4. Compact single row (one-page sites)

Only list locations, times or contact details the brief gives. No city, clock or address otherwise — a fabricated "Zürich 20:15 CET" is a fake coordinate (Law 2).

### Axis I — Section shapes
Give every section a container shape from this list, never the same shape twice in a row, and use at least 4 different shapes per page: ledger table · full-bleed image band · two-column essay · index list with hover preview · accordion spec · horizontal rail · single statement · Q&A list · diagram/map · form · step sequence · comparison table · quote with source (only if the brief supplies it).
Start position in the list = Axis I index, then walk forward, skipping shapes that the content cannot fill.

## 4. One signature moment

Choose **exactly one** memorable interaction that comes from the concept artifact (the order slip tears off, the timetable rows flip like a split-flap board without blinking, the herbarium label lifts to reveal the specimen). Look for it in `library/10-interactive-animations/` first. Everything else stays quiet. A page with five "wow" effects has none.

## 5. Copy rules (plain, specific, human)

- Write like the brand's best employee explaining it to a friend: concrete nouns, short verbs, no metaphors stacked on metaphors.
- Headline test: it must contain something only this brand can say (a product, place, method or fact from the brief).
- **Banned words in page copy:** elevate, seamless, unlock, empower, revolutionize, next-generation, cutting-edge, world-class, game-changing, effortless, reimagine(d), redefine, journey, curated (unless literally curation), crafted for, built for the future, where X meets Y, the future of X, synergy, holistic, paradigm.
- **The skill's internal vocabulary is not copy.** Never put these on the page unless the brief is literally about them: *telemetry, obsidian, monolith, dossier, atelier, sanctuary, calibrated, kinetic, orchestration, protocol, manifold, horizon, specimen, tectonic, sovereign, bezel*.
- No three-word fragment slogans (`Fast. Simple. Yours.`), no rhetorical questions as headlines, no `//`, no emojis.
- Buttons say what happens: `Book a table`, `Read the docs`, `See prices` — not `Get started`, `Learn more`, `Discover`.

## 6. Self-critique before delivery (run silently, fix, then deliver)

1. **Swap test:** Replace the brand name with a competitor's. If nothing else on the page would need to change, the concept is generic → redo §2.
2. **Previous-output test:** If you already produced a site earlier in this conversation, list its grid, type pair, ground, hero, centerpiece, motion and nav. The new site must differ on **at least 4** of these 7.
3. **Default-reflex test:** Count how many of these appear: dark ground · italic serif focal word · mono labels · glass/particle hero blob · coverflow · logo marquee · horizon footer with city + clock · `stiffness 280` · rounded-2xl cards. More than **two** → replace the extras with seeded alternatives.
4. **Copy test:** Search the copy for every banned word in §5 and every number, name or place not in the brief. Remove or replace.
5. **Hard-law audit:** run `checklists/quality-gate.md`.

## 7. Worked seeds (check your arithmetic against these)

| Brand | S / L / F | A Grid | B Type | C Ground | D Hero | E Centerpiece | F Motion | G Nav | H Footer |
| :--- | :-: | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| `loaf` | 418 / 4 / 108 | 10 · Timeline | 18 · Gloock + Outfit | 2 · Mid-tone | 2 · Kinetic Strip | 0 · Typography only | 4 · Playful | 1 · Dock | 1 · Centered stack |
| `harbor` | 638 / 6 / 104 | 2 · Narrow column | 4 · Newsreader + Public Sans | 0 · Light paper | 0 · Ambient Canvas | 1 · SVG illustration | 0 · Still | 4 · Brutalist Split | 1 · Centered stack |
| `northwind` | 989 / 9 / 110 | 5 · Index | 16 · Chivo + Crimson Pro | 2 · Mid-tone | 0 · Ambient Canvas | 3 · Photography | 3 · Fluid | 1 · Dock | 3 · Concept chapter |
| `mira` | 425 / 4 / 109 | 5 · Index | 2 · Syne + Manrope | 4 · Dark warm | 5 · Typographic Stage | 5 · 2D canvas | 0 · Still | 0 · Editorial Horizon | 1 · Centered stack |
| `kiln` | 430 / 4 / 107 | 10 · Timeline | 5 · Archivo | 3 · Colored ground | 0 · Ambient Canvas | 0 · Typography only | 2 · Mechanical | 1 · Dock | 0 · Oversized invitation |

Example `loaf` (L=4, F=108), Type axis: (418 + 4×5 + 108×1) mod 24 = 546 mod 24 = 18 → Gloock + Outfit.

Seeds can share an axis or two; the concept from §2 and the section shapes still make them different pages. When two projects in the same conversation share more than 3 axes, apply the previous-output test and re-roll the shared ones.

## 8. Adapting library blueprints to the laws

Many blueprints in `library/` were written for a single showcase and still contain things the laws ban (neon accents, glowing shadows, pulsing dots, eyebrow labels). Use the blueprint's structure and mechanics; translate its surface through this table before writing code:

| Blueprint says | Write instead |
| :--- | :--- |
| `#91FE01`, `#84FF00`, `#00FF00` (acid / lime) | matte chartreuse `#A8B636` or moss `#6B7A2A` |
| `#FF007F`, `#FF00AA`, `#FF00FF` (hot magenta / pink) | matte raspberry `#B2365F` or rosewood `#8C3B4A` |
| `#00FFFF`, `#00F0FF` (electric / laser cyan) | glacier cyan `#7FB3C2` or teal ink `#2F6B73` |
| glow `box-shadow`/`drop-shadow` with color, neon halos | no glow; a 1px hairline or a soft neutral shadow `0 12px 32px rgba(0,0,0,.12)` |
| `animate-pulse`, `ping`, blinking cursors, radar rings | static state; feedback only on user action |
| eyebrow / kicker / section number above a heading | delete it; the heading leads |
| corner stamps, floating status lines, card-header strips | delete them |
| `//` in labels, emoji, graphic logo mark | plain punctuation, monochrome SVG icon, typographic wordmark |
| `stiffness: 280, damping: 24` | the seeded motion personality (Axis F) |
| `Instrument Serif` / `Plus Jakarta Sans` / `JetBrains Mono` | the seeded type pairing (Axis B) |
| media URLs pointing at another site's showcase video | a text-free asset the brief supplies, or a generative fallback (Law 14) |
