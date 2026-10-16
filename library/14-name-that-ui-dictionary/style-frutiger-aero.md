# Frutiger Aero

![Frutiger Aero](./images/style-frutiger-aero.png)

* **Collection:** `Shaz Agency UI Visual Dictionary & Agent Prompts`
* **Category:** `UI Style (Vibe)`
* **Primary API / Symbol:** `background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);`
* **Also Called (Aliases):** `Aero glass era look, eco-tech gloss, Web 2.0 gloss era`
* **Official Source URL:** [https://shazagency.com/ui-dictionary/styles/frutiger-aero](https://shazagency.com/ui-dictionary/styles/frutiger-aero)

---

```markdown
# Frutiger Aero — Shaz Agency Official UI Prompt & Production Architecture

> **Source:** [https://shazagency.com/ui-dictionary/styles/frutiger-aero](https://shazagency.com/ui-dictionary/styles/frutiger-aero) · **Category:** `UI Style (Vibe)` · **Primary API / Symbol:** `background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);`
> **Also Called ("Sloppy Words"):** *Aero glass era look, eco-tech gloss, Web 2.0 gloss era*
> **Recommended AI Skills:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, Cursor, or Windsurf.

---

## 1. Official Shaz Agency UI Architecture Prompt (Paste Directly Into Your Coding Agent)

Create the piece using Frutiger Aero. Defining signals: nature imagery fused with technology (blue sky, water, grass, bubbles, light rays) as the ambient backdrop; glossy translucent 'aqua' surfaces with curved specular highlights; a luminous sky-blue and grass-green palette full of white light; clean humanist sans-serif type (Frutiger/Segoe flavor). Supporting: bokeh circles, sun rays, diagonal sheen sweeps. Keep the specific slice of nature (underwater, meadow, droplets) flexible. Use layered radial/linear gradients for the sky and gloss caps, rgba white overlays for sheen, and generous rounded panels. Do not drift into Y2K; the decisive difference is nature — if chrome, techno type, or cyber grids replace the skies and grass, you've crossed over. Preserve 4.5:1 text contrast over photographic backgrounds (back text with a panel), visible focus states, and reduced-motion support for sheen and bubble effects.

---

## 2. Official Shaz Agency UI Architecture Debug Prompt (When It Misbehaves)

Debug my 'Frutiger Aero' (`background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);`) implementation. Rule out: broken keyboard focus order or missing ARIA roles; clipping caused by parent `overflow: hidden` or stacking context (`z-index`) conflicts; layout shift during state transitions; missing `prefers-reduced-motion` and `env(safe-area-inset-*)` handling; and low contrast in dark/light mode.

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Nature fused with tech
- Imagery & ornament
- Skies, water, grass, leaves, fish, and bubbles as the ambient world the UI floats in — ecology as a tech promise.
- Glossy glass and aqua surfaces
- Surface & material
- Translucent panels and buttons with strong curved specular highlights — wet, light-filled gloss rather than matte frost.
- Sky-blue / grass-green palette
- Color & contrast
- Luminous cyan-blues and fresh greens with white light — bright, clean, and warm-lit, never murky.
- Clean humanist sans type
- Friendly rounded-humanist sans-serifs (the Frutiger/Segoe flavor) in white or sky-dark blue — clarity, not techno styling.

### 3.2 Exact Framework Symbols ("In Code")
`background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);` · `background: radial-gradient(circle at 35% 30%, rgba(255,255,255,.9), rgba(255,255,255,.08) 55%, rgba(255,255,255,.35));`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Frutiger Aero** (`background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
   - Never rely solely on color tint (`tabBarActiveTintColor` / accent color) to indicate the active or selected state; pair visual contrast with explicit `aria-current="page"` or `data-state="active"`.
2. **Full Keyboard Navigation Matrix:**
   - `Tab` / `Shift+Tab`: Predictable focus traversal with a high-visibility `:focus-visible` ring (`2px solid var(--accent-primary)`, `outline-offset: 2px`).
   - `ArrowLeft` / `ArrowRight` / `ArrowUp` / `ArrowDown`: Roving `tabindex` (`0` on active item, `-1` on inactive peers) for composite widgets (`Tabs`, `Segmented Control`, `Menu Bar`, `Radio Group`, `Combobox`, `Command Palette`).
   - `Escape`: Deterministically dismisses transient overlays (`Popover`, `Modal Dialog`, `Sheet`, `Drawer`, `Context Menu`) and restores focus to the exact trigger element.
