# Handmade ️ — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `handmade`  
> **Marka / Konsept:** `Terracotta & Clay`  
> **Vurgu Rengi:** `#D07000`  
> **Karakteristikler:** El Yapımı Seramik Atölyesi, Organik Düzensiz Hatlar, Terracotta Toprak Tonları, El Çizimi Rozet

---

## 1. Stil Özeti ve Felsefesi
Dijital sterilliğe karşı insan elinin sıcak kusurlarını kutlayan zanaatkar Handmade web tasarımı. 'Warm, imperfect, human design.' başlığı, Caveat el yazısı tipografisi, pişmiş toprak (terracotta) tonları, düzensiz asimetrik kartlar ve Kyoto seramik atölyesi vitrini.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`handmade.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F0F0C0`, `#191512`, `#D07000`, `#703010`, `#A05010`
- **Vurgu Rengi (Accent):** `#D07000`
- **Önerilen Tipografi:** Caveat, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** El Yapımı Seramik Atölyesi, Organik Düzensiz Hatlar, Terracotta Toprak Tonları, El Çizimi Rozet
- **Önizleme Görseli:** `05_Web_Stilleri/handmade.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a charming, artisanal Handmade pottery studio website homepage UI exactly matching the reference design:
- Browser Shell: Dark espresso bar with URL `https://studio-terracotta.craft/works`.
- Warm Linen Artboard: Soft cream handcrafted paper container (#fcf9f2) with organic shadow.
- Brand Name: "Terracotta & Clay" in fluid, artistic Caveat script lettering.
- Menu: Earthy brown navigation [CERAMICS], [STUDIO], [WORKSHOPS], [SHOP].
- Handcrafted Badge: Tilted script badge "~ 100% Handcrafted with patience".
- Primary Headline: "Warm, imperfect, human design." in grounded, organic charcoal typography.
- Description: "Celebrating artisanal pottery, organic brushstrokes, irregular lines, and authentic crafted textures that digital perfection cannot replicate."
- Irregular Action Button: Asymmetrically rounded warm amber button "Explore Studio Pieces →".
- Tactile Clay Card: Tilted warm yellow card with dashed border: "Wheel Thrown Pottery - Every vessel is formed by hand using local wild clay...".
- Footer: "LOCALLY FORMED IN KYOTO • EARTHEN MATERIALS | AWWWARDS CRAFT NOMINEE".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```