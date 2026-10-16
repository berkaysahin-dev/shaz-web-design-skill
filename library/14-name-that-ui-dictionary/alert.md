# Alert

![Alert](./images/alert.png)

* **Collection:** `Shaz Agency UI Visual Dictionary & Agent Prompts`
* **Category:** `macOS UI`
* **Primary API / Symbol:** `.informational`
* **Also Called (Aliases):** `alert dialog, warning dialog, confirmation dialog, message box, system prompt`
* **Official Source URL:** [https://shazagency.com/ui-dictionary/macos/alert](https://shazagency.com/ui-dictionary/macos/alert)

---

```markdown
# Alert — Shaz Agency Official UI Prompt & Production Architecture

> **Source:** [https://shazagency.com/ui-dictionary/macos/alert](https://shazagency.com/ui-dictionary/macos/alert) · **Category:** `macOS UI` · **Primary API / Symbol:** `.informational`
> **Also Called ("Sloppy Words"):** *alert dialog, warning dialog, confirmation dialog, message box, system prompt*
> **Recommended AI Skills:** Activate **`Shaz Agency Web Design` (`shaz-agency-web-design`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, Cursor, or Windsurf.

---

## 1. Official Shaz Agency UI Architecture Prompt (Paste Directly Into Your Coding Agent)

“The little warning window with the app icon and two buttons” is an alert — NSAlert. It shows your app icon (badged with a yellow caution triangle for warnings), a bold message line, smaller informative text, and buttons where the first added is the blue default. Run it app-modal with runModal(), or attach it to a single window with beginSheetModal(for:) — then it slides out of that window's title bar like a sheet. The “Don't ask me again” checkbox is its built-in suppression button.
If you called it…
“
the popup with the app icon and a yellow warning triangle
”
“
small window in the middle asking are you sure with two buttons
”
“
the box with a don't ask me again checkbox
”
“
warning message with a bold line and smaller gray text under it
”
“
the blue button that presses itself when you hit enter
”
“
confirmation popup before deleting something
”
…you meant a
alert
.
Anatomy — every part, named
1
Badged app icon
NSAlert.icon
“The yellow triangle over the app icon” is the alert icon — your app's icon, badged with the caution symbol when alertStyle is .warning or .critical.
2
Message text
NSAlert.messageText
“The bold line” is messageText — the one-sentence summary, phrased as a question when the alert asks for a decision.
3
Informative text
NSAlert.informativeText
“The smaller gray text under the bold line” is informativeText — the consequences, spelled out in a sentence.
4
Suppression checkbox
NSAlert.showsSuppressionButton
“The don't ask me again checkbox” is the suppression button — enable it with showsSuppressionButton and read suppressionButton.state after the alert returns.
5
Default button
NSAlert.addButton(withTitle:)
“The blue button” is the default button — the first button added to the alert; it gets the accent color and the Return key.
Prompt — paste into your agent
Show a native macOS alert with NSAlert (SwiftUI: .alert): messageText is the bold summary line, informativeText the smaller explanation. Add buttons with addButton(withTitle:) — the first one becomes the blue default button and answers the Return key; a button titled Cancel answers Escape. Set showsSuppressionButton = true for the “Don't ask me again” checkbox and read suppressionButton.state afterwards.

---

## 2. Official Shaz Agency UI Architecture Debug Prompt (When It Misbehaves)

Debug my macOS alert (NSAlert, SwiftUI View.alert). Rule out: presenting off the main thread; runModal blocking the whole app when beginSheetModal(for:) attached to one window was intended; the return-key default being the FIRST button added, not the one you expect; the suppression checkbox state never persisted to defaults. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Badged app icon
- NSAlert.icon
- “The yellow triangle over the app icon” is the alert icon — your app's icon, badged with the caution symbol when alertStyle is .warning or .critical.
- Message text
- NSAlert.messageText
- “The bold line” is messageText — the one-sentence summary, phrased as a question when the alert asks for a decision.
- Informative text
- NSAlert.informativeText
- “The smaller gray text under the bold line” is informativeText — the consequences, spelled out in a sentence.
- Suppression checkbox
- NSAlert.showsSuppressionButton
- “The don't ask me again checkbox” is the suppression button — enable it with showsSuppressionButton and read suppressionButton.state after the alert returns.
- Default button
- NSAlert.addButton(withTitle:)
- “The blue button” is the default button — the first button added to the alert; it gets the accent color and the Return key.

### 3.2 Exact Framework Symbols ("In Code")
`NSAlert.icon` · `NSAlert.messageText` · `NSAlert.informativeText` · `NSAlert.showsSuppressionButton` · `NSAlert.addButton(withTitle:)` · `NSAlert` · `.alert(_:isPresented:actions:message:)` · `NSAlert.alertStyle` · `NSAlert.beginSheetModal(for:completionHandler:)`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Alert** (`.informational`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `.informational` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Alert (.informational)
export function initShaz Agency UI ArchitectureComponent(rootSelector = '[data-ntu-component="alert"]') {
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


