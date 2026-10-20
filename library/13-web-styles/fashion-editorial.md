# Fashion Editorial 👠 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `fashion-editorial`  
> **Marka / Konsept:** `NOIR`  
> **Vurgu Rengi:** `#F03030`  
> **Karakteristikler:** Siyah-Beyaz Podyum Modeli, Devasa '26' Bodoni Numarası, Yüksek Kontrastlı Moda Mizanpajı, Kırmızı Detay

---

## 1. Stil Özeti ve Felsefesi
Vogue Runway ve Paris Moda Haftası standartlarında monokrom Fashion Editorial web tasarımı. Devasa transparan '26' rakamı arkasında yükselen 'MONOCHROME RUNWAY EDIT.' başlığı, siyah-beyaz yüksek kontrastlı podyum mankeni fotoğrafı ve kırmızı dikiş vurguları.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`fashion-editorial.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F03030`, `#060606`, `#202020`, `#B05050`, `#A02020`
- **Vurgu Rengi (Accent):** `#F03030`
- **Önerilen Tipografi:** Bodoni Moda, Montserrat
- **Görsel Kimlik Unsurları:** Siyah-Beyaz Podyum Modeli, Devasa '26' Bodoni Numarası, Yüksek Kontrastlı Moda Mizanpajı, Kırmızı Detay
- **Önizleme Görseli:** `05_Web_Stilleri/fashion-editorial.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an ultra-chic, high-fashion Monochrome Fashion Editorial website homepage UI exactly matching the reference design:
- Browser Shell: Deep black minimalist bar with URL `https://vogue-runway.atelier/fw26`.
- Split Screen Grid: High-fashion 1.1fr to 0.9fr asymmetric editorial layout.
- Brand Name: "NOIR" in tracked Bodoni Moda capitals, paired with "ISSUE 09".
- Background Numeral: Massive, semi-transparent Bodoni numeral "26" towering behind the headline.
- Primary Headline: "MONOCHROME\nRUNWAY EDIT." with "RUNWAY" rendered in dramatic italic serif and red accent.
- Description: "Asymmetric crop compositions, dramatic high-contrast couture portraiture, and unapologetic brutal typography for fashion authorities."
- Primary Action: Stark high-contrast white button "VIEW RUNWAY LOOKS" in tracked bold uppercase.
- Visual Showcase: Full-height black and white photography of a runway fashion model with dark sunglasses and striped couture pants.
- Red Ribbon Tag: Overlay tag "LOOK 04 • VELVET SILK" anchored by a red accent border.
- Footer: "PARIS FASHION WEEK | EDITORIAL DIRECTION: VISION".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/fashion-editorial.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
