# GitHub Copilot Instructions — Shaz Agency Web Design

When generating frontend components, full landing pages, or web interfaces, strictly adhere to the Shaz Agency Design Intelligence 2.0 specification.

---

## 1. Non-Negotiable Invariants

1. **Zero Eyebrows & Overlines:** Never place uppercase micro-labels, tags, or section counters above headings (`OTONOM SISTEMLER`, `01 · TEMEL`). Headings lead authoritatively.
2. **Global Content Integrity:** Strictly eliminate meaningless filler copy (`Küme sağlıklı`, `Sistem aktif`, `Yenilikçi yaklaşım`). Apply the Content Necessity Test to every text element.
3. **Zero Heavy Essays:** Keep copy stylish, natural, and human. Maximum 1 sentence per section.
4. **Global Color Consistency:** Define semantic color tokens upfront (`ground`, `surface`, `ink`, `muted`, `brand`, `accent`, `border`). Never introduce disconnected or ad-hoc hex colors in isolated components.
5. **Global Motion & Tactile Quality:** Interactive elements must never be lifeless; they must feature purposeful, smooth motion (`translateY(-2px)`, active states, functioning tabs/filters). No fake buttons or non-working controls.
6. **Zero Dark-Only Defaulting:** Light surfaces (Apple white, warm paper, clinical stone) are equal first-class citizens.
7. **Zero Blinking Lights & Pulsing Dots:** No `animate-pulse` or radar pings.
8. **Zero Neon & Glow Effects:** No fluorescent RGB drop-shadows or laser lines.
9. **Zero Repeating Gradients & Cloned 3-Card Bento Boxes.**
10. **Zero Emojis:** Use monochrome SVG vector icons only.
11. **No Fabricated Data:** Never invent fake client logos or statistics.
12. **Zero Rigid Container Locks:** Apply dynamic container scales (`max-w-2xl` to `max-w-7xl` / full-bleed).

---

## 2. Canonical Core References

- Architecture & Philosophy: `core/design-philosophy.md`
- Non-Negotiable Rules: `core/mandatory-rules.md`
- Layout & Container Scaling: `core/layout-composition.md`
- Sector DNA: `core/industry-intelligence.md`
- Art Director & Exploration: `core/design-diversity.md`
- 1008 Blueprint Knowledge Base: `core/reference-intelligence.md` & `library/INDEX.md`
- 100-Point Scoring Gate: `core/visual-quality.md`
- Accessibility & Motion: `core/accessibility.md`
- Capability Fallbacks: `core/capability-detection.md`

---

## 3. Output Protocol

Print the compact **Design Signature** and then complete, production-grade Next.js (App Router), Tailwind CSS, and Framer Motion code:

```markdown
### Design Signature
- **Industry & DNA:** [Sector] · [Aesthetic Direction]
- **Creative Direction:** [Safe & Premium / Bold & Distinct / Experimental]
- **Art Direction:** Layout [x] · Type [font pair] · Ground [hex] · Nav [archetype] · Hero [composition] · Container [dynamic scale]
- **Tokens:** ground `[hex]` · surface `[hex]` · ink `[hex]` · muted `[hex]` · brand `[hex]` · accent `[hex]` · border `[hex]`
- **Motion Strategy:** [Purposeful tactile interactions: hover lifts, functioning tabs, pause-on-hover marquee]
- **Content Integrity:** [Verified authentic copy, zero fake telemetry, zero empty marketing slogans]
- **Reference Mining:** [5 synthesized blueprints from library/]
- **Visual QA Score:** [X] / 100 (Threshold: ≥ 85)
- **Prohibitions Enforced:** Zero eyebrows, zero fake telemetry, zero disconnected colors, zero lifeless static elements, zero rigid container lock.
```
