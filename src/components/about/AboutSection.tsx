"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, GraduationCap, Compass, BookOpen, FileText, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const docPhoto = profileData.photos.documentaryPhoto;

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#151720]/80 backdrop-blur-sm border-y border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 02 ]"
          tag="BIOGRAPHICAL RECORD"
          title="Curious by nature. A builder by choice."
          description="A personal perspective on engineering philosophy, technological curiosity, and the motivation driving my work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal Narrative & Philosophy Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#959BB5] leading-relaxed font-light">
              <p>
                I&apos;m Aryan Kelkar, an Information Technology student interested in building useful digital products, exploring artificial intelligence, and turning complex problems into practical solutions.
              </p>
              <p className="text-sm sm:text-base text-[#8A8CAC]">
                {profileData.bio.full[1]}
              </p>
            </div>

            {/* Read Full Biography Action */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="btn-fluid group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#101116] bg-[#F0EEF4] hover:bg-[#8387C3] font-semibold px-6 py-3 rounded-full shadow-lg"
              >
                <span>READ FULL BIOGRAPHY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Core Engineering Philosophy Card (Matching Reference Design) */}
            <div className="p-6 rounded-2xl bg-[#171924]/90 border border-[rgba(255,255,255,0.08)] space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-[#8387C3]">
                <Compass className="w-4 h-4" />
                <span className="font-code text-xs uppercase tracking-wider font-semibold">
                  Personal Philosophy
                </span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-[#F0EEF4] leading-relaxed">
                &ldquo;{profileData.bio.philosophy}&rdquo;
              </p>
            </div>

            {/* Intellectual Currents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#171924]/80 border border-[rgba(255,255,255,0.08)] space-y-2 card-interactive">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="font-code text-[11px] uppercase tracking-wider font-semibold">
                    READING
                  </span>
                </div>
                <p className="text-xs text-[#959BB5] font-light">
                  {profileData.currentReading[0]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#171924]/80 border border-[rgba(255,255,255,0.08)] space-y-2 card-interactive">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-code text-[11px] uppercase tracking-wider font-semibold">
                    EXPLORING
                  </span>
                </div>
                <p className="text-xs text-[#959BB5] font-light">
                  {profileData.currentLearning[0]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: FIG. 03 // PERSPECTIVE (Documentary Photograph & Academic Badge) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* FIG. 03 Documentary Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#171924] border border-[rgba(255,255,255,0.12)] shadow-2xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <Image
                  src={docPhoto.src}
                  alt={docPhoto.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Bottom Quote Overlay */}
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none max-w-md">
                  <p className="font-editorial italic text-lg sm:text-xl text-[#F0EEF4] leading-snug drop-shadow-md">
                    Engineering is shaped by the world outside the terminal.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className="rounded-xl bg-[#171924]/90 border border-[rgba(255,255,255,0.08)] p-5 space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1E2030] text-[#8387C3] border border-[rgba(255,255,255,0.10)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg text-[#F0EEF4] font-medium leading-tight">
                    {profileData.education.degree} — {profileData.education.field}
                  </h4>
                  <p className="font-code text-xs text-[#8387C3] mt-0.5">
                    {profileData.education.institution} • Class of {profileData.education.expectedGraduation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
