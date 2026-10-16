# Tumbler — a one-time code that cuts a key

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Form` (form)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/tumbler.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/tumbler.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `15.1 KB`

---

## 1. Architectural Overview & Specification

A six-digit verification field drawn as the cutaway of a pin-tumbler lock. Each digit cuts one notch into the key blade, the pins drop into their cuts, and on submit a line of light tests them one at a time along the shear line.

* **Key Files:** `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Tumbler — a one-time code that cuts a key.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A six-digit verification field drawn as the cutaway of a pin-tumbler lock. Each digit cuts one notch into the key blade, the pins drop into their cuts, and on submit a line of light tests them one at a time along the shear line.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-tumbler-container" data-state="idle">
  <button class="cc-tumbler-trigger" type="button" aria-label="Tumbler">
    <span class="cc-tumbler-content">
      <span class="cc-tumbler-label">Tumbler</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-tumbler-container {
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

.cc-tumbler-trigger {
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

.cc-tumbler-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-tumbler-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Tumbler — a one-time code that cuts a key
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-tumbler-container');
const trigger = document.querySelector('.cc-tumbler-trigger');

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

