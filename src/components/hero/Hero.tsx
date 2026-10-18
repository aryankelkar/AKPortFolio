"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, Code, Cpu, Compass } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Atmospheric Gradient and Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-5 sm:right-20 w-96 h-96 bg-[#3A3E6C]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8387C3]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Typographic Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top metadata tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 text-xs font-code tracking-widest uppercase text-[#8387C3]"
            >
              <span className="px-2.5 py-1 rounded-sm bg-[#101830] border border-[rgba(131,135,195,0.25)] text-[#E7E7F0]">
                INFORMATION TECHNOLOGY / SOFTWARE & AI
              </span>
              <span className="text-[#8A8CAC]">•</span>
              <span className="text-[#959BB5]">PERSONAL ARCHIVE</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#E7E7F0] leading-[0.9]">
                ARYAN
                <br />
                <span className="italic font-light text-[#8387C3] hover:text-[#E7E7F0] transition-colors">
                  KELKAR.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Statement Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="font-serif italic text-xl sm:text-2xl max-w-xl leading-relaxed text-[#959BB5]"
            >
              &ldquo;I build digital experiences, intelligent systems, and
              technology that solves real problems.&rdquo;
            </motion.p>

            {/* Three Pillar Labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3 rounded-lg bg-[#101830]/80 border border-[rgba(131,135,195,0.15)] flex items-center gap-2.5">
                <Code className="w-4 h-4 text-[#8387C3] shrink-0" />
                <span className="font-code text-xs uppercase tracking-wider text-[#E7E7F0]">
                  SOFTWARE DEVELOPMENT
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#101830]/80 border border-[rgba(131,135,195,0.15)] flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[#8387C3] shrink-0" />
                <span className="font-code text-xs uppercase tracking-wider text-[#E7E7F0]">
                  AI & MACHINE LEARNING
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#101830]/80 border border-[rgba(131,135,195,0.15)] flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#8387C3] shrink-0" />
                <span className="font-code text-xs uppercase tracking-wider text-[#E7E7F0]">
                  CREATIVE TECHNOLOGY
                </span>
              </div>
            </motion.div>

            {/* Primary & Secondary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest bg-[#8387C3] hover:bg-[#959BB5] text-[#0A1123] font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-[#8387C3]/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7E7F0]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest bg-[#162040] hover:bg-[#3A3E6C] text-[#E7E7F0] px-6 py-3.5 rounded-full border border-[rgba(131,135,195,0.3)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>MORE ABOUT ME</span>
                <ArrowDownRight className="w-4 h-4 text-[#8387C3] group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Editorial Geometry & Profile Dossier Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-[#121935] to-[#0D1429] border border-[rgba(131,135,195,0.22)] p-6 sm:p-8 shadow-2xl shadow-black/40">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[rgba(131,135,195,0.15)]">
                <div>
                  <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-widest block">
                    [ DOSSIER // TECHNICAL PROFILE ]
                  </span>
                  <h3 className="font-editorial text-2xl text-[#E7E7F0] mt-1 font-medium">
                    Aryan Kelkar
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1A2345] border border-[rgba(131,135,195,0.3)] flex items-center justify-center font-code text-xs text-[#8387C3]">
                  AK
                </div>
              </div>

              {/* Specs Grid */}
              <div className="py-6 space-y-4 text-xs font-sans">
                <div className="flex justify-between items-baseline py-1 border-b border-[rgba(131,135,195,0.08)]">
                  <span className="font-code text-[#959BB5] uppercase tracking-wider">
                    Discipline
                  </span>
                  <span className="text-[#E7E7F0] font-medium text-right">
                    Information Technology
                  </span>
                </div>

                <div className="flex justify-between items-baseline py-1 border-b border-[rgba(131,135,195,0.08)]">
                  <span className="font-code text-[#959BB5] uppercase tracking-wider">
                    Focus
                  </span>
                  <span className="text-[#E7E7F0] font-medium text-right">
                    Full-Stack & Machine Learning
                  </span>
                </div>

                <div className="flex justify-between items-baseline py-1 border-b border-[rgba(131,135,195,0.08)]">
                  <span className="font-code text-[#959BB5] uppercase tracking-wider">
                    Core Tooling
                  </span>
                  <span className="text-[#8387C3] font-code text-right">
                    Python, TS, Next.js, Postgres
                  </span>
                </div>

                <div className="flex justify-between items-baseline py-1 border-b border-[rgba(131,135,195,0.08)]">
                  <span className="font-code text-[#959BB5] uppercase tracking-wider">
                    Methodology
                  </span>
                  <span className="text-[#E7E7F0] font-medium text-right">
                    Architectural Rigor & Civic Impact
                  </span>
                </div>
              </div>

              {/* Quantified Technical Inventory */}
              <div className="grid grid-cols-3 gap-3 pt-2 pb-6 border-b border-[rgba(131,135,195,0.15)] text-center">
                <div className="p-3 rounded-lg bg-[#0A1123]/60 border border-[rgba(131,135,195,0.12)]">
                  <div className="font-editorial text-3xl font-medium text-[#E7E7F0]">
                    07
                  </div>
                  <div className="font-code text-[10px] uppercase text-[#959BB5] tracking-wider mt-1">
                    Projects
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0A1123]/60 border border-[rgba(131,135,195,0.12)]">
                  <div className="font-editorial text-3xl font-medium text-[#8387C3]">
                    06
                  </div>
                  <div className="font-code text-[10px] uppercase text-[#959BB5] tracking-wider mt-1">
                    Milestones
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0A1123]/60 border border-[rgba(131,135,195,0.12)]">
                  <div className="font-editorial text-3xl font-medium text-[#E7E7F0]">
                    04
                  </div>
                  <div className="font-code text-[10px] uppercase text-[#959BB5] tracking-wider mt-1">
                    Domains
                  </div>
                </div>
              </div>

              {/* Dossier Footer Links */}
              <div className="pt-6 flex items-center justify-between">
                <span className="font-code text-[11px] text-[#8A8CAC]">
                  DOCUMENT REF: AK-2026-PORTFOLIO
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#959BB5] hover:text-[#E7E7F0] transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
