# Shaz Agency Web Design — Animation Injection Engine
## Direct Extraction & Mounting of the 125 Code & Chill Interactive Mechanics

This engine permanently bans **"watered-down CSS approximations"** — the bad habit where an AI coding agent replaces complex mathematical spring physics, velocity tracking, and drag inertia with simplistic 1-line CSS transitions (`transition: all 0.2s ease`, `hover:translate-x-1`).

When an interactive animation or tactile component is specified, the agent **MUST** directly extract and mount the verified component code from `library/10-interactive-animations/`.

---

## 1. The 6 Interactive Animation Categories (125 Blueprints)

The 125 production-ready animation files in `library/10-interactive-animations/` are organized into 6 distinct behavioral families:

| Category | Real Verified Files in `library/10-interactive-animations/` | Core Physics & Math | When Mandatory | Prohibited Shortcut |
| :--- | :--- | :--- | :--- | :--- |
| **1. Inertia Drag & 3D Coverflow** | `templates/monolith.md`, `templates/deck.md`, `components/cart.md`, `components/deck.md` | `stiffness: 280, damping: 24, mass: 0.8`, `cubic-bezier(0.16, 1, 0.3, 1)`, GSAP Observer + Inertia | Project showcases, visual monographs, interactive galleries | Replacing with a static Flexbox carousel or CSS scroll-snap without inertia. |
| **2. Interactive Acoustic & Sound Instruments** | `components/decibel.md`, `components/axis.md`, `templates/meridian.md` | Web Audio API / dynamic decibel scale, real-time frequency curve, logarithmic attenuation | Music festivals, audio hardware, high-end studio platforms | Replacing with a fake static progress bar or unmoving waveform graphic. |
| **3. Magnetic Attraction & Cursor Dynamics** | `components/dart.md`, `components/bead.md`, `components/dash.md`, `components/gulp.md` | Mouse velocity vector tracking, inverse square spring attraction (`distanceToCenter`), Lerp decay | Primary CTA buttons, interactive navigation nodes, focal triggers | Replacing with a simple CSS `:hover` border color change. |
| **4. Optical Caustics & Liquid Dispersion** | `components/caustic.md`, `components/decant.md`, `components/aurelia.md` | Procedural light refraction, SVG displacement filters (`feDisplacementMap`), canvas wave equations | Luxury perfumes, horology crystal, high-end editorial portfolios | Replacing with a generic CSS `backdrop-filter: blur(10px)` without chromatic caustics. |
| **5. Kinetic Typographic Orchestration** | `components/glyph.md`, `components/caddy.md`, `components/crest.md`, `templates/nero.md` | Character-by-character staggered spring release, scroll-driven skew, canvas letterpress | Hero banners, editorial section titles, festival headlines | Static uppercase text with default line-height. |
| **6. Micro-Spring Physical Interfaces** | `components/atelier.md`, `components/ember.md`, `components/gild.md`, `components/depot.md` | Sub-pixel mechanical depression, damped bounce-back, spring mass simulation | Pricing tier selectors, spec matrix tabs, checkout actions | Flat CSS click state without mechanical depression or tactile rebound. |

---

## 2. Strict Prohibition: The "Fake CSS" Ban

The following lazy AI patterns are **STRICTLY PROHIBITED** across all Shaz Agency implementations:

1. **BANNED:** Using `hover:translate-x-1 hover:translate-y-1` and calling it "spring physics".
   - **ENFORCED:** True spring dynamics with Framer Motion (`type: "spring", stiffness: 300, damping: 20, mass: 0.8`) or GSAP physics springs.
2. **BANNED:** Using a static range slider `<input type="range">` and calling it an "interactive instrument".
   - **ENFORCED:** Mounting the full physical component from `components/decibel.md` with dynamic visual states, drag resistance, and real metric calculations.
3. **BANNED:** Inventing a simplified 10-line placeholder version of a 400-line library blueprint.
   - **ENFORCED:** Reading the exact file from `library/10-interactive-animations/components/[name].md` or `templates/[name].md` and mounting its complete structure, timing curves, and state machine.

