---
name: shaz-dock
description: Generates kinetic two-stage scroll-morphing collapsible dock navigation bars with deterministic CSS isolation, monochrome SVG icon array, expandable drawer, and custom SVG favicon link. Activated via /shaz-dock.
---

# /shaz-dock — Scroll-Morphing Collapsible Dock Navigator

Use this skill when the user runs `/shaz-dock [nav-links or brand]` or requests an adaptive kinetic navbar that collapses gracefully upon downward scroll.

## Mandatory Dock Guardrails (Law 16 & Law 18):
1. **Deterministic CSS Scoping (Anti-Leak Guarantee):**
   - Must use parent-scoped CSS with `!important` to prevent Tailwind media-query classes (`md:flex`, `sm:inline-flex`) from leaking text links outside the contracted pill container on desktop screens:
     ```css
     .nav-dock-scrolled {
       width: auto !important;
       max-width: fit-content !important;
       border-radius: 9999px !important;
       padding: 6px 18px !important;
     }
     .nav-dock-scrolled #fullNavLinks,
     .nav-dock-scrolled #fullNavActions,
     .nav-dock-scrolled #brandSubtext {
       display: none !important;
     }
     .nav-dock-scrolled #iconDockLinks {
       display: flex !important;
     }
     #navContainer:not(.nav-dock-scrolled) #iconDockLinks {
       display: none !important;
     }
     ```
2. **Iconic Glyph Morphing:** Text links gracefully hide into monochrome SVG vector icons with accessible tooltip labels.
3. **Expandable Full Drawer:** Scrolled dock features a toggle trigger opening an architectural full-screen drawer on demand.
4. **Bespoke Vector Favicon Link (Law 18):** Generates matching `<link rel="icon" type="image/svg+xml" href="favicon.svg">` and inline SVG favicon markup.

## Output Protocol (compact):
Run the Variation Engine first (`rules/variation-engine.md`). Print only the Design Signature (`SKILL.md` §5), then complete, executable, copy-pasteable code with zero placeholders. No essays, no list of laws.
