"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import "./witch-seal-cursor.css";

interface TemporalRipple {
  id: number;
  x: number;
  y: number;
}

// 12 Delicate Occult Rune Glyphs (Refined hairline geometry, non-noisy)
const RUNE_GLYPHS = [
  "M -1.2,-0.9 L 1.2,-0.9 M 0,-1.1 L 0,1.1 M -0.7,0.7 L 0.7,0.7",
  "M -0.9,-0.9 L 0,1.1 L 0.9,-0.9 M -0.5,0 L 0.5,0",
  "M 0,-1.1 A 0.9 0.9 0 1 1 -0.01,-1.1 M 0,-0.3 L 0,0.3",
  "M -0.9,-0.9 L 0.9,0.9 M -0.9,0.9 L 0.9,-0.9",
  "M -1.1,0 L 1.1,0 M -0.5,-0.9 L 0.5,0.9",
  "M -0.9,0.7 L 0,-1.1 L 0.9,0.7 Z",
  "M -0.8,-0.7 Q 0,0 -0.8,0.7 M 0.8,-0.7 Q 0,0 0.8,0.7",
  "M -0.9,-0.9 L 0.9,-0.9 L 0,0 L 0.9,0.9 L -0.9,0.9 Z",
  "M 0,-1.1 L 0,1.1 M -0.9,-0.5 L 0,0 L -0.9,0.5",
  "M -0.9,-0.9 L 0.9,0.9 M 0,-1.1 L 0,1.1",
  "M -0.7,-0.9 A 0.7 0.7 0 0 1 0.7,-0.9 M 0,-0.9 L 0,1.1",
  "M -0.9,-0.9 L 0,0 L 0.9,-0.9 M 0,0 L 0,1.1",
];

/**
 * WitchSealCursor — THE WITCH'S TEMPORAL SEAL (REFINED)
 *
 * Refined implementation matching the authoritative visual specification:
 * - Pure luminous white triangular pointer (slightly widened, soft violet rim).
 * - Compact Witch Seal with 3 distinct visual layers:
 *   1. Inner luminous circular ring & central 4-pointed radiant star.
 *   2. Fine ornamental inscription ring with delicate runes.
 *   3. Outer ring with 4 cardinal diamond markers (sequential illumination on hover).
 * - Movement: No long trails or ghost arrows. Subtle short-lived afterimage + velocity glow.
 * - Click: Polish temporal ripple (3 concentric waves + 6 crystalline fragments).
 * - Active: Peak illumination with controlled glow, preserving interface text visibility.
 */
