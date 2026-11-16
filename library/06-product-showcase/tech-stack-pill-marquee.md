# Tech Stack Pill Marquee — Continuous Infrastructure Stream

* **ID:** `showcase-tech-stack-pill-marquee`
* **Category:** `06-product-showcase`
* **Vibe:** `Refined Software Studio / Modern Tech Pills Marquee`
* **Primary Target:** Next.js (App Router), Tailwind CSS
* **Rule Compliance:** Zero fake coordinates, zero neon halos, smooth dual-track continuous loop, bilateral edge feathering mask.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An ultra-clean, minimal technology stack ribbon designed for modern software engineers, SaaS developers, and digital product agencies. Instead of loud corporate sponsor logos, technologies are rendered as tactile, soft-bordered capsule chips with monochrome or subtle authentic brand icons. Paired with a direct, human statement headline ("Her gün açık olanlar." / "Technologies in daily production").

### 1.2 Layout & Geometry
- **Title Block:** Centered, bold, human headline without uppercase eyebrow kickers.
- **Marquee Track:** Infinite hardware-accelerated dual-track scroll belt with bilateral alpha mask (`mask-image: linear-gradient(...)`).
- **Capsule Chips:** Soft rounded chips (`bg-white dark:bg-[#16161C] rounded-full border border-black/5 dark:border-white/10 shadow-sm px-4 py-2 flex items-center gap-2.5 text-xs sm:text-sm font-medium`).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React from "react";

interface TechItem {
  name: string;
  icon?: string;
}

const DEFAULT_STACK: TechItem[] = [
  { name: "Flutter" },
  { name: "Dart" },
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Vite" },
  { name: "Tailwind CSS" },
  { name: "Figma" },
  { name: "PostgreSQL" },
  { name: "Redis" },
  { name: "Docker" },
  { name: "Nginx" },
  { name: "Linux" },
  { name: "Cloudflare" },
  { name: "GitHub" },
  { name: "Node.js" },
];

export function TechStackPillMarquee({
  title = "Her gün açık olanlar.",
  items = DEFAULT_STACK,
}: {
  title?: string;
  items?: TechItem[];
}) {
  return (
    <section className="py-20 sm:py-24 bg-zinc-50/50 dark:bg-[#0A0A0C] border-y border-black/5 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden py-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-4 sm:gap-6 whitespace-nowrap animate-marquee items-center">
          {[...items, ...items].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-white dark:bg-[#141418] rounded-full border border-black/5 dark:border-white/10 shadow-sm text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-black/20 dark:hover:border-white/25 transition-all select-none"
            >
              <span className="w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```