---

## 3. Global Orchestration Layer (Smooth Scroll & Magnetic Pull)

Every website implementing high-end animations must integrate the **Global Kinematic Orchestration Layer**:

### A. Smooth Inertia Scroll (Lenis / Custom Lerp Scroll)
- Wheel events must not produce abrupt, stepped jumps.
- Enforce smooth linear interpolation (`lerp(current, target, 0.08)`) with momentum decay.

### B. Magnetic Cursor Snap
- Buttons and focal elements must feature a magnetic influence zone (`60px` threshold).
- When the cursor enters the threshold, the element glides toward the cursor position using a damped spring vector:
  ```ts
  const x = (cursor.x - rect.left - rect.width / 2) * 0.35;
  const y = (cursor.y - rect.top - rect.height / 2) * 0.35;
  ```

---

## 4. Concrete Blueprint Mounting Architecture (Replacing the 3-KPI + Curve + Slider Cliché)

> **STRICT BAN ON CLONED FORMULA:** Never implement the repetitive card with 3 metric tiles + 2D canvas curve + range slider. Instead, directly mount one of these 6 living mechanical architectures:

### 1. Coverflow Gallery with Inertia (`library/10-interactive-animations/templates/monolith.md`)
* **DOM Structure:** `<div className="relative overflow-hidden w-full py-16">` containing a horizontal track of 3D tilted cards (`transform: perspective(1000px) rotateY(...) translateZ(...)`).
* **Physics & State:** Drag inertia using mouse delta velocity with friction dampening (`0.92`), wheel scrubbing, and word-by-word rising captions on active card transition.

### 2. Faceted Sliding Drawer (`library/10-interactive-animations/components/cart.md`, `templates/den.md`)
* **DOM Structure:** An architectural panel with spring-damped tab buttons that slide open a multi-tier technical specification drawer.
* **Physics & State:** Spring dynamics (`stiffness: 280, damping: 24, mass: 0.8`) with sub-pixel height interpolation and zero layout shift.

### 3. Interactive Kinetic Glyph Scrubber (`library/10-interactive-animations/components/glyph.md`)
* **DOM Structure:** High-density typographic grid where each letterform or symbol reacts dynamically to cursor distance.
* **Physics & State:** Inverse square distance calculation modulating font weight, scale, and subtle mechanical elevation.

### 4. Optical Caustic & Liquid Refraction (`library/10-interactive-animations/components/caustic.md`, `components/aurelia.md`)
* **DOM Structure:** SVG displacement filter with `<feDisplacementMap>` or WebGL fluid canvas layered behind transparent glass panels.
* **Physics & State:** Real-time cursor wave propagation with damped ripple decay (`decay: 0.96`), creating authentic optical refraction through sapphire glass.

### 5. Acoustic Decibel & Frequency Instrument (`library/10-interactive-animations/components/decibel.md`)
* **DOM Structure:** Precision decibel scale with logarithmic attenuation and real-time frequency bar analysis.
* **Physics & State:** Web Audio API oscillator/analyzer with drag velocity resistance and peak-hold indicators.

### 6. Micro-Spring Physical Interfaces (`library/10-interactive-animations/components/atelier.md`, `components/ember.md`)
* **DOM Structure:** Tactile mechanical buttons with double-bezel elevation.
* **Physics & State:** Physical sub-pixel mechanical depression (`translate-y-[2px]`) on mousedown, followed by damped spring bounce-back upon release.

---

## 5. Verification Check
Before delivering any animated component, confirm:
1. Did I copy the mathematical physics from the actual `library/10-interactive-animations/` file?
2. Does the motion utilize spring physics (mass, damping, stiffness) or Lerp inertia rather than linear CSS?
3. Is hardware-accelerated transform (`transform: translate3d`) guaranteed at 60 FPS?
4. Did I avoid the repetitive 3-KPI + 2D canvas curve + slider formula?

