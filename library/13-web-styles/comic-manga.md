# Comic / Manga 💥 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `comic-manga`  
> **Marka / Konsept:** `SHONEN STRIKE`  
> **Vurgu Rengi:** `#F0C000`  
> **Karakteristikler:** Manga Panel Grid Düzeni, Konuşma Balonu, Japon Ses Efekti (DONNN!!), Özel Saldırı Güç Paneli

---

## 1. Stil Özeti ve Felsefesi
Aksiyon dolu Japon shonen mangası ve Amerikan çizgi roman estetiğini yansıtan dinamik web tasarımı. 'CHAPTER 42: THE DIGITAL AWAKENING' başlığı, 'THE SPEED LINES ARE REAL!' konuşma balonu, patlayan sarı 'DONNN!!' ses efekti, özel saldırı paneli ve çizgi roman ızgarası.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`comic-manga.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F0C000`, `#131313`, `#900030`, `#D00040`, `#203040`
- **Vurgu Rengi (Accent):** `#F0C000`
- **Önerilen Tipografi:** Bangers, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Manga Panel Grid Düzeni, Konuşma Balonu, Japon Ses Efekti (DONNN!!), Özel Saldırı Güç Paneli
- **Önizleme Görseli:** `05_Web_Stilleri/comic-manga.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an explosive, action-packed Comic / Manga website homepage UI exactly matching the reference design:
- Browser Shell: Dark comic bar with yellow border and URL `https://shonen-strike.comic/chapter-42`.
- Comic Panel Grid: Authentic multi-panel black and white comic layout with thick 4px borders and dynamic gutters.
- Sound Effect (SFX): Giant tilted sound effect in Bangers font: "DONNN!!" in bright comic yellow (#ffcc00) with thick black 3D shadow.
- Speech Bubble: Classic white comic dialogue bubble with pointer tail: "“THE SPEED LINES ARE REAL! READY FOR THE NEXT ARC?!”"
- Chapter Headline: "CHAPTER 42: THE DIGITAL AWAKENING" in bold Bangers display font.
- Primary Action: Tilted comic yellow button "READ CHAPTER NOW →" with hard 4px black drop shadow.
- Right Multi-Panels:
  * Upper Panel: Crimson aura radial burst with "SPECIAL ATTACK: ULTRA IMPACT" and "POWER LEVEL OVER 9000".
  * Lower Panel: High-contrast yellow panel detailing "MANGA PANEL ARCHITECTURE" with "CONTINUED IN VOL 43 >>".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/comic-manga.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
