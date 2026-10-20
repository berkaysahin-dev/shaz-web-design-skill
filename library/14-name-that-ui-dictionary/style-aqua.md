# Aqua

![Aqua](./images/style-aqua.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `UI Style (Vibe)`
* **Primary API / Symbol:** `yellow`
* **Also Called (Aliases):** `Aqua interface, Mac OS X Aqua`
* **Official Source URL:** [https://namethatui.com/styles/aqua](https://namethatui.com/styles/aqua)

---

```markdown
# Aqua — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/styles/aqua](https://namethatui.com/styles/aqua) · **Category:** `UI Style (Vibe)` · **Primary API / Symbol:** `yellow`
> **Also Called ("Sloppy Words"):** *Aqua interface, Mac OS X Aqua*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Create the surface using Apple's original Aqua (early Mac OS X) design language. Defining signals: candy-gel controls — luminous water-blue fills with a bright specular highlight across the top half and an inner glow, e.g. layered radial-gradient highlight over linear-gradient(#5f9ff5, #1862d8); fine pinstriped window surfaces (repeating-linear-gradient, ~1px stripes at low contrast); gumdrop red/yellow/green window controls as glossy spheres, top-left; the default button gently pulsing (a slow glow loop, disabled under prefers-reduced-motion); soft deep window shadows. Keep layout and density flexible — this is chrome and controls, not a layout system. Do not drift into generic glassmorphism: Aqua's material is glossy opaque gel on pinstripes, not blurred frosted panels. Preserve 4.5:1 text contrast on gel fills (white text with a subtle down-shadow is period-correct), full keyboard focus states, and reduced-motion alternatives for the pulse.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my 'Aqua' (`yellow`) implementation. Rule out: broken keyboard focus order or missing ARIA roles; clipping caused by parent `overflow: hidden` or stacking context (`z-index`) conflicts; layout shift during state transitions; missing `prefers-reduced-motion` and `env(safe-area-inset-*)` handling; and low contrast in dark/light mode.

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Candy-gel controls
- Depth & light
- Buttons and scrollbar thumbs look like translucent gel drops: a bright specular highlight across the top, an inner glow beneath, and color that seems lit from inside.
- Pinstriped surfaces
- Surface & material
- Window backgrounds and title bars carry fine alternating light stripes — the signature Aqua wallpaper-of-the-chrome.
- Gumdrop window controls
- Geometry & borders
- The close/minimize/zoom trio as glossy red, yellow, and green candy spheres in the title bar's top-left corner.
- Luminous water blue
- Color & contrast
- The palette centers on Aqua's namesake: saturated, water-lit blue for default buttons, selection, scrollbars, and progress.

### 3.2 Exact Framework Symbols ("In Code")
`background: repeating-linear-gradient(180deg, #f2f4f7 0 2px, #e7eaef 2px 4px);`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Aqua** (`yellow`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `yellow` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Aqua (yellow)
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="style-aqua"]') {
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
