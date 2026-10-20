# Timeline

![Timeline](./images/timeline.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `lab missing because Timeline is not in @mui`
* **Also Called (Aliases):** `vertical timeline, activity timeline, activity feed, event history, changelog timeline, history log`
* **Official Source URL:** [https://namethatui.com/web/timeline](https://namethatui.com/web/timeline)

---

```markdown
# Timeline — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/web/timeline](https://namethatui.com/web/timeline) · **Category:** `Web UI` · **Primary API / Symbol:** `lab missing because Timeline is not in @mui`
> **Also Called ("Sloppy Words"):** *vertical timeline, activity timeline, activity feed, event history, changelog timeline, history log*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Build a vertical Timeline (Material UI Timeline from @mui/lab, Ant Design Timeline items) as an <ol> of events in chronological order. Each item gets a TimelineDot joined to the next by a TimelineConnector, the event title and detail as TimelineContent on one side, and its time in a <time datetime> element as TimelineOppositeContent on the other. Finished events use a solid dot, the event still in progress uses Ant Design's item loading state, and the connector stops at the last dot instead of trailing past it.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my Timeline (TimelineDot, TimelineConnector, TimelineOppositeContent, Ant Design items with mode and loading). Rule out: the connector drawn as one tall line behind the whole list, so it overshoots the last dot or stops short when an item wraps to two lines (each item should own the segment below its dot); dots and connector on different horizontal centers, off by a pixel because one uses a border and the other a width; the opposite-content column with no fixed width, so timestamps of different lengths push the line out of vertical alignment; deprecated Ant Design props still in use (dot, label, children, position, pending are replaced by icon, title, content, placement, loading); mode="left" or "right" where the current values are "start" and "end"; events built as divs with no list semantics, so a screen reader hears no order or count; dates as bare text with no <time datetime>; newest-first order done with CSS flex reversal, which flips the visual order but not the reading order; @mui/lab missing because Timeline is not in @mui/material. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Timeline dot
- <TimelineDot />
- “The little circle next to each event” is the timeline dot (Chakra: Timeline.Indicator; Ant Design: the item's icon). Solid means it happened.
- Timeline connector
- <TimelineConnector />
- “The line running down between the dots” is the timeline connector: one segment per event, from its dot to the next, ending at the last dot.
- Opposite content
- <TimelineOppositeContent>
- “The time on the other side of the line” is the opposite content: whatever sits across the line from the event, nearly always its timestamp.
- In-progress item
- loading: true
- “The last dot that is still spinning or hollow” is the in-progress item: the one event that has not finished (Ant Design: the item's loading flag).

### 3.2 Exact Framework Symbols ("In Code")
`<TimelineDot />` · `<TimelineConnector />` · `<TimelineOppositeContent>` · `loading: true` · `<Timeline>` · `<ol>` · `<Timeline items={items} />` · `<Timeline.Root>` · `<time datetime="2026-09-20">`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Timeline** (`lab missing because Timeline is not in @mui`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `lab missing because Timeline is not in @mui` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Timeline (lab missing because Timeline is not in @mui)
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="timeline"]') {
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
