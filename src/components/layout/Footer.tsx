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
    <footer className="border-t border-[rgba(168,163,154,0.15)] bg-[#070709] text-[#A8A39A] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(168,163,154,0.1)]">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-2xl text-[#F7F5F0] tracking-wide">
                ARYAN KELKAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A94E8]" />
              <span className="font-code text-xs text-[#9A94E8]">2026 ARCHIVE</span>
            </div>
            <p className="text-sm leading-relaxed text-[#B5B0A6] max-w-md font-light">
              Information Technology student focused on software engineering,
              applied machine learning, and civic technology. Committed to
              accessible, high-performance web systems that address real-world
              needs.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F36A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F36A]"></span>
              </span>
              <span className="font-code text-xs text-[#F7F5F0]">
                Active builder • Open to collaborative engineering
              </span>
            </div>
          </div>

          {/* Quick Directory */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-code text-xs uppercase tracking-widest text-[#9A94E8]">
              [ INDEX ]
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/work"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  Selected Works & Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  Biography & Engineering Focus
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  Certifications & Recognitions
                </Link>
              </li>
              <li>
                <Link
                  href="/journey"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  Chronological Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  Extracurriculars & Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  Contact & Communication
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Repositories */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-code text-xs uppercase tracking-widest text-[#9A94E8]">
              [ CHANNELS ]
            </h3>
            <div className="space-y-2.5">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#141418] border border-[rgba(168,163,154,0.15)] hover:border-[rgba(154,148,232,0.4)] text-[#F7F5F0] transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-xs font-code">
                  <GithubIcon className="w-4 h-4 text-[#9A94E8]" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A8A39A] group-hover:text-[#F7F5F0]" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#141418] border border-[rgba(168,163,154,0.15)] hover:border-[rgba(154,148,232,0.4)] text-[#F7F5F0] transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-xs font-code">
                  <LinkedinIcon className="w-4 h-4 text-[#9A94E8]" />
                  <span>LinkedIn Network</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A8A39A] group-hover:text-[#F7F5F0]" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-between p-2.5 rounded bg-[#141418] border border-[rgba(168,163,154,0.15)] hover:border-[rgba(154,148,232,0.4)] text-[#F7F5F0] transition-colors group"
              >
                <div className="flex items-center gap-2.5 text-xs font-code">
                  <Mail className="w-4 h-4 text-[#9A94E8]" />
                  <span>Direct Electronic Mail</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A8A39A] group-hover:text-[#F7F5F0]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-[#A8A39A]">
          <div>
            © 2026 Aryan Kelkar. Designed as an authentic technical archive.
          </div>

          <div className="flex items-center gap-6">
            <span>Next.js App Router • TypeScript • Tailwind</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#9A94E8] hover:text-[#F7F5F0] transition-colors focus:outline-none"
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
