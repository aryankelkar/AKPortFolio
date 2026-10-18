import React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, GitCommit, Trophy, Code } from "lucide-react";
import { journeyData } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

interface JourneyTimelineProps {
  initialLimit?: number;
}

export function JourneyTimeline({ initialLimit }: JourneyTimelineProps) {
  const displayed = initialLimit ? journeyData.slice(0, initialLimit) : journeyData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education":
        return <GraduationCap className="w-4 h-4 text-[#A39AFF]" />;
      case "Project":
        return <Code className="w-4 h-4 text-[#A39AFF]" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-[#A39AFF]" />;
      default:
        return <GitCommit className="w-4 h-4 text-[#A39AFF]" />;
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 relative bg-[#0D1427] border-t border-[rgba(160,170,210,0.14)]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#3A3E6C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="[ 05 ]"
            tag="CHRONOLOGY // ACADEMIC & TECHNICAL"
            title="The Engineering Trajectory."
            description="A chronological record of computer science foundations, applied software builds, hackathon sprints, and technical milestones."
            className="mb-0"
          />

          {initialLimit && (
            <Link
              href="/journey"
              className="font-code text-xs uppercase tracking-widest text-[#A39AFF] hover:text-[#F0EEF4] transition-colors shrink-0 pb-2"
            >
              EXPLORE FULL TIMELINE →
            </Link>
          )}
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-[rgba(160,170,210,0.18)] ml-4 sm:ml-32 md:ml-40 space-y-12">
          {displayed.map((milestone, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0D1427] border-2 border-[#A39AFF] group-hover:bg-[#A39AFF] group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(163,154,255,0.4)]" />

              {/* Date callout (left side on sm/md screens) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 font-code text-xs font-semibold text-[#A39AFF] mb-2 sm:mb-0">
                <span>{milestone.year}</span>
                {milestone.quarterOrMonth && (
                  <span className="block text-[10px] text-[#85879B] font-normal">
                    {milestone.quarterOrMonth}
                  </span>
                )}
              </div>

              {/* Content Card */}
              <div className="rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] p-6 transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-[#162040] border border-[rgba(160,170,210,0.16)]">
                      {getCategoryIcon(milestone.category)}
                    </div>
                    <Badge variant="status">{milestone.category}</Badge>
                  </div>
                  <span className="font-code text-xs text-[#85879B]">
                    {milestone.organizationOrContext}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-normal text-[#F0EEF4] mt-2 mb-2">
                  {milestone.title}
                </h3>

                <p className="text-sm text-[#B0AEB8] leading-relaxed font-light mb-4">
                  {milestone.description}
                </p>

                {milestone.technologiesUsed && milestone.technologiesUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(160,170,210,0.12)]">
                    {milestone.technologiesUsed.map((tech) => (
                      <span
                        key={tech}
                        className="font-code text-[10px] text-[#B0AEB8] bg-[#0B1020] px-2 py-0.5 rounded border border-[rgba(160,170,210,0.12)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {milestone.link && (
                  <div className="mt-4 pt-3 border-t border-[rgba(160,170,210,0.12)]">
                    <Link
                      href={milestone.link}
                      className="inline-flex items-center gap-1 font-code text-xs text-[#A39AFF] hover:text-[#F0EEF4] transition-colors"
                    >
                      <span>{milestone.linkLabel || "Inspect Reference"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
