import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ActivitiesSection } from "@/components/activities/ActivitiesSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Extracurriculars, Leadership & Community",
  description:
    "Student leadership, technical club mentorship, symposium logistics, and community outreach initiatives by Aryan Kelkar.",
};

export default function ActivitiesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-28 pb-16 bg-[#0B1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <SectionHeading
            number="[ ARCHIVE // 05 ]"
            tag="COMMUNITY ENGAGEMENT"
            title="Extracurricular Engagements & Leadership"
            description="Documenting student collaboration, peer mentorship, technical symposium operations, and digital literacy community initiatives beyond software code."
          />
        </div>
        <ActivitiesSection />
      </main>
      <Footer />
    </>
  );
}
