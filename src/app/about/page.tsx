import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { GraduationCap, FileText, ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Me & Engineering Philosophy",
  description:
    "Learn about Aryan Kelkar's background as a Third Year B.Tech Information Technology student at Vidyalankar Institute of Technology, Mumbai, engineering philosophy, academic journey, and technological interests.",
};

export default function AboutPage() {
  const photoPersonal = profileData.photos.personalPortrait;

  return (
    <div className="pt-28 pb-20">
        <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            number="[ ARCHIVE // 02 ]"
            tag="BIOGRAPHICAL RECORD"
            title="Curious by nature. A builder by choice."
            description="An honest perspective on academic focus, technological inquiry, and the motivation driving my software development journey."
          />

          <div className="space-y-16">
            {/* Biography Narrative with Side-by-Side Photographic Anchor */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 rounded-2xl bg-[#171924] border border-[rgba(255,255,255,0.08)] p-8 sm:p-10 space-y-6 shadow-xl">
                <span className="font-code text-xs uppercase tracking-widest text-[#8387C3] block">
                  [ INTELLECTUAL PROFILE ]
                </span>

                <div className="space-y-5 text-base sm:text-lg text-[#959BB5] leading-relaxed font-light">
                  {profileData.bio.full.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-[#151720] border-l-4 border-l-[#8387C3] text-sm text-[#F0EEF4] italic font-serif">
                  &ldquo;{profileData.bio.philosophy}&rdquo;
                </div>

                <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center gap-4">
                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#101116] bg-[#E7E7F0] hover:bg-[#8387C3] font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>DOWNLOAD RÉSUMÉ (PDF)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#F0EEF4] bg-[#1E2030] hover:bg-[#1E2C58] px-5 py-3 rounded-full border border-[rgba(255,255,255,0.08)] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#8387C3]" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#F0EEF4] bg-[#1E2030] hover:bg-[#1E2C58] px-5 py-3 rounded-full border border-[rgba(255,255,255,0.08)] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#8387C3]" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>

              {/* Personal Photo Frame */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#171924] border border-[rgba(255,255,255,0.08)] shadow-xl group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={photoPersonal.src}
                    alt={photoPersonal.alt}
                    fill
                    quality={92}
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-code text-[#959BB5]">
                    {photoPersonal.caption}
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Credentials */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  01.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Academic Foundations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#1E2030] text-[#8387C3] border border-[rgba(255,255,255,0.08)]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl text-[#F0EEF4]">
                        {profileData.education.degree} — {profileData.education.field}
                      </h3>
                      <p className="font-code text-xs text-[#8387C3]">
                        {profileData.education.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#959BB5] leading-relaxed font-light">
                    Currently a Third Year B.Tech student in Information Technology at Vidyalankar Institute of Technology (VIT), Mumbai, with strong emphasis on software architecture, algorithmic efficiency, operating systems, and intelligent systems.
                  </p>

                  <div className="pt-3 border-t border-[rgba(255,255,255,0.08)] flex justify-between text-xs font-code text-[#8A8CAC]">
                    <span>STATUS: {profileData.education.status}</span>
                    <span className="text-[#8387C3]">GRADUATION: {profileData.education.expectedGraduation}</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 shadow-md">
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

            {/* Currently Reading & Learning */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  02.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Intellectual Curiosities & Active Inquiries
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-[#8387C3]">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-code text-xs uppercase tracking-wider font-semibold">
                      CURRENT READING LIST
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#959BB5] font-light">
                    {profileData.currentReading.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-[#8387C3]">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-code text-xs uppercase tracking-wider font-semibold">
                      ACTIVE TECHNICAL EXPLORATIONS
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#959BB5] font-light">
                    {profileData.currentLearning.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
    </div>
  );
}
