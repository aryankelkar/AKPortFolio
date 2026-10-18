"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  Terminal,
  Database,
  Code,
  Globe,
  Cpu,
  Wrench,
  Layers,
  ChevronDown,
  Server,
  Cloud,
  Box,
  Binary
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

// 15 primary technologies featured in reference design board
const PRIMARY_TECH_STACK = [
  { name: "Python", category: "Core Language", icon: Binary, highlight: "AI & ML" },
  { name: "TypeScript", category: "Type-Safe Web", icon: Code, highlight: "Full Stack" },
  { name: "JavaScript", category: "Client Engine", icon: Globe, highlight: "Frontend" },
  { name: "React", category: "UI Library", icon: Layers, highlight: "Frontend" },
  { name: "Next.js", category: "App Framework", icon: Globe, highlight: "Full Stack" },
  { name: "Node.js", category: "Runtime Engine", icon: Server, highlight: "Backend" },
  { name: "Django", category: "Python Web", icon: Terminal, highlight: "Backend" },
  { name: "PostgreSQL", category: "Relational DB", icon: Database, highlight: "Storage" },
  { name: "Supabase", category: "Auth & DB", icon: Database, highlight: "Cloud BaaS" },
  { name: "Docker", category: "Containerization", icon: Box, highlight: "DevOps" },
  { name: "AWS", category: "Cloud Services", icon: Cloud, highlight: "Infrastructure" },
  { name: "Tailwind CSS", category: "Design Tokens", icon: Layers, highlight: "Styling" },
  { name: "Scikit-learn", category: "Predictive ML", icon: Cpu, highlight: "Applied ML" },
  { name: "Pandas", category: "Data Analytics", icon: Binary, highlight: "Data Science" },
  { name: "Git", category: "Version Control", icon: Wrench, highlight: "Engineering" },
];

export function SkillsSection() {
  const [showDetailedStack, setShowDetailedStack] = useState(false);
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
    <section id="skills" className="py-20 lg:py-28 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 03 ]"
          tag="TECHNICAL REPERTOIRE"
          title="Engineered with intentional tools."
          description="Technologies actively applied across full-stack web architectures, applied machine learning pipelines, and algorithmic systems. No arbitrary progress bars — each technology is linked to applied project implementations."
        />

        {/* 15-Tool Intentional Matrix (5 Columns × 3 Rows matching reference design) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {PRIMARY_TECH_STACK.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(idx * 0.03, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-4 rounded-xl bg-[#171924]/85 border border-[rgba(255,255,255,0.08)] hover:border-[#8387C3]/50 card-interactive flex flex-col justify-between shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-between pb-3">
                  <div className="p-2 rounded-lg bg-[#1E2030] border border-[rgba(255,255,255,0.08)] group-hover:border-[#8387C3]/40 group-hover:text-[#F0EEF4] transition-colors">
                    <Icon className="w-4 h-4 text-[#8387C3]" />
                  </div>
                  <span className="font-code text-[9px] uppercase tracking-wider text-[#8A8CAC] group-hover:text-[#8387C3] transition-colors">
                    {tech.highlight}
                  </span>
                </div>
                <div>
                  <h4 className="font-editorial text-lg text-[#F0EEF4] font-medium leading-tight group-hover:text-[#8387C3] transition-colors">
                    {tech.name}
                  </h4>
                  <p className="font-code text-[10px] text-[#959BB5] mt-0.5">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Detailed Stack Button matching reference design */}
        <div className="flex justify-center pt-2 pb-8">
          <button
            type="button"
            onClick={() => setShowDetailedStack(!showDetailedStack)}
            className="btn-fluid group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest bg-[#171924]/90 hover:bg-[#8387C3] hover:text-[#101116] text-[#F0EEF4] px-6 py-3 rounded-full border border-[rgba(255,255,255,0.12)] shadow-md"
          >
            <span>{showDetailedStack ? "HIDE DETAILED STACK" : "VIEW DETAILED STACK"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                showDetailedStack ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Expandable Domain Categorization & Project Verification */}
        <AnimatePresence>
          {showDetailedStack && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden space-y-8 pt-4 border-t border-[rgba(255,255,255,0.08)]"
            >
              {/* Domain Category Filters */}
              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="font-code text-xs text-[#8A8CAC] mr-2">DOMAIN:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`btn-fluid font-code text-xs px-3.5 py-1.5 rounded-full transition-all ${
                      activeCategory === cat
                        ? "bg-[#8387C3] text-[#101116] font-semibold"
                        : "bg-[#171924] text-[#959BB5] hover:text-[#F0EEF4] border border-[rgba(255,255,255,0.08)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((categoryGroup) => (
                  <div
                    key={categoryGroup.category}
                    className="rounded-xl bg-[#171924]/90 border border-[rgba(255,255,255,0.08)] p-6 flex flex-col justify-between shadow-xl"
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
                            className="p-3 rounded-lg bg-[#111218] border border-[rgba(255,255,255,0.06)] hover:border-[#8387C3]/40 transition-colors"
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
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
