"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

// Check for WebGL capability safely in browser
function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// GLSL Vertex Shader for Fullscreen Nebula Quad
const nebulaVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// GLSL Fragment Shader: Procedural Domain-Warped Deep Space Nebula
const nebulaFragmentShader = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  varying vec2 vUv;

  // 2D Simplex Noise implementations
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,
                        0.366025403784439,
                       -0.577350269189626,
                        0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // 4-Octave Fractional Brownian Motion (FBM)
  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      val += amp * snoise(p);
      p = p * 2.04 + vec2(0.35, 0.25);
      amp *= 0.5;
    }
    return val;
  }

  void main() {
    // Aspect-ratio normalized coordinates centered at 0,0
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    // Subtle pointer parallax offset
    uv += u_mouse * 0.045;

    // Slow, peaceful, clearly perceptible astronomical drift
    float t1 = u_time * 0.024;
    float t2 = u_time * 0.016;

    // Domain Warping: Layer 1
    vec2 q = vec2(
      fbm(uv * 1.15 + vec2(t1, t2 * 0.85)),
      fbm(uv * 1.15 + vec2(-t2 * 0.9, t1 * 0.75))
    );

    // Domain Warping: Layer 2
    vec2 r = vec2(
      fbm(uv * 2.1 + 3.2 * q + vec2(t2 * 1.1, -t1 * 0.65)),
      fbm(uv * 2.1 + 3.2 * q + vec2(-t1 * 0.75, t2 * 1.15))
    );

    // Core procedural nebula density
    float f = fbm(uv * 1.7 + 3.6 * r + vec2(t1 * 0.45, t2 * 0.45));
    f = clamp(f * 0.5 + 0.5, 0.0, 1.0);

    // Color Palette Tokens:
    // Base Canvas: Deep Graphite Black #101116
    vec3 colBase = vec3(0.063, 0.067, 0.086);

    // Subtle Blue-Black Atmosphere: #131521
    vec3 colAtmosphere = vec3(0.075, 0.082, 0.130);

    // Muted Violet-Indigo Cosmic Cloud: #28245C
    vec3 colNebula1 = vec3(0.157, 0.141, 0.361);

    // Soft Lavender Accent Veil: #5C5592
    vec3 colNebula2 = vec3(0.361, 0.333, 0.573);

    // Celestial High-Energy Dust: #857FD2
    vec3 colHighlight = vec3(0.522, 0.498, 0.824);

    // Cloud Composition Mixing
    vec3 color = mix(colBase, colAtmosphere, smoothstep(0.15, 0.50, f));
    color = mix(color, colNebula1, smoothstep(0.32, 0.70, f) * 0.88);
    color = mix(color, colNebula2, smoothstep(0.54, 0.86, f) * (0.60 + 0.40 * q.x));
    color = mix(color, colHighlight, smoothstep(0.76, 0.96, f) * 0.38);

    // Radial attenuation: Keep center reading areas darker while keeping atmosphere rich
    float centerDist = length(uv);
    float vignette = smoothstep(1.4, 0.25, centerDist);
    color = mix(colBase, color, clamp(vignette * 0.90 + 0.18, 0.0, 1.0));

    gl_FragColor = vec4(color, 1.0);
  }
`;

// GLSL Shaders for Anti-Aliased Round Stars with Independent Twinkle & Depth
const starVertexShader = `
  attribute float aSize;
  attribute float aAlpha;
  attribute float aTwinkleSpeed;
  attribute float aTwinkleOffset;
  attribute vec3 aColor;

  uniform float u_time;
  uniform float u_pixelRatio;
  uniform vec2 u_mouse;
  uniform float u_depthFactor;

  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    vColor = aColor;

    // Independent sinusoidal twinkle breathing per star
    float twinkle = sin(u_time * aTwinkleSpeed + aTwinkleOffset) * 0.35;
    vAlpha = clamp(aAlpha + twinkle, 0.08, 1.0);

    // Subtle parallax translation along X/Y
    vec3 pos = position;
    pos.xy += u_mouse * u_depthFactor * 35.0;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Size scaled by DPR
    gl_PointSize = aSize * u_pixelRatio;
  }
`;

const starFragmentShader = `
  precision highp float;
  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    // Perfect round point with soft Gaussian celestial edge
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float softAlpha = smoothstep(0.5, 0.08, dist) * vAlpha;
    gl_FragColor = vec4(vColor, softAlpha);
  }
