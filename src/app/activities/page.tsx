import React from "react";
import type { Metadata } from "next";
import { ActivitiesSection } from "@/components/activities/ActivitiesSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Extracurriculars, Leadership & Community",
  description:
    "Student leadership, technical club mentorship, symposium logistics, and community outreach initiatives by Aryan Kelkar.",
};

export default function ActivitiesPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-4">
        <SectionHeading
          number="[ ARCHIVE // 05 ]"
          tag="COMMUNITY ENGAGEMENT"
          title="Extracurricular Engagements & Leadership"
          description="Documenting student collaboration, peer mentorship, technical symposium operations, and digital literacy community initiatives beyond software code."
        />
      </div>
      <ActivitiesSection showHeader={false} />
    </div>
  );
}
