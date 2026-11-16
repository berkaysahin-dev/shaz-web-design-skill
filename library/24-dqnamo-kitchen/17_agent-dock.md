# Agent Dock (Yapay Zeka Ajanı Kontrol Yuvası) — The Kitchen by dqnamo

> **Koleksiyon:** `The Kitchen by dqnamo (Physical & Tactile UI Archive)` · **Tür:** `Bileşen / Deney`  
> **Kategori:** `Seçiciler ve Grafikler` (`Pickers & Visuals`)  
> **Canlı Demo & Önizleme:** Canlı Etkileşim Mevcut · [dqnamo.com/kitchen](https://www.dqnamo.com/kitchen)  
> **Kaynak & Yazar:** John-Paul (`dqnamo` / `interface.london`)  
> **Teknoloji:** `React, TypeScript, Tailwind CSS, Motion, Phosphor Icons` · **Fizik:** `Dock expansion: spring stiffness: 380, damping: 30, voice waveform pulse: 1.2s infinite keyframes`  
> **Etiketler:** `AI Agent Dock, Floating Toolbar, Voice Assistant, Composer, Interactive Dock`

---

## 1. Mimari Genel Bakış ve Açıklama

### 1.1 Tasarım Felsefesi ve Dokunsal Deneyim
Sesli komut, sohbet girişi, metin yazarı ve çalışma durumu etkileşimlerine sahip kompakt yüzen yapay zeka ajan kontrol yuvası.

A compact agent dock with voice, chat, composer, and working-state interactions.

Bu bileşen, modern düz web arayüzlerinin ötesine geçerek kullanıcının fiziksel dünyadaki nesnelerle kurduğu dokunsal ilişkiyi (tactile affordance) dijital ekrana taşır. 

* **Fiziksel Derinlik ve Geri Bildirim:** `Dock expansion: spring stiffness: 380, damping: 30, voice waveform pulse: 1.2s infinite keyframes`
* **Donanım Çift Çerçeve Uyumu (Hardware Double-Bezel):** Dış tepsi (`.bezel-tray`) ve iç çekirdek (`.bezel-core`) mimarisine %100 uyumludur.
* **Durum Yönetimi:** Boşta (Idle), Üzerine Gelme (Hover), Basılma (Active/Pressed), İşleniyor (Working), Tamamlandı (Success) ve Geri Alma (Undo) durumlarını akıcı geçişlerle yönetir.

---

## 2. Resmi Üretim Promptu (AI Coding Agents İçin)

```markdown
Recreate the official "Agent Dock" component from The Kitchen by dqnamo.

Architectural Requirements:
- Collection: The Kitchen by dqnamo (Physical & Tactile UI)
- Title: Agent Dock (Yapay Zeka Ajanı Kontrol Yuvası)
- Category: Pickers & Visuals
- Core Philosophy: A compact agent dock with voice, chat, composer, and working-state interactions.
- Motion & Spring Physics: Dock expansion: spring stiffness: 380, damping: 30, voice waveform pulse: 1.2s infinite keyframes
- Visual Standard: Swiss Utilitarian & Hardware Double-Bezel discipline. Neutral stone canvas (#F6F5F1), high-precision borders, micro-texture overlay. Zero emoji, clean monochrome typography (Plus Jakarta Sans, Instrument Serif italic, JetBrains Mono for code/metrics).
- Interaction Requirements:
  * Precise pointer tracking and touch-friendly targets (minimum 44x44px).
  * 60 FPS hardware-accelerated transforms (translate3d, scale, rotate, filter).
  * Reduced motion fallback (prefers-reduced-motion: reduce) adhering to accessibility standards.
  * Robust state machines for transitions with zero layout shift (CLS: 0).
- Stack: React, TypeScript, Tailwind CSS, Motion, Phosphor Icons.
```

---

## 3. Üretim Kod Blokları (Production Code)

### 3.1 Ana Bileşen Kodu (`app/experiments/agent-dock/agent-dock-showcase.tsx`)
```tsx
"use client";

import {
  ChatIcon,
  MicrophoneIcon,
  PaperPlaneTiltIcon,
  SpinnerGapIcon,
  XIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { cn } from "@/helpers/classname-helper";

type DockMode = "idle" | "composing" | "working";

const dockTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
} as const;

const composerHeight = 120;

const buttonClassName =
  "flex h-9 items-center justify-center gap-1.5 rounded-[9px] px-1.5 py-1 font-medium text-grayscale-1 text-sm leading-none transition-[width,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-grayscale-11/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grayscale-7 disabled:cursor-not-allowed disabled:opacity-60 dark:text-grayscale-12 dark:hover:bg-grayscale-6";

const buttonLabelClassName = "flex min-w-0 items-center gap-2";

const shortcutKeyClassName =
  "flex h-6 min-w-6 shrink-0 items-center justify-center rounded-[6px] bg-grayscale-11/55 px-1.5 font-mono font-semibold text-xs text-grayscale-1 leading-none shadow-[inset_0_1px_rgba(255,255,255,0.18),inset_0_-1px_rgba(0,0,0,0.14)] dark:bg-grayscale-7 dark:text-grayscale-12";

const composerCloseClassName =
  "absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-[6px] text-grayscale-8 transition-colors hover:bg-grayscale-11/50 hover:text-grayscale-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grayscale-7 dark:text-grayscale-10 dark:hover:bg-grayscale-6 dark:hover:text-grayscale-12";

const agentAvatarUrl =
  "https://api.dicebear.com/10.x/initial-face/svg?seed=Zaraaaa&size=80";

function isTextInputTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(
      target.closest(
        "input, textarea, select, [contenteditable='true'], [contenteditable='']",
      ),
    )
  );
}

type AgentActionButtonProps = ComponentPropsWithoutRef<"button"> & {
  active?: boolean;
  icon: ReactNode;
  label: string;
  shortcut: string;
};

function AgentActionButton({
  active,
  className,
  icon,
  label,
  shortcut,
  type = "button",
  ...buttonProps
}: AgentActionButtonProps) {
  return (
    <button
      className={cn(
        buttonClassName,
        active &&
          "bg-grayscale-11/50 hover:bg-grayscale-10/50 dark:bg-grayscale-6 dark:hover:bg-grayscale-7",
        className,
      )}
      type={type}
      {...buttonProps}
    >
      <span className={buttonLabelClassName}>
        {icon}
        <span>{label}</span>
      </span>
      <kbd
        className={shortcutKeyClassName}
        aria-label={`Keyboard shortcut ${shortcut}`}
      >
        {shortcut}
      </kbd>
    </button>
  );
}

function AgentStatus({ mode }: { mode: DockMode }) {
  return (
    <div className="min-w-0 overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        {mode === "working" ? (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="flex min-w-0 items-center gap-1.5 text-grayscale-8 text-xs leading-none dark:text-grayscale-10"
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key="working"
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <SpinnerGapIcon
              aria-hidden="true"
              className="size-3.5 shrink-0 animate-spin text-grayscale-1 dark:text-grayscale-12"
              weight="bold"
            />
            <Shimmer
              as="span"
              className="truncate [--color-background:var(--color-grayscale-1)] [--color-muted-foreground:var(--color-grayscale-8)] dark:[--color-background:var(--color-grayscale-12)] dark:[--color-muted-foreground:var(--color-grayscale-10)]"
            >
              doing stuff...
            </Shimmer>
          </motion.p>
        ) : (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="truncate text-grayscale-8 text-xs leading-none dark:text-grayscale-10"
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key="idle"
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            Your hyperaide
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AgentDockShowcase() {
  const [mode, setMode] = useState<DockMode>("idle");
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (mode === "composing") {
      textareaRef.current?.focus();
    }
  }, [mode]);

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if (
        event.key.toLowerCase() !== "c" ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        isTextInputTarget(event.target)
      ) {
        return;
      }

      event.preventDefault();
      setMode("composing");
    }

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  function openComposer() {
    setMode("composing");
  }

  function sendMessage() {
    setMessage("");
    setMode("working");
  }

  function closeComposer() {
    setMode("idle");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "composing") {
      sendMessage();
      return;
    }

    openComposer();
  }

  function handleTextareaKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();
    sendMessage();
  }

  return (
    <form className="mb-32 w-full max-w-md" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col-reverse overflow-hidden rounded-[16px] border border-grayscale-12 bg-grayscale-12 p-2 text-grayscale-2 shadow-[0_12px_36px_rgba(0,0,0,0.14)] dark:border-grayscale-4 dark:bg-grayscale-4 dark:text-grayscale-12 dark:shadow-none">
        <div className="flex items-center gap-3">
          <Image
            alt=""
            aria-hidden="true"
            className="size-9 shrink-0 rounded-[12px]"
            height={36}
            src={agentAvatarUrl}
            unoptimized
            width={36}
          />

          <div className="flex h-full min-w-0 flex-1 flex-col justify-center gap-1 p-0 leading-none">
            <p className="truncate font-medium text-sm leading-none">Zara</p>
            <AgentStatus mode={mode} />
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <AgentActionButton
              icon={
                <MicrophoneIcon
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  weight="bold"
                />
              }
              label="Voice"
              shortcut="V"
            />
            <AgentActionButton
              active={mode === "composing"}
              className={cn(
                "overflow-hidden",
                mode === "composing" ? "w-[6.25rem]" : "w-[6.0625rem]",
              )}
              icon={
                mode === "composing" ? (
                  <PaperPlaneTiltIcon
                    aria-hidden="true"
                    className="size-4 shrink-0"
                    weight="fill"
                  />
                ) : (
                  <ChatIcon
                    aria-hidden="true"
                    className="size-4 shrink-0"
                    weight="bold"
                  />
                )
              }
              label={mode === "composing" ? "Send" : "Chat"}
              shortcut="C"
              type="submit"
            />
          </div>
        </div>

        <motion.div
          animate={{
            height: mode === "composing" ? composerHeight : 0,
            opacity: mode === "composing" ? 1 : 0,
          }}
          aria-hidden={mode !== "composing"}
          className="overflow-hidden"
          initial={false}
          transition={shouldReduceMotion ? { duration: 0 } : dockTransition}
        >
          <div className="relative mb-2">
            <button
              aria-label="Close composer"
              className={composerCloseClassName}
              disabled={mode !== "composing"}
              onClick={closeComposer}
              tabIndex={mode === "composing" ? 0 : -1}
              type="button"
            >
              <XIcon aria-hidden="true" className="size-3.5" weight="bold" />
            </button>
            <textarea
              aria-label="Message agent"
              className="h-28 w-full resize-none px-2 py-2 pr-9 text-grayscale-2 text-sm leading-6 outline-none transition-colors placeholder:text-grayscale-8 focus:border-grayscale-7 disabled:pointer-events-none dark:text-grayscale-12 dark:placeholder:text-grayscale-10 dark:focus:border-grayscale-8"
              disabled={mode !== "composing"}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Type something here..."
              ref={textareaRef}
              tabIndex={mode === "composing" ? 0 : -1}
              value={message}
            />
          </div>
        </motion.div>
      </div>
    </form>
  );
}

```

### 3.2 Vitrin ve Kullanım Kodu (`app/experiments/agent-dock/page.tsx`)
```tsx
import type { Metadata } from "next";
import { ExperimentPage } from "@/app/experiments/_components/ExperimentPage";
import { SourcePanel } from "@/app/experiments/_components/SourcePanel";
import { buildSourceTabs } from "@/app/experiments/_lib/source";
import { AgentDockShowcase } from "./agent-dock-showcase";
import { componentSource, usageSource } from "./copy-content";

export const metadata: Metadata = {
  title: "Agent Dock | dqnamo",
  description:
    "A compact agent dock with voice, chat, composer, and working-state interactions.",
};

export default async function AgentDockPage() {
  const tabs = await buildSourceTabs([
    {
      label: "AgentDock.tsx",
      source: componentSource,
      value: "component",
    },
    { label: "Usage.tsx", source: usageSource, value: "usage" },
  ]);

  return (
    <ExperimentPage
      description="A compact control surface for switching between voice, chat, and lightweight agent states without pulling focus from the current screen."
      slug="agent-dock"
      title="Agent Dock"
    >
      <div className="flex min-h-[28rem] w-full items-end justify-center rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-transparent dark:bg-grayscale-2 dark:shadow-none">
        <AgentDockShowcase />
      </div>
      <div className="w-full overflow-hidden rounded-[13px] border border-grayscale-3 bg-grayscale-1 small-shadow dark:border-grayscale-4 dark:bg-grayscale-3 dark:shadow-none">
        <SourcePanel tabs={tabs} />
      </div>
    </ExperimentPage>
  );
}

```

### 3.3 Yardımcı ve Kullanım Kaynakları (`copy-content.ts`)
```typescript
export const componentSource = `"use client";

import {
  ChatIcon,
  MicrophoneIcon,
  PaperPlaneTiltIcon,
  XIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useRef,
  useState,
} from "react";

type AgentDockMode = "idle" | "composing" | "working";

type AgentDockProps = {
  agentName: string;
  avatarSrc: string;
  className?: string;
  idleStatus?: string;
  workingStatus?: string;
  onMessageSubmit?: (message: string) => void | Promise<void>;
};

const dockTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function AgentDock({
  agentName,
  avatarSrc,
  className,
  idleStatus = "Ready",
  workingStatus = "Working...",
  onMessageSubmit,
}: AgentDockProps) {
  const [mode, setMode] = useState<AgentDockMode>("idle");
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const shouldReduceMotion = useReducedMotion();

  function openComposer() {
    setMode("composing");
    window.requestAnimationFrame(() => textareaRef.current?.focus());
  }

  async function submitMessage() {
    const nextMessage = message.trim();

    if (!nextMessage) {
      openComposer();
      return;
    }

    setMessage("");
    setMode("working");
    await onMessageSubmit?.(nextMessage);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "composing") {
      void submitMessage();
      return;
    }

    openComposer();
  }

  function handleTextareaKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();
    void submitMessage();
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="flex w-full flex-col-reverse overflow-hidden rounded-2xl bg-neutral-950 p-2 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <Image
            alt=""
            aria-hidden="true"
            className="size-9 shrink-0 rounded-xl"
            height={36}
            src={avatarSrc}
            unoptimized
            width={36}
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium leading-none">
              {agentName}
            </p>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 truncate text-xs text-neutral-400"
                exit={{ opacity: 0, y: -6 }}
                initial={{ opacity: 0, y: 6 }}
                key={mode}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                {mode === "working" ? workingStatus : idleStatus}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <DockButton
              icon={<MicrophoneIcon weight="bold" />}
              label="Voice"
              shortcut="V"
            />
            <DockButton
              icon={
                mode === "composing" ? (
                  <PaperPlaneTiltIcon weight="fill" />
                ) : (
                  <ChatIcon weight="bold" />
                )
              }
              label={mode === "composing" ? "Send" : "Chat"}
              shortcut="C"
              type="submit"
            />
          </div>
        </div>

        <motion.div
          animate={{
            height: mode === "composing" ? 120 : 0,
            opacity: mode === "composing" ? 1 : 0,
          }}
          aria-hidden={mode !== "composing"}
          className="overflow-hidden"
          initial={false}
          transition={shouldReduceMotion ? { duration: 0 } : dockTransition}
        >
          <div className="relative mb-2">
            <button
              aria-label="Close composer"
              className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-md text-neutral-400 hover:bg-white/10 hover:text-white"
              onClick={() => setMode("idle")}
              type="button"
            >
              <XIcon className="size-3.5" weight="bold" />
            </button>
            <textarea
              aria-label="Message agent"
              className="h-28 w-full resize-none bg-transparent px-2 py-2 pr-9 text-sm leading-6 outline-none placeholder:text-neutral-500"
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Type something here..."
              ref={textareaRef}
              value={message}
            />
          </div>
        </motion.div>
      </div>
    </form>
  );
}

