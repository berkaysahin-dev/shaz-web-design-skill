# Animated Banner (Animasyonlu Dünya Kupası Bannerı) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Ses ve Medya` (`Audio & Media`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, HTML5 Video, Tailwind CSS` · **Fizik:** `Video overlay loop, parallax scroll tracking delta, hardware accelerated CSS backdrop filter`  
> **Etiketler:** `Video Banner, Hero Section, World Cup 2026, Cinematic UI, Motion Header`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Arka planda video akışı, dokusal katmanlar ve dinamik tipografik hiyerarşi içeren Dünya Kupası 2026 tanıtım bannerı.

A centered animated World Cup 2026 banner component demo with live video loop and responsive typography.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Video overlay loop, parallax scroll tracking delta, hardware accelerated CSS backdrop filter`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Animated Banner" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Animated Banner (Animasyonlu Dünya Kupası Bannerı)
- Category: Audio & Media
- Core Philosophy: A centered animated World Cup 2026 banner component demo with live video loop and responsive typography.
- Motion & Spring Physics: Video overlay loop, parallax scroll tracking delta, hardware accelerated CSS backdrop filter
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, HTML5 Video, Tailwind CSS.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`app/experiments/animated-banner/instruction-panel.tsx`)
```tsx
"use client";

import { CheckCircleIcon, CopyIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import Button from "@/components/public/Button";
import TextLink from "@/components/public/TextLink";

type InstructionPanelProps = {
  copyText: string;
  instructions: readonly {
    title: string;
    text:
      | string
      | readonly (
          | string
          | {
              href: string;
              label: string;
            }
        )[];
  }[];
};

export function InstructionPanel({
  copyText,
  instructions,
}: InstructionPanelProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = copyText;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-4 border-grayscale-3 border-b p-2">
        <span className="rounded-md bg-grayscale-3 px-2 py-1 font-semibold text-grayscale-11 text-xs">
          Instructions
        </span>
        <Button
          aria-label="Copy prompt"
          className="shrink-0 text-xs"
          onClick={handleCopy}
          type="button"
          variant="secondary"
        >
          {copied ? (
            <CheckCircleIcon className="text-green-9" size={15} weight="fill" />
          ) : (
            <CopyIcon size={15} weight="bold" />
          )}
          {copied ? "Copied" : "Copy prompt"}
        </Button>
      </div>
      <ol className="flex min-h-0 list-decimal flex-col gap-5 px-7 py-5 text-grayscale-11 text-sm leading-6">
        {instructions.map((instruction) => (
          <li key={instruction.title} className="pl-1">
            <h2 className="font-medium text-grayscale-12 text-sm">
              {instruction.title}
            </h2>
            <p className="mt-1 text-grayscale-10">
              {typeof instruction.text === "string"
                ? instruction.text
                : instruction.text.map((part) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <TextLink
                        href={part.href}
                        key={`${instruction.title}-${part.href}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {part.label}
                      </TextLink>
                    ),
                  )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/animated-banner/page.tsx`)
```tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ExperimentLayout } from "@/app/experiments/_components/ExperimentPage";
import { WorkWithMeCta } from "@/components/WorkWithMeCta";
import { WorldCupCard } from "@/components/worldcup/world-cup-card";
import { BANNER_DEMO_COPY, BANNER_DEMO_INSTRUCTIONS } from "./copy-content";
import { InstructionPanel } from "./instruction-panel";

export const metadata: Metadata = {
  title: "Animated banner | dqnamo",
  description: "A centered animated World Cup 2026 banner component demo.",
};

export default function AnimatedBannerPage() {
  return (
    <ExperimentLayout
      description="A reusable animated banner pattern built from a generated poster, short video loop, gradient overlay, and compact call to action."
      title="Animated Banner"
    >
        <section className="mt-12 flex flex-col items-center justify-center gap-1.5 rounded-[16px] border border-grayscale-3 bg-grayscale-2 p-1.5">
          <div className="flex w-full items-center justify-center rounded-[13px] border border-grayscale-3 bg-grayscale-1 p-4 small-shadow dark:border-transparent dark:bg-grayscale-2 dark:shadow-none md:p-28">
            <div className="w-full">
              <WorldCupCard />
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3">
            <InstructionPanel
              copyText={BANNER_DEMO_COPY}
              instructions={BANNER_DEMO_INSTRUCTIONS}
            />
          </div>
        </section>

        <section className="flex flex-col items-start gap-2 px-2 pt-10 text-left">
          <p className="text-grayscale-10 text-xs leading-5">
            Built as part of my work on
          </p>
          <div className="flex items-center justify-start gap-3">
            <Image
              src="/images/beret.svg"
              alt=""
              width={28}
              height={28}
              className="size-7"
            />
            <Image
              src="/images/typography-full-blackOnNone-v2.svg"
              alt="Ask Gina"
              width={98}
              height={19}
              className="h-[19px] w-auto dark:hidden"
            />
            <Image
              src="/images/typography-full-whiteOnNone-v2.svg"
              alt="Ask Gina"
              width={98}
              height={19}
              className="hidden h-[19px] w-auto dark:block"
            />
          </div>
        </section>

        <WorkWithMeCta className="mt-10 mb-16" />
    </ExperimentLayout>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
type InstructionTextPart =
  | string
  | {
      href: string;
      label: string;
    };

export const BANNER_DEMO_INSTRUCTIONS = [
  {
    title: "Generate the still",
    text: [
      "Use an image-generation model like ",
      {
        label: "GPT Images 2",
        href: "https://openai.com/index/introducing-chatgpt-images-2-0/",
      },
      ". You can also browse model hosts like ",
      {
        label: "Replicate",
        href: "https://replicate.com/",
      },
      " for other image models. Ask for a wide cinematic banner image with the main subject weighted toward the right so the left side has room for text.",
    ],
  },
  {
    title: "Animate the still",
    text: [
      "Send the still into an image-to-video model like ",
      {
        label: "Grok Imagine",
        href: "https://grok.com/imagine",
      },
      ". You can also compare other image-to-video models through places like ",
      {
        label: "Replicate",
        href: "https://replicate.com/",
      },
      ". Generate a short seamless clip, around three to five seconds, with subtle motion rather than a dramatic scene change.",
    ],
  },
  {
    title: "Export the assets",
    text: "Save the still as a JPG or WebP poster and the animation as a muted MP4. Put both files in public paths that the component can reference directly.",
  },
  {
    title: "Optimize for the web",
    text: "Resize the poster to the largest size the banner actually needs, strip metadata, and compress it. Re-encode the video to a small H.264 MP4, trim it to only a few seconds, and keep the file comfortably under a few megabytes.",
  },
  {
    title: "Create the banner frame",
    text: "Build a relative, overflow-hidden link or div with a stable rounded surface. Place the video absolutely inside it with inset-0, h-full, w-full, object-cover, muted, loop, playsInline, and the poster image as fallback.",
  },
  {
    title: "Add the overlay",
    text: "Add a gradient overlay div above the video. Use a CSS variable for the overlay color, then fade from a solid color on the text side to transparent over the image side.",
  },
  {
    title: "Add interaction depth",
    text: "Add a second hover and focus overlay if you want the text side to become stronger when the banner is interactive.",
  },
  {
    title: "Compose the content",
    text: "Place the content in a relative z-index layer above the overlays. Keep the title, balanced subtitle, CTA, and timer in a flex row so the text and timer stay aligned.",
  },
  {
    title: "Check responsiveness",
    text: "Use width constraints on the subtitle and banner container. Test desktop and mobile widths to make sure the timer and text do not overlap.",
  },
] as const satisfies readonly {
  title: string;
  text: string | readonly InstructionTextPart[];
}[];

export function instructionToPlainText(
  text: string | readonly InstructionTextPart[],
) {
  if (typeof text === "string") {
    return text;
  }

  return text
    .map((part) =>
      typeof part === "string" ? part : `${part.label} (${part.href})`,
    )
    .join("");
}

export const BANNER_DEMO_COPY = BANNER_DEMO_INSTRUCTIONS.map(
  (instruction, index) =>
    `${index + 1}. ${instruction.title}\n${instructionToPlainText(instruction.text)}`,
).join("\n");

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/videos/world-cup-2026.mp4`
- `assets/dqnamo/images/home/world-cup-2026.jpg`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
