"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowRight, CornerDownRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const floatingPhotoY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-[rgba(168,163,154,0.15)] bg-[#0B0B0D]"
    >
      {/* Background Architectural Grid & Subtle Film Grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-architectural-grid opacity-60" />
        <div className="absolute inset-0 bg-grain" />
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#6559A8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9A94E8]/05 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Top Technical Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[rgba(168,163,154,0.15)] text-[11px] font-code text-[#A8A39A]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6F36A] animate-pulse" />
            <span className="text-[#F7F5F0] uppercase tracking-widest font-medium">
              {profileData.motto}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[#A8A39A]">
            <span>SYSTEM ARCHIVE // 2026</span>
            <span className="text-[rgba(168,163,154,0.3)]">|</span>
            <span>INDEX REF: AK-SYS-01</span>
          </div>
        </motion.div>

        {/* Main Grid: Left Typography & Right Photographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-[#F7F5F0] leading-[0.88] select-none">
                ARYAN
                <br />
                <span className="italic font-light text-[#9A94E8] hover:text-[#C6F36A] transition-colors duration-500">
                  KELKAR.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-serif italic text-xl sm:text-2xl text-[#B5B0A6] max-w-xl leading-relaxed"
            >
              &ldquo;{profileData.headline}&rdquo;
            </motion.p>

            {/* Three Disciplines — Refined editorial text treatments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="space-y-3 pt-2 max-w-xl border-t border-[rgba(168,163,154,0.15)]"
            >
              {profileData.disciplines.map((d, idx) => (
                <div
                  key={d.name}
                  className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-[rgba(168,163,154,0.08)] hover:border-[rgba(154,148,232,0.3)] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-code text-[10px] text-[#9A94E8] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-code text-xs uppercase tracking-wider text-[#F7F5F0] group-hover:text-[#9A94E8] transition-colors">
                      {d.name}
                    </span>
                  </div>
                  <span className="text-xs text-[#A8A39A] font-light mt-1 sm:mt-0">
                    {d.description}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5 pt-4"
            >
              <Link
                href="/work"
                data-cursor="EXPLORE"
                className="group relative inline-flex items-center gap-2.5 font-code text-xs uppercase tracking-widest bg-[#F7F5F0] hover:bg-[#9A94E8] text-[#0B0B0D] font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A94E8]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                data-cursor="ABOUT"
                className="group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#F7F5F0] hover:text-[#9A94E8] py-4 px-2 transition-colors focus:outline-none"
              >
                <span>A LITTLE ABOUT ME</span>
                <ArrowDownRight className="w-4 h-4 text-[#9A94E8] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: THE PHOTOGRAPHIC HERO COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* IMAGE 01 — HERO PORTRAIT */}
              <motion.div
                style={{ y: photoY }}
                className="relative rounded-2xl overflow-hidden bg-[#18181E] border border-[rgba(168,163,154,0.25)] shadow-2xl shadow-black/80 aspect-[3/4] group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 font-code text-[10px] text-[#F7F5F0] bg-[#0B0B0D]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[rgba(168,163,154,0.2)]">
                  FIG. 01 // IDENTITY
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-editorial text-lg text-[#F7F5F0] font-medium leading-tight">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[11px] text-[#A8A39A] mt-0.5">
                    {profileData.photos.heroPortrait.caption}
                  </p>
                </div>
              </motion.div>

              {/* IMAGE 02 — FLOATING DETAIL PORTRAIT (Overlapping Asymmetrically) */}
              <motion.div
                style={{ y: floatingPhotoY }}
                className="absolute -bottom-8 -left-8 sm:-left-12 w-40 sm:w-48 aspect-[4/5] rounded-xl overflow-hidden bg-[#141418] border-2 border-[#9A94E8]/40 shadow-2xl shadow-black/90 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group hidden sm:block"
              >
                <Image
                  src={profileData.photos.floatingPortrait.src}
                  alt={profileData.photos.floatingPortrait.alt}
                  fill
                  sizes="192px"
                  className="object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="font-code text-[9px] uppercase tracking-wider text-[#9A94E8] block">
                    FIG. 02 // DETAIL
                  </span>
                  <span className="font-code text-[9px] text-[#F7F5F0] truncate block">
                    Analytical View
                  </span>
                </div>
              </motion.div>

              {/* Corner Coordinate Badge */}
              <div className="absolute -top-4 -right-4 bg-[#141418] border border-[rgba(168,163,154,0.2)] px-3 py-1.5 rounded-lg font-code text-[10px] text-[#C6F36A] shadow-lg hidden sm:block">
                SYS_ONLINE • 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs font-code text-[#A8A39A]">
        <div className="flex items-center gap-2">
          <CornerDownRight className="w-3.5 h-3.5 text-[#9A94E8]" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </div>
        <div className="hidden sm:block">
          <span>HUMANITY + ENGINEERING</span>
        </div>
      </div>
    </section>
  );
}
