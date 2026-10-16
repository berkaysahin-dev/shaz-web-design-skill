# Ecosystem & Technology Integration Infinite Marquee

* **ID:** `showcase-ecosystem-technology-marquee`
* **Category:** `06-product-showcase`
* **Vibe:** `High-Fidelity Studio Ecosystem / Infinite Continuous Stream`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Vanilla CSS
* **Rule Compliance:** Zero badges, zero pills, zero status dots, seamless dual-track infinite CSS loop, bilateral edge alpha mask.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An ultra-clean, continuous brand and integration marquee adapted from the `shazagency.com` ecosystem standard (`GÜCÜNÜ ALDIĞIMIZ TEKNOLOJİLER & ENTEGRASYONLAR`). Replaces clunky static sponsor grids with a fluid, sub-pixel sliding stream of precision monochromatic brand vectors. Positioned typically directly beneath hero sections or architectural dossiers to demonstrate ecosystem compatibility without visual clutter.

### 1.2 Layout & Geometry
- **Outer Wrapper:** Single hairline border card (`border border-white/10 rounded-[16px] bg-[#0B0C12]`) or borderless ambient container with generous vertical padding.
- **Section Kicker:** Centered or left-aligned typographic tracking mark (`font-mono text-xs uppercase tracking-[0.16em] text-slate-400 font-semibold`).
- **Edge Feathering:** Modern CSS mask gradient (`mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)`) providing smooth edge dissolves.
- **Infinite Marquee Track:** Dual track clone belt running seamlessly via pure hardware-accelerated CSS transforms (`animation: ecosystemMarquee 35s linear infinite`).
- **Hover Micro-Interactions:** Hovering over the track pauses the marquee belt. Individual brand items smoothly transition to their authentic brand signature color with gentle pill highlight backdrops.

### 1.3 Anti-Pattern Guardrails
- **NO STATIC CLUNKY GRIDS:** Never dump logos into rigid table boxes.
- **NO RAW COLOR CLASHES:** Default state must be monochromatic slate; authentic colors appear only on deliberate hover.
- **NO VISIBLE LOOP JUMPS:** Track 1 and Track 2 must have identical widths and spacing to guarantee mathematical 0% to -50% loop symmetry.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React from "react";

interface EcosystemBrand {
  name: string;
  title: string;
  hoverColor: string;
  hoverBg: string;
  path: string;
}

