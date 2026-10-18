"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "motion/react";

const LINE_1 = ["A", "R", "Y", "A", "N"];
const LINE_2 = ["K", "E", "L", "K", "A", "R", "."];

export type HeroAnimPhase =
  | "IDLE"
  | "INTRO"
  | "TYPING_ARYAN"
  | "WORD_PAUSE"
  | "TYPING_KELKAR"
  | "GLITCH_BURST"
  | "COMPLETE";

export const TIMING = {
  INTRO_DELAY: 320,          // ms before typing 'A' begins (Phase 1)
  CHAR_INTERVAL_ARYAN: 95,   // ms per character in "ARYAN" (Phase 2)
  WORD_PAUSE: 300,           // ms pause between ARYAN and KELKAR (Phase 3)
  CHAR_INTERVAL_KELKAR: 95,  // ms per character in "KELKAR." (Phase 4)
  PRE_GLITCH_PAUSE: 220,     // ms pause after typing completes before glitch burst
  GLITCH_DURATION: 600,      // ms duration of enhanced multi-layer glitch burst (Phase 5)
  LIGHT_SWEEP_DURATION: 750, // ms duration of lavender specular sweep
  HOVER_COOLDOWN: 1200,      // ms cooldown between hover interactions
  AMBIENT_INTERVAL: 16000,   // ms interval between occasional subtle ambient micro-glitches (Effect G)
} as const;

interface AnimState {
  phase: HeroAnimPhase;
  chars1: number;
  chars2: number;
  cursorLine: 1 | 2;
  showCursor: boolean;
  isGlitching: boolean;
}

