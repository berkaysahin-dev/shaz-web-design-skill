# Multi-select

![Multi-select](./images/multi-select.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `Select.ValueText`
* **Also Called (Aliases):** `multiselect, multiple select, multi-select dropdown, checkbox dropdown, multi-select listbox, token multi-select, transfer list, pick list, shuttle`
* **Official Source URL:** [https://namethatui.com/web/multi-select](https://namethatui.com/web/multi-select)

---

```markdown
# Multi-select — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/web/multi-select](https://namethatui.com/web/multi-select) · **Category:** `Web UI` · **Primary API / Symbol:** `Select.ValueText`
> **Also Called ("Sloppy Words"):** *multiselect, multiple select, multi-select dropdown, checkbox dropdown, multi-select listbox, token multi-select, transfer list, pick list, shuttle*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Build a Multi-select with role="listbox" and aria-multiselectable="true": open it from a compact trigger that shows the selected count, keep the searchable option list open while several role="option" rows toggle aria-selected, render each selected value as a removable chip, and keep keyboard focus separate from selection. For the two-pane variant use an Ant Transfer with titled Available and Selected panes, targetKeys for the chosen items, and move buttons disabled when nothing eligible is checked.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my multi-select (role="listbox" aria-multiselectable, <select multiple>, Ant Select mode="multiple", MUI Autocomplete multiple). Rule out: the popup closing after the first pick because the option click still runs a close-on-select handler written for a single-value select; selection held as an array but compared by object identity, so re-rendered options lose their checked look; the trigger count derived from a different source than the option list and going stale; a drawn checkbox and aria-selected drifting apart, so screen readers announce the opposite of what is on screen; filtering the list silently dropping already-selected values that are no longer visible; a token remove button stealing focus or reopening the popup instead of removing just that one value; transfer-list move buttons left enabled when nothing eligible is checked. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Selected-value summary
- Select.ValueText
- “The text in the dropdown that says 2 selected” is the selected-value summary.
- Option checkbox (selected-option indicator)
- role="option" aria-selected="true"
- “The little boxes beside each dropdown item” are the option checkboxes, the drawn form of aria-selected.
- Selected token and its remove button
- TagsInput.Item / TagsInput.ItemDeleteTrigger
- “The little filter pills that appear after I choose things, each with an x” are the selected tokens and their remove buttons.
- Source and target lists
- <Transfer dataSource targetKeys>
- “The two boxes, available things on the left and chosen things on the right” are the source and target lists of a transfer list.
- Transfer actions (move buttons)
- Transfer actions
- “The arrow buttons between the two boxes” are the transfer actions.

### 3.2 Exact Framework Symbols ("In Code")
`Select.ValueText` · `role="option" aria-selected="true"` · `TagsInput.Item / TagsInput.ItemDeleteTrigger` · `<Transfer dataSource targetKeys>` · `Transfer actions` · `<select multiple>` · `aria-multiselectable="true"` · `role="option" aria-selected` · `<Autocomplete multiple>` · `<Select mode="multiple">` · `<Select.Root multiple>` · `<Transfer targetKeys>`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Multi-select** (`Select.ValueText`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `Select.ValueText` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Multi-select (Select.ValueText)
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="multi-select"]') {
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
