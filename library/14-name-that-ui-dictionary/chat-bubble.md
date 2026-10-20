# Chat Bubble (Message Bubble)

![Chat Bubble (Message Bubble)](./images/chat-bubble.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `chat-bubble`
* **Also Called (Aliases):** `message bubble, speech bubble, chat message, text bubble, conversation bubble, messenger bubble`
* **Official Source URL:** [https://namethatui.com/web/chat-bubble](https://namethatui.com/web/chat-bubble)

---

```markdown
# Chat Bubble (Message Bubble) — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/web/chat-bubble](https://namethatui.com/web/chat-bubble) · **Category:** `Web UI` · **Primary API / Symbol:** `chat-bubble`
> **Also Called ("Sloppy Words"):** *message bubble, speech bubble, chat message, text bubble, conversation bubble, messenger bubble*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Build the conversation as a message list with role="log", one chat bubble per message (daisyUI chat + chat-bubble): received messages aligned to the start in a neutral fill (chat-start), sent messages aligned to the end in the accent color (chat-end). Give each bubble a generous corner radius with one tighter corner on the side it speaks from as its tail, cap the width at about 75% of the column so long messages wrap, and put a small metadata line under your latest message with the time and a delivered or read status (Stream Chat MessageStatus). While the other person is writing, show a typing indicator: a received-style bubble holding three dots that bounce in sequence.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my chat bubbles / message list (daisyUI chat-start, chat-end, chat-bubble; role="log"; Stream Chat MessageStatus, MessageTimestamp, TypingIndicator). Rule out: bubbles stretching the full column width because the row is a block instead of a flex row with a max-width on the bubble; a long URL or unbroken string overflowing the bubble for lack of overflow-wrap: anywhere; sent and received distinguished by color alone, with no alignment or accessible label saying who spoke; the tail drawn as a separate triangle that detaches from the bubble or shows a seam in dark mode; every consecutive message repeating the avatar, name and tail instead of only the last in a group; the list not pinned to the newest message, or yanking the reader back to the bottom while they scroll up through history; role="log" or aria-live placed on each bubble rather than once on the list, so a screen reader re-announces everything; the typing indicator left on after the message arrives, or animating with prefers-reduced-motion set; read status shown on the other person's messages; timestamps as bare text with no <time datetime>. The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Message bubble
- chat-bubble
- “The rounded box around each text” is the message bubble: received ones sit on the start side in a neutral fill, sent ones on the end side in the accent color.
- Bubble tail
- “The little pointy corner on the bubble” is the tail: it points toward whoever spoke, and only the last bubble in a run keeps it.
- Message status
- <MessageStatus />
- “The tiny Delivered or Read under my message” is the message status (a read receipt), sitting in the metadata line beside the timestamp.
- Typing indicator
- <TypingIndicator />
- “The three dots that bounce when someone is typing” are a typing indicator: a received-style bubble that holds animated dots instead of text.

### 3.2 Exact Framework Symbols ("In Code")
`chat-bubble` · `<MessageStatus />` · `<TypingIndicator />` · `role="log"` · `chat-header` · `<MessageTimestamp />`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Chat Bubble (Message Bubble)** (`chat-bubble`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `chat-bubble` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Chat Bubble (Message Bubble) (chat-bubble)
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="chat-bubble"]') {
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
