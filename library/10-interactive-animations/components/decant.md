# Decant — the toggle that fills instead of lighting up

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/decant.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/decant.jpg)  
> **Tech Stack:** `vanilla, css, canvas` · **Dependencies:** `0` · **Size:** `13.4 KB`

---

## 1. Architectural Overview & Specification

A focus-mode dock of three frosted-glass pills (Sleep, Do Not Disturb, Personal) that fill with liquid instead of lighting up. Liquid pours outward from the exact point you press, its surface wobbling with the spring's own velocity. Pick another pill and the first drains back to where it was poured while the new one fills. It is a native radio group underneath, so arrow keys and screen readers work, and reduced motion skips the pour. Zero dependencies, one canvas per pill.

* **Key Files:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Decant — the toggle that fills instead of lighting up.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A focus-mode dock of three frosted-glass pills (Sleep, Do Not Disturb, Personal) that fill with liquid instead of lighting up. Liquid pours outward from the exact point you press, its surface wobbling with the spring's own velocity. Pick another pill and the first drains back to where it was poured while the new one fills. It is a native radio group underneath, so arrow keys and screen readers work, and reduced motion skips the pour. Zero dependencies, one canvas per pill.
- Stack: vanilla, css, canvas.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-decant-container" data-state="idle">
  <button class="cc-decant-trigger" type="button" aria-label="Decant">
    <span class="cc-decant-content">
      <span class="cc-decant-label">Decant</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-decant-container {
  --cc-timing: 320ms;
  --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-decant-trigger {
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

.cc-decant-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-decant-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Decant — the toggle that fills instead of lighting up
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-decant-container');
const trigger = document.querySelector('.cc-decant-trigger');

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

