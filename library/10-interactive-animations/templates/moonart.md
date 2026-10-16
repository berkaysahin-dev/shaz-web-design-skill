# Moonart — Synthwave dreamscape gallery

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/moonart/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/moonart.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/moonart.jpg)  
> **Tech Stack:** `vanilla, css` · **Dependencies:** `0` · **Size:** `7.5 KB`

---

## 1. Architectural Overview & Specification

A two-screen gallery template, Moon Art: a space hero with a floating moon and starfields, then an accordion of six image panels. Hover, click or use the arrow keys and the chosen panel widens while its title rises in word by word and the accent colour shifts. On desktop the panels advance on their own while in view, and the hero layers follow the pointer at different depths. Zero dependencies, CSS plus the Web Animations API; reduced motion stops all of it.

* **Key Files:** `index.html`, `moonart.css`, `moonart.js`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Moonart — Synthwave dreamscape gallery.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A two-screen gallery template, Moon Art: a space hero with a floating moon and starfields, then an accordion of six image panels. Hover, click or use the arrow keys and the chosen panel widens while its title rises in word by word and the accent colour shifts. On desktop the panels advance on their own while in view, and the hero layers follow the pointer at different depths. Zero dependencies, CSS plus the Web Animations API; reduced motion stops all of it.
- Stack: vanilla, css.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-moonart-container" data-state="idle">
  <button class="cc-moonart-trigger" type="button" aria-label="Moonart">
    <span class="cc-moonart-content">
      <span class="cc-moonart-label">Moonart</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-moonart-container {
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

.cc-moonart-trigger {
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

.cc-moonart-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-moonart-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Moonart — Synthwave dreamscape gallery
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-moonart-container');
const trigger = document.querySelector('.cc-moonart-trigger');

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

