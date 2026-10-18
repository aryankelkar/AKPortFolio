"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Users, HeartHandshake, Compass, Award } from "lucide-react";
import { activitiesData } from "@/data/activities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function ActivitiesSection() {
  const shouldReduceMotion = useReducedMotion();

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
    <section id="activities" className="py-20 lg:py-28 bg-transparent relative border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="[ 05 ]"
          tag="EXTRACURRICULARS"
          title="Beyond the classroom."
          description="Documenting student collaboration, peer mentorship, tech symposium logistics, and community outreach beyond code repositories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activitiesData.map((activity, idx) => (
            <motion.article
              key={activity.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.42,
                delay: Math.min(idx * 0.08, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] card-interactive p-7 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#1E2030] border border-[rgba(255,255,255,0.08)]">
                      {getCategoryIcon(activity.category)}
                    </div>
                    <Badge variant="status">{activity.category}</Badge>
                  </div>
                  <span className="font-code text-xs text-[#8A8CAC]">
                    {activity.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#F0EEF4] group-hover:text-[#8387C3] transition-colors">
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

                <div className="pt-2 border-t border-[rgba(255,255,255,0.08)]">
                  <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider block mb-2">
                    Direct Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#959BB5] font-light">
                    {activity.contributions.map((contribution, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {activity.impactOutcome && (
                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] bg-[#111218] -mx-7 -mb-7 px-7 py-3 rounded-b-xl flex items-center justify-between text-xs font-code">
                  <span className="text-[#8387C3] uppercase font-semibold">OUTCOME:</span>
                  <span className="text-[#F0EEF4] font-light truncate max-w-[280px]">
                    {activity.impactOutcome}
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
