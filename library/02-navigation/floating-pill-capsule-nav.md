# Floating Pill Capsule Navigation — Linear & Apple Minimalist Header

* **ID:** `nav-floating-pill-capsule`
* **Category:** `02-navigation`
* **Vibe:** `Refined Software Studio / Floating Minimalist Capsule`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero eyebrows, zero neon, high-density optical clarity, responsive snap collapse.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An ultra-refined, floating pill navigation bar inspired by top-tier modern software engineers, design studios, and product architects (Apple, Linear, Vercel). Positioned floating at the top of the viewport with gentle backdrop blur, housing a personal avatar, identity title, primary navigation links, language selector, and an authoritative high-contrast pill CTA button.

### 1.2 Layout & Geometry
- **Outer Shell:** Floating capsule (`bg-white/90 dark:bg-[#121216]/90 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm px-4 py-2 rounded-full`).
- **Avatar & Identity:** Left-aligned circular portrait cutout (with subtle online availability marker), followed by the personal wordmark and hairline divider.
- **Navigation Links:** Spaced horizontal links (`İşler`, `Süreç`, `Hizmetler`, `Hakkımda`) with smooth color transitions.
- **Language Selector:** Flag indicator with dropdown caret (`TR ▾`).
- **Action Button:** Solid pill CTA button (`bg-black dark:bg-white text-white dark:text-black rounded-full px-4 py-2 font-medium text-xs flex items-center gap-2 hover:opacity-90 transition-opacity`).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface FloatingPillNavProps {
  name?: string;
  avatarSrc?: string;
  isAvailable?: boolean;
  links?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function FloatingPillNav({
  name = "İbrahim H.",
  avatarSrc,
  isAvailable = true,
  links = [
    { label: "İşler", href: "#works" },
    { label: "Süreç", href: "#process" },
    { label: "Hizmetler", href: "#services" },
    { label: "Hakkımda", href: "#about" },
  ],
  ctaLabel = "İletişim",
  ctaHref = "#contact",
}: FloatingPillNavProps) {
  const [lang, setLang] = useState("TR");

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl">
      <nav className="w-full bg-white/90 dark:bg-[#121216]/90 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] px-3 sm:px-4 py-2 rounded-full flex items-center justify-between transition-all">
        {/* Left: Avatar + Identity */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-full shrink-0 border border-black/5 dark:border-white/10 flex items-center justify-center">
            {avatarSrc ? (
              <img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-semibold text-xs text-zinc-800 dark:text-zinc-200">
                {name.slice(0, 2).toUpperCase()}
              </span>
            )}
            {isAvailable && (
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-[#121216]"
                title="Çalışmaya Açık"
              />
            )}
          </div>
          <span className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 tracking-tight">
            {name}
          </span>
          <span className="hidden sm:inline-block w-px h-4 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Language + Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-2 py-1 transition-colors"
          >
            <span className="text-sm leading-none">🇹🇷</span>
            <span>{lang}</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
          </button>

          <a
            href={ctaHref}
            className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
```
