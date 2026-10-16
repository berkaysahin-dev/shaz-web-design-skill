---
name: shaz-style
description: Applies and transforms layouts into any of the 40 authentic Shaz Agency design styles (Swiss Utilitarian, Neobrutalism, Y2K, Acid Graphics, Bento Grid, Spatial UI, Luxury Editorial) with calibrated typography, tokens, and materials. Activated via /shaz-style.
---

# /shaz-style — Authentic Web Design Style Synthesizer

Use this skill when the user runs `/shaz-style [style-name] [component or layout]` or requests an interface transformed into a specific architectural aesthetic.

## Supported Style Categories (40 Total):
- **Architectural & Editorial:** Swiss Utilitarian, Luxury Editorial, Editorial Magazine, Minimalist Monochrome, Kinetic Typography.
- **Modern Digital & Structural:** Flat Bento Grid, Spatial UI, Neumorphism v2 (Selective), Liquid Glass, Claymorphism.
- **Expressive & Underground:** Acid Graphics, Neobrutalism, Web Brutalism, Y2K Cyber, Cyber Pop, Japanese Web Design, Surrealism.

## Style Guardrails (Universal Enforcement):
1. Even in expressive styles (Acid, Y2K, Brutalism), all 18 Universal Design Laws remain active: zero fluff text, zero emojis, zero fake coordinates, zero neon strobes, and strictly backgroundless hero specimens.
2. Typography, border-radius tokens, and surface colors must strictly correspond to the selected style blueprint from `library/13-web-styles/`.

## Explanatory Output Protocol (Mandatory in Antigravity, Claude Code, and Codex):
When executing this command, you must structure your output with clear explanations:
1. **Style Anatomy & Historical Context:** Explain the typographic rules, border-radius metrics, and material origins of the chosen style.
2. **Applied Design Tokens:** Detail CSS variables, font families, tracking/leading parameters, and surface contrasts.
3. **Production Component Code:** Output the styled Next.js / Tailwind CSS component with full responsive fidelity and zero placeholders.