`;

export function CosmicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // 1. Initial WebGL Compatibility Check
    if (!checkWebGLSupport()) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number | null = null;
    let isDisposed = false;

    // 2. Setup Three.js Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: false,
      stencil: false,
      depth: false,
      alpha: false,
    });

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    // Context loss handler
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasWebGL(false);
    };
    renderer.domElement.addEventListener("webglcontextlost", handleContextLost, false);

    // 3. Create Fullscreen Nebula Quad with Procedural GLSL Shader
    const nebulaUniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth * dpr, window.innerHeight * dpr) },
      u_mouse: { value: new THREE.Vector2(0, 0) },
    };

    const nebulaMaterial = new THREE.ShaderMaterial({
      vertexShader: nebulaVertexShader,
      fragmentShader: nebulaFragmentShader,
      uniforms: nebulaUniforms,
      depthWrite: false,
      depthTest: false,
    });

    const nebulaQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), nebulaMaterial);
    scene.add(nebulaQuad);

    // 4. Starfield Generation Across 3 Distinct Depth Layers
    // Layer A: 650 Distant Faint Stars (very slow subtle drift)
    // Layer B: 280 Mid-depth Stars (moderate drift communicating depth)
    // Layer C: 45 Prominent Twinkling Stars (slow individual opacity pulsing)
    const starPalette = [
      new THREE.Color("#FFFFFF"),
      new THREE.Color("#E0E7FF"),
      new THREE.Color("#C7D2FE"),
      new THREE.Color("#DDD6FE"),
      new THREE.Color("#EDE9FE"),
    ];

    interface StarLayerConfig {
      count: number;
      sizeRange: [number, number];
      alphaRange: [number, number];
      twinkleSpeedRange: [number, number];
      depthFactor: number;
      driftSpeed: { x: number; y: number };
    }

    const starLayersConfig: StarLayerConfig[] = [
      {
        // Layer A: Distant background field
        count: 650,
        sizeRange: [1.2, 1.8],
        alphaRange: [0.25, 0.55],
        twinkleSpeedRange: [0.3, 0.8],
        depthFactor: 0.012,
        driftSpeed: { x: 0.00015, y: 0.00008 },
      },
      {
        // Layer B: Mid-depth stars with noticeable parallax drift
        count: 280,
        sizeRange: [2.0, 2.8],
        alphaRange: [0.45, 0.75],
        twinkleSpeedRange: [0.6, 1.4],
        depthFactor: 0.032,
        driftSpeed: { x: -0.00035, y: 0.00022 },
      },
      {
        // Layer C: Prominent twinkling celestial beacons
        count: 45,
        sizeRange: [3.2, 4.4],
        alphaRange: [0.75, 1.0],
        twinkleSpeedRange: [1.2, 2.2],
        depthFactor: 0.065,
        driftSpeed: { x: 0.00055, y: -0.00035 },
      },
    ];

    interface StarLayer {
      points: THREE.Points;
      positions: Float32Array;
      config: StarLayerConfig;
      uniforms: {
        u_time: { value: number };
        u_pixelRatio: { value: number };
        u_mouse: { value: THREE.Vector2 };
        u_depthFactor: { value: number };
      };
    }

    const starLayers: StarLayer[] = [];

    starLayersConfig.forEach((cfg) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(cfg.count * 3);
      const sizes = new Float32Array(cfg.count);
      const alphas = new Float32Array(cfg.count);
      const twinkleSpeeds = new Float32Array(cfg.count);
      const twinkleOffsets = new Float32Array(cfg.count);
      const colors = new Float32Array(cfg.count * 3);

      for (let i = 0; i < cfg.count; i++) {
        // Orthographic space coordinates [-1, 1]
        positions[i * 3 + 0] = (Math.random() * 2 - 1) * 1.1;
        positions[i * 3 + 1] = (Math.random() * 2 - 1) * 1.1;
        positions[i * 3 + 2] = 0;

        sizes[i] = cfg.sizeRange[0] + Math.random() * (cfg.sizeRange[1] - cfg.sizeRange[0]);
        alphas[i] = cfg.alphaRange[0] + Math.random() * (cfg.alphaRange[1] - cfg.alphaRange[0]);
        twinkleSpeeds[i] =
          cfg.twinkleSpeedRange[0] +
          Math.random() * (cfg.twinkleSpeedRange[1] - cfg.twinkleSpeedRange[0]);
        twinkleOffsets[i] = Math.random() * Math.PI * 2;

        const col = starPalette[Math.floor(Math.random() * starPalette.length)];
        colors[i * 3 + 0] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));
      geometry.setAttribute("aTwinkleSpeed", new THREE.BufferAttribute(twinkleSpeeds, 1));
      geometry.setAttribute("aTwinkleOffset", new THREE.BufferAttribute(twinkleOffsets, 1));
      geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

      const uniforms = {
        u_time: { value: 0 },
        u_pixelRatio: { value: dpr },
        u_mouse: { value: new THREE.Vector2(0, 0) },
        u_depthFactor: { value: cfg.depthFactor },
      };

      const material = new THREE.ShaderMaterial({
        vertexShader: starVertexShader,
        fragmentShader: starFragmentShader,
        uniforms: uniforms,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      starLayers.push({
        points,
        positions,
        config: cfg,
        uniforms,
      });
    });

    // 5. Mouse Parallax Tracking (Smooth Lerp, Fine Pointer Only)
    const targetMouse = { x: 0, y: 0 };
    const currentMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldReduceMotion) return;
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const isFinePointer =
      typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

    if (isFinePointer) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // 6. Viewport Resize Handler
    const handleResize = () => {
      if (isDisposed) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const newDpr = Math.min(window.devicePixelRatio || 1, 1.5);

      renderer.setPixelRatio(newDpr);
      renderer.setSize(w, h);

      nebulaUniforms.u_resolution.value.set(w * newDpr, h * newDpr);
      starLayers.forEach((layer) => {
        layer.uniforms.u_pixelRatio.value = newDpr;
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // 7. Visibility Aware Continuous Render Loop
    let lastTime = performance.now();
    let isTabVisible = true;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !isDisposed && !animationFrameId) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = (currentTime: number) => {
      if (isDisposed || !isTabVisible) {
        animationFrameId = null;
        return;
      }

      const delta = (currentTime - lastTime) * 0.001;
      lastTime = currentTime;

      // When reduced motion is preferred, pause evolution to respect user settings
      const timeScale = shouldReduceMotion ? 0 : 1;

      // Update Mouse Lerp
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.04;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.04;

      // Update Nebula Shader Uniforms
      nebulaUniforms.u_time.value += delta * timeScale;
      nebulaUniforms.u_mouse.value.set(currentMouse.x, currentMouse.y);

      // Update Star Layers (Positions wrap smoothly at bounds)
      starLayers.forEach((layer) => {
        layer.uniforms.u_time.value += delta * timeScale;
        layer.uniforms.u_mouse.value.set(currentMouse.x, currentMouse.y);

        if (!shouldReduceMotion) {
          const posAttr = layer.points.geometry.attributes.position as THREE.BufferAttribute;
          const posArray = posAttr.array as Float32Array;
          const dx = layer.config.driftSpeed.x * (delta * 60);
          const dy = layer.config.driftSpeed.y * (delta * 60);

          for (let i = 0; i < layer.config.count; i++) {
            let px = posArray[i * 3 + 0] + dx;
            let py = posArray[i * 3 + 1] + dy;

            // Wrap bounds [-1.15, 1.15] smoothly
            if (px > 1.15) px = -1.15;
            else if (px < -1.15) px = 1.15;

            if (py > 1.15) py = -1.15;
            else if (py < -1.15) py = 1.15;

            posArray[i * 3 + 0] = px;
            posArray[i * 3 + 1] = py;
          }
          posAttr.needsUpdate = true;
        }
      });

      // Render Scene
      renderer.render(scene, camera);

      // Loop only if active
      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Render one static frame
        renderer.render(scene, camera);
        animationFrameId = null;
      }
    };

    // Kick off animation loop
    animationFrameId = requestAnimationFrame(animate);

    // 8. Robust Teardown and Resource Disposal
    return () => {
      isDisposed = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (isFinePointer) {
        window.removeEventListener("mousemove", handleMouseMove);
      }

      // Dispose Three.js objects
      nebulaQuad.geometry.dispose();
      nebulaMaterial.dispose();

      starLayers.forEach((layer) => {
        layer.points.geometry.dispose();
        (layer.points.material as THREE.Material).dispose();
      });

      renderer.domElement.removeEventListener("webglcontextlost", handleContextLost);
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#101116]"
      aria-hidden="true"
    >
      {/* Fallback CSS gradient background if WebGL is unsupported or disabled */}
      {!hasWebGL && (
        <div className="absolute inset-0 bg-[#101116]">
          <div className="absolute -top-[10%] -right-[15%] w-[850px] h-[850px] rounded-full bg-gradient-to-br from-[#2E2864]/40 via-[#1C1844]/25 to-transparent blur-[140px]" />
          <div className="absolute top-[35%] -left-[10%] w-[900px] h-[750px] rounded-full bg-gradient-to-tr from-[#1E1B4B]/35 via-[#161934]/20 to-transparent blur-[160px]" />
        </div>
      )}

      {/* Celestial Horizon Curve (Atmospheric Planetary Limb on the Right) */}
      <div className="absolute top-[6%] -right-[260px] sm:-right-[220px] lg:-right-[180px] w-[580px] sm:w-[680px] lg:w-[780px] aspect-square rounded-full pointer-events-none opacity-45 sm:opacity-55 lg:opacity-65 select-none">
        <div className="absolute inset-0 rounded-full bg-[#0D0E14] border border-[rgba(131,135,195,0.18)] shadow-[inset_-30px_-30px_90px_rgba(0,0,0,0.95)]" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#8387C3]/35 via-[#4E5296]/15 to-transparent blur-md" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-l from-[#A5A9E6]/25 to-transparent blur-xl" />
      </div>

      {/* Architectural Engineering Grid (2.5% subtle overlay) */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-45 pointer-events-none" />

      {/* Fine Film Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-80 pointer-events-none" />

      {/* Vignette Overlay for Content Readability */}
      <div className="absolute inset-0 bg-radial-gradient-to-c from-transparent via-[#101116]/40 to-[#101116]/80 pointer-events-none" />
    </div>
  );
}
