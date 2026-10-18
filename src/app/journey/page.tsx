import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Professional & Academic Journey Timeline",
  description:
    "A chronological journey through computer science education, system architecture builds, and hackathon milestones by Aryan Kelkar.",
};

export default function JourneyPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-28 pb-16 bg-[#0A1123]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <SectionHeading
            number="[ ARCHIVE // 04 ]"
            tag="CHRONOLOGICAL TRAJECTORY"
            title="The Educational & Engineering Journey"
            description="From initial algorithmic study to advanced full-stack software and machine learning architectures, mapped chronologically."
          />
        </div>
        <JourneyTimeline />
      </main>
      <Footer />
    </>
  );
}
