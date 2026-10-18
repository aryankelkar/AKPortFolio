"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

const NAV_LINKS = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "ARCHIVE", href: "/achievements" },
  { label: "JOURNEY", href: "/journey" },
  { label: "ACTIVITIES", href: "/activities" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101116]/92 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3.5 shadow-xl shadow-black/40"
          : "bg-transparent py-5 border-b border-[rgba(255,255,255,0.05)]"
      }`}
    >
      {/* Scroll Progress Indicator Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8387C3] via-[#F0EEF4] to-[#8387C3] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#F0EEF4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded"
          >
            <span className="font-editorial text-xl sm:text-2xl font-normal tracking-wide group-hover:text-[#8387C3] transition-colors">
              ARYAN KELKAR
            </span>
            <span className="hidden sm:inline-block font-code text-[10px] text-[#8387C3] bg-[#171924] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.08)] tracking-widest">
              ARCHIVE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-code text-xs tracking-widest transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded ${
                    isActive
                      ? "text-[#F0EEF4] font-semibold border-b-2 border-[#8387C3]"
                      : "text-[#959BB5] hover:text-[#F0EEF4]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Resume button */}
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-code text-xs tracking-wider text-[#F0EEF4] bg-[#1A1C28] hover:bg-[#222534] px-4 py-2 rounded-full border border-[rgba(255,255,255,0.12)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
            >
              <FileText className="w-3.5 h-3.5 text-[#8387C3]" />
              <span>RÉSUMÉ</span>
              <ArrowUpRight className="w-3 h-3 text-[#8A8CAC]" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#959BB5] hover:text-[#F0EEF4] hover:bg-[#171924] border border-[rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#F0EEF4]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#101116]/98 backdrop-blur-xl border-t border-[rgba(255,255,255,0.10)] px-6 py-8 flex flex-col justify-between overflow-y-auto"
        >
          <div className="space-y-4">
            <p className="font-code text-[11px] uppercase tracking-widest text-[#8387C3] mb-4">
              [ DIRECTORY NAVIGATION ]
            </p>
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 font-editorial text-2xl tracking-wide border-b border-[rgba(255,255,255,0.06)] transition-colors ${
                    isActive
                      ? "text-[#8387C3] pl-2 font-medium"
                      : "text-[#F0EEF4] hover:text-[#8387C3]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] space-y-4">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 font-code text-xs tracking-wider text-[#F0EEF4] bg-[#1A1C28] hover:bg-[#222534] px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] transition-all"
            >
              <FileText className="w-4 h-4 text-[#8387C3]" />
              <span>VIEW RÉSUMÉ (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8CAC]" />
            </a>

            <div className="text-center font-code text-[11px] text-[#959BB5]">
              {profileData.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
