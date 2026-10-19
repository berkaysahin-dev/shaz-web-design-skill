---
name: shaz-video
description: "TR: React tabanlı programatik video, 60 FPS sinematik hareketli grafikler, dinamik video dokuları ve kare hassasiyetli hareketli animasyonlar üretir. / EN: Generates programmatic React video compositions, 60 FPS cinematic motion graphics, dynamic video textures, and frame-accurate physics."
---

# /shaz-video — Shaz Kinetic React Video & Motion Canvas Engine

Use this skill when the user runs `/shaz-video [brief or motion-type]` or requests programmatic React-driven video generation, cinematic motion graphic reels, dynamic video textures, or frame-accurate visual sequences.

---

## 1. Architectural Philosophy & Core Capabilities

The **Shaz Kinetic Video Engine** allows developers and creative technologists to produce pixel-perfect, 60 FPS broadcast-grade digital video and kinetic motion graphics using pure **React, TypeScript, CSS/Tailwind, and Web Standards**.

Instead of relying on heavy third-party rendering software or pre-rendered stock MP4 files, this engine compiles React component trees directly into frame-accurate video streams, interactive web players, and atmospheric video textures.

### Key Capabilities:
1. **Frame-Accurate Deterministic Motion:** Driven by exact frame index (`useCurrentFrame()`) rather than variable browser clock intervals, guaranteeing zero frame drops or visual jitter during rendering.
2. **Spring Dynamics & Interpolation Curves:** Natural physics (`spring({ frame, fps, config: { damping, stiffness, mass } })`) and sub-pixel multi-range interpolation (`interpolate()`).
3. **Real-Time Interactive Canvas Integration:** Layering WebGL Three.js scenes, procedural GLSL fragment shaders, and SVG filters inside video compositions.
4. **Kinetic Typography & Staggered Text Reveals:** Editorial headline orchestration, character-by-character reveals, and typographic velocity skew.
5. **Dynamic Video Textures for Web:** Producing custom 4K atmospheric video loops for web hero backdrops (e.g. replacing generic stock video with custom-generated brand motion).
6. **Programmatic Data-Driven Generation:** Generating hundreds of unique video variants from a single JSON dataset or API feed.

---

## 2. Core Composition Anatomy & Hierarchy

Every video composition follows a strict 3-tier architecture:

```
src/
├── Root.tsx          <- Declares all Video Compositions, resolutions, FPS, and default props
├── compositions/     <- Individual motion sequences and timeline scenes
│   ├── HeroReel.tsx  <- Primary 60 FPS cinematic reel
│   └── ShaderLoop.tsx<- Atmospheric video background loop
└── components/       <- Reusable kinetic motion elements (kinetic type, progress dial, HUD overlay)
```

### 2.1 Composition Declaration (`Root.tsx`)
```tsx
import React from "react";
import { Composition, Folder } from "remotion";
import { HeroReel } from "./compositions/HeroReel";
import { ShaderLoop } from "./compositions/ShaderLoop";

export const ShazVideoRoot: React.FC = () => {
  return (
    <>
      <Folder name="BrandReels">
        <Composition
          id="HeroReel"
          component={HeroReel}
          durationInFrames={300} // 5.0 seconds at 60 FPS
          fps={60}
          width={1920}
          height={1080}
          defaultProps={{
            title: "ARCHITECTURAL RIGOR",
            subtitle: "SUB-MILLIMETER TECTONIC PRECISION",
            accentColor: "#D4AF37",
          }}
        />
        <Composition
          id="AtmosphericShaderLoop"
          component={ShaderLoop}
          durationInFrames={360} // 6.0 seconds loop at 60 FPS
          fps={60}
          width={2560}
          height={1440}
        />
      </Folder>
    </>
  );
};
```

---

## 3. Frame Physics & Kinetic Interpolation Engine

### 3.1 Spring Physics with Damped Rebound
```tsx
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const useKineticSpring = (delayFrames: number = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return spring({
    frame: frame - delayFrames,
    fps,
    config: {
      damping: 24,
      stiffness: 280,
      mass: 0.8,
    },
  });
};
```

### 3.2 Sub-Pixel Interpolation with Easing
```tsx
import { interpolate, Easing, useCurrentFrame } from "remotion";

const frame = useCurrentFrame();

// Smooth entry, plateau, and graceful exit
const opacity = interpolate(
  frame,
  [0, 20, 260, 290],
  [0, 1, 1, 0],
  {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  }
);
```

---

## 4. Production Web Integration (<Player /> Component)

To embed programmatic video directly into Next.js websites as an interactive or autonomous hero centerpiece:

```tsx
"use client";

import React from "react";
import { Player } from "@remotion/player";
import { HeroReel } from "./compositions/HeroReel";

export function CinematicVideoPlayer() {
  return (
    <div className="relative w-full aspect-video rounded-[16px] overflow-hidden border border-white/10 bg-[#070709] shadow-2xl">
      <Player
        component={HeroReel}
        durationInFrames={300}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={60}
        style={{
          width: "100%",
          height: "100%",
        }}
        autoPlay
        loop
        controls={false}
        inputProps={{
          title: "AUTONOMOUS TIMEKEEPING",
          subtitle: "CALIBRE SHAZ-01 · DOUBLE TOURBILLON",
          accentColor: "#C5A880",
        }}
      />
    </div>
  );
}
```

---

## 5. Mandatory Anti-Pattern Guardrails

1. **NO Third-Party Platform Advertising:** Never state or market third-party corporate names in user-facing code or copy (Law 5). All code must be styled and integrated as proprietary Shaz Kinetic Video components.
2. **NO Blinking / Pulsing Lights:** Video graphics must not use chaotic strobe lights or neon pulses (Law 3). Motion must follow serene mechanical and spring physics.
3. **NO Fluff Titles or Generic Overlines:** Headlines inside video sequences must be authoritative, short, and impactful (Law 1, Law 13).
4. **Hardware Acceleration:** Ensure CSS transforms inside video layers utilize GPU-accelerated `translate3d(x, y, 0)` and `transformOrigin`.

---

## 6. Output Protocol

When executing `/shaz-video`:
1. **Motion Narrative & Frame Budget:** Detail the timeline breakdown (e.g. Frames 0–45 Intro Reveal, Frames 46–220 Focal Showcase, Frames 221–300 Harmonic Resolution).
2. **Applied Universal Design Laws:** Explicitly cite the governing laws.
3. **Production TypeScript Code:** Deliver complete, copy-pasteable `<Composition />`, timeline component, and `<Player />` embedding with zero placeholders.
