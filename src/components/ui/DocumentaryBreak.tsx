import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";

export function DocumentaryBreak() {
  const photo = profileData.photos.documentaryPhoto;

  return (
    <section className="py-20 bg-[#0B0B0D] relative overflow-hidden border-y border-[rgba(168,163,154,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#141418] border border-[rgba(168,163,154,0.2)] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#181820] group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141418]/90 hidden lg:block" />
            <div className="absolute top-4 left-4 font-code text-[10px] text-[#F7F5F0] bg-[#0B0B0D]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(168,163,154,0.2)]">
              FIG. 03 // DOCUMENTARY STUDY
            </div>
            <div className="absolute bottom-4 left-4 font-code text-[10px] text-[#C6F36A] bg-[#0B0B0D]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(168,163,154,0.2)]">
              DATE: {photo.date}
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A94E8]" />
              <span className="font-code text-xs uppercase tracking-widest text-[#9A94E8]">
                [ PERSPECTIVE // FIELD NOTE ]
              </span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F7F5F0] font-normal leading-tight">
              Engineering is shaped by the world outside the terminal.
            </h3>

            <p className="text-sm sm:text-base text-[#B5B0A6] leading-relaxed font-light">
              Algorithms and database schemas only matter when they meaningfully interact with real human environments. Moving between technical abstraction and physical reality grounds my approach to problem solving.
            </p>

            <div className="pt-4 border-t border-[rgba(168,163,154,0.15)] flex items-center justify-between font-code text-xs text-[#A8A39A]">
              <span>CAPTION: {photo.caption}</span>
              <span className="text-[#9A94E8]">ARCHIVE RECORD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
