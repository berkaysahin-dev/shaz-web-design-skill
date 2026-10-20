# Neobrutalism — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `neobrutalism`  
> **Marka / Konsept:** `NEO*LABS`  
> **Vurgu Rengi:** `#F0F070`  
> **Karakteristikler:** Kalın 4px Siyah Kenarlıklar, Sert 90° Gölgeler, Canlı Sarı ve Camgöbeği Bloklar, Çıkartma Rozetler

---

## 1. Stil Özeti ve Felsefesi
Yüksek kontrastlı, cesur ve ödüllü Neobrutalist web sitesi tasarımı. 4px kalınlığında sert siyah kenarlıklar, canlı neon sarı (#FFFF55) ve elektrik camgöbeği (#00FFFF) arka plan blokları, 'UNLEASH CREATIVITY' devasa başlığı, eğik çıkartma etiketleri ('AWARDS 2024 WINNER', 'HOT', 'NEW!', 'FEATURED') ve asimetrik proje ızgarası.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`neobrutalism.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F0F070`, `#FAFAFA`, `#00F0F0`, `#A0C0D0`, `#70F0F0`
- **Vurgu Rengi (Accent):** `#F0F070`
- **Önerilen Tipografi:** Lexend Mega, Space Grotesk, Archivo Black
- **Görsel Kimlik Unsurları:** Kalın 4px Siyah Kenarlıklar, Sert 90° Gölgeler, Canlı Sarı ve Camgöbeği Bloklar, Çıkartma Rozetler
- **Önizleme Görseli:** `05_Web_Stilleri/neobrutalism.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an award-winning, high-conversion modern website homepage in pure Neobrutalism style exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand Name: "NEO*LABS"
- Primary Headline: "UNLEASH CREATIVITY" enclosed in a thick bordered high-voltage pastel yellow (#FFFF55) banner.
- Subtitle: "RADICAL WEB SOLUTIONS." in bold uppercase sans-serif.
- Header Navigation: Top navbar with dark capsule tabs: [Home], [Works], [About], [Contact], [Services].

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Borders: Heavy 4px solid pure black borders (#000000) on all cards, buttons, badges, and containers.
- Shadows: Hard 90-degree offset drop shadows (box-shadow: 6px 6px 0px #000000; no blur).
- Color Palette:
  * Primary Accent: High-voltage pastel yellow (#FFFF55)
  * Secondary Accent: Electric Cyan (#00FFFF)
  * Base Background: Crisp White (#FFFFFF) with high-contrast black gridlines
  * Warning/Hot Badge: Bright Coral Red (#FF5555)
- Typography: Heavy, bold sans-serif display typography (Lexend Mega or Archivo Black) with tight letter-spacing.

=== COMPONENT ARCHITECTURE ===
1. Hero Showcase: Asymmetric split layout. Left side features the massive "UNLEASH CREATIVITY" banner, star badge "AWARDS 2024 WINNER", and an abstract geometric graphic block.
2. Selected Projects Grid:
   - "PROJECT: ALPHA" card: Electric cyan background (#00FFFF), bold typography, custom geometric artwork, "AWWWARDS" tilted sticker badge.
   - "PROJECT: BETA" card: Pastel yellow background (#FFFF55), code editor window illustration with </> icons, "HOT" tag.
   - "PROJECT: GAMMA" card: Modern UI/UX graphic container with pill buttons.
   - Right Feature Card: High-contrast dark viewport preview showing a sleek monitor mockup with "DIGITAL BRANDING".
3. Interactive Badges & Stickers: Tilted sticker chips scattered across borders ("NEW!", "AWARD WINNING", "FEATURED", "HOT") rotated between -8deg and 12deg.
4. Action Buttons & Footer: Chunky rectangular buttons with hard black drop shadows ("VIEW WORKS", "GET STARTED"), social media circle icons (Facebook, YouTube, X), and clean copyright footer.

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```