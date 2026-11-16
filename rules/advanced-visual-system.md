# Shaz Agency Web Design — Advanced Visual Design System (Design Intelligence 2.0)

This system establishes the mathematical and aesthetic standards for typography, spacing rhythm, image art direction, and surface materiality across all project implementations.

---

## 1. Typography Intelligence & Proportional Rhythm

Tipografi, tasarımın omurgasıdır. Başlıklar sadece büyük görünmek için büyütülmez; optik denge, satır boyu ve harf aralığı titizlikle kalibre edilir:

1. **Heading Primacy (Sıfır Başlık Üstü Yazı):**
   - Başlıkların üstünde hiçbir zaman `OTONOM SİSTEMLER · BİLİŞSEL ALTYAPI` veya `01 · TEMEL` gibi etiketler bulunmaz. Başlık doğrudan, çıplak ve net şekilde sayfayı açar.
2. **Optical Tracking (Harf Aralığı Kalibrasyonu):**
   - Büyük display başlıklar (`text-4xl` ve üzeri): Negatif tracking uygulanır (`tracking-tight` veya `-0.02em` ile `-0.04em`). Harfler birbiriyle bütünleşir.
   - Küçük meta etiketler veya monospaced metinler (`text-xs`): Pozitif tracking uygulanır (`tracking-wider` veya `tracking-[0.16em]`). Okunabilirlik artırılır.
3. **Line-Height Optimization (Satır Yüksekliği):**
   - Dev başlıklar için katı satır yüksekliği: `leading-[1.04]` ila `leading-[1.12]`. Satırlar arası gereksiz boşluk oluşmaz.
   - Gövde metinleri için ferah okuma aralığı: `leading-relaxed` (`1.6` ila `1.75`).
4. **Font Pairing Intelligence:**
   - *Teknoloji & Yazılım:* Modern Grotesk (`Inter`, `Geist`, `Plus Jakarta Sans`)
   - *Mimarlık & Lüks:* Karakterli Editoryal Serif (`Fraunces`, `Newsreader`, `Cormorant Garamond`) + Temiz Sans
   - *FinTech & Analitik:* Geometrik Sans + Tabular Monospace (`JetBrains Mono`)
   - *Yaratıcı Stüdyo:* Yüksek Kontrastlı Display (`Syne`, `Bricolage Grotesque`)

---

## 2. Spacing Intelligence & Section Rhythm

Boşluk (negative space) bir boşluk değil, lüks bir tasarım öğesidir:
- **Vertical Section Rhythm:** Bölümler arası dikey boşluk nefes almalıdır (`py-24 sm:py-32` veya `120px–180px`). Bölümleri birbirine sıkıştırmak yasaktır.
- **Container Scales:**
  - Odaklanmış editoryal metinler ve formlar: `max-w-4xl` veya `max-w-5xl`.
  - Geniş veri tabloları ve full-bleed galeriler: `max-w-7xl` veya `w-full px-6 sm:px-12`.
- **Responsive Harmony:** Masaüstündeki geniş boşluklar mobilde ekranı boğmayacak şekilde dinamik clamp veya `py-16 sm:py-24` skalasına uyarlanır.

---

## 3. Image Art Direction & Generative Fallbacks

Görseller asla gelişigüzel seçilmez:
- **Işıklandırma & Kompozisyon:** Sektöre uygun renk sıcaklığı; stüdyo softbox ışığı, doğal pencere ışığı veya mimari doğal gölgeler.
- **Kesin Kural (Sıfır Kırık Görsel Yolu):** Kullanıcı gerçek görsel sunmadıysa sahte `/assets/image.jpg` yolları türetmek yasaktır. Bu durumda daima:
  - Kod tabanlı prosedürel Three.js WebGL sahnesi,
  - Saf inline SVG vektörel mimari çizimler (`stroke-current`),
  - Ya da interaktif CSS/Canvas matematiksel gridler devreye sokulur.

---

## 4. Surface & Material Intelligence (Seçici Yüzey Hiyerarşisi)

Her projede aynı kart yüzeyini kullanmak yasaktır:
- **Apple/Linear Aydınlık Yüzey:** Saf beyaz taban (`#FFFFFF`), hafif gri zemin (`#F8F9FA`), şeffaf siyah kenarlık (`border-black/5`), yumuşak gölge (`shadow-[0_8px_30px_rgb(0,0,0,0.06)]`).
- **Editoryal Kağıt Yüzeyi:** Sıcak taş beji (`#F7F6F2`), fildişi çekirdek (`#FFFFFF`), sıcak gri kenarlık (`#E5E2D9`).
- **Derin Grafit & Obsidyen Yüzeyi:** Kömür taban (`#0A0A0C`), ince beyaz saç çizgisi (`border-white/10`), derin gölgeler.
- **Dokunsal SVG Gürültü Katmanı (Law 19):** Düz vektör hissini kırmak için sub-pixel `%3.2` opaklıkta `<feTurbulence>` gürültü katmanı eklenir.
