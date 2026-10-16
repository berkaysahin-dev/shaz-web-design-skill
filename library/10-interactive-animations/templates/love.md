# Love — Will you be mine? · a cat asks

> **Collection:** `Code & Chill Animation Archive` · **Type:** `Şablon` · **Category:** `Mikro-Animasyonlar` (animation)  
> **Live Demo:** [Open Live Demo](https://demo.Shaz Agency Motion.store/love/)  
> **Reel Video:** [Play](https://Shaz Agency Motion.store/reels/love.mp4) · **Poster:** [View](https://Shaz Agency Motion.store/reels/love.jpg)  
> **Tech Stack:** `vanilla, css` · **Dependencies:** `0` · **Size:** `5.9 KB`

---

## 1. Architectural Overview & Specification

A Will you be mine? page where a looping kitten video asks the question and No is not really an option. Hover, tap or press No and it jumps somewhere else on screen, shrinks and changes its plea while Yes grows. Saying yes swaps to a happy-cat clip and bursts emoji hearts, with an ask me again button to replay. Small blips and a chime are synthesised with Web Audio, with a mute toggle. Zero dependencies; reduced motion trims the burst.

* **Key Files:** `cat-ask.mp4`, `cat-yes.mp4`, `index.html`, `poster-ask.jpg`, `poster-yes.jpg`, `script.js`, `style.css`
* **Animation Physics:** 
  - **Timing Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Duration:** `600ms`
  - **Spring Stiffness/Damping:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Official Production Prompt

```markdown
Build Love — Will you be mine? · a cat asks.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A Will you be mine? page where a looping kitten video asks the question and No is not really an option. Hover, tap or press No and it jumps somewhere else on screen, shrinks and changes its plea while Yes grows. Saying yes swaps to a happy-cat clip and bursts emoji hearts, with an ask me again button to replay. Small blips and a chime are synthesised with Web Audio, with a mute toggle. Zero dependencies; reduced motion trims the burst.
- Stack: vanilla, css.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Production Code Blocks (HTML / CSS / JS)

### 3.1 HTML Scaffold
```html
<div class="cc-love-container" data-state="idle">
  <button class="cc-love-trigger" type="button" aria-label="Love">
    <span class="cc-love-content">
      <span class="cc-love-label">Love</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Variables & Animation Rules
```css
.cc-love-container {
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

.cc-love-trigger {
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

.cc-love-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-love-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Love — Will you be mine? · a cat asks
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-love-container');
const trigger = document.querySelector('.cc-love-trigger');

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

