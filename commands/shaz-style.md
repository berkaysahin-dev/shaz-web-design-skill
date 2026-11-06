---
name: shaz-style
description: "TR: Arayüzleri 40 otantik Shaz Agency tasarım stiline (İsviçre Faydacılığı, Neobrutalizm, Y2K, Asit Grafik, Bento Grid, Spatial UI) taktil derinlikle dönüştürür. / EN: Applies and transforms layouts into any of the 40 authentic Shaz Agency design styles with calibrated typography and tactile depth."
---

# /shaz-style — Authentic Web Design Style Synthesizer

Use this skill when the user runs `/shaz-style [style-name] [component or layout]` or requests an interface transformed into a specific architectural aesthetic.

---

## 1. Absolute Anti-Caricature & Tactile Depth Laws (Laws 1, 19, 20)

1. **NO CARICATURE DESIGNS (Law 19):** Never reduce complex design movements into flat, childish clichés (e.g. treating Neobrutalism as a flat yellow box with a 4px black line, or Swiss design as generic unstyled text).
2. **NO SYNTHETIC SLASHES (Law 19):** Strictly zero double slashes (`//`) in titles, tags, headings, or navigation (e.g., `PROJECT // 01`). Use clean editorial punctuation (`01. PROJECT`, thin hyphens, or pure whitespace).
3. **MANDATORY PROCEDURAL NOISE (Law 19):** Every style must incorporate procedural tactile noise (`<feTurbulence>` SVG overlay) at 3–5% opacity to eliminate artificial vector flatness.
4. **HIGH-DENSITY 1-SENTENCE COPY (Law 1):** Maximum 1 dense sentence per section. If the design speaks for itself, use zero body sentences.

---

## 2. Supported Style Categories (40 Total)

Selected from the master blueprints in `library/13-web-styles/`:

| Style Category | Key Material & Typographic Reality |
| :--- | :--- |
| **Swiss Utilitarian** | Sub-pixel optical baseline alignment, high-contrast scale (120px display vs 11px micro-telemetry), hairline borders (`rgba(0,0,0,0.12)`). |
| **Neobrutalism** | Tactile risograph/newsprint grain overlay, offset hard shadows with active spring click depression, dense monospaced data matrices. |
| **Acid Graphics** | Distorted raster dither grids, procedural ASCII shaders, audio frequency ribbons, and brutalist industrial printing plates. |
| **Haute Horlogerie** | Sapphire crystal refraction, brushed titanium specular highlights, calm 60s mechanical tourbillon kinematics. |
| **Spatial UI / Vision** | Liquid glass refraction, specular highlight borders, depth elevation planes without heavy dark boxes. |
| **Flat Bento Grid** | Asymmetric modular proportions, single hairline dividers, high visual rhythm. |
| **Luxury Editorial** | High-contrast editorial serifs (`Instrument Serif`), italicized emphasis, expansive negative space. |

---

## 3. Procedural Noise Layer Specification

```css
.tactile-noise-layer {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.045;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

---

## 4. Output Protocol (compact)

Run the Variation Engine first (`rules/variation-engine.md`). Print only the Design Signature (`SKILL.md` §5), then complete, unabridged, copy-pasteable Next.js (App Router) + Tailwind CSS + Framer Motion code with zero placeholders and zero unresolved TODOs. No essays, no list of laws.
