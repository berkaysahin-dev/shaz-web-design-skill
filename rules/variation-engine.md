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
| Category | The business category (crane hire, dentist, agency, fun/event…). It sets Axis J Density (§3) before any seeding. |

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
| J Density | — | — | 4 (set by category, not seeded) |

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

### Axis J — Density (set by category, never by the seed)
Axes A–I decide *what the page looks like*; Axis J decides *how much is on it*. It is chosen from the category, not from S/L/F, so a crane company and a law firm never come out equally sparse. The bans in `SKILL.md` §1 are identical at every level: density is never a licence for pulsing lights, badges, eyebrows, neon, fake stats or filler.

| Level | Sections | Signature moments | Motion layer | Imagery |
| :-: | :-: | :-: | :--- | :--- |
| **J0 Quiet** | 4–5 | 1 | State feedback and reveals only | Optional |
| **J1 Balanced** | 6–7 | 2 | Reveals on every section, one scroll-linked scene | At least 1 visual every 2 sections |
| **J2 Full** | 8–10 | 3 | Every section has a scroll-linked or interactive behaviour; one pinned/sticky scene | A visual in most sections; at least one full-bleed image band |
| **J3 Maximal** | 9–12 | 4 | Continuous motion: pinned scroll scenes, kinetic type, cursor-aware hover media, section-to-section transitions | Image- or illustration-led; media in almost every section |

**Category → default level**

| Category | Level | What fills the page (pick from this, never generic) |
| :--- | :-: | :--- |
| Law, notary, accounting, documentation, funeral services | J0 | Practice-area index, step sequence, Q&A, contact form |
| Luxury minimal, editorial, journal, single-product teaser | J0–J1 | Large photography, essay columns, one product interaction |
| Dentist, clinic, physiotherapy, vet, pharmacy | J1 | Treatment index with prices, before/after slider, visit-flow steps, appointment day picker, Q&A, map of the clinic floor or route |
| Architecture, interior, hotel, spa, real estate | J1–J2 | Project gallery with hover preview, floorplan or room viewer, materials rail, booking/inquiry form |
| Fintech, SaaS, developer tools | J1–J2 | Live product UI mock, real data table, interactive pricing, integration list (only real names) |
| Construction, crane hire, logistics, industrial, automotive, manufacturing | J2 | Fleet/catalogue rail, interactive calculator or load chart, pinned machine scene (SVG or WebGL), project gallery, process timeline, service-area map, quote form |
| Restaurant, café, bakery, food brand | J2 | Menu as the page structure, dish photography band, reservation picker, kitchen process, location map |
| E-commerce, retail, product brand | J2 | Product grid with quick view, spec drawer, colour/variant switcher, cart drawer, lifestyle image bands |
| Agency, studio, portfolio, creative technologist | J3 | Work index with hover video/image, case-study rails, kinetic type hero, pinned showreel scene, services as interactive list, team (only if given) |
| Fun / playful, kids, games, events, festivals, music | J3 | Illustrated characters or objects that react to scroll and taps, playful springs (Axis F 4), schedule/lineup board, ticket picker, sticker-like collectible interactions |

Adjust **one level** from the user's own words: "sade / minimal / clean" → one level down; "dolu / canlı / animasyonlu / not plain" → one level up. If the user asks for a specific level, use it. Name the level and any adjustment in the Design Signature.

