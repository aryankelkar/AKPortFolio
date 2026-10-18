import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { GraduationCap, FileText, ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Me & Engineering Philosophy",
  description:
    "Learn about Aryan Kelkar's background as an Information Technology student, engineering philosophy, academic journey, and technological interests.",
};

export default function AboutPage() {
  const photoPersonal = profileData.photos.personalPortrait;

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-28 pb-20 bg-[#0B1020]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="[ ARCHIVE // 02 ]"
            tag="BIOGRAPHICAL RECORD"
            title="Curious by nature. A builder by choice."
            description="An honest perspective on academic focus, technological inquiry, and the motivation driving my software development journey."
          />

          <div className="space-y-16">
            {/* Biography Narrative with Side-by-Side Photographic Anchor */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 rounded-2xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] p-8 sm:p-10 space-y-6 shadow-xl">
                <span className="font-code text-xs uppercase tracking-widest text-[#A39AFF] block">
                  [ INTELLECTUAL PROFILE ]
                </span>

                <div className="space-y-5 text-base sm:text-lg text-[#B0AEB8] leading-relaxed font-light">
                  {profileData.bio.full.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-[#0E1528] border-l-4 border-l-[#A39AFF] text-sm text-[#F0EEF4] italic font-serif">
                  &ldquo;{profileData.bio.philosophy}&rdquo;
                </div>

                <div className="pt-6 border-t border-[rgba(160,170,210,0.12)] flex flex-wrap items-center gap-4">
                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#0B1020] bg-[#F0EEF4] hover:bg-[#A39AFF] hover:text-[#0B1020] font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>DOWNLOAD RÉSUMÉ (PDF)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#F0EEF4] bg-[#162040] hover:bg-[#1E2C58] px-5 py-3 rounded-full border border-[rgba(160,170,210,0.18)] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#A39AFF]" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#F0EEF4] bg-[#162040] hover:bg-[#1E2C58] px-5 py-3 rounded-full border border-[rgba(160,170,210,0.18)] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#A39AFF]" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>

              {/* Personal Photo Frame */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#10182D] border border-[rgba(160,170,210,0.18)] shadow-xl group">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={photoPersonal.src}
                    alt={photoPersonal.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-85" />
                  <div className="absolute top-4 left-4 font-code text-[10px] text-[#F0EEF4] bg-[#0B1020]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[rgba(160,170,210,0.16)]">
                    FIG. 04 // BIOGRAPHY
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-code text-[#B0AEB8]">
                    {photoPersonal.caption}
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Credentials */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(160,170,210,0.12)]">
                <span className="font-code text-xs font-semibold text-[#A39AFF]">
                  01.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Academic Foundations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] space-y-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#162040] text-[#A39AFF] border border-[rgba(160,170,210,0.16)]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl text-[#F0EEF4]">
                        {profileData.education.degree}
                      </h3>
                      <p className="font-code text-xs text-[#A39AFF]">
                        {profileData.education.field}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#B0AEB8] leading-relaxed font-light">
                    Currently pursuing undergraduate studies in Information Technology with strong emphasis on algorithmic efficiency, operating systems principles, and software architecture.
                  </p>

                  <div className="pt-3 border-t border-[rgba(160,170,210,0.1)] flex justify-between text-xs font-code text-[#85879B]">
                    <span>STATUS: {profileData.education.status}</span>
                    <span className="text-[#A39AFF]">GRADUATION: {profileData.education.expectedGraduation}</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] space-y-3 shadow-md">
                  <span className="font-code text-xs uppercase tracking-widest text-[#A39AFF] block font-semibold">
                    [ ACADEMIC HIGHLIGHTS ]
                  </span>
                  <ul className="space-y-2 text-xs text-[#B0AEB8] font-light">
                    {profileData.education.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#A39AFF] shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Currently Reading & Learning */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(160,170,210,0.12)]">
                <span className="font-code text-xs font-semibold text-[#A39AFF]">
                  02.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Intellectual Curiosities & Active Inquiries
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-[#A39AFF]">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-code text-xs uppercase tracking-wider font-semibold">
                      CURRENT READING LIST
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#B0AEB8] font-light">
                    {profileData.currentReading.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A39AFF] shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-[#A39AFF]">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-code text-xs uppercase tracking-wider font-semibold">
                      ACTIVE TECHNICAL EXPLORATIONS
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#B0AEB8] font-light">
                    {profileData.currentLearning.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A39AFF] shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
