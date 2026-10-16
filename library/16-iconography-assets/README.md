# Shaz Agency Web Design — Iconography & Asset Architecture Standards

This document establishes the universal asset rules, vector icon standards, and 3D asset integration pipelines for all Shaz Agency implementations.

---

## 1. Vector Iconography Rules (Strict Anti-Emoji Law)

### 1.1 Strict Prohibition of Emojis
Emojis (e.g. standard Unicode emojis) are **strictly forbidden** anywhere in UI components, buttons, badges, tables, or copy. Emojis degrade luxury and engineering authority into amateur hobbyist aesthetics.

### 1.2 Monochrome Uniform Stroke Geometry
* **Primary Icon Library:** **Lucide React** (or equivalent lightweight SVG stroke symbols).
* **Stroke Width Standard:** **1.5px to 1.75px** uniform stroke width across all screen densities.
* **Sizing Scale:**
  * Micro (inline with monospace telemetry): `12px` / `w-3 h-3`
  * Standard (buttons, input fields, navigation): `16px` / `w-4 h-4`
  * Action / Hero Card: `20px` to `24px` / `w-5 h-5` to `w-6 h-6`
* **Color Rule:** Always adopt `currentColor` or deliberate neutral tints (`#A1A1AA`, `#FFFFFF`, or subtle `--color-champagne-gold`). Never use multicolored flat vector cartoons.

### 1.3 Native Multi-Platform Mapping
* **Web (Next.js / React / Vue):** `lucide-react` / `lucide-vue-next` / inline `<svg>`
* **iOS / macOS (SwiftUI):** `Image(systemName: "...")` using SF Symbols configured with `.fontWeight(.medium)` and `.foregroundStyle(.primary)`
* **Android (Jetpack Compose):** `Icon(imageVector = ..., tint = MaterialTheme.colorScheme.onSurface)`
* **Flutter (Dart):** `SvgPicture.asset('assets/icons/...', colorFilter: ...)`

---

## 2. 3D Asset & Physical Material Specimen Standards

### 2.1 Backgroundless Isolated Cutouts (Zero Boxed Photo Cards)
* **Law 14 Compliance:** All physical mechanisms, horological complications, hardware sensors, and luxury products must be provided as **isolated transparent cutouts** (PNG/WebP with transparent alpha channels) or real-time WebGL/Three.js primitives.
* **Prohibition:** Never trap a product specimen inside a bordered rectangular photo box (`aspect-video` card with grey background) within a dark theme. The specimen must float freely and organically on the obsidian canvas.

### 2.2 PBR & Optical Characteristics
When generating or specifying 3D models and shaders:
* **Transmission & Refraction:** Use Index of Refraction (IOR) **1.52 to 1.58** for optical crown glass.
* **Roughness & Metalness:** High-precision brushed titanium (`roughness: 0.22`, `metalness: 0.90`) or satin ceramic (`roughness: 0.15`, `metalness: 0.10`).
* **Environment Maps:** High dynamic range studio reflections (`.hdr` / `.exr`) using monochromatic or warm 2700K Kelvin keylights.

---

## 3. Cinematic Video Prompt Formula for Dynamic Backgrounds

When generating ambient background video assets (Runway Gen-3, Cinematic Video Engine, Luma Dream Machine, Sora):
1. **Specific Physical Subject in a Specific Place:** Macro liquid chrome, frosted amber glass on basalt, or kinetic mechanical gears.
2. **Explicit Named Light Source:** Diffused overhead softbox, 2700K tungsten rim light, or god-rays through volumetric fog.
3. **Declared Color Grade:** Desaturated warm amber, cool titanium, or monochromatic silver.
4. **Single Continuous Slow Camera Move:** Slow steady push, slow 360 orbital pan. Never fast cuts or contradictory camera moves.
5. **Anti-Slop Banned Tokens:** Never use "8k", "photorealistic", "masterpiece", or "hyperdetailed".

