"use client";

import React from "react";
import { MinimalistDoubleBezelNav } from "../library/02-navigation/minimalist-double-bezel-nav";
import { CinematicEditorialHero } from "../library/01-hero-sections/cinematic-editorial-hero";
import { EditorialSerifStatementGrid } from "../library/03-typography/editorial-serif-statement-grid";
import { StickyMonographStack } from "../library/04-motion/sticky-monograph-stack";
import { EditorialSplitFooter } from "../library/09-forms-footers/editorial-split-footer";

/**
 * TEST BRIEF 1: STUDIO VALS ARCHITECTURE
 * Sector: Luxury Architectural & Structural Engineering Studio
 * Objectives:
 * - High negative space, Swiss Utilitarian Double-Bezel envelope
 * - Zero badges or pill tags
 * - Zero blinking lights, glowing radar pings, or neon halos
 * - High-density 1-sentence statements paired with structural metrics
 */
export default function StudioValsArchitectureTestPage() {
  return (
    <main className="w-full min-h-screen bg-[#F6F5F1] text-[#141413] antialiased selection:bg-[#141413] selection:text-[#F6F5F1]">
      {/* 1. Architectural Header */}
      <MinimalistDoubleBezelNav />

      {/* 2. Hero Section */}
      <CinematicEditorialHero />

      {/* 3. Theoretical Manifesto Grid */}
      <EditorialSerifStatementGrid />

      {/* 4. Scroll-Calibrated Monograph Cascade */}
      <StickyMonographStack />

      {/* 5. Editorial Direct Inquiry Footer */}
      <EditorialSplitFooter />
    </main>
  );
}
