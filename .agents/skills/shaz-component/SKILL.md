---
name: shaz-component
description: Generates specialized, accessible UI components from the 114 Shaz Agency NameThatUI dictionary blueprints (command palettes, segmented controls, stepped area charts, inverted pricing matrices, monumental footers) with full WAI-ARIA and zero pills. Activated via /shaz-component.
---

# /shaz-component — Precision UI Component Generator

Use this skill when the user runs `/shaz-component [component-type]` (e.g. command-palette, pricing-matrix, stepped-chart, segmented-control, footer) or requests a specialized UI element.

## Supported Component Categories (114 Total):
- **Navigation & Command:** Command palettes, segmented controls, floating action bars, breadcrumb trails, tab switchers.
- **Data & Telemetry:** Stepped area charts, financial telemetry cards, metric gauges, timeline scrubbers, data tables.
- **Surfaces & Modals:** Inverted surface pricing matrices, slide-out drawer sheets, lightbox inspectors, double-bezel focal trays.
- **Footers & Watermarks:** Monumental SVG typographic footers, live atelier timekeeper telemetries, physical salon destinations.

## Mandatory Component Guardrails:
1. **Zero Pills & Badges:** No `rounded-full` decorative pills, status chips, or promotional tags (Law 2).
2. **Selective Surface Hierarchy:** Double-Bezel (`.bezel-tray` -> `.bezel-core`) applied strictly to focal components (e.g. flagship pricing tier), never forced everywhere (Law 8).
3. **Monochrome Vector Icons:** Inline SVG or Lucide React icons with uniform 1.5px–1.75px stroke width (Law 6).
4. **WAI-ARIA Accessibility:** Semantic HTML tags, complete keyboard navigation (`Tab`, `Escape`, arrow keys), visible focus rings, and explicit ARIA states (`aria-selected`, `aria-expanded`).

## Output Protocol (compact):
Run the Variation Engine first (`rules/variation-engine.md`). Print only the Design Signature (`SKILL.md` §5), then complete, executable, copy-pasteable code with zero placeholders. No essays, no list of laws.
