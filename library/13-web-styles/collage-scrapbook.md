# Collage / Scrapbook 🧩 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `collage-scrapbook`  
> **Marka / Konsept:** `Scrapbook & Tape`  
> **Vurgu Rengi:** `#B45309`  
> **Karakteristikler:** Yarı Saydam Maskeleme Bandı (Washi Tape), Polaroid Fotoğraf ('Summer tour 2026'), Yırtık Kraft Kağıt

---

## 1. Stil Özeti ve Felsefesi
Fiziksel anı defteri, yırtık dergi kupürleri ve el yazısı notların samimi indie zine estetiği. Üstten bantlanmış yarı saydam koli bandı, polaroid çerçevede 'Summer tour 2026' fotoğrafı, sarı vurgulu 'ANALOG SCRAPS & TORN EDGES.' daktilo başlığı ve kırmızı karalama notlar.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`collage-scrapbook.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#B45309`, `#1A1614`, `#F0D040`, `#80A0B0`, `#F0E0C0`
- **Vurgu Rengi (Accent):** `#B45309`
- **Önerilen Tipografi:** Space Mono, Caveat
- **Görsel Kimlik Unsurları:** Yarı Saydam Maskeleme Bandı (Washi Tape), Polaroid Fotoğraf ('Summer tour 2026'), Yırtık Kraft Kağıt
- **Önizleme Görseli:** `05_Web_Stilleri/collage-scrapbook.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an authentic, intimate Indie Zine Collage / Scrapbook website homepage UI exactly matching the reference design:
- Browser Shell: Dark cardboard bar with amber URL `https://analog-scrapbook.zine/memories`.
- Scrapbook Canvas: Soft textured cream paper artboard (#f5f0e6) with tactile drop shadow.
- Realistic Masking Tape: Translucent white-frosted washi tape strip physically taped across the top border with torn zigzag edges.
- Brand Header: "Scrapbook & Tape" in expressive Caveat cursive, tagged "ISSUE #03 • INDIE ARCHIVE".
- Hand-Scrawled Scribble: Red handwriting note "~ taped together with love & memories ~".
- Primary Headline: "ANALOG SCRAPS & TORN EDGES." in bold typewriter Space Mono, with "SCRAPS" highlighted in a yellow marker box.
- Description: "Washi tape, polaroid frames, scrawled marginalia, layered paper cuts, and authentic indie zine storytelling."
- Primary Action: Dark paper stamp button "BROWSE THE ZINE →".
- Physical Polaroid Photo: Tilted glossy polaroid frame containing a candid summer road trip photo, with handwritten caption "Summer tour 2026 // Polaroid 600".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```