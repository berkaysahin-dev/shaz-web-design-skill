"use client";

import React from "react";
import { MinimalistDoubleBezelNav } from "../library/02-navigation/minimalist-double-bezel-nav";
import { ObsidianAmbientCanvasHero } from "../library/01-hero-sections/obsidian-ambient-canvas-hero";
import { SubPixelCounterReveal } from "../library/04-motion/sub-pixel-counter-reveal";
import { ContrastMatrixPricing } from "../library/07-pricing-features/contrast-matrix-pricing";
import { EditorialSplitFooter } from "../library/09-forms-footers/editorial-split-footer";

/**
 * TEST BRIEF 2: AEVUM HIGH-FREQUENCY INFRASTRUCTURE
 * Sector: Enterprise Cloud Infrastructure & Distributed Consensus Engine
 * Objectives:
 * - Obsidian Dark Core, restrained static optical backdrop
 * - Zero promotional pricing badges or pill tags
 * - Zero pulsing green lights or rapid laser scans
 * - Concrete microsecond benchmarks (140µs P99, 1.24M ops/sec)
 */
export default function AevumInfrastructureTestPage() {
  return (
    <main className="w-full min-h-screen bg-[#070709] text-[#F4F4F6] antialiased selection:bg-white selection:text-[#070709]">
      {/* 1. System Navigation */}
      <MinimalistDoubleBezelNav />

      {/* 2. Obsidian Ambient Hero */}
      <ObsidianAmbientCanvasHero />

      {/* 3. Sub-Pixel Telemetry Counter Matrix */}
      <SubPixelCounterReveal />

      {/* 4. Contrast Matrix Pricing */}
      <ContrastMatrixPricing />

      {/* 5. Direct Dispatch Footer */}
      <EditorialSplitFooter />
    </main>
  );
}
