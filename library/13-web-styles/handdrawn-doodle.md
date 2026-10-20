# Hand-drawn / Doodle ️ — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `handdrawn-doodle`  
> **Marka / Konsept:** `Sketchpad Notes`  
> **Vurgu Rengi:** `#40B0E0`  
> **Karakteristikler:** El Çizimi Dalgalı Çizgiler, Karalama Oklar & Çerçeveler, Samimi Daktilo & El Yazısı, Taslak Not Kartı

---

## 1. Stil Özeti ve Felsefesi
Kurumsal soğukluğu kıran, el çizimi sıcak karalamalar ve samimi eskizler içeren Hand-drawn Doodle web tasarımı. 'Ideas sketched directly with your hands!' el yazısı başlığı, dalgalı kırmızı altı çizili vurgular, elle çizilmiş asimetrik 'Instant Doodle Notes' paneli.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`handdrawn-doodle.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#D04060`, `#18171A`, `#40B0E0`, `#601020`, `#303040`
- **Vurgu Rengi (Accent):** `#40B0E0`
- **Önerilen Tipografi:** Caveat, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** El Çizimi Dalgalı Çizgiler, Karalama Oklar & Çerçeveler, Samimi Daktilo & El Yazısı, Taslak Not Kartı
- **Önizleme Görseli:** `05_Web_Stilleri/handdrawn-doodle.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a charming, approachable Hand-drawn / Doodle SaaS product website homepage UI exactly matching the reference design:
- Browser Shell: Charcoal bar with hand-dashed border line and cyan URL `https://sketchpad-ideas.app/draw`.
- Background: Dark sketch canvas (#18181b) with faint pencil grid paper texture.
- Brand Header: "️ Sketchpad Notes" in handwritten Caveat script, with links [FEATURES], [PRICING], [DOODLES].
- Primary Headline: "Ideas sketched directly\nwith your hands!" in natural Caveat handwriting, with "with your hands!" underlined by a wavy hand-drawn red scribble.
- Description: "Rough hand-drawn outlines, sketchy arrows, playful underline doodles, and charming imperfect personality for friendly software products."
- Sketch Button: Asymmetric hand-sketched outlined button "Start Sketching (Free) →" with irregular border-radius.
- Hand-Drawn Feature Box: Sketchy red pen container with hand-drawn star: " Instant Doodle Notes - Turn your messy handwriting and quick whiteboard sketches into organized digital task cards...".
- Footer: " 100% VECTOR SKETCH • NO CORPORATE STERILITY | AWWWARDS DOODLE SPECIAL MENTION".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```