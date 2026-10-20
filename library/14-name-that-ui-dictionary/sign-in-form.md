# Sign-in Form

![Sign-in Form](./images/sign-in-form.png)

* **Collection:** `NameThatUI Visual Dictionary & Official Agent Prompts`
* **Category:** `Web UI`
* **Primary API / Symbol:** `"Continue with Google"`
* **Also Called (Aliases):** `login form, login page, login screen, sign-in page, auth form, authentication form`
* **Official Source URL:** [https://namethatui.com/web/sign-in-form](https://namethatui.com/web/sign-in-form)

---

```markdown
# Sign-in Form — NameThatUI Official Prompt & Production Architecture

> **Source:** [https://namethatui.com/web/sign-in-form](https://namethatui.com/web/sign-in-form) · **Category:** `Web UI` · **Primary API / Symbol:** `"Continue with Google"`
> **Also Called ("Sloppy Words"):** *login form, login page, login screen, sign-in page, auth form, authentication form*
> **Recommended AI Skills:** Activate **`UI UX Pro Max` (`ui-ux-pro-max`)** and **`Framer Motion` (`framer-motion` / `animate`)** when running this prompt in Claude Code, OpenAI Codex, Cursor, Antigravity, v0, or Lovable.

---

## 1. Official NameThatUI Prompt (Paste Directly Into Your Coding Agent)

Build a sign-in form (login form) with native form semantics: a real <form> containing a labeled email field (<input type="email" autocomplete="username">), a labeled password field (<input type="password" autocomplete="current-password">), and a <button type="submit"> labeled "Sign in" so Enter submits. Add the password visibility toggle as a <button type="button"> with accessible name "Show password"; put the federated sign-in buttons ("Continue with Google" / "Continue with Apple") above a sign-in method divider — the thin rule with "or" in the middle. The autocomplete tokens are load-bearing: they are what makes password managers recognize and fill the fields.

---

## 2. Official NameThatUI Debug Prompt (When It Misbehaves)

Debug my sign-in form (autocomplete tokens, password managers, Enter submission). Rule out: the password manager not filling because the email field lacks autocomplete="username" or the password says new-password on a SIGN-IN form; Enter doing nothing because the inputs are not inside a real <form> with a <button type="submit">; the eye toggle submitting the form because it is missing type="button"; mobile keyboards capitalizing the identifier because it is type="text" without autocapitalize="none"; framework state staying empty even though the browser autofilled the DOM (read values at submit time). The symptom:

---

## 3. UI Anatomy & Cross-Framework API Symbols

### 3.1 Named Anatomy & Defining Signals
- Federated sign-in buttons
- "Continue with Google"
- “The sign in with google / apple buttons” are federated sign-in buttons (identity-provider buttons; “social login” when the providers are social) — the approved labels are “Sign in with…” or “Continue with…”.
- Sign-in method divider
- “The line with OR in the middle” is the sign-in method divider — a horizontal rule interrupted by the word “or”, separating the federated buttons from the email-and-password fields.
- Password visibility toggle
- <button type="button">
- “The eye icon in the password box” is the password visibility toggle (show-password button) — a type="button" so clicking it never submits the form.

### 3.2 Exact Framework Symbols ("In Code")
`"Continue with Google"` · `"or"` · `<button type="button">` · `autocomplete="current-password"` · `autocomplete="username"` · `<input type="password">` · `autocomplete="username webauthn"` · `navigator.credentials.get({ publicKey, mediation: "conditional" })`

---

## 4. Complete Production Implementation Specification (HTML5 / WAI-ARIA / CSS / React / SwiftUI)

When building or refactoring **Sign-in Form** (`"Continue with Google"`), enforce the following engineering standards:

### 4.1 Semantic DOM, Accessibility (WAI-ARIA) & Keyboard Ergonomics
1. **Landmark & Role Integrity:**
   - Expose the exact semantic role matching `"Continue with Google"` (`aria-expanded`, `aria-controls`, `aria-current`, `aria-selected`, or native HTML5 `<dialog>`, `<nav>`, `<header>`, `<details>`).
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
// Production-Grade Accessible State & Keyboard Controller for Sign-in Form ("Continue with Google")
export function initNameThatUIComponent(rootSelector = '[data-ntu-component="sign-in-form"]') {
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
