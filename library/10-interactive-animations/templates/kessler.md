# Kessler — a whole shop — six pages, a working bag, a modernist grid

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/kessler/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/kessler.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/kessler.jpg)  
> **Teknoloji:** `vanilla, css, lucide` · **Bağımlılık:** `0` · **Boyut:** `48.3 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

KESSLER — a complete static storefront for a leather-goods label: home, listing with filters, product, cart, one-page checkout and account. Quick view, ⌘K search, a bag that remembers, a scroll-scrubbed film and a strict modernist grid. Plain HTML, CSS and JavaScript, no build step: upload the folder to any static host.

* **Önemli Dosyalar:** `index.html`, `shop.html`, `product.html`, `cart.html`, `checkout.html`, `account.html`, `assets/css/site.css`, `assets/js/site.js`, `design-system/styles.css`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Kessler — a whole shop — six pages, a working bag, a modernist grid.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: KESSLER — a complete static storefront for a leather-goods label: home, listing with filters, product, cart, one-page checkout and account. Quick view, ⌘K search, a bag that remembers, a scroll-scrubbed film and a strict modernist grid. Plain HTML, CSS and JavaScript, no build step: upload the folder to any static host.
- Stack: vanilla, css, lucide.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-kessler-container" data-state="idle">
  <button class="cc-kessler-trigger" type="button" aria-label="Kessler">
    <span class="cc-kessler-content">
      <span class="cc-kessler-label">Kessler</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-kessler-container {
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

.cc-kessler-trigger {
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

.cc-kessler-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-kessler-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Kessler — a whole shop — six pages, a working bag, a modernist grid
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-kessler-container');
const trigger = document.querySelector('.cc-kessler-trigger');

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
