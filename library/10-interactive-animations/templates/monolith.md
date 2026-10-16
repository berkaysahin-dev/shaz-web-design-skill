# Monolith — Impossible Architecture, in coverflow

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/monolith/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/monolith.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/monolith.jpg)  
> **Tech Stack:** `vanilla, css, svg, gsap` · **Dependencies:** `1` · **Size:** `7.4 KB`

---

## 1. Architectural Overview & Specification

A coverflow gallery page template, MONOLITH, that shows six architecture images as tilted 3D cards with a caption that changes per card. Drag with inertia, use the wheel, arrow keys, the ticks or the prev and next buttons, or let it advance on a timer drawn as a ring. The centre card tilts toward the pointer, nearby cards lift on hover, and each caption rises in word by word. GSAP with Observer and Inertia; reduced motion turns it into a flat scroll-snap row.

* **Key Files:** `index.html`, `monolith.css`, `monolith.js`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Monolith — Impossible Architecture, in coverflow.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A coverflow gallery page template, MONOLITH, that shows six architecture images as tilted 3D cards with a caption that changes per card. Drag with inertia, use the wheel, arrow keys, the ticks or the prev and next buttons, or let it advance on a timer drawn as a ring. The centre card tilts toward the pointer, nearby cards lift on hover, and each caption rises in word by word. GSAP with Observer and Inertia; reduced motion turns it into a flat scroll-snap row.
- Stack: vanilla, css, svg, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-monolith-container" data-state="idle">
  <button class="cc-monolith-trigger" type="button" aria-label="Monolith">
    <span class="cc-monolith-content">
      <span class="cc-monolith-label">Monolith</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-monolith-container {
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

.cc-monolith-trigger {
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

.cc-monolith-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-monolith-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Monolith — Impossible Architecture, in coverflow
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-monolith-container');
const trigger = document.querySelector('.cc-monolith-trigger');

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

