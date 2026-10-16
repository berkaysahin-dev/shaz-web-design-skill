# Financial Analytics Monolith — High-Density Trading & Portfolio Matrix

> **Category:** `11-dashboards-data-viz`  
> **Theme:** `Financial Telemetry & Asset Capitalization`  
> **Tech Stack:** `Next.js, Tailwind CSS, Recharts, Lucide React`  
> **Design Philosophy:** `Swiss Utilitarian & Hardware Double-Bezel`  

---

## 1. Architectural Overview & Specification

A high-density financial analytics dashboard designed for institutional capital tracking, portfolio liquidation metrics, and real-time asset telemetry.

### Core Architecture:
- **Surface Geometry:** Double-bezel hardware trays housing high-contrast telemetry cores.
- **Palette:** Deep Obsidian (`#070709`), Tray Basalt (`#121318`), Satin Titanium (`#A1A1AA`), Matte Gold Accent (`#C5A880`), and Optical Slate (`#64748B`). Zero tacky neon green or electric cyan glows.
- **Data Visualization:** Stepped area charts and volume histograms with custom SVG tooltips and clean gridlines (`stroke="rgba(255,255,255,0.08)"`).
- **Typography:** High-contrast Grotesk numerals paired with monospace micro-telemetry. Zero emoji icons.

---

## 2. Production Specification Prompt

```markdown
Build a high-density financial analytics dashboard component named "FinancialAnalyticsMonolith".
Requirements:
1. Framework: Next.js (App Router, Client Component with "use client").
2. Styling: Tailwind CSS with Hardware Double-Bezel containers (.bezel-tray housing .bezel-core).
3. Data Visualization: Render an interactive portfolio performance chart (using Recharts AreaChart or inline SVG path) spanning 7 distinct timeline points with volume histogram below.
4. Metric KPI Cards: 3 double-bezel summary cards:
   - Total Capitalization: $42.8M (with +1.8% 24h stability readout)
   - Liquidity Depth: 99.4% Purity
   - P99 Execution Latency: 140 microseconds
5. Strict Anti-Patterns:
   - ZERO pill badges (no "HOT", "NEW", or rounded capsule tags).
   - ZERO blinking dots or neon strobe glows.
   - ZERO emojis anywhere (use Lucide React ArrowUpRight, TrendingUp, Layers, Activity).
   - ZERO eyebrow kicker labels above titles.
```

---

## 3. Production Component Code (Next.js + Tailwind + Lucide)

```tsx
"use client";

import React, { useState } from "react";
import { ArrowUpRight, Activity, Layers, ShieldCheck, RefreshCw } from "lucide-react";

interface TelemetryPoint {
  time: string;
  equity: number;
  volume: number;
}

const PERFORMANCE_DATA: TelemetryPoint[] = [
  { time: "08:00", equity: 41.2, volume: 120 },
  { time: "10:00", equity: 41.8, volume: 240 },
  { time: "12:00", equity: 42.1, volume: 180 },
  { time: "14:00", equity: 41.9, volume: 310 },
  { time: "16:00", equity: 42.5, volume: 290 },
  { time: "18:00", equity: 42.4, volume: 150 },
  { time: "20:00", equity: 42.8, volume: 210 },
];

export function FinancialAnalyticsMonolith() {
  const [activeRange, setActiveRange] = useState<"24H" | "7D" | "30D" | "1Y">("24H");

  return (
    <section className="w-full bg-[#070709] text-[#F4F4F6] py-16 px-6 sm:px-12 lg:px-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Control Bar */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              INSTITUTIONAL ASSET TELEMETRY
            </h2>
            <p className="font-mono text-xs text-[#A1A1AA] mt-1">
              Deterministic portfolio valuation and multi-venue liquidity index.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 bg-[#121318] border border-white/10 rounded-[8px] font-mono text-xs">
              {(["24H", "7D", "30D", "1Y"] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setActiveRange(range)}
                  className={`px-3 py-1.5 transition-colors ${
                    activeRange === range
                      ? "bg-[#1C1D24] text-white font-medium"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="p-2.5 bg-[#121318] border border-white/10 rounded-[8px] text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Refresh telemetry"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* 3 KPI Telemetry Trays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-[7px] bg-[#121318] border border-white/10 rounded-[16px]">
            <div className="p-6 rounded-[11px] bg-[#0A0B0F] border border-white/10 flex flex-col justify-between gap-4 h-full">
              <div className="flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
                <span>Total Capitalization</span>
                <Activity className="w-4 h-4 text-[#C5A880]" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                  $42.84M
                </span>
                <span className="font-mono text-xs text-[#C5A880] font-medium">
                  +1.82% 24h
                </span>
              </div>
            </div>
          </div>

          <div className="p-[7px] bg-[#121318] border border-white/10 rounded-[16px]">
            <div className="p-6 rounded-[11px] bg-[#0A0B0F] border border-white/10 flex flex-col justify-between gap-4 h-full">
              <div className="flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
                <span>Liquidity Depth</span>
                <Layers className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                  99.41%
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  Spread: 0.04 bp
                </span>
              </div>
            </div>
          </div>

          <div className="p-[7px] bg-[#121318] border border-white/10 rounded-[16px]">
            <div className="p-6 rounded-[11px] bg-[#0A0B0F] border border-white/10 flex flex-col justify-between gap-4 h-full">
              <div className="flex items-center justify-between font-mono text-xs text-[#A1A1AA]">
                <span>P99 Execution Latency</span>
                <ShieldCheck className="w-4 h-4 text-[#A1A1AA]" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                  140 &micro;s
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  Zero Rejections
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Chart Stage (Double-Bezel Enclosure) */}
        <div className="p-[7px] bg-[#121318] border border-white/10 rounded-[16px]">
          <div className="p-8 rounded-[11px] bg-[#0A0B0F] border border-white/10 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                Equity Curve &amp; Volume Distribution
              </span>
              <span className="font-mono text-xs text-[#C5A880]">
                High-Frequency Feed Active
              </span>
            </div>

            {/* Custom SVG Precision Area & Bar Stage */}
            <div className="relative aspect-[21/9] w-full flex flex-col justify-between pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 700 240" fill="none">
                {/* Horizontal Gridlines */}
                <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="160" x2="700" y2="160" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="220" x2="700" y2="220" stroke="rgba(255,255,255,0.12)" />

                {/* Stepped Area Gradient Fill */}
                <defs>
                  <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C5A880" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C5A880" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Area Polygon */}
                <polygon
                  points="0,180 100,140 200,120 300,135 400,90 500,100 600,60 700,50 700,220 0,220"
                  fill="url(#equityGrad)"
                />

                {/* Primary Metric Stroke Line */}
                <polyline
                  points="0,180 100,140 200,120 300,135 400,90 500,100 600,60 700,50"
                  stroke="#C5A880"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                <circle cx="700" cy="50" r="4.5" fill="#C5A880" stroke="#070709" strokeWidth="2" />
              </svg>

              {/* X-Axis Timestamps */}
              <div className="flex items-center justify-between font-mono text-[11px] text-[#A1A1AA] pt-4 border-t border-white/10">
                {PERFORMANCE_DATA.map((d) => (
                  <span key={d.time}>{d.time}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
```
