---
name: shaz-audit
description: Runs the Shaz Agency 16-point universal quality gate audit on the current workspace or code to detect anti-patterns (fluff copy, pills, emojis, neon, comment leaks, layout overflows). Activated via slash command /shaz-audit.
---

# /shaz-audit — Pre-Delivery Quality Gate Runner

Use this skill when the user runs the `/shaz-audit` slash command or asks to audit code quality, design compliance, or anti-slop rules.

## Explanatory Audit Protocol (Mandatory in Antigravity, Claude Code, and Codex):
When executing this command, you must structure your audit report with thorough explanations:
1. **Audit Summary Table:** Report Pass/Fail status across all 16 checkpoints.
2. **Detailed Findings & Anti-Pattern Analysis:** For any failing checkpoint, state the exact line, component, or anti-pattern detected with technical explanation.
3. **Drop-In Remediation Diffs:** Provide copy-pasteable, verified code fixes that bring the component to 100% compliance.

## The 16 Quality Gate Criteria:
1. **Zero Fluff Text:** Scan for marketing filler paragraphs or repetitive text.
2. **Zero Badges, Pills & Eyebrows:** Inspect for `rounded-full` pills, status chips, and eyebrow kicker labels.
3. **Zero Blinking & Neon Strobes:** Check for `animate-pulse`, pulsing dots, or neon glow shadows.
4. **Zero Emojis & Mandatory Vector Icons:** Verify complete absence of emojis; confirm monochrome vector icons only.
5. **Selective Surface Hierarchy:** Ensure Double-Bezel is not universally forced; hero elements must never be double-layered.
6. **Zero Post-Hero Telemetry Tickers:** Confirm no horizontal metric strip is glued under the hero.
7. **Seamless Section Transitions:** Confirm smooth background gradients without harsh full-bleed horizontal line cuts.
8. **Hero Centerpiece Purity:** Product/specimen must float backgroundless without card framing or cursor tilt wobble.
9. **Bespoke Non-Classic Footers:** Confirm monumental watermark, live timekeeping/status, and architectural destinations.
10. **Category-Driven Color:** Ensure palette derives authentically from physical materials with zero radioactive neon.
11. **Typographic Hierarchy:** Inspect typography pairing and optical contrast.
12. **60 FPS Motion Performance:** Verify only `transform` and `opacity` are animated with spring physics.
13. **WAI-ARIA & Keyboard Access:** Verify semantic HTML tags, keyboard reachability, and visible focus rings.
14. **Zero Comment Leaks & Clean Media:** Check for JSX comment syntax in HTML; verify background media is text-free.
15. **Scroll-Morphing Dock & Marquee Integrity:** Scrolled navbar must use deterministic CSS hiding to avoid desktop text overflow; infinite marquee must feature edge alpha feathering masks.
16. **Bespoke Vector Favicon Architecture:** Confirm tailored SVG favicon present at root and declared in `<head>`.

If running inside the `shaz-web-design-skill` repository, execute:
```powershell
powershell -ExecutionPolicy Bypass -File .\tests\run-quality-audit.ps1
```
Output the audit results clearly with explanatory remediation.
