import React from "react";
import { Users, HeartHandshake, Compass, Award } from "lucide-react";
import { activitiesData } from "@/data/activities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function ActivitiesSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Leadership":
        return <Award className="w-4 h-4 text-[#A39AFF]" />;
      case "Volunteering":
        return <HeartHandshake className="w-4 h-4 text-[#A39AFF]" />;
      case "Technical Club":
        return <Compass className="w-4 h-4 text-[#A39AFF]" />;
      default:
        return <Users className="w-4 h-4 text-[#A39AFF]" />;
    }
  };

  return (
    <section id="activities" className="py-20 lg:py-28 bg-[#0B1020] relative border-t border-[rgba(160,170,210,0.14)]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#3A3E6C]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 06 ]"
          tag="COMMUNITY & LEADERSHIP"
          title="Extracurricular Engagements & Initiatives."
          description="Documenting student collaboration, peer mentorship, tech symposium logistics, and community outreach beyond code repositories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activitiesData.map((activity) => (
            <article
              key={activity.id}
              className="rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] p-7 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-[#162040] border border-[rgba(160,170,210,0.16)]">
                      {getCategoryIcon(activity.category)}
                    </div>
                    <Badge variant="status">{activity.category}</Badge>
                  </div>
                  <span className="font-code text-xs text-[#85879B]">
                    {activity.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#F0EEF4]">
                    {activity.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-[#A39AFF]">
                      {activity.role}
                    </span>
                    <span className="text-xs text-[#85879B]">•</span>
                    <span className="text-xs text-[#B0AEB8]">
                      {activity.organization}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#B0AEB8] leading-relaxed font-light">
                  {activity.description}
                </p>

                <div className="pt-2 border-t border-[rgba(160,170,210,0.12)]">
                  <span className="font-code text-[11px] text-[#A39AFF] uppercase tracking-wider block mb-2">
                    Direct Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#B0AEB8] font-light">
                    {activity.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#A39AFF] shrink-0">•</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {activity.impactOutcome && (
                <div className="mt-6 pt-4 border-t border-[rgba(160,170,210,0.12)] bg-[#0B1020] -mx-7 -mb-7 px-7 py-3 rounded-b-xl flex items-center justify-between text-xs font-code">
                  <span className="text-[#A39AFF] uppercase font-semibold">OUTCOME:</span>
                  <span className="text-[#F0EEF4] font-light truncate max-w-[280px]">
                    {activity.impactOutcome}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
