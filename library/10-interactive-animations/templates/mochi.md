# Mochi — a sign-in where a cat covers her eyes for your password

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Form` (form)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/mochi/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/mochi.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/mochi.jpg)  
> **Tech Stack:** `vanilla, css` · **Dependencies:** `0` · **Size:** `15.8 KB`

---

## 1. Architectural Overview & Specification

A sign-in form guarded by a cat. She follows your caret while you type your email, claps both paws over her eyes for the password — and peeks through the gap the moment you tap “show”.

* **Key Files:** `app.js`, `index.html`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Mochi — a sign-in where a cat covers her eyes for your password.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A sign-in form guarded by a cat. She follows your caret while you type your email, claps both paws over her eyes for the password — and peeks through the gap the moment you tap “show”.
- Stack: vanilla, css.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-mochi-container" data-state="idle">
  <button class="cc-mochi-trigger" type="button" aria-label="Mochi">
    <span class="cc-mochi-content">
      <span class="cc-mochi-label">Mochi</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-mochi-container {
  --cc-timing: 600ms;
  --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-mochi-trigger {
  background: var(--cc-bg);
  color: var(--cc-fg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 12px 24px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: transform var(--cc-timing) var(--cc-ease), background var(--cc-timing) var(--cc-ease);
  will-change: transform;
}

.cc-mochi-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-mochi-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Mochi — a sign-in where a cat covers her eyes for your password
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-mochi-container');
const trigger = document.querySelector('.cc-mochi-trigger');

if (trigger && container) {
  trigger.addEventListener('click', () => {
    const current = container.dataset.state;
    container.dataset.state = current === 'active' ? 'idle' : 'active';
  });
}
```

---

## 4. Entegrasyon Notları (Vanilla, React & Next.js)

1. **Vanilla JS:** `index.html` içerisindeki iskeleti sayfanıza kopyalayın, `app.css` ve `app.js` dosyalarını bağlayın.
2. **React:** Sınıf adlarını `className` olarak güncelleyin ve tetikleme olaylarını `useEffect` veya `framer-motion` variantlarına bağlayın.
3. **Performans:** Transform ve opacity özellikleri haricinde layout thrashing yaratacak özelliklerden (`top`, `left`, `margin`) kaçının; donanım hızlandırmalı GPU katmanlarını koruyun.

