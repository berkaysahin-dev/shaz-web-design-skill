# Shaz Design System — Visual Quality Standards & Audit Matrix

Before presenting any design or delivering code, execute an objective quality audit:

---

## 1. The 12-Point Design Quality Audit

1. **Swap Test:** If the brand name is changed, does this design look like any generic competitor? (If yes, reject and differentiate).
2. **Template Cliché Test:** Does the design feature purple-cyan glows, shiny gradient borders, or repetitive 3-card bento grids? (If yes, dismantle immediately).
3. **Eyebrow & Clutter Test:** Are there any uppercase kicker tags, category labels, or telemetry lines above headings? (If yes, delete immediately).
4. **Heavy Essay Test:** Is there multi-paragraph academic jargon or empty marketing fluff? (If yes, reduce to max 1 stylish, human sentence per section).
5. **Container Scale & Width Test:** Are container widths varied purposefully (`max-w-3xl`, `max-w-6xl`, `max-w-7xl`, full-bleed), or is everything locked inside a cramped `max-w-5xl`?
6. **Optical Hierarchy:** Does the primary heading dominate the viewport with confident authority?
7. **Color Polarity:** Does the background surface genuinely fit the industry, or was dark mode chosen reflexively without justification?
8. **Typographic Rhythm:** Are line heights, letter spacing, and weights properly paired without feeling cramped?
9. **Negative Space:** Is there generous breathing room between sections (120px–180px)?
10. **Reference Synthesis:** Did the design synthesize at least 5 authentic blueprints from `library/`?
11. **Responsive Rigor:** Is there zero horizontal scroll leak (`overflow-x-clip`), and are touch targets at least 44x44px?
12. **Purposeful Assets & Interactions:** Does every image, card, and interaction serve clear UX or brand storytelling, with zero decorative filler?

---

## 2. 100-Point Visual Scoring Matrix

Every generated design is scored across 9 dimensions before delivery:

| Evaluation Dimension | Max Score | Pass Criteria |
| :--- | :---:| :--- |
| **Visual Design Quality** | 20 | High-end aesthetic, subtle borders, refined depth, zero amateurism. |
| **Industry Relevance** | 15 | Authentic alignment with sector DNA (e.g. Apple clarity for tech, Dezeen for architecture). |
| **Originality & Distinct DNA** | 15 | Pronounced departure from generic AI templates, avoiding cookie-cutter 3-card grids and cramped widths. |
| **Typography & Copy Discipline** | 10 | Stylish, concise human copy, zero eyebrow kickers, calibrated font pair, proportional sizing. |
| **Layout & Composition** | 10 | Layout-first composition, asymmetrical balance, variable container widths, zero 50/50 hero splits. |
| **Color Harmony & Polarity** | 10 | Material-grounded palette, light/dark suitability, zero neon halos. |
| **UX & Usability** | 10 | Unambiguous action buttons, accessible targets (≥ 44px), intuitive forms. |
| **Responsive Quality** | 5 | Zero horizontal overflow, seamless mobile stack. |
| **Reference Utilization** | 5 | Successful mechanical synthesis of at least 5 blueprints from `library/`. |
| **TOTAL SCORE** | **100** | **MINIMUM PASSING THRESHOLD: 85 / 100** |

> **STRICT GATE:** Any design scoring under 85 points cannot be delivered. Flaws must be corrected before code output.
