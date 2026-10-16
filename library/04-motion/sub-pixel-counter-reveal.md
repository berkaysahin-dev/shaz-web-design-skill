# Sub-Pixel Metric Reveal — Structural Audit & Telemetry Odometer

* **ID:** `motion-sub-pixel-counter-reveal`
* **Category:** `04-motion`
* **Vibe:** `Technical Minimal / Hardware Telemetry`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Framer Motion
* **Rule Compliance:** Zero badges, zero neon glows, zero pulsing dots, mechanical odometer motion.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
A high-precision performance metrics section designed for scientific instrumentation, cloud infrastructure audits, or civil engineering certifications. Replaces standard bouncing counters and glowing neon metric pills with a mechanical odometer-style roll-up, tabular grid partitions, and verified ISO audit references.

### 1.2 Layout & Geometry
- **Composition:** 4-column balanced telemetry grid enclosed in an architectural double-bezel tray.
- **Counter Motion:** Damped spring animation simulating mechanical roll-over counters (`stiffness: 240, damping: 26`).
- **Surface Materiality:** Obsidian Dark Core (`#09090B`) housed inside a `#16161A` tray with 1px hairline dividers.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Top Rated" pill chips.
- **NO NEON / BLINK / PULSE:** Zero neon glow borders, zero flashing green indicator lights.
- **NO FLUFF COPY:** Metrics represent hard mathematical quantities (uptime, latency, stress limit, throughput).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface MetricItem {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  benchmark: string;
  tolerance: string;
}

const metrics: MetricItem[] = [
  {
    id: "latency",
    label: "P99 Consensus Latency",
    targetValue: 140,
    suffix: "µs",
    decimals: 0,
    benchmark: "Global Fiber Backplane",
    tolerance: "±1.5µs Variance",
  },
  {
    id: "throughput",
    label: "Deterministic Operations",
    targetValue: 1.24,
    suffix: "M/s",
    decimals: 2,
    benchmark: "Lock-Free Ring Buffer",
    tolerance: "Zero Queue Drops",
  },
  {
    id: "availability",
    label: "Continuous Runtime",
    targetValue: 99.999,
    suffix: "%",
    decimals: 3,
    benchmark: "Multi-Region Byzantine Mesh",
    tolerance: "Certified ISO 27001",
  },
  {
    id: "tensile",
    label: "Structural Elastic Modulus",
    targetValue: 210,
    suffix: "GPa",
    decimals: 0,
    benchmark: "Cryogenic Basalt Core",
    tolerance: "DIN EN 10025-2",
  },
];

function OdometerCounter({ item }: { item: MetricItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    stiffness: 180,
    damping: 24,
    mass: 0.9,
  });

  const [displayValue, setDisplayValue] = React.useState("0");

  useEffect(() => {
    if (isInView) {
      motionVal.set(item.targetValue);
    }
  }, [isInView, item.targetValue, motionVal]);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (latest) => {
      setDisplayValue(latest.toFixed(item.decimals ?? 0));
    });
    return () => unsubscribe();
  }, [springVal, item.decimals]);

  return (
    <div
      ref={ref}
      className="p-8 sm:p-10 flex flex-col justify-between gap-6 bg-[#0D0D11] border border-white/10"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider">
          {item.label}
        </span>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono flex items-baseline">
          {item.prefix && <span>{item.prefix}</span>}
          <span>{displayValue}</span>
          <span className="text-2xl sm:text-3xl font-normal text-[#A1A1AA] ml-1">
            {item.suffix}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-col gap-1 font-mono text-[11px] text-[#A1A1AA]">
        <div className="text-white font-medium">{item.benchmark}</div>
        <div className="text-[#71717A]">{item.tolerance}</div>
      </div>
    </div>
  );
}

export function SubPixelCounterReveal() {
  return (
    <section className="w-full bg-[#09090B] text-[#F4F4F6] py-24 px-6 sm:px-12 lg:px-16 border-b border-white/10 selection:bg-white selection:text-[#09090B]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header Telemetry */}
        <div className="w-full border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-widest">
          <div>TELEMETRY AUDIT · SPECIFICATION MATRIX</div>
          <div className="hidden sm:inline">CYCLE COUNT 2026</div>
        </div>

        {/* Double-Bezel Grid Container */}
        <div className="p-[7px] bg-[#16161A] border border-white/10 rounded-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 rounded-[11px] overflow-hidden">
            {metrics.map((metric) => (
              <OdometerCounter key={metric.id} item={metric} />
            ))}
          </div>
        </div>

        {/* Footer Audit Verification */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider pt-2">
          <div>Independently Audited &middot; Zero Synthetic Interpolation</div>
          <div>Cryptographic Attestation Hash: 0x99B3...F2A0</div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill containers.
- [x] Zero neon colors, glowing borders, or pulsing lights.
- [x] High-precision mechanical odometer spring physics.
- [x] Double-bezel hardware container enclosing the 4-cell metric grid.
- [x] Production Next.js + Tailwind CSS with TypeScript.
