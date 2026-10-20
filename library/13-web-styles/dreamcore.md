# Dreamcore ️ — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `dreamcore`  
> **Marka / Konsept:** `DREAMS & LIMINAL`  
> **Vurgu Rengi:** `#E09070`  
> **Karakteristikler:** Bulanık Liminal Koridor, Nostaljik CRT TV (VHS), Rüya Gibi Pastel Bulutlar, Ethereal Cam Kartlar

---

## 1. Stil Özeti ve Felsefesi
Rüya gibi liminal atmosferi ve nostaljik çocukluk anılarını yansıtan Dreamcore web tasarımı. 'WANDER THROUGH THE BLURRY HALLWAYS OF MEMORY.' başlığı, günbatımı renkli pastel rüya bulutları, statik parazitli eski tüplü CRT televizyon ('VHS RECALL'), flu otel koridoru ve gece tren istasyonu hafıza kartları.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`dreamcore.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#A0A0C0`, `#F0C0B0`, `#E09070`, `#A05040`, `#E0D0E0`
- **Vurgu Rengi (Accent):** `#E09070`
- **Önerilen Tipografi:** Plus Jakarta Sans, Quicksand, Outfit
- **Görsel Kimlik Unsurları:** Bulanık Liminal Koridor, Nostaljik CRT TV (VHS), Rüya Gibi Pastel Bulutlar, Ethereal Cam Kartlar
- **Önizleme Görseli:** `05_Web_Stilleri/dreamcore.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an ethereal, nostalgic Dreamcore aesthetic website homepage UI exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand / Category Navigation: Top bar with [DREAMS], [LIMINAL], [NOSTALGIA], [EXPLORE], [ARCHIVE], search icon, and user avatar.
- Primary Headline: "WANDER THROUGH THE BLURRY HALLWAYS OF MEMORY." centered in elegant, luminous sans-serif.
- Subtitle: "A digital sanctuary for lost thoughts, fleeting moments, and the beauty of liminal spaces."
- Primary Action: Centered glowing lavender pill button "BEGIN YOUR JOURNEY" with ethereal halo light.

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Atmosphere: Dreamlike, soft-focus liminal aesthetic. Hazy pastel clouds blending lavender (#C4B5FD), soft peach (#FDBA74), blush pink (#FBCFE8), and gentle sky blue.
- Lighting: Diffused god rays, soft chromatic rainbow lens flares, sparkling 4-pointed stars () drifting through the atmosphere.
- Glassmorphism: Ultra-smooth frosted translucent cards with milky white borders and soft diffused drop shadows:
  `background: rgba(255, 255, 255, 0.45); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.7); border-radius: 20px;`

=== COMPONENT ARCHITECTURE ===
1. Interactive Memory Carousel (Floating Translucent Cards):
   - Card 1: "AFTERGLOW GARDEN" with soft-focus pink wildflower path at sunset.
   - Card 2: "EMPTY HALLWAY" with eerie, warm blurred fluorescent orange corridor and vanishing stairs.
   - Card 3: "CLOUD MEMORIES" with fuzzy cotton clouds in pastel sky.
   - Card 4: "VHS RECALL" featuring a vintage 90s CRT television set displaying flickering white static noise.
   - Card 5: "MIDNIGHT STATION" showcasing an empty subway carriage with soft blue interior lighting.
2. Bottom Strip & Footer:
   - Left Label: "LATEST RECOLLECTIONS" with preview thumbnails.
   - Right Menu: Minimalist links [ABOUT], [CONTACT], [LEGAL] beside dream sparkle icons.

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/dreamcore.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
