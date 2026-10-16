# Bamboo — a sign-in where a panda covers his eyes for your password

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Form` (form)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/bamboo/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/bamboo.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/bamboo.jpg)  
> **Tech Stack:** `vanilla, css` · **Dependencies:** `0` · **Size:** `16.8 KB`

---

## 1. Architectural Overview & Specification

Bamboo — a sign-in that starts in the dark. Pull the pendant lamp's cord and the room lights up: the panda wakes, and the sign-in card rises into the light. He covers his eyes the moment you type your password, and only peeks when you ask him to.

* **Key Files:** `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Bamboo — a sign-in where a panda covers his eyes for your password.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: Bamboo — a sign-in that starts in the dark. Pull the pendant lamp's cord and the room lights up: the panda wakes, and the sign-in card rises into the light. He covers his eyes the moment you type your password, and only peeks when you ask him to.
- Stack: vanilla, css.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-bamboo-container" data-state="idle">
  <button class="cc-bamboo-trigger" type="button" aria-label="Bamboo">
    <span class="cc-bamboo-content">
      <span class="cc-bamboo-label">Bamboo</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-bamboo-container {
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

.cc-bamboo-trigger {
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

.cc-bamboo-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-bamboo-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Bamboo — a sign-in where a panda covers his eyes for your password
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-bamboo-container');
const trigger = document.querySelector('.cc-bamboo-trigger');

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

