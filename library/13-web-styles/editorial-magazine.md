# Editorial / Magazine 📰 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `editorial-magazine`  
> **Marka / Konsept:** `PROPORTION`  
> **Vurgu Rengi:** `#80A0C0`  
> **Karakteristikler:** Mimari Monolitik Konut Fotoğrafı, Zarif Serif Başlıklar, Altın İnce Çizgiler, Çift Sütunlu Dergi Grid'i

---

## 1. Stil Özeti ve Felsefesi
Architectural Digest ve Monocle standartlarında sofistike Editorial Magazine web tasarımı. 'Concrete, Glass & Unbroken Light.' başlığı, uçurum kenarındaki modern beton villa vaka analizi fotoğrafı, altın sarısı (#e2b774) detaylar ve derin editoryal mizanpaj.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`editorial-magazine.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#203040`, `#0A0A0C`, `#80A0C0`, `#F0E0C0`, `#C0D0F0`
- **Vurgu Rengi (Accent):** `#80A0C0`
- **Önerilen Tipografi:** Playfair Display, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Mimari Monolitik Konut Fotoğrafı, Zarif Serif Başlıklar, Altın İnce Çizgiler, Çift Sütunlu Dergi Grid'i
- **Önizleme Görseli:** `05_Web_Stilleri/editorial-magazine.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a sophisticated, architectural Editorial Magazine website homepage UI exactly matching the reference design:
- Browser Shell: Deep charcoal bar with URL `https://architectural-review.magazine/issue-84`.
- Split Editorial Grid: 1.1fr to 0.9fr ratio separated by a subtle 1px border.
- Brand Name: "PROPORTION" in heavy Playfair Display serif capitals, labeled "QUARTERLY • ISSUE 84".
- Essay Tag: "ESSAY ON MONOLITHIC RESIDENCES" in warm gold (#e2b774).
- Primary Headline: "Concrete, Glass &\nUnbroken Light." with "Unbroken" rendered in elegant italic serif.
- Description: "Carefully calibrated negative space, multi-story grid hierarchies, pull quote callouts, and refined architectural photo essays."
- Action Button: Minimalist outlined rectangular button "READ FULL FEATURE →".
- Visual Asset: Right side displays a large photograph of an ultra-modern luxury concrete residence with floor-to-ceiling glass on a dramatic cliffside.
- Case Study Plaque: Floating glass badge on the photo: "CASE STUDY 04 | THE CLIFFSIDE RESIDENCE • 2026".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```