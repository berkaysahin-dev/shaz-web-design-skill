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

=== FULL-PAGE WEBSITE ARCHITECTURE ===
1. Hero Stage with Interactive 3D Tablet Carousel:
   - Center Stage: The iconic FlowPay hero tablet with dual CTA buttons ("Start Free Trial" and "Request Demo"), the 3D clay scene, and the trio of inflated feature cards ("Instant Invoicing" in blush pink, "Global Payments" in mint green, "Real-Time Analytics" in butter yellow).
   - Left and Right Tilted Preview Tablets: These are fully interactive navigation states. Clicking the left tablet glides the "Invoice and Ledger" tablet into center stage. Clicking the right tablet glides the "Real-Time Analytics" tablet into center stage.
   - Micro Carousel Dots and Chevrons: Centered directly below the stage to switch smoothly between the 3 tablet views with tactile spring physics.
2. Features and Operations Section (#features):
   - 3 large tactile clay cards showcasing 0.4s instant settlement, zero-markup multi-currency, and bank-grade fraud shield.
3. Pricing and Savings Calculator Section (#pricing):
   - Monthly/Annual clay toggle switch (Save 20%).
   - 3 inflated clay pricing cards (Starter $0, Growth $29, Scale $79).
   - Interactive drag-and-drop volume slider calculating real-time annual fee savings.
4. Expandable Clay FAQ Accordions (#faq):
   - Tactile expandable question cards with spring physics.
5. Customer Proof and Testimonials:
   - 3 clay quote cards with 5 yellow clay stars and tactile avatars.
6. Tactile Clay Footer:
   - Brand emblem, product links, newsletter input, copyright, and smooth back-to-top button.

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```