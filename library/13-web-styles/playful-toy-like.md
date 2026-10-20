# Playful / Toy-like 🧸 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `playful-toy-like`  
> **Marka / Konsept:** `TOYBOX STUDIO`  
> **Vurgu Rengi:** `#F0B000`  
> **Karakteristikler:** Canlı LEGO Ana Renkleri, Şişirilmiş 3D Blok Kartı, Bouncy Kırmızı Buton, Yaratıcı Fizik Sandbox'ı

---

## 1. Stil Özeti ve Felsefesi
Oyun hamuru, LEGO blokları ve çocuksu yaratıcılığı yetişkin kalitesinde sunan Playful / Toy-like web tasarımı. 'Build, Snap & Play with Joy!' başlığı, parlak sarı 3D oyuncak kutusu kartı, kalın beyaz kenarlıklı şişirilmiş kırmızı buton ve eğlenceli fizik sandbox arayüzü.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`playful-toy-like.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#102040`, `#F0B000`, `#E03040`, `#900000`, `#F0F0F0`
- **Vurgu Rengi (Accent):** `#F0B000`
- **Önerilen Tipografi:** Fredoka, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Canlı LEGO Ana Renkleri, Şişirilmiş 3D Blok Kartı, Bouncy Kırmızı Buton, Yaratıcı Fizik Sandbox'ı
- **Önizleme Görseli:** `05_Web_Stilleri/playful-toy-like.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an infectious, high-energy Playful / Toy-like creative sandbox website homepage UI exactly matching the reference design:
- Browser Shell: Dark navy bar with bright yellow trim and URL `https://toyblock-studio.fun/play`.
- Brand Header: "🧱 TOYBOX STUDIO" in chunky Fredoka font, with menu [BLOCKS], [KITS], [CHALLENGES], [COMMUNITY].
- Primary Headline: "Build, Snap &\nPlay with Joy!" with "Play with Joy!" in bright sunny yellow (#ffbb00).
- Description: "Bold chunky primary colors, bouncy tactile 3D buttons, delightful physics, and joyful building blocks for imaginative digital playgrounds."
- Chunky Action Button: Bouncy primary red button "START BUILDING NOW →" with 4px white border and 8px extruded shadow.
- Interactive Toy Card: Bright yellow rounded card with 4px white border, tilted at 2deg:
  * Icon: Rocket emoji (🚀).
  * Title: "3D Creative Sandbox".
  * Subtext: "Over 400 physics-enabled building bricks ready to snap...".
  * CTA: "DOWNLOAD ENGINE (FREE)".
- Footer: "COLORFUL PRIMARY PALETTE • TACTILE FEEDBACK | AWWWARDS PLAYFUL NOMINEE".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/playful-toy-like.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
