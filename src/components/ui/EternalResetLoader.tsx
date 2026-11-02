"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

/**
 * EternalResetLoader — Dimensional Transition & Initialization Experience
 *
 * Inspired by the psychological atmosphere of Re:ZERO's Return by Death:
 * - Deep dimensional void (#05040A)
 * - Fractured circular time seal with rotating geometric rings
 * - Central crystalline time shard with subtle violet radiance
 * - Editorial minimal typography: ETERNAL RESET // FRACTURED TIME
 * - Non-blocking: automatically transitions in ~950ms, never blocking user navigation
 * - Respects prefers-reduced-motion and session persistence
 */
export function EternalResetLoader() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, bypass the loader entirely
    if (shouldReduceMotion) {
      return;
    }

    // Check if user already saw the loader during this browser session
    let alreadySeen = false;
    try {
      alreadySeen = Boolean(sessionStorage.getItem("eternal_reset_intro_seen"));
    } catch {
      // Ignore storage errors in restricted contexts
    }

    if (alreadySeen) {
      return;
    }

    // Async initialization avoids synchronous setState in effect body
    const initTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    // Initiate fade-out after 950ms
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      try {
        sessionStorage.setItem("eternal_reset_intro_seen", "true");
      } catch {
        // Ignore storage errors
      }
    }, 950);

    // Completely unmount after fade transition
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1350);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [shouldReduceMotion]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05040A] text-[#F0EEF4] transition-opacity duration-400 ease-out pointer-events-none select-none ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Return by Death Realm Ambient Backdrop */}
      <div className="absolute inset-0 select-none pointer-events-none overflow-hidden opacity-30">
        <Image
          src="/video/Moonlit Lavender Valley with Shattered Skies.png"
          alt="Dimensional Realm Backdrop"
          fill
          priority
          unoptimized
          className="object-cover object-[center_20%] scale-105 filter brightness-[0.85]"
        />
      </div>

      {/* Background Dimensional Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,32,82,0.45)_0%,rgba(12,9,19,0.85)_60%,#05040A_100%)]" />

      {/* Center Fractured Time Seal Glyph */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          {/* Outer Segmented Ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-spin text-[#7046A0]"
            style={{ animationDuration: "16s", animationTimingFunction: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 8 18 12 30 6"
              strokeOpacity="0.6"
            />
          </svg>

          {/* Counter-Rotating Inner Time Ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-spin text-[#A78ACB]"
            style={{
              animationDuration: "11s",
              animationDirection: "reverse",
              animationTimingFunction: "linear",
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="2 12 24 8 8 16"
              strokeOpacity="0.45"
            />
          </svg>

          {/* Central Fractured Time Shard (Faceted Diamond/Prism) */}
          <div className="relative w-8 h-12 flex items-center justify-center">
            {/* Shard Glow */}
            <div className="absolute inset-0 rounded-full bg-[#8387C3] opacity-35 blur-md" />

            {/* Fractured Crystalline Facets */}
            <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-[0_0_12px_rgba(167,138,203,0.7)]">
              {/* Left Facet */}
              <polygon
                points="20,2 6,34 20,58"
                fill="rgba(112, 70, 160, 0.45)"
                stroke="#B9C4E0"
                strokeWidth="0.75"
              />
              {/* Right Facet */}
              <polygon
                points="20,2 34,26 20,58"
                fill="rgba(167, 138, 203, 0.3)"
                stroke="#A78ACB"
                strokeWidth="0.75"
              />
              {/* Central Spine Fissure */}
              <line
                x1="20"
                y1="2"
                x2="20"
                y2="58"
                stroke="#F0EEF4"
                strokeWidth="0.8"
                strokeOpacity="0.85"
              />
            </svg>
          </div>
        </div>

        {/* Minimalist Editorial Typography */}
        <div className="mt-7 text-center space-y-1.5">
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#A78ACB] font-medium">
            ETERNAL RESET
          </p>
          <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#8A8CAC] opacity-60">
            FRACTURED TIME // DIMENSIONAL INIT
          </p>
        </div>

        {/* Subtle Horizontal Progress Hairline */}
        <div className="w-28 sm:w-36 h-[1px] mt-4 bg-gradient-to-r from-transparent via-[#8387C3]/60 to-transparent animate-pulse" />
      </div>
    </div>
  );
}
