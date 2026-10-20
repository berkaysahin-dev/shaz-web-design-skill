# Reptile — Interactive Reptile Cursor

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Bileşen` · **Kategori:** `Mikro-Animasyonlar` (animation)  
> **Canlı Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/reptile.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/reptile.jpg)  
> **Teknoloji:** `vanilla` · **Bağımlılık:** `0` · **Boyut:** `4.5 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A procedural reptile, drawn as teal line art on a full-screen canvas, that crawls after your mouse pointer. Its body is a chain of jointed segments, and each leg only steps to a new foothold when it strays too far, so the gait comes from rules, not keyframes. Each page load builds a different creature with one to twelve leg pairs and a random tail length. Plain canvas 2D with no dependencies; it does not handle touch input or prefers-reduced-motion.

* **Önemli Dosyalar:** `index.html`, `script.js`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `320ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Reptile — Interactive Reptile Cursor.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: A procedural reptile, drawn as teal line art on a full-screen canvas, that crawls after your mouse pointer. Its body is a chain of jointed segments, and each leg only steps to a new foothold when it strays too far, so the gait comes from rules, not keyframes. Each page load builds a different creature with one to twelve leg pairs and a random tail length. Plain canvas 2D with no dependencies; it does not handle touch input or prefers-reduced-motion.
- Stack: vanilla.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-reptile-container" data-state="idle">
  <button class="cc-reptile-trigger" type="button" aria-label="Reptile">
    <span class="cc-reptile-content">
      <span class="cc-reptile-label">Reptile</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-reptile-container {
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

.cc-reptile-trigger {
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

.cc-reptile-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-reptile-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Reptile — Interactive Reptile Cursor
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-reptile-container');
const trigger = document.querySelector('.cc-reptile-trigger');

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
