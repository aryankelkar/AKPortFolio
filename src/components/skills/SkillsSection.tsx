"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Terminal, Database, Code, Globe, Cpu, Wrench, Filter } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "All",
    "Programming",
    "Frontend",
    "Backend",
    "Databases",
    "AI & ML",
    "Cloud & Tools",
  ];

  const filteredCategories = skillCategories.filter((group) => {
    if (activeCategory === "All") return true;
    return group.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Terminal className="w-4 h-4 text-[#8387C3]" />;
      case "Frontend":
        return <Globe className="w-4 h-4 text-[#8387C3]" />;
      case "Backend":
        return <Code className="w-4 h-4 text-[#8387C3]" />;
      case "Databases":
        return <Database className="w-4 h-4 text-[#8387C3]" />;
      case "AI & ML":
        return <Cpu className="w-4 h-4 text-[#8387C3]" />;
      case "Cloud & Tools":
        return <Wrench className="w-4 h-4 text-[#8387C3]" />;
      default:
        return <Code className="w-4 h-4 text-[#8387C3]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#101116]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 03 ]"
          tag="TECHNICAL REPERTOIRE"
          title="Engineered with intentional tools."
          description="Technologies actively applied across full-stack web architectures, applied machine learning pipelines, and algorithmic systems. No arbitrary progress bars — each technology is linked to applied project implementations."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex items-center gap-1.5 text-xs font-code text-[#8A8CAC] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#8387C3]" />
            <span>FILTER DOMAIN:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`btn-fluid font-code text-xs px-3.5 py-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ${
                activeCategory === cat
                  ? "bg-[#8387C3] text-[#101116] font-semibold shadow-md"
                  : "bg-[#171924] text-[#959BB5] hover:text-[#F0EEF4] border border-[rgba(255,255,255,0.08)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.category}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(idx * 0.06, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] card-interactive p-6 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="p-2.5 rounded-lg bg-[#1E2030] border border-[rgba(255,255,255,0.08)]">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl text-[#F0EEF4] font-normal tracking-wide">
                      {categoryGroup.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#959BB5] mt-3 mb-5 font-light leading-relaxed">
                  {categoryGroup.description}
                </p>

                <div className="space-y-2.5">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-[#111218] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(131,135,195,0.35)] transition-all duration-200"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-code text-xs font-medium text-[#F0EEF4]">
                          {skill.name}
                        </span>
                        {skill.demonstratedIn && skill.demonstratedIn.length > 0 && (
                          <span className="font-code text-[10px] text-[#8387C3] truncate max-w-[150px]">
                            {skill.demonstratedIn.join(", ")}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-[#959BB5] mt-1 font-light leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-[rgba(255,255,255,0.08)] flex justify-between items-center text-[10px] font-code text-[#8A8CAC]">
                <span>CATEGORY VERIFIED</span>
                <span className="text-[#8387C3] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8387C3]" />
                  APPLIED REPERTOIRE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
