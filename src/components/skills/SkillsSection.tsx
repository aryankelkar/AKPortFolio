import React from "react";
import { Terminal, Database, Code, Globe, Cpu, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Terminal className="w-4 h-4 text-[#A39AFF]" />;
      case "Frontend":
        return <Globe className="w-4 h-4 text-[#A39AFF]" />;
      case "Backend":
        return <Code className="w-4 h-4 text-[#A39AFF]" />;
      case "Databases":
        return <Database className="w-4 h-4 text-[#A39AFF]" />;
      case "AI & ML":
        return <Cpu className="w-4 h-4 text-[#A39AFF]" />;
      case "Cloud & Tools":
        return <Wrench className="w-4 h-4 text-[#A39AFF]" />;
      default:
        return <Code className="w-4 h-4 text-[#A39AFF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#0B1020]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-[#3A3E6C]/08 rounded-full blur-[140px] pointer-events-none" />

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
              className="rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] p-6 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(160,170,210,0.12)]">
                  <div className="p-2.5 rounded bg-[#162040] border border-[rgba(160,170,210,0.16)]">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl text-[#F0EEF4] font-normal tracking-wide">
                      {categoryGroup.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#B0AEB8] mt-3 mb-5 font-light leading-relaxed">
                  {categoryGroup.description}
                </p>

                <div className="space-y-2.5">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-[#0B1020] border border-[rgba(160,170,210,0.12)] group hover:border-[rgba(163,154,255,0.35)] transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-code text-xs font-medium text-[#F0EEF4]">
                          {skill.name}
                        </span>
                        {skill.demonstratedIn && skill.demonstratedIn.length > 0 && (
                          <span className="font-code text-[10px] text-[#A39AFF] truncate max-w-[150px]">
                            {skill.demonstratedIn.join(", ")}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-[#B0AEB8] mt-1 font-light leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-[rgba(160,170,210,0.1)] flex justify-between items-center text-[10px] font-code text-[#85879B]">
                <span>CATEGORY VERIFIED</span>
                <span className="text-[#A39AFF] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A39AFF]" />
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
