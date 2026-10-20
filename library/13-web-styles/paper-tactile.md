# Paper / Tactile 📜 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `paper-tactile`  
> **Marka / Konsept:** `KRAFT & PULP PRESS`  
> **Vurgu Rengi:** `#902020`  
> **Karakteristikler:** 300gsm Pamuklu Kağıt Dokusu, Metalik Ataş Klipsi, Kırmızı Mum Mühür Damgası, Vintage Tipobaskı Kartı

---

## 1. Stil Özeti ve Felsefesi
Fiziksel kağıt, mukavva ve tipo baskı dokusunu ekrana getiren Paper Tactile web tasarımı. 'FIBER, INK & PHYSICAL TEXTURE.' başlığı, üstte asılı duran metal ataş klipsi, kırmızı 'OFFICIAL EDITION 2026' mührü, 300gsm pamuklu kağıt dokulu kart ve daktilo fontlu arşiv bileti.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`paper-tactile.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F0E0C0`, `#1D1916`, `#902020`, `#706050`, `#F0F0F0`
- **Vurgu Rengi (Accent):** `#902020`
- **Önerilen Tipografi:** DM Serif Display, Space Mono
- **Görsel Kimlik Unsurları:** 300gsm Pamuklu Kağıt Dokusu, Metalik Ataş Klipsi, Kırmızı Mum Mühür Damgası, Vintage Tipobaskı Kartı
- **Önizleme Görseli:** `05_Web_Stilleri/paper-tactile.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an authentic tactile, handcrafted Paper & Print Press website homepage UI exactly matching the reference design:
- Browser Shell: Deep brown vintage bar with URL `https://atelier-tactile.press/archive`.
- Paper Sheet Container: Central card styled like real 300gsm cotton paper (#f3ede2) with subtle fiber shadows and depth.
- Physical Paper Clip: Metal silver paper clip realistically clipped to the top-left edge of the sheet.
- Brand & Wax Stamp: "KRAFT & PULP PRESS" in DM Serif Display, paired with a tilted red ink stamp "OFFICIAL EDITION 2026".
- Primary Headline: "FIBER, INK & PHYSICAL TEXTURE." in rich letterpress ink black.
- Description: "Tactile web experiences that evoke handcrafted paper stocks, vintage letterpress indentations, and warm organic materiality."
- Perforated Ticket Card: Dashed border ticket "LIMITED BATCH SPECIMEN - No. 00482 — COTTON FIBER" with dark button "INSPECT →".
- Tilted Swatch Card: Rotated white card detailing tactile attributes (300gsm cotton, blind stamps, torn edge masking).
- Footer: "PRINTED ON 100% POST-CONSUMER DIGITAL CELLULOSE | ISSUE IV • TOKYO / BASEL".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/paper-tactile.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
