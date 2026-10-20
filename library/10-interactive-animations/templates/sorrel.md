# Sorrel — a botanical skincare store where every bottle tosses itself into the bag

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/sorrel/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/sorrel.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/sorrel.jpg)  
> **Teknoloji:** `vanilla, css, svg, gsap, lenis` · **Bağımlılık:** `2` · **Boyut:** `16.1 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A one-page skincare storefront in fig plum, terracotta and bone. A loader counts in and the curtain lifts onto a full-screen hero whose headline rises out of its own masks. The product rail drags with momentum and snaps to a card; a swatch makes the bottle bounce, and Add to cart arcs it into the bag, springs the badge and fills a real slide-in bag with quantities and a subtotal. A pinned apothecary opens from a framed print to full bleed while its sentence lights up word by word, plum curtains pull off the feature photos, the review strip follows your scroll speed and the closing wordmark climbs letter by letter. Lenis on GSAP's ticker, transform and opacity only, a separate phone layout, and everything at rest under reduced motion. The demo's stock photos are not included: the zip ships same-size placeholders and a PHOTOS.md linking every original.

* **Önemli Dosyalar:** `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Sorrel — a botanical skincare store where every bottle tosses itself into the bag.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A one-page skincare storefront in fig plum, terracotta and bone. A loader counts in and the curtain lifts onto a full-screen hero whose headline rises out of its own masks. The product rail drags with momentum and snaps to a card; a swatch makes the bottle bounce, and Add to cart arcs it into the bag, springs the badge and fills a real slide-in bag with quantities and a subtotal. A pinned apothecary opens from a framed print to full bleed while its sentence lights up word by word, plum curtains pull off the feature photos, the review strip follows your scroll speed and the closing wordmark climbs letter by letter. Lenis on GSAP's ticker, transform and opacity only, a separate phone layout, and everything at rest under reduced motion. The demo's stock photos are not included: the zip ships same-size placeholders and a PHOTOS.md linking every original.
- Stack: vanilla, css, svg, gsap, lenis.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-sorrel-container" data-state="idle">
  <button class="cc-sorrel-trigger" type="button" aria-label="Sorrel">
    <span class="cc-sorrel-content">
      <span class="cc-sorrel-label">Sorrel</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-sorrel-container {
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

.cc-sorrel-trigger {
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

.cc-sorrel-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-sorrel-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Sorrel — a botanical skincare store where every bottle tosses itself into the bag
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-sorrel-container');
const trigger = document.querySelector('.cc-sorrel-trigger');

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
