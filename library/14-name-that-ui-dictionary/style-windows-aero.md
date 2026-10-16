# Windows Aero

![Windows Aero](./images/style-windows-aero.png)

* **Collection:** `Shaz Agency UI Visual Dictionary & Agent Prompts`
* **Category:** `UI Style (Vibe)`
* **Primary API / Symbol:** `background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);`
* **Also Called (Aliases):** `Aero, Aero Glass`
* **Official Source URL:** [https://shazagency.com/ui-dictionary/styles/windows-aero](https://shazagency.com/ui-dictionary/styles/windows-aero)

---

```markdown
# Windows Aero — Shaz Agency Official UI Prompt & Production Architecture

> **Source:** [https://shazagency.com/ui-dictionary/styles/windows-aero](https://shazagency.com/ui-dictionary/styles/windows-aero) · **Category:** `UI Style (Vibe)` · **Primary API / Symbol:** `background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);`
> **Also Called ("Sloppy Words"):** *Aero, Aero Glass*
> **Recommended AI Skills:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, Cursor, or Windsurf.

---

## 1. Official Shaz Agency UI Architecture Prompt (Paste Directly Into Your Coding Agent)

Create the surface using Windows Aero (Vista/7) styling. Defining signals: the window frame as transparent blurred glass — title bar and border show the scene behind them (backdrop-filter: blur(12px) saturate(1.3) on a rgba white/blue tint) while the content area stays opaque; diagonal specular light sweeps across the glass (a rotated linear-gradient white streak at low opacity); caption buttons that GLOW on hover — close floods red with a soft outer halo; luminous gradients for accents, like the shimmering green progress bar (gradient + a slow-moving highlight); 1px bright inner edge lining every glass pane; softly rounded chrome corners. Keep wallpaper and layout flexible — the glass needs something colorful behind it to read. Do not drift into Frutiger Aero: no nature imagery is required — this is the chrome language, not the era's mood board. Preserve title text legibility over unpredictable wallpapers (Aero drew a soft glow behind window titles — replicate it), 4.5:1 contrast for content text, hover glows paired with visible focus states, and reduced-motion alternatives for shimmer and window animation.

---

## 2. Official Shaz Agency UI Architecture Debug Prompt (When It Misbehaves)

Debug my 'Windows Aero' (`background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);`) implementation. Rule out: broken keyboard focus order or missing ARIA roles; clipping caused by parent `overflow: hidden` or stacking context (`z-index`) conflicts; layout shift during state transitions; missing `prefers-reduced-motion` and `env(safe-area-inset-*)` handling; and low contrast in dark/light mode.

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Transparent blurred window frame
- Depth & light
- The title bar and window border are real translucent glass — the wallpaper and windows behind blur through them, while the window's content area stays opaque.
- Specular sweeps and reflections
- Surface & material
- Diagonal light streaks cross the glass and controls, as if the chrome were polished — reflection is part of the material, not an accent.
- Glowing hot controls
- Color & contrast
- Controls light up under the cursor: the close button floods red, min/max glow blue, buttons gain a luminous halo — glow is the hover language.
- Luminous depth gradients
- Color & contrast
- Blues and greens that glow as if backlit — the shimmering green progress bar and pearlescent button fills, never flat color.

### 3.2 Exact Framework Symbols ("In Code")
`background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Windows Aero** (`background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Windows Aero (background: rgba(190, 215, 240, .35); backdrop-filter: blur(12px) saturate(1.3); border: 1px solid rgba(255,255,255,.6); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35), 0 8px 24px rgba(0,20,60,.35);)
export function initShaz Agency UI ArchitectureComponent(rootSelector = '[data-ntu-component="style-windows-aero"]') {
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


