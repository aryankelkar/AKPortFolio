"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
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
  { label: "ARCHIVE", href: "/achievements", sectionId: "achievements" },
  { label: "JOURNEY", href: "/journey", sectionId: "journey" },
  { label: "ACTIVITIES", href: "/activities", sectionId: "activities" },
  { label: "CONTACT", href: "/contact", sectionId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scroll position for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section on homepage
  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLinkItem) => {
    if (isHome) {
      const targetElement = document.getElementById(link.sectionId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    }
  };

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
              const isSectionActive = isHome && activeSection === link.sectionId;
              const isRouteActive = !isHome && pathname.startsWith(link.href);
              const isActive = isSectionActive || isRouteActive;

              return (
                <Link
                  key={link.label}
                  href={isHome ? `#${link.sectionId}` : link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-code text-xs tracking-widest transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded ${
                    isActive
                      ? "text-[#F0EEF4] font-semibold"
                      : "text-[#959BB5] hover:text-[#F0EEF4]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#8387C3] rounded-full"
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    />
                  )}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#101116]/98 backdrop-blur-xl border-t border-[rgba(255,255,255,0.10)] px-6 py-8 flex flex-col justify-between overflow-y-auto z-50"
        >
          <div className="space-y-4">
            <p className="font-code text-[11px] uppercase tracking-widest text-[#8387C3] mb-4">
              [ DIRECTORY NAVIGATION ]
            </p>
            {NAV_LINKS.map((link) => {
              const isSectionActive = isHome && activeSection === link.sectionId;
              const isRouteActive = !isHome && pathname.startsWith(link.href);
              const isActive = isSectionActive || isRouteActive;

              return (
                <Link
                  key={link.label}
                  href={isHome ? `#${link.sectionId}` : link.href}
                  onClick={(e) => {
                    handleLinkClick(e, link);
                    setMobileMenuOpen(false);
                  }}
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