**How a page gets full without slop**
1. **Fullness comes from modules the business really uses** (the right column above), not from decoration. Law 1 still holds: more sections and more interaction, never longer paragraphs.
2. **Every moving thing must come from the subject's world**: the crane boom lifts, the tooth whitening slider wipes, the agency's case video scrubs, the festival lineup board flips. A motion that would fit any website unchanged is filler; delete it.
3. **Signature moments come from different mechanic families** (e.g. one calculator, one pinned scroll scene, one gallery hover, one form interaction) and never two in the same viewport.
4. **Imagery without fabricated facts:** user assets first, then verified text-free photography or test photos clearly marked `REPLACE` in a data file, then subject SVG illustration. Content modules that need facts (team, testimonials, client logos, stats, awards) appear only when the brief gives them; at J2–J3 fill the page with fact-free modules instead (calculators, galleries, process, catalogue, Q&A, forms, maps).
5. **Banned fillers at every level:** particle fields, gradient blobs, glass cards with nothing in them, logo marquees without real partners, counters of invented numbers, testimonial carousels with invented people, 3- or 6-card icon "feature" grids, auto-playing carousels, cursor trails.
6. **Performance stays fixed:** animate `transform`/`opacity` only, at most one WebGL canvas per page, every scroll scene has a `prefers-reduced-motion` static state, mobile keeps the content and drops pinning.

## 4. Signature moments

The number comes from Axis J (J0 one, J1 two, J2 three, J3 four). Each one comes from the concept artifact or the subject's world (the order slip tears off, the timetable rows flip like a split-flap board without blinking, the herbarium label lifts to reveal the specimen, the crane boom swings to the chosen radius). Look for them in `library/10-interactive-animations/` first. At J0 everything else stays quiet; at J1–J3 the rest of the page carries the motion layer from the Axis J table, but no extra effect may compete with a signature moment in the same viewport.

### 4.1 Library first

The library is the skill's main source of interaction, motion and visual craft. Writing a component from scratch when a fitting blueprint exists is a failure, not a style choice.

1. **Search before building.** For every signature moment, the hero, the navigation, the footer and every section with a visual or interactive element, search `library/INDEX.md` (grep it by the subject's nouns, the mechanic you need and the section shape — e.g. `slider`, `calculator`, `gallery`, `drawer`, `truck`, `tooth`, `form`). Shortlist 2–3 candidates per slot.
2. **Use it whenever it fits and looks good.** A blueprint fits when it can carry this subject's content (swap test), survives the bans after translation (§8), works on mobile and stays within the performance rules. If it fits and is visually strong, it is used — not "sometimes", every time.
3. **Open the full blueprint** before writing code: its layout, mechanics, motion curves, timing, interaction states, SVG/WebGL technique and visual details are the reference to reproduce. Do not build from the index line alone.
4. **What changes, what stays.**
   - Always replaced by the project: colours (tokens from Axis C), fonts (Axis B), copy (§5), brand names and any banned element (§8 table).
   - Kept from the blueprint: structure, mechanics, physics, choreography, micro-interactions, illustration and shader technique. Exception: the boilerplate `stiffness: 280, damping: 24, mass: 0.8` that most blueprints repeat is replaced by the seeded motion personality (Axis F); any other spring or curve the blueprint specifies stays.
5. **Coverage.** Every signature moment comes from the library unless no blueprint fits; at J1–J3 at least half of the page's interactive or visual components also come from it. When nothing fits a slot, write it from scratch and say why in the Design Signature.
6. **Rotation.** Do not reuse a blueprint that an earlier site in the same conversation already used for the same role.

Folders by role: hero `01` · navigation `02` · type `03`, `15` · motion `04` · 3D `05` (only if Axis E allows WebGL) · product `06` · pricing `07` · commerce `08` · forms and footers `09`, `12` · signature mechanics `10` · data `11` · styles `13` (only if the brief names a style) · UI components `14` · icons `16`. If `INDEX.md` is missing or older than the library, regenerate it with `node library/build-index.js library`.

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
5. **Density test (Axis J):** count sections, signature moments and sections with a visual against the level's row. At J2–J3, scroll the mobile view: any section that is only a heading and one sentence, with no visual and no interaction, is underfilled; add a real module from the category column. At any level, any effect that fails the swap test is filler; remove it.
6. **Library test (§4.1):** list every signature moment and every visual/interactive component with the blueprint it came from. A slot written from scratch needs a one-line reason that no blueprint fits; "faster to write" is not a reason. Check that no blueprint colour, font or brand copy leaked through.
7. **Hard-law audit:** run `checklists/quality-gate.md`.

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
