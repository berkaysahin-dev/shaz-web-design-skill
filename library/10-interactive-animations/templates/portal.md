# Portal — Sign in · the door button

> **Koleksiyon:** `Code & Chill Animation Archive` · **Tür:** `Şablon` · **Kategori:** `Form` (form)  
> **Canlı Demo:** [Canlı Demoyu Aç (Yeni Sekme)](https://demo.codeandchill.store/portal/)  
> **Reel Video:** [Oynat](https://codeandchill.store/reels/portal.mp4) · **Afiş:** [Görüntüle](https://codeandchill.store/reels/portal.jpg)  
> **Teknoloji:** `vanilla, css, svg` · **Bağımlılık:** `0` · **Boyut:** `7.4 KB`

---

## 1. Mimari Genel Bakış ve Açıklama

A sign-in form template whose Sign in button has a tiny door in it: submit and the door swings open, a stick figure walks through, and the door shuts behind them. The form then gives way to a signed-in card, and Log Out plays it in reverse. Each step has a Web Audio sound, with a mute toggle, and an invalid form shakes and buzzes. Zero dependencies, CSS transforms and an SVG figure; reduced motion skips the walk.

* **Önemli Dosyalar:** `buttons.html`, `index.html`, `record-button.html`, `record-buttons.html`, `script.js`, `style.css`
* **Animasyon Fiziği:** 
  - **Zamanlama Eğrisi:** `cubic-bezier(0.16, 1, 0.3, 1)`
  - **Süre:** `600ms`
  - **Spring Sertlik/Sönümleme:** `Stiffness: 280, Damping: 24, Mass: 0.8`

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Build Portal — Sign in · the door button.
Architecture:
- Plain HTML, CSS and JavaScript with zero heavy runtime dependencies.
- Physics: transition curve cubic-bezier(0.16, 1, 0.3, 1) over 600ms.
- Description: A sign-in form template whose Sign in button has a tiny door in it: submit and the door swings open, a stick figure walks through, and the door shuts behind them. The form then gives way to a signed-in card, and Log Out plays it in reverse. Each step has a Web Audio sound, with a mute toggle, and an invalid form shakes and buzzes. Zero dependencies, CSS transforms and an SVG figure; reduced motion skips the walk.
- Stack: vanilla, css, svg.
- Maintain 60 FPS hardware accelerated transforms and clean accessibility.
```

---

## 3. Üretim Kod Blokları (HTML / CSS / JS)

### 3.1 HTML İskeleti
```html
<div class="cc-portal-container" data-state="idle">
  <button class="cc-portal-trigger" type="button" aria-label="Portal">
    <span class="cc-portal-content">
      <span class="cc-portal-label">Portal</span>
    </span>
  </button>
</div>
```

### 3.2 CSS Değişkenleri ve Animasyon Kuralları
```css
.cc-portal-container {
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

.cc-portal-trigger {
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

.cc-portal-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  border-color: var(--cc-accent);
}

.cc-portal-trigger:active {
  transform: translateY(0.5px) scale(0.98);
}
```

### 3.3 JavaScript Mikro-Etkileşim Mantığı
```javascript
// Portal — Sign in · the door button
// Physics: cubic-bezier(0.16, 1, 0.3, 1) @ 600ms
const container = document.querySelector('.cc-portal-container');
const trigger = document.querySelector('.cc-portal-trigger');

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
