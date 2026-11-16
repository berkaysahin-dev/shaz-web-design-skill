# Shaz Agency Web Design — Accessibility, Performance & Motion Physics

High-end design is rigorously accessible, performant, and structurally sound.

---

## 1. Accessibility (WCAG 2.1 AA Compliance)

1. **Semantic DOM Hierarchy:**
   - Single `<h1>` per page.
   - Logical heading progression (`<h1>` → `<h2>` → `<h3>`) without skipping levels.
   - Native HTML interactive elements (`<button>`, `<a>`, `<input>`) instead of clickable `<div>` elements.

2. **Contrast & Color Safety:**
   - Text contrast ratio must meet or exceed 4.5:1 against its background.
   - Information must never be conveyed by color alone.
   - High-contrast states supported for both light and dark modes.

3. **Keyboard & Focus Architecture:**
   - All interactive elements are fully reachable via standard `Tab` navigation.
   - Visible `:focus-visible` styling (`ring-2 ring-black/80 dark:ring-white/80 ring-offset-2`).
   - Modals and drawers implement active focus traps with `Escape` key listeners.

4. **Screen Reader Optimization:**
   - SVG vector icons carry explicit `aria-hidden="true"`, while parent buttons carry descriptive `aria-label` attributes.
   - Live regions (`aria-live="polite"`) for dynamic feedback.

---

## 2. Motion Performance & Physics

1. **Hardware-Accelerated Properties Only:**
   - Strictly animate `transform` and `opacity`.
   - Never animate layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`).

2. **Spring Physics Over Flat Durations:**
   - Use physical spring equations (damping, stiffness, mass) via Framer Motion rather than arbitrary linear CSS durations.

3. **Reduced-Motion Respect:**
   - Honor `prefers-reduced-motion: reduce`.
   - Motion layers smoothly collapse into crisp static states without breaking layout.

---

## 3. Responsive & Mobile Discipline

1. **Touch Ergonomics:**
   - Touch targets must measure at least 44x44px.
   - Primary mobile navigation elements positioned within the thumb-reach zone.

2. **Zero Horizontal Layout Bleed:**
   - Root and section containers enforce `overflow-x-clip` or `overflow-x-hidden`.
   - Complex horizontal multi-column grids collapse gracefully into single-column editorial tracks.
   - Desktop 3D stages or horizontal drag scrubbers degrade into native touch snap rails (`snap-x snap-mandatory`).
