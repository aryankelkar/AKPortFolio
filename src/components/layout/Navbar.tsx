"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
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

  const activeSpringConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 26,
    mass: 0.6,
  };

  const wasScrolledRef = useRef(false);

  // High-precision scroll position and active section detection for landing page
  useEffect(() => {
    if (!isHome) {
      const handleScroll = () => {
        const scrolled = window.scrollY > 20;
        if (scrolled !== wasScrolledRef.current) {
          wasScrolledRef.current = scrolled;
          setIsScrolled(scrolled);
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        if (scrolled !== wasScrolledRef.current) {
          wasScrolledRef.current = scrolled;
          setIsScrolled(scrolled);
        }
        if (window.scrollY < 200) {
          setActiveSection((prev) => (prev !== "" ? "" : prev));
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver with focal band (-20% to -55% from viewport top)
    // Completely eliminates forced synchronous layout reflows (offsetTop / offsetHeight) during zoom and resize
    const sectionElements = HOME_SECTIONS.map((s) => ({
      navId: s.navId,
      el: document.getElementById(s.id),
    })).filter((s): s is { navId: string; el: HTMLElement } => s.el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const topVisible = intersecting[0];
          const matched = sectionElements.find((s) => s.el === topVisible.target);
          if (matched && window.scrollY >= 200) {
            setActiveSection((prev) => (prev === matched.navId ? prev : matched.navId));
          }
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25],
      }
    );

    sectionElements.forEach((s) => observer.observe(s.el));

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "bg-[#05040A]/95 border-b border-[rgba(255,255,255,0.08)] py-3 shadow-xl shadow-black/50"
          : "bg-transparent py-4 sm:py-5 border-b border-[rgba(255,255,255,0.05)]"
      }`}
    >
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#F0EEF4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded"
          >
            <span className="font-editorial text-xl sm:text-2xl font-normal tracking-wide group-hover:text-[#8387C3] transition-colors duration-300">
              ARYAN KELKAR
            </span>
            <span className="hidden sm:inline-block font-code text-[10px] text-[#8387C3] bg-[#171924] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.08)] tracking-widest group-hover:border-[rgba(131,135,195,0.3)] transition-colors duration-300">
              ARCHIVE
            </span>
          </Link>

          {/* Desktop Navigation Dock */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#171924]/95 p-1.5 rounded-full border border-[rgba(255,255,255,0.12)] shadow-lg shadow-black/40 transition-all duration-300"
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
                  className={`relative font-code text-xs tracking-widest px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ${
                    isActive
                      ? "text-[#F0EEF4] font-semibold"
                      : "text-[#959BB5] hover:text-[#F0EEF4] hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Subtle active pill backlight with liquid spring motion */}
                  {isActive && (
                    <motion.div
                      layoutId={shouldReduceMotion ? undefined : "nav-active-capsule"}
                      className="absolute inset-0 bg-gradient-to-r from-[#8387C3]/15 via-[#8387C3]/22 to-[#8387C3]/15 rounded-full border border-[rgba(131,135,195,0.32)] shadow-[0_0_14px_rgba(131,135,195,0.22)] pointer-events-none"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : activeSpringConfig
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
                          : activeSpringConfig
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
              className="btn-fluid group inline-flex items-center gap-1.5 font-code text-xs tracking-wider text-[#F0EEF4] bg-[#1E2130] hover:bg-[#262A3E] hover:border-[rgba(131,135,195,0.4)] hover:shadow-[0_0_14px_rgba(131,135,195,0.2)] px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ml-1 transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-[#8387C3]" />
              <span>RÉSUMÉ</span>
              <ArrowUpRight className="w-3 h-3 text-[#8A8CAC] group-hover:text-[#F0EEF4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </nav>

          {/* Mobile Menu Button with Fluid Icon Morph */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#959BB5] hover:text-[#F0EEF4] hover:bg-[#171924] border border-[rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] transition-colors duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <X
                className={`w-5 h-5 text-[#F0EEF4] absolute transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75 pointer-events-none"
                }`}
              />
              <Menu
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0 rotate-90 scale-75 pointer-events-none" : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Fluid Staggered Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#05040A]/98 border-t border-[rgba(255,255,255,0.10)] px-6 py-8 flex flex-col justify-between overflow-y-auto z-50"
          >
            <div className="space-y-3">
              <p className="font-code text-[11px] uppercase tracking-widest text-[#8387C3] mb-4">
                [ DIRECTORY NAVIGATION ]
              </p>
              {NAV_LINKS.map((link, idx) => {
                const isSectionActive = isHome && activeSection === link.sectionId;
                const isRouteActive =
                  !isHome &&
                  (pathname === link.href ||
                    (link.href === "/archive" && pathname === "/achievements") ||
                    (link.href !== "/" && pathname.startsWith(link.href)));
                const isActive = isRouteActive || isSectionActive;

                return (
                  <motion.div
                    key={link.label}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: shouldReduceMotion ? 0 : 0.03 + idx * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 font-editorial text-2xl tracking-wide border-b border-[rgba(255,255,255,0.06)] transition-all duration-200 ${
                        isActive
                          ? "text-[#8387C3] pl-2 font-medium"
                          : "text-[#F0EEF4] hover:text-[#8387C3] hover:pl-2"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : 0.22 }}
              className="pt-8 border-t border-[rgba(255,255,255,0.08)] space-y-4"
            >
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-code text-xs tracking-wider text-[#F0EEF4] bg-[#1A1C28] hover:bg-[#222534] px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-[#8387C3]" />
                <span>VIEW RÉSUMÉ (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8CAC]" />
              </a>

              <div className="text-center font-code text-[11px] text-[#959BB5]">
                {profileData.email}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

