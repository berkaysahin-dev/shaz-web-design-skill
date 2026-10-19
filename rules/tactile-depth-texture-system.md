# Shaz Agency Web Design — Tactile Depth & Anti-Caricature System

This rule specification eliminates **"style caricature"** — the tendency of AI agents to reduce nuanced design movements into flat, simplistic, cartoonish clichés (e.g. thinking Neobrutalism is just a flat yellow box with a 4px black line, or Swiss design is just a Helvetica heading on white).

---

## 1. The Anti-Caricature Rule

Every design style must possess **material depth, typographic weight, and textural presence**:

| Design Style | Banned Caricature (Forbidden Lazy Pattern) | Enforced Material Reality (Awwwards Standard) |
| :--- | :--- | :--- |
| **Neobrutalism** | Plain yellow/cyan boxes with 4px borders looking like a child's toy. | **Tactile risograph/newsprint grain overlay**, offset hard shadows with active spring click depression, dense monospaced data matrices, and bold non-aligned editorial typography. |
| **Swiss Utilitarian** | Plain unstyled Helvetica text with default padding. | **Sub-pixel optical baseline alignment**, high-contrast scale (120px display vs 11px micro-telemetry), generous negative voids, and hairline borders (`rgba(0,0,0,0.12)`). |
| **Acid Graphics** | Random neon green text on black. | **Distorted raster dither grids**, procedural ASCII shaders (`acid-rain.md`), audio frequency ribbons, and brutalist industrial printing plates. |
| **Haute Horlogerie** | Generic dark mode with gold text. | **Sapphire crystal refraction**, brushed titanium specular highlights, calm 60s mechanical kinematics, and real-time atelier workbench telemetry. |

---

## 2. Absolute Ban on Synthetic Slashes (`//`)

> **STRICT PROHIBITION:** Never scatter synthetic double slashes (`//`) across titles, navigation bars, section kickers, or button labels (e.g., `PROJECT // 01`, `KRONOS // ARCHITEKTUR`, `RESONANCE // PROTOCOL`).
> - Slashes look like amateur AI clichés and clutter visual reading flow.
> - Replace with clean editorial punctuation: unadorned typography, period delimiters (`01. PROJECT`), thin hyphens (`-`), or pure negative space.

---

## 3. Strict 1-Sentence High-Density Copy (Zero Fluff)

> **STRICT ENFORCEMENT:** No section may contain more than **one single, high-density, authoritative sentence**.
> - Long marketing descriptions, explanatory filler paragraphs, and corporate jargon are permanently banned.
> - If a concept can be conveyed through layout, data metrics, typography, or interaction, eliminate the paragraph entirely.

---

## 4. Mandatory Tactile Texture & Noise Architecture

A webpage must never render as flat, dead vector pixels. Every project must include a **procedural tactile grain layer**:

```css
/* Procedural Noise Overlay */
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

On dark themes, use `mix-blend-mode: overlay` at 3–5% opacity. On light paper themes, use `mix-blend-mode: multiply` at 4–6% opacity to simulate physical unbleached paper fibers.
