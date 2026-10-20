# Candy / Pastel 🍬 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `candy-pastel`  
> **Marka / Konsept:** `BONBON PASTELS`  
> **Vurgu Rengi:** `#F090C0`  
> **Karakteristikler:** Pastel Makaron & Şekerleme Kartları, Pamuk Şeker Gradyanı, Marshmallow Hatlar, Çilek & Nane Tonları

---

## 1. Stil Özeti ve Felsefesi
Pastel renklerin huzurlu ve tatlı uyumunu kutlayan Candy / Pastel e-ticaret web tasarımı. 'Sweet, Fluffy & Pastel Dreams.' başlığı, Cotton Cloud, Matcha Mint, Lavender Sky ve Lemon Glaze şekerleme kartları, pamuk şekeri pembesi yumuşak butonlar.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`candy-pastel.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F090C0`, `#E7F7FC`, `#D07090`, `#F0C0E0`, `#606080`
- **Vurgu Rengi (Accent):** `#F090C0`
- **Önerilen Tipografi:** Fredoka, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Pastel Makaron & Şekerleme Kartları, Pamuk Şeker Gradyanı, Marshmallow Hatlar, Çilek & Nane Tonları
- **Önizleme Görseli:** `05_Web_Stilleri/candy-pastel.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a delicious, comforting Candy / Pastel confectionery website homepage UI exactly matching the reference design:
- Browser Shell: Pastel candy pink bar with URL `https://cotton-candy.pastels/shop`.
- Background: Soft iridescent gradient blending cotton candy pink, gentle lavender, and airy mint green.
- Brand Header: "🍬 BONBON PASTELS" with navigation links [MACARONS], [SUGAR CLOUDS], [GIFT BOXES].
- Primary Headline: "Sweet, Fluffy &\nPastel Dreams." in elegant dusty rose (#d87093).
- Description: "Marshmallow soft hues, baby pinks, mint greens, rounded confectionery cards, and gentle comforting micro-interactions."
- Action Button: Fluffy pink pill button "EXPLORE SWEET BOXES →" with white border and soft aura glow.
- 4-Card Confectionery Bento Grid:
  * "Cotton Cloud" (Strawberry Sugar, soft pink card)
  * "Matcha Mint" (Green Tea Essence, mint green card)
  * "Lavender Sky" (Blueberry Swirl, baby blue card)
  * "Lemon Glaze" (Citrus Meringue, buttercup yellow card)
- Footer: "HAND-CRAFTED SWEETS • PASTEL HARMONY | AWWWARDS SWEET NOMINEE".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```