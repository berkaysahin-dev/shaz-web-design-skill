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

## Explanatory Output Protocol (Mandatory in Antigravity, Claude Code, and Codex):
When executing this command, you must structure your output with clear explanations:
1. **Kinetic State Machine:** Explain the scroll trigger threshold (`scrollY > 80px`), transition durations, and backdrop-blur properties.
2. **CSS Specificity Breakdown:** Explain how the deterministic scoped rules prevent responsive utility leaks.
3. **Production Implementation:** Provide complete HTML/CSS/JS or Next.js React component code with zero placeholders.
