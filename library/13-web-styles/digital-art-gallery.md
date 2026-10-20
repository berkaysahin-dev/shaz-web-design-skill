# Digital Art / Gallery 🖼️ — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `digital-art-gallery`  
> **Marka / Konsept:** `CANVAS_3D.EXE`  
> **Vurgu Rengi:** `#00F0C0`  
> **Karakteristikler:** Sıfır Yerçekimli WebGL 3D Sergi, Parlayan Camgöbeği Telemetri, Geometrik Soyut Heykel, Karanlık Galeri

---

## 1. Stil Özeti ve Felsefesi
Sanal gerçeklik ve WebGL 3D uzayında konumlanan Digital Art Gallery web tasarımı. 'DIGITAL ART IN ZERO-G.' başlığı, 3D soyut metalik sıvı sanat eseri vitrini, parlayan camgöbeği (#00ffc8) telemetri etiketleri ('VERTEX_COUNT: 128,400') ve fütüristik sergi salonu.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`digital-art-gallery.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#00B0E0`, `#05060A`, `#00F0C0`, `#8000D0`, `#A030D0`
- **Vurgu Rengi (Accent):** `#00F0C0`
- **Önerilen Tipografi:** Space Grotesk, JetBrains Mono
- **Görsel Kimlik Unsurları:** Sıfır Yerçekimli WebGL 3D Sergi, Parlayan Camgöbeği Telemetri, Geometrik Soyut Heykel, Karanlık Galeri
- **Önizleme Görseli:** `05_Web_Stilleri/digital-art-gallery.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an immersive, futuristic WebGL Digital Art Gallery website homepage UI exactly matching the reference design:
- Browser Shell: Dark sci-fi bar with glowing cyan border and URL `https://virtual-canvas.gallery/exhibit-01`.
- Brand Name: "CANVAS_3D.EXE" in JetBrains Mono, tagged "WEBGL IMMERSIVE SPACE • ROOM #09".
- Telemetry Header: "CURATED GENERATIVE ARTWORK" in luminous cyan.
- Primary Headline: "DIGITAL ART\nIN ZERO-G." with "IN ZERO-G." in glowing cyan with volumetric drop shadow.
- Description: "Immersive virtual gallery rooms, interactive WebGL lighting, cryptographic provenance tags, and dark responsive architectural frames."
- Primary Action: Glowing cyan block button "LAUNCH 3D WALKTHROUGH →".
- 3D Art Cube Showcase: Deep-set geometric frame containing an abstract 3D metallic fluid sculpture with dynamic reflections and volumetric lighting.
- Telemetry Badge: Floating dark pill badge: "VERTEX_COUNT: 128,400 — SHADER: PBR_METAL".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```