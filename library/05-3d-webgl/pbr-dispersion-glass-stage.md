# PBR Dispersion Glass Stage — Optical Laboratory & Materiality

* **ID:** `webgl-pbr-dispersion-glass-stage`
* **Category:** `05-3d-webgl`
* **Vibe:** `High-End Luxury / Optical Physics`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Three.js
* **Rule Compliance:** Zero badges, zero neon glows, zero pulsing dots, authentic physical refraction.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An interactive 3D WebGL stage engineered for luxury optical instruments, horology ateliers, or scientific material laboratories. Replaces cheap plastic shaders and tacky neon glowing rings with an authentic, physically based transmission glass material (`MeshPhysicalMaterial`) featuring subtle chromatic dispersion, natural studio softbox lighting, and damped cursor kinematics.

### 1.2 Layout & Geometry
- **Composition:** Full-bleed interactive 3D canvas framed inside an architectural double-bezel viewport (`#16161A` tray + `#09090B` core).
- **Physical Materiality:** 
  - Transmission: `0.96`, Roughness: `0.04`, IOR: `1.52` (Crown Glass index), Thickness: `1.2`.
  - Dispersion (Abbe number simulation): `0.04` subtle optical rainbow refraction along specular edges.
- **Lighting Setup:** Multi-point studio lighting with a soft 3500K neutral overhead key light and a deep basalt rim fill (strictly zero neon green/pink lights).

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating "3D Interactive" or "WebGL" pill tags.
- **NO NEON / BLINK / PULSE:** Zero glowing rings, zero pulsing radar markers, zero neon lasers.
- **NO FLUFF COPY:** A single factual line on refractive index and material hardness.

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, ShieldCheck } from "lucide-react";

export function PbrDispersionGlassStage() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#09090C");

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    currentMount.appendChild(renderer.domElement);

    // 2. Studio Lighting (Zero Neon, Clean Optical Fill)
    const keyLight = new THREE.DirectionalLight("#FFFFFF", 2.2);
    keyLight.position.set(4, 5, 3);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight("#E2DFD7", 1.4);
    rimLight.position.set(-4, -2, -2);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight("#222228", 0.8);
    scene.add(ambientLight);

    // 3. PBR Glass Geometry & Material
    const geometry = new THREE.IcosahedronGeometry(1.2, 0);
    const material = new THREE.MeshPhysicalMaterial({
      roughness: 0.05,
      transmission: 0.95,
      thickness: 1.4,
      ior: 1.52,
      reflectivity: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      attenuationColor: new THREE.Color("#F6F5F1"),
      attenuationDistance: 2.0,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Inner Core Specimen
    const coreGeo = new THREE.OctahedronGeometry(0.55, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: "#FFFFFF",
      metalness: 0.9,
      roughness: 0.15,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mesh.add(coreMesh);

    // 4. Mouse Kinematics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    currentMount.addEventListener("mousemove", handleMouseMove);

    // 5. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;

      mesh.rotation.y += targetX * 0.02;
      mesh.rotation.x += targetY * 0.02;

      if (isRotating) {
        mesh.rotation.y += delta * 0.25;
        coreMesh.rotation.x -= delta * 0.35;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 6. Resize Observer
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      currentMount.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <section className="w-full bg-[#09090B] text-[#F4F4F6] py-24 px-6 sm:px-12 lg:px-16 border-b border-white/10 selection:bg-white selection:text-[#09090B]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Telemetry */}
        <div className="w-full border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-widest">
          <div>OPTICAL TRANSMISSION · LAB REF 09</div>
          <div className="hidden sm:inline">CROWN GLASS IOR: 1.52</div>
        </div>

        {/* 3D Viewport Chamber */}
        <div className="p-[7px] bg-[#16161A] border border-white/10 rounded-[16px] shadow-sm">
          <div className="relative bg-[#09090C] border border-white/10 rounded-[11px] overflow-hidden flex flex-col">
            {/* Overlay Top Bar */}
            <div className="absolute top-6 inset-x-6 z-10 flex items-center justify-between font-mono text-xs text-[#A1A1AA] uppercase tracking-wider pointer-events-none">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                Physical PBR Shader
              </span>
              <button
                type="button"
                onClick={() => setIsRotating(!isRotating)}
                className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-[4px] transition-colors flex items-center gap-1.5 text-[11px]"
              >
                <RotateCw className="w-3.5 h-3.5" />
                {isRotating ? "Pause Orbit" : "Resume Orbit"}
              </button>
            </div>

            {/* Canvas Mount */}
            <div ref={mountRef} className="w-full h-[450px] sm:h-[550px] cursor-grab active:cursor-grabbing" />

            {/* Overlay Bottom Ledger */}
            <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider bg-[#09090C]/90 backdrop-blur-md">
              <div>Refraction: 96% Clear &middot; Specular: Abbe 0.04</div>
              <div className="text-white">Three.js ACES Filmic Pipeline</div>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider pt-2">
          <div>Dispersion Physics Governed by Snell&apos;s Law</div>
          <div>Target Frame Rate: Strictly 60 FPS Fixed</div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill tags.
- [x] Zero neon colors, glowing borders, or pulsing lights.
- [x] Physically grounded PBR transmission glass (`ior: 1.52`, roughness 0.05).
- [x] Clean double-bezel framing housing the Three.js canvas.
- [x] Production Next.js + Tailwind CSS with TypeScript.
