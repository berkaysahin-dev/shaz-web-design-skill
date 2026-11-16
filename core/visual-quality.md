# Shaz Design System — Visual Quality Standards & Audit Matrix

Before presenting any design or delivering code, execute an objective quality audit:

---

## 1. The 15-Point Design Quality Audit

1. **Swap Test:** If the brand name is changed, does this design look like any generic competitor? (If yes, reject and differentiate).
2. **Template Cliché Test:** Does the design feature purple-cyan glows, shiny gradient borders, or repetitive 3-card bento grids? (If yes, dismantle immediately).
3. **Eyebrow & Clutter Test:** Are there any uppercase kicker tags, category labels, or telemetry lines above headings? (If yes, delete immediately).
4. **Content Integrity & Filler Test:** Does the design contain empty slogans (`Yenilikçi yaklaşım`, `Geleceği şekillendiriyoruz`), fake telemetry (`Küme sağlıklı`, `Sistem aktif`), or artificial status badges? (If yes, replace with authentic business facts or remove).
5. **Content Necessity Test:** Does every single text element communicate useful information or improve usability? (If no, delete it).
6. **Color System Consistency Test:** Are all colors derived from a centralized semantic token hierarchy, or do isolated components introduce random disconnected hex codes?
7. **Motion Purposefulness Test:** Is motion functional, tactile, and smooth (60 FPS GPU-accelerated `transform`/`opacity`), avoiding both static lifelessness and distracting hyperactive loops?
8. **Real Interaction Test:** Do all interactive elements actually work (functioning tabs, functioning filters, active press feedback, live form feedback)? (Zero fake buttons).
9. **Heavy Essay Test:** Is there multi-paragraph academic jargon or empty marketing fluff? (If yes, reduce to max 1 stylish, human sentence per section).
10. **Container Scale & Width Test:** Are container widths varied purposefully (`max-w-2xl`, `max-w-6xl`, `max-w-7xl`, full-bleed), or is everything locked inside a cramped `max-w-5xl`?
11. **Optical Hierarchy:** Does the primary heading dominate the viewport with confident authority?
12. **Color Polarity:** Does the background surface genuinely fit the industry, or was dark mode chosen reflexively without justification?
13. **Typographic Rhythm:** Are line heights, letter spacing, and weights properly paired without feeling cramped?
14. **Negative Space:** Is there generous breathing room between sections (120px–180px)?
15. **Responsive Rigor:** Is there zero horizontal scroll leak (`overflow-x-clip`), and are touch targets at least 44x44px?

---

## 2. 100-Point Visual Scoring Matrix

Every generated design is scored across 9 dimensions before delivery:

| Evaluation Dimension | Max Score | Pass Criteria |
| :--- | :---:| :--- |
| **Visual Design Quality** | 20 | High-end aesthetic, subtle borders, refined depth, zero amateurism. |
| **Industry Relevance** | 15 | Authentic alignment with sector DNA (e.g. Apple clarity for tech, Dezeen for architecture). |
| **Originality & Distinct DNA** | 15 | Pronounced departure from generic AI templates, avoiding cookie-cutter 3-card grids and cramped widths. |
| **Content Integrity & Copy** | 10 | Authentic business communication, zero fake telemetry/status dots, zero filler slogans, zero eyebrows. |
| **Color System Coherence** | 10 | Centralized semantic tokens, zero disconnected ad-hoc hex codes, perfect section harmony. |
| **Layout & Composition** | 10 | Layout-first composition, asymmetrical balance, variable container widths, zero 50/50 hero splits. |
| **Motion & Interaction Quality** | 10 | Purposeful tactile physics, working controls, functioning tabs/forms, `prefers-reduced-motion` support. |
| **Responsive Quality** | 5 | Zero horizontal overflow, touch targets ≥ 44px, seamless mobile stack. |
| **Reference Utilization** | 5 | Successful mechanical synthesis of at least 5 blueprints from `library/`. |
| **TOTAL SCORE** | **100** | **MINIMUM PASSING THRESHOLD: 85 / 100** |

> **STRICT GATE:** Any design scoring under 85 points cannot be delivered. Flaws must be corrected before code output.
