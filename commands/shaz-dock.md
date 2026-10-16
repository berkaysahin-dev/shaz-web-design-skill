Generate a kinetic two-stage scroll-morphing collapsible dock navigation bar with deterministic CSS isolation.
Enforce:
- Parent-scoped CSS rules with `!important` to prevent Tailwind media-query classes (`md:flex`, `sm:inline-flex`) from overflowing text links outside the contracted pill on desktop screens.
- Morphing text links into a compact monochrome SVG icon array upon downward scroll (`scrollY > 80px`).
- Expandable drawer toggle opening full navigation overlay.
- Bespoke vector favicon link (`<link rel="icon" type="image/svg+xml" href="favicon.svg">`) matching brand identity.

## Explanatory Output Protocol:
1. Kinetic State Machine: Explain scroll triggers, cubic-bezier timing, and blur values.
2. CSS Scoping Breakdown: Detail how deterministic CSS rules eliminate responsive leaks.
3. Production Code: Complete HTML/CSS/JS or Next.js React implementation with zero placeholders.