export function HeroName() {
  const shouldReduceMotion = useReducedMotion();

  const [animState, setAnimState] = useState<AnimState>(() => ({
    phase: shouldReduceMotion ? "COMPLETE" : "INTRO",
    chars1: shouldReduceMotion ? LINE_1.length : 0,
    chars2: shouldReduceMotion ? LINE_2.length : 0,
    cursorLine: 1,
    showCursor: !shouldReduceMotion,
    isGlitching: false,
  }));

  const [ambientGlitch, setAmbientGlitch] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);
  const cooldownRef = useRef(false);
  const hoverTimersRef = useRef<NodeJS.Timeout[]>([]);

  // Sequential, deterministic typewriter & initial glitch scheduler
  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let isCancelled = false;
    const timers: NodeJS.Timeout[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const t = setTimeout(() => {
        if (!isCancelled) fn();
      }, ms);
      timers.push(t);
      return t;
    };

    let elapsed = TIMING.INTRO_DELAY;

    // PHASE 2: Type "ARYAN" character by character
    for (let i = 1; i <= LINE_1.length; i++) {
      const count = i;
      schedule(() => {
        setAnimState((prev) => ({
          ...prev,
          phase: "TYPING_ARYAN",
          cursorLine: 1,
          showCursor: true,
          chars1: count,
        }));
      }, elapsed);
      elapsed += TIMING.CHAR_INTERVAL_ARYAN;
    }

    // PHASE 3: Noticeable Word Pause (Anticipation)
    schedule(() => {
      setAnimState((prev) => ({
        ...prev,
        phase: "WORD_PAUSE",
        cursorLine: 1,
        showCursor: true,
        chars1: LINE_1.length,
      }));
    }, elapsed);
    elapsed += TIMING.WORD_PAUSE;

    // PHASE 4: Type "KELKAR." character by character
    for (let i = 1; i <= LINE_2.length; i++) {
      const count = i;
      schedule(() => {
        setAnimState((prev) => ({
          ...prev,
          phase: "TYPING_KELKAR",
          cursorLine: 2,
          showCursor: true,
          chars2: count,
        }));
      }, elapsed);
      elapsed += TIMING.CHAR_INTERVAL_KELKAR;
    }

    // Typing Finished: Fade out cursor before glitch
    schedule(() => {
      setAnimState((prev) => ({
        ...prev,
        showCursor: false,
      }));
    }, elapsed);
    elapsed += TIMING.PRE_GLITCH_PAUSE;

    // PHASE 5: Enhanced Multi-Layered Cinematic Glitch Burst (600ms)
    schedule(() => {
      setAnimState((prev) => ({
        ...prev,
        phase: "GLITCH_BURST",
        isGlitching: true,
      }));
    }, elapsed);

    // Specular Lavender Light Sweep
    schedule(() => {
      setSweepActive(true);
    }, elapsed + 220);

    schedule(() => {
      setSweepActive(false);
    }, elapsed + 220 + TIMING.LIGHT_SWEEP_DURATION);

    elapsed += TIMING.GLITCH_DURATION;

    // PHASE 6: Final Settle into crisp, stable typography
    schedule(() => {
      setAnimState((prev) => ({
        ...prev,
        phase: "COMPLETE",
        isGlitching: false,
        showCursor: false,
      }));
    }, elapsed);

    return () => {
      isCancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, [shouldReduceMotion]);

  // EFFECT G: Occasional subtle ambient micro-glitch after reveal is complete
  useEffect(() => {
    if (shouldReduceMotion || animState.phase !== "COMPLETE") {
      return;
    }

    let ambientTimer: NodeJS.Timeout | null = null;
    let resetTimer: NodeJS.Timeout | null = null;

    const scheduleAmbient = () => {
      ambientTimer = setTimeout(() => {
        if (typeof document !== "undefined" && (document.hidden || cooldownRef.current)) {
          scheduleAmbient();
          return;
        }

        setAmbientGlitch(true);
        resetTimer = setTimeout(() => {
          setAmbientGlitch(false);
          scheduleAmbient();
        }, 180);
      }, TIMING.AMBIENT_INTERVAL);
    };

    scheduleAmbient();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (ambientTimer) clearTimeout(ambientTimer);
        if (resetTimer) clearTimeout(resetTimer);
        setAmbientGlitch(false);
      } else {
        scheduleAmbient();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (ambientTimer) clearTimeout(ambientTimer);
      if (resetTimer) clearTimeout(resetTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [shouldReduceMotion, animState.phase]);

  // Clean up hover interaction timers on unmount
  useEffect(() => {
    const timers = hoverTimersRef.current;
    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  // Restrained interactive response on pointer hover / focus
  const handleInteraction = useCallback(() => {
    if (shouldReduceMotion || animState.phase !== "COMPLETE" || cooldownRef.current) {
      return;
    }

    cooldownRef.current = true;
    setAnimState((prev) => ({ ...prev, isGlitching: true }));
    setSweepActive(true);

    const t1 = setTimeout(() => {
      setAnimState((prev) => ({ ...prev, isGlitching: false }));
    }, 280);

    const t2 = setTimeout(() => {
      setSweepActive(false);
    }, 700);

    const t3 = setTimeout(() => {
      cooldownRef.current = false;
    }, TIMING.HOVER_COOLDOWN);

    hoverTimersRef.current.push(t1, t2, t3);
  }, [shouldReduceMotion, animState.phase]);

  const showCursor = animState.showCursor && !shouldReduceMotion;
  const cursorLine = animState.cursorLine;

  const isGlitching = (animState.isGlitching || ambientGlitch) && !shouldReduceMotion;
  const glitchModifierClass = animState.isGlitching
    ? "hero-glitch-active"
    : ambientGlitch
    ? "hero-glitch-ambient"
    : "";

  return (
    <h1
      aria-label="Aryan Kelkar."
      onMouseEnter={handleInteraction}
      onFocus={handleInteraction}
      tabIndex={0}
      className={`font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[6.2rem] xl:text-[7.2rem] 2xl:text-[7.8rem] font-normal tracking-tight text-[#F0EEF4] leading-[0.9] select-none relative group cursor-default outline-none focus-visible:ring-1 focus-visible:ring-[#8387C3]/40 rounded-sm transition-all duration-300 ${
        isGlitching ? glitchModifierClass : ""
      }`}
    >
      {/* Screen-reader only accessible label */}
      <span className="sr-only">Aryan Kelkar.</span>

      {/* Main Visible Typography Layer with Effect C: Micro-Jitter & Effect D: Frame Corruption Flash */}
      <span
        aria-hidden="true"
        className={`block relative transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(131,135,195,0.40)] ${
          animState.isGlitching && !shouldReduceMotion ? "hero-base-jitter-flash" : ""
        }`}
      >
        {/* Line 1: ARYAN */}
        <span
          className="hero-glitch-line block whitespace-nowrap overflow-visible"
          data-text="ARYAN"
        >
          {/* Cursor at position 0 before typing begins */}
          {showCursor && cursorLine === 1 && animState.chars1 === 0 && (
            <span className="inline-block w-0 relative align-baseline">
              <span className="absolute left-0 bottom-[0.08em] h-[0.82em] w-[2px] sm:w-[3px] lg:w-[4px] bg-[#8387C3] shadow-[0_0_8px_rgba(131,135,195,0.7)] hero-cursor-blink pointer-events-none" />
            </span>
          )}

          {LINE_1.map((char, index) => {
            const isRevealed = shouldReduceMotion || index < animState.chars1;
            const hasCursor = showCursor && cursorLine === 1 && animState.chars1 === index + 1;
            return (
              <span key={`l1-${index}`} className="inline-block relative">
                <span
                  className={`inline-block transition-all duration-120 ${
                    isRevealed
                      ? "opacity-100 translate-y-0 filter-none"
                      : "opacity-0 translate-y-1.5 blur-[1px]"
                  }`}
                >
                  {char}
                </span>
                {hasCursor && (
                  <span className="absolute left-full bottom-[0.08em] h-[0.82em] w-[2px] sm:w-[3px] lg:w-[4px] bg-[#8387C3] shadow-[0_0_8px_rgba(131,135,195,0.7)] hero-cursor-blink pointer-events-none" />
                )}
              </span>
            );
          })}
        </span>

        {/* Line 2: KELKAR. */}
        <span
          className="hero-glitch-line block whitespace-nowrap overflow-visible italic font-light text-[#8387C3] transition-colors duration-400 group-hover:text-[#F0EEF4]"
          data-text="KELKAR."
        >
          {/* Cursor at position 0 before typing begins on line 2 */}
          {showCursor && cursorLine === 2 && animState.chars2 === 0 && (
            <span className="inline-block w-0 relative align-baseline">
              <span className="absolute left-0 bottom-[0.08em] h-[0.82em] w-[2px] sm:w-[3px] lg:w-[4px] bg-[#8387C3] shadow-[0_0_8px_rgba(131,135,195,0.7)] hero-cursor-blink pointer-events-none" />
            </span>
          )}

          {LINE_2.map((char, index) => {
            const isRevealed = shouldReduceMotion || index < animState.chars2;
            const hasCursor = showCursor && cursorLine === 2 && animState.chars2 === index + 1;
            return (
              <span key={`l2-${index}`} className="inline-block relative">
                <span
                  className={`inline-block transition-all duration-120 ${
                    isRevealed
                      ? "opacity-100 translate-y-0 filter-none"
                      : "opacity-0 translate-y-1.5 blur-[1px]"
                  }`}
                >
                  {char}
                </span>
                {hasCursor && (
                  <span className="absolute left-full bottom-[0.08em] h-[0.82em] w-[2px] sm:w-[3px] lg:w-[4px] bg-[#8387C3] shadow-[0_0_8px_rgba(131,135,195,0.7)] hero-cursor-blink pointer-events-none" />
                )}
              </span>
            );
          })}
        </span>
      </span>

      {/* Effect E: Digital Glitch Raster Scanline Overlay */}
      {animState.isGlitching && !shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none hero-glitch-scanlines z-20 rounded-sm"
        />
      )}

      {/* Archival Micro-Scan Line during Glitch */}
      {animState.isGlitching && !shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00E5FF]/60 via-[#A5A9E6]/90 to-transparent pointer-events-none hero-scan-line z-30"
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
