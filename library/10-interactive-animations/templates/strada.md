# Strada — a car-rental landing page where the hero car is the control

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/strada/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/strada.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/strada.jpg)  
> **Teknoloji:** `vanilla, css, svg, gsap, lenis` · **Bağımlılık:** `2` · **Boyut:** `16.9 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A one-page luxury car-rental site. Pick a class and the hero car drives off as the next one rolls in, while its specs count to the new numbers. The booking bar is a real form (driver toggle, round-trip switch, dates that cannot run backwards) that searches, then flies you to a fleet it has filtered. The fleet re-deals itself with GSAP Flip, and the page carries a draggable deals carousel, a scroll-velocity partner marquee, a pinned how-it-works road, an app section and a bento. GSAP and Lenis, transform-only motion, a dark theme with every text tone contrast-measured, and phone and reduced-motion layouts built in. All 10 images are included (AI-generated, licensed with the code).

* **Önemli Dosyalar:** `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Strada — a car-rental landing page where the hero car is the control.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A one-page luxury car-rental site. Pick a class and the hero car drives off as the next one rolls in, while its specs count to the new numbers. The booking bar is a real form (driver toggle, round-trip switch, dates that cannot run backwards) that searches, then flies you to a fleet it has filtered. The fleet re-deals itself with GSAP Flip, and the page carries a draggable deals carousel, a scroll-velocity partner marquee, a pinned how-it-works road, an app section and a bento. GSAP and Lenis, transform-only motion, a dark theme with every text tone contrast-measured, and phone and reduced-motion layouts built in. All 10 images are included (AI-generated, licensed with the code).
- Stack: vanilla, css, svg, gsap, lenis.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-strada-container" data-state="idle">
  <button class="cc-strada-trigger" type="button" aria-label="Strada">
    <span class="cc-strada-content">
      <span class="cc-strada-label">Strada</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-strada-container {
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

.cc-strada-trigger {
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

.cc-strada-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-strada-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Strada — a car-rental landing page where the hero car is the control
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-strada-container');
const trigger = document.querySelector('.cc-strada-trigger');

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
