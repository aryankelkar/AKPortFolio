"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const isVisibleRef = useRef(false);

  // High-stiffness, low-mass spring for fluid follower that never drifts into misalignment
  const springConfig = { damping: 28, stiffness: 420, mass: 0.12 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only mount on desktop devices with fine pointer (mouse/trackpad) and no reduced-motion preference
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    let curHovered = false;
    let curInputHovered = false;
    let curText = "";

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If hovering form input or textarea, defer to native I-beam cursor
      const isInput = Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
      if (isInput) {
        if (!curInputHovered) { curInputHovered = true; setIsInputHovered(true); }
        if (curHovered) { curHovered = false; setIsHovered(false); }
        if (curText) { curText = ""; setCursorText(""); }
        return;
      }
      if (curInputHovered) { curInputHovered = false; setIsInputHovered(false); }

      // Interactive clickable elements
      const interactive = target.closest("a, button, [role='button'], [data-cursor]");
      if (interactive) {
        if (!curHovered) { curHovered = true; setIsHovered(true); }
        const text = interactive.getAttribute("data-cursor") || "";
        if (curText !== text) { curText = text; setCursorText(text); }
      } else {
        if (curHovered) { curHovered = false; setIsHovered(false); }
        if (curText) { curText = ""; setCursorText(""); }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
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
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Precision Outer Follower Lens / Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isInputHovered ? 0 : 1,
        }}
        animate={{
          scale: isMouseDown
            ? isHovered ? 1.55 : 0.82
            : isHovered
            ? cursorText ? 2.6 : 1.85
            : 1,
          borderColor: isHovered ? "rgba(167, 138, 203, 0.85)" : "rgba(185, 196, 224, 0.35)",
          backgroundColor: isHovered ? "rgba(112, 70, 160, 0.16)" : "rgba(255, 255, 255, 0.02)",
        }}
        transition={{
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border flex items-center justify-center pointer-events-none z-50"
      >
        {/* Pre-composited Outer Violet Glow: pure GPU opacity fade, 0 per-frame box-shadow rasterization */}
        <div
          className={`absolute -inset-1 rounded-full shadow-[0_0_18px_rgba(167,138,203,0.4)] pointer-events-none transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {cursorText && (
          <span className="font-code text-[8px] font-bold uppercase tracking-widest text-white select-none drop-shadow-sm px-1 relative z-10">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* 2. White Center Precision Pointer Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isInputHovered ? 0 : 1,
        }}
        animate={{
          scale: isMouseDown ? 1.3 : isHovered ? (cursorText ? 0 : 0.75) : 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_2px_rgba(255,255,255,1)] pointer-events-none z-50"
      />
    </div>
  );
}

