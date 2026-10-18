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

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#151720] border-y border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 02 ]"
          tag="BIOGRAPHICAL RECORD // PERSPECTIVE"
          title="Curious by nature. A builder by choice."
          description="A personal perspective on engineering philosophy, technological curiosity, and the motivation driving my work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Narrative, Reading & Learning */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-5 text-base sm:text-lg text-[#959BB5] leading-relaxed font-light">
              {profileData.bio.full.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Engineering Philosophy Callout */}
            <div className="p-6 rounded-2xl bg-[#171924] border-l-4 border-l-[#8387C3] border border-[rgba(255,255,255,0.08)] space-y-2 shadow-lg">
              <div className="flex items-center gap-2 text-[#8387C3]">
                <Compass className="w-4 h-4" />
                <span className="font-code text-xs uppercase tracking-wider font-semibold">
                  CORE PHILOSOPHY
                </span>
              </div>
              <p className="font-serif italic text-lg text-[#F0EEF4] leading-relaxed">
                &ldquo;{profileData.bio.philosophy}&rdquo;
              </p>
            </div>

            {/* Intellectual Currents: Currently Reading & Learning */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 card-interactive">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    CURRENTLY READING
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#959BB5] font-light">
                  {profileData.currentReading.map((book, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#8387C3] shrink-0">•</span>
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 card-interactive">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    CURRENTLY EXPLORING
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#959BB5] font-light">
                  {profileData.currentLearning.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#8387C3] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="btn-fluid group inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#101116] bg-[#F0EEF4] hover:bg-[#8387C3] hover:text-[#101116] font-semibold px-5 py-3 rounded-full"
              >
                <span>READ IN-DEPTH BIOGRAPHY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fluid group inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#F0EEF4] bg-[#1A1C28] hover:bg-[#222534] px-5 py-3 rounded-full border border-[rgba(255,255,255,0.12)]"
              >
                <FileText className="w-4 h-4 text-[#8387C3]" />
                <span>DOWNLOAD RÉSUMÉ (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8CAC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: IMAGE 04 (Personal Portrait) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#171924] border border-[rgba(255,255,255,0.12)] shadow-xl group">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={profileData.photos.personalPortrait.src}
                  alt={profileData.photos.personalPortrait.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151720] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute top-4 left-4 font-code text-[10px] text-[#F0EEF4] bg-[#151720]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[rgba(255,255,255,0.12)] pointer-events-none">
                  FIG. 04 // PERSONAL
                </div>

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <p className="font-editorial text-lg text-[#F0EEF4] font-medium leading-tight">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[11px] text-[#959BB5] mt-0.5">
                    {profileData.photos.personalPortrait.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Card */}
            <div className="rounded-2xl bg-[#171924] border border-[rgba(255,255,255,0.08)] card-interactive p-6 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[rgba(255,255,255,0.06)]">
                <div className="p-2 rounded-lg bg-[#1E2030] text-[#8387C3] border border-[rgba(255,255,255,0.10)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#F0EEF4] font-medium">
                    {profileData.education.degree}
                  </h3>
                  <p className="font-code text-xs text-[#8387C3]">
                    {profileData.education.field}
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#959BB5] font-light leading-relaxed">
                {profileData.education.institution} • Class of {profileData.education.expectedGraduation}
              </div>

              <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <ul className="space-y-1.5 text-xs text-[#8A8CAC] font-light">
                  {profileData.education.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#8387C3] shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
