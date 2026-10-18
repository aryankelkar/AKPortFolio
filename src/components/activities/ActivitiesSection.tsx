import React from "react";
import { Users, HeartHandshake, Compass, Award } from "lucide-react";
import { activitiesData } from "@/data/activities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function ActivitiesSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Leadership":
        return <Award className="w-4 h-4 text-[#8387C3]" />;
      case "Volunteering":
        return <HeartHandshake className="w-4 h-4 text-[#8387C3]" />;
      case "Technical Club":
        return <Compass className="w-4 h-4 text-[#8387C3]" />;
      default:
        return <Users className="w-4 h-4 text-[#8387C3]" />;
    }
  };

  return (
    <section id="activities" className="py-20 lg:py-28 bg-[#090F1E] relative border-t border-[rgba(131,135,195,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.18)] hover:border-[rgba(131,135,195,0.4)] p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-[#162040]">
                      {getCategoryIcon(activity.category)}
                    </div>
                    <Badge variant="status">{activity.category}</Badge>
                  </div>
                  <span className="font-code text-xs text-[#8A8CAC]">
                    {activity.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl font-medium text-[#E7E7F0]">
                    {activity.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-[#8387C3]">
                      {activity.role}
                    </span>
                    <span className="text-xs text-[#8A8CAC]">•</span>
                    <span className="text-xs text-[#959BB5]">
                      {activity.organization}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#959BB5] leading-relaxed font-light">
                  {activity.description}
                </p>

                <div className="pt-2 border-t border-[rgba(131,135,195,0.1)]">
                  <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider block mb-2">
                    Direct Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#959BB5] font-light">
                    {activity.contributions.map((contribution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {activity.impactOutcome && (
                <div className="mt-6 pt-4 border-t border-[rgba(131,135,195,0.12)] bg-[#0A1123]/60 -mx-7 -mb-7 px-7 py-3 rounded-b-xl flex items-center justify-between text-xs font-code">
                  <span className="text-[#8387C3] uppercase">OUTCOME:</span>
                  <span className="text-[#E7E7F0] font-light truncate max-w-[280px]">
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
