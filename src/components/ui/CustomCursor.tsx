"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 260, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Follower Ring - centered via -ml-4 -mt-4 for exact 32px concentricity */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: isHovered ? (cursorText ? 2.4 : 1.6) : 1,
          borderColor: isHovered ? "#8387C3" : "rgba(131, 135, 195, 0.45)",
          backgroundColor: isHovered ? "rgba(131, 135, 195, 0.15)" : "rgba(131, 135, 195, 0)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-[rgba(131,135,195,0.45)] flex items-center justify-center transition-colors pointer-events-none will-change-transform z-50"
      >
        {cursorText && (
          <span className="font-code text-[8px] uppercase tracking-widest text-[#8387C3] font-bold select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot - centered via -ml-[3px] -mt-[3px] for exact 6px concentricity */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-[#8387C3] pointer-events-none will-change-transform z-50"
      />
    </div>
  );
}
