# Neumorphism

![Neumorphism](./images/style-neumorphism.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `UI Style (Vibe)`
* **Primary API / Symbol:** `background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;`
* **Also Called (Aliases):** `Soft UI, neomorphism, soft neumorphic UI`
* **Official Source URL:** [https://namethatui.com/styles/neumorphism](https://namethatui.com/styles/neumorphism)

---

```markdown
# Neumorphism — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/styles/neumorphism](https://namethatui.com/styles/neumorphism) · **Category:** `UI Style (Vibe)` · **Primary API / Symbol:** `background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;`
> **Also Called ("Sloppy Words"):** *Soft UI, neomorphism, soft neumorphic UI*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Create the surface using neumorphism (Soft UI). Defining signals: controls share the background's exact matte color; raised elements get dual soft shadows (light top-left, dark bottom-right); pressed/input states invert the shadows inward (inset); no borders anywhere; generous rounded corners. Keep the base hue flexible (classically a pale grey-blue like #e0e5ec) and allow one saturated accent for the primary action. Use CSS box-shadow pairs, e.g. raised: box-shadow: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); pressed: the same pair with inset. Do not drift into skeuomorphism; the decisive difference is that neumorphic surfaces are one uniform material-less matte — no textures, gloss, or imitated materials. Preserve readable text contrast, a visible non-shadow cue for focus and states (WCAG non-text contrast will fail on shadows alone), and reduced-motion support.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my 'Neumorphism' (`background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;`) implementation. Rule out: broken keyboard focus order or missing ARIA roles; clipping caused by parent `overflow: hidden` or stacking context (`z-index`) conflicts; layout shift during state transitions; missing `prefers-reduced-motion` and `env(safe-area-inset-*)` handling; and low contrast in dark/light mode.

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- One continuous surface
- Surface & material
- Controls and background share the SAME matte color — elements aren't placed on the page, they're molded from it.
- Dual soft shadows
- Depth & light
- Every raised element carries two blurred shadows: a light one up-left and a dark one down-right, as if lit from one soft corner light.
- Pressed (inset) states
- Depth & light
- Inputs and active states invert the shadow pair inward, so the element looks pressed INTO the surface rather than raised from it.
- No borders, whisper contrast
- Geometry & borders
- Edges exist only where the shadows fade — no outlines, no strong fills; the whole UI sits within a narrow band of one hue.

### 3.2 Exact Framework Symbols ("In Code")
`box-shadow: inset -4px -4px 8px rgba(255,255,255,.75), inset 4px 4px 8px rgba(163,177,198,.55);`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Neumorphism** (`background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Neumorphism (background:#e0e5ec; box-shadow:-6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(163,177,198,.6); border-radius:16px;)
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="style-neumorphism"]') {
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
