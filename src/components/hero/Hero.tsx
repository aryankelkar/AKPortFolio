"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, CornerDownRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 25]);
  const floatingPhotoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -20]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 border-b border-[rgba(255,255,255,0.08)] bg-transparent"
    >
      {/* Soft Vignette Overlay strictly behind text to preserve crisp readability */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#101116]/80 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#101116] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* 1. Top Technical Metadata Bar */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 sm:mb-8 border-b border-[rgba(255,255,255,0.08)] text-[11px] font-code text-[#8A8CAC]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8387C3] animate-pulse" />
            <span className="text-[#F0EEF4] uppercase tracking-widest font-medium">
              {profileData.motto}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#8A8CAC]">
            <span className="text-[#959BB5]">SYSTEM ARCHIVE // 2026</span>
            <span className="text-[rgba(255,255,255,0.2)]">|</span>
            <span className="text-[#8387C3]">INDEX REF: AK-SYS-01</span>
          </div>
        </motion.div>

        {/* Main Grid: Left Typography & Right Photographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Expressive Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* 2. Headline Reveal */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[6.8rem] xl:text-[7.4rem] font-normal tracking-tight text-[#F0EEF4] leading-[0.9] select-none">
                ARYAN
                <br />
                <span className="italic font-light text-[#8387C3] hover:text-[#F0EEF4] transition-colors duration-300">
                  KELKAR.
                </span>
              </h1>
            </motion.div>

            {/* 3. Supporting Statement */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#959BB5] max-w-xl leading-relaxed"
            >
              &ldquo;{profileData.headline}&rdquo;
            </motion.p>

            {/* 4. Three Disciplines — Staggered micro-reveals */}
            <div className="space-y-2.5 pt-2 max-w-xl border-t border-[rgba(255,255,255,0.08)]">
              {profileData.disciplines.map((d, idx) => (
                <motion.div
                  key={d.name}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.36, delay: 0.32 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
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

            {/* 5. Actions */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-5 pt-3"
            >
              <Link
                href="/work"
                className="btn-fluid group relative inline-flex items-center gap-2.5 font-code text-xs uppercase tracking-widest bg-[#F0EEF4] hover:bg-[#8387C3] text-[#101116] font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="btn-fluid group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#F0EEF4] hover:text-[#8387C3] py-3.5 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>A LITTLE ABOUT ME</span>
                <ArrowDownRight className="w-4 h-4 text-[#8387C3] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* 6. Right Column: THE PHOTOGRAPHIC HERO COMPOSITION (Art-Directed Diptych) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Composition Framing Container: Dedicated margins and padding so NO element clips */}
            <div className="relative pt-2 pb-8 pl-4 sm:pl-8 pr-2 w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[410px]">
              
              {/* PRIMARY PORTRAIT FRAME */}
              <motion.div
                style={{ y: photoY }}
                className="relative rounded-2xl overflow-hidden bg-[#151720] border border-[rgba(255,255,255,0.12)] shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[3/4] group"
              >
                <Image
                  src={profileData.photos.heroPortrait.src}
                  alt={profileData.photos.heroPortrait.alt}
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Bottom-Right Signature Watermark — Authentic Professional Identity */}
                <div className="absolute bottom-4 right-4 text-right pointer-events-none z-10 max-w-[210px]">
                  <p className="font-editorial italic text-2xl text-[#F0EEF4] font-medium leading-none drop-shadow-lg tracking-wide">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[9.5px] text-[#959BB5] mt-1 tracking-wider uppercase">
                    Information Technology Student & Builder
                  </p>
                </div>
              </motion.div>

              {/* SECONDARY FLOATING ACCENT PORTRAIT */}
              <motion.div
                style={{ y: floatingPhotoY }}
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 w-32 sm:w-44 aspect-[4/5] rounded-xl overflow-hidden bg-[#151720] border-2 border-[#8387C3]/70 shadow-[0_20px_50px_rgba(0,0,0,0.95)] rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-20 group"
              >
                <Image
                  src={profileData.photos.floatingPortrait.src}
                  alt={profileData.photos.floatingPortrait.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 640px) 140px, 200px"
                  className="object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-60 pointer-events-none" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 flex items-center justify-between text-xs font-code text-[#8A8CAC]">
        <div className="flex items-center gap-2">
          <CornerDownRight className="w-3.5 h-3.5 text-[#8387C3]" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </div>
      </div>
    </section>
  );
}
