import React from "react";
import type { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Engineering Work & Technical Case Studies",
  description:
    "Explore projects in full-stack web development, machine learning pipelines, and civic technology built by Aryan Kelkar.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <SectionHeading
          number="[ ARCHIVE // 01 ]"
          tag="COMPLETE REPOSITORY"
          title="Engineered Systems & Applied Research"
          description="A comprehensive archive of software projects spanning circular economy hardware triage, imbalanced predictive analytics, offline-resilient healthcare, and graph pathfinding algorithms."
        />
      </div>
      <ProjectGallery showFilters={true} showHeader={false} />
    </div>
  );
}
