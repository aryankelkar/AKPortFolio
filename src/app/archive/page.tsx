import React from "react";
import type { Metadata } from "next";
import { AchievementsArchive } from "@/components/achievements/AchievementsArchive";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Achievements, Certifications & Technical Archive",
  description:
    "Explore verified technical certifications, hackathon presentations, and academic achievements earned by Aryan Kelkar.",
};

export default function ArchivePage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-4">
        <SectionHeading
          number="[ ARCHIVE // 03 ]"
          tag="VERIFIABLE CREDENTIALS"
          title="Certifications, Hackathons & Honors"
          description="A curated register of completed certifications, technical hackathon competitions, and academic milestones grounded in factual student coursework and verified achievements."
        />
      </div>
      <AchievementsArchive showFilters={true} showHeader={false} />
    </div>
  );
}
