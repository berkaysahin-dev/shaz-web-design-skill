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


---

## 6. Hydration Safety & Build Pitfalls (Next.js App Router)

A page is not finished while the browser console shows errors. These are the failures that actually occurred in generated sites, with the fix for each.

1. **Browser extensions edit `<html>` / `<body>` before React hydrates.** ColorZilla adds `cz-shortcut-listen="true"`, Grammarly adds `data-new-gr-c-s-check-loaded` / `data-gr-ext-installed`, and dark-mode or translation extensions add classes and styles. React then reports *"A tree hydrated but some attributes of the server rendered HTML didn't match"*. Every root layout sets `suppressHydrationWarning` on both tags. It only silences attribute differences on that one element; mismatches inside the page still surface.
   ```tsx
   <html lang="en" suppressHydrationWarning>
     <body suppressHydrationWarning className={...}>
   ```
2. **Never render values that differ between server and browser:** `Date.now()`, `new Date()` without a fixed input, `Math.random()`, `typeof window` branches and `toLocaleDateString` / `toLocaleString` (Node and the browser format locales differently, e.g. `Saturday 26 October` vs `Saturday, 26 October`). Format dates with fixed month/day arrays, and create random layouts inside `useEffect` or a canvas.
3. **Reduced-motion and media-query hooks are `null` on the server.** Framer Motion's `useReducedMotion()` (and any `matchMedia` read) must not change markup on the first render: wrap it so it returns `false` until mounted, and put `<MotionConfig reducedMotion="user">` around the app so transform animations still stop for people who asked for less motion.
4. **Google Fonts names in `next/font` change.** Check the export exists before using it (`Big_Shoulders_Display` is now `Big_Shoulders`): `grep "function Big_Shoulders" node_modules/next/dist/compiled/@next/font/dist/google/index.d.ts`.
5. **Tailwind v4 layering.** Custom classes written outside a layer beat every utility, so `hidden sm:inline-flex` stops hiding a `.btn`. Put project component classes inside `@layer components { … }`.
6. **Turkish (and Azeri) `lang` + `text-transform: uppercase`** turns `i` into `İ`. Brand or English words shown in caps on a `lang="tr"` page are written in capitals in the source (`KITEFALL`), or wrapped in `<span lang="en">`.
7. **Pinned or transformed art inside a section** (a sticky diagram that slides sideways, a parallax image) adds horizontal scroll on phones. Give that section `overflow-x-clip` (it keeps `position: sticky` working, unlike `overflow-hidden`).
8. **Verify before delivery:** load the page in a real browser at 1440 px and 375 px, with "reduce motion" on and off, and check: zero console errors (hydration included), no image with `naturalWidth === 0`, and `document.documentElement.scrollWidth - clientWidth === 0`.
