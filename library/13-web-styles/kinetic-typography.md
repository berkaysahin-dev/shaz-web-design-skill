# Kinetic Typography — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `kinetic-typography`  
> **Marka / Konsept:** `VOLT KINETIC`  
> **Vurgu Rengi:** `#C0F0F0`  
> **Karakteristikler:** Devasa Dalgalı 3D Harfler, Kromatik Aberasyon Glow, Awwwards Rozeti, Etkileşimli Video Oynatıcı Barı

---

## 1. Stil Özeti ve Felsefesi
Ekranı kaplayan devasa hareketli harflerin başrolde olduğu Kinetic Typography web tasarımı. 'VOLT' ve dalgalı 'KINETIC TYPOGRAPHY STUDIO' dev metinleri, mavi/kırmızı kromatik sapma ışıltıları, 'AWWWARDS SITE OF THE DAY' puan kartı ve şık minimalist siyah grid arka planı.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`kinetic-typography.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#202030`, `#020204`, `#C0F0F0`, `#405060`, `#004050`
- **Vurgu Rengi (Accent):** `#C0F0F0`
- **Önerilen Tipografi:** Monument Extended, Syne ExtraBold, JetBrains Mono
- **Görsel Kimlik Unsurları:** Devasa Dalgalı 3D Harfler, Kromatik Aberasyon Glow, Awwwards Rozeti, Etkileşimli Video Oynatıcı Barı
- **Önizleme Görseli:** `05_Web_Stilleri/kinetic-typography.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an award-winning modern Kinetic Typography website homepage UI exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand Name: "VOLT KINETIC" with stylized neon cyan bolt icon.
- Tagline: "WE ARE VOLT — UNLEASHING MOVEMENT THROUGH TYPE" centered above the monumental typography.
- Subtitle: "PUSHING THE BOUNDARIES OF DIGITAL MOTION" positioned above the primary CTA button.
- Header Navigation: Clean monospace studio links: [STUDIO], [WORKS], [MANIFESTO], [PLAYGROUND], [CONTACT].

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Background: Minimalist obsidian black (#050507) with faint dark architectural grid lines.
- Kinetic Typography Treatment:
  * Giant, monumental letterforms dominating the screen viewport.
  * Massive bold white wordmark "VOLT" with dynamic perspective tilt and kinetic energy waves.
  * Curved ribbon typography "KINETIC TYPOGRAPHY STUDIO" arcing across the screen with cyan and magenta chromatic aberration glow edges.
  * Foreground kinetic text elements: "MOVE" (bottom left) and "CREATE" (bottom right).
- Color Palette: Pure Obsidian (#050507), Crisp White (#FFFFFF), Neon Cyan Glow (#00FFFF), Neon Magenta Accent (#FF0055).

=== COMPONENT ARCHITECTURE ===
1. Primary Call-to-Action: Glowing cyan bordered pill button "EXPLORE SHOWREEL" with subtle hover aura.
2. Floating Recognition Badge: Bottom right floating dark glass card: "AWWWARDS SITE OF THE DAY" featuring the official laurel icon, date "2018, 07-20", and "SCORE" badge.
3. Interactive Motion Metadata:
   - Bottom Left: Vertical "LOADING BAR" with segmented progress line.
   - Left Margin: Tracked vertical text "02. OUR METHOD | 03. FEATURED WORK".
   - Bottom Navigation: "01. THE AGENCY | 02. OUR METHOD | 03. FEATURED WORK" accompanied by filter chips "[UI/UX DESIGN]" and "[MOTION GRAPHICS]".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```