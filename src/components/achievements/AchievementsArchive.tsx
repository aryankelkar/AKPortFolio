"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, CheckCircle2, ExternalLink, Calendar, Filter } from "lucide-react";
import { achievementsData } from "@/data/achievements";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AchievementsArchiveProps {
  initialLimit?: number;
  showFilters?: boolean;
  showHeader?: boolean;
}

export function AchievementsArchive({
  initialLimit,
  showFilters = false,
  showHeader = true,
}: AchievementsArchiveProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "All",
    "Certifications",
    "Hackathons",
    "Competitions",
    "Academic",
    "Milestones",
  ];

  const filtered = achievementsData.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const displayed = initialLimit ? filtered.slice(0, initialLimit) : filtered;

  return (
    <section id="achievements" className="py-12 lg:py-16 bg-transparent relative">
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              number="[ ARCHIVE ]"
              tag="CREDENTIALS & RECOGNITION"
              title="Achievements, Certifications & Hackathons."
              description="Verified certifications, competitive hackathon defenses, and academic milestones grounded in factual student work."
              className="mb-0"
            />

            {initialLimit && (
              <Link
                href="/archive"
                className="btn-fluid font-code text-xs uppercase tracking-widest text-[#8387C3] hover:text-[#F0EEF4] transition-colors shrink-0 pb-2"
              >
                VIEW ALL CREDENTIALS →
              </Link>
            )}
          </div>
        )}

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-1.5 text-xs font-code text-[#8A8CAC] mr-2">
              <Filter className="w-3.5 h-3.5 text-[#8387C3]" />
              <span>CATEGORY:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-fluid font-code text-xs px-3.5 py-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ${
                  activeCategory === cat
                    ? "bg-[#8387C3] text-[#101116] font-semibold"
                    : "bg-[#171924] text-[#959BB5] hover:text-[#F0EEF4] border border-[rgba(255,255,255,0.08)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(idx * 0.06, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] card-interactive p-6 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="status">{item.category}</Badge>
                  <div className="flex items-center gap-1.5 font-code text-[11px] text-[#8A8CAC]">
                    <Calendar className="w-3 h-3 text-[#8387C3]" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#F0EEF4] leading-snug group-hover:text-[#8387C3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-code text-xs text-[#8387C3] mt-1">
                    {item.issuer}
                  </p>
                </div>

                <p className="text-xs text-[#959BB5] leading-relaxed font-light">
                  {item.description}
                </p>

                {item.keyTakeaways.length > 0 && (
                  <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
                    <span className="font-code text-[10px] text-[#8387C3] uppercase tracking-wider block mb-2">
                      Key Learnings:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#959BB5] font-light">
                      {item.keyTakeaways.map((point, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8387C3] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-5 mt-5 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs font-code">
                <div className="flex items-center gap-1.5 text-[#8A8CAC]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8387C3]" />
                  <span>
                    {item.credentialId ? `ID: ${item.credentialId}` : "VERIFIED RECORD"}
                  </span>
                </div>

                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-[#8387C3] hover:text-[#F0EEF4] transition-colors"
                  >
                    <span>VERIFY</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
