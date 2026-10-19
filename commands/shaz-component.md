---
name: shaz-component
description: "TR: 125 Code & Chill animasyonundan (3D coverflow, fasetli çekmece, glif tarayıcı, optik kostik) ve 114 NameThatUI bileşeninden sıfır hap etiketli, WAI-ARIA uyumlu arayüzler üretir. / EN: Generates specialized, accessible UI components from the 125 interactive animations and 114 NameThatUI dictionary blueprints with zero pills."
---

# /shaz-component — Interactive Mechanics & Precision UI Component Generator

Use this skill when the user runs `/shaz-component [component-type]` (e.g. monolith-coverflow, sliding-drawer, glyph-scrubber, command-palette, pricing-matrix, decibel-meter) or requests a living interactive section adhering to Shaz Agency standards.

---

## 1. Absolute Anti-Pattern Bans (Laws 2, 4, 8, 20)

1. **NO "3-KPI + 2D CANVAS CURVE + SLIDER" CLICHÉ (Law 20):** Never implement the repetitive boxed card with 3 metric tiles, a 2D canvas curve, and a range slider across different websites.
2. **NO PILLS OR BADGES (Law 2):** Zero `rounded-full` decorative pills, status chips, or promotional tags.
3. **NO FORCED DOUBLE-BEZEL (Law 8):** Double-Bezel (`.bezel-tray` -> `.bezel-core`) is strictly reserved for flagship focal containers, never forced onto every card.

---

## 2. Direct Extraction of the 125 Code & Chill Interactive Mechanics

Select and mount living mechanical architectures directly from `library/10-interactive-animations/`:

### 1. 3D Coverflow Monolith (`templates/monolith.md`, `templates/deck.md`)
* Tilted 3D cards with drag inertia, wheel scrubbing, pointer tilt, and word-by-word rising captions on active card transition.
* Physics: `cubic-bezier(0.16, 1, 0.3, 1)`, GSAP Observer + Inertia, `stiffness: 280, damping: 24, mass: 0.8`.

### 2. Faceted Sliding Drawer (`components/cart.md`, `templates/den.md`)
* Spring-physics sliding drawer with layered architectural specification disclosure and sub-pixel height interpolation.

### 3. Interactive Kinetic Glyph Scrubber (`components/glyph.md`, `templates/nero.md`)
* High-density typographic grid where each letterform or symbol reacts dynamically to cursor distance with inverse square physics.

### 4. Liquid Refraction & Optical Caustics (`components/aurelia.md`, `components/caustic.md`)
* Procedural SVG displacement filter (`<feDisplacementMap>`) and canvas wave equations responding to cursor movement with damped ripple decay.

### 5. Acoustic Decibel & Frequency Meter (`components/decibel.md`, `components/axis.md`)
* Precision decibel scale with logarithmic attenuation and Web Audio API real-time frequency bar analysis.

### 6. Micro-Spring Physical Interfaces (`components/atelier.md`, `components/ember.md`)
* Sub-pixel mechanical depression (`translate-y-[2px]`) on mousedown, followed by damped spring rebound upon release.

---

## 3. NameThatUI Component Dictionary (114 Blueprints)

When standard application interfaces are needed, pull from `library/14-name-that-ui-dictionary/`:
* **Command & Navigation:** Command palettes, segmented controls, breadcrumb trails, tab switchers, toolbars.
* **Data Telemetry:** Stepped area charts, financial telemetry matrices, metric gauges, timeline scrubbers, data tables.
* **Surfaces & Overlays:** Inverted surface capability matrices, slide-out sheets, modal inspectors.

---

## 4. Explanatory Output Protocol

When executing `/shaz-component`:
1. **Component Architecture & Physics:** Explain the state machine, spring coefficients, and DOM anatomy.
2. **WAI-ARIA Accessibility:** Document the semantic roles (`role="tablist"`, `aria-selected`, `aria-expanded`), keyboard triggers, and focus rings.
3. **Production TypeScript Code:** Deliver complete, accessible, copy-pasteable Next.js / Tailwind code with zero placeholders.
