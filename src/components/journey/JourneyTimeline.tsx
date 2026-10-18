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
        return <GraduationCap className="w-4 h-4 text-[#8387C3]" />;
      case "Project":
        return <Code className="w-4 h-4 text-[#8387C3]" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-[#8387C3]" />;
      default:
        return <GitCommit className="w-4 h-4 text-[#8387C3]" />;
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="font-code text-xs uppercase tracking-widest text-[#8387C3] hover:text-[#E7E7F0] transition-colors shrink-0 pb-2"
            >
              EXPLORE FULL TIMELINE →
            </Link>
          )}
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-[rgba(131,135,195,0.2)] ml-4 sm:ml-32 md:ml-40 space-y-12">
          {displayed.map((milestone, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A1123] border-2 border-[#8387C3] group-hover:bg-[#8387C3] group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(131,135,195,0.4)]" />

              {/* Date callout (left side on sm/md screens) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 font-code text-xs font-semibold text-[#8387C3] mb-2 sm:mb-0">
                <span>{milestone.year}</span>
                {milestone.quarterOrMonth && (
                  <span className="block text-[10px] text-[#8A8CAC] font-normal">
                    {milestone.quarterOrMonth}
                  </span>
                )}
              </div>

              {/* Content Card */}
              <div className="rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.18)] hover:border-[rgba(131,135,195,0.38)] p-6 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-[#162040]">
                      {getCategoryIcon(milestone.category)}
                    </div>
                    <Badge variant="status">{milestone.category}</Badge>
                  </div>
                  <span className="font-code text-xs text-[#959BB5]">
                    {milestone.organizationOrContext}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-[#E7E7F0] mt-2 mb-2">
                  {milestone.title}
                </h3>

                <p className="text-sm text-[#959BB5] leading-relaxed font-light mb-4">
                  {milestone.description}
                </p>

                {milestone.technologiesUsed && milestone.technologiesUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(131,135,195,0.1)]">
                    {milestone.technologiesUsed.map((tech) => (
                      <span
                        key={tech}
                        className="font-code text-[10px] text-[#959BB5] bg-[#0A1123] px-2 py-0.5 rounded border border-[rgba(131,135,195,0.12)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {milestone.link && (
                  <div className="mt-4 pt-3 border-t border-[rgba(131,135,195,0.1)]">
                    <Link
                      href={milestone.link}
                      className="inline-flex items-center gap-1 font-code text-xs text-[#8387C3] hover:text-[#E7E7F0] transition-colors"
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
