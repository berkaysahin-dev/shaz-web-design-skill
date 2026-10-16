# Pivot — a composer whose tray swings on its own button

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Form` (form)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/pivot.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/pivot.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `13.1 KB`

---

## 1. Architectural Overview & Specification

A message composer where the attach button is a hinge. Press it and the pill tips on that button, the input pane swings out of the top, the tools deal in from below, and the tray levels off. The pane and the tray are the same footprint, so the pill never changes size.

* **Key Files:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Pivot — a composer whose tray swings on its own button.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A message composer where the attach button is a hinge. Press it and the pill tips on that button, the input pane swings out of the top, the tools deal in from below, and the tray levels off. The pane and the tray are the same footprint, so the pill never changes size.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-pivot-container" data-state="idle">
  <button class="cc-pivot-trigger" type="button" aria-label="Pivot">
    <span class="cc-pivot-content">
      <span class="cc-pivot-label">Pivot</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-pivot-container {
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

.cc-pivot-trigger {
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

.cc-pivot-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-pivot-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Pivot — a composer whose tray swings on its own button
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-pivot-container');
const trigger = document.querySelector('.cc-pivot-trigger');

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

