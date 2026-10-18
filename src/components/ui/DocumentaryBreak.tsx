import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";

export function DocumentaryBreak() {
  const photo = profileData.photos.documentaryPhoto;

  return (
    <section className="py-20 bg-[#0D1427] relative overflow-hidden border-y border-[rgba(160,170,210,0.14)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10182D] border border-[rgba(160,170,210,0.18)] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#0E1528] group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10182D]/95 hidden lg:block" />
            <div className="absolute top-4 left-4 font-code text-[10px] text-[#F0EEF4] bg-[#0B1020]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(160,170,210,0.16)]">
              FIG. 03 // DOCUMENTARY STUDY
            </div>
            <div className="absolute bottom-4 left-4 font-code text-[10px] text-[#A39AFF] bg-[#0B1020]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(160,170,210,0.16)]">
              DATE: {photo.date}
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A39AFF]" />
              <span className="font-code text-xs uppercase tracking-widest text-[#A39AFF]">
                [ PERSPECTIVE // FIELD NOTE ]
              </span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F0EEF4] font-normal leading-tight">
              Engineering is shaped by the world outside the terminal.
            </h3>

            <p className="text-sm sm:text-base text-[#B0AEB8] leading-relaxed font-light">
              Algorithms and database schemas only matter when they meaningfully interact with real human environments. Moving between technical abstraction and physical reality grounds my approach to problem solving.
            </p>

            <div className="pt-4 border-t border-[rgba(160,170,210,0.12)] flex items-center justify-between font-code text-xs text-[#85879B]">
              <span className="truncate max-w-[260px]">CAPTION: {photo.caption}</span>
              <span className="text-[#A39AFF]">ARCHIVE RECORD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
