# Shaz Agency Web Design — Claude Code Adapter

This adapter configures Claude Code CLI (`~/.claude` or project root `CLAUDE.md`) to operate the Shaz Agency Web Design system with complete design intelligence, zero-slop rules, and blueprint integration.

---

## 1. Mandatory Invariants (Enforced on Every Turn)

- **Zero Eyebrow Kicker Labels:** Never generate micro-tags, uppercase category labels, or counters directly above headings (e.g. `OTONOM SISTEMLER`, `01 · TEMEL`). Headings lead nakedly and authoritatively.
- **Zero Heavy Essays & Academic Jargon:** Maximum 1 stylish, human sentence per section. Never write dense philosophical manifestos.
- **Zero Dark-Only Defaulting:** Light surfaces (Apple white `#FFFFFF`, clean off-white `#F5F5F7`, paper `#F7F6F2`) are first-class equals.
- **Zero Blinking & Pulsing Lights:** No `animate-pulse`, no flashing dots, no radar pings.
- **Zero Glow & Neon:** No fluorescent RGB drop-shadows or laser borders.
- **Zero Repeating Gradients:** No purple-to-cyan or blue-to-emerald radial blobs.
- **Zero Cloned Bento Grids:** Break repetitive 3-card rounded patterns with asymmetric editorial compositions.
- **Zero Emojis:** Pure monochrome vector icons only (`lucide-react` or inline SVG).
- **Dynamic Container Metrics:** Use calibrated container widths (`max-w-2xl` to `max-w-7xl` / full-bleed); avoid forcing all sections into `max-w-5xl`.

---

## 2. Progressive Rule Loading

When working on web design tasks in Claude Code, refer to the canonical core:
- Philosophy & Layers: `core/design-philosophy.md`
- Mandatory Rules: `core/mandatory-rules.md`
- Layout & Container Scaling: `core/layout-composition.md`
- Industry DNA: `core/industry-intelligence.md`
- Art Director & Exploration: `core/design-diversity.md`
- 1008 Blueprint Index: `core/reference-intelligence.md` & `library/INDEX.md`
- 100-Point Scoring Gate: `core/visual-quality.md`
- Accessibility & Motion: `core/accessibility.md`
- Capability Fallbacks: `core/capability-detection.md`

---

## 3. Workflow & Output Protocol

1. **Step 1:** Establish Industry DNA (choose from the 10 sectors).
2. **Step 2:** Formulate Layout-First Composition and dynamic container widths.
3. **Step 3:** Synthesize at least 5 blueprints from `library/INDEX.md`.
4. **Step 4:** Perform the 12-Question Self-Audit and compute the Visual QA Score (must be ≥ 85/100).
5. **Step 5:** Output ONLY the **Design Signature** followed immediately by complete, unabridged, copy-pasteable Next.js / Tailwind CSS / Framer Motion code:

```markdown
### Design Signature
- **Industry & DNA:** [Sector] · [Aesthetic Direction]
- **Creative Direction:** [Safe & Premium / Bold & Distinct / Experimental]
- **Art Direction:** Layout [x] · Type [font pair] · Ground [hex] · Nav [archetype] · Hero [composition] · Container [dynamic scale]
- **Tokens:** ground `[hex]` · surface `[hex]` · ink `[hex]` · muted `[hex]` · accent `[hex]`
- **Reference Mining:** [5 synthesized blueprints from library/]
- **Visual QA Score:** [X] / 100 (Threshold: ≥ 85)
- **Prohibitions Enforced:** Zero eyebrows, zero blinking, zero neon, zero heavy essays, zero rigid container lock.
```
