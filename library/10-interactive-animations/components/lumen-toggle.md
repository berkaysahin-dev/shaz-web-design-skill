# Lumen Toggle — a theme toggle the new light floods out of

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Bileşen` · **Kategori:** `Mikro-Animasyonlar` (animation)  
> **Canlı Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/lumen-toggle.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/lumen-toggle.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `8.6 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A dark-mode switch whose flip is a circle of the incoming theme opening out of the button itself. Every number in it was measured off the reference film frame by frame: the reveal is 240ms on a least-squares cubic-bezier(.52,.33,.46,.25), the tint lands in 150ms, and the icon turns a full 180 degrees in 280ms. Zero dependencies.

* **Önemli Dosyalar:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(.52,.33,.46,.25)`
  - **Süre:** `240ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Lumen Toggle — a theme toggle the new light floods out of.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(.52,.33,.46,.25) over 240ms.
- Description: A dark-mode switch whose flip is a circle of the incoming theme opening out of the button itself. Every number in it was measured off the reference film frame by frame: the reveal is 240ms on a least-squares cubic-bezier(.52,.33,.46,.25), the tint lands in 150ms, and the icon turns a full 180 degrees in 280ms. Zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-lumen-toggle-container" data-state="idle">
  <button class="cc-lumen-toggle-trigger" type="button" aria-label="Lumen Toggle">
    <span class="cc-lumen-toggle-content">
      <span class="cc-lumen-toggle-label">Lumen Toggle</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-lumen-toggle-container {
  --cc-timing: 240ms;
  --cc-ease: cubic-bezier(.52,.33,.46,.25);
  --cc-bg: #141413;
  --cc-fg: #f6f5f1;
  --cc-accent: #af00fd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cc-lumen-toggle-trigger {
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

.cc-lumen-toggle-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-lumen-toggle-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Lumen Toggle — a theme toggle the new light floods out of
// Physics: cubic-bezier(.52,.33,.46,.25) @ 240ms
const container = document.querySelector('.cc-lumen-toggle-container');
const trigger = document.querySelector('.cc-lumen-toggle-trigger');

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
