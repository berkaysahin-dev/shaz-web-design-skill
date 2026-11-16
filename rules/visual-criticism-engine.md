# Shaz Agency Web Design — Autonomous Visual Criticism & Scoring Engine (Design Intelligence 2.0)

This engine empowers the AI to critically evaluate and score its own design output before presenting it to the user. It enforces a strict 100-point visual audit with an 85-point minimum threshold for delivery.

---

## 1. The 10-Question Autonomous Self-Audit

Kod üretiminden hemen sonra Art Director şu 10 soruyu tarafsızca yanıtlar:

1. **Swap Test (Yer Değiştirme Testi):** Bu tasarım marka ismi değiştirilip başka bir sektördeki rakibe verilse sırıtır mı? Sırıtmazsa tasarım jeneriktir; reddet.
2. **AI Cliché Test:** Tasarım mor-cyan gradyanlı, gereksiz parlayan ikonlu, standart 3 kartlı tipik bir AI şablonuna benziyor mu? Benziyorsa hemen çeşitlendir.
3. **Eyebrow & Clutter Test:** Başlıkların üzerinde `OTONOM SİSTEMLER`, `01 · TEMEL` veya `SECTION 02` gibi gereksiz etiketler var mı? Varsa derhal sil.
4. **Heavy Essay Test:** Sayfada akademik felsefe dersi veren uzun paragraflar var mı? Varsa en fazla 1 net, şık, insani cümleye indir.
5. **Görsel Hiyerarşi:** Başlık ilk bakışta dikkat çekiyor mu? İkincil öğeler başlığı gölgeliyor mu?
6. **Renk Uyumu:** Renkler sektörün gerçek malzemesini yansıtıyor mu? Neon veya parıltı hatası var mı?
7. **Tipografi Kalitesi:** Font eşleşmesi, satır yüksekliği ve negatif tracking profesyonel mi?
8. **Negatif Alan (Whitespace):** Bölümler arasında en az 120px nefes alanı var mı, yoksa içerikler üst üste mi biniyor?
9. **Kütüphane Yararlanımı:** Proje `library/INDEX.md` içindeki 987 blueprint'ten doğru şekilde beslendi mi?
10. **Mobil Akış:** Küçük ekranlarda yatay taşma (`overflow-x`) veya dokunulamaz buton var mı?

---

## 2. 100-Point Visual Scoring Matrix

Her tasarım şu 9 kategoride puanlanır (Toplam 100 Puan):

| Değerlendirme Kategorisi | Maksimum Puan | Başarı Kriteri |
| :--- | :---:| :--- |
| **Visual Design Quality** | 20 | Üst düzey estetik, görsel derinlik, sıfır acemilik, zarif kenarlıklar ve gölgeler. |
| **Industry Relevance** | 15 | Sektörün DNA'sına tam uyum (Örn: Yazılımda Apple/Linear sadeliği, Mimarlıkta Dezeen). |
| **Originality & Distinct DNA** | 15 | Diğer sektörlerden ve standart AI şablonlarından belirgin biçimde ayrışma. |
| **Typography & Copy Discipline** | 10 | Şık, insani, başlık üstü etiketsiz, orantılı satır aralığı ve güçlü font eşleşmesi. |
| **Layout & Composition** | 10 | Asimetrik denge, doğru grid kullanımı, kusursuz hizalama, sıfır 50/50 hero klişesi. |
| **Color Harmony & Polarity** | 10 | Körü körüne siyah zemin yerine sektöre özgü palet, sıfır neon, sıfır ucuz gradyan. |
| **UX & Usability** | 10 | Net aksiyon butonları, sezgisel formlar, erişilebilir dokunma hedefleri (≥ 44px). |
| **Responsive Quality** | 5 | Sıfır horizontal overflow (`overflow-x-clip`), kusursuz mobil yığınlama. |
| **Reference Utilization** | 5 | Kütüphanedeki gerçek blueprint mekaniklerinin projeye başarıyla uyarlanması. |
| **TOPLAM HEDEF** | **100** | **ASGARİ GEÇER PUAN: 85 / 100** |

---

## 3. Strict 85-Point Delivery Gate

> **KRİTİK KURAL:** 
> Toplam puanı **85'in altında** kalan hiçbir tasarım kullanıcıya nihai teslim edilemez. Eksik görülen kısımlar (örneğin aşırı metin yoğunluğu, yanlış zemin rengi veya eksik negatif alan) kod tesliminden önce derhal revize edilerek yeniden puanlanır.
