import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AchievementsArchive } from "@/components/achievements/AchievementsArchive";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Achievements, Certifications & Hackathons",
  description:
    "Explore verified technical certifications, hackathon presentations, and academic achievements earned by Aryan Kelkar.",
};

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <SectionHeading
            number="[ ARCHIVE // 03 ]"
            tag="VERIFIABLE CREDENTIALS"
            title="Certifications, Hackathons & Honors"
            description="A curated register of completed certifications, technical hackathon competitions, and academic milestones grounded in factual student coursework and verified achievements."
          />
        </div>
        <AchievementsArchive showFilters={true} />
      </main>
      <Footer />
    </>
  );
}
