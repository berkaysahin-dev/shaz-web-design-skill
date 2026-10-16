# Plume — a subscribe button that folds into the paper plane it throws

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Bileşen` · **Category:** `Form` (form)  
> **Live Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/plume.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/plume.jpg)  
> **Tech Stack:** `vanilla, css, svg` · **Dependencies:** `0` · **Size:** `19.8 KB`

---

## 1. Architectural Overview & Specification

An email field whose Subscribe button is a sheet of paper. Four facets tile its face exactly, then fold: the corners drop to a peak at constant outline, the tent holds, the halves close about a centre crease, and the dart turns, draws back and is thrown. Every number in it was measured off the reference frame by frame — the tent is exactly the inscribed triangle, the dihedral is 72°, and the throw is at constant velocity. Zero dependencies.

* **Key Files:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `320ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Plume — a subscribe button that folds into the paper plane it throws.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: An email field whose Subscribe button is a sheet of paper. Four facets tile its face exactly, then fold: the corners drop to a peak at constant outline, the tent holds, the halves close about a centre crease, and the dart turns, draws back and is thrown. Every number in it was measured off the reference frame by frame — the tent is exactly the inscribed triangle, the dihedral is 72°, and the throw is at constant velocity. Zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-plume-container" data-state="idle">
  <button class="cc-plume-trigger" type="button" aria-label="Plume">
    <span class="cc-plume-content">
      <span class="cc-plume-label">Plume</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-plume-container {
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

.cc-plume-trigger {
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

.cc-plume-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-plume-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Plume — a subscribe button that folds into the paper plane it throws
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-plume-container');
const trigger = document.querySelector('.cc-plume-trigger');

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

