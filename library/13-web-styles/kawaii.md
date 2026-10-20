# Kawaii 🐱 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `kawaii`  
> **Marka / Konsept:** `Mochi Neko Bakery`  
> **Vurgu Rengi:** `#F05090`  
> **Karakteristikler:** Sevimli Japon Kedi Maskotu, Çilekli Mochi Kartı, Sakız Pembesi Yuvarlak Hatlar, Shibuya Tatlıları

---

## 1. Stil Özeti ve Felsefesi
Japon sevimliliği ve pastel şekerleme estetiğini yansıtan neşeli Kawaii web tasarımı. 'Sweet, Soft & Full of Joy!' başlığı, sevimli kedi avatarı (🐱), çilekli mochi rulosu ürün kartı, nane yeşili rozetler, sakız pembesi (#ff529a) kabarık butonlar.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`kawaii.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F05090`, `#FEE2F0`, `#F0B0D0`, `#B0F0D0`, `#F080B0`
- **Vurgu Rengi (Accent):** `#F05090`
- **Önerilen Tipografi:** Fredoka, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Sevimli Japon Kedi Maskotu, Çilekli Mochi Kartı, Sakız Pembesi Yuvarlak Hatlar, Shibuya Tatlıları
- **Önizleme Görseli:** `05_Web_Stilleri/kawaii.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an irresistibly cute, joyful Japanese Kawaii bakery website homepage UI exactly matching the reference design:
- Browser Shell: Pastel pink browser bar with URL `https://mochi-neko.kawaii/bakery`.
- Main Card Container: Cloud-soft white card with 36px rounded corners and a vibrant pink border (#ffb6db).
- Brand Header: " Mochi Neko Bakery " in bouncy Fredoka font, with menu [SWEETS], [CAFE MENU], [MERCH], [REVIEWS].
- Badge: Mint green pill badge " SUPER ADORABLE PASTEL PARADISE".
- Primary Headline: "Sweet, Soft &\nFull of Joy!" in cheerful candy pink (#ff529a).
- Description: "Playful marshmallow curves, pastel candy palettes, cheerful rounded buttons, and heartwarming mascot charm for joyful brands."
- Primary Action: Puffy candy pink button "Order Fresh Mochis →" with soft drop shadow.
- Cute Product Card: Rounded card featuring a cute illustrated cat avatar emoji (🐱), "Strawberry Purr Roll", cute description, and price tag "¥650".
- Footer: "TOKYO • SHIBUYA SWEETS LANE | 100% KAWAII CERTIFIED AESTHETIC".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/kawaii.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
