"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profileData } from "@/data/profile";

export function DocumentaryBreak() {
  const photo = profileData.photos.documentaryPhoto;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[#101116] relative overflow-hidden border-y border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-[#171924] border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          {/* Photo Column with Editorial Mask Reveal */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#111218] overflow-hidden group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#171924]/95 hidden lg:block pointer-events-none" />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.35 }}
              className="absolute top-4 left-4 font-code text-[10px] text-[#F0EEF4] bg-[#101116]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(255,255,255,0.1)] pointer-events-none"
            >
              FIG. 03 // DOCUMENTARY STUDY
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="absolute bottom-4 left-4 font-code text-[10px] text-[#8387C3] bg-[#101116]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(255,255,255,0.1)] pointer-events-none"
            >
              DATE: {photo.date}
            </motion.div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8387C3]" />
              <span className="font-code text-xs uppercase tracking-widest text-[#8387C3]">
                [ PERSPECTIVE // FIELD NOTE ]
              </span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F0EEF4] font-normal leading-tight">
              Engineering is shaped by the world outside the terminal.
            </h3>

            <p className="text-sm sm:text-base text-[#959BB5] leading-relaxed font-light">
              Algorithms and database schemas only matter when they meaningfully interact with real human environments. Moving between technical abstraction and physical reality grounds my approach to problem solving.
            </p>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between font-code text-xs text-[#8A8CAC]">
              <span className="truncate max-w-[260px]">CAPTION: {photo.caption}</span>
              <span className="text-[#8387C3]">ARCHIVE RECORD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
