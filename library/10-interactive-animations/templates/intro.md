# Intro — websites, apps, stores. Yours next.

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/intro/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/intro.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/intro.jpg)  
> **Tech Stack:** `vanilla, css, svg, gsap` · **Dependencies:** `1` · **Size:** `15 KB`

---

## 1. Architectural Overview & Specification

Websites, apps and stores, built by @_code_and_chill_. Kinetic-typography brand intro, running live in your browser as one timeline. Email hasibulhasan169@gmail.com to start.

* **Key Files:** `index.html`, `script.js`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Intro — websites, apps, stores. Yours next..
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: Websites, apps and stores, built by @_code_and_chill_. Kinetic-typography brand intro, running live in your browser as one timeline. Email hasibulhasan169@gmail.com to start.
- Stack: vanilla, css, svg, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-intro-container" data-state="idle">
  <button class="cc-intro-trigger" type="button" aria-label="Intro">
    <span class="cc-intro-content">
      <span class="cc-intro-label">Intro</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-intro-container {
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

.cc-intro-trigger {
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

.cc-intro-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-intro-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Intro — websites, apps, stores. Yours next.
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-intro-container');
const trigger = document.querySelector('.cc-intro-trigger');

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