const brands: EcosystemBrand[] = [
  {
    name: "Claude",
    title: "Claude (Anthropic)",
    hoverColor: "#D97757",
    hoverBg: "rgba(217, 119, 87, 0.08)",
    path: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z",
  },
  {
    name: "Google",
    title: "Google",
    hoverColor: "#4285F4",
    hoverBg: "rgba(66, 133, 244, 0.08)",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  },
  {
    name: "ChatGPT",
    title: "ChatGPT (OpenAI)",
    hoverColor: "#10A37F",
    hoverBg: "rgba(16, 163, 127, 0.08)",
    path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
  },
  {
    name: "Shopify",
    title: "Shopify",
    hoverColor: "#96BF48",
    hoverBg: "rgba(150, 191, 72, 0.08)",
    path: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z",
  },
  {
    name: "Meta",
    title: "Meta",
    hoverColor: "#0081FB",
    hoverBg: "rgba(0, 129, 251, 0.08)",
    path: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z",
  },
  {
    name: "Stripe",
    title: "Stripe",
    hoverColor: "#635BFF",
    hoverBg: "rgba(99, 91, 255, 0.08)",
    path: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z",
  },
  {
    name: "Amazon",
    title: "Amazon",
    hoverColor: "#FF9900",
    hoverBg: "rgba(255, 153, 0, 0.08)",
    path: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.825 0 5.867-.624 8.784-2.025.32-.153.642.164.444.428-1.996 2.645-5.263 4.25-9.228 4.25-4.482 0-8.63-2.03-12.218-5.8-.18-.188-.135-.395 0-.497v.5zm19.98-1.57c.225-.286.994-.132 1.458-.066.463.067 1.09.28 1.25.688.16.408-.09.84-.316 1.127-.225.286-.928.84-1.392.774-.464-.067-1.124-.467-1.284-.875-.16-.407.059-1.36.284-1.648zm-6.28-7.81c0-1.83-.34-3.19-1.29-4.04-.95-.85-2.28-1.27-3.99-1.27-2.6 0-4.8 1.18-5.71 2.37-.21.28-.15.53.13.72l1.63 1.09c.27.18.53.11.75-.12.56-.63 1.77-1.42 3.19-1.42 1.94 0 2.59 1.03 2.59 2.54v.45c-2.45.14-5.25.77-6.72 2.11-1.34 1.22-1.82 2.8-1.82 4.28 0 2.92 2.05 4.8 4.87 4.8 2.22 0 3.73-1.07 4.54-2.25h.17l.32 1.77c.1.5.42.71.86.71h2.15c.43 0 .71-.34.71-.78V8.64h-2.15zm-2.04 5.92c-.37 1.46-1.59 2.45-3.08 2.45-1.13 0-1.87-.69-1.87-1.78 0-1.4 1.13-2.22 3.25-2.35l1.7-.1v1.78z",
  },
  {
    name: "Supabase",
    title: "Supabase",
    hoverColor: "#3ECF8E",
    hoverBg: "rgba(62, 207, 142, 0.08)",
    path: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
  },
  {
    name: "Apple",
    title: "Apple",
    hoverColor: "#F8FAFC",
    hoverBg: "rgba(248, 250, 252, 0.08)",
    path: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.06-1.82.94-2.88-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.74-.96 2.78 1.02.08 2.06-.51 2.69-1.27z",
  },
];

export function EcosystemTechnologyMarquee() {
  return (
    <section className="relative w-full py-16 px-6 sm:px-12 bg-[#08090C] overflow-hidden" aria-label="Ecosystem Integrations">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Header Kicker */}
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
            INTEGRATED INTELLIGENCE &amp; ARCHITECTURAL ECOSYSTEM
          </span>
        </div>

        {/* Marquee Stage with Edge Feather Masks */}
        <div
          className="w-full overflow-hidden relative py-2 select-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {/* Infinite Track Belt */}
          <div className="flex w-max animate-ecosystemMarquee hover:[animation-play-state:paused]">
            
            {/* Track 1 */}
            <div className="flex items-center gap-12 pr-12 shrink-0">
              {brands.map((b) => (
                <div
                  key={`track1-${b.name}`}
                  title={b.title}
                  className="inline-flex items-center gap-3 text-slate-400 opacity-70 hover:opacity-100 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer group"
                  style={{
                    ["--hover-color" as string]: b.hoverColor,
                    ["--hover-bg" as string]: b.hoverBg,
                  }}
                >
                  <svg className="w-5 h-5 fill-current shrink-0 group-hover:text-[var(--hover-color)] transition-colors" viewBox="0 0 24 24">
                    <path d={b.path} />
                  </svg>
                  <span className="font-sans text-sm font-semibold tracking-tight text-current group-hover:text-[var(--hover-color)] transition-colors">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2 (Clone for infinite symmetry) */}
            <div className="flex items-center gap-12 pr-12 shrink-0" aria-hidden="true">
              {brands.map((b) => (
                <div
                  key={`track2-${b.name}`}
                  title={b.title}
                  className="inline-flex items-center gap-3 text-slate-400 opacity-70 hover:opacity-100 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer group"
                >
                  <svg className="w-5 h-5 fill-current shrink-0 group-hover:text-[var(--hover-color)] transition-colors" viewBox="0 0 24 24">
                    <path d={b.path} />
                  </svg>
                  <span className="font-sans text-sm font-semibold tracking-tight text-current group-hover:text-[var(--hover-color)] transition-colors">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes ecosystemMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ecosystemMarquee {
          animation: ecosystemMarquee 35s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
```
