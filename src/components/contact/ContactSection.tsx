import React from "react";
import Image from "next/image";
import { Mail, FileText, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  const photo = profileData.photos.signaturePortrait;

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-[#151720]/80 backdrop-blur-sm border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 06 ]"
          tag="CONTACT / COLLABORATION"
          title="Have something worth building?"
          description="Open to interesting ideas, meaningful problems, and collaborative engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: IMAGE 05 (Signature Portrait) & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* IMAGE 05 — SIGNATURE PORTRAIT */}
            <div className="relative rounded-2xl overflow-hidden bg-[#171924] border border-[rgba(255,255,255,0.08)] shadow-2xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151720] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 font-code text-[10px] text-[#F0EEF4] bg-[#111218]/90 backdrop-blur-md px-3 py-1 rounded border border-[rgba(255,255,255,0.1)]">
                  FIG. 05 // SIGNATURE STUDY
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-code text-[10px] uppercase text-[#8387C3] tracking-wider block">
                    FINAL MEMORANDUM
                  </span>
                  <p className="font-editorial text-xl text-[#F0EEF4] font-medium leading-tight mt-0.5">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[11px] text-[#959BB5] mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Channels Card */}
            <div className="rounded-2xl bg-[#171924] border border-[rgba(255,255,255,0.08)] p-6 space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs uppercase text-[#8387C3] font-semibold">
                  DIRECT CHANNELS
                </span>
                <span className="font-code text-[10px] text-[#8387C3]">
                  ACTIVE & RECEPTIVE
                </span>
              </div>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#111218] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(131,135,195,0.5)] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1E2030] text-[#8387C3]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#8A8CAC] block">
                      Electronic Mail
                    </span>
                    <span className="text-xs sm:text-sm text-[#F0EEF4] font-medium">
                      {profileData.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8CAC] group-hover:text-[#F0EEF4]" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#111218] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(131,135,195,0.5)] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1E2030] text-[#8387C3]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#8A8CAC] block">
                      GitHub
                    </span>
                    <span className="text-xs sm:text-sm text-[#F0EEF4] font-medium">
                      github.com/aryankelkar
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8CAC] group-hover:text-[#F0EEF4]" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#111218] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(131,135,195,0.5)] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1E2030] text-[#8387C3]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#8A8CAC] block">
                      LinkedIn
                    </span>
                    <span className="text-xs sm:text-sm text-[#F0EEF4] font-medium">
                      linkedin.com/in/aryankelkar
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8CAC] group-hover:text-[#F0EEF4]" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#1E2030] border border-[rgba(131,135,195,0.3)] hover:bg-[#25283C] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#111218] text-[#8387C3]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#8387C3] block font-semibold">
                      Curriculum Vitae
                    </span>
                    <span className="text-xs sm:text-sm text-[#F0EEF4] font-medium">
                      Download Résumé (PDF)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F0EEF4]" />
              </a>

              <div className="pt-2 flex items-center gap-2 text-xs font-code text-[#8A8CAC]">
                <MapPin className="w-3.5 h-3.5 text-[#8387C3]" />
                <span>Location: India (Open to Collaborative Engineering)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
