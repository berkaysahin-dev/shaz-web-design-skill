# Shaz Agency Web Design — Contextual Asset & Style Activation Matrix

This master decision engine guides autonomous AI agents on **WHERE**, **WHEN**, and **WHICH** animations, typography pairings, vector iconography, and 3D WebGL scenes to activate based on project industry, operational context, and audience posture.

---

## 1. Sector-to-Asset Activation Rules

| Project Sector | Display & Body Typography | Color Materiality & Accents | 3D WebGL Scene Blueprints | Kinetic Motion & Animations | Iconography Standard |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Haute Horlogerie & Luxury Manufactures** | **Druk Wide 700** (Display) + **Neue Haas Grotesk 330** (Subhead) + **Plus Jakarta Sans** (Body) + **JetBrains Mono** (Specs) | Obsidian (`#070709`), Titanium Slate, Warm Champagne (`#C5A880`) | `pbr-dispersion-glass.md`, `caustic-liquid-mercury.md`, `analog-mechanism.md`, `faceted-gem.md` | `centennial-spine-scrubber.md`, `smooth-60s-rotation`, `magnetic-liquid-glass-card.md` | Lucide luxury strokes (compass, shield, key, crown) `1.5px` monochrome |
| **FinTech, Asset Management & Quant** | **JetBrains Mono** (Primary Telemetry) + **Spline Sans** (Body) + **Druk Wide** (Hero Header) | Basalt (`#090A0E`), Ice Slate (`#F8FAFC`), Subtle Jade or Platinum Hairline | `cad-wireframe-inspector.md`, `chroma-lattice.md`, `dither-field.md`, `procedural-topographic.md` | `stepped-area-chart-reveal.md`, `odometer-roll-up.md`, `sub-pixel-counter-reveal.md`, `magnetic-kpi-card.md` | Lucide quantitative strokes (trending-up, bar-chart, activity, lock, database) `1.5px` |
| **Developer Tools, Cloud & AI Infrastructure** | **JetBrains Mono** (Code & Telemetry) + **Outfit** (UI Controls) + **Spline Sans** (Narrative) | Deep Void (`#08090C`), Monochromatic Titanium, Ice Blue / Electric Cyan (`#00F0FF`) | `neural-pulse.md`, `dna-helix.md`, `signal-array.md`, `wormhole.md`, `lumen-grid.md` | `command-palette-cmdk.md`, `terminal-typing-stream.md`, `segmented-tab-slider.md`, `accordion-disclosure.md` | Lucide dev strokes (terminal, cpu, git-branch, layers, server, code) `1.5px` |
| **Underground Rave, Acid Tekno & Cyber-Pop** | **Tilt Warp** (Creative Display) + **Druk Wide 700** + **Monospace Sci-Fi** | Pitch Black (`#0A0A09`), Toxic Acid Green (`#91FE01`), Hot Magenta (`#FF007F`), Molten Chrome | `acid-rain.md`, `viscous-fluid-metal.md`, `plasma-burst.md`, `vortex.md` | `sub-pixel-glyph-scrubber.md`, `perspective-wireframe-floor`, `tape-ribbon-skew` | Symmetrical tribal vector glyphs, crosshair, sound-wave `1.75px` |
| **Architectural & Industrial Design** | **Neue Haas Grotesk 330** (Editorial Display) + **Plus Jakarta Sans** (Body) + **Monospace Dimensions** | Raw Concrete (`#E5E5E5`), Basalt (`#18181B`), Paper Beige (`#F4F1EA`) | `orthographic-cad-elevation.md`, `monolith-grove.md`, `fluted-veil.md`, `cube-drift.md` | `smooth-lerp-scroll.md`, `horizontal-case-study-slider.md`, `split-curtain-reveal.md` | Lucide architectural strokes (maximize, grid, box, frame, ruler) `1.5px` |
| **Biotech, Life Sciences & Medical** | **Spline Sans** (Primary Narrative) + **Plus Jakarta Sans** (Body) + **JetBrains Mono** (Clinical Tolerances) | Clinical White (`#FFFFFF`), Deep Petroleum (`#0F172A`), Calm Sage Mint (`#D1F0E9`) | `dna-helix.md`, `molecule.md`, `cellular-lattice.md`, `brain.md` | `multi-step-progressive-wizard.md`, `accessible-form-validation.md`, `patient-telemetry-stream.md` | Lucide clinical strokes (activity, heart-pulse, dna, shield-check) `1.5px` |

---

## 2. Component Activation Protocol (When to use Which Blueprint)

### 2.1 Navigation & Overlays
* **When page has <= 4 sections:** Deploy `02-navigation/minimal-overlay.md` or floating single-bezel island.
* **When page has complex hierarchy or docs:** Deploy `14-name-that-ui-dictionary/command-palette.md` (CMDK search overlay) paired with sticky breadcrumb spine.

### 2.2 Kinetic Micro-Interactions (Code & Chill Blueprints)
* **For numbers, metrics, or financial metrics:** ALWAYS activate `sub-pixel-counter-reveal.md` or `odometer-roll-up.md`. Never render static lifeless numbers.
* **For typography and font weight sliders:** Deploy `sub-pixel-glyph-scrubber.md` with drag inertia.
* **For flagship cards and modal stages:** Deploy `magnetic-liquid-glass-card.md` with spring kinematics (`stiffness: 280, damping: 24`).

### 2.3 3D WebGL vs Ambient Canvas
* **Hero Specimen:** Activate one dedicated hero 3D shader (e.g. `caustic-liquid-mercury.md` or `dna-helix.md`).
* **Section Transitions:** Use ambient background particles (`Three.Points` with additive blending) rather than heavy multi-scene WebGL contexts to respect the **16.6ms frame budget (60 FPS)**.
