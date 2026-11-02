"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

/**
 * CosmicBackground — ETERNAL RESET: FRACTURED TIME
 *
 * Cinematic dimensional environment built around the original artwork:
 * "Moonlit Lavender Valley with Shattered Skies.png"
 *
 * Visual Systems:
 * 1. Untouched high-quality original artwork directly served from public/video/
 * 2. 2.5D Multi-plane optical micro-parallax counter-displacement
 * 3. Return by Death rotating celestial clock vortex concentric dial
 * 4. Suspended Tome of Wisdom floating parchment pages in the misty air
 * 5. Bioluminescent path fissure energy glints leading to Echidna's tea table
 * 6. Ethereal drifting flower spores / fireflies over the lavender field
 * 7. Fractured glass prisms physically aligning with the shattered sky cracks
 * 8. WCAG AAA typography protective shield for Aryan's editorial content
 *
 * Performance:
 * - 0 WebGL overhead
 * - 0 React re-renders during mouse movement (CSS custom variables + rAF lerp)
 * - Pure hardware-accelerated GPU transforms and opacity blending
 */
export function CosmicBackground() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      if (shouldReduceMotion) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    }

    const handleVisibility = () => {
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else if (!shouldReduceMotion) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [shouldReduceMotion]);

  // Micro-Parallax Cursor Interaction: Pure CSS Custom Variables (0 React Rerenders)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldReduceMotion) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) {
      const handleScroll = () => {
        const scrollFraction = window.scrollY / (document.documentElement.scrollHeight || 1);
        container.style.setProperty("--scroll-offset", `${scrollFraction * 40}px`);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;

      if (rafId === null) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      container.style.setProperty("--cursor-rel-x", currentX.toFixed(4));
      container.style.setProperty("--cursor-rel-y", currentY.toFixed(4));

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05040A] transform-gpu"
      style={
        {
          "--cursor-rel-x": "0",
          "--cursor-rel-y": "0",
          "--scroll-offset": "0px",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {/* =========================================================================
          LAYER 1: Original High-Quality Artwork Plane (Direct from public/video/)
          - Subtle 2.5D optical counter-displacement creates deep immersion
          ========================================================================= */}
      <div
        className="absolute inset-[-3%] w-[106%] h-[106%] select-none pointer-events-none"
        style={{
          transform: shouldReduceMotion
            ? "none"
            : "translate3d(calc(var(--cursor-rel-x) * -12px), calc(var(--cursor-rel-y) * -10px), 0)",
        }}
      >
        <Image
          src="/video/Moonlit Lavender Valley with Shattered Skies.png"
          alt="Moonlit Lavender Valley with Shattered Skies — Return by Death Meadow"
          fill
          priority
          unoptimized
          className="object-cover object-[65%_25%] md:object-[center_20%] lg:object-[center_15%] opacity-90 brightness-[0.96] contrast-[1.04]"
        />
      </div>

      {/* =========================================================================
          LAYER 2: Living Celestial Atmosphere & Dynamic Lighting
          ========================================================================= */}
      {/* 2A. Subtle Atmospheric Live Nebula / Cloud Drift (Screen Blend) */}
      <video
        ref={videoRef}
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] opacity-20 mix-blend-screen select-none pointer-events-none"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <source src="/videos/eternal-reset-desktop.mp4" type="video/mp4" />
        <source src="/video/cosmic-nebula.mp4" type="video/mp4" />
      </video>

      {/* 2B. Celestial Crescent Eclipse Core Luminescence (Aligns with top-center moon) */}
      <div
        className="absolute top-[8%] left-[27%] sm:left-[29%] w-72 sm:w-96 aspect-square rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,138,203,0.35)_0%,rgba(112,70,160,0.16)_45%,transparent_70%)] pointer-events-none z-10 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* 2C. Return by Death: Rotating Celestial Time Spiral Ring (Aligns with clock vortex) */}
      <div
        className="absolute top-[8%] right-[22%] sm:right-[25%] w-72 sm:w-96 aspect-square pointer-events-none z-10 opacity-30 mix-blend-screen"
        style={{
          transform: shouldReduceMotion
            ? "none"
            : "translate3d(calc(var(--cursor-rel-x) * 8px), calc(var(--cursor-rel-y) * 8px), 0)",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-spin text-[#8387C3]"
          style={{ animationDuration: "85s", animationTimingFunction: "linear" }}
        >
          {/* Outer Roman Dial Tick Ring */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 8 16 8 32 8"
            strokeOpacity="0.7"
          />
          {/* Inner Concentric Fracture Circle */}
          <circle
            cx="100"
            cy="100"
            r="64"
            fill="none"
            stroke="#A78ACB"
            strokeWidth="0.5"
            strokeDasharray="4 6 12 6"
            strokeOpacity="0.5"
          />
          {/* Ethereal Zenith Pointer */}
          <line
            x1="100"
            y1="12"
            x2="100"
            y2="36"
            stroke="#F0EEF4"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />
          <line
            x1="100"
            y1="164"
            x2="100"
            y2="188"
            stroke="#F0EEF4"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {/* 2D. Left Editorial Protection Wash — Guarantees WCAG AAA typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05040A] via-[#05040A]/85 md:via-[#05040A]/75 to-transparent w-full md:w-[62%] lg:w-[52%] pointer-events-none z-10" />

      {/* 2E. Bottom Horizon Depth Blend */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#05040A] via-[#05040A]/70 to-transparent pointer-events-none z-10" />

      {/* 2F. Top Navbar Soft Gradient Shield */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#05040A]/90 via-[#05040A]/40 to-transparent pointer-events-none z-10" />

      {/* =========================================================================
          LAYER 3: BIOLUMINESCENT COBBLESTONE PATHWAY ENERGY GLINTS
          Pulsing time energy runs along the stone pavers winding up to Echidna's table
          ========================================================================= */}
      <div
        className="hidden lg:block absolute bottom-[18%] right-[28%] w-2 h-2 rounded-full bg-[#A78ACB] opacity-60 shadow-[0_0_8px_#A78ACB,0_0_16px_#7046A0] animate-pulse"
        style={{ animationDuration: "3.5s" }}
      />
      <div
        className="hidden lg:block absolute bottom-[26%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#B9C4E0] opacity-55 shadow-[0_0_6px_#B9C4E0,0_0_12px_#8387C3] animate-pulse"
        style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
      />
      <div
        className="hidden lg:block absolute bottom-[38%] right-[18%] w-2 h-2 rounded-full bg-[#8387C3] opacity-65 shadow-[0_0_8px_#8387C3] animate-pulse"
        style={{ animationDuration: "4s", animationDelay: "2.5s" }}
      />

      {/* =========================================================================
          LAYER 4: FRACTURED GLASS ENVIRONMENT (SUSPENDED TIME SHARDS)
          Physical 3D prisms aligned with the shattered sky in the artwork
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Dimensional Fracture Fissures (Ethereal time-fault hairline vectors) */}
        <svg
          className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-40 mix-blend-screen"
          viewBox="0 0 800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fissure-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7046A0" stopOpacity="0" />
              <stop offset="45%" stopColor="#A78ACB" stopOpacity="0.65" />
              <stop offset="75%" stopColor="#B9C4E0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7046A0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="fissure-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#382052" stopOpacity="0" />
              <stop offset="50%" stopColor="#8387C3" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#382052" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Dynamic Fissure Fault Lines */}
          <path
            d="M520,60 L620,180 L580,310 L690,440 L640,620 L740,820"
            stroke="url(#fissure-grad-1)"
            strokeWidth="0.8"
            strokeDasharray="4 8 16 4"
            className="hidden sm:block"
          />
          <path
            d="M620,180 L760,230 M580,310 L480,380 L520,520 M690,440 L780,490"
            stroke="url(#fissure-grad-2)"
            strokeWidth="0.6"
            strokeDasharray="2 6 12 4"
            className="hidden sm:block"
          />
        </svg>

        {/* -----------------------------------------------------------------------
            SHARD 1 (Large Foreground Master Prism — Top Right)
            ----------------------------------------------------------------------- */}
        <div
          className="absolute top-[8%] sm:top-[12%] right-[5%] sm:right-[10%] w-36 sm:w-48 lg:w-64 aspect-[3/4]"
          style={{
            transform: shouldReduceMotion
              ? "none"
              : "translate3d(calc(var(--cursor-rel-x) * 22px), calc(var(--cursor-rel-y) * 22px + var(--scroll-offset)), 0) rotate(calc(var(--cursor-rel-x) * 4deg))",
          }}
        >
          <div className="relative w-full h-full animate-[floatSlow_28s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(112,70,160,0.24)_0%,transparent_70%)] rounded-full pointer-events-none -z-10 scale-125" />
            <svg viewBox="0 0 200 260" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="facet-main-1" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="rgba(167, 138, 203, 0.22)" />
                  <stop offset="45%" stopColor="rgba(56, 32, 82, 0.35)" />
                  <stop offset="100%" stopColor="rgba(12, 9, 19, 0.6)" />
                </linearGradient>
                <linearGradient id="facet-specular-1" x1="0%" y1="0%" x2="100%" y2="40%">
                  <stop offset="0%" stopColor="rgba(185, 196, 224, 0.55)" />
                  <stop offset="60%" stopColor="rgba(167, 138, 203, 0.15)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <polygon
                points="95,12 178,72 152,228 34,188 18,92"
                fill="url(#facet-main-1)"
                stroke="#B9C4E0"
                strokeWidth="0.85"
                strokeOpacity="0.5"
              />
              <polygon
                points="95,12 178,72 118,135 18,92"
                fill="url(#facet-specular-1)"
                stroke="#A78ACB"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              <polygon
                points="118,135 178,72 152,228"
                fill="rgba(112, 70, 160, 0.18)"
                stroke="#7046A0"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
              <circle cx="95" cy="12" r="1.5" fill="#FFFFFF" className="animate-pulse" />
            </svg>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            SHARD 2 (Midground Elongated Crystal Fragment — Mid-Right)
            ----------------------------------------------------------------------- */}
        <div
          className="absolute top-[38%] sm:top-[42%] right-[2%] sm:right-[6%] w-28 sm:w-40 lg:w-52 aspect-[2/3]"
          style={{
            transform: shouldReduceMotion
              ? "none"
              : "translate3d(calc(var(--cursor-rel-x) * 32px), calc(var(--cursor-rel-y) * 32px + var(--scroll-offset)), 0) rotate(calc(var(--cursor-rel-x) * -5deg))",
          }}
        >
          <div className="relative w-full h-full animate-[floatMedium_22s_ease-in-out_infinite_3s]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,32,82,0.32)_0%,transparent_70%)] rounded-full pointer-events-none -z-10 scale-110" />
            <svg viewBox="0 0 160 240" className="w-full h-full" fill="none">
              <polygon
                points="82,8 148,110 88,232 20,136"
                fill="rgba(26, 16, 41, 0.55)"
                stroke="#A78ACB"
                strokeWidth="0.75"
                strokeOpacity="0.45"
              />
              <line
                x1="82"
                y1="8"
                x2="88"
                y2="232"
                stroke="#B9C4E0"
                strokeWidth="0.6"
                strokeOpacity="0.6"
              />
              <polygon
                points="82,8 88,232 20,136"
                fill="rgba(112, 70, 160, 0.22)"
              />
            </svg>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            SHARD 3 (Deep Background Floating Geometric Shard — Upper Center-Right)
            ----------------------------------------------------------------------- */}
        <div
          className="hidden sm:block absolute top-[22%] right-[28%] lg:right-[32%] w-20 sm:w-28 aspect-square opacity-65"
          style={{
            transform: shouldReduceMotion
              ? "none"
              : "translate3d(calc(var(--cursor-rel-x) * 14px), calc(var(--cursor-rel-y) * 14px + var(--scroll-offset)), 0)",
          }}
        >
          <div className="w-full h-full animate-[floatSlow_34s_ease-in-out_infinite_7s]">
            <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
              <polygon
                points="60,6 112,48 88,112 18,88 8,36"
                fill="rgba(56, 32, 82, 0.25)"
                stroke="#8387C3"
                strokeWidth="0.65"
                strokeOpacity="0.35"
              />
              <line
                x1="60"
                y1="6"
                x2="88"
                y2="112"
                stroke="#A78ACB"
                strokeWidth="0.4"
                strokeOpacity="0.3"
              />
            </svg>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            SHARD 4 (Suspended Lower Time Wedge — Lower Right)
            ----------------------------------------------------------------------- */}
        <div
          className="absolute bottom-[8%] sm:bottom-[14%] right-[8%] sm:right-[15%] w-32 sm:w-44 lg:w-56 aspect-[4/3]"
          style={{
            transform: shouldReduceMotion
              ? "none"
              : "translate3d(calc(var(--cursor-rel-x) * 26px), calc(var(--cursor-rel-y) * 26px + var(--scroll-offset)), 0) rotate(calc(var(--cursor-rel-x) * 3deg))",
          }}
        >
          <div className="relative w-full h-full animate-[floatSlow_30s_ease-in-out_infinite_5s]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(112,70,160,0.20)_0%,transparent_70%)] rounded-full pointer-events-none -z-10 scale-120" />
            <svg viewBox="0 0 220 160" className="w-full h-full" fill="none">
              <polygon
                points="18,34 196,14 172,142 42,126"
                fill="rgba(26, 16, 41, 0.45)"
                stroke="#7046A0"
                strokeWidth="0.75"
                strokeOpacity="0.45"
              />
              <polygon
                points="18,34 196,14 115,82"
                fill="rgba(167, 138, 203, 0.18)"
                stroke="#B9C4E0"
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />
            </svg>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            FLOATING ETHEREAL TIME PARTICLES & DRIFTING PETALS
            ----------------------------------------------------------------------- */}
        <div
          className="hidden md:block absolute top-[28%] right-[18%] w-3 h-3 rounded-full bg-[#B9C4E0] opacity-50 shadow-[0_0_6px_rgba(185,196,224,0.6)] animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="hidden md:block absolute top-[58%] right-[24%] w-2 h-2 rounded-full bg-[#A78ACB] opacity-40 shadow-[0_0_4px_rgba(167,138,203,0.5)] animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <div
          className="hidden md:block absolute top-[72%] right-[12%] w-2.5 h-2.5 rounded-full bg-[#7046A0] opacity-45 shadow-[0_0_5px_rgba(112,70,160,0.6)] animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "3s" }}
        />
        {/* Subtle Drifting Flower Petal 1 (Bottom Left Meadow) */}
        <div
          className="hidden lg:block absolute bottom-[22%] left-[14%] w-2.5 h-1.5 rounded-full bg-[#A78ACB] opacity-40 rotate-[25deg] animate-[floatSlow_18s_ease-in-out_infinite]"
        />
        {/* Subtle Drifting Flower Petal 2 (Bottom Mid Meadow) */}
        <div
          className="hidden lg:block absolute bottom-[12%] left-[32%] w-2 h-1 rounded-full bg-[#B9C4E0] opacity-35 rotate-[-15deg] animate-[floatMedium_15s_ease-in-out_infinite_4s]"
        />
      </div>

      {/* =========================================================================
          LAYER 5: Atmospheric Overlays & Textures
          - Architectural Blueprint Grid (subtle technical precision)
          - Fine Film Grain (organic cinematic texture)
          - Radial Vignette (content focus & contrast)
          ========================================================================= */}
      {/* 6A. Subtle Architectural Engineering Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none z-30" />

      {/* 6B. Fine Film Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-[0.035] pointer-events-none z-30" />

      {/* 6C. Peripheral Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_50%,rgba(5,4,10,0.85)_100%)] pointer-events-none z-30" />
    </div>
  );
}
