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
    <section id="contact" className="py-24 lg:py-32 relative bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="[ 07 ]"
          tag="CLOSING // TRANSMISSION"
          title={profileData.closing.headline}
          description={profileData.closing.supporting}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: IMAGE 05 (Signature Portrait) & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* IMAGE 05 — SIGNATURE PORTRAIT */}
            <div className="relative rounded-2xl overflow-hidden bg-[#181820] border border-[rgba(168,163,154,0.22)] shadow-2xl group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 font-code text-[10px] text-[#F7F5F0] bg-[#0B0B0D]/85 backdrop-blur-md px-3 py-1 rounded border border-[rgba(168,163,154,0.2)]">
                  FIG. 05 // SIGNATURE STUDY
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-code text-[10px] uppercase text-[#9A94E8] tracking-wider block">
                    FINAL MEMORANDUM
                  </span>
                  <p className="font-editorial text-xl text-[#F7F5F0] font-medium leading-tight mt-0.5">
                    Aryan Kelkar
                  </p>
                  <p className="font-code text-[11px] text-[#A8A39A] mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Channels Card */}
            <div className="rounded-2xl bg-[#141418] border border-[rgba(168,163,154,0.18)] p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(168,163,154,0.12)]">
                <span className="font-code text-xs uppercase text-[#9A94E8] font-semibold">
                  DIRECT CHANNELS
                </span>
                <span className="font-code text-[10px] text-[#C6F36A]">
                  RECEPTIVE
                </span>
              </div>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0B0D] border border-[rgba(168,163,154,0.14)] hover:border-[rgba(154,148,232,0.4)] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#1C1C22] text-[#9A94E8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#A8A39A] block">
                      Electronic Mail
                    </span>
                    <span className="text-xs sm:text-sm text-[#F7F5F0] font-medium">
                      {profileData.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A8A39A] group-hover:text-[#F7F5F0]" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0B0D] border border-[rgba(168,163,154,0.14)] hover:border-[rgba(154,148,232,0.4)] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#1C1C22] text-[#9A94E8]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#A8A39A] block">
                      GitHub
                    </span>
                    <span className="text-xs sm:text-sm text-[#F7F5F0] font-medium">
                      github.com/aryankelkar
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A8A39A] group-hover:text-[#F7F5F0]" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0B0D] border border-[rgba(168,163,154,0.14)] hover:border-[rgba(154,148,232,0.4)] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#1C1C22] text-[#9A94E8]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#A8A39A] block">
                      LinkedIn
                    </span>
                    <span className="text-xs sm:text-sm text-[#F7F5F0] font-medium">
                      linkedin.com/in/aryankelkar
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A8A39A] group-hover:text-[#F7F5F0]" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#1C1C22] border border-[rgba(154,148,232,0.3)] hover:bg-[#2E2E35] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0B0B0D] text-[#C6F36A]">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-code text-[10px] uppercase text-[#C6F36A] block font-semibold">
                      Curriculum Vitae
                    </span>
                    <span className="text-xs sm:text-sm text-[#F7F5F0] font-medium">
                      Download Résumé (PDF)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F7F5F0]" />
              </a>

              <div className="pt-2 flex items-center gap-2 text-xs font-code text-[#A8A39A]">
                <MapPin className="w-3.5 h-3.5 text-[#9A94E8]" />
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
