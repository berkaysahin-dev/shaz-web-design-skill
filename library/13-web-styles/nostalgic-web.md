# Nostalgic Web 📺 — Vision Web Designer Specification

> **Kategori:** Web Tasarım Stilleri  
> **Stil Kodu:** `nostalgic-web`  
> **Marka / Konsept:** `NETNOSTALGIA.COM`  
> **Vurgu Rengi:** `#008080`  
> **Karakteristikler:** Winamp 2.7 Medya Oynatıcı, Kayan Kırmızı Ticker Bandı, 2000'ler Forum Tablosu, Kabartmalı Gri Butonlar

---

## 1. Stil Özeti ve Felsefesi
2000'ler başı internet ve forum kültürünün birebir kopyası olan Nostalgic Web arayüzü. 'NETNOSTALGIA.COM' 3D pikselli başlığı, Vengaboys çalan çalışan Winamp 2.7 oynatıcısı, kayan kırmızı marquee haber şeridi, retro forum konuları tablosu ve tüplü CRT monitör ziyaretçi defteri.

Bu stil şartnamesi ve yapay zeka kodlama promptu, projenin **`nostalgic-web.jpg`** görsel önizlemesini **birebir ve eksiksiz** olarak kodlamak üzere kalibre edilmiştir.

---

## 2. Tasarım Belirteçleri (Design Tokens)

- **Renk Paleti:** `#008080`, `#B8B9B8`, `#505070`, `#B02020`, `#7070A0`
- **Vurgu Rengi (Accent):** `#008080`
- **Önerilen Tipografi:** MS Sans Serif, Pixelated Courier, Comic Sans
- **Görsel Kimlik Unsurları:** Winamp 2.7 Medya Oynatıcı, Kayan Kırmızı Ticker Bandı, 2000'ler Forum Tablosu, Kabartmalı Gri Butonlar
- **Önizleme Görseli:** `05_Web_Stilleri/nostalgic-web.jpg`

---

## 3. Birebir Yapay Zeka Kodlama Promptu (Cursor / Claude Code / v0 / Lovable)

Aşağıdaki promptu Claude, Cursor, v0 veya Lovable'a doğrudan yapıştırarak görseldeki arayüzü birebir üretebilirsiniz:

```markdown
Build an authentic, high-fidelity early 2000s Nostalgic Web (Web 1.0 / early Web 2.0) portal homepage UI exactly matching the reference design:

=== CORE IDENTITY & BRANDING ===
- Browser Shell: Authentic Netscape / Internet Explorer 5 browser frame with classic navigational buttons [Back], [Forward], [Stop], [Home], and address bar `http://www.netnostalgia.com`.
- Site Header: Monumental 3D red pixelated wordmark "NETNOSTALGIA.COM", subtitle "NETNOSTALGIA.COM - Your Portal to Y2K Web Culture! | Established 1999".
- Top Icon Navigation: Classic 90s pixel art icons with labels [Home] (house), [Chat] (speech bubble), [Forum] (smiley), [Gallery] (picture), [Links] (chain).

=== VISUAL LANGUAGE & DESIGN SYSTEM ===
- Operating System & Web Aesthetic: Windows 98 / early 2000s desktop GUI.
- Bevel & Emboss: Classic 3D beveled grey buttons (#C0C0C0) with 2px white highlight on top/left and 2px dark grey (#404040) shadow on bottom/right.
- Marquee Ticker: Eye-catching red scrolling marquee banner:
  `* * WELCOME TO NETNOSTALGIA.COM! * LATEST FORUM ACTIVITY! * WINAMP SKINS ADDED! * SIGN OUR GUESTBOOK! * *`
- Typography: Authentic pixelated MS Sans Serif, Times New Roman, and Courier.

=== COMPONENT ARCHITECTURE ===
1. Left Navigation Rail: Beveled grey button stack: [Forum], [Winamp Skins], [Guestbook], [Webring], [Member Login], [About Us], with search input and beveled [Go] button.
2. Center Content - Retro Media Forum: Classic HTML table with blue header and categories:
   - "General Chat" (Topic: Latest Y2K Gear!, 34 posts, author: RetroFan01).
   - "Music" (Topic: 90s vs 00s, 35 posts, author: pixelMaster).
   - "Y2K Nostalgia" (Topic: Best Blink-182 Album?, 18 posts).
3. Bottom-Left Interactive Winamp 2.7 Player:
   - Detailed Winamp skin with green digital LCD readout: "Vengaboys - We're Going to Ibiza! 128kbps 3:38".
   - Active graphic equalizer visualizer with green-to-red frequency bars and sliders.
   - Playlist window displaying tracks: 1. Daft Punk, 2. Eiffel 65, 3. ATB. Transport buttons (Play, Pause, Stop, Prev, Next).
4. Right Sidebar: "Top Winamp Skins", "Recent Members", embossed 3D button "Sign Our Guestbook!", and a retro CRT desktop monitor with blinking terminal prompt.

---

## ARCHITECTURAL & INTERACTIVE DIRECTIVES

- **1:1 Visual Fidelity:** Recreate the exact layout, container proportions, and depth layers visible in the reference design (`./05_Web_Stilleri/nostalgic-web.jpg`).
- **Clean Typographic Primacy:** Headings lead authoritatively on their own. Never insert decorative kicker/eyebrow tags or '//' label prefixes above titles.
- **Zero Slop:** Never use pulsing dots, flashing status lights, fake coordinates, or artificial machine telemetry. Do not force arbitrary bento grids or monumental footers where they do not belong in the reference design.
- **Surface & Motion Physics:** Tactile hover and press states using calibrated spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Interactive pointer parallax with damped tilt tracking reacting subtly to cursor coordinates.
