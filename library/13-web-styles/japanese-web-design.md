# Japanese Web Design 🌸 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `japanese-web-design`  
> **Marka / Konsept:** `TOKYO DESIGN LAB`  
> **Vurgu Rengi:** `#F03060`  
> **Karakteristikler:** Dikey Kanji Tipografisi (東京デザイン), Kırmızı Hanko Mührü (判子), Çift Dilli [EN/JP], Minimalist Tokyo Grid'i

---

## 1. Stil Özeti ve Felsefesi
Tokyo'nun modern dijital stüdyolarının sade ve ruhlu tasarım dili. Dikey yazılmış Japonca '東京デザイン・現代美術工房' tipografisi, 'Minimalism with Playful Soul.' başlığı, geleneksel kırmızı hanko mührü (判子), iki dilli [EN/JP] geçişi ve Kyoto Bienali kartı.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`japanese-web-design.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#F03060`, `#14151A`, `#501020`, `#B03050`, `#F0B0D0`
- **Vurgu Rengi (Accent):** `#F03060`
- **Önerilen Tipografi:** Noto Sans JP, Plus Jakarta Sans
- **Görsel Kimlik Unsurları:** Dikey Kanji Tipografisi (東京デザイン), Kırmızı Hanko Mührü (判子), Çift Dilli [EN/JP], Minimalist Tokyo Grid'i
- **Önizleme Görseli:** `05_Web_Stilleri/japanese-web-design.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an authentic, refined contemporary Japanese Web Design studio homepage UI exactly matching the reference design:
- Browser Shell: Minimalist dark bar with crimson URL `https://tokyo-craft-studio.jp/design`.
- Asymmetric Layout: 3-column architecture [Vertical Kanji Column | Hero Content | Feature Card].
- Vertical Kanji Typography: Left column features authentic vertical Japanese text (`writing-mode: vertical-rl`): "東京デザイン・現代美術工房" with clean red dividing accent line.
- Brand Name: "TOKYO DESIGN LAB" accompanied by a red square Hanko seal stamp (判子) with kanji character "港".
- Language & Menu Switcher: Top right navigation [WORKS], [STUDIO], [EN/JP].
- Primary Headline: "Minimalism with\nPlayful Soul." with "Playful Soul." in soft crimson sakura pink (#ff3366).
- Description: "Harmonious duality: pristine Swiss grid discipline combined with lively vertical kanji typography, hanko red seals, and delicate cherry blossom accents."
- Action Button: Minimalist crimson button "作品を見る (VIEW PROJECTS) →".
- Feature Card: Dark charcoal container with tag "KYOTO BIENNALE 2026" and essay on "Harmonic Balance".

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **Production Website Reality (Anti-Mockup Rule):** The visual reference demonstrates the core aesthetic style, visual tokens, and hero mood. You must build a COMPLETE, LIVING, RESPONSIVE, FULL-PAGE PRODUCTION WEBSITE in this exact visual style. NEVER trap the interface inside a static, isolated Dribbble mockup card floating on a blank canvas. The navigation belongs at the top of the browser viewport (`w-full`), the hero stage seamlessly expands into rich, scrollable sections (Features, Workflow, Interactive Showcase, Pricing/Timeline, Testimonials, Footer), and all preview cards, carousels, or side elements must be fully clickable, navigable, interactive functional states that users can explore.
- **Interactive State Traversal:** Any side cards, carousel dots, tabs, or preview panes visible in the reference are NOT static background art; they must be fully interactive (clicking, swiping, or arrow controls smoothly transition between functional views).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
```