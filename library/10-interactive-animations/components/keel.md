# Keel — an upload button whose arrow keels over and becomes the waterline

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Form` (form)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/keel.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/keel.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `15.6 KB`

---

## 1. Architectural Overview & Specification

An upload button with a squared well at its end. Press it and the arrow takes itself apart: the head's two legs swing down through flat and past it into a sagging bowl that sinks, fades and hands the well its first waterline, while the shaft collapses to a short mast. Then the level rises with a domed surface and the mast rides its apex like a float gauge, so the icon never leaves — it becomes the instrument that reads the transfer. Every proportion measured off the reference at 60fps. Four skins, zero dependencies.

* **Key Files:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Keel — an upload button whose arrow keels over and becomes the waterline.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: An upload button with a squared well at its end. Press it and the arrow takes itself apart: the head's two legs swing down through flat and past it into a sagging bowl that sinks, fades and hands the well its first waterline, while the shaft collapses to a short mast. Then the level rises with a domed surface and the mast rides its apex like a float gauge, so the icon never leaves — it becomes the instrument that reads the transfer. Every proportion measured off the reference at 60fps. Four skins, zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-keel-container" data-state="idle">
  <button class="cc-keel-trigger" type="button" aria-label="Keel">
    <span class="cc-keel-content">
      <span class="cc-keel-label">Keel</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-keel-container {
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

.cc-keel-trigger {
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

.cc-keel-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-keel-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Keel — an upload button whose arrow keels over and becomes the waterline
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-keel-container');
const trigger = document.querySelector('.cc-keel-trigger');

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

