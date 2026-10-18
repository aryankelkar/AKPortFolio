import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Compass, BookOpen, FileText, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#121216] border-y border-[rgba(168,163,154,0.14)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="[ 02 ]"
          tag="BIOGRAPHICAL RECORD // PERSPECTIVE"
          title="Curious by nature. A builder by choice."
          description="A personal perspective on engineering philosophy, technological curiosity, and the motivation driving my work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Narrative, Reading & Learning */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#B5B0A6] leading-relaxed font-light">
              {profileData.bio.full.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Engineering Philosophy Callout */}
            <div className="p-6 rounded-2xl bg-[#181820] border-l-4 border-l-[#9A94E8] border border-[rgba(168,163,154,0.16)] space-y-2">
              <div className="flex items-center gap-2 text-[#9A94E8]">
                <Compass className="w-4 h-4" />
                <span className="font-code text-xs uppercase tracking-wider font-semibold">
                  CORE PHILOSOPHY
                </span>
              </div>
              <p className="font-serif italic text-lg text-[#F7F5F0] leading-relaxed">
                &ldquo;{profileData.bio.philosophy}&rdquo;
              </p>
            </div>

            {/* Intellectual Currents: Currently Reading & Learning */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#16161C] border border-[rgba(168,163,154,0.15)] space-y-3">
                <div className="flex items-center gap-2 text-[#C6F36A]">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    CURRENTLY READING
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#A8A39A] font-light">
                  {profileData.currentReading.map((book, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#9A94E8] shrink-0">•</span>
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#16161C] border border-[rgba(168,163,154,0.15)] space-y-3">
                <div className="flex items-center gap-2 text-[#9A94E8]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    CURRENTLY EXPLORING
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#A8A39A] font-light">
                  {profileData.currentLearning.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#C6F36A] shrink-0">•</span>
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
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#0B0B0D] bg-[#F7F5F0] hover:bg-[#9A94E8] font-semibold px-5 py-3 rounded-full transition-colors"
              >
                <span>READ IN-DEPTH BIOGRAPHY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#F7F5F0] bg-[#1C1C22] hover:bg-[#2E2E35] px-5 py-3 rounded-full border border-[rgba(168,163,154,0.25)] transition-colors"
              >
                <FileText className="w-4 h-4 text-[#9A94E8]" />
                <span>DOWNLOAD RÉSUMÉ (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: IMAGE 04 (Personal Portrait) & IMAGE 03 (Documentary Landscape) */}
          <div className="lg:col-span-5 space-y-6">
            {/* IMAGE 04 — PERSONAL PORTRAIT */}
            <div className="relative rounded-2xl overflow-hidden bg-[#181820] border border-[rgba(168,163,154,0.22)] shadow-xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={profileData.photos.personalPortrait.src}
                  alt={profileData.photos.personalPortrait.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 font-code text-[10px] text-[#F7F5F0] bg-[#0B0B0D]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[rgba(168,163,154,0.2)]">
                  FIG. 04 // PERSONAL
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-editorial text-lg text-[#F7F5F0] font-medium leading-tight">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[11px] text-[#A8A39A] mt-0.5">
                    {profileData.photos.personalPortrait.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Card */}
            <div className="rounded-2xl bg-[#16161C] border border-[rgba(168,163,154,0.18)] p-6 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[rgba(168,163,154,0.12)]">
                <div className="p-2 rounded-lg bg-[#24242C] text-[#9A94E8]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#F7F5F0] font-medium">
                    {profileData.education.degree}
                  </h3>
                  <p className="font-code text-xs text-[#9A94E8]">
                    {profileData.education.field}
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#B5B0A6] font-light leading-relaxed">
                {profileData.education.institution} • Class of {profileData.education.expectedGraduation}
              </div>

              <div className="pt-2 border-t border-[rgba(168,163,154,0.1)]">
                <ul className="space-y-1.5 text-xs text-[#A8A39A] font-light">
                  {profileData.education.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9A94E8] shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
