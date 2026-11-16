# THE KITCHEN BY DQNAMO — Physical & Tactile UI Archive
## Dokunsal Mikro-Etkileşim, İskeomorfi ve Fiziksel Web Bileşenleri Arşivi

> **Kaynak:** [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen) · **Tasarım & Geliştirme:** John-Paul (`@dqnamo` / `interface.london`)  
> **Entegrasyon & Mimari Standart:** Shaz Agency (Swiss Utilitarian & Hardware Double-Bezel)  
> **Bileşen Sayısı:** 21 Orijinal Dokunsal Bileşen ve Deney  
> **Teknoloji Yığını:** React, TypeScript, Tailwind CSS, Motion (Framer Motion), Phosphor Icons, Web Audio API, Canvas 2D

---

## 1. Koleksiyon Özeti ve Tasarım Felsefesi

**The Kitchen (Mutfak)**, modern web arayüzlerindeki aşırı basitleştirilmiş ve ruhsuz düz (flat) tasarım alışkanlıklarına meydan okuyan, fiziksel dünyanın dokunsal hissini (tactile affordance), ağırlığını, sesini ve mekanik mekanizmalarını tarayıcıya taşıyan öncü bir mikro-etkileşim laboratuvarıdır.

Bu arşivde yer alan her bileşen:
1. **Fiziksel Derinlik & Katmanlama:** Düz renk kutuları yerine; içe göçen yüzeyler, preslenmiş kenar olukları (bevels), kağıt dokuları ve gerçek zamanlı ışık kırılımları barındırır.
2. **Yay Fiziği (Spring Mechanics):** Statik doğrusal (`linear`) geçişler yerine; kütle (`mass`), sertlik (`stiffness`) ve sönümleme (`damping`) parametreleriyle hesaplanmış gerçek dünya fiziği kullanır.
3. **Duyusal Geri Bildirim:** Tıklama, basılı tutma, yırtma, makara döndürme ve sürükleme eylemlerinde kullanıcıya anında dokunsal ve görsel tatmin sağlar.
4. **Shaz Agency Donanım Çift Çerçeve (`Hardware Double-Bezel`) Uyumu:** Koleksiyondaki tüm bileşenler Shaz Agency'nin imza niteliğindeki `#F6F5F1` sıcak taş kanvası, `#ECEAE3` dış tepsi ve `#FFFFFF` iç çekirdek mimarisiyle kusursuz çalışacak şekilde optimize edilmiştir.

---

## 2. Envanter Listesi (21 Dokunsal Bileşen)

