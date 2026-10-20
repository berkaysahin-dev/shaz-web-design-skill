# Product Gallery

![Product Gallery](product-gallery.webp)

---

### Specification & Assets
* **Category:** `3D Section`
* **Theme:** `AI Studio`
* **Tech Stack:** `HTML, Three.js, Planar Reflection`
* **Accent Color:** `#cbb682`
* **Status:** `Kapsamlı Tam Mimari Prompt (6000+ Karakter)`
* **Live MP4 Video:** [Videoyu Aç / İndir (product-gallery.mp4)](https://www.vividsites.app/media/product-gallery.mp4)
* **Preview Image:** [product-gallery.webp](product-gallery.webp)

---

## Production Prompt (for Cursor, Claude Code, v0, Lovable)

> Copy and paste the prompt specification below into your AI coding assistant:

```markdown
Build a high-end 3D cinematic web application called "PRODUCT GALLERY" — theme: "AI Studio".
Deliver it using React + Vite + Three.js (@react-three/fiber or standalone Three.js) + Tailwind CSS.
The entire application is a unified 100vh viewport stage with a Three.js WebGL canvas running underneath an editorial liquid glass HUD.

Source Video / Texture: https://www.vividsites.app/media/product-gallery.mp4
Accent Color: #cbb682
Stack Tags: HTML, Three.js, Planar Reflection

═══ 1. RENDER PIPELINE & 3D ENVIRONMENT ═══
- Viewport: Full-screen 100vw, 100vh fixed Canvas with ACESFilmicToneMapping and sRGBEncoding.
- Postprocessing Effects:
  * Subtle UnrealBloom (intensity 0.35, radius 0.4, threshold 0.85) to make #cbb682 highlights gently bloom.
  * Chromatic Aberration with radial falloff (offset [0.0015, 0.0015]) on screen edges.
  * Subtle vignette: darkens the viewport perimeter to focus attention on the center.
- Materials & Shading (Dispersion Glass / PBR):
  * MeshPhysicalMaterial:
    transmission: 0.96, roughness: 0.04, ior: 1.54, thickness: 1.2,
    reflectivity: 0.8, dispersion: 0.06, clearcoat: 1.0, clearcoatRoughness: 0.05
  * Studio Environment: Studio HDRI reflections combined with a custom point light tinting specular edges with #cbb682.
- Video Texture Integration:
  * The source video (https://www.vividsites.app/media/product-gallery.mp4) is mapped onto a subtle curved backdrop plane or used as a dynamic environmental reflection map with muted luminosity.

═══ 2. INTERACTIVE CURSOR & SCROLL KINEMATICS ═══
- Cursor Parallax Physics:
  * Track normalized mouse coordinates `(mouse.x, mouse.y)` in range [-1, 1].
  * Damped spring physics: Lerp the 3D camera rotation and target position toward cursor offset with damping factor 0.05:
    camera.rotation.y += (mouse.x * 0.15 - camera.rotation.y) * 0.05;
    camera.rotation.x += (-mouse.y * 0.15 - camera.rotation.x) * 0.05;
  * On mobile/touch devices: Gracefully fallback to device orientation gyroscope (DeviceOrientationEvent) or subtle automated continuous orbiting.
- Scroll Scrubbing:
  * Scrolling smoothly flies the camera along a 3D bezier curve, rotating the focal subject and adjusting depth of field.

═══ 3. EDITORIAL HUD & LIQUID GLASS UI (OVERLAY LAYER) ═══
Floating over the 3D canvas (z-index 20), an ultra-refined user interface:
1. Glass Header:
   - Left: Wordmark "PRODUCT GALLERY" in sharp geometric typography.
   - Center: Floating pill menu (Overview, Materiality, Acoustics, Specifications).
   - Right: Interactive button ("Order Edition").
2. Bottom Left Telemetry Panel:
   -    - 3. Bottom Right Sound & View Controls:
   - Interactive soundwave button (Mute / Unmute) with animated canvas visualizer.
   - Wireframe toggle button that switches the 3D subject between PBR glass and holographic wireframe.
4. Interactive Spec Modal:
   - Clicking any hotspot on the 3D subject smoothly pans the camera and opens a frosted glass spec drawer.

═══ 4. DESIGN TOKENS & CSS SPEC ═══
- CSS Class:
  .glass-panel {
    background: rgba(12, 12, 16, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.15);
  }
- Colors: Primary #08080a, Accent #cbb682, Border rgba(255,255,255,0.08).

═══  THE SIX SILENT FAILURES ═══
1. PLASTIC MATERIALS: Do not use default MeshStandardMaterial with high roughness. Glass must have real transmission and specular dispersion.
2. JARRING CAMERA SNAPS: Every camera translation must be smoothed via damping.
3. HIGH GPU OVERHEAD: Limit renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0)) to preserve 60fps on retina displays.
4. CLUTTERED CENTER: Keep the central 60% of the screen free of solid text cards so the 3D model is visible.
5. NO FALLBACK: Ensure a high-resolution poster frame loads immediately while Three.js assets initialize.
6. NO DEFAULT CURSORS: Hide standard cursor and implement a custom smoothed circular cursor with mix-blend-mode: difference.
═══ 5. ARCHITECTURAL & INTERACTION DIRECTIVES ═══
- Clean Typographic Primacy: Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- Zero Slop: Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Keep the central viewport clean so the 3D subject and visuals breathe.
- Physics & Smoothness: Lenis smooth scroll combined with damped pointer parallax tracking cursor coordinates with spring physics.
```
