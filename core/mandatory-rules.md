# Shaz Design System — Mandatory Architectural Standards

These rules are non-negotiable architectural constraints. They apply universally across every component, layout, and project category.

---

## 1. Absolute Prohibitions (Sıfır Tolerans Kuralları)

1. **Zero Eyebrows, Overlines & Kicker Labels (Sıfır Başlık Üstü Etiket):**
   - Strictly forbidden: uppercase micro-labels, category tags, section counters, or telemetry strings placed directly above headings (e.g. `OTONOM SISTEMLER`, `01 · TEMEL DISIPLIN`, `SECTION 03`, `ATELIER DOCTRINE`, `CATEGORY · SUB`).
   - Headings lead authoritatively, nakedly, and directly. Visual hierarchy is achieved exclusively through optical typography scale and generous whitespace.

2. **Zero Meaningless Filler Microcopy & Fake Status Indicators (Global Content Integrity):**
   - Strictly forbidden empty slogans and decorative filler phrases: `Küme sağlıklı`, `Sistem aktif`, `Yüksek performans`, `Yeni nesil çözümler`, `Akıllı sistemler`, `Geleceği şekillendiriyoruz`, `Mükemmelliğe odaklanıyoruz`, `Yenilikçi yaklaşım`, `Güçlü altyapı`, `Dijital dönüşümün geleceği`, `Premium deneyim`, `Maksimum verimlilik`.
   - Never insert fake status dots, artificial telemetry streams, or fictitious server logs just to fill empty visual containers.
   - **The Content Necessity Test:** Every string of text must communicate real, verifiable business facts or genuine UX actions. If text only serves as visual decoration, delete it immediately.

3. **Zero Heavy Academic Essays & Philosophical Walls of Text:**
   - Do NOT write dense, multi-paragraph philosophical treatises or pseudo-academic manifestos.
   - Copy must be **şık (stylish), sharp, concise, and written in natural human language**. Maximum 1 dense, high-impact sentence per section. If layout speaks for itself, use zero sentences.

4. **Zero Color Inconsistency & Disconnected Palettes (Global Color Consistency):**
   - Strictly forbidden: introducing arbitrary, unapproved, or one-off hex colors into isolated components (e.g. sudden red/coral buttons on a blue/slate site, random lime tags, inconsistent border shades).
   - Every website must operate on a centralized semantic color token system defined upfront (`ground`, `surface`, `ink`, `ink-muted`, `brand`, `brand-hover`, `accent`, `border`, `divider`).
   - Every section, card, button, and divider must belong to this unified visual identity.

5. **Zero Lifeless Static Elements & Zero Fake Interactions (Global Motion Design):**
   - A professional website must not feel like a static screenshot. Elements that offer user utility (navigation, tabs, cards, drawers, forms) must feature purposeful motion and tactile feedback.
   - All interactive controls must actually function: tabs must switch views, filters must filter, buttons must have active press states (`active:scale-[0.98]`), and form submissions must provide tangible feedback.
   - Strictly forbidden: fake interactive controls that do nothing when clicked.

6. **Zero Blinking & Pulsing Lights:**
   - Blinking indicator dots, pulsing circles (`animate-pulse`), radar pings, and strobe effects are banned in UI and 3D stages.

7. **Zero Glow, Neon, Blur & Radioactive Lighting:**
   - Fluorescent neon borders, CSS neon drop shadows, laser lines, and glowing halos are banned.

8. **Zero Repeating Gradients & Cloned Bento Grids:**
   - Purple-to-cyan or blue-to-emerald radial blobs are permanently banned.
   - Repetitive 3-card rounded bento grids filled with generic stock icons are banned. Use asymmetric compositions, horizon ledgers, or editorial index tables.

9. **Zero Reflexive 50/50 Hero Splits:**
   - Banned is the automatic left-text / right-specimen split. Rotate across distinct composition archetypes.

10. **Zero Emojis & Mandatory Monochrome Vector Icons:**
    - Emojis are strictly banned in UI code and copy. All icons must be monochrome vector strokes (Lucide React or inline SVG, 1.5px–1.75px stroke width).

11. **Zero Synthetic Slashes:**
    - Double slashes are strictly banned in titles, tags, headings, and navigation labels.

12. **Zero Fabricated Content & Fake Metrics:**
    - Never invent fake client logos, fabricated customer testimonials, unverifiable certifications, or business claims that were not provided in the brief.

13. **Zero Rigid Container Locks (Dynamic Container Scales):**
    - Do NOT force every section into a single narrow container (such as `max-w-5xl`).
    - Use calibrated scales: `max-w-2xl` to `max-w-3xl` for editorial reading, `max-w-6xl` for structured forms, `max-w-7xl` for enterprise platforms, and full-bleed (`max-w-[1536px]` / `w-full`) for ambient stages and telemetry horizons.

14. **Zero Unjustified Ticker Marquees:**
    - Do NOT reflexively append scrolling ticker strips unless explicitly justified by real multi-partner ecosystems, active technology stacks, or live streaming tickers. Continuous tickers must feature smooth pause-on-hover interaction.

15. **Selective Surface Hierarchy (No Universal Double-Bezel):**
    - Double-bezel (`.bezel-tray` -> `.bezel-core`) is an occasional high-status accent reserved solely for deep lower-page containers. It is strictly forbidden in hero sections.

16. **The Architectural Master Horizon Footer:**
    - Generic 4-column corporate sitemaps, uppercase micro-titles, fake serial inputs, status dots, and faint ghost watermarks are banned. Footers open with an authoritative dialogue invitation sentence, clean symmetrical navigation deck, and balanced horizon baseline.

---

## 2. Mandatory Affirmative Requirements

1. **Centralized Semantic Color Architecture:** Establish tokens for background, surfaces, typography, borders, and brand actions before rendering markup.
2. **Purposeful Motion & Tactile States:** Micro-interactions (hover elevation, button depression, tab switching) operate on 60 FPS GPU-accelerated properties (`transform`, `opacity`) with full `prefers-reduced-motion` compliance.
3. **Content Necessity Discipline:** Every word earns its place through clarity and relevance to the business domain.
4. **Category-Driven Materiality:** Palettes reflect physical materials (titanium, basalt, brushed aluminum, clinical paper, deep graphite).
5. **Responsive Integrity:** Zero horizontal overflow (`overflow-x-clip`), touch targets at least 44x44px.
