"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  tag,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"} ${className}`}
    >
      <div
        className={`flex items-center gap-3 mb-3 ${isCenter ? "justify-center" : ""}`}
      >
        {number && (
          <span className="font-code text-xs font-semibold text-[#8387C3] tracking-widest uppercase">
            {number}
          </span>
        )}
        {number && tag && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#8387C3]/40" />
        )}
        {tag && (
          <span className="font-code text-xs uppercase tracking-widest text-[#8A8CAC]">
            {tag}
          </span>
        )}
      </div>

      <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E7E7F0] tracking-tight leading-[1.12]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[#959BB5] text-base sm:text-lg leading-relaxed font-sans font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
}
