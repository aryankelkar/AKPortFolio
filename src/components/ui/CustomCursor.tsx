"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

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
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If hovering form input or textarea, defer to native I-beam cursor
      const isInput = target.closest("input, textarea, select, [contenteditable='true']");
      if (isInput) {
        setIsInputHovered(true);
        setIsHovered(false);
        setCursorText("");
        return;
      }
      setIsInputHovered(false);

      // Interactive clickable elements
      const interactive = target.closest("a, button, [role='button'], [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
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
  }, [mouseX, mouseY, isVisible]);

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
          borderColor: isHovered ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.35)",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.03)",
        }}
        transition={{
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border flex items-center justify-center backdrop-blur-[0.5px] pointer-events-none will-change-transform z-50 transition-colors"
      >
        {cursorText && (
          <span className="font-code text-[8px] font-bold uppercase tracking-widest text-white select-none drop-shadow-sm px-1">
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
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_2px_rgba(255,255,255,1)] pointer-events-none will-change-transform z-50"
      />
    </div>
  );
}