| # | Bileşen Adı | İngilizce Tanım | Kategori | Temel Fizik & Teknoloji |
|---|---|---|---|---|
| **01** | [Tactile Button](./01_tactile-button.md) | A physical button study built from a shaped face, firm edge, and compressible depth. | Butonlar & Eylemler | Spring 400/28, 4px->1px sıkıştırma |
| **02** | [Receipt Printer](./02_receipt-printer.md) | A SaaS checkout state that prints a physical receipt when payment clears. | Fiziksel & İskeomorfi | Kağıt çıkarma, yırtma açısı (-2deg), termal makbuz |
| **03** | [Cassette Audio Player](./03_cassette-player.md) | A tactile audio player with turning reels and a compact-cassette control surface. | Ses & Medya | 33 RPM dönen makara, Web Audio API, VTT altyazı |
| **04** | [Hold to Confirm](./04_hold-to-confirm.md) | A deliberate action that fills while held, then offers a timed undo. | Butonlar & Eylemler | 1200ms basılı tutma dolumu, zamanlı geri al (undo) |
| **05** | [Magnetic Drop Zone](./05_magnetic-drop-zone.md) | A file target that pulls toward an incoming drag before the file lands. | Butonlar & Eylemler | Manyetik çekim vektörü (0.24 delta çarpanı), drag & drop |
| **06** | [Dynamic Button](./06_dynamic-button.md) | A button that smoothly resizes as its label animates. | Butonlar & Eylemler | Motion layout yay geçişi, etiket crossfade |
| **07** | [Dynamic Button v2](./07_dynamic-button-v2.md) | Multi-state button with spring geometry morphing, icon transitions, and physics feedback. | Butonlar & Eylemler | Çok durumlu yay morflama, 420/32 stiffness/damping |
| **08** | [Playing Cards](./08_playing-cards.md) | A composable playing card, plus a fanned hand you can thumb through and play. | Fiziksel & İskeomorfi | 3D yelpaze deste (-18° ila +18°), saray kartları, SVG pip |
| **09** | [Ticket](./09_ticket.md) | A perforated ticket silhouette with composable sections and subtle parallax depth. | Fiziksel & İskeomorfi | Delikli kenar çentikleri, 3D imleç paralaksı, barkod |
| **10** | [Stamp](./10_stamp.md) | A reusable postage stamp frame for images, text, and custom React content. | Fiziksel & İskeomorfi | CSS radyal gradyan tırtıklı pul kenarı, nostaljik doku |
| **11** | [Scroll Fade List](./11_scroll-fade-list.md) | A compact list surface with a soft overflow fade. | Seçiciler & Grafikler | CSS mask-image üst/alt yumuşak solma gradyanı |
| **12** | [Model Selector](./12_model-selector.md) | A benchmark-informed picker with model configuration. | Seçiciler & Grafikler | Benchmark metrik çubukları, Anthropic/OpenAI/Gemini logoları |
| **13** | [Animated Signature](./13_animated-signature.md) | A reusable SVG signature component that draws itself on mount. | Yükleyiciler & Animasyon | Stroke-dashoffset dolmakalem çizim animasyonu (1.4s) |
| **14** | [Logo Trace Loader](./14_logo-trace-loader.md) | A traced logo loader that resolves into a filled mark. | Yükleyiciler & Animasyon | Vektörel dış hat çiziminden dolguya geçiş (1.2s döngü) |
| **15** | [Iridescent Foil](./15_iridescent-foil.md) | A layered CSS foil treatment that reacts to scroll and pointer. | Yükleyiciler & Animasyon | İmleç açısına duyarlı prizmatik holografik yansıma |
| **16** | [Scramble Text](./16_scramble-text.md) | A compact text component that reveals changed text through an encrypted scramble. | Yükleyiciler & Animasyon | Kriptografik karakter karıştırma çözücü (35ms döngü) |
| **17** | [Agent Dock](./17_agent-dock.md) | A compact agent dock with voice, chat, composer, and working-state interactions. | Seçiciler & Grafikler | Yüzen yapay zeka araç çubuğu, ses dalgası, durum geçişi |
| **18** | [Animated Banner](./18_animated-banner.md) | A centered animated World Cup 2026 banner component demo. | Ses & Medya | Video döngüsü, sinematik tipografi ve doku katmanı |
| **19** | [Animated Loading State](./19_animated-loading-state.md) | A Game of Life loading state that resolves into an animated graph. | Yükleyiciler & Animasyon | Conway'in Hayat Oyunu hücresel simülasyonu, Canvas 2D |
| **20** | [Animated Sparkline](./20_animated-sparkline.md) | A compact SVG sparkline that animates between trend states and adapts its color. | Seçiciler & Grafikler | Kübik-bezier SVG yol morflaması, dinamik trend rengi |
| **21** | [Harmonic Color Picker](./21_color-picker.md) | A refined Radix color palette and harmonic pairing picker. | Seçiciler & Grafikler | Radix renk skalaları, kontrast analizi, popover |

---

## 3. Kaynak Kodları ve Varlık Dizini (`src/` & `assets/dqnamo/`)

Tüm orijinal TypeScript/React kaynak kodları, yardımcılar, paketler ve medya dosyaları kütüphaneye dahil edilmiştir:
- **Kaynak Kodları:** `13_Dqnamo_Kitchen_Arsivi/src/`
  - `components/`: TactileButton, ReceiptPrinter, CassettePlayer, PlayingCard, Ticket, Stamp vb.
  - `app/experiments/`: 21 deneyin tam vitrin ve sayfa implementasyonları.
  - `packages/game-of-life-animation/`: Game of Life motoru.
- **Medya ve Varlıklar:** `assets/dqnamo/`
  - Ses dosyaları: `assets/dqnamo/experiments/cassette-player/one-small-step.mp3`
  - Görseller: İskambil saray kartları (`courts/*.png`), pul manzarası (`retro-landscape.png`), makbuz logosu.
  - Dokular: `plastic-noise.svg`, `receipt-paper.svg`.
  - Videolar: `videos/home/world-cup-2026.mp4`.
