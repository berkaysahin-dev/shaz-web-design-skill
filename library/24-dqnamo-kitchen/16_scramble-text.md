# Scramble Text (Kriptografik Karışan Metin Çözücü) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Yükleyiciler ve Animasyon` (`Loaders & Animation`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, RequestAnimationFrame, Monospace Typography` · **Fizik:** `Frame interval: 35ms per character cycle, scramble iterations: 3 cycles per glyph, monospace glyph pool: '!<>-_\/[]{}—=+*^?#'`  
> **Etiketler:** `Text Scramble, Hacker Effect, Cyber Decryption, Typography Animation, Invite Code`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Metin veya kod değiştiğinde harfleri rastgele karakterlerle karıştırarak hedef metne çözen siber güvenlik / hacker tarzı metin efekti.

A compact text component that reveals changed text through an encrypted scramble.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Frame interval: 35ms per character cycle, scramble iterations: 3 cycles per glyph, monospace glyph pool: '!<>-_\/[]{}—=+*^?#'`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Scramble Text" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Scramble Text (Kriptografik Karışan Metin Çözücü)
- Category: Loaders & Animation
- Core Philosophy: A compact text component that reveals changed text through an encrypted scramble.
- Motion & Spring Physics: Frame interval: 35ms per character cycle, scramble iterations: 3 cycles per glyph, monospace glyph pool: '!<>-_\/[]{}—=+*^?#'
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, RequestAnimationFrame, Monospace Typography.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`components/ScrambleText.tsx`)
```tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/helpers/classname-helper";

type ScrambleTextProps = {
  children: string;
  className?: string;
  intervalMs?: number;
};

const ENCRYPTED_TEXT_CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";
const MAX_REVEAL_STEPS = 48;

type ScrambleMode = "random" | "stable";

function getTextSegments(text: string) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });

    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }

  return Array.from(text);
}

function getRandomEncryptedTextChar() {
  return ENCRYPTED_TEXT_CHARS[
    Math.floor(Math.random() * ENCRYPTED_TEXT_CHARS.length)
  ];
}

function getStableEncryptedTextChar(segment: string, index: number) {
  let hash = index + 1;

  for (const character of segment) {
    hash = (hash * 31 + (character.codePointAt(0) ?? 0)) % 2147483647;
  }

  return ENCRYPTED_TEXT_CHARS[hash % ENCRYPTED_TEXT_CHARS.length];
}

function getEncryptedTextChar(
  segment: string,
  index: number,
  mode: ScrambleMode,
) {
  if (mode === "stable") {
    return getStableEncryptedTextChar(segment, index);
  }

  return getRandomEncryptedTextChar();
}

function shouldPreserveSegment(segment: string) {
  return segment.trim() === "";
}

function scrambleSegments(
  segments: string[],
  revealedCount: number,
  mode: ScrambleMode,
) {
  return segments
    .map((character, index) => {
      if (shouldPreserveSegment(character) || index < revealedCount) {
        return character;
      }

      return getEncryptedTextChar(character, index, mode);
    })
    .join("");
}

function scrambleText(text: string, revealedCount: number, mode: ScrambleMode) {
  return scrambleSegments(getTextSegments(text), revealedCount, mode);
}

function getRevealStep(segmentCount: number) {
  return Math.max(1, Math.ceil(segmentCount / MAX_REVEAL_STEPS));
}

