# Shaz Agency Web Design — Technical Engineering Standards

This document specifies the technical foundation, coding conventions, and architectural performance criteria for web applications generated under the Shaz Agency discipline.

---

## 1. Core Framework & Environment Defaults

- **Core Framework:** Next.js (App Router, React 18/19, TypeScript).
- **Styling Architecture:** Tailwind CSS (v3 or v4) with semantic CSS variables defined in `:root`.
- **Motion Engine:** Framer Motion (or lightweight CSS transitions with custom cubic-bezier curves for micro-interactions).
- **Component Model:** Server Components by default; `"use client"` is applied strictly to islands of interactivity (e.g., interactive filters, modal drawers, dynamic canvas).
- **Iconography:** Pure vector SVG (inline or Lucide React). All icons are strictly monochrome (`stroke-current`), `1.5px` to `1.75px` stroke weight, with consistent bounding boxes (`20x20` or `24x24`).

---

## 2. Fluid Viewport Scaling & Typography Tokens

To guarantee crisp proportions across both small mobile viewports (390px) and large cinematic monitors (1440px+), typography and spacing must utilize fluid CSS `clamp()` scaling:

```css
:root {
  /* Surface Tokens - Light (Swiss Stone) */
  --canvas-bg: #F6F5F1;
  --tray-bg: #ECEAE3;
  --core-bg: #FFFFFF;
  --border-subtle: #E2DFD7;
  --border-strong: #141413;
  --text-primary: #141413;
  --text-secondary: #686762;
  --text-muted: #94928B;

  /* Surface Tokens - Dark (Obsidian Ink) */
  --canvas-dark: #070709;
  --tray-dark: #111114;
  --core-dark: #0D0E12;
  --border-dark-subtle: rgba(255, 255, 255, 0.08);
  --border-dark-strong: rgba(255, 255, 255, 0.20);
  --text-dark-primary: #F4F4F6;
  --text-dark-secondary: #A1A1AA;
  --text-dark-muted: #71717A;

  /* Measured Accent Tokens (Matte, Optical Mineral Accents — Zero Tacky Neon) */
  --accent-gold: #C5A880;
  --accent-titanium: #A1A1AA;
  --accent-amber: #D97706;
  --accent-slate: #64748B;

  /* Fluid Spacing & Typography */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 3. Kinetic & Physics Parameters

All animations must feel tactile, physical, and restrained:

- **Spring Physics Standard (Framer Motion):**
  ```typescript
  export const springTransition = {
    type: "spring",
    stiffness: 280,
    damping: 24,
    mass: 0.85,
  };
  ```

- **CSS Transition Standard:**
  ```css
  transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 320ms cubic-bezier(0.16, 1, 0.3, 1);
  ```

- **Restricted Properties:** Animate exclusively `transform` and `opacity`. Never animate `width`, `height`, `margin`, or `padding` to prevent layout reflows and maintain 60 FPS performance.

---

## 4. Accessibility (WCAG 2.1 AA) & Semantic DOM Integrity

Every section must adhere to the following standards:
1. **Semantic Hierarchy:** One `<h1>` per page. Heading levels (`<h2>` to `<h6>`) must never skip levels.
2. **Keyboard Ergonomics:** Every interactive element must be reachable via `Tab` and show a distinct, high-contrast focus indicator (`focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:outline-none`).
3. **Modal & Drawer Isolation:** Transient overlays must trap focus, dismiss on `Escape`, and restore focus to the originating trigger upon close.
4. **Color Independence:** Information state (active, error, selected) must never rely solely on color; pair visual differences with semantic text or explicit `aria-current="page"` / `aria-selected="true"`.

---

## 5. Favicon & Metadata Engineering Standards

- **Pure Vector Delivery:** Favicons must be served as vector SVG (`type="image/svg+xml"`) for sharp fidelity across all DPI scales.
- **ViewBox & Geometry Precision:** Standard `viewBox="0 0 120 120"` or `viewBox="0 0 32 32"`. The artwork must maintain clear silhouette distinction and optical legibility when rendered at 16x16 or 32x32 tab dimensions.
- **Theme Resilience:** Background squircle or circular frame must retain crisp hairline boundary definition (`stroke="rgba(255,255,255,0.14)"` or calibrated theme border) so it remains prominent against both dark and light browser tab chrome.
- **Delivery Syntax:**
  * **HTML5:**
    ```html
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    ```
  * **Next.js App Router (`layout.tsx`):**
    ```typescript
    export const metadata: Metadata = {
      icons: {
        icon: '/favicon.svg',
      },
    };
    ```

