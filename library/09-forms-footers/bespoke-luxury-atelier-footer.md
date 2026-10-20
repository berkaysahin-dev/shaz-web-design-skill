# Shaz Agency Web Design — Architectural Master Horizon Footer Specification

This module specifies an ultra-premium, modern architectural closing architecture designed for high-end ateliers, luxury manufactures, and bespoke institutions. It completely eliminates corporate sitemaps, uppercase micro-labels (`PHYSICAL ATELIERS`, `DIRECT DESK`), fake serial verification inputs, and tacky status dots, replacing them with a quiet, commanding dialogue horizon and a balanced horizon baseline.

---

## 1. Architectural Principles

1. **Architectural Horizon Dialogue:** Opens with an authoritative, quiet editorial invitation sentence paired with a direct, minimalist single-line inquiry action (`inquire@domain.ch →` or `Schedule Private Consultation →` with a delicate sub-pixel hover underline).
2. **Pure Typographic Navigation Deck (Zero Micro-Labels):** Spaced, high-contrast editorial links (`Architecture`, `Acoustic Physics`, `Private Commissions`, `Journal`, `Archive`) positioned cleanly without category header tags or kicker prefixes.
3. **Global Presence Horizon:** Physical ateliers and destinations listed in dignified, quiet typography (`Zürich · Seefeldstrasse 48`, `Kyoto · Gion South`, `New York · Tribeca`) without uppercase `LOCATIONS` or `PHYSICAL ATELIERS` headers.
4. **The Horizon Baseline:** Separated by a single 1px hairline border (`rgba(255, 255, 255, 0.08)`):
   * **Left:** Pure typographic copyright (`© 2026 BRAND ATELIER. SWISS ARCHITECTURAL ACOUSTICS.`).
   * **Center:** Quiet legal and ethics links (`Privacy · Terms · Environmental Provenance · Colophon`).
   * **Right:** Discrete local atelier time (`Zürich 20:15 CET`) without status dots, colored markers, or blinking indicators.
5. **Crisp Sculpted Brand Insignia:** An authoritative, perfectly kerned display typographic wordmark integrated with optical balance.

---

## 2. Production React / Next.js Implementation

```tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface ArchitecturalHorizonFooterProps {
  brandName?: string;
  tagline?: string;
  inquiryEmail?: string;
  locations?: string[];
  navLinks?: { label: string; href: string }[];
  timeZone?: string;
  timeZoneLabel?: string;
}

export default function ArchitecturalHorizonFooter({
  brandName = "VALENCE",
  tagline = "Initiating dialogue for private commissions, acoustic architecture, and institutional installations worldwide.",
  inquiryEmail = "concierge@valence-acoustics.ch",
  locations = [
    "Zürich · Seefeldstrasse 48",
    "Kyoto · Gion South",
    "New York · Tribeca",
    "London · Mayfair",
  ],
  navLinks = [
    { label: "Architecture", href: "#architecture" },
    { label: "Monoliths", href: "#monoliths" },
    { label: "Acoustic Physics", href: "#harmonics" },
    { label: "Private Commissions", href: "#commissions" },
    { label: "Archive", href: "#archive" },
  ],
  timeZone = "Europe/Zurich",
  timeZoneLabel = "Zürich",
}: ArchitecturalHorizonFooterProps) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <footer className="w-full bg-[#070709] text-[#F0F2F5] pt-32 pb-16 px-6 md:px-12 border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Row 1: The Architectural Dialogue Horizon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between pb-16 border-b border-white/[0.06]">
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-snug tracking-tight max-w-2xl">
              {tagline}
            </h3>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between h-full gap-6">
            <a
              href={`mailto:${inquiryEmail}`}
              className="inline-flex items-center gap-3 text-lg md:text-xl font-light text-white hover:text-[#C5A059] transition-colors group pb-1 border-b border-white/20 hover:border-[#C5A059]"
            >
              <span>{inquiryEmail}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#9094A0] font-light">
              {locations.map((loc, i) => (
                <span key={i}>{loc}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Pure Typographic Navigation Deck (Zero Micro-Labels) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="font-display text-2xl md:text-3xl font-bold tracking-monumental text-white uppercase select-none">
            {brandName}
          </div>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#9094A0] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 3: The Horizon Baseline */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5C606E]">
          <div>
            © {new Date().getFullYear()} {brandName} ATELIER. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#9094A0] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#9094A0] transition-colors">Terms of Commission</a>
            <a href="#colophon" className="hover:text-[#9094A0] transition-colors">Colophon</a>
          </div>

          <div className="text-right text-[#72757E]">
            {timeZoneLabel} {localTime ? `${localTime} CET` : "19:00:00 CET"}
          </div>
        </div>

      </div>
    </footer>
  );
}
```