function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrambleText({
  children,
  className,
  intervalMs = 32,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(() =>
    scrambleText(children, 0, "stable"),
  );

  useEffect(() => {
    const segments = getTextSegments(children);

    if (segments.length === 0 || intervalMs <= 0 || shouldReduceMotion()) {
      setDisplayText(children);
      return;
    }

    let revealedCount = 0;
    const revealStep = getRevealStep(segments.length);
    setDisplayText(scrambleSegments(segments, revealedCount, "random"));

    const timer = window.setInterval(() => {
      revealedCount = Math.min(segments.length, revealedCount + revealStep);
      setDisplayText(scrambleSegments(segments, revealedCount, "random"));

      if (revealedCount >= segments.length) {
        window.clearInterval(timer);
      }
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [children, intervalMs]);

  return (
    <span className={cn("inline-block", className)}>
      <span aria-hidden="true">{displayText}</span>
      <span aria-atomic="true" aria-live="polite" className="sr-only">
        {children}
      </span>
    </span>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/scramble-text/scramble-text-showcase.tsx`)
```tsx
"use client";

import { ArrowClockwiseIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { DynamicButton } from "@/components/DynamicButton";
import { getButtonClassName } from "@/components/public/Button";
import { ScrambleText } from "@/components/ScrambleText";
import { cn } from "@/helpers/classname-helper";

type ScrambleTextShowcaseProps = {
  className?: string;
  interactive?: boolean;
};

const invitePath = "dqnamo.com/invite/";
const inviteCodes = [
  "7K4F2Q9M-X8NV",
  "H3Q89V2C-M7KA",
  "R6PF4L9T-Q2VX",
  "W9ND7B4H-K5TZ",
];

export function ScrambleTextShowcase({
  className,
  interactive = true,
}: ScrambleTextShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [regenerated, setRegenerated] = useState(false);
  const feedbackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current !== null) {
        window.clearTimeout(feedbackTimerRef.current);
      }
    };
  }, []);

  function handleRegenerate() {
    setIndex((value) => (value + 1) % inviteCodes.length);
    setRegenerated(true);

    if (feedbackTimerRef.current !== null) {
      window.clearTimeout(feedbackTimerRef.current);
    }

    feedbackTimerRef.current = window.setTimeout(() => {
      setRegenerated(false);
      feedbackTimerRef.current = null;
    }, 1000);
  }

  const RegenerateIcon = regenerated ? CheckCircleIcon : ArrowClockwiseIcon;

  return (
    <div
      className={cn(
        "flex w-full items-center max-w-sm mx-auto justify-between gap-3 rounded-[13px] border border-grayscale-3 bg-white p-1.5 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3",
        className,
      )}
    >
      <div className="min-w-0 flex-1 overflow-hidden rounded-lg  border-grayscale-3 bg-grayscale-2 p-1.5 font-mono text-[9px] text-grayscale-11 whitespace-nowrap dark:border-grayscale-5 dark:bg-grayscale-4 sm:text-xs">
        <span>{invitePath}</span>
        <ScrambleText>{inviteCodes[index]}</ScrambleText>
      </div>
      {interactive ? (
        <DynamicButton
          aria-label="Regenerate invite code"
          icon={
            <RegenerateIcon
              aria-hidden="true"
              className={regenerated ? "text-green-9" : undefined}
              size={15}
              weight={regenerated ? "fill" : "bold"}
            />
          }
          className="shrink-0 text-xs"
          onClick={handleRegenerate}
          stateKey={regenerated ? "regenerated" : "regenerate"}
          type="button"
          variant="primary"
        >
          Regenerate
        </DynamicButton>
      ) : (
        <span
          className={getButtonClassName({
            className: "shrink-0 text-xs whitespace-nowrap",
            variant: "primary",
          })}
        >
          <ArrowClockwiseIcon aria-hidden="true" size={15} weight="bold" />
          Regenerate
        </span>
      )}
    </div>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const usageSource = `"use client";

import { ArrowClockwiseIcon } from "@phosphor-icons/react";
import { useState } from "react";
import Button from "@/components/public/Button";
import { ScrambleText } from "@/components/ScrambleText";

const inviteCodes = [
  "7K4F2Q9M-X8NV",
  "H3Q89V2C-M7KA",
  "R6PF4L9T-Q2VX",
  "W9ND7B4H-K5TZ",
];

export function InviteCodeExample() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex items-center gap-3">
      <code>
        invite/<ScrambleText>{inviteCodes[index]}</ScrambleText>
      </code>
      <Button
        aria-label="Regenerate invite code"
        onClick={() => setIndex((value) => (value + 1) % inviteCodes.length)}
        type="button"
      >
        <ArrowClockwiseIcon aria-hidden="true" size={15} weight="bold" />
        Regenerate
      </Button>
    </div>
  );
}
`;

```


---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
