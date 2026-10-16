# Obsidian Ambient Canvas Hero — Deep Tech & Infrastructure

* **ID:** `hero-obsidian-ambient-canvas`
* **Category:** `01-hero-sections`
* **Vibe:** `Dark Luxury / Technical Monolith`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero pulsing dots, zero neon strobe, static restrained dispersion.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An authoritative dark-mode hero designed for high-frequency infrastructure, distributed consensus systems, or deep tech engineering platforms. Completely rejects the standard "AI SaaS template" (which consists of purple/cyan radial blur balls, pulsing green dots, and pill tags). Replaces it with a physically grounded obsidian canvas, restrained static optical dispersion, and precise telemetry data.

### 1.2 Layout & Geometry
- **Canvas:** Deep obsidian `#070709` with a subtle 1px grid coordinate system and double-bezel control modules.
- **Backdrop:** A single, static, ultra-subtle optical refraction gradient (`from-[#16161D] to-transparent`) without animated strobing or flashing.
- **Center Stage:** Asymmetric layout featuring an authoritative statement, a concrete throughput benchmark, and a direct deployment action.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags like "v2.0 Beta", "AI Powered", or "High Speed".
- **NO BLINKING / PULSE:** Strictly zero pulsing green indicator circles or flashing laser scans.
- **NO FLUFF COPY:** Technical metrics and a single clear sentence replace generic marketing copy.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React from "react";
import { ArrowUpRight, Terminal } from "lucide-react";

export function ObsidianAmbientCanvasHero() {
  return (
    <section className="relative min-h-screen w-full bg-[#070709] text-[#F4F4F6] flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-hidden border-b border-white/10 selection:bg-white selection:text-[#070709]">
      {/* Static Restrained Optical Backdrop (Restrained Optical Dispersion) */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[650px] h-[450px] bg-gradient-to-b from-[#1E1E26]/40 via-[#121217]/20 to-transparent blur-3xl pointer-events-none" 
      />

      {/* Top Header Telemetry */}
      <header className="relative z-10 w-full flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs text-[#71717A] uppercase tracking-widest">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="w-4 h-4 text-[#A1A1AA]" />
          <span className="font-semibold tracking-wider">NEXUS KERNEL</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>LATENCY: 140&micro;s P99</span>
          <span>CONSENSUS: BYZANTINE FAULT TOLERANT</span>
        </div>
        <div>SYS-ID: 0x884F</div>
      </header>

      {/* Center Hero Chamber */}
      <div className="relative z-10 my-auto py-16 max-w-5xl mx-auto w-full flex flex-col gap-10">
        <div className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
          Distributed Infrastructure &middot; Core v4
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.96]">
          SUB-MILLISECOND <br />
          <span className="font-serif italic font-normal text-[#A1A1AA]">Consensus</span> AT <br />
          GLOBAL SCALE.
        </h1>

        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed">
          Zero-overhead distributed state machine engineered for deterministic, high-throughput financial execution.
        </p>

        {/* Action & Benchmark Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
          <a
            href="#deploy"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#070709] px-7 py-4 text-xs font-mono uppercase tracking-widest hover:bg-[#E2DFD7] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            Provision Cluster
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="p-[7px] bg-[#141418] border border-white/10 rounded-[12px] inline-flex">
            <div className="bg-[#09090C] border border-white/10 rounded-[8px] px-4 py-2 font-mono text-xs text-[#A1A1AA] flex items-center gap-4">
              <span>BENCHMARK:</span>
              <span className="text-white font-semibold">1,240,000 OPS/SEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Grid */}
      <footer className="relative z-10 w-full border-t border-white/10 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider">
        <div>
          <span className="block text-[#52525B]">Architecture</span>
          Lock-Free Async Ring
        </div>
        <div>
          <span className="block text-[#52525B]">Deployment</span>
          Bare-Metal &middot; AWS Nitro &middot; Equinix
        </div>
        <div>
          <span className="block text-[#52525B]">Compliance</span>
          SOC 2 Type II Certified
        </div>
        <div className="sm:text-right">
          <span className="block text-[#52525B]">Availability</span>
          99.999% SLA Guaranteed
        </div>
      </footer>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill tags.
- [x] Zero pulsing lights, flashing neon dots, or rainbow animations.
- [x] Deep obsidian canvas with static, restrained physical refraction.
- [x] Concrete technical benchmark and single-sentence intent statement.
- [x] Production Next.js + Tailwind CSS with TypeScript.
