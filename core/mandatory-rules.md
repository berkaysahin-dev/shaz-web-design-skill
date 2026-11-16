# Shaz Design System — Mandatory Architectural Standards

These rules are non-negotiable architectural constraints. They apply universally across every component, layout, and project category.

---

## 1. Absolute Prohibitions (Sıfır Tolerans Kuralları)

1. **Zero Eyebrows, Overlines & Kicker Labels (Sıfır Başlık Üstü Etiket):**
   - Strictly forbidden: uppercase micro-labels, category tags, section counters, or telemetry strings placed directly above headings (e.g. `OTONOM SISTEMLER`, `01 · TEMEL DISIPLIN`, `SECTION 03`, `ATELIER DOCTRINE`, `CATEGORY · SUB`).
   - Headings lead authoritatively, nakedly, and directly. Visual hierarchy is achieved exclusively through optical typography scale and generous whitespace.

2. **Zero Heavy Academic Essays & Philosophical Walls of Text:**
   - Do NOT write dense, multi-paragraph philosophical treatises or pseudo-academic manifestos.
   - Copy must be **şık (stylish), sharp, concise, and written in natural human language**. Maximum 1 dense, high-impact sentence per section. If layout speaks for itself, use zero sentences.

3. **Zero Dark-Only Defaulting (Light-Mode Equality):**
   - Do NOT default every project to a pitch-black background.
   - Light surfaces (Apple white `#FFFFFF`, clean off-white `#F5F5F7`, warm editorial paper `#F7F6F2`, clinical stone `#EFECE6`) are first-class equals.

4. **Zero Blinking & Pulsing Lights:**
   - Blinking indicator dots, pulsing circles (`animate-pulse`), radar pings, and strobe effects are banned in UI and 3D stages.

5. **Zero Glow, Neon, Blur & Radioactive Lighting:**
   - Fluorescent neon borders, CSS neon drop shadows, laser lines, and glowing halos are banned.

6. **Zero Repeating Gradients & Cloned Bento Grids:**
   - Purple-to-cyan or blue-to-emerald radial blobs are permanently banned.
   - Repetitive 3-card rounded bento grids filled with generic stock icons are banned. Use asymmetric compositions, horizon ledgers, or editorial index tables.

7. **Zero Reflexive 50/50 Hero Splits:**
   - Banned is the automatic left-text / right-specimen split. Rotate across distinct composition archetypes.

8. **Zero Emojis & Mandatory Monochrome Vector Icons:**
   - Emojis are strictly banned in UI code and copy. All icons must be monochrome vector strokes (Lucide React or inline SVG, 1.5px–1.75px stroke width).

9. **Zero Synthetic Slashes:**
   - Double slashes are strictly banned in titles, tags, headings, and navigation labels.

10. **Zero Fabricated Content & Fake Metrics:**
    - Never invent fake client logos, fabricated customer testimonials, unverifiable certifications, or business claims that were not provided in the brief.

11. **Zero Rigid Container Locks (Dynamic Container Scales):**
    - Do NOT force every section into a single narrow container (such as `max-w-5xl`).
    - Use calibrated scales: `max-w-2xl` to `max-w-3xl` for editorial reading, `max-w-6xl` for structured forms, `max-w-7xl` for enterprise platforms, and full-bleed (`max-w-[1536px]` / `w-full`) for ambient stages and telemetry horizons.

12. **Zero Unjustified Ticker Marquees:**
    - Do NOT reflexively append scrolling ticker strips or badge marquees unless explicitly justified by real multi-partner ecosystems, active technology stacks, or live streaming tickers.

13. **Selective Surface Hierarchy (No Universal Double-Bezel):**
    - Double-bezel (`.bezel-tray` -> `.bezel-core`) is an occasional high-status accent reserved solely for deep lower-page containers. It is strictly forbidden in hero sections.

14. **The Architectural Master Horizon Footer:**
    - Generic 4-column corporate sitemaps, uppercase micro-titles, fake serial inputs, status dots, and faint ghost watermarks are banned. Footers open with an authoritative dialogue invitation sentence, clean symmetrical navigation deck, and balanced horizon baseline.

---

## 2. Mandatory Affirmative Requirements

1. **Category-Driven Materiality:** Palettes reflect physical materials (titanium, basalt, brushed aluminum, clinical paper, deep graphite).
2. **Typography Discipline:** Distinct display and body pairings with optical line-height and calibrated negative tracking.
3. **Responsive Flow:** Zero horizontal overflow (`overflow-x-clip`), touch targets at least 44x44px.
4. **Motion Performance:** 60 FPS animations animating exclusively `transform` and `opacity` with physical spring dynamics.
5. **Layout-First Composition:** Form follows function and narrative flow, not prefabricated component slots.
