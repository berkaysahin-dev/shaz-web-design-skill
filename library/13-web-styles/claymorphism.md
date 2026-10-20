# Claymorphism — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `claymorphism`  
> **Marka / Konsept:** `FlowPay`  
> **Vurgu Rengi:** `#C3E6FB`  
> **Karakteristikler:** Şişirilmiş 3D Kil Butonlar, Sevimli Kil Domuzcuk & Kart İllüstrasyonu, Çift İç Gölge, Pastel Kartlar

---

## 1. Stil Özeti ve Felsefesi
Yumuşak, şişirilmiş 3D oyun hamuru ve kil estetiğini sunan modern fintech SaaS tasarımı. 'Seamless Payments. Simple Growth.' başlığı, sevimli 3D kil kumbara domuzcuk, altın paralar ve bulut illüstrasyonu, çift iç gölgeli (inner shadow) pastel renkli kabarık kartlar.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`claymorphism.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F0E0B0`, `#C3E6FB`, `#60A0F0`, `#202030`, `#F0F0F0`
- **Vurgu Rengi (Accent):** `#C3E6FB`
- **Önerilen Tipografi:** Plus Jakarta Sans, Fredoka, Quicksand
- **Görsel Kimlik Unsurları:** Şişirilmiş 3D Kil Butonlar, Sevimli Kil Domuzcuk & Kart İllüstrasyonu, Çift İç Gölge, Pastel Kartlar
- **Önizleme Görseli:** `05_Web_Stilleri/claymorphism.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build a delightful, modern Claymorphism SaaS fintech website homepage UI exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Brand Name: "FlowPay" with a cute 3D clay wallet icon.
- Primary Headline: "Seamless Payments. Simple Growth." in clean, friendly rounded sans-serif.
- Subtitle: "Manage your business finances effortlessly with FlowPay's all-in-one platform."
- Header Navigation: [Features], [Pricing], [Resources ∨], [Log In], and a puffy 3D sky-blue pill button "Get Started".

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Claymorphic Visual Treatment:
  * Soft, rounded, inflated 3D clay cards and buttons.
  * Multi-layer shadows: Deep soft drop shadow combined with two opposing inner shadows (highlight top-left, shadow bottom-right) creating a tactile extruded clay look:
    `box-shadow: inset 4px 4px 8px rgba(255,255,255,0.8), inset -4px -4px 8px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.06);`
- Background: Gentle diffused warm beige to pastel sky gradient (#FFF5EB to #E0F2FE).
- 3D Clay Illustration: Central cluster of adorable 3D matte clay objects:
  * Soft pink clay piggy bank with floating gold coin.
  * Smiling white clay cloud with rosy cheeks.
  * Turquoise rounded clay credit card with pastel yellow chip.
  * Stack of clay peach/gold coins and a 3D pastel bar chart.

=== COMPONENT ARCHITECTURE ===
1. Primary Call-to-Action: Puffy clay pill button "Start Free Trial" in soft sky blue (#38BDF8), accompanied by a soft grey clay button "Request Demo".
2. Trio of Inflated Clay Feature Cards:
   - "Instant Invoicing" card: Soft blush pink clay (#FFE4E6), 3D clay laptop icon, "Manage your business effortlessly...", puffy "Learn More" clay pill.
   - "Global Payments" card: Mint green clay (#D1FAE5), 3D clay globe icon, "Engage your business finance...", puffy "Explore" clay pill.
   - "Real-Time Analytics" card: Pastel buttery yellow clay (#FEF3C7), 3D clay chart icon, "Improve your time...", puffy "Explore" clay pill.
3. Micro Carousel Dots: Three pastel pill dots at the bottom indicating card slider pagination.

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/claymorphism.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
