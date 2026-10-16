---
name: shaz-3d
description: Generates production-grade WebGL and Three.js shader stages selecting from the 141 Shaz Agency 3D blueprints (PBR dispersion glass, caustics, liquid mercury, CAD wireframe inspectors, procedural terrain). Activated via /shaz-3d.
---

# /shaz-3d — Production WebGL & Three.js Shader Generator

Use this skill when the user runs `/shaz-3d [scene-type]` or requests interactive 3D canvases, custom shaders, or WebGL particle backgrounds.

## Supported 3D Blueprint Categories (141 Total):
- **Liquid & Optical Physics:** PBR chromatic dispersion glass, interactive caustics, mercury fluid surfaces, iridescent oily sheens.
- **Hardware & Engineering:** CAD exploded wireframe assemblies, rotating horology tourbillon cages, anodized metallic chassis models.
- **Procedural Environments:** Volumetric noise terrains, galaxy stellar point clouds, topological contour lines, DNA helical strands.
- **Ambient Canvas Backdrops:** Sub-pixel floating particles, silky depth vignettes, mouse-inertial ambient camera orbits.

## Mandatory Technical Requirements:
1. **Performance Budget:** Must maintain consistent 60 FPS (frame budget <= 16.6ms) with mobile DPR clamping (`Math.min(window.devicePixelRatio, 2)`).
2. **Text-Free Clean Canvas:** WebGL canvas must be purely visual/atmospheric. Never render burned-in text inside canvas or shaders (Law 7).
3. **Graceful Fallback:** Include CSS radial gradient and backdrop-blur fallback for non-WebGL environments.
4. **Lifecycle Discipline:** Proper cleanup of geometry, materials, and requestAnimationFrame loops on unmount (`useEffect` return hook).

## Explanatory Output Protocol (Mandatory in Antigravity, Claude Code, and Codex):
When executing this command, you must structure your output with clear explanations:
1. **Shader & Math Breakdown:** Explain vertex/fragment shader formulas, light positioning, and material properties.
2. **Performance & Optimization Notes:** Detail buffer geometries, draw calls, particle limits, and GPU memory management.
3. **Production Next.js / Three.js Code:** Output complete, self-contained React Three Fiber or vanilla Three.js component code with zero placeholders.
