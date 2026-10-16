# Web Brutalism

![Web Brutalism](./images/style-web-brutalism.png)

* **Collection:** `Shaz Agency UI Visual Dictionary & Agent Prompts`
* **Category:** `UI Style (Vibe)`
* **Primary API / Symbol:** `<h1>, <hr>, <table>, <ul> with UA default styles`
* **Also Called (Aliases):** `brutalist web design, raw web, default HTML look`
* **Official Source URL:** [https://shazagency.com/ui-dictionary/styles/web-brutalism](https://shazagency.com/ui-dictionary/styles/web-brutalism)

---

```markdown
# Web Brutalism — Shaz Agency Official UI Prompt & Production Architecture

> **Source:** [https://shazagency.com/ui-dictionary/styles/web-brutalism](https://shazagency.com/ui-dictionary/styles/web-brutalism) · **Category:** `UI Style (Vibe)` · **Primary API / Symbol:** `<h1>, <hr>, <table>, <ul> with UA default styles`
> **Also Called ("Sloppy Words"):** *brutalist web design, raw web, default HTML look*
> **Recommended AI Skills:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, Cursor, or Windsurf.

---

## 1. Official Shaz Agency UI Architecture Prompt (Paste Directly Into Your Coding Agent)

Create the page using strict Web Brutalism. Defining signals: browser-default materials (Times/system serif or monospace, default-blue underlined links); exposed document structure — headings, lists, tables, horizontal rules in source order; zero decorative rendering (no shadows, gradients, or rounded corners; at most 1px solid borders on a plain ground); utility-first density that loads instantly. Keep monospace vs serif and all-caps accents flexible. Use semantic HTML with minimal CSS — default UA styles are the design; resist resets that soften them. Do not drift into Neobrutalism; the decisive difference is that nothing here is styled to look raw — saturated blocks, thick designed borders, and offset shadows would make it a graphic costume. Preserve readable text sizes, focus visibility, and honest link affordances (underlines stay).

---

## 2. Official Shaz Agency UI Architecture Debug Prompt (When It Misbehaves)

Debug my 'Web Brutalism' (`<h1>, <hr>, <table>, <ul> with UA default styles`) implementation. Rule out: broken keyboard focus order or missing ARIA roles; clipping caused by parent `overflow: hidden` or stacking context (`z-index`) conflicts; layout shift during state transitions; missing `prefers-reduced-motion` and `env(safe-area-inset-*)` handling; and low contrast in dark/light mode.

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Browser-default materials
- Times/system serif or monospace, default-blue underlined links, visited-purple — the stack looks unstyled even when it's deliberate.
- Exposed document structure
- Layout & composition
- The page reads as a document: headings, lists, tables, and <hr> dividers in source order — structure IS the layout.
- Zero decorative rendering
- Depth & light
- No shadows, gradients, rounded corners, or imitation materials; at most 1px solid borders. Flat white (or single-color) ground.
- Utility-first density
- Layout & composition
- Information is packed tight and loads instantly — the aesthetic argument is speed and honesty, not beauty.

### 3.2 Exact Framework Symbols ("In Code")
`<h1>, <hr>, <table>, <ul> with UA default styles` · `font-family: 'Times New Roman', serif; a { color: #0000ee; } a:visited { color: #551a8b; }`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Web Brutalism** (`<h1>, <hr>, <table>, <ul> with UA default styles`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `<h1>, <hr>, <table>, <ul> with UA default styles` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Web Brutalism (<h1>, <hr>, <table>, <ul> with UA default styles)
export function initShaz Agency UI ArchitectureComponent(rootSelector = '[data-ntu-component="style-web-brutalism"]') {
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


