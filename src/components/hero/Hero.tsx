"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowRight, CornerDownRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 35]);
  const floatingPhotoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -25]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-[rgba(255,255,255,0.08)] bg-[#101116]"
    >
      {/* Restrained Background Atmosphere on Deep Graphite-Black (#101116) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft, diffused graphite ambient rim strictly behind photographic composition */}
        <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-[#1E202E]/30 rounded-full blur-[140px]" />
        
        {/* Soft bottom transition into Graphite-Black */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#101116] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* 1. Top Technical Metadata Bar */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[rgba(255,255,255,0.08)] text-[11px] font-code text-[#8A8CAC]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8387C3] animate-pulse" />
            <span className="text-[#F0EEF4] uppercase tracking-widest font-medium">
              {profileData.motto}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[#8A8CAC]">
            <span>THE PERSONAL ENGINEERING ARCHIVE</span>
            <span className="text-[rgba(255,255,255,0.15)]">|</span>
            <span>SPEC REF: AK-2026</span>
          </div>
        </motion.div>

        {/* Main Grid: Left Typography & Right Photographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* 2. Headline Reveal */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-[#F0EEF4] leading-[0.88] select-none">
                ARYAN
                <br />
                <span className="italic font-light text-[#8387C3] hover:text-[#F0EEF4] transition-colors duration-500">
                  KELKAR.
                </span>
              </h1>
            </motion.div>

            {/* 4. Supporting Statement */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="font-serif italic text-xl sm:text-2xl text-[#959BB5] max-w-xl leading-relaxed"
            >
              &ldquo;{profileData.headline}&rdquo;
            </motion.p>

            {/* 5. Three Disciplines — Staggered micro-reveals */}
            <div className="space-y-3 pt-2 max-w-xl border-t border-[rgba(255,255,255,0.08)]">
              {profileData.disciplines.map((d, idx) => (
                <motion.div
                  key={d.name}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + idx * 0.08, ease: "easeOut" }}
                  className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-[rgba(255,255,255,0.06)] hover:border-[rgba(131,135,195,0.4)] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-code text-[10px] text-[#8387C3] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-code text-xs uppercase tracking-wider text-[#F0EEF4] group-hover:text-[#8387C3] transition-colors">
                      {d.name}
                    </span>
                  </div>
                  <span className="text-xs text-[#959BB5] font-light mt-1 sm:mt-0">
                    {d.description}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5 pt-4"
            >
              <Link
                href="/work"
                data-cursor="EXPLORE"
                className="group relative inline-flex items-center gap-2.5 font-code text-xs uppercase tracking-widest bg-[#F0EEF4] hover:bg-[#8387C3] text-[#101116] font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                data-cursor="ABOUT"
                className="group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#F0EEF4] hover:text-[#8387C3] py-4 px-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>A LITTLE ABOUT ME</span>
                <ArrowDownRight className="w-4 h-4 text-[#8387C3] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* 3. Right Column: THE PHOTOGRAPHIC HERO COMPOSITION */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* IMAGE 01 — HERO PORTRAIT */}
              <motion.div
                style={{ y: photoY }}
                className="relative rounded-2xl overflow-hidden bg-[#171924] border border-[rgba(255,255,255,0.12)] shadow-2xl shadow-black/80 aspect-[3/4] group"
              >
                <Image
                  src={profileData.photos.heroPortrait.src}
                  alt={profileData.photos.heroPortrait.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Editorial Vignette & Technical Watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 font-code text-[10px] text-[#F0EEF4] bg-[#101116]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[rgba(255,255,255,0.12)]">
                  FIG. 01 // IDENTITY
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-editorial text-lg text-[#F0EEF4] font-medium leading-tight">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[11px] text-[#959BB5] mt-0.5">
                    {profileData.photos.heroPortrait.caption}
                  </p>
                </div>
              </motion.div>

              {/* IMAGE 02 — FLOATING DETAIL PORTRAIT (Overlapping Asymmetrically) */}
              <motion.div
                style={{ y: floatingPhotoY }}
                className="absolute -bottom-8 -left-8 sm:-left-12 w-40 sm:w-48 aspect-[4/5] rounded-xl overflow-hidden bg-[#171924] border-2 border-[#8387C3]/50 shadow-2xl shadow-black/90 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group hidden sm:block"
              >
                <Image
                  src={profileData.photos.floatingPortrait.src}
                  alt={profileData.photos.floatingPortrait.alt}
                  fill
                  sizes="192px"
                  className="object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="font-code text-[9px] uppercase tracking-wider text-[#8387C3] block">
                    FIG. 02 // DETAIL
                  </span>
                  <span className="font-code text-[9px] text-[#F0EEF4] truncate block">
                    Analytical View
                  </span>
                </div>
              </motion.div>

              {/* Corner Coordinate Badge */}
              <div className="absolute -top-4 -right-4 bg-[#171924] border border-[rgba(255,255,255,0.12)] px-3 py-1.5 rounded-lg font-code text-[10px] text-[#8387C3] shadow-lg hidden sm:block">
                SYS_ONLINE • 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs font-code text-[#8A8CAC]">
        <div className="flex items-center gap-2">
          <CornerDownRight className="w-3.5 h-3.5 text-[#8387C3]" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </div>
        <div className="hidden sm:block">
          <span>HUMANITY + SYSTEMS</span>
        </div>
      </div>
    </section>
  );
}
