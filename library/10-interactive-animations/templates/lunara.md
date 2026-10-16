# Lunara — a glass sign-in under a desert full moon

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Form` (form)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/lunara/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/lunara.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/lunara.jpg)  
> **Tech Stack:** `vanilla, css, canvas, svg` · **Dependencies:** `0` · **Size:** `8.7 KB`

---

## 1. Architectural Overview & Specification

A glass sign-in card over a moonlit desert photo, with a camel caravan crossing the ridge, blowing sand and shooting stars. A canvas of drifting stardust scatters around the cursor. With a mouse, layers shift in parallax and the card tilts under a sheen. The form has email, password with show/hide, remember me, and Google and Apple buttons. On submit a stick figure walks through a door in the button, then a check shows. Reduced motion hides moving scenery; no dependencies.

* **Key Files:** `app.js`, `bg.jpg`, `caravan.webp`, `dune.webp`, `index.html`, `sand.webp`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Lunara — a glass sign-in under a desert full moon.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A glass sign-in card over a moonlit desert photo, with a camel caravan crossing the ridge, blowing sand and shooting stars. A canvas of drifting stardust scatters around the cursor. With a mouse, layers shift in parallax and the card tilts under a sheen. The form has email, password with show/hide, remember me, and Google and Apple buttons. On submit a stick figure walks through a door in the button, then a check shows. Reduced motion hides moving scenery; no dependencies.
- Stack: vanilla, css, canvas, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-lunara-container" data-state="idle">
  <button class="cc-lunara-trigger" type="button" aria-label="Lunara">
    <span class="cc-lunara-content">
      <span class="cc-lunara-label">Lunara</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-lunara-container {
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

.cc-lunara-trigger {
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

.cc-lunara-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-lunara-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Lunara — a glass sign-in under a desert full moon
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-lunara-container');
const trigger = document.querySelector('.cc-lunara-trigger');

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

