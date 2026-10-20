# Vintage Americana 🥤 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `vintage-americana`  
> **Marka / Konsept:** `Golden Diner • 1955`  
> **Vurgu Rengi:** `#E01040`  
> **Karakteristikler:** Route 66 Neon Diner Tabelası, Krom Tezgahlar, Retro Kırmızı & Hardal Sarısı Palet, 50'ler Rock'n'Roll

---

## 1. Stil Özeti ve Felsefesi
1950'ler Amerikan yol kenarı diner ve rock'n'roll kültürünü yaşatan Vintage Americana web tasarımı. 'Real Shakes, Burgers & Rock 'n' Roll!' başlığı, neon ışıklı klasik diner fotoğrafı, Route 66 neon amblemi, damalı zemin ve kırmızı/sarı retro butonlar.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`vintage-americana.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#E01040`, `#150906`, `#604030`, `#806050`, `#F0F0F0`
- **Vurgu Rengi (Accent):** `#E01040`
- **Önerilen Tipografi:** Lobster, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Route 66 Neon Diner Tabelası, Krom Tezgahlar, Retro Kırmızı & Hardal Sarısı Palet, 50'ler Rock'n'Roll
- **Önizleme Görseli:** `05_Web_Stilleri/vintage-americana.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a nostalgic, authentic 1950s Vintage Americana roadside diner website homepage UI exactly matching the reference design:
- Browser Shell: Retro brown and red bar with URL `https://route66-diner.classic/menu`.
- Brand Name: "Golden Diner • 1955" in retro cursive Lobster font with drop shadow, labeled "OPEN 24 HOURS".
- Neon Badge: Glowing cyan neon bordered tag "ROUTE 66 • ORIGINAL CLASSIC" with neon sign glow.
- Primary Headline: "Real Shakes, Burgers\n& Rock ’n’ Roll!" in friendly, bold retro script with red 3D extrusion.
- Description: "Chrome countertops, neon signs, checkerboard floors, vintage Americana advertising, and mid-century diner nostalgia."
- Primary Action: Chunky retro red button "VIEW DINER SPECIALS →" with mustard yellow border and hard shadow.
- Visual Showcase: Right column displays a photograph of an authentic 1950s American diner with glowing neon signage and chrome counter stools.
- Footer: "CHICAGO TO LOS ANGELES • HIGHWAY HERITAGE | CLASSIC 50S ROADSIDE DINER".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```