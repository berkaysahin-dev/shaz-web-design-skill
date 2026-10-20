# Status Dot (Presence Indicator)

![Status Dot (Presence Indicator)](./images/status-dot.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `<PresenceBadge status="available"`
* **Also Called (Aliases):** `presence indicator, presence badge, online indicator, live indicator, availability dot, dot badge, pulse dot, ping dot`
* **Official Source URL:** [https://namethatui.com/web/status-dot](https://namethatui.com/web/status-dot)

---

```markdown
# Status Dot (Presence Indicator) — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/web/status-dot](https://namethatui.com/web/status-dot) · **Category:** `Web UI` · **Primary API / Symbol:** `<PresenceBadge status="available"`
> **Also Called ("Sloppy Words"):** *presence indicator, presence badge, online indicator, live indicator, availability dot, dot badge, pulse dot, ping dot*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Use a status dot (presence indicator), like Fluent UI PresenceBadge or Material UI Badge variant="dot" with overlap="circular": a small filled circle overlapping the avatar's lower right edge, with a 2px border in the surface color as a separation ring. Drive the color from one explicit status value (available green, away amber, busy red, offline gray) and put the same meaning in visible text or the row's accessible name, never color alone. For a live state, center a motion-safe animate-ping halo behind the dot and keep the solid core still.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my status dot / presence indicator (PresenceBadge status, Badge variant="dot" overlap="circular", animate-ping halo, separation ring border). Rule out: the dot positioned against the avatar's square box instead of its circle, so it floats off the rounded edge (Material UI needs overlap="circular"); the separation ring drawn with outline or ring utilities in a hardcoded white, so it shows as a pale halo in dark mode instead of matching the surface; animate-ping applied to the dot itself so the whole dot fades out, instead of to a sibling halo behind a solid core; the halo not centered on the dot, or clipped by an overflow-hidden avatar wrapper; the animation ignoring prefers-reduced-motion; status conveyed by color alone with no text or accessible name, so green versus red is invisible to screen readers and color-blind users; role="status" put on a persistent dot so assistive tech announces every re-render; an unread dot and a presence dot sharing one component and one color, so nobody can tell new content from online; the dot scaling with the avatar until it is too small to see at 24px. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- PresenceBadge
- “The little green dot” is the status dot itself: a small filled circle, no number inside, overlapping the avatar's lower right edge.
- Status state
- status="away"
- “The dot that changes from green to orange or gray” is showing its status state: one named value (available, away, busy, offline) picks the color.
- animate-ping
- “The pulsing ring around the live dot” is the ping halo (also pulse ring or ripple): it grows and fades while the solid dot stays still.
- Separation ring
- “The little white cutout around the dot on the avatar” is the separation ring: a border in the surface color that keeps the dot readable over a photo.

### 3.2 Exact Framework Symbols ("In Code")
`PresenceBadge` · `status="away"` · `animate-ping` · `border` · `<PresenceBadge status="available" />` · `<Badge variant="dot">` · `<Badge status="success" />` · `<Badge dot>`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Status Dot (Presence Indicator)** (`<PresenceBadge status="available"`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `<PresenceBadge status="available"` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Status Dot (Presence Indicator) (<PresenceBadge status="available")
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="status-dot"]') {
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
