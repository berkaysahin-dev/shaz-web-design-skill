# Wharf — stock and orders for product businesses, in one moving dashboard

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Düzen ve Kartlar` (layout)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/wharf/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/wharf.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/wharf.jpg)  
> **Teknoloji:** `vanilla, css, svg, gsap` · **Bağımlılık:** `1` · **Boyut:** `60.5 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

Wharf is an operations dashboard for small product businesses: revenue, the order pipeline, stock levels against par, suppliers, customers, team roles and settings. Ten pages that move as one product.

* **Önemli Dosyalar:** `app.css`, `app.js`, `index.html`, `js/charts.js`, `js/customers.js`, `js/data.js`, `js/help.js`, `js/motion.js`, `js/orders.js`, `js/overview.js`, `js/products.js`, `js/reports.js`, `js/settings.js`, `js/stock.js`, `js/suppliers.js`, `js/team.js`, `js/ui.js`, `views.css`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Wharf — stock and orders for product businesses, in one moving dashboard.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: Wharf is an operations dashboard for small product businesses: revenue, the order pipeline, stock levels against par, suppliers, customers, team roles and settings. Ten pages that move as one product.
- Stack: vanilla, css, svg, gsap.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-wharf-container" data-state="idle">
  <button class="cc-wharf-trigger" type="button" aria-label="Wharf">
    <span class="cc-wharf-content">
      <span class="cc-wharf-label">Wharf</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-wharf-container {
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

.cc-wharf-trigger {
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

.cc-wharf-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-wharf-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Wharf — stock and orders for product businesses, in one moving dashboard
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-wharf-container');
const trigger = document.querySelector('.cc-wharf-trigger');

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
