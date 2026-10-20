# Spatial UI — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `spatial-ui`  
> **Marka / Konsept:** `NOVA SPATIAL`  
> **Vurgu Rengi:** `#64D2FF`  
> **Karakteristikler:** VisionOS Derinlik Katmanları, Buzlu Cam (Glassmorphism), Çok Renkli Ortam Işığı, 3D Varlık Kartları

---

## 1. Stil Özeti ve Felsefesi
Apple VisionOS arayüz standartlarından ilham alan gelecek nesil Spatial UI web tasarımı. 'EXPERIENCE THE FUTURE OF SPATIAL COMPUTING' başlığı, çok renkli ambiyans ışığı kırılımlı buzlu cam (frosted glass) kartlar, Z ekseninde süzülen 3D varlık kütüphanesi, analitik grafiği ve takım sohbet penceresi.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`spatial-ui.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#64D2FF`, `#080B1C`, `#305070`, `#705080`, `#603050`
- **Vurgu Rengi (Accent):** `#64D2FF`
- **Önerilen Tipografi:** SF Pro Display, Plus Jakarta Sans, Inter
- **Görsel Kimlik Unsurları:** VisionOS Derinlik Katmanları, Buzlu Cam (Glassmorphism), Çok Renkli Ortam Işığı, 3D Varlık Kartları
- **Önizleme Görseli:** `05_Web_Stilleri/spatial-ui.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a cutting-edge, ultra-polished Spatial UI website landing page inspired by VisionOS exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand Name: "NOVA" featuring an iridescent multi-color gradient glow.
- Primary Headline: "EXPERIENCE THE FUTURE OF SPATIAL COMPUTING" in pristine white typography with subtle optical kerning.
- Subtitle: "Navigate, create, and collaborate in an immersive 3D workspace. Step beyond the screen."
- Browser Window Frame: Modern dark macOS/Chrome browser mockup with clean title bar, URL `nova.spatial.com`, profile avatar, and search bar.
- Top Navbar: Frosted navigation capsule with tabs [Features], [Solutions], [Blog], [Community].

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Background: Deep cosmic space (#08090E) with radiant multi-color ambient lighting: vibrant magenta, cyan, amber, and indigo light glows radiating behind spatial panels. Subtle 3D perspective floor grid.
- Spatial Glassmorphism (VisionOS depth):
  * Ultra-clear frosted glass panels with dynamic light refraction and specular border highlights:
    `background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 20px;`
  * Multi-plane Z-axis layering: cards physically floating in front of and beside each other with distinct soft ambient drop shadows.
- Floating Glass Orbs: Iridescent, translucent glass cubes and spheres floating freely in 3D space with colored reflections.

=== COMPONENT ARCHITECTURE ===
1. Primary Call-to-Action: Centered frosted pill button "GET STARTED" with subtle inner highlight, paired with a clean text link "Learn More".
2. Floating Spatial Cards (Z-Plane Layering):
   - Card 1 (Top Right): "3D Assets" library showcase displaying floating 3D geometric meshes (wireframe cube, geometric faceted gem, chrome reflective sphere, crystal pyramid).
   - Card 2 (Mid Right): "Analytics" card with real-time green/cyan area spline graph, "+129%" badge, and active metric "15.92k".
   - Card 3 (Bottom Right): "Team Chat" floating widget with member avatars, speech bubble, and input field with send arrow.
   - Card 4 (Left): "Projects" launcher with [Design], [Develop], [Launch] glass tiles, and user badge "Profile: Alex Chen".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/spatial-ui.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
