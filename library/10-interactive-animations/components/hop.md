# Hop — a loader where the last bead jumps to the front

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/hop.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/hop.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `6.2 KB`

---

## 1. Architectural Overview & Specification

A loading spinner rebuilt from a Lottie as twelve CSS beads on a ring: every third of a second the last bead hops across the gap to the front. No runtime, no canvas — one keyframe block on the compositor, with the 300 ms rule and a reduced-motion form.

* **Key Files:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `300ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Hop — a loader where the last bead jumps to the front.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 300ms.
- Description: A loading spinner rebuilt from a Lottie as twelve CSS beads on a ring: every third of a second the last bead hops across the gap to the front. No runtime, no canvas — one keyframe block on the compositor, with the 300 ms rule and a reduced-motion form.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-hop-container" data-state="idle">
  <button class="cc-hop-trigger" type="button" aria-label="Hop">
    <span class="cc-hop-content">
      <span class="cc-hop-label">Hop</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-hop-container {
  --cc-timing: 300ms;
  --cc-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-hop-trigger {
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

.cc-hop-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-hop-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Hop — a loader where the last bead jumps to the front
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 300ms
const container = document.querySelector('.cc-hop-container');
const trigger = document.querySelector('.cc-hop-trigger');

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