export function WitchSealCursor() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActiveLink, setIsActiveLink] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [ripples, setRipples] = useState<TemporalRipple[]>([]);
  const [motionIntensity, setMotionIntensity] = useState(0);

  // Instant pointer coordinates (Tip hotspot at mouse position)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-frequency responsive spring for butter-smooth pointer movement with zero perceived lag
  const pointerSpringConfig = { damping: 36, stiffness: 720, mass: 0.08 };
  const smoothPointerX = useSpring(mouseX, pointerSpringConfig);
  const smoothPointerY = useSpring(mouseY, pointerSpringConfig);

  // Dynamic aerodynamic banking tilt
  const cursorTilt = useMotionValue(0);
  const smoothCursorTilt = useSpring(cursorTilt, { damping: 22, stiffness: 280, mass: 0.1 });

  // Smooth trailing spring for the surrounding Witch Seal (Organic inertia)
  const sealSpringConfig = { damping: 26, stiffness: 360, mass: 0.16 };
  const smoothSealX = useSpring(mouseX, sealSpringConfig);
  const smoothSealY = useSpring(mouseY, sealSpringConfig);

  // Inertia springs for the Witch's wake (flowing ethereal violet comet stream)
  const wake1SpringConfig = { damping: 24, stiffness: 320, mass: 0.14 };
  const smoothWake1X = useSpring(mouseX, wake1SpringConfig);
  const smoothWake1Y = useSpring(mouseY, wake1SpringConfig);

  const wake2SpringConfig = { damping: 18, stiffness: 180, mass: 0.22 };
  const smoothWake2X = useSpring(mouseX, wake2SpringConfig);
  const smoothWake2Y = useSpring(mouseY, wake2SpringConfig);

  const isVisibleRef = useRef(false);
  const lastPosRef = useRef({ x: -100, y: -100, time: 0 });
  const velocityRafRef = useRef<number | null>(null);
  const currentSpeedRef = useRef(0);
  const rippleIdRef = useRef(0);
  const initialNavSkipRef = useRef(true);

  // Navigation: Brief reverse rotation on page change
  useEffect(() => {
    if (initialNavSkipRef.current) {
      initialNavSkipRef.current = false;
      return;
    }
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 680);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Click Temporal Ripple
  const triggerRipple = useCallback((x: number, y: number) => {
    const id = ++rippleIdRef.current;
    setRipples((prev) => [...prev.slice(-2), { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 540);
  }, []);

  useEffect(() => {
    // Only mount on desktop devices with fine pointer (mouse/trackpad) and no reduced-motion preference
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    // Velocity & Motion Tracker
    const updateVelocity = () => {
      currentSpeedRef.current *= 0.84;
      if (currentSpeedRef.current < 0.4) {
        currentSpeedRef.current = 0;
        cursorTilt.set(0);
      }
      const intensity = Math.min(currentSpeedRef.current / 26, 1);
      setMotionIntensity((prev) => (Math.abs(prev - intensity) > 0.04 ? intensity : prev));

      if (currentSpeedRef.current > 0.1) {
        velocityRafRef.current = requestAnimationFrame(updateVelocity);
      } else {
        velocityRafRef.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const now = performance.now();
      const dt = Math.max(now - lastPosRef.current.time, 16);
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);
      const speed = (dist / dt) * 16;

      // Dynamic banking tilt (smoothly bounded between -7deg and +7deg)
      const targetTilt = Math.max(-7, Math.min(7, dx * 0.35));
      cursorTilt.set(targetTilt);

      lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };
      currentSpeedRef.current = speed;

      if (!velocityRafRef.current && speed > 1.5) {
        velocityRafRef.current = requestAnimationFrame(updateVelocity);
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      triggerRipple(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    let curHovered = false;
    let curActive = false;
    let curInputHovered = false;
    let curText = "";

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Form inputs, textarea, contenteditable: restore native text cursor
      const isInput = Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
      if (isInput) {
        if (!curInputHovered) { curInputHovered = true; setIsInputHovered(true); }
        if (curHovered) { curHovered = false; setIsHovered(false); }
        if (curActive) { curActive = false; setIsActiveLink(false); }
        if (curText) { curText = ""; setCursorText(""); }
        return;
      }
      if (curInputHovered) { curInputHovered = false; setIsInputHovered(false); }

      // 2. State 05 (UI Focus / Active Link): Primary buttons and header navigation
      const activeElement = target.closest(
        ".btn-fluid, .btn-primary, [data-cursor-active='true'], header nav a, header nav button"
      );
      if (activeElement) {
        if (!curActive) { curActive = true; setIsActiveLink(true); }
        if (!curHovered) { curHovered = true; setIsHovered(true); }
        const text = activeElement.getAttribute("data-cursor") || "";
        if (curText !== text) { curText = text; setCursorText(text); }
        return;
      }
      if (curActive) { curActive = false; setIsActiveLink(false); }

      // 3. State 02 (Hover): Interactive links, project cards, and buttons
      const interactive = target.closest("a, button, [role='button'], [data-cursor], .card-interactive");
      if (interactive) {
        if (!curHovered) { curHovered = true; setIsHovered(true); }
        const text = interactive.getAttribute("data-cursor") || "";
        if (curText !== text) { curText = text; setCursorText(text); }
      } else {
        if (curHovered) { curHovered = false; setIsHovered(false); }
        if (curActive) { curActive = false; setIsActiveLink(false); }
        if (curText) { curText = ""; setCursorText(""); }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      if (velocityRafRef.current) cancelAnimationFrame(velocityRafRef.current);
    };
  }, [mouseX, mouseY, triggerRipple]);

  if (!isVisible) return null;

  const isSealVisible = isHovered || isActiveLink || isNavigating;

  return (
    <div
      className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* =======================================================================
          CLICK TEMPORAL RIPPLE LAYER (State 03: Temporal Disturbance Shockwaves)
          Compact, elegant temporal ripple centered precisely beneath pointer tip
          ======================================================================= */}
      {ripples.map((ripple) => (
        <svg
          key={ripple.id}
          className="fixed pointer-events-none z-40 overflow-visible"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "120px",
            height: "120px",
            marginLeft: "-60px",
            marginTop: "-60px",
          }}
          viewBox="-60 -60 120 120"
        >
          {/* 1. Centre Flash (0-140ms): 8-12px diameter */}
          <circle
            cx="0"
            cy="0"
            r="4.5"
            fill="#FFFFFF"
            className="temporal-flash"
            style={{
              filter: "drop-shadow(0 0 3px #B77AFF)",
            }}
          />

          {/* 2. First Ring (40-480ms): 20-28px diameter */}
          <circle
            cx="0"
            cy="0"
            r="13"
            fill="none"
            stroke="#FFFFFF"
            className="temporal-ring-1"
            style={{
              filter: "drop-shadow(0 0 3px #B77AFF)",
            }}
          />

          {/* 3. Second Ring (80-510ms): 40-52px diameter */}
          <circle
            cx="0"
            cy="0"
            r="24"
            fill="none"
            stroke="#B77AFF"
            className="temporal-ring-2"
            style={{
              filter: "drop-shadow(0 0 4px rgba(183,122,255,0.75))",
            }}
          />

          {/* 4. Third Reticle Ring (120-530ms): 65-78px diameter */}
          <circle
            cx="0"
            cy="0"
            r="36"
            fill="none"
            stroke="#F1E6FF"
            strokeDasharray="4 5"
            className="temporal-ring-3"
          />

          {/* 5. Six Tiny Crystalline Diamond Accents drifting outward */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g
              key={i}
              style={{
                transform: `rotate(${deg}deg)`,
                transformOrigin: "0px 0px",
              }}
            >
              <polygon
                points="0,-1.4 1.1,0 0,1.4 -1.1,0"
                fill="#FFFFFF"
                className="temporal-shard-anim"
              />
            </g>
          ))}
        </svg>
      ))}

      {/* =======================================================================
          THE WITCH'S SEAL LAYER (States 02, 05, and Navigation)
          Dormant in Default (opacity: 0). Expands with 3 distinct visual layers on Hover & UI Focus.
          ======================================================================= */}
      <motion.div
        style={{
          x: smoothSealX,
          y: smoothSealY,
          marginLeft: "-48px",
          marginTop: "-48px",
        }}
        animate={{
          scale: isInputHovered
            ? 0.35
            : isMouseDown
            ? 0.96
            : isActiveLink
            ? 1.28
            : isHovered
            ? 1.15
            : isNavigating
            ? 1.12
            : 0.35,
          opacity: isInputHovered
            ? 0
            : isActiveLink
            ? 1
            : isHovered
            ? 1
            : isNavigating
            ? 0.88
            : 0,
          rotate: isNavigating ? -360 : isHovered || isActiveLink ? 35 : 0,
        }}
        transition={{
          duration: 0.32,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 w-24 h-24 flex items-center justify-center pointer-events-none z-45"
      >
        {/* Subtle Ambient Violet-Cryo Aura */}
        <div
          className={`absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(186,230,253,0.28)_0%,rgba(183,122,255,0.2)_40%,rgba(113,54,184,0.08)_65%,transparent_75%)] transition-opacity duration-300 ${
            isActiveLink ? "opacity-100 scale-120" : isHovered ? "opacity-90 scale-105" : "opacity-0"
          }`}
        />

        {/* Scalable Vector Witch's Seal Geometry */}
        <svg
          viewBox="-48 -48 96 96"
          className={`w-full h-full transition-transform duration-500 ${
            isNavigating
              ? "witch-seal-nav-reverse"
              : isActiveLink
              ? "witch-seal-orbit-fast"
              : "witch-seal-orbit"
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Luminous Star Gradient */}
            <linearGradient id="witchStarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#F1E6FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B77AFF" stopOpacity="0.65" />
            </linearGradient>

            {/* Runic Arc Gradient */}
            <linearGradient id="witchRuneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B77AFF" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#B77AFF" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* ===================================================================
              LAYER 1: INNER LUMINOUS CIRCULAR RING & CENTRAL 4-POINT STAR
              =================================================================== */}
          {/* Central 4-Point Radiant Diamond Star */}
          <path
            d="M 0,-18 Q 2,-2.5 15,0 Q 2,2.5 0,16 Q -2,2.5 -15,0 Q -2,-2.5 0,-18 Z"
            fill="url(#witchStarGlow)"
            opacity={isActiveLink ? 0.95 : isHovered ? 0.8 : 0.5}
            style={{
              filter: isActiveLink
                ? "drop-shadow(0 0 8px rgba(183,122,255,0.9))"
                : "drop-shadow(0 0 4px rgba(183,122,255,0.6))",
            }}
          />
          {/* Inner Luminous Circular Outline */}
          <circle
            cx="0"
            cy="0"
            r="18.5"
            stroke="#FFFFFF"
            strokeWidth="0.7"
            strokeOpacity="0.8"
            style={{ filter: "drop-shadow(0 0 3px rgba(183,122,255,0.65))" }}
          />

          {/* ===================================================================
              LAYER 2: FINE ORNAMENTAL INSCRIPTION RING
              Delicate hairline runes, clean spacing, non-noisy
              =================================================================== */}
          <g className="witch-rune-pulse">
            {/* Inscription Inner Boundary */}
            <circle
              cx="0"
              cy="0"
              r="22"
              stroke="#B77AFF"
              strokeWidth="0.45"
              strokeOpacity="0.45"
            />
            {/* Inscription Outer Boundary */}
            <circle
              cx="0"
              cy="0"
              r="25.5"
              stroke="#F1E6FF"
              strokeWidth="0.45"
              strokeOpacity="0.55"
            />
            {/* 12 Delicate Hairline Occult Runes */}
            {RUNE_GLYPHS.map((glyphD, idx) => {
              const deg = idx * 30;
              return (
                <g key={idx} transform={`rotate(${deg}) translate(0, -23.75)`}>
                  <path
                    d={glyphD}
                    stroke="#F1E6FF"
                    strokeWidth="0.38"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={idx % 2 === 0 ? 0.85 : 0.6}
                  />
                  <circle cx="0" cy="1.2" r="0.25" fill="#FFFFFF" opacity="0.65" />
                </g>
              );
            })}
          </g>

          {/* ===================================================================
              LAYER 3: OUTER RING WITH FOUR CARDINAL DIAMOND MARKERS
              Symmetrical broken celestial arcs and sequentially illuminated diamonds
              =================================================================== */}
          {/* Outer Temporal Broken Ring */}
          <circle
            cx="0"
            cy="0"
            r="31.5"
            stroke="#B77AFF"
            strokeWidth="0.65"
            strokeOpacity="0.5"
            strokeDasharray="16 10 24 8 12 14"
          />
          <circle
            cx="0"
            cy="0"
            r="32.5"
            stroke="#F1E6FF"
            strokeWidth="0.3"
            strokeOpacity="0.3"
            strokeDasharray="3 6 9 6"
          />

          {/* North Diamond Crown Marker */}
          <g transform="translate(0, -31.5)">
            <g className={isHovered ? "witch-diamond-north" : ""}>
              <polygon
                points="0,-7 3,0 0,4 -3,0"
                fill={isActiveLink ? "#FFFFFF" : "#F1E6FF"}
                stroke="#B77AFF"
                strokeWidth="0.5"
                style={{ filter: "drop-shadow(0 0 5px rgba(183,122,255,0.9))" }}
              />
              <line x1="0" y1="-7" x2="0" y2="4" stroke="#7136B8" strokeWidth="0.35" />
              <circle cx="0" cy="-8.5" r="0.8" fill="#FFFFFF" />
            </g>
          </g>

          {/* East Diamond Marker */}
          <g transform="translate(31.5, 0)">
            <g className={isHovered ? "witch-diamond-east" : ""}>
              <polygon
                points="5.5,0 0,2.8 -3,0 0,-2.8"
                fill={isActiveLink ? "#FFFFFF" : "#F1E6FF"}
                stroke="#B77AFF"
                strokeWidth="0.5"
              />
              <line x1="5.5" y1="0" x2="-3" y2="0" stroke="#7136B8" strokeWidth="0.35" />
            </g>
          </g>

          {/* South Diamond Marker */}
          <g transform="translate(0, 31.5)">
            <g className={isHovered ? "witch-diamond-south" : ""}>
              <polygon
                points="0,5.5 2.8,0 0,-3 -2.8,0"
                fill={isActiveLink ? "#FFFFFF" : "#F1E6FF"}
                stroke="#B77AFF"
                strokeWidth="0.5"
              />
              <line x1="0" y1="5.5" x2="0" y2="-3" stroke="#7136B8" strokeWidth="0.35" />
            </g>
          </g>

          {/* West Diamond Marker */}
          <g transform="translate(-31.5, 0)">
            <g className={isHovered ? "witch-diamond-west" : ""}>
              <polygon
                points="-5.5,0 0,2.8 3,0 0,-2.8"
                fill={isActiveLink ? "#FFFFFF" : "#F1E6FF"}
                stroke="#B77AFF"
                strokeWidth="0.5"
              />
              <line x1="-5.5" y1="0" x2="3" y2="0" stroke="#7136B8" strokeWidth="0.35" />
            </g>
          </g>

          {/* 4 Diagonal Orbital Studs */}
          {[45, 135, 225, 315].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle}) translate(0, -31.5)`}>
              <polygon points="0,-1.8 1.4,0 0,1.8 -1.4,0" fill="#F1E6FF" opacity="0.75" />
            </g>
          ))}
        </svg>

        {/* Text Annotation if present (e.g. data-cursor="VIEW") */}
        {cursorText && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-[#151221]/95 border border-[#B77AFF]/70 shadow-[0_0_12px_rgba(113,54,184,0.6)]">
            <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#FFFFFF] select-none">
              {cursorText}
            </span>
          </div>
        )}
      </motion.div>

      {/* =======================================================================
          ETHEREAL VIOLET WAKE & INERTIA STREAM (State 04: Movement)
          Faint vapor displacement streaming behind the arrow fins during movement
          ======================================================================= */}
      <motion.div
        style={{
          x: smoothWake2X,
          y: smoothWake2Y,
          opacity: isInputHovered || isSealVisible ? 0 : motionIntensity * 0.4,
        }}
        className="fixed top-0 left-0 pointer-events-none z-47"
      >
        <div
          className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(186,230,253,0.25)_0%,rgba(183,122,255,0.15)_45%,transparent_75%)] blur-[3px]"
          style={{ transform: "translate(8px, 10px)" }}
        />
      </motion.div>

      {/* =======================================================================
          REFINED CRYOGENIC VAPOR & ICE CRYSTAL GLINTS (State 01 & 04)
          Asymmetric atmospheric cold condensation & micro-crystal glints
          Flows naturally around the crystal blade with subtle inertia
          ======================================================================= */}
      <motion.div
        style={{
          x: smoothWake1X,
          y: smoothWake1Y,
          rotate: smoothCursorTilt,
          transformOrigin: "0px 0px",
        }}
        animate={{
          scale: isInputHovered || isHovered || isActiveLink ? 0 : 1,
          opacity: isInputHovered || isHovered || isActiveLink ? 0 : 1,
        }}
        transition={{
          duration: 0.22,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 pointer-events-none z-48"
      >
        <svg
          width="48"
          height="48"
          viewBox="-8 -8 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* Asymmetric Glacial Vapor Gradient A (Upper blade drift) */}
            <linearGradient id="cryoVaporGradA" x1="0%" y1="0%" x2="100%" y2="85%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#D9B8FF" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#B77AFF" stopOpacity="0" />
            </linearGradient>

            {/* Asymmetric Glacial Vapor Gradient B (Lower notch condensation) */}
            <linearGradient id="cryoVaporGradB" x1="20%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.20" />
              <stop offset="45%" stopColor="#D9B8FF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#B77AFF" stopOpacity="0" />
            </linearGradient>

            {/* Lightweight Vapor Blur (Soft atmospheric dispersion) */}
            <filter id="cryoVaporBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
          </defs>

          {/* 1. Organic Vapor Lobe A: Flows around the upper blade edge & tip */}
          <path
            d="M -3,-3 Q 13,-6 31,9 Q 35,16 26,18 Q 18,14 15,13 Q 7,3 -3,-3 Z"
            fill="url(#cryoVaporGradA)"
            filter="url(#cryoVaporBlur)"
            className="cryo-vapor-lobe-1"
          />

          {/* 2. Organic Vapor Lobe B: Condenses in the wake of the notch & left fin */}
          <path
            d="M 11,13 Q 18,16 18,24 Q 15,32 7,31 Q 3,23 8,17 Q 10,14 11,13 Z"
            fill="url(#cryoVaporGradB)"
            filter="url(#cryoVaporBlur)"
            className="cryo-vapor-lobe-2"
          />

          {/* 3. Micro Crystalline Glints (Only 3 delicate faceted flecks) */}
          {/* Glint 1: Micro Diamond Ice Shard near upper-right edge */}
          <g className="cryo-glint-1" transform="translate(24, 7)">
            <polygon points="0,-2 0.7,0 0,2 -0.7,0" fill="#FFFFFF" opacity="0.9" />
            <line x1="0" y1="-2" x2="0" y2="2" stroke="#BAE6FD" strokeWidth="0.3" />
          </g>

          {/* Glint 2: Micro Hexagonal Frost Fleck below notch */}
          <g className="cryo-glint-2" transform="translate(19, 22)">
            <polygon points="0,-1.3 1.1,-0.6 1.1,0.6 0,1.3 -1.1,0.6 -1.1,-0.6" fill="#F0F9FF" opacity="0.85" />
            <circle cx="0" cy="0" r="0.45" fill="#FFFFFF" />
          </g>

          {/* Glint 3: Delicate Pale-Blue Ice Spicule near bottom fin */}
          <g className="cryo-glint-3" transform="translate(6, 27)">
            <polygon points="0,-1.6 0.5,0 0,1.6 -0.5,0" fill="#E0F2FE" opacity="0.8" />
            <line x1="-0.5" y1="0" x2="0.5" y2="0" stroke="#FFFFFF" strokeWidth="0.25" />
          </g>
        </svg>
      </motion.div>

      {/* =======================================================================
          PURPLE / LAVENDER AMBIENT AURA (Luminous Magical Halo around Cursor)
          Soft ethereal violet-lavender luminescence radiating around the pointer
          ======================================================================= */}
      <motion.div
        style={{
          x: smoothPointerX,
          y: smoothPointerY,
          transformOrigin: "0px 0px",
        }}
        animate={{
          scale: isInputHovered || isHovered || isActiveLink ? 0 : isMouseDown ? 0.94 : 1,
          opacity: isInputHovered || isHovered || isActiveLink ? 0 : 1,
        }}
        transition={{
          duration: 0.22,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 pointer-events-none z-49"
      >
        <div
          className="purple-lavender-aura absolute -top-4 -left-4 w-18 h-18 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 45% 45%, rgba(183,122,255,0.48) 0%, rgba(217,184,255,0.32) 35%, rgba(113,54,184,0.18) 60%, transparent 80%)",
            filter: "blur(6px)",
          }}
        />
      </motion.div>

      {/* =======================================================================
          PRIMARY WHITE POINTER ARROW (Tracks Mouse with Silky Smooth Inertia)
          Luminous white crystal blade with crisp icy-blue rim highlight
          and radiant purple/lavender magical glow
          ======================================================================= */}
      <motion.div
        style={{
          x: smoothPointerX,
          y: smoothPointerY,
          rotate: smoothCursorTilt,
          transformOrigin: "0px 0px",
        }}
        animate={{
          scale: isInputHovered || isHovered || isActiveLink ? 0 : isMouseDown ? 0.94 : 1,
          opacity: isInputHovered || isHovered || isActiveLink ? 0 : 1,
        }}
        transition={{
          duration: 0.22,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 pointer-events-none z-50"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* Luminous Crystal Blade Edge Glow: Icy-Blue Rim + Rich Purple/Lavender Halo */}
            <filter id="whiteArrowGlow" x="-60%" y="-60%" width="220%" height="220%">
              {/* Sharp Pale-Blue Rim Highlight (Defines the crystal blade edge) */}
              <feDropShadow dx="0" dy="0" stdDeviation="0.8" floodColor="#BAE6FD" floodOpacity="0.8" />
              {/* Radiant Lavender Inner Glow */}
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#D9B8FF" floodOpacity="0.85" />
              {/* Vibrant Magical Violet Aura */}
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation={motionIntensity > 0.3 ? "6.0" : "4.5"}
                floodColor="#B77AFF"
                floodOpacity={motionIntensity > 0.3 ? "0.9" : "0.75"}
              />
              {/* Deep Atmospheric Midnight Purple Halo */}
              <feDropShadow dx="0" dy="0" stdDeviation="8.5" floodColor="#7136B8" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Crisp, Defined Luminous White Crystal Blade */}
          <path
            d="M 0,0 L 28,12 L 15.5,17.5 L 9.5,29 Z"
            fill="#FFFFFF"
            stroke="#E0F2FE"
            strokeWidth="0.8"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#whiteArrowGlow)"
          />

          {/* Core Apex Highlight at tip */}
          <circle cx="0.5" cy="0.5" r="0.75" fill="#FFFFFF" />
        </svg>
      </motion.div>
    </div>
  );
}
