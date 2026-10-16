# Nocturne — a glass sign-in over a moonlit parallax forest

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Form` (form)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/nocturne/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/nocturne.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/nocturne.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `5.1 KB`

---

## 1. Architectural Overview & Specification

A glass sign-in card over a violet forest scene, with falling leaves, fireflies, slow aurora bands and a girl cycling back and forth. With a mouse, the background, trees and leaves shift in parallax and the card tilts under a sheen. The form has username, password with show/hide, remember me, forgot password, and Google and Apple buttons. Sign In runs a spinner, then a check and a status message. Reduced motion stops the scenery and hides the cyclist; zero dependencies.

* **Key Files:** `app.js`, `bg.jpg`, `girl.png`, `girl_orig.png`, `index.html`, `leaf_01.png`, `leaf_02.png`, `leaf_03.png`, `leaf_04.png`, `style.css`, `trees.png`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Nocturne — a glass sign-in over a moonlit parallax forest.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A glass sign-in card over a violet forest scene, with falling leaves, fireflies, slow aurora bands and a girl cycling back and forth. With a mouse, the background, trees and leaves shift in parallax and the card tilts under a sheen. The form has username, password with show/hide, remember me, forgot password, and Google and Apple buttons. Sign In runs a spinner, then a check and a status message. Reduced motion stops the scenery and hides the cyclist; zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-nocturne-container" data-state="idle">
  <button class="cc-nocturne-trigger" type="button" aria-label="Nocturne">
    <span class="cc-nocturne-content">
      <span class="cc-nocturne-label">Nocturne</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-nocturne-container {
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

.cc-nocturne-trigger {
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

.cc-nocturne-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-nocturne-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Nocturne — a glass sign-in over a moonlit parallax forest
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-nocturne-container');
const trigger = document.querySelector('.cc-nocturne-trigger');

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

