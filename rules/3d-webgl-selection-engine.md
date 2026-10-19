# Shaz Agency Web Design — 3D & WebGL Selection & Execution Engine

This engine governs the selection, performance budgeting, and placement of WebGL, Three.js, and shader scenes from the **141 production 3D blueprints** in `library/05-3d-webgl/`. It eliminates the reflexive habit of placing a generic rotating model in the right half of every hero section.

---

## 1. Technical Taxonomy of the 141 WebGL Blueprints

| Category | Real Blueprint Files | Best For | When BANNED / Avoid | Performance Impact | Fallback Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Procedural Terrain & Elevation** | `procedural-topographic-elevation.md`, `scroll-terrain.md`, `tidal-contours.md`, `contour-anatomy.md` | Geographic analysis, outdoor exploration, mining, architecture topography. | Luxury jewelry, financial trading, software code tools. | Low-to-Medium (Perlin/Simplex vertex shader, 1 draw call). | SVG contour vector lines + subtle CSS drift. |
| **2. Particle Point Clouds & Galaxy Meshes** | `cosmic-web.md`, `wave-galaxy.md`, `starfield-close.md`, `spiral-galaxy.md`, `ring-galaxy.md`, `elliptical-galaxy.md` | Astrophysics, science labs, high-scale cloud platforms, AI neural networks. | Organic food, local craftsmanship, physical furniture. | Medium (5,000–15,000 points, additive blending, instanced). | 2D canvas particle drift or high-res space photograph. |
| **3. Optical PBR Glass & Caustics** | `pbr-dispersion-glass-stage.md`, `caustic.md`, `lens-refraction.md`, `glass-halo.md`, `opaline.md` | Haute Horlogerie, luxury perfumes, optic hardware, high-end editorial fashion. | Budget apps, low-end mobile web, utility developer portals. | Heavy (Refraction, roughness, high PBR specular computations). | CSS backdrop-filter blur + SVG caustic gradient overlay. |
| **4. Fluid, Mercury & Viscous Metals** | `mercury.md`, `liquid-aurora.md`, `liquid-glass-drops.md`, `viscous-fluid-metal.md`, `slipstream.md` | Underground music, avant-garde portfolios, creative agencies, liquid finance. | Clinical medical sites, legal compliance, government portals. | Medium-to-High (Metaballs or raymarched fragment shaders). | Video texture (`abyss.mp4`) with CSS blur overlay. |
| **5. Mechanical & CAD Exploded Assemblies** | `monolithic-wireframe-telemetry.md`, `analog-mechanism.md`, `compass.md`, `drachm.md` | Precision horology, aerospace engineering, robotics, mechanical hardware. | E-commerce apparel, wellness, food & beverage. | Medium (Multiple geometric mesh nodes, gear ratio matrices). | Static orthographic technical CAD SVG wireframe. |
| **6. Organic, Molecular & DNA Lattices** | `dna-helix.md`, `molecule.md`, `cellular-lattice.md`, `brain.md`, `tree-of-life.md` | Biotech, pharmaceutical research, genomics, synthetic biology. | Crypto casinos, financial banking, fashion retail. | Low-to-Medium (Instanced spheres, tube geometries with curve paths). | Scalable 2D SVG molecular bond diagram. |
| **7. Architectural Monoliths & Geometries** | `monolith-grove.md`, `fluted-veil.md`, `cube-drift.md`, `grain-cubes.md`, `onyx-cubes.md`, `jenga-tower.md` | Architecture practices, industrial design, concrete construction, structural art. | Fast food, pediatric healthcare, fast-fashion e-commerce. | Low (Box / cylinder geometries with anisotropic concrete shaders). | High-res monochrome architectural photography. |
| **8. 2D Canvas Shaders & Dither Fields** | `dither-field.md`, `halftone.md`, `halftone-iris.md`, `chroma-lattice.md`, `lumen-grid.md` | FinTech data, retro-computing, cyber security, developer tools, neo-brutalism. | Classical luxury watchmakers, organic tea/wine brands. | Ultra-Low (Single screen-filling quad fragment shader, 16ms budget). | Static PNG halftone dither pattern. |
| **9. Atmospheric Particle Drift** | `silver-veil.md`, `aurora.md`, `candle-aurora.md`, `mistral.md`, `sea-sparkle.md` | Meditative portfolios, hospitality, art galleries, calm editorial essays. | High-frequency trading, fast checkout stores. | Ultra-Low (Sub-pixel background particles, no heavy 3D models). | Radial CSS ambient gradient with subtle opacity pulse. |

---

## 2. Zero-WebGL Mandate (When 3D is Strictly FORBIDDEN)

Do **NOT** force WebGL into projects where it contradicts the brand's physical materiality or degrades mobile battery performance:

1. **Organic & Regenerative Agriculture:** Natural earth, sourdough bread, raw honey, biodynamic wines. A 3D model looks artificial, synthetic, and corporate. Use tactile macro photography, letterpress typography, and unbleached paper textures.
2. **Text-Dominant Literary & Editorial Journals:** Books, essays, investigative journalism. Readers want calm, uncluttered typography (`Instrument Serif`, `Neue Haas Grotesk`). A 3D canvas is visual noise.
3. **High-Speed Utility Checkout Flows:** Shopping cart drawers, checkout manifests, tax calculators. WebGL slows down thread execution and consumes memory needed for payment security.
4. **Emergency / Clinical Healthcare Services:** Patient triage, appointments, clinical trials. WebGL adds unnecessary latency and fails WCAG low-bandwidth access guidelines.

---

## 3. 3D Spatial Placements Outside the Hero

Stop reflexively locking 3D to the hero section. Deploy 3D across unexpected, purposeful touchpoints:

* **Archetype A — Background Ambient Canvas:** Subtle sub-pixel particle drift (`Three.Points`) running continuously behind text-first editorial headlines with `pointer-events-none`.
* **Archetype B — Interactive Exploded Lab (Mid-Page):** Hero is pure typography; Section 3 features a dedicated interactive 3D laboratory where users drag to inspect layers (e.g. `src/app/movement/page.tsx`).
* **Archetype C — Scroll-Scrubbed Chapter Transition:** The 3D scene only activates between Chapter 1 and Chapter 2, rotating as the user scrolls, then smoothly docking.
* **Archetype D — Interactive Product Configurator:** Located on `/collection/[slug]`, allowing collectors to spin and inspect strap materials and bezel finishes.
* **Archetype E — Closing Hallmark Seal:** Located in the footer as a subtle, interactive 3D metallic signet ring or observatory crest that tilts gently on hover.

---

## 4. Performance & Mobile Guardrails

Every 3D implementation must comply with the **16.6ms frame budget (60 FPS)**:
1. **DPR Clamping:** Always clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to prevent 4K mobile screens from rendering at 3x/4x scale and overheating.
2. **Lifecycle Discipline:** Complete geometry, material, and RAF loop disposal inside `useEffect` cleanup.
3. **Power Preference:** Declare `powerPreference: "high-performance"` on WebGLRenderer.
4. **Graceful Degradation:** Check `gl` context availability before mounting canvas; render a semantic SVG or CSS fallback if WebGL is disabled or crashes.
