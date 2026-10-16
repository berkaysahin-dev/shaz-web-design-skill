# Shaz Agency Web Design — Accessibility & Form Engineering Standards

This standard defines the non-negotiable usability, form validation, and WCAG accessibility requirements for digital interfaces built under the Shaz Agency discipline.

---

## 1. Core WCAG 2.1 AA / AAA Compliance Mandates

Every component and layout generated must comply with strict accessibility standards without sacrificing editorial elegance:

### 1.1 Contrast Ratios
- **Body Text & Interactive Elements:** Minimum contrast ratio of **4.5:1** against underlying container backgrounds (WCAG AA).
- **High-Density Editorial & Flagship Tiers:** Strive for **7:1** contrast (WCAG AAA) on primary typographic headlines and data readouts.
- **Subtle Borders & Dividers:** Minimum **3:1** contrast against adjacent surfaces for structural double-bezel borders.

### 1.2 Touch Targets & Spatial Buffers
- **Minimum Interactive Dimensions:** All interactive targets (buttons, links, form inputs, toggle tabs) must have a clickable area of at least **44x44 physical pixels** on mobile touch devices.
- **Spatial Padding:** Interactive elements must maintain at least **8px** of clear buffer space to prevent accidental adjacent activation.

### 1.3 Focus Rings & Keyboard Navigation
- **Visible Focus Indicator:** Never suppress `:focus` or `:focus-visible` without providing a distinct high-contrast indicator.
- **Authorized Style:** `focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709] focus-visible:outline-none`.
- **Keyboard Traps:** Modals and sliding drawers must enforce focus containment (focus trap) and restore focus to the triggering element upon closure.

---

## 2. Advanced Form Engineering & Validation

Forms must be friction-free, tactile, and engineered with precision feedback:

### 2.1 Input Architecture
- **Visible Persistent Labels:** Place labels outside or above the input field. Never rely solely on placeholder text for form labels.
- **Floating or Architectural Labels:** Clean monospaced uppercase labels (`font-mono text-xs uppercase tracking-wider text-[#A1A1AA]`).
- **Input Containers:** Double-bezel styling with distinct background differentiation from the parent canvas.

### 2.2 Error Notification Protocol
- **Inline Proximity:** Error feedback must appear directly below the erroneous input field, never aggregated exclusively at the top of the form.
- **Color + Icon Demarcation:** Never convey errors through color alone. Combine color contrast with a clear error icon and textual explanation.
- **Screen Reader Announcements:** Use `aria-invalid="true"` and `aria-describedby="[field]-error"` paired with `aria-live="polite"` to ensure assistive technologies announce state changes immediately.

### 2.3 Multi-Step Progression
- **Progress Indication:** When designing multi-step wizards or reservation flows, track progress using clean structural indicators (e.g., segmented progress lines), NEVER capsule pill badges or emoji counters.
- **State Preservation:** Form state must persist during backward and forward step transitions without layout shifts.
