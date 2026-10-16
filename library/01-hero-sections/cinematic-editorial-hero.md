# Cinematic Editorial Hero — Architecture & Design Studio

* **ID:** `hero-cinematic-editorial`
* **Category:** `01-hero-sections`
* **Vibe:** `Swiss Utilitarian / High-End Luxury`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero pulsing dots, zero fluff text, 100% original Shaz Agency standard.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An authoritative, cinematic hero section for a contemporary architecture and structural engineering studio ("KOLLEKTIV 09"). The layout rejects decorative marketing fluff in favor of stark typographic scale, physical double-bezel framing, and a monolithic ambient visual canvas.

### 1.2 Layout & Geometry
- **Composition:** 100vh viewport container with an asymmetrical 8-column / 4-column composition.
- **Left Column (8 cols):** Oversized editorial display headline spanning 3 lines, accompanied by a precise 1-sentence manifesto statement and architectural coordinates telemetry.
- **Right Column (4 cols):** An interactive double-bezel project preview window (`.bezel-tray` + `.bezel-core`) featuring a monolithic architectural structure with smooth cursor parallax tilt.
- **Bottom Telemetry Band:** High-density, micro-monospaced technical metadata (Coordinates, Year of Foundation, Active Commissions count).

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** No "Award Winning", "New Work", or status pill capsules floating over the header.
- **NO BLINKING / PULSE:** No pulsing neon dots next to status lines or live clocks.
- **NO FLUFF COPY:** Body text is strictly one sentence: *"Monolithic structural design and precision material systems engineered for enduring permanence."*

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CinematicEditorialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 24, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#F6F5F1] text-[#141413] flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-hidden selection:bg-[#141413] selection:text-[#F6F5F1]"
    >
      {/* Top Header Row */}
      <header className="w-full flex items-center justify-between border-b border-[#E2DFD7] pb-6">
        <div className="font-mono text-xs tracking-widest uppercase text-[#686762]">
          KOLLEKTIV 09 — ARCHITECTURAL STUDIO
        </div>
        <div className="font-mono text-xs text-[#686762] hidden sm:block">
          FOUNDED 2018 · BERLIN
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end my-auto py-12">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] text-[#141413]">
            STRUCTURAL <br />
            <span className="font-serif italic font-normal text-[#686762]">Permanence</span> <br />
            &amp; MATERIAL.
          </h1>

          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-[#686762] leading-relaxed">
              Monolithic structural design and precision material systems engineered for enduring permanence.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="#commissions"
              className="inline-flex items-center gap-3 bg-[#141413] text-[#F6F5F1] px-6 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#2A2A28] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#141413] focus-visible:outline-none"
            >
              Selected Works (2018–2026)
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="font-mono text-xs text-[#94928B] uppercase tracking-wider">
              Index: 42 Buildings Completed
            </span>
          </div>
        </div>

        {/* Right Column: Hardware Double-Bezel Frame */}
        <div className="lg:col-span-4 perspective-[1000px]">
          <motion.div
            style={{ rotateX, rotateY }}
            className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[16px] shadow-sm"
          >
            <div className="relative bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] p-6 flex flex-col gap-4 overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#141413]">
                  Fig. 01 — Monolith V
                </span>
                <span className="font-mono text-[11px] text-[#94928B]">
                  Zurich, CH
                </span>
              </div>

              {/* Minimal Architectural Visual Canvas */}
              <div className="relative aspect-[4/5] w-full bg-[#141413] rounded-[6px] overflow-hidden flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2E] to-[#0A0A0C] opacity-90" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-16 h-28 border border-white/20 relative flex items-center justify-center">
                    <div className="w-8 h-14 border border-white/40" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] pt-4">
                    Titanium &amp; Exposed Basalt
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[10px] text-[#686762] uppercase">
                  Area: 4,850 m²
                </span>
                <span className="font-mono text-[10px] text-[#141413] font-medium uppercase">
                  Commission 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <footer className="w-full border-t border-[#E2DFD7] pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px] text-[#686762] uppercase tracking-widest">
        <div>
          <span className="block text-[#94928B]">Typology</span>
          Civic &amp; Private
        </div>
        <div>
          <span className="block text-[#94928B]">Disciplines</span>
          Concrete &middot; Glass &middot; Steel
        </div>
        <div>
          <span className="block text-[#94928B]">Status</span>
          Open for Inquiries
        </div>
        <div className="sm:text-right">
          <span className="block text-[#94928B]">Edition</span>
          Vol. IX / 2026
        </div>
      </footer>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or pill containers rendered.
- [x] Zero blinking lights, glowing neon loops, or pulses.
- [x] Headline carries primary impact; body text is exactly one sentence.
- [x] Hardware Double-Bezel frame geometry intact (`.bezel-tray` 7px / 16px radius, `.bezel-core` 11px radius).
- [x] Next.js App Router + TypeScript + Tailwind CSS production ready.