function DockButton({
  icon,
  label,
  shortcut,
  type = "button",
}: {
  icon: ReactNode;
  label: string;
  shortcut: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      className="flex h-9 items-center gap-1.5 rounded-lg px-1.5 text-sm font-medium hover:bg-white/10"
      type={type}
    >
      <span className="size-4">{icon}</span>
      <span>{label}</span>
      <kbd className="flex size-6 items-center justify-center rounded-md bg-white/10 font-mono text-xs">
        {shortcut}
      </kbd>
    </button>
  );
}
`;

export const usageSource = `import { AgentDock } from "./agent-dock";

const avatarSrc =
  "https://api.dicebear.com/10.x/initial-face/svg?seed=Zaraaaa&size=80";

export function AgentDockExample() {
  return (
    <AgentDock
      agentName="Zara"
      avatarSrc={avatarSrc}
      className="w-full max-w-md"
      idleStatus="Your hyperaide"
      onMessageSubmit={async (message) => {
        await sendMessageToAgent(message);
      }}
      workingStatus="doing stuff..."
    />
  );
}
`;

```

---

## 4. İlgili Medya ve Varlıklar
Bu bileşenin kullandığı görsel, video veya ses dosyaları kütüphanede yerel olarak saklanmaktadır:
- `assets/dqnamo/flower.png`

---
*SHAZ AGENCY WEB DESIGN ARŞİVİ — THE KITCHEN BY DQNAMO KOLEKSİYONU*
