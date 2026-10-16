"use client";

import React from "react";
import { MinimalistDoubleBezelNav } from "../library/02-navigation/minimalist-double-bezel-nav";
import { KineticSpecShowcase } from "../library/06-product-showcase/kinetic-spec-showcase";
import { MonolithicLuxuryProductCard } from "../library/08-ecommerce/monolithic-luxury-product-card";
import { DoubleBezelFilterDrawer } from "../library/08-ecommerce/double-bezel-filter-drawer";
import { MinimalSlidingCartDrawer } from "../library/08-ecommerce/minimal-sliding-cart-drawer";
import { EditorialSplitFooter } from "../library/09-forms-footers/editorial-split-footer";

/**
 * TEST BRIEF 3: KUROGANE BESPOKE ATELIER
 * Sector: Luxury Hardware, Bespoke Furniture & High-End Transducers
 * Objectives:
 * - Limited edition cataloging with verified provenance
 * - Zero discount badges, zero coupon pills, zero star ratings
 * - Zero blinking stock alerts or glowing halos
 * - Faceted material taxonomy and slide-out acquisition manifest
 */
export default function KuroganeLuxuryEcommerceTestPage() {
  return (
    <main className="w-full min-h-screen bg-[#F6F5F1] text-[#141413] antialiased selection:bg-[#141413] selection:text-[#F6F5F1]">
      {/* 1. Header */}
      <MinimalistDoubleBezelNav />

      {/* 2. Interactive Product Spec Showcase */}
      <KineticSpecShowcase />

      {/* 3. Faceted Material Taxonomy Filter */}
      <DoubleBezelFilterDrawer />

      {/* 4. Luxury Monolithic Product Grid */}
      <MonolithicLuxuryProductCard />

      {/* 5. Minimal Slide-Out Order Manifest Cart */}
      <div className="max-w-6xl mx-auto flex justify-end px-6">
        <MinimalSlidingCartDrawer />
      </div>

      {/* 6. Architectural Footer */}
      <EditorialSplitFooter />
    </main>
  );
}
