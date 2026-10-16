# Solace — we did not make it louder

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Düzen ve Kartlar` (layout)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/solace/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/solace.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/solace.jpg)  
> **Tech Stack:** `vanilla, css, gsap, lenis` · **Dependencies:** `2` · **Size:** `7.5 KB`

---

## 1. Architectural Overview & Specification

SOLACE is a pair of active-noise-cancelling headphones. Scroll the hero and you scroll the product: one continuous take, scrubbed frame by frame, while the room's noise floor falls from 78 dB to nothing.

* **Key Files:** `Cinematic_product_commercial_f.mp4`, `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Solace — we did not make it louder.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: SOLACE is a pair of active-noise-cancelling headphones. Scroll the hero and you scroll the product: one continuous take, scrubbed frame by frame, while the room's noise floor falls from 78 dB to nothing.
- Stack: vanilla, css, gsap, lenis.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-solace-container" data-state="idle">
  <button class="cc-solace-trigger" type="button" aria-label="Solace">
    <span class="cc-solace-content">
      <span class="cc-solace-label">Solace</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-solace-container {
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

.cc-solace-trigger {
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

.cc-solace-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-solace-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Solace — we did not make it louder
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-solace-container');
const trigger = document.querySelector('.cc-solace-trigger');

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

