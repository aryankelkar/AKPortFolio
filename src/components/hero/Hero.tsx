"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, CornerDownRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroName } from "@/components/hero/HeroName";

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

      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10 my-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Expressive Editorial Typography */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8">
            {/* 2. Signature Cinematic Editorial Headline */}
            <HeroName />

            {/* 3. Supporting Statement */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#959BB5] max-w-2xl xl:max-w-3xl leading-relaxed"
            >
              &ldquo;{profileData.headline}&rdquo;
            </motion.p>

            {/* 4. Three Disciplines — Staggered micro-reveals */}
            <div className="space-y-2.5 pt-2 max-w-2xl xl:max-w-3xl border-t border-[rgba(255,255,255,0.08)]">
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
                  <span className="text-xs text-[#959BB5] font-light mt-1 sm:mt-0 sm:text-right sm:max-w-[340px]">
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

          {/* 6. Right Column: THE PHOTOGRAPHIC HERO COMPOSITION (Expanded Grand Diptych) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            {/* Composition Framing Container: Generous bounds allowing the portrait to command the hero */}
            <div className="relative pt-2 pb-10 pl-6 sm:pl-10 pr-2 w-full max-w-[460px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[600px] xl:max-w-[650px] 2xl:max-w-[680px]">
              
              {/* PRIMARY PORTRAIT FRAME */}
              <motion.div
                style={{ y: photoY }}
                className="relative"
              >
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 20, scale: 1.045 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl overflow-hidden bg-[#151720] border border-[rgba(255,255,255,0.12)] hover:border-[#8387C3]/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.92),0_0_35px_rgba(131,135,195,0.18)] aspect-[3/4] group transition-all duration-700"
                >
                  {/* Elegant upward image reveal mask curtain */}
                  <motion.div
                    initial={shouldReduceMotion ? { scaleY: 0 } : { scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-[#101116] origin-top pointer-events-none z-30"
                  />

                  {/* Top-Edge Specular Rim Highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent pointer-events-none z-20" />

                  {/* Cinematic Breathing Image Layer */}
                  <div className={`relative w-full h-full ${shouldReduceMotion ? "" : "portrait-cinematic-breath"}`}>
                    <Image
                      src={profileData.photos.heroPortrait.src}
                      alt={profileData.photos.heroPortrait.alt}
                      fill
                      priority
                      quality={95}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 750px"
                      className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                  </div>

                  {/* Cinematic Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-[#101116]/35 to-transparent opacity-90 group-hover:opacity-75 pointer-events-none z-10 transition-opacity duration-700" />

                  {/* Bottom-Right Signature Watermark — Authentic Professional Identity */}
                  <div className="absolute bottom-5 right-5 text-right pointer-events-none z-20 max-w-[240px]">
                    <p className="font-editorial italic text-2xl sm:text-3xl text-[#F0EEF4] font-medium leading-none drop-shadow-lg tracking-wide">
                      Aryan Kelkar
                    </p>
                    <p className="font-code text-[10px] sm:text-[11px] text-[#959BB5] mt-1.5 tracking-wider uppercase">
                      Information Technology Student &amp; Builder
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* SECONDARY FLOATING ACCENT PORTRAIT */}
              <motion.div
                style={{ y: floatingPhotoY }}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0, rotate: -3, scale: 1 }
                    : { opacity: 0, y: 22, rotate: -5.5, scale: 0.95 }
                }
                animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
                transition={{ duration: 0.95, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-7 md:-left-8 w-40 sm:w-52 md:w-56 lg:w-60 xl:w-64 aspect-[4/5] z-20 group"
              >
                <div
                  className={`relative w-full h-full rounded-xl overflow-hidden bg-[#151720] border-2 border-[#8387C3]/80 group-hover:border-[#A5A9E6] shadow-[0_20px_50px_rgba(0,0,0,0.95)] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(131,135,195,0.30)] group-hover:rotate-0 group-hover:scale-[1.025] transition-all duration-500 ease-out ${
                    shouldReduceMotion ? "" : "floating-photo-drift"
                  }`}
                >
                  {/* Top-Edge Lavender Rim Highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8387C3]/60 to-transparent pointer-events-none z-10" />

                  <Image
                    src={profileData.photos.floatingPortrait.src}
                    alt={profileData.photos.floatingPortrait.alt}
                    fill
                    priority
                    loading="eager"
                    quality={95}
                    sizes="(max-width: 640px) 200px, 300px"
                    className="object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 hover:grayscale-0 group-hover:contrast-105 group-hover:brightness-105 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-60 group-hover:opacity-40 pointer-events-none z-10 transition-opacity duration-700" />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full pt-6 sm:pt-8 flex items-center justify-between text-xs font-code text-[#8A8CAC]">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 hover:text-[#F0EEF4] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8387C3] rounded"
        >
          <CornerDownRight className="w-3.5 h-3.5 text-[#8387C3] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </a>
      </div>
    </section>
  );
}
