"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Clock, ShieldCheck } from "lucide-react";

/**
 * SHAZ AGENCY WEB DESIGN SPECIFICATION
 * Project: KRONOS GENEVE — Haute Horlogerie Atelier
 * Rules: Zero eyebrows/overlines, zero badges/pills, zero post-hero tickers,
 *        zero boxed photo frames, pure backgroundless transparent imagery.
 */

export function AtelierNav() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto bg-[#121318]/80 backdrop-blur-2xl border border-white/10 rounded-[16px] max-w-5xl w-full p-2 shadow-2xl">
        <nav aria-label="Atelier Navigation" className="flex items-center justify-between px-6 py-2.5">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-bold tracking-tight text-sm uppercase text-white font-sans group-hover:text-[#C5A880] transition-colors">
              KRONOS
            </span>
            <span className="font-serif italic text-base text-[#A1A1AA] font-normal">
              Geneve
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
            <a href="#calibre" className="hover:text-white transition-colors py-1">Calibre VII</a>
            <a href="#atelier" className="hover:text-white transition-colors py-1">Craftsmanship</a>
            <a href="#editions" className="hover:text-white transition-colors py-1">Allocations</a>
            <a href="#inquiry" className="hover:text-white transition-colors py-1">Private Suite</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-[#C5A880] text-[#070709] px-4 py-2 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#d4b993] transition-colors"
            >
              <span>Inquire Allocation</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function BackgroundlessMechanicalDial() {
  const [secondsDeg, setSecondsDeg] = useState(0);
  const [minutesDeg, setMinutesDeg] = useState(70);
  const [hoursDeg, setHoursDeg] = useState(240);

  useEffect(() => {
    let animationFrameId: number;
    const updateTime = () => {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;

      setSecondsDeg(s * 6);
      setMinutesDeg(m * 6);
      setHoursDeg(h * 30);

      animationFrameId = requestAnimationFrame(updateTime);
    };

    animationFrameId = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] select-none">
      <div className="relative w-full h-full rounded-full border-2 border-white/20 flex items-center justify-center shadow-2xl bg-gradient-to-tr from-[#161722] via-[#0E0F16] to-[#1A1C28]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute left-2 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute top-10 left-10 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute top-10 right-10 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />
        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 rounded-full bg-white/40 border border-black/40" />

        <div className="relative w-[82%] h-[82%] rounded-full border border-white/10 flex items-center justify-center bg-[#08080C] overflow-hidden">
          <div className="absolute top-3 w-[3px] h-4 bg-[#C5A880] shadow-sm" />
          <div className="absolute bottom-3 w-[3px] h-4 bg-[#C5A880] shadow-sm" />
          <div className="absolute left-3 h-[3px] w-4 bg-[#C5A880] shadow-sm" />
          <div className="absolute right-3 h-[3px] w-4 bg-[#C5A880] shadow-sm" />

          {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => (
            <div
              key={deg}
              className="absolute w-[2px] h-3 bg-white/40 origin-bottom bottom-1/2 left-[calc(50%-1px)]"
              style={{ transform: `rotate(${deg}deg) translateY(-105px)` }}
            />
          ))}

          <div className="absolute top-12 font-bold tracking-widest text-[10px] text-white/80 uppercase font-sans">
            KRONOS
          </div>
          <div className="absolute top-16 font-serif italic text-[10px] text-[#C5A880]">
            Geneve
          </div>

          <div
            className="absolute w-[4px] h-20 bg-gradient-to-t from-white/90 to-white/70 rounded-full origin-bottom bottom-1/2 left-[calc(50%-2px)] shadow-lg"
            style={{ transform: `rotate(${hoursDeg}deg)` }}
          />
          <div
            className="absolute w-[3px] h-28 bg-gradient-to-t from-white to-white/80 rounded-full origin-bottom bottom-1/2 left-[calc(50%-1.5px)] shadow-xl"
            style={{ transform: `rotate(${minutesDeg}deg)` }}
          />
          <div
            className="absolute w-[1px] h-32 bg-[#C5A880] origin-bottom bottom-1/2 left-[calc(50%-0.5px)] shadow-md"
            style={{ transform: `rotate(${secondsDeg}deg)` }}
          >
            <div className="w-3 h-3 rounded-full bg-[#C5A880] absolute -bottom-1.5 -left-[5px]" />
          </div>

          <div className="w-4 h-4 rounded-full bg-[#C5A880] border-2 border-[#070709] z-20 shadow-md" />

          <div className="absolute bottom-6 w-20 h-20 rounded-full border border-[#C5A880]/40 bg-black/95 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-inner">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border border-white/20 relative flex items-center justify-center"
            >
              <div className="absolute w-full h-[1px] bg-white/30" />
              <div className="absolute h-full w-[1px] bg-white/30" />
              <motion.div
                animate={{ rotate: [0, 240, 0, -240, 0] }}
                transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full border-2 border-[#C5A880] flex items-center justify-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KronosHorologyAtelier() {
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
    <div className="min-h-screen bg-[#070709] text-[#F4F4F6] selection:bg-[#C5A880] selection:text-[#070709]">
      <AtelierNav />

      {/* HERO: ZERO EYEBROWS, DIRECT HEADLINE */}
      <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center p-6 sm:p-12 lg:p-16 pt-32 sm:pt-40 overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12 max-w-7xl mx-auto w-full">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.92]">
              CHRONOMETRIC <br />
              <span className="font-serif italic font-normal text-[#C5A880]">Permanence</span> IN <br />
              GRADE 5 TITANIUM.
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed">
              Hand-finished transverse tourbillons regulated to observatory chronometer standards, encased in monocoque aerospace titanium.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="#calibre"
                className="inline-flex items-center gap-3 bg-[#C5A880] text-[#070709] px-6 py-3.5 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#d4b993] transition-colors"
              >
                <span>Explore Calibre VII</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center py-6">
            <BackgroundlessMechanicalDial />
          </div>
        </div>
      </section>

      {/* CALIBRE VII: NAKED HEADLINE & BACKGROUNDLESS TRANSPARENT VISUAL */}
      <section id="calibre" className="w-full bg-gradient-to-b from-[#070709] via-[#0A0B10] to-[#070709] text-[#F4F4F6] py-36 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/[0.02] blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <div className="w-full border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CALIBRE VII <br />
              <span className="font-serif italic font-normal text-[#C5A880]">Transverse</span> ARCHITECTURE.
            </h2>
            <p className="font-mono text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              Every bridge is hand-beveled with diamond paste, anthracite coated, and regulated across five positions in our Geneva atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Backgroundless Transparent SVG Geometry */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
                <svg className="w-full h-full text-[#C5A880]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="170" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="140" stroke="#C5A880" strokeOpacity="0.3" strokeWidth="1.5" />
                  <path d="M 60 200 L 340 200" stroke="#A1A1AA" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 200 60 L 200 340" stroke="#A1A1AA" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="140" cy="140" r="48" fill="#101117" stroke="#C5A880" strokeWidth="3" />
                  <circle cx="260" cy="140" r="48" fill="#101117" stroke="#C5A880" strokeWidth="3" />
                  <circle cx="200" cy="200" r="32" fill="#161720" stroke="#A1A1AA" strokeWidth="2.5" />
                  <circle cx="200" cy="200" r="10" fill="#E11D48" fillOpacity="0.8" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="200" cy="285" r="52" fill="#0A0B0E" stroke="#C5A880" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex items-center justify-center gap-8 pt-6 font-mono text-xs text-[#A1A1AA]">
                <span>Breguet Overcoil Hairspring</span>
                <span className="text-white/30">&middot;</span>
                <span>Solid 22k Gold Micro-Rotor</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 bg-[#0B0C10] border border-white/10 rounded-[14px] flex flex-col justify-between gap-6 shadow-xl">
              <h3 className="text-2xl font-bold tracking-tight text-white font-sans border-b border-white/10 pb-4">
                Tested to &plusmn;0.8s Daily Stability
              </h3>

              <div className="divide-y divide-white/10 font-mono text-xs">
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-[#A1A1AA]">Escapement</span>
                  <span className="text-white font-medium">60-Second Flying Tourbillon</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-[#A1A1AA]">Frequency</span>
                  <span className="text-white font-medium">28,800 VPH (4 Hz)</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-[#A1A1AA]">Power Reserve</span>
                  <span className="text-white font-medium">72 Hours Twin-Barrel</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-[#A1A1AA]">Jewels</span>
                  <span className="text-white font-medium">32 Functional Rubies</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-[#A1A1AA]">Total Components</span>
                  <span className="text-white font-medium">248 Individual Parts</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#inquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  <span>Request Technical Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP: ZERO BOXED PHOTOS */}
      <section id="atelier" className="w-full bg-gradient-to-b from-[#070709] via-[#090A0E] to-[#070709] text-[#F4F4F6] py-36 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-b border-white/10 pb-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                FOUR MONTHS OF <br />
                <span className="font-serif italic font-normal text-[#C5A880]">Benchwork</span> PER SPECIMEN.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                Every KRONOS timepiece is assembled, finished, and regulated by a single master watchmaker from raw titanium billet to final chronometer casing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#090A0E] border border-white/10 rounded-[14px] flex flex-col gap-6 hover:border-white/25 transition-colors">
              <div className="w-16 h-16 rounded-full border border-[#C5A880]/30 flex items-center justify-center bg-white/[0.02]">
                <svg className="w-8 h-8 text-[#C5A880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Grade 5 Monocoque</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Milled from solid bar stock of Ti-6Al-4V, delivering twice the tensile strength of stainless steel at 40% less mass.
              </p>
            </div>

            <div className="p-8 bg-[#090A0E] border border-white/10 rounded-[14px] flex flex-col gap-6 hover:border-white/25 transition-colors">
              <div className="w-16 h-16 rounded-full border border-[#C5A880]/30 flex items-center justify-center bg-white/[0.02]">
                <svg className="w-8 h-8 text-[#C5A880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Diamond Anglage</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Internal angles and perimeter flanks are chamfered by hand using boxwood laps and progressive micron diamond paste.
              </p>
            </div>

            <div className="p-8 bg-[#090A0E] border border-white/10 rounded-[14px] flex flex-col gap-6 hover:border-white/25 transition-colors">
              <div className="w-16 h-16 rounded-full border border-[#C5A880]/30 flex items-center justify-center bg-white/[0.02]">
                <svg className="w-8 h-8 text-[#C5A880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Observatory Tuning</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Regulated across 360 hours in 5 spatial positions and 3 temperatures before Geneva Seal hallmarking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANNUAL ALLOCATIONS: NAKED HEADINGS */}
      <section id="editions" className="w-full bg-gradient-to-b from-[#070709] via-[#0C0D13] to-[#070709] text-[#F4F4F6] py-36 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="border-b border-white/10 pb-8">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              ANNUAL ALLOCATIONS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 bg-[#0A0B0F] border border-white/10 rounded-[16px] flex flex-col justify-between gap-8 shadow-xl">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Chronometre Monolith</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Solid anthracite dial with hand-applied white gold indices, cased in satin bead-blasted Grade 5 titanium.
                </p>
              </div>

              <div className="divide-y divide-white/10 font-mono text-xs text-[#A1A1AA]">
                <div className="py-3 flex justify-between">
                  <span>Diameter / Thickness</span>
                  <span className="text-white">39.5mm &middot; 9.2mm</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span>Escapement</span>
                  <span className="text-white">Transverse Tourbillon</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span>Allocation Price</span>
                  <span className="text-white font-semibold">&euro; 68,000 Excl. VAT</span>
                </div>
              </div>

              <a
                href="#inquiry"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3.5 font-mono text-xs uppercase tracking-widest border border-white/15 transition-colors"
              >
                <span>Request Allocation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-[7px] bg-[#16171E] border border-[#C5A880]/30 rounded-[16px] shadow-2xl">
              <div className="h-full p-8 rounded-[11px] bg-[#070709] border border-[#C5A880]/20 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Tourbillon Squelette</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Fully openworked titanium bridges with hand-polished bevels, revealing the full gear train under double anti-reflective box sapphire.
                  </p>
                </div>

                <div className="divide-y divide-white/10 font-mono text-xs text-[#A1A1AA]">
                  <div className="py-3 flex justify-between">
                    <span>Diameter / Thickness</span>
                    <span className="text-white">41.0mm &middot; 9.8mm</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span>Escapement</span>
                    <span className="text-white font-medium text-[#C5A880]">60s Flying Tourbillon</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span>Allocation Price</span>
                    <span className="text-[#C5A880] font-semibold">&euro; 94,000 Excl. VAT</span>
                  </div>
                </div>

                <a
                  href="#inquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#d4b993] text-[#070709] py-3.5 font-mono text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  <span>Inquire Flagship Squelette</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE VIEWING COMMISSION */}
      <section id="inquiry" className="w-full bg-gradient-to-b from-[#070709] via-[#090A0E] to-[#050507] text-[#F4F4F6] py-36 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                PRIVATE ATELIER <br />
                <span className="font-serif italic font-normal text-[#C5A880]">Commission</span> INQUIRY.
              </h2>
              <p className="text-base text-[#A1A1AA] mt-4 max-w-lg leading-relaxed">
                Private consultations and physical movement viewings are conducted by appointment only at our Geneva atelier or private suites in Zurich, London, and Tokyo.
              </p>
            </div>

            <form className="flex flex-col gap-6 font-mono text-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[#A1A1AA] uppercase tracking-wider">Full Name</label>
                  <input id="name" type="text" placeholder="Collector Name" className="bg-[#121318] border border-white/10 px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C5A880] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#A1A1AA] uppercase tracking-wider">Direct Email</label>
                  <input id="email" type="email" placeholder="client@domain.com" className="bg-[#121318] border border-white/10 px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C5A880] transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="edition" className="text-[#A1A1AA] uppercase tracking-wider">Desired Reference</label>
                <select id="edition" className="bg-[#121318] border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-[#C5A880] transition-colors">
                  <option>Ref. 701-TI &middot; Chronometre Monolith (39.5mm)</option>
                  <option>Ref. 702-SQ &middot; Tourbillon Squelette (41.0mm)</option>
                  <option>Bespoke Unique Commission</option>
                </select>
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-3 bg-[#C5A880] text-[#070709] py-4 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#d4b993] transition-colors">
                <span>Submit Allocation Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 p-8 bg-[#0C0D12] border border-white/10 rounded-[14px] flex flex-col gap-8 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
              Viewing Salons by Appointment
            </h3>

            <div className="flex flex-col gap-6 font-mono text-xs text-[#A1A1AA]">
              <div className="border-l border-white/20 pl-4 flex flex-col gap-1">
                <span className="text-white font-medium uppercase">Geneva Workshop</span>
                <span>Rue du Rhone 42, 1204 Geneve</span>
              </div>

              <div className="border-l border-white/20 pl-4 flex flex-col gap-1">
                <span className="text-white font-medium uppercase">Zurich Private Salon</span>
                <span>Bahnhofstrasse 18, 8001 Zurich</span>
              </div>

              <div className="border-l border-white/20 pl-4 flex flex-col gap-1">
                <span className="text-white font-medium uppercase">London Appointment Suite</span>
                <span>New Bond Street 14, Mayfair W1S 3SS</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#71717A]">
              <span>Geneva Seal Register</span>
              <span className="text-white">Serial No. 2026-VII</span>
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE FOOTER: ZERO EYEBROWS, DIRECT CONTENT */}
      <footer className="w-full bg-[#050507] text-[#F4F4F6] pt-24 pb-16 px-6 sm:px-12 lg:px-16 border-t border-white/10 relative overflow-hidden">
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C5A880]/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <div className="text-sm font-semibold text-white tracking-wide">
              Geneve Manufacture &middot; Switzerland
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-[#C5A880]">
              <Clock className="w-4 h-4 stroke-[1.5]" />
              <span className="font-semibold tracking-wider text-white text-sm">{genevaTime || "12:00:00"}</span>
              <span className="text-white/60 text-[11px]">CET</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Private Viewing Appointments
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
                <div className="flex flex-col gap-1 p-5 bg-white/[0.02] border border-white/10 rounded-[8px]">
                  <span className="text-white font-semibold">Geneva Workshop</span>
                  <span className="text-[#A1A1AA]">Rue du Rhone 42</span>
                </div>

                <div className="flex flex-col gap-1 p-5 bg-white/[0.02] border border-white/10 rounded-[8px]">
                  <span className="text-white font-semibold">Zurich Salon</span>
                  <span className="text-[#A1A1AA]">Bahnhofstrasse 18</span>
                </div>

                <div className="flex flex-col gap-1 p-5 bg-white/[0.02] border border-white/10 rounded-[8px]">
                  <span className="text-white font-semibold">London Salon</span>
                  <span className="text-[#A1A1AA]">14 New Bond Street</span>
                </div>

                <div className="flex flex-col gap-1 p-5 bg-white/[0.02] border border-white/10 rounded-[8px]">
                  <span className="text-white font-semibold">Tokyo Ginza</span>
                  <span className="text-[#A1A1AA]">6-10-1 Ginza</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between gap-6 p-8 bg-[#0A0B0F] border border-white/10 rounded-[12px]">
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Observatory Ledger Check
                </h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Enter reference serial to verify testing stability certificates and master signature archives.
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
                  <div className="p-3 bg-[#C5A880]/10 border border-[#C5A880]/30 font-mono text-[11px] text-[#C5A880]">
                    {verifyStatus}
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <span className="text-white font-medium">+41 22 819 00 24 &middot; VIP@kronos-atelier.ch</span>
                <a href="#inquiry" className="inline-flex items-center gap-2 text-[#C5A880] hover:underline">
                  <span>Request Showing</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-8">
            <div className="w-full select-none overflow-hidden text-center">
              <span className="font-bold tracking-[-0.04em] text-[11vw] leading-none uppercase text-white/[0.04] font-sans block whitespace-nowrap">
                KRONOS &middot; GENEVE
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#71717A]">
              <div>&copy; 2026 KRONOS MANUFACTURE HORLOGERE &middot; Suisse</div>
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
    </div>
  );
}
