"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

interface NavLinkItem {
  label: string;
  href: string;
  sectionId: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "WORK", href: "/work", sectionId: "work" },
  { label: "ABOUT", href: "/about", sectionId: "about" },
  { label: "ARCHIVE", href: "/archive", sectionId: "achievements" },
  { label: "JOURNEY", href: "/journey", sectionId: "journey" },
  { label: "ACTIVITIES", href: "/activities", sectionId: "activities" },
  { label: "CONTACT", href: "/contact", sectionId: "contact" },
];

// Mapping of all page sections in reading order to their parent nav link
const HOME_SECTIONS = [
  { id: "work", navId: "work" },
  { id: "about", navId: "about" },
  { id: "skills", navId: "about" }, // skills is grouped under about
  { id: "achievements", navId: "achievements" },
  { id: "journey", navId: "journey" },
  { id: "activities", navId: "activities" },
  { id: "contact", navId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  // High-precision scroll position and active section detection for landing page
  useEffect(() => {
    if (!isHome) {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    let rafId: number | null = null;
    // Cache section boundaries to eliminate DOM query layout thrashing during scroll
    let cachedSections: { navId: string; top: number; height: number }[] = [];

    const measureSections = () => {
      cachedSections = HOME_SECTIONS.map((item) => {
        const el = document.getElementById(item.id);
        return {
          navId: item.navId,
          top: el ? el.offsetTop : 0,
          height: el ? el.offsetHeight : 0,
        };
      }).filter((s) => s.top > 0);
    };

    const determineActiveSection = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // 1. If at or near top (Hero zone), no nav link is active
      if (scrollY < 240) {
        setActiveSection("");
        return;
      }

      // 2. If at bottom of page (within 100px of bottom), Contact is active
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // 3. Focal line: 35% from the top of the viewport
      const focalPoint = scrollY + windowHeight * 0.35;
      let matchedNavId = "";

      // Find section currently crossing the focal line using cached layout bounds
      for (const item of cachedSections) {
        if (focalPoint >= item.top && focalPoint < item.top + item.height) {
          matchedNavId = item.navId;
          break;
        }
      }

      // Fallback: If between sections, select the most recent section passed
      if (!matchedNavId) {
        for (let i = cachedSections.length - 1; i >= 0; i--) {
          if (focalPoint >= cachedSections[i].top) {
            matchedNavId = cachedSections[i].navId;
            break;
          }
        }
      }

      setActiveSection(matchedNavId);
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(determineActiveSection);
    };

    const handleResize = () => {
      measureSections();
      handleScroll();
    };

    // Initial measurement and check on mount
    measureSections();
    determineActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isHome]);

  // Escape key handler & focus trapping for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101116]/92 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-4 sm:py-5 border-b border-[rgba(255,255,255,0.05)]"
      }`}
    >
      {/* Precision Scroll Reading Gauge */}
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[rgba(255,255,255,0.05)] pointer-events-none overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8387C3]/30 via-[#8387C3] to-[#F0EEF4] origin-left shadow-[0_0_8px_rgba(131,135,195,0.7)]"
          style={{ scaleX }}
        />
      </div>

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

          {/* Desktop Navigation Dock */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#171924]/70 p-1.5 rounded-full border border-[rgba(255,255,255,0.08)] backdrop-blur-md shadow-lg shadow-black/30"
          >
            {NAV_LINKS.map((link) => {
              const isSectionActive = isHome && activeSection === link.sectionId;
              const isRouteActive =
                !isHome &&
                (pathname === link.href ||
                  (link.href === "/archive" && pathname === "/achievements") ||
                  (link.href !== "/" && pathname.startsWith(link.href)));
              const isActive = isRouteActive || isSectionActive;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-code text-xs tracking-widest px-3.5 py-1.5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ${
                    isActive
                      ? "text-[#F0EEF4] font-semibold"
                      : "text-[#959BB5] hover:text-[#F0EEF4] hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Subtle active pill backlight */}
                  {isActive && (
                    <motion.div
                      layoutId={shouldReduceMotion ? undefined : "nav-active-capsule"}
                      className="absolute inset-0 bg-[#8387C3]/15 rounded-full border border-[rgba(131,135,195,0.28)] shadow-[0_0_12px_rgba(131,135,195,0.2)] pointer-events-none"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 32 }
                      }
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>

                  {/* Refined luminous underline bar with precision optic diamond */}
                  {isActive && (
                    <motion.div
                      layoutId={shouldReduceMotion ? undefined : "nav-active-underline"}
                      className="absolute -bottom-2 inset-x-2 flex flex-col items-center pointer-events-none"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 32 }
                      }
                    >
                      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#8387C3] to-transparent rounded-full shadow-[0_0_8px_rgba(131,135,195,0.9)]" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#F0EEF4] -mt-[3.5px] shadow-[0_0_6px_rgba(240,238,244,1)]" />
                    </motion.div>
                  )}
                </Link>
              );
            })}

            {/* Resume button */}
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fluid group inline-flex items-center gap-1.5 font-code text-xs tracking-wider text-[#F0EEF4] bg-[#1E2130] hover:bg-[#282C40] px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ml-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#8387C3]" />
              <span>RÉSUMÉ</span>
              <ArrowUpRight className="w-3 h-3 text-[#8A8CAC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
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

      {/* Mobile Drawer with Fluid AnimatePresence Transition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#101116]/98 backdrop-blur-xl border-t border-[rgba(255,255,255,0.10)] px-6 py-8 flex flex-col justify-between overflow-y-auto z-50"
          >
            <div className="space-y-4">
              <p className="font-code text-[11px] uppercase tracking-widest text-[#8387C3] mb-4">
                [ DIRECTORY NAVIGATION ]
              </p>
              {NAV_LINKS.map((link) => {
                const isSectionActive = isHome && activeSection === link.sectionId;
                const isRouteActive =
                  !isHome &&
                  (pathname === link.href ||
                    (link.href === "/archive" && pathname === "/achievements") ||
                    (link.href !== "/" && pathname.startsWith(link.href)));
                const isActive = isRouteActive || isSectionActive;

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

