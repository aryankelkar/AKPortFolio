"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[rgba(160,170,210,0.14)] bg-[#090E1C] text-[#B0AEB8] pt-16 pb-12 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(160,170,210,0.12)]">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-2xl text-[#F0EEF4] tracking-wide">
                ARYAN KELKAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A39AFF]" />
              <span className="font-code text-xs text-[#A39AFF]">2026 ARCHIVE</span>
            </div>
            <p className="text-sm leading-relaxed text-[#B0AEB8] max-w-md font-light">
              Information Technology student focused on software engineering,
              applied machine learning, and civic technology. Committed to
              accessible, high-performance web systems that address real-world
              needs.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A39AFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A39AFF]"></span>
              </span>
              <span className="font-code text-xs text-[#F0EEF4]">
                Active builder &bull; Open to collaborative engineering
              </span>
            </div>
          </div>

          {/* Quick Directory */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-code text-xs uppercase tracking-widest text-[#A39AFF]">
              [ INDEX ]
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/work"
                  className="hover:text-[#F0EEF4] transition-colors"
                >
                  Selected Works & Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F0EEF4] transition-colors"
                >
                  Biography & Engineering Focus
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-[#F0EEF4] transition-colors"
                >
                  Certifications & Recognitions
                </Link>
              </li>
              <li>
                <Link
                  href="/journey"
                  className="hover:text-[#F0EEF4] transition-colors"
                >
                  Chronological Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-[#F0EEF4] transition-colors"
                >
                  Extracurriculars & Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F0EEF4] transition-colors"
                >
                  Contact & Communication
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Repositories */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-code text-xs uppercase tracking-widest text-[#A39AFF]">
              [ CHANNELS ]
            </h3>
            <div className="space-y-2.5">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] text-[#F0EEF4] transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-xs font-code">
                  <GithubIcon className="w-4 h-4 text-[#A39AFF]" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#85879B] group-hover:text-[#F0EEF4]" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] text-[#F0EEF4] transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-xs font-code">
                  <LinkedinIcon className="w-4 h-4 text-[#A39AFF]" />
                  <span>LinkedIn Network</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#85879B] group-hover:text-[#F0EEF4]" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-between p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] text-[#F0EEF4] transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-xs font-code">
                  <Mail className="w-4 h-4 text-[#A39AFF]" />
                  <span>Direct Electronic Mail</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#85879B] group-hover:text-[#F0EEF4]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-[#85879B]">
          <div>
            &copy; 2026 Aryan Kelkar. The Personal Engineering Archive.
          </div>

          <div className="flex items-center gap-6">
            <span>Next.js App Router &bull; TypeScript &bull; Tailwind</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#A39AFF] hover:text-[#F0EEF4] transition-colors focus:outline-none"
              aria-label="Back to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
