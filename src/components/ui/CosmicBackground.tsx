"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star generation with realistic astronomical magnitudes
    const starCount = Math.min(Math.floor((width * height) / 9000), 160);
    interface Star {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      color: string;
    }

    const stars: Star[] = [];
    const colors = ["#FFFFFF", "#E0E7FF", "#C7D2FE", "#DDD6FE", "#F5F3FF"];

    for (let i = 0; i < starCount; i++) {
      const isBrighter = Math.random() < 0.12;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isBrighter ? Math.random() * 0.9 + 0.8 : Math.random() * 0.6 + 0.3,
        baseAlpha: isBrighter ? Math.random() * 0.4 + 0.5 : Math.random() * 0.35 + 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render stars with gentle, non-distracting twinkling
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        let alpha = star.baseAlpha;
        if (!shouldReduceMotion) {
          alpha += Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25;
          alpha = Math.max(0.08, Math.min(1, alpha));
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (!shouldReduceMotion) {
        time += 1;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#101116]"
      aria-hidden="true"
    >
      {/* 1. Base Graphite Canvas */}
      <div className="absolute inset-0 bg-[#101116]" />

      {/* 2. Deep Nebula Formations (Slow Breathing Violet-Indigo Gas Clouds) */}
      <div className="absolute inset-0 opacity-75 mix-blend-screen transition-opacity duration-1000">
        {/* Upper-Right Hero Nebula Plume */}
        <div className="absolute -top-[10%] -right-[15%] w-[850px] h-[850px] rounded-full bg-gradient-to-br from-[#2E2864]/40 via-[#1C1844]/25 to-transparent blur-[140px] animate-cosmic-drift" />

        {/* Center-Left Biographical & Project Nebula Plume */}
        <div className="absolute top-[35%] -left-[10%] w-[900px] h-[750px] rounded-full bg-gradient-to-tr from-[#1E1B4B]/35 via-[#161934]/20 to-transparent blur-[160px] animate-cosmic-drift-slow" />

        {/* Lower-Right Contact Nebula Depth */}
        <div className="absolute -bottom-[10%] right-[5%] w-[750px] h-[750px] rounded-full bg-gradient-to-t from-[#262152]/30 via-[#171A38]/20 to-transparent blur-[140px]" />
      </div>

      {/* 3. Celestial Planetary Limb (Curving Horizon on Right Side) */}
      <div className="absolute top-[6%] -right-[260px] sm:-right-[220px] lg:-right-[180px] w-[580px] sm:w-[680px] lg:w-[780px] aspect-square rounded-full pointer-events-none opacity-45 sm:opacity-55 lg:opacity-65 select-none">
        {/* Planetary Body Shadow */}
        <div className="absolute inset-0 rounded-full bg-[#0D0E14] border border-[rgba(131,135,195,0.18)] shadow-[inset_-30px_-30px_90px_rgba(0,0,0,0.95)]" />
        {/* Atmospheric Limb Glow / Rayleigh Scattering Arc */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#8387C3]/35 via-[#4E5296]/15 to-transparent blur-md" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-l from-[#A5A9E6]/25 to-transparent blur-xl" />
      </div>

      {/* 4. Canvas Starfield Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 5. Delicate Architectural Grid (Subtle at 2.5% opacity) */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50" />

      {/* 6. Extremely Fine Organic Film Grain */}
      <div className="absolute inset-0 bg-grain opacity-85" />

      {/* 7. Soft Vignette to anchor content readability */}
      <div className="absolute inset-0 bg-radial-gradient-to-c from-transparent via-[#101116]/40 to-[#101116]/80 pointer-events-none" />
    </div>
  );
}
