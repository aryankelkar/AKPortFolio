import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { GraduationCap, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Me & Engineering Philosophy",
  description:
    "Learn about Aryan Kelkar's background as an Information Technology student, engineering philosophy, academic journey, and technological interests.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="[ ARCHIVE // 02 ]"
            tag="BIOGRAPHICAL RECORD"
            title="Curious by nature. A builder by choice."
            description="An honest perspective on academic focus, technological inquiry, and the motivation driving my software development journey."
          />

          <div className="space-y-16">
            {/* Biography Narrative */}
            <section className="space-y-6">
              <div className="rounded-2xl bg-[#0D152B] border border-[rgba(131,135,195,0.2)] p-8 sm:p-10 space-y-6">
                <span className="font-code text-xs uppercase tracking-widest text-[#8387C3] block">
                  [ INTELLECTUAL PROFILE ]
                </span>

                <div className="space-y-5 text-base sm:text-lg text-[#959BB5] leading-relaxed font-light">
                  {profileData.bio.full.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[rgba(131,135,195,0.15)] flex flex-wrap items-center gap-4">
                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#0A1123] bg-[#8387C3] hover:bg-[#959BB5] font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>DOWNLOAD OFFICIAL RÉSUMÉ (PDF)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#E7E7F0] bg-[#162040] hover:bg-[#3A3E6C] px-5 py-3 rounded-full border border-[rgba(131,135,195,0.25)] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#8387C3]" />
                    <span>GITHUB PROFILE</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#E7E7F0] bg-[#162040] hover:bg-[#3A3E6C] px-5 py-3 rounded-full border border-[rgba(131,135,195,0.25)] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#8387C3]" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Academic Credentials */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(131,135,195,0.15)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  01.
                </span>
                <h2 className="font-editorial text-2xl text-[#E7E7F0]">
                  Academic Foundations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.18)] space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#162040] text-[#8387C3]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl text-[#E7E7F0]">
                        {profileData.education.degree}
                      </h3>
                      <p className="font-code text-xs text-[#8387C3]">
                        {profileData.education.field}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#959BB5] leading-relaxed font-light">
                    Currently pursuing undergraduate studies in Information Technology with strong emphasis on algorithmic efficiency, operating systems principles, and software architecture.
                  </p>

                  <div className="pt-3 border-t border-[rgba(131,135,195,0.1)] flex justify-between text-xs font-code text-[#8A8CAC]">
                    <span>STATUS: {profileData.education.status}</span>
                    <span className="text-[#8387C3]">GRADUATION: {profileData.education.expectedGraduation}</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.18)] space-y-3">
                  <span className="font-code text-xs uppercase tracking-widest text-[#8387C3] block font-semibold">
                    [ ACADEMIC HIGHLIGHTS ]
                  </span>
                  <ul className="space-y-2 text-xs text-[#959BB5] font-light">
                    {profileData.education.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Core Pillars of Interest */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(131,135,195,0.15)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  02.
                </span>
                <h2 className="font-editorial text-2xl text-[#E7E7F0]">
                  Focus Areas & Engineering Practice
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0F172E] border border-[rgba(131,135,195,0.15)] flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded bg-[#162040] text-[#8387C3] flex items-center justify-center font-code text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-[#E7E7F0] font-light">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
