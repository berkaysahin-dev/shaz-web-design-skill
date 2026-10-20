# Newspaper / Tabloid 🗞️ — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `newspaper-tabloid`  
> **Marka / Konsept:** `THE DAILY BROADSHEET`  
> **Vurgu Rengi:** `#8B0000`  
> **Karakteristikler:** Çok Sütunlu Gazete Mizanpajı, Tarihi Linotip Fotoğrafı, Piyasa Verileri, Hava Durumu Widget'ı

---

## 1. Stil Özeti ve Felsefesi
Geleneksel matbaa gazeteciliği ve modern animasyonlu gazete mizanpajı. 'THE DAILY BROADSHEET' devasa serif başlığı, 'HISTORIC ARCHITECTURAL BREAKTHROUGH' manşeti, daktilo ve matbaa arşiv fotoğrafı, 3 sütunlu haber gridi ve piyasa/hava durumu yan paneli.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`newspaper-tabloid.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#8B0000`, `#E7E3D8`, `#A08060`, `#304050`, `#302020`
- **Vurgu Rengi (Accent):** `#8B0000`
- **Önerilen Tipografi:** Playfair Display, Newsreader
- **Görsel Kimlik Unsurları:** Çok Sütunlu Gazete Mizanpajı, Tarihi Linotip Fotoğrafı, Piyasa Verileri, Hava Durumu Widget'ı
- **Önizleme Görseli:** `05_Web_Stilleri/newspaper-tabloid.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an authentic, prestigious vintage Newspaper / Tabloid broadsheet website homepage UI exactly matching the reference design:
- Browser Shell: Vintage dark leather bar with URL `https://the-daily-broadsheet.press/frontpage`.
- Paper Stock Canvas: Authentic aged newsprint texture tone (#e8e3d9) with double black dividing lines.
- Masthead Header:
  * Top Metadata: "WEATHER: FAIR 18°C • NEW YORK CITY | VOL. CLVIII • NO. 54,210 | PRICE: $1.50 DAILY".
  * Main Broadsheet Title: "THE DAILY BROADSHEET" in monumental Playfair Display Black serif typography.
- Frontpage 3-Column Grid:
  * Column 1 (Lead Story): Headline "HISTORIC ARCHITECTURAL BREAKTHROUGH ANNOUNCED IN MODERN CAPITAL" with justified serif paragraphs.
  * Column 2 (Photo & Commentary): Black and white newsprint photograph of historic linotype print machinery, captioned "Figure 1.2: Typewriters and linotype machinery...", with "EDITORIAL NOTEBOOK".
  * Column 3 (Sidebar Gazette): Briefs for "MARKETS RALLY", "CULTURE GAZETTE", and "WEATHER OUTLOOK".
- Footer Strip: "PRINTED ON NEWSPRINT ARCHIVE REPLICA | DESIGNEDFOR EDITORIAL NEWSROOMS — VISION WEB DESIGNER".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/newspaper-tabloid.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
