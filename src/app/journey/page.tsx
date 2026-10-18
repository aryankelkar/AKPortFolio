import React from "react";
import type { Metadata } from "next";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Professional & Academic Journey Timeline",
  description:
    "A chronological journey through computer science education, system architecture builds, and hackathon milestones by Aryan Kelkar.",
};

export default function JourneyPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-4">
        <SectionHeading
          number="[ ARCHIVE // 04 ]"
          tag="CHRONOLOGICAL TRAJECTORY"
          title="The Educational & Engineering Journey"
          description="From initial algorithmic study to advanced full-stack software and machine learning architectures, mapped chronologically."
        />
      </div>
      <JourneyTimeline showHeader={false} />
    </div>
  );
}
