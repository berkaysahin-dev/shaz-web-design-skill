# Asymmetric Architectural Split Hero — Industrial Design & Engineering

* **ID:** `hero-asymmetric-architectural-split`
* **Category:** `01-hero-sections`
* **Vibe:** `Swiss Utilitarian / Hardware Architecture`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero pills, zero pulsing dots, high negative space.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An authoritative, high-contrast hero section designed for industrial engineering firms, automotive design studios, or advanced materials consultancies. Replaces the generic "centered title + 2 buttons + floating pill badge" template with an uncompromising 7/5 asymmetric spatial split, architectural partition rules, and physical double-bezel framing.

### 1.2 Layout & Geometry
- **Grid:** 12-column layout with a 7-column primary typographic chamber and a 5-column architectural artifact container.
- **Surface Materiality:** Swiss warm paper `#F6F5F1` with crisp 1px `#E2DFD7` partition rules and double-bezel containment (`#ECEAE3` tray + `#FFFFFF` core).
- **Typographic System:** Display Sans (`Plus Jakarta Sans` 700) contrasted with precision italic serif (`Instrument Serif`) and monospaced telemetry (`JetBrains Mono`).

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags, "NEW", or status chips.
- **NO BLINKING / PULSE:** Strictly zero pulsing status lights or flashing neon dots.
- **NO FLUFF COPY:** Exactly one high-density sentence describing capability and material domain.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function AsymmetricArchitecturalSplitHero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-[#F6F5F1] text-[#141413] flex flex-col justify-between p-6 sm:p-10 lg:p-16 border-b border-[#E2DFD7] selection:bg-[#141413] selection:text-[#F6F5F1]">
      {/* Top Telemetry Header */}
      <div className="w-full border-b border-[#E2DFD7] pb-5 flex items-center justify-between font-mono text-xs text-[#686762] uppercase tracking-widest">
        <span>VONK &amp; PARTNERS · INDUSTRIAL DESIGN</span>
        <span className="hidden sm:inline">REF: ARCH-2026-X</span>
      </div>

      {/* Main 7/5 Asymmetrical Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto py-12">
        {/* Left Column (7 cols): Typographic Authority */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="font-mono text-xs uppercase tracking-widest text-[#94928B]">
            Structural Systems &middot; Monograph 04
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141413] leading-[0.94]">
            ENGINEERING <br />
            <span className="font-serif italic font-normal text-[#686762]">Physical</span> RIGOR <br />
            IN METALS.
          </h1>

          <p className="text-base sm:text-lg text-[#686762] max-w-lg leading-relaxed">
            High-tolerance kinetic mechanisms and monocoque metal architectures engineered for extreme environments.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-3 bg-[#141413] text-[#F6F5F1] px-6 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-[#2A2A28] transition-colors focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:outline-none"
            >
              Examine Assemblies
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="font-mono text-xs text-[#686762] uppercase tracking-wider">
              Tolerance: &plusmn;0.002mm ISO 2768
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Hardware Double-Bezel Artifact Container */}
        <div className="lg:col-span-5">
          <div className="p-[7px] bg-[#ECEAE3] border border-[#E2DFD7] rounded-[16px] shadow-sm">
            <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-[11px] p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#E2DFD7] pb-3 font-mono text-xs text-[#686762] uppercase tracking-wider">
                <span>Core Specimen 01</span>
                <span>Alloy 7075-T6</span>
              </div>

              {/* Minimal Architectural Specimen Graphic */}
              <div className="aspect-[4/3] w-full bg-[#141413] rounded-[6px] p-6 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="flex justify-between font-mono text-[10px] text-white/50 uppercase">
                  <span>Cross-Section</span>
                  <span>Scale 1:1</span>
                </div>

                <div className="my-auto flex items-center justify-center">
                  <div className="w-32 h-20 border-2 border-white/80 flex items-center justify-center relative">
                    <div className="w-20 h-10 border border-white/40" />
                    <div className="absolute -top-3 -right-3 font-mono text-[9px] text-[#A1A1AA]">
                      R2.5
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end font-mono text-[10px] text-white/60 uppercase">
                  <span>Tensile: 572 MPa</span>
                  <span>Mass: 418 g</span>
                </div>
              </div>

              {/* Technical Footnote */}
              <div className="flex items-center justify-between font-mono text-xs text-[#686762] pt-1 border-t border-[#E2DFD7]">
                <span>Surface Finish</span>
                <span className="text-[#141413] font-medium">Bead-Blasted Hardcoat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Directory */}
      <div className="w-full border-t border-[#E2DFD7] pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-[#686762] uppercase tracking-wider">
        <div>Zurich Studio</div>
        <div>Berlin Atelier</div>
        <div>Tokyo Gallery</div>
        <div className="sm:text-right text-[#141413]">Production Archive 2026</div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill capsules.
- [x] Zero pulsing lights, flashing neon dots, or continuous glow loops.
- [x] Asymmetric 7/5 spatial grid with hardware double-bezel framing.
- [x] Exact 1-sentence body copy; high information density.
- [x] Production Next.js + Tailwind CSS with TypeScript.
