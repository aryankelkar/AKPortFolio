"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "motion/react";

const LINE_1 = ["A", "R", "Y", "A", "N"];
const LINE_2 = ["K", "E", "L", "K", "A", "R", "."];

export function HeroName() {
  const shouldReduceMotion = useReducedMotion();
  const [glitchActive, setGlitchActive] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const cooldownRef = useRef(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const addTimer = useCallback((fn: () => void, ms: number) => {
    const timer = setTimeout(fn, ms);
    timersRef.current.push(timer);
    return timer;
  }, []);

  const isReadyForHover = shouldReduceMotion || introComplete;

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    // 1. Initial Glitch: Fires briefly at 1020ms right as characters settle
    addTimer(() => {
      setGlitchActive(true);
      addTimer(() => setGlitchActive(false), 220);
    }, 1020);

    // 2. Initial Light Sweep: Fires at 1220ms as specular reflection across the typography
    addTimer(() => {
      setSweepActive(true);
      addTimer(() => setSweepActive(false), 850);
    }, 1220);

    // 3. Complete intro phase at 2100ms
    addTimer(() => {
      setIntroComplete(true);
    }, 2100);

    const activeTimers = timersRef.current;
    return () => {
      activeTimers.forEach((t) => clearTimeout(t));
    };
  }, [shouldReduceMotion, addTimer]);

  // Restrained interactive response on pointer hover
  const handleInteraction = useCallback(() => {
    if (shouldReduceMotion || !isReadyForHover || cooldownRef.current) {
      return;
    }

    cooldownRef.current = true;
    setGlitchActive(true);
    setSweepActive(true);

    addTimer(() => setGlitchActive(false), 180);
    addTimer(() => setSweepActive(false), 700);
    addTimer(() => {
      cooldownRef.current = false;
    }, 1200);
  }, [shouldReduceMotion, isReadyForHover, addTimer]);

  return (
    <h1
      aria-label="Aryan Kelkar."
      onMouseEnter={handleInteraction}
      onFocus={handleInteraction}
      tabIndex={0}
      className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[6.2rem] xl:text-[7.2rem] 2xl:text-[7.8rem] font-normal tracking-tight text-[#F0EEF4] leading-[0.9] select-none relative group cursor-default outline-none focus-visible:ring-1 focus-visible:ring-[#8387C3]/40 rounded-sm"
    >
      {/* Screen-reader only accessible label */}
      <span className="sr-only">Aryan Kelkar.</span>

      {/* Main Visible Typography Layer */}
      <span
        aria-hidden="true"
        className="block relative transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(131,135,195,0.40)]"
      >
        {/* Line 1: ARYAN */}
        <span className="block whitespace-nowrap overflow-visible">
          {LINE_1.map((char, index) => (
            <span
              key={`line1-${index}`}
              className={`inline-block ${
                shouldReduceMotion ? "opacity-100" : "hero-char-animate"
              }`}
              style={
                shouldReduceMotion
                  ? undefined
                  : { animationDelay: `${0.18 + index * 0.035}s` }
              }
            >
              {char}
            </span>
          ))}
        </span>

        {/* Line 2: KELKAR. */}
        <span className="block whitespace-nowrap overflow-visible italic font-light text-[#8387C3] transition-colors duration-400 group-hover:text-[#F0EEF4]">
          {LINE_2.map((char, index) => (
            <span
              key={`line2-${index}`}
              className={`inline-block ${
                shouldReduceMotion ? "opacity-100" : "hero-char-animate"
              }`}
              style={
                shouldReduceMotion
                  ? undefined
                  : { animationDelay: `${0.48 + index * 0.035}s` }
              }
            >
              {char}
            </span>
          ))}
        </span>
      </span>

      {/* Restrained Digital Glitch Layer 1: Lavender Offset Slice */}
      {glitchActive && !shouldReduceMotion && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none hero-glitch-1 text-[#8387C3] z-20"
        >
          <span className="block whitespace-nowrap">ARYAN</span>
          <span className="block whitespace-nowrap italic font-light">KELKAR.</span>
        </span>
      )}

      {/* Restrained Digital Glitch Layer 2: Soft White Counter-Shift */}
      {glitchActive && !shouldReduceMotion && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none hero-glitch-2 text-[#F0EEF4] z-20"
        >
          <span className="block whitespace-nowrap">ARYAN</span>
          <span className="block whitespace-nowrap italic font-light">KELKAR.</span>
        </span>
      )}

      {/* Archival Micro-Scan Line during Glitch */}
      {glitchActive && !shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A5A9E6]/75 to-transparent pointer-events-none hero-scan-line z-30"
        />
      )}

      {/* Lavender Specular Light Sweep Beam */}
      {sweepActive && !shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen z-30 rounded-lg"
        >
          <div className="absolute top-0 bottom-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-transparent via-[#8387C3]/65 to-transparent blur-[3px] hero-light-sweep-beam" />
        </div>
      )}
    </h1>
  );
}
