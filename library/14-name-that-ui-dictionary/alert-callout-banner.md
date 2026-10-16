# Inline Alert vs. Callout vs. Banner

![Inline Alert vs. Callout vs. Banner](./images/alert-callout-banner.png)

* **Collection:** `Shaz Agency UI Visual Dictionary & Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `callout`
* **Also Called (Aliases):** `inline alert, inline notification, callout, admonition, notice, warning box, announcement banner, notification banner, site alert, status banner`
* **Official Source URL:** [https://shazagency.com/ui-dictionary/web/alert-callout-banner](https://shazagency.com/ui-dictionary/web/alert-callout-banner)

---

```markdown
# Inline Alert vs. Callout vs. Banner — Shaz Agency Official UI Prompt & Production Architecture

> **Source:** [https://shazagency.com/ui-dictionary/web/alert-callout-banner](https://shazagency.com/ui-dictionary/web/alert-callout-banner) · **Category:** `Web UI` · **Primary API / Symbol:** `callout`
> **Also Called ("Sloppy Words"):** *inline alert, inline notification, callout, admonition, notice, warning box, announcement banner, notification banner, site alert, status banner*
> **Recommended AI Skills:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, Cursor, or Windsurf.

---

## 1. Official Shaz Agency UI Architecture Prompt (Paste Directly Into Your Coding Agent)

Build an Inline Alert with Material UI <Alert severity="warning"> inside the content flow. Give it a lightly tinted warning surface, a matching severity icon, a narrow border-inline-start accent, one concise message, and an optional trailing action; add a dismiss control only if hiding the notice is safe. If the message is inserted dynamically, use role="alert" only for urgent interruption and role="status" for advisory updates; a static callout present on page load does not need a live region role.

---

## 2. Official Shaz Agency UI Architecture Debug Prompt (When It Misbehaves)

Debug my inline alert / callout / announcement banner (MUI Alert, Ant Design Alert, aria-live regions). Rule out: role="banner" put on the notification banner — that is the landmark for the page header, so screen readers announce a second site header instead of a message; role="alert" left on a notice that is already in the DOM at page load, so it interrupts on every navigation; a message injected together with its live region node, which some browser and screen-reader pairs fail to announce (rendering the empty region first, then setting its text, is the reliable route); severity carried by CSS color alone, so the icon and the text still say the wrong thing; the dismiss control unmounting the notice while focus was inside it, dropping focus to the body; the "banner" rendered inside a scrolling content column so it never actually spans the page. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Accent border
- border-inline-start
- “The colored line down the left side of the box” is the accent border (the leading accent bar) — border-inline-start, so it flips to the right edge in right-to-left layouts.
- Severity surface
- variant="standard"
- “The pale yellow background behind the warning” is the severity surface — one tinted container treatment that changes with the severity (standard, outlined, or filled). The blue banner and the yellow alert are the same treatment at two severities.
- Severity indicator
- severity="warning"
- “The little warning triangle at the left” is the severity indicator — the icon and the color, picked together by severity (Material UI) or type (Ant Design), never by color alone.
- Dismiss control
- “The little x on the right of the notice” is the dismiss control. Having one is what makes a notice an alert or a banner rather than a permanent callout.
- Alert action
- “The learn more link at the end of the warning box” is the alert action — one concise follow-up such as Review settings, in the action slot.

### 3.2 Exact Framework Symbols ("In Code")
`border-inline-start` · `variant="standard"` · `severity="warning"` · `onClose` · `action` · `<Alert severity="warning">` · `<Alert type="warning" />` · `role="alert"` · `role="status"` · `> [!WARNING]` · `.usa-site-alert`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Inline Alert vs. Callout vs. Banner** (`callout`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `callout` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Inline Alert vs. Callout vs. Banner (callout)
export function initShaz Agency UI ArchitectureComponent(rootSelector = '[data-ntu-component="alert-callout-banner"]') {
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


