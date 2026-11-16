# Shaz Agency Web Design — Design Decision History & Continuous Memory (Design Intelligence 2.0)

This system establishes an architectural memory layer across design generations, ensuring the AI continuously tracks its aesthetic decisions and deliberately prevents habit-forming visual repetition.

---

## 1. Decision History Structure

Her tamamlanan web tasarımı için (oturum belleğinde ve audit günlüğünde) şu 8 veri noktası izlenir:
1. **Project ID & Industry:** Proje adı ve sektörel kategorisi.
2. **Chosen Art Direction:** Seçilen yaratıcı yön (Safe & Premium, Bold & Distinct, Experimental).
3. **Primary References (Blueprints):** Kütüphaneden seçilen en az 3-5 blueprint dosyası.
4. **Color Tokens & Polarity:** Zemin, yüzey, metin ve vurgu rengi (Açık / Koyu / Çift Ton).
5. **Typography System:** Kullanılan display ve metin font eşleşmesi.
6. **Hero & Layout Architecture:** Uygulanan kompozisyon arketipi ve grid sistemi.
7. **Design Signature (Görsel İmza):** Projeyi akılda kalıcı kılan 1–3 özgün tasarım kararı.
8. **Visual QA Score:** 100 üzerinden alınan puan dökümü.

---

## 2. Anti-Repetition Cross-Project Check (Alışkanlık Kırma Kontrolü)

Yeni bir proje tasarlanırken, son üretilen 3 projenin karar kayıtları incelenir:
- Eğer son projede **Koyu Zemin** kullanıldıysa → Yeni projede öncelikle **Aydınlık / Taş / Kağıt Zemin** değerlendirilir.
- Eğer son projede **Floating Capsule Nav** kullanıldıysa → Yeni projede **Full-Bleed Horizon** veya **Asymmetric Split Header** değerlendirilir.
- Eğer son projede **Grotesk Sans** kullanıldıysa → Yeni projede **Editoryal Serif** veya **Karakterli Geometrik Display** değerlendirilir.
- Eğer son projede **Marquee** kullanıldıysa → Yeni projede **Ledger Tablosu** veya **İnteraktif Çekmece** değerlendirilir.

Amaç: Hiçbir iki web sitesinin aynı tasarımcının aynı şablonundan çıktığı hissini vermemesini sağlamak.
