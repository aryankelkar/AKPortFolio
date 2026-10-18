import React from "react";
import { Terminal, Database, Code, Globe, Cpu, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
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
    <section id="skills" className="py-20 lg:py-28 relative bg-[#0A1123]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 03 ]"
          tag="TECHNICAL REPERTOIRE"
          title="Engineered with intentional tools."
          description="Technologies actively applied across full-stack web architectures, applied machine learning pipelines, and algorithmic systems. No arbitrary progress bars — each technology is linked to applied project implementations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="rounded-xl bg-[#101830] border border-[rgba(58,62,108,0.35)] hover:border-[rgba(131,135,195,0.45)] p-6 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(58,62,108,0.25)]">
                  <div className="p-2.5 rounded bg-[#162040] border border-[rgba(58,62,108,0.3)]">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl text-[#E7E7F0] font-normal tracking-wide">
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
                      className="p-3 rounded-lg bg-[#0A1123] border border-[rgba(58,62,108,0.25)] group hover:border-[rgba(131,135,195,0.35)] transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-code text-xs font-medium text-[#E7E7F0]">
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

              <div className="pt-4 mt-5 border-t border-[rgba(58,62,108,0.2)] flex justify-between items-center text-[10px] font-code text-[#8A8CAC]">
                <span>CATEGORY VERIFIED</span>
                <span className="text-[#8387C3] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8387C3]" />
                  APPLIED REPERTOIRE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
