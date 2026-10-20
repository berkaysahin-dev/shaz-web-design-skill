# Mango — Sun-ripened. Hand-picked. Delivered fresh.

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/mango/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/mango.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/mango.jpg)  
> **Teknoloji:** `vanilla, css, svg, gsap, lenis` · **Bağımlılık:** `2` · **Boyut:** `10.9 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A scroll-driven landing page template for a fictional mango shop, MANGOO, running from a letter-by-letter hero to an order footer. Scroll and the mango rises through the hero letters, then badges orbit it before it is cut open and the crate offer slides in. Story photos crossfade with a Ken Burns drift, the varieties ride a pinned horizontal track, and the marquee skews with scroll speed. GSAP ScrollTrigger plus Lenis; reduced motion swaps pins for fades.

* **Önemli Dosyalar:** `index.html`, `main.js`, `style.css`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Mango — Sun-ripened. Hand-picked. Delivered fresh..
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A scroll-driven landing page template for a fictional mango shop, MANGOO, running from a letter-by-letter hero to an order footer. Scroll and the mango rises through the hero letters, then badges orbit it before it is cut open and the crate offer slides in. Story photos crossfade with a Ken Burns drift, the varieties ride a pinned horizontal track, and the marquee skews with scroll speed. GSAP ScrollTrigger plus Lenis; reduced motion swaps pins for fades.
- Stack: vanilla, css, svg, gsap, lenis.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-mango-container" data-state="idle">
  <button class="cc-mango-trigger" type="button" aria-label="Mango">
    <span class="cc-mango-content">
      <span class="cc-mango-label">Mango</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-mango-container {
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

.cc-mango-trigger {
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

.cc-mango-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-mango-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Mango — Sun-ripened. Hand-picked. Delivered fresh.
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-mango-container');
const trigger = document.querySelector('.cc-mango-trigger');

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
