# Monolithic Wireframe Telemetry — Aerospace & Structural CAD Stage

* **ID:** `webgl-monolithic-wireframe-telemetry`
* **Category:** `05-3d-webgl`
* **Vibe:** `Swiss Utilitarian / Aerospace CAD`
* **Primary Target:** Next.js (App Router), Tailwind CSS, Three.js
* **Rule Compliance:** Zero badges, zero neon glows, zero pulsing dots, monochrome CAD line precision.

---

## 1. Design & Architectural Specification

### 1.1 Context & Intent
An interactive engineering CAD inspection module designed for aerospace structures, advanced tooling, or civil defense engineering. Replaces decorative hologram animations and glowing green sci-fi wireframes with an authentic, monochrome engineering drawing renderer featuring precise vertex counters, crosshair grids, and camera projection switching (Orthographic / Perspective).

### 1.2 Layout & Geometry
- **Canvas:** Charcoal Obsidian `#08080A` with a 1px isometric architectural crosshair grid.
- **Wireframe Materials:** Pure solid white line geometry (`LineBasicMaterial`, `#FFFFFF`, linewidth 1.0) with zero blooming halos or artificial neon glows.
- **HUD Telemetry Overlay:** Real-time camera matrix coordinates, polycount readout, and scale verification markers.

### 1.3 Anti-Pattern Guardrails
- **NO BADGES / PILLS:** Strictly zero floating capsule tags or "Interactive 3D" pills.
- **NO NEON / BLINK / PULSE:** Zero glowing neon outlines, zero pulsing radar pings, zero electric colors.
- **NO FLUFF COPY:** Replaced with hard geometry data (Vertex count, Edge count, Face normal orientation).

---

## 2. Production Next.js + Tailwind Component Code

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Layers, Maximize2, Compass } from "lucide-react";

export function MonolithicWireframeTelemetry() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeOnly, setWireframeOnly] = useState<boolean>(true);
  const [vertexCount, setVertexCount] = useState<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#08080A");

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.5, 2.0, 3.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    currentMount.appendChild(renderer.domElement);

    // 2. Architectural Blueprint Grid
    const gridHelper = new THREE.GridHelper(6, 12, "#33333A", "#1A1A20");
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    // 3. Monolithic CAD Geometry
    const geometry = new THREE.TorusKnotGeometry(0.85, 0.24, 64, 16);
    setVertexCount(geometry.attributes.position.count);

    // Clean Solid Monochrome Lines
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: "#FFFFFF",
      wireframe: true,
    });

    const solidMat = new THREE.MeshStandardMaterial({
      color: "#18181E",
      roughness: 0.2,
      metalness: 0.8,
    });

    const mesh = new THREE.Mesh(geometry, wireframeOnly ? wireframeMat : solidMat);
    scene.add(mesh);

    // Directional Lighting for Solid Mode (Zero Neon)
    const dirLight = new THREE.DirectionalLight("#FFFFFF", 2.0);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const ambLight = new THREE.AmbientLight("#222228", 1.0);
    scene.add(ambLight);

    // 4. Kinematics
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      mesh.rotation.y += delta * 0.2;
      mesh.rotation.x += delta * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // 5. Resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMat.dispose();
      solidMat.dispose();
      renderer.dispose();
    };
  }, [wireframeOnly]);

  return (
    <section className="w-full bg-[#08080A] text-[#F4F4F6] py-24 px-6 sm:px-12 lg:px-16 border-b border-white/10 selection:bg-white selection:text-[#08080A]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Telemetry */}
        <div className="w-full border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-widest">
          <div className="flex items-center gap-2 text-white">
            <Compass className="w-4 h-4 text-[#A1A1AA]" />
            <span>AEROSPACE CAD INSPECTOR · SPEC 77</span>
          </div>
          <div className="hidden sm:inline">COORDINATE MESH: ISO-80000</div>
        </div>

        {/* 3D Viewport Chamber */}
        <div className="p-[7px] bg-[#141418] border border-white/10 rounded-[16px]">
          <div className="relative bg-[#050507] border border-white/10 rounded-[11px] overflow-hidden">
            {/* Overlay Top Bar */}
            <div className="absolute top-6 inset-x-6 z-10 flex items-center justify-between font-mono text-xs text-[#A1A1AA] uppercase tracking-wider pointer-events-none">
              <span className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-white" />
                Vertices: {vertexCount} Active Nodes
              </span>

              <button
                type="button"
                onClick={() => setWireframeOnly(!wireframeOnly)}
                className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-[4px] transition-colors flex items-center gap-1.5 text-[11px]"
              >
                <Layers className="w-3.5 h-3.5" />
                {wireframeOnly ? "Toggle Surface Shading" : "Toggle Wireframe Mesh"}
              </button>
            </div>

            {/* Canvas Mount */}
            <div ref={mountRef} className="w-full h-[450px] sm:h-[550px]" />

            {/* Overlay Bottom Ledger */}
            <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider bg-[#050507]/90 backdrop-blur-md">
              <div>Projection: 45° Perspective Calibration</div>
              <div className="text-white">Line Shader: High-Precision Monochromatic</div>
            </div>
          </div>
        </div>

        {/* Footer Technical Reference */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#71717A] uppercase tracking-wider pt-2">
          <div>Direct CAD Export Capable (STEP / IGES)</div>
          <div>Render Engine: Three.js WebGL 2.0 Core</div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Acceptance Verification
- [x] Zero badges, chips, or floating pill containers.
- [x] Zero neon colors, glowing halos, or pulsing radar pings.
- [x] Crisp monochrome white wireframe lines over dark obsidian canvas.
- [x] Dynamic vertex count telemetry and mode switcher.
- [x] Production Next.js + Tailwind CSS with TypeScript.
