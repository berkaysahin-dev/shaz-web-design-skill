# Museum / Gallery 🖼️ — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `museum-gallery`  
> **Marka / Konsept:** `PALAIS DES ARTS`  
> **Vurgu Rengi:** `#B06030`  
> **Karakteristikler:** Klasik Yağlıboya Tablo Çerçevesi, Beyaz Küp Müze Mizanpajı, Küratör Notları, Zamanlı Biletleme

---

## 1. Stil Özeti ve Felsefesi
Dünya standartlarında bir sanat müzesinin prestijli dijital sergi salonu. 'Classical Mastery in the Digital Sphere.' başlığı, zarif ahşap çerçeveli klasik Rönesans yağlıboya tablosu, 'ROOM 04: OIL ON CANVAS' küratör etiketleri ve şık rezervasyon arayüzü.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`museum-gallery.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#202020`, `#505030`, `#707050`, `#B06030`, `#F0F0F0`
- **Vurgu Rengi (Accent):** `#B06030`
- **Önerilen Tipografi:** Cinzel, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Klasik Yağlıboya Tablo Çerçevesi, Beyaz Küp Müze Mizanpajı, Küratör Notları, Zamanlı Biletleme
- **Önizleme Görseli:** `05_Web_Stilleri/museum-gallery.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a prestigious, museum-grade classical art gallery website homepage UI exactly matching the reference design:
- Browser Shell: Deep obsidian frame with URL `https://national-gallery.art/renaissance`.
- Brand Header: "PALAIS DES ARTS" in Roman Cinzel capitals, with badge "EXHIBITIONS • WING D • AUDIO TOUR ACTIVE".
- Primary Headline: "Classical Mastery in the Digital Sphere." in dignified Cinzel serif typography.
- Subtitle: "Curated white cube digital exhibition space. Calibrated lighting, reverent quietude, and rigorous spatial spacing designed for world-class fine art collections."
- Curator Metadata Block: Dual gold-accented entries "ROOM 04: OIL ON CANVAS" and "CURATED BY H. LAURENT".
- Primary Action: Minimalist transparent bordered button "Reserve Timed Tickets →".
- Masterpiece Art Frame: Deep-set museum frame showcasing a classical fine art oil painting of floral still life with dramatic chiaroscuro lighting.
- Museum Plaque: Floating dark plaque below the painting: "LOT 104 • CIRCA 1640 • OIL ON CANVAS".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```