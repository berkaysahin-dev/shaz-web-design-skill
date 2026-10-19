---
name: shaz-3d
description: "TR: 141 WebGL/Three.js sahnesinden (PBR dispersiyon camı, kostik kırılma, akışkan cıva, CAD tel kafes) amatör konfetisiz, stüdyo kalitesinde 3D sahneler üretir. / EN: Generates production-grade WebGL and Three.js shader stages selecting from the 141 Shaz Agency 3D blueprints with zero toy meshes."
---

# /shaz-3d — Production WebGL & Three.js Shader Architect

Use this skill when the user runs `/shaz-3d [scene-type]` or requests interactive 3D canvases, custom shaders, or WebGL particle backgrounds adhering to Shaz Agency engineering standards.

---

## 1. Absolute Anti-Pattern Bans (Laws 3, 7, 11, 20, 22)

1. **NO TOY 3D MESHES (Law 22):** Strictly zero naive 10-line Three.js shapes (e.g. basic cylinder/cone bottle with floating confetti squares, primitive wireframe boxes, or generic spinning spheres).
2. **NO BLINKING / PULSING LIGHTS (Law 3, Law 20):** Strictly zero `animate-pulse`, blinking dots, or radar pings inside 3D stage telemetry tags.
3. **NO TEXT-POLLUTED SHADERS (Law 7):** WebGL canvas must remain purely visual and atmospheric. Never render burned-in text inside canvas textures or shaders.
4. **NO CHAOTIC MOUSE-TILT WOBBLING (Law 11):** 3D specimens must operate with calm, serene mechanical precision rather than reacting hysterically to mouse coordinates.

---

## 2. Technical Taxonomy Across 9 Production Families (141 Blueprints)

Every 3D scene must be selected from the verified blueprints in `library/05-3d-webgl/`:

1. **Optical PBR Glass & Caustics:** `pbr-dispersion-glass-stage.md`, `caustic.md`, `lens-refraction.md`, `glass-halo.md`. (Physical transmission `0.96`, IOR `1.52`, chromatic dispersion `0.04`, studio softbox lighting).
2. **Fluid, Mercury & Viscous Metals:** `mercury.md`, `liquid-aurora.md`, `liquid-glass-drops.md`, `slipstream.md`.
3. **Mechanical CAD & Exploded Assemblies:** `monolithic-wireframe-telemetry.md`, `compass.md`, `drachm.md`.
4. **Particle Point Clouds & Galaxy Meshes:** `cosmic-web.md`, `wave-galaxy.md`, `starfield-close.md`, `spiral-galaxy.md`.
5. **Procedural Terrain & Elevation:** `procedural-topographic-elevation.md`, `scroll-terrain.md`, `tidal-contours.md`.
6. **2D Canvas Shaders & Dither Fields:** `dither-field.md`, `halftone.md`, `chroma-lattice.md`, `lumen-grid.md`.
7. **Architectural Monoliths & Geometries:** `monolith-grove.md`, `fluted-veil.md`, `grain-cubes.md`, `onyx-cubes.md`.
8. **Organic & Molecular Lattices:** `dna-helix.md`, `molecule.md`, `tree-of-life.md`.
9. **Atmospheric Particle Drift:** `silver-veil.md`, `aurora.md`, `mistral.md`, `sea-sparkle.md`.

---

## 3. Zero-WebGL Mandate (When 3D is FORBIDDEN)

Do NOT force WebGL into projects where it contradicts the brand's physical materiality:
* **Organic Agriculture & Terroir:** Use tactile macro photography, letterpress typography, and unbleached paper textures.
* **Literary & Cultural Journals:** Readers demand calm typography (`Instrument Serif`, `Neue Haas Grotesk`).
* **High-Speed Utility Checkout:** WebGL adds unnecessary latency and memory overhead.

---

## 4. Performance & Mobile Budget (16.6ms / 60 FPS)

1. **DPR Clamping:** Always clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`.
2. **Full Lifecycle Disposal:** Explicitly dispose of geometries, materials, textures, and requestAnimationFrame loops inside `useEffect` cleanup return.
3. **Power Preference:** Declare `powerPreference: "high-performance"` on WebGLRenderer.
4. **Graceful Degradation:** Provide an atmospheric CSS gradient fallback if WebGL context is lost.

---

## 5. Explanatory Output Protocol

When executing `/shaz-3d`:
1. **Shader & Math Breakdown:** Explain the vertex/fragment shader equations, transmission physics, and lighting vectors.
2. **Performance Budgeting:** Detail draw calls, buffer geometries, particle limits, and GPU memory footprint.
3. **Production Next.js / Three.js Code:** Deliver complete, executable TypeScript code with zero placeholders.
