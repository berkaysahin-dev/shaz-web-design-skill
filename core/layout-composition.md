# Shaz Design System — Layout-First Composition & Container Architecture

Page structure must emerge organically from brand positioning, content narrative, and user intent. Never assemble a website by stacking a generic checklist of familiar rounded cards inside a uniform container.

---

## 1. The Layout-First Composition Protocol

Before choosing or styling any component, establish the page's spatial composition:

1. **Information Narrative Mapping:** Determine what the user must understand in sequence (e.g. core value proposition -> proof of system capacity -> deep architectural dossier -> transparent dialog).
2. **Container Scale Selection:** Assign purposeful container widths per section based on content density.
3. **Asymmetric Rhythm:** Alternate between expansive wide stages, intimate reading columns, and dynamic horizontal splits.
4. **Component Generation from Layout:** Select or author components that directly serve the spatial envelope (never fit content into generic card templates).

---

## 2. Dynamic Container Scale Hierarchy

Never lock every section of a page into a single rigid maximum width (such as `max-w-5xl`). Use calibrated container scales tailored to content type:

| Container Scale | Tailwind Class | Pixel Width | Content Application |
| :--- | :--- | :--- | :--- |
| **Editorial Column** | `max-w-2xl` to `max-w-3xl` | 672px – 768px | Narrative essays, case study overviews, legal text, focused value propositions (65–75 characters per line). |
| **Standard Structured** | `max-w-5xl` to `max-w-6xl` | 1024px – 1152px | Dialog forms, split inquiry composers, balanced technical specifications. |
| **Expanded Horizon** | `max-w-7xl` | 1280px | Enterprise platform dashboards, asymmetric split showcases, multi-metric ledgers. |
| **Cinematic Canvas** | `max-w-[1536px]` / `w-full` | 1536px – Full-Bleed | Ambient hero stages, architectural photography, live telemetry horizons, continuous ecosystem strips. |

### Responsive Gutter Mathematics:
- Mobile (< 640px): `px-5` to `px-6` (20px–24px)
- Tablet (640px – 1024px): `px-8` to `px-10` (32px–40px)
- Desktop (> 1024px): `px-12` to `px-20` (48px–80px)

---

## 3. Structural Composition Archetypes

Rotate across distinctive composition models instead of relying on centered text over 3-card grids:

### A. The Asymmetric Horizon Ledger
- **Structure:** 40% sticky narrative anchor on left + 60% flowing technical ledger on right.
- **Application:** Enterprise software capabilities, architectural project index, financial service portfolios.
- **Eliminates:** Generic 3-card grids with floating icons.

### B. The Monumental Typographic Stage
- **Structure:** Hero heading spanning 90% viewport width with calibrated negative tracking, followed by an immediate asymmetrical trust ledger and interactive preview card.
- **Application:** Developer platforms, tech startups, high-end creative studios.
- **Eliminates:** Centered hero clichés with small text in narrow boxes.

### C. The Full-Bleed Ambient Canvas
- **Structure:** Full-width photographic or interactive stage with subtle edge feathering, anchored by a floating precision dock.
- **Application:** Automotive brands, architecture studios, luxury hospitality, fashion editorials.
- **Eliminates:** Cramped box-in-a-box containment.

### D. The Technical Case Dossier
- **Structure:** Two-tiered layout featuring high-contrast summary metrics, concrete problem/solution architecture breakdown, and interactive terminal/code preview.
- **Application:** Software engineering firms, cybersecurity, data infrastructure.
- **Eliminates:** Generic client quote cards and vague testimonial stars.

---

## 4. De-Defaultization of Card Components

A card is not a universal container. When displaying services, features, or capabilities:
1. **Prefer Horizon Dividers:** Clean horizontal line separators (`border-t border-slate-200`) with generous padding create an editorial, expensive feel without the clutter of nested boxes.
2. **Tabular Data Specifications:** Use structured key-value specifications and clean data tables for technical credibility.
3. **Asymmetric 2/3 + 1/3 Groupings:** If cards are necessary, pair one dominant showcase card (2/3 width) with secondary accent items (1/3 width) rather than 3 identical clones.
4. **Zero Unjustified Tickers:** Never add an animated marquee unless the business explicitly requires a live ecosystem, partner network, or streaming telemetry display.
