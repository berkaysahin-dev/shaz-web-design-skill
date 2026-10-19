---
name: shaz-audit
description: "TR: Çalışma alanını 22 noktalı evrensel Shaz kalite kapısı denetiminden geçirir (boş laf, logo, yanıp sönen ışık, 50/50 hero, kopya slider hatalarını tespit eder). / EN: Runs the Shaz Agency 22-point universal quality gate audit on the workspace to detect and eliminate all anti-patterns."
---

# /shaz-audit — 22-Point Universal Quality Gate Runner

Use this skill when the user runs the `/shaz-audit` slash command or requests an automated compliance audit of code quality, design fidelity, and anti-template rules.

---

## The 22 Universal Quality Gate Checkpoints:

1. **Zero Fluff Text (Law 1):** Maximum 1 dense sentence per section; 0 sentences if layout speaks for itself. Zero marketing filler.
2. **Zero Badges, Pills & Eyebrows (Law 2):** Zero `rounded-full` pills, status chips, eyebrow kicker labels, or fake GPS coordinates.
3. **Zero Blinking & Neon Strobes (Law 3):** Zero `animate-pulse`, blinking dots, radar pings, or neon drop-shadows across all UI and 3D stages.
4. **Zero Emojis & Mandatory Vector Icons (Law 6):** Complete absence of emojis; pure monochrome vector icons only (1.5px–1.75px stroke).
5. **Selective Surface Hierarchy (Law 8):** Double-Bezel (`.bezel-tray` -> `.bezel-core`) applied selectively as a flagship accent, never forced universally.
6. **Zero Post-Hero Telemetry Tickers (Law 9):** No horizontal stat ticker glued under the hero.
7. **Seamless Section Transitions (Law 10):** Smooth atmospheric gradients without full-bleed horizontal line cuts.
8. **Hero Centerpiece Purity (Law 11):** Specimen floats backgroundless without card framing or cursor tilt wobble.
9. **Bespoke Non-Classic Footers (Law 12):** Monumental brand watermark, authentic local timekeeping, physical salon destinations.
10. **Category-Driven Color & Physical Materiality (Law 3):** Colors reflect real physical materials with zero radioactive neon.
11. **Typographic Hierarchy & Editorial Scale:** Clear pairing of authoritative display/editorial typography with clean sans/mono telemetry.
12. **60 FPS Motion Performance:** Animating only `transform` and `opacity` with physical spring curves.
13. **WAI-ARIA & Keyboard Access:** Semantic HTML tags, visible focus rings, and explicit ARIA states.
14. **Zero Comment Leaks & Clean Media (Law 7):** Zero JSX comment leaks in HTML; background media is text-free and authentic.
15. **Scroll-Morphing Dock & Marquee Integrity (Law 16, 17):** Scrolled navbar uses deterministic CSS hiding (`display: none !important`); infinite marquee has edge alpha masks.
16. **Bespoke Vector Favicon Architecture (Law 18):** Original SVG favicon tailored to brand motif declared in `<head>`.
17. **Direct Animation Injection (Law 19):** Mounts real mechanics from `library/10-interactive-animations/` with mathematical physics; zero 1-line CSS shortcuts.
18. **Anti-Caricature, Zero Slashes & Tactile Texture (Law 19):** Zero synthetic slashes (`//`); procedural SVG noise layer active.
19. **Hero Composition Diversity (Law 20):** Zero 50/50 left-text/right-specimen split; must use one of the 6 distinct hero archetypes.
20. **Anti-Formula Component Diversity (Law 20):** Zero repetition of the "3-KPI + 2D canvas curve + slider" instrument formula.
21. **Strict Zero-Logo Navigation Purity (Law 20, 21):** Zero graphic logos, SVG emblems, or app icon boxes; pure typographic wordmark only.
22. **Zero Rudimentary Toy 3D Meshes (Law 20, 22):** Zero naive 10-line primitive meshes with confetti cubes; authentic PBR transmission or Zero-WebGL.

---

## Automated Audit Execution

When running inside the skill repository or project workspace:
```powershell
powershell -ExecutionPolicy Bypass -File .\tests\run-quality-audit.ps1
```

---

## Explanatory Output Protocol

When executing `/shaz-audit`:
1. **Audit Summary Table:** Report Pass/Fail across all 22 checkpoints.
2. **Detailed Finding & Remediation:** For any failure, identify the exact component and provide a copy-pasteable, verified drop-in fix.
