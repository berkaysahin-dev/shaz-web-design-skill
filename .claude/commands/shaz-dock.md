Generate a kinetic two-stage scroll-morphing collapsible dock navigation bar with deterministic CSS isolation.
Enforce:
- Parent-scoped CSS rules with `!important` to prevent Tailwind media-query classes (`md:flex`, `sm:inline-flex`) from overflowing text links outside the contracted pill on desktop screens.
- Morphing text links into a compact monochrome SVG icon array upon downward scroll (`scrollY > 80px`).
- Expandable drawer toggle opening full navigation overlay.
- Bespoke vector favicon link (`<link rel="icon" type="image/svg+xml" href="favicon.svg">`) matching brand identity.

## Output Protocol (compact):
Run the Variation Engine first (`rules/variation-engine.md`). Print only the Design Signature (`SKILL.md` §5), then complete, executable, copy-pasteable code with zero placeholders. No essays, no list of laws.
