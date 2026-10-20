# Steps

![Steps](./images/steps.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `stepper (aria-current="step", activeStep`
* **Also Called (Aliases):** `stepper, wizard progress indicator, step indicator, step-by-step indicator, multi-step progress, step bar`
* **Official Source URL:** [https://namethatui.com/web/steps](https://namethatui.com/web/steps)

---

```markdown
# Steps — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/web/steps](https://namethatui.com/web/steps) · **Category:** `Web UI` · **Primary API / Symbol:** `stepper (aria-current="step", activeStep`
> **Also Called ("Sloppy Words"):** *stepper, wizard progress indicator, step indicator, step-by-step indicator, multi-step progress, step bar*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Build a Steps indicator for this checkout as an <ol> of labeled stages, with the current item marked aria-current="step". Show each stage as a numbered circular Steps.Indicator (Material UI StepIcon), join adjacent stages with a StepConnector (Steps.Separator), replace completed numbers with checkmarks, and keep future stages muted. Drive it from one zero-based index (Material UI activeStep / Ant Design current) and derive completed, current and upcoming from that single value; the arrival state should be step 2, Payment, so all three states are visible at once.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my Steps / stepper (aria-current="step", activeStep / current index, StepConnector tint). Rule out: more than one stage carrying aria-current="step", or none at all, so assistive tech announces the wrong position; the zero-based activeStep mixed with the 1-based number printed inside the circle (convert in exactly one place); completed state derived from a separate flag that drifts from the current index, so a checkmark sits ahead of the current stage; the connector fill tracking a different index than the indicators, leaving a tinted line into an upcoming step; the whole thing built as role="progressbar" or a plain bar, so screen readers hear "60%" instead of "Payment, step 3 of 4"; stages rendered as divs with no ordered-list semantics and no accessible name on each step; the step label associated with nothing, so the circle announces a bare number; the index kept only in component state, so a refresh or the browser Back button drops the user to step 1; a validation-gated flow letting a click jump ahead to an unreached stage. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Step indicator
- Steps.Indicator
- “The numbered circle” is the step indicator (Material UI calls it StepIcon): one compact circle per stage, holding the stage number.
- Step connector
- <StepConnector />
- “The line connecting the circles” is the step connector (Chakra: Steps.Separator; Ant Design names it itemRail): tinted behind you, muted ahead.
- Completed step
- Steps.Status
- “The circle that turns into a checkmark” is a completed step: the finished stage swaps its number for a check and keeps its label.
- Current step
- aria-current="step"
- “The highlighted circle, the one I'm on now” is the current step. Material UI calls it the active step, Ant Design gives it status="process".
- <StepLabel />
- “The text under each number” is the step label (Chakra: Steps.Title; Ant Design: the item's title): the short stage name, like Shipping or Payment.

### 3.2 Exact Framework Symbols ("In Code")
`Steps.Indicator` · `<StepConnector />` · `Steps.Status` · `aria-current="step"` · `<StepLabel />` · `<ol>` · `<Stepper activeStep={2}>` · `<Steps current={2} items={items} />` · `<Steps.Root step={2} count={4}>`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Steps** (`stepper (aria-current="step", activeStep`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `stepper (aria-current="step", activeStep` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Steps (stepper (aria-current="step", activeStep)
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="steps"]') {
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
