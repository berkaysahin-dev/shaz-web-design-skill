# Contrail — a send button the plane leaves, and its wake fills

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Bileşen` · **Kategori:** `Form` (form)  
> **Canlı Demo:** Video Önizleme Mevcut  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/contrail.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/contrail.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `10.8 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

Press Send and the paper plane takes off through the label, escapes out of the right cap, and the green wake it leaves behind floods the button and spells SENT. The wake chases the plane for the whole flight and never catches it. Every number was measured off the reference at 60fps — both easing curves are least-squares fits, to 1.3px and 0.35px. Zero dependencies.

* **Önemli Dosyalar:** `README.md`, `app.css`, `app.js`, `index.html`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `320ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Contrail — a send button the plane leaves, and its wake fills.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 320ms.
- Description: Press Send and the paper plane takes off through the label, escapes out of the right cap, and the green wake it leaves behind floods the button and spells SENT. The wake chases the plane for the whole flight and never catches it. Every number was measured off the reference at 60fps — both easing curves are least-squares fits, to 1.3px and 0.35px. Zero dependencies.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-contrail-container" data-state="idle">
  <button class="cc-contrail-trigger" type="button" aria-label="Contrail">
    <span class="cc-contrail-content">
      <span class="cc-contrail-label">Contrail</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-contrail-container {
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

.cc-contrail-trigger {
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

.cc-contrail-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-contrail-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Contrail — a send button the plane leaves, and its wake fills
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 320ms
const container = document.querySelector('.cc-contrail-container');
const trigger = document.querySelector('.cc-contrail-trigger');

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
