import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Compass, BookOpen, FileText } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#080E1C] relative border-y border-[rgba(131,135,195,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="[ 02 ]"
          tag="BIOGRAPHY & INTELLECTUAL DIRECTION"
          title="Curious by nature. A builder by choice."
          description="A personal perspective on engineering philosophy, technological curiosity, and academic inquiry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text and Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#959BB5] leading-relaxed font-light">
              {profileData.bio.full.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Strategic Focus Blocks */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.15)] space-y-2">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <Compass className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    ENGINEERING PHILOSOPHY
                  </span>
                </div>
                <p className="text-xs text-[#959BB5] leading-relaxed font-light">
                  Building with purpose. Prioritizing reliable data flow,
                  accessible user experiences, and maintainable software over
                  fleeting trends.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.15)] space-y-2">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    CONTINUOUS LEARNING
                  </span>
                </div>
                <p className="text-xs text-[#959BB5] leading-relaxed font-light">
                  Actively dissecting research papers, exploring ML pipelines,
                  and experimenting with novel systems programming paradigms.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#0A1123] bg-[#8387C3] hover:bg-[#959BB5] font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <span>FULL BIOGRAPHY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#E7E7F0] bg-[#162040] hover:bg-[#3A3E6C] px-5 py-2.5 rounded-full border border-[rgba(131,135,195,0.25)] transition-colors"
              >
                <FileText className="w-4 h-4 text-[#8387C3]" />
                <span>DOWNLOAD RÉSUMÉ</span>
              </a>
            </div>
          </div>

          {/* Academic & Intellectual Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0D152B] border border-[rgba(131,135,195,0.2)] p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 pb-5 border-b border-[rgba(131,135,195,0.12)]">
                <div className="p-2.5 rounded-lg bg-[#162040] text-[#8387C3]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#E7E7F0] font-medium">
                    Academic Background
                  </h3>
                  <span className="font-code text-xs text-[#8387C3]">
                    {profileData.education.status}
                  </span>
                </div>
              </div>

              <div className="py-5 space-y-3 text-xs font-sans">
                <div>
                  <span className="font-code text-[11px] text-[#959BB5] uppercase block">
                    Degree & Specialization
                  </span>
                  <p className="text-sm text-[#E7E7F0] font-medium mt-0.5">
                    {profileData.education.degree} in {profileData.education.field}
                  </p>
                </div>

                <div>
                  <span className="font-code text-[11px] text-[#959BB5] uppercase block">
                    Institution
                  </span>
                  <p className="text-xs text-[#E7E7F0] mt-0.5">
                    {profileData.education.institution}
                  </p>
                </div>

                <div>
                  <span className="font-code text-[11px] text-[#959BB5] uppercase block">
                    Expected Graduation
                  </span>
                  <p className="text-xs text-[#8387C3] font-code mt-0.5">
                    Class of {profileData.education.expectedGraduation}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(131,135,195,0.12)]">
                <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider block mb-2.5">
                  Academic Focus & Coursework
                </span>
                <ul className="space-y-2 text-xs text-[#959BB5] font-light">
                  {profileData.education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#8387C3] shrink-0">•</span>
                      <span>{highlight}</span>
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