3. **Viewport & Safe-Area Resilience:**
   - Respect `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` (`viewport-fit=cover`) on iOS/mobile viewports.
   - Use `dvh` (`100dvh`) rather than `100vh` for fixed/sticky viewport layers so mobile browser chrome never clips bottom-pinned controls.

### 4.2 Production CSS & Liquid Glass Surface Tokens
```css
:root {
  --ntu-bg-canvas: #09090d;
  --ntu-bg-elevated: rgba(18, 19, 26, 0.82);
  --ntu-bg-control: rgba(255, 255, 255, 0.05);
  --ntu-bg-control-active: rgba(56, 189, 248, 0.14);
  --ntu-text-primary: #f4f4f6;
  --ntu-text-secondary: #a1a1aa;
  --ntu-text-muted: #63636e;
  --ntu-accent: #38bdf8;
  --ntu-border-hairline: rgba(255, 255, 255, 0.08);
  --ntu-border-focus: #38bdf8;
  --ntu-radius-capsule: 9999px;
  --ntu-radius-card: 14px;
  --ntu-ease-spring: cubic-bezier(0.22, 1, 0.36, 1);
}

.ntu-component-surface {
  background: var(--ntu-bg-elevated);
  backdrop-filter: blur(18px) saturate(165%);
  -webkit-backdrop-filter: blur(18px) saturate(165%);
  border: 1px solid var(--ntu-border-hairline);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 20px 50px -12px rgba(0, 0, 0, 0.65);
  color: var(--ntu-text-primary);
  transition:
    transform 0.28s var(--ntu-ease-spring),
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.ntu-interactive-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.95rem;
  border-radius: 10px;
  color: var(--ntu-text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: color 0.18s ease, background 0.18s ease;
}

.ntu-interactive-item[aria-selected="true"],
.ntu-interactive-item[aria-current="page"],
.ntu-interactive-item[data-state="active"] {
  color: var(--ntu-text-primary);
  background: var(--ntu-bg-control-active);
  box-shadow: inset 0 0 0 1px rgba(56, 189, 248, 0.35);
}

.ntu-interactive-item:focus-visible {
  outline: 2px solid var(--ntu-border-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .ntu-component-surface,
  .ntu-interactive-item {
    transition: none !important;
    animation: none !important;
  }
}
```

### 4.3 Interactive State & Roving Focus Controller (Vanilla JS / React Pattern)
```javascript
// Production-Grade Accessible State & Keyboard Controller for Frutiger Aero (background: linear-gradient(180deg,#8fd3ff 0%,#3fa9f5 45%,#8fd948 82%,#4a9e2e 100%);)
export function initShaz Agency UI ArchitectureComponent(rootSelector = '[data-ntu-component="style-frutiger-aero"]') {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const items = Array.from(root.querySelectorAll('[role="tab"], [role="menuitem"], [data-ntu-item]'));
  let activeIndex = Math.max(0, items.findIndex((el) => el.getAttribute('aria-selected') === 'true' || el.getAttribute('aria-current') === 'page'));

  function setActive(index, focusElement = true) {
    activeIndex = (index + items.length) % items.length;
    items.forEach((el, idx) => {
      const isActive = idx === activeIndex;
      el.setAttribute('data-state', isActive ? 'active' : 'inactive');
      if (el.hasAttribute('aria-selected')) el.setAttribute('aria-selected', String(isActive));
      if (el.hasAttribute('aria-current')) el.setAttribute('aria-current', isActive ? 'page' : 'false');
      el.setAttribute('tabindex', isActive ? '0' : '-1');
      if (isActive && focusElement) el.focus();
    });
  }

  items.forEach((el, idx) => {
    el.addEventListener('click', () => setActive(idx, false));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(idx + 1, true);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(idx - 1, true);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActive(0, true);
      } else if (e.key === 'End') {
        e.preventDefault();
        setActive(items.length - 1, true);
      }
    });
  });
}
```

```


