# Playing Cards (İnteraktif İskambil Kartları ve Yelpaze Deste) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Fiziksel ve İskeomorfi` (`Physical & Skeuomorphic`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion, Custom SVG Pips` · **Fizik:** `Fan spread angle: -18deg to +18deg, hover elevation: translateY(-16px) with rotate(0deg), click play displacement: translateY(-120px)`  
> **Etiketler:** `Playing Cards, Card Fan, Tactile Deck, Skeuomorphism, SVG Vector Pips`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Gerçekçi saray kartları (Valeler, Kızlar, Papazlar), pip sembol geometrisi, kart arkası deseni ve parmakla gezilebilen 3D yelpaze deste.

A composable playing card, plus a fanned hand you can thumb through and play.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Fan spread angle: -18deg to +18deg, hover elevation: translateY(-16px) with rotate(0deg), click play displacement: translateY(-120px)`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Playing Cards" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Playing Cards (İnteraktif İskambil Kartları ve Yelpaze Deste)
- Category: Physical & Skeuomorphic
- Core Philosophy: A composable playing card, plus a fanned hand you can thumb through and play.
- Motion & Spring Physics: Fan spread angle: -18deg to +18deg, hover elevation: translateY(-16px) with rotate(0deg), click play displacement: translateY(-120px)
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, Motion, Custom SVG Pips.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/PlayingCard.tsx`)
```tsx
import Image from "next/image";
import { cn } from "@/helpers/classname-helper";

export type PlayingCardRank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export type PlayingCardSuit = "clubs" | "diamonds" | "hearts" | "spades";

export type PlayingCardProps = {
  rank: PlayingCardRank;
  suit: PlayingCardSuit;
  className?: string;
  faceDown?: boolean;
  /** Card width in pixels. Height follows the classic 5:7 ratio. */
  width?: number;
};

type Pip = { x: number; y: number; flip?: boolean };

const suitPaths: Record<PlayingCardSuit, string> = {
  clubs:
    "M12 2a4.1 4.1 0 0 0-4.1 4.1c0 .93.31 1.79.83 2.48a4.1 4.1 0 1 0 2.9 7.33c-.28 2.2-1.02 3.72-2.43 5.09h5.6c-1.41-1.37-2.15-2.89-2.43-5.09a4.1 4.1 0 1 0 2.9-7.33c.52-.69.83-1.55.83-2.48A4.1 4.1 0 0 0 12 2Z",
  diamonds: "M12 1.5 19.3 12 12 22.5 4.7 12Z",
  hearts:
    "M12 21.4C6.1 15.9 2.6 12.4 2.6 8.6a4.85 4.85 0 0 1 4.85-4.85c1.8 0 3.5.87 4.55 2.33a5.63 5.63 0 0 1 4.55-2.33A4.85 4.85 0 0 1 21.4 8.6c0 3.8-3.5 7.3-9.4 12.8Z",
  spades:
    "M12 1.8C6.9 7.2 3.6 10.3 3.6 13.6a4.35 4.35 0 0 0 7.1 3.36c-.3 1.9-1 3.26-2.35 4.54h7.3c-1.35-1.28-2.05-2.64-2.35-4.54a4.35 4.35 0 0 0 7.1-3.36c0-3.3-3.3-6.4-8.4-11.8Z",
};

const redSuits: ReadonlySet<PlayingCardSuit> = new Set(["diamonds", "hearts"]);

const courtSuitCode: Record<PlayingCardSuit, string> = {
  clubs: "C",
  diamonds: "D",
  hearts: "H",
  spades: "S",
};

const left = 0;
const center = 50;
const right = 100;

const pipLayouts: Partial<Record<PlayingCardRank, readonly Pip[]>> = {
  "2": [
    { x: center, y: 0 },
    { x: center, y: 100, flip: true },
  ],
  "3": [
    { x: center, y: 0 },
    { x: center, y: 50 },
    { x: center, y: 100, flip: true },
  ],
  "4": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
  "5": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: center, y: 50 },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
  "6": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: left, y: 50 },
    { x: right, y: 50 },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
  "7": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: center, y: 25 },
    { x: left, y: 50 },
    { x: right, y: 50 },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
  "8": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: center, y: 25 },
    { x: left, y: 50 },
    { x: right, y: 50 },
    { x: center, y: 75, flip: true },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
  "9": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: left, y: 33.3 },
    { x: right, y: 33.3 },
    { x: center, y: 50 },
    { x: left, y: 66.7, flip: true },
    { x: right, y: 66.7, flip: true },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
  "10": [
    { x: left, y: 0 },
    { x: right, y: 0 },
    { x: center, y: 16.7 },
    { x: left, y: 33.3 },
    { x: right, y: 33.3 },
    { x: left, y: 66.7, flip: true },
    { x: right, y: 66.7, flip: true },
    { x: center, y: 83.3, flip: true },
    { x: left, y: 100, flip: true },
    { x: right, y: 100, flip: true },
  ],
};

const courtRanks: ReadonlySet<PlayingCardRank> = new Set(["J", "Q", "K"]);

function SuitIcon({
  className,
  suit,
}: {
  className?: string;
  suit: PlayingCardSuit;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d={suitPaths[suit]} />
    </svg>
  );
}

function CornerIndex({
  flipped = false,
  rank,
  suit,
}: {
  flipped?: boolean;
  rank: PlayingCardRank;
  suit: PlayingCardSuit;
}) {
  return (
    <div
      className={cn(
        "absolute flex flex-col items-center gap-[0.2em]",
        flipped
          ? "right-[0.65em] bottom-[0.6em] rotate-180"
          : "top-[0.6em] left-[0.65em]",
      )}
    >
      <span className="font-semibold text-[1.55em] leading-none tracking-tight">
        {rank}
      </span>
      <SuitIcon className="size-[1.05em]" suit={suit} />
    </div>
  );
}

export function PlayingCard({
  className,
  faceDown = false,
  rank,
  suit,
  width = 112,
}: PlayingCardProps) {
  const isRed = redSuits.has(suit);
  const pips = pipLayouts[rank];
  const isCourt = courtRanks.has(rank);

  return (
    <div
      className={cn(
        "relative aspect-[5/7] select-none overflow-hidden rounded-[0.9em] border border-black/10 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.07)]",
        !faceDown && (isRed ? "text-[#c22f2f]" : "text-[#23262d]"),
        className,
      )}
      style={{ fontSize: width / 14, width }}
    >
      {faceDown ? (
        <div
          className="absolute inset-[0.55em] rounded-[0.5em] border border-black/10"
          style={{
            backgroundColor: "#9d2c35",
            // Crosshatch gradients sit underneath the PNG pattern as a
            // fallback while the image loads.
            backgroundImage:
              "url('/experiments/card-back.png'), repeating-linear-gradient(45deg, rgba(255,255,255,0.16) 0, rgba(255,255,255,0.16) 1.5px, transparent 1.5px, transparent 7px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.16) 0, rgba(255,255,255,0.16) 1.5px, transparent 1.5px, transparent 7px)",
            backgroundPosition: "center",
            backgroundSize: "cover, auto, auto",
          }}
        />
      ) : (
        <>
          <CornerIndex rank={rank} suit={suit} />
          <CornerIndex flipped rank={rank} suit={suit} />

          {rank === "A" ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <SuitIcon className="size-[4.6em]" suit={suit} />
            </div>
          ) : null}

          {isCourt ? (
            <div className="absolute inset-x-[24%] inset-y-[16%] overflow-hidden rounded-[0.4em] border border-current/35">
              {/* Decorative: the corner indices already convey rank and suit. */}
              <Image
                alt=""
                className="object-cover"
                draggable={false}
                fill
                sizes={`${Math.round(width * 0.52)}px`}
                src={`/experiments/courts/${rank}${courtSuitCode[suit]}.png`}
              />
            </div>
          ) : null}

          {pips ? (
            <div className="absolute inset-x-[24%] inset-y-[15%]">
              {pips.map((pip) => (
                <span
                  className="-translate-x-1/2 -translate-y-1/2 absolute"
                  key={`${pip.x}-${pip.y}`}
                  style={{ left: `${pip.x}%`, top: `${pip.y}%` }}
                >
                  <SuitIcon
                    className={cn("size-[2.1em]", pip.flip && "rotate-180")}
                    suit={suit}
                  />
                </span>
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/playing-cards/playing-cards-showcase.tsx`)
```tsx
"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { type FanCard, PlayingCardFan } from "@/components/PlayingCardFan";

const deck: readonly FanCard[] = [
  { id: "ace-spades", rank: "A", suit: "spades" },
  { id: "queen-hearts", rank: "Q", suit: "hearts" },
  { id: "ten-diamonds", rank: "10", suit: "diamonds" },
  { id: "seven-clubs", rank: "7", suit: "clubs" },
  { id: "four-hearts", rank: "4", suit: "hearts" },
  { id: "jack-clubs", rank: "J", suit: "clubs" },
  { id: "nine-spades", rank: "9", suit: "spades" },
];

const handSizes = [3, 5, 7] as const;

type HandSize = (typeof handSizes)[number];

export function PlayingCardsShowcase() {
  const [handSize, setHandSize] = useState<HandSize>(7);
  const [playedIds, setPlayedIds] = useState<readonly string[]>([]);

  const cards = deck.slice(0, handSize);

  function redeal() {
    setPlayedIds([]);
  }

  function selectHandSize(nextSize: HandSize) {
    setHandSize(nextSize);
    redeal();
  }

  return (
    <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
      <div className="relative h-[420px] w-full overflow-hidden bg-white dark:bg-grayscale-2">
        <div
          aria-hidden="true"
          className="-translate-x-1/2 pointer-events-none absolute top-[84px] left-1/2 flex h-[170px] w-[126px] items-center justify-center"
        >
          <AnimatePresence initial={false}>
            {playedIds.length === 0 ? (
              <motion.span
                animate={{ opacity: 1 }}
                className="px-3 text-center font-mono font-semibold text-[10px] text-grayscale-9 uppercase leading-4"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                Play a card
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>

        <PlayingCardFan
          cards={cards}
          onPlay={(card) => setPlayedIds((current) => [...current, card.id])}
          playedIds={playedIds}
        />

        <AnimatePresence>
          {playedIds.length === cards.length ? (
            <motion.p
              animate={{ opacity: 1 }}
              className="-translate-x-1/2 absolute bottom-10 left-1/2 whitespace-nowrap font-mono font-semibold text-[10px] text-grayscale-9 uppercase"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            >
              Hand empty — redeal to keep playing
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="grid gap-4 border-grayscale-3 border-t p-4 dark:border-grayscale-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono font-semibold text-[10px] text-grayscale-10 uppercase leading-none">
              Hand size
            </span>
            <div className="flex flex-wrap gap-1.5">
              {handSizes.map((size) => (
                <button
                  aria-pressed={handSize === size}
                  className="h-7 rounded-md px-2 font-medium text-grayscale-11 text-xs transition-colors data-[active=true]:bg-grayscale-3 data-[active=true]:text-grayscale-12 data-[active=true]:small-shadow dark:data-[active=true]:bg-grayscale-4"
                  data-active={handSize === size}
                  key={size}
                  onClick={() => selectHandSize(size)}
                  type="button"
                >
                  {size} cards
                </button>
              ))}
            </div>
          </div>

          <button
            className="h-7 rounded-md bg-grayscale-12 px-2.5 font-medium text-grayscale-1 text-xs transition-colors hover:bg-grayscale-11 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-grayscale-5 dark:text-grayscale-12 dark:hover:bg-grayscale-6"
            disabled={playedIds.length === 0}
            onClick={redeal}
            type="button"
          >
            Redeal
          </button>
        </div>
      </div>
    </div>
  );
}

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/experiments/card-back.png`
- `assets/dqnamo/experiments/courts/JC.png`
- `assets/dqnamo/experiments/courts/JD.png`
- `assets/dqnamo/experiments/courts/JH.png`
- `assets/dqnamo/experiments/courts/JS.png`
- `assets/dqnamo/experiments/courts/KC.png`
- `assets/dqnamo/experiments/courts/KD.png`
- `assets/dqnamo/experiments/courts/KH.png`
- `assets/dqnamo/experiments/courts/KS.png`
- `assets/dqnamo/experiments/courts/QC.png`
- `assets/dqnamo/experiments/courts/QD.png`
- `assets/dqnamo/experiments/courts/QH.png`
- `assets/dqnamo/experiments/courts/QS.png`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
