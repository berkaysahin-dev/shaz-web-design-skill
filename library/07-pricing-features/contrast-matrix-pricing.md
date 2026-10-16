# Contrast Matrix Pricing — Developer Platform & Infrastructure

* **ID:** `pricing-contrast-matrix`
* **Category:** `07-pricing-features`
* **Vibe:** `Swiss Utilitarian / Technical Monolith`
* **Primary Target:** Next.js (App Router), Tailwind CSS
* **Rule Compliance:** Zero badges, zero "Most Popular" pills, zero fluff copy, high contrast surface hierarchy.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An enterprise pricing and capability matrix for developer tools, cloud infrastructure, or API platforms. Rejects the standard SaaS cliché of slapping a colorful "MOST POPULAR" or "RECOMMENDED" pill on the middle tier. Instead, tier hierarchy is established strictly through surface inversion (an obsidian dark core amidst light stone trays), border weight contrast, and typographic clarity.

### 1.2 Layout & Geometry
- **Grid:** 3-column asymmetric layout with equal vertical alignment and crisp 1px division borders.
- **Tiers:** `Standard / Node` (Base), `Enterprise / Cluster` (Flagship with inverted contrast), `Dedicated / Custom` (Direct engagement).
- **Surface Contrast:** 
  - Tiers 1 & 3: Warm Stone Paper canvas (`#FFFFFF` core inside `#ECEAE3` bezel tray).
  - Tier 2 (Flagship): Inverted Deep Obsidian (`#09090B` core inside `#1C1C20` bezel tray with white typography).

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly forbidden to render "BEST CHOICE", "POPULAR", or status pills.
- **NO BLINKING / PULSE:** No glowing button borders or flashing neon discount indicators.
- **NO FLUFF COPY:** Plan descriptions are single-phrase technical scopes (e.g., *"Up to 500k compute ops/sec"*).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React from "react";
import { ArrowUpRight, Check } from "lucide-react";

interface PlanTier {
  id: string;
  name: string;
  index: string;
  price: string;
  cadence: string;
  scope: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isInverted?: boolean;
}

const tiers: PlanTier[] = [
  {
    id: "node",
    name: "Standard Node",
    index: "01",
    price: "$140",
    cadence: "per instance / mo",
    scope: "Dedicated single-tenant worker with sub-millisecond execution.",
    features: [
      "2 Dedicated vCPU · 8 GB ECC RAM",
      "10 Gbps Guaranteed Network Egress",
      "Automated Regional Failover",
      "Direct API Key Authentication",
      "99.95% Availability SLA",
    ],
    ctaLabel: "Deploy Node",
    ctaHref: "#deploy-node",
    isInverted: false,
  },
  {
    id: "cluster",
    name: "Enterprise Cluster",
    index: "02",
    price: "$680",
    cadence: "per cluster / mo",
    scope: "Multi-region synchronized cluster with zero-latency read replicas.",
    features: [
      "16 Dedicated vCPU · 64 GB ECC RAM",
      "Unlimited Egress · Global Anycast Edge",
      "Active-Active Multi-Region Mesh",
      "SOC 2 Type II & ISO 27001 Certified",
      "99.999% Fault-Tolerant SLA",
      "Dedicated Technical Account Engineer",
    ],
    ctaLabel: "Provision Cluster",
    ctaHref: "#provision-cluster",
    isInverted: true, // Flagship highlighted via dark contrast, NOT badges
  },
  {
    id: "dedicated",
    name: "Custom Topology",
    index: "03",
    price: "Bespoke",
    cadence: "annual contract",
    scope: "Bare-metal infrastructure integrated directly into private cloud VPC.",
    features: [
      "Custom Silicon & Hardware Acceleration",
      "Zero-Trust Private VPC Peering",
      "Custom Data Residency Compliance",
      "Air-Gapped Deployment Capable",
      "24/7/365 On-Call SRE Escalation",
    ],
    ctaLabel: "Initiate Review",
    ctaHref: "#custom-topology",
    isInverted: false,
  },
];

export function ContrastMatrixPricing() {
  return (
    <section className="w-full bg-[#F6F5F1] text-[#141413] py-24 px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        {/* Section Header */}
        <div className="w-full border-b border-[#E2DFD7] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#686762] block mb-2">
              Resource Allocation · Infrastructure Pricing
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#141413]">
              COMMITTED <br />
              <span className="font-serif italic font-normal text-[#686762]">Capacity</span> TIERS.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#686762] max-w-xs leading-relaxed">
            Deterministic compute pricing with zero surprise overage fees. Replicable on private bare-metal.
          </p>
        </div>

        {/* 3-Column Architectural Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-[7px] rounded-[16px] border flex flex-col transition-all duration-300 ${
                tier.isInverted
                  ? "bg-[#1C1C20] border-[#141413] shadow-md"
                  : "bg-[#ECEAE3] border-[#E2DFD7] shadow-sm"
              }`}
            >
              <div
                className={`flex-1 rounded-[11px] p-8 flex flex-col justify-between border ${
                  tier.isInverted
                    ? "bg-[#09090B] border-white/10 text-[#F4F4F6]"
                    : "bg-[#FFFFFF] border-[#E2DFD7] text-[#141413]"
                }`}
              >
                {/* Header Information */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b pb-4 border-current/10">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                      [{tier.index}]
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                      {tier.name}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                      {tier.price}
                    </div>
                    <span className="font-mono text-xs opacity-60">
                      {tier.cadence}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed opacity-75 min-h-[36px]">
                    {tier.scope}
                  </p>
                </div>

                {/* Feature Matrix */}
                <div className="my-8 pt-6 border-t border-current/10 flex flex-col gap-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-1">
                    Provisioned Specs:
                  </span>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-70" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action */}
                <a
                  href={tier.ctaHref}
                  className={`w-full py-3.5 px-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:outline-none ${
                    tier.isInverted
                      ? "bg-white text-[#141413] hover:bg-[#E2DFD7] focus-visible:ring-white"
                      : "bg-[#141413] text-[#F6F5F1] hover:bg-[#2A2A28] focus-visible:ring-[#141413]"
                  }`}
                >
                  {tier.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global SLA Guarantee Telemetry */}
        <div className="w-full border-t border-[#E2DFD7] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#686762] uppercase tracking-wider">
          <div>All tiers include sub-millisecond telemetry &middot; zero egress lock-in</div>
          <div>Custom Hardware Inquiries: arch@shazagency.com</div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or "MOST POPULAR" tags.
- [x] Differentiation achieved purely via surface tone inversion and border discipline.
- [x] Fluff-free, technical specification bullets.
- [x] Hardware double-bezel tray structure applied to all 3 cards.
- [x] Production Next.js + Tailwind CSS with TypeScript.
