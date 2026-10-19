---
name: shaz-dock
description: "TR: Sayfa kaydırıldığında kompakt ikon rıhtımına dönüşen, CSS sızıntı korumalı, logosuz kinetik iki aşamalı gezinme çubuğu (dock) üretir. / EN: Generates kinetic two-stage scroll-morphing collapsible dock navigation bars with deterministic CSS isolation and zero logos."
---

# /shaz-dock — Kinetic Dynamic Navigation Architect

Use this skill when the user runs `/shaz-dock [nav-links or brand]` or requests an adaptive kinetic navbar that collapses gracefully upon downward scroll into a compact icon dock.

---

## 1. Absolute Anti-Pattern Bans (Laws 6, 16, 21)

1. **NO GRAPHIC LOGOS (Law 6, Law 21):** Strictly zero SVG logo emblems, company shields, or app icon boxes next to the brand title. Brand identity is led exclusively by pure, naked typographic wordmarks or raw studio coordinates.
2. **NO RESPONSIVE CSS LEAKS (Law 16):** Never let Tailwind media queries (`md:flex`, `sm:inline-flex`) override the contracted dock state on desktop viewports.
3. **NO BULKY OCCLUSION:** Full headers must not block screen real estate during deep reading.

---

## 2. Deterministic CSS Scoping Architecture

To guarantee that text links and secondary actions never leak out of the contracted pill container on any screen resolution:

```css
/* Scrolled Dock State */
.nav-dock-scrolled {
  width: auto !important;
  max-width: fit-content !important;
  border-radius: 9999px !important;
  padding: 6px 18px !important;
  background-color: rgba(8, 9, 12, 0.94) !important;
  backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6) !important;
}

/* Deterministic Desktop Link Hiding */
.nav-dock-scrolled #fullNavLinks,
.nav-dock-scrolled #fullNavActions,
.nav-dock-scrolled #brandSubtext {
  display: none !important;
}

/* Compact Vector Icon Array */
.nav-dock-scrolled #iconDockLinks {
  display: flex !important;
}

#navContainer:not(.nav-dock-scrolled) #iconDockLinks {
  display: none !important;
}
```

---

## 3. The 5 Navigation Archetypes (Contextual Selection)

1. **Archetype 1: Full-Bleed Editorial Horizon:** High-contrast horizontal rule spanning edge-to-edge with masthead volume and date. (Best for: Editorial magazines, fashion, monographs).
2. **Archetype 2: Kinetic Two-Stage Scroll-Morphing Dock:** Expanding full bar at apex, contracting to centered compact dock upon scroll. (Best for: Ateliers, WebGL showcases, interactive tools).
3. **Archetype 3: Minimal Corner Telemetry & Canvas Anchors:** Discrete floating corner nodes hugging the viewport edges. (Best for: Minimalist architecture, industrial design, spatial art).
4. **Archetype 4: Dual-Tier Precision Utility Header:** Top tier for system SLA/latency; bottom tier for command routing. (Best for: FinTech, quant dashboards, enterprise cloud).
5. **Archetype 5: Asymmetric Brutalist Split & Fullscreen Drawer:** Heavy non-aligned typography with an architectural fullscreen drawer trigger. (Best for: Underground festivals, experimental sound).

---

## 4. Explanatory Output Protocol

When executing `/shaz-dock`:
1. **Selected Navigation Archetype:** Declare the chosen archetype and explain why it fits the domain.
2. **CSS Specificity Breakdown:** Explain how the deterministic scoped rules prevent responsive leaks.
3. **Vector Favicon Definition:** Include the matching project-specific vector SVG favicon.
4. **Production TypeScript Code:** Deliver complete, copy-pasteable Next.js client component code.
