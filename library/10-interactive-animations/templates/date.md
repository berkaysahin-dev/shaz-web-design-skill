# Date — a long-distance video date

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/date/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/date.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/date.jpg)  
> **Tech Stack:** `vanilla, css, canvas, svg` · **Dependencies:** `0` · **Size:** `9.8 KB`

---

## 1. Architectural Overview & Specification

A ridiculously cute long-distance video-call date. Two little buddies on a pastel call — tap to blow a kiss that bounces across the gap, the other one catches it and swoons, they blow one back, and the connection heart fills up until it bursts into confetti.

* **Key Files:** `app.js`, `index.html`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Date — a long-distance video date.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A ridiculously cute long-distance video-call date. Two little buddies on a pastel call — tap to blow a kiss that bounces across the gap, the other one catches it and swoons, they blow one back, and the connection heart fills up until it bursts into confetti.
- Stack: vanilla, css, canvas, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-date-container" data-state="idle">
  <button class="cc-date-trigger" type="button" aria-label="Date">
    <span class="cc-date-content">
      <span class="cc-date-label">Date</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-date-container {
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

.cc-date-trigger {
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

.cc-date-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-date-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Date — a long-distance video date
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-date-container');
const trigger = document.querySelector('.cc-date-trigger');

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

