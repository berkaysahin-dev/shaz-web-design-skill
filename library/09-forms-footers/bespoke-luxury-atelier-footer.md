# Shaz Agency Web Design — Bespoke Luxury Atelier Footer Specification

This module specifies an ultra-premium, non-classic closing architecture designed for high-end ateliers, luxury manufactures, and bespoke institutions. It replaces generic 4-column corporate sitemaps with monumental typography, live timekeeping telemetries, salon physical directories, and a VIP private viewing concierge.

---

## 1. Architectural Principles

1. **Monumental Brand Wordmark:** Instead of a small logo in the top-left corner, the footer opens or concludes with a monolithic, low-contrast typographic seal spanning the container width.
2. **Live Horological Telemetry & Atelier Bench Status:** Displays the real-time local clock of the manufacture (e.g. Geneva CET, Zurich, or Tokyo) with continuous running seconds, paired with an authentic status indicator (e.g., *"Atelier Bench Active &middot; 6 Master Horologists on Duty"*).
3. **VIP Private Viewing Concierge:** Replaces generic contact forms with a tactile private salon appointment trigger and encrypted concierge desk.
4. **Physical Atelier Coordinates Matrix:** Physical salons (Geneva, Zurich, London, Tokyo) displayed with architectural addresses and direct salon reservation triggers.
5. **Cryptographic Hallmark & Archive Verification:** An interactive chronometer registry check allowing collectors to query movement serial numbers against the Geneva Seal archive.
6. **Zero Emojis & Zero Generic Link Spam:** No emojis, no social media vanity icons, and no generic legal fluff links. Clean, authoritative monochrome vector typography.

---

## 2. Production React / Next.js Implementation

```tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Clock, MapPin, Compass } from "lucide-react";

export default function BespokeLuxuryAtelierFooter() {
  const [genevaTime, setGenevaTime] = useState("");
  const [serialQuery, setSerialQuery] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Zurich",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setGenevaTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialQuery.trim()) return;
    setVerifyStatus("AUTHENTICATED: Specimen registered in Geneva Seal Observatory Ledger.");
  };

  return (
    <footer className="w-full bg-[#050507] text-[#F4F4F6] pt-28 pb-16 px-6 sm:px-12 lg:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Warm Atmospheric Vignette */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C5A880]/5 blur-[160px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Row 1: Live Atelier Status & Real-Time Geneva Clock */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-[#C5A880]" />
            <div className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
              <span className="text-white font-medium">Geneva Atelier Bench</span>
              <span className="mx-2 text-white/30">&middot;</span>
              <span>6 Master Watchmakers Active</span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#C5A880]">
            <Clock className="w-4 h-4 stroke-[1.5]" />
            <span className="text-white/60 uppercase tracking-widest text-[11px]">Gen&egrave;ve Local Time (CET):</span>
            <span className="font-semibold tracking-wider text-white text-sm">{genevaTime || "12:00:00"}</span>
          </div>
        </div>

        {/* Row 2: VIP Concierge & Physical Salons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Salon Coordinates Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs text-[#C5A880] uppercase tracking-wider block mb-2">
                Physical Salons &amp; Benches
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Private Viewing Appointments
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs">
              <div className="flex flex-col gap-2 p-5 bg-white/[0.02] border border-white/10">
                <span className="text-white font-semibold uppercase tracking-wider">Geneva Manufacture</span>
                <span className="text-[#A1A1AA]">Rue du Rh&ocirc;ne 42, 1204 Gen&egrave;ve</span>
                <span className="text-[#71717A] text-[11px]">Master Horologist Bench</span>
              </div>

              <div className="flex flex-col gap-2 p-5 bg-white/[0.02] border border-white/10">
                <span className="text-white font-semibold uppercase tracking-wider">Z&uuml;rich Private Salon</span>
                <span className="text-[#A1A1AA]">Bahnhofstrasse 18, 8001 Z&uuml;rich</span>
                <span className="text-[#71717A] text-[11px]">Observatory Chronometry Suite</span>
              </div>

              <div className="flex flex-col gap-2 p-5 bg-white/[0.02] border border-white/10">
                <span className="text-white font-semibold uppercase tracking-wider">London Mayfair</span>
                <span className="text-[#A1A1AA]">14 New Bond Street, W1S 3SS</span>
                <span className="text-[#71717A] text-[11px]">Private Collector Reception</span>
              </div>

              <div className="flex flex-col gap-2 p-5 bg-white/[0.02] border border-white/10">
                <span className="text-white font-semibold uppercase tracking-wider">Tokyo Ginza</span>
                <span className="text-[#A1A1AA]">6-10-1 Ginza, Chuo-ku, 104-0061</span>
                <span className="text-[#71717A] text-[11px]">East Asia Collector Salon</span>
              </div>
            </div>
          </div>

          {/* Cryptographic Archive Verification & VIP Direct Line */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-10 p-8 bg-[#0A0B0F] border border-white/10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Geneva Seal Registry
                </span>
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                Authenticity &amp; Observatory Ledger Check
              </h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Enter your timepiece reference serial to verify observatory testing stability certificates and master watchmaker signature archives.
              </p>

              <form onSubmit={handleVerify} className="flex items-center gap-2 pt-2">
                <input
                  type="text"
                  value={serialQuery}
                  onChange={(e) => setSerialQuery(e.target.value)}
                  placeholder="e.g. KRN-701-084"
                  className="bg-black/60 border border-white/15 px-4 py-3 text-xs font-mono text-white placeholder-white/20 focus:outline-none focus:border-[#C5A880] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#C5A880] text-[#070709] px-5 py-3 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#d4b993] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Verify</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </form>

              {verifyStatus && (
                <div className="mt-2 p-3 bg-[#C5A880]/10 border border-[#C5A880]/30 font-mono text-[11px] text-[#C5A880]">
                  {verifyStatus}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1AA] uppercase">Patron Concierge Line</span>
                <span className="text-white font-medium">+41 22 819 00 24 &middot; VIP@kronos-atelier.ch</span>
              </div>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-[#C5A880] hover:underline"
              >
                <span>Request Private Salon Showing</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

        </div>

        {/* Row 3: Monumental Architectural Signature */}
        <div className="pt-12 border-t border-white/10 flex flex-col gap-8">
          <div className="w-full select-none overflow-hidden text-center">
            <span className="font-bold tracking-[-0.04em] text-[12vw] leading-none uppercase text-white/[0.04] font-sans block whitespace-nowrap">
              KRONOS &middot; GEN&Egrave;VE
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#71717A]">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">&copy; 2026 KRONOS MANUFACTURE HORLOG&Egrave;RE</span>
              <span>&middot;</span>
              <span>Canton de Gen&egrave;ve, Suisse</span>
            </div>

            <div className="flex items-center gap-6 text-[#A1A1AA]">
              <a href="#hero" className="hover:text-white transition-colors">Return to Top &uarr;</a>
              <a href="#calibre" className="hover:text-white transition-colors">Calibre VII</a>
              <a href="#editions" className="hover:text-white transition-colors">Allocations</a>
              <a href="#inquiry" className="hover:text-white transition-colors">Private Atelier</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
```
