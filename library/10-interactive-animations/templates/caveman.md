# Caveman — a 404 page where an astronaut drifts in orbit

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/caveman/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/caveman.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/caveman.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `5.1 KB`

---

## 1. Architectural Overview & Specification

A 404 page where the zero is an orbit: a CSS-drawn astronaut on an SVG tether floats inside a glowing ring while a satellite circles it. A twinCinematic Video two-layer starfield, a drifting planet and a shooting star fill the background. With a mouse, the scene shifts with the cursor in eased parallax. The headline, a line of copy and a Take me home button rise in on load. Reduced motion stops every animation and the parallax; zero dependencies.

* **Key Files:** `index.html`, `record5.html`, `script.js`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Caveman — a 404 page where an astronaut drifts in orbit.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A 404 page where the zero is an orbit: a CSS-drawn astronaut on an SVG tether floats inside a glowing ring while a satellite circles it. A twinCinematic Video two-layer starfield, a drifting planet and a shooting star fill the background. With a mouse, the scene shifts with the cursor in eased parallax. The headline, a line of copy and a Take me home button rise in on load. Reduced motion stops every animation and the parallax; zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-caveman-container" data-state="idle">
  <button class="cc-caveman-trigger" type="button" aria-label="Caveman">
    <span class="cc-caveman-content">
      <span class="cc-caveman-label">Caveman</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-caveman-container {
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

.cc-caveman-trigger {
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

.cc-caveman-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-caveman-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Caveman — a 404 page where an astronaut drifts in orbit
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-caveman-container');
const trigger = document.querySelector('.cc-caveman-trigger');

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

