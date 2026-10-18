import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AchievementsArchive } from "@/components/achievements/AchievementsArchive";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ActivitiesSection } from "@/components/activities/ActivitiesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectGallery initialLimit={4} title="Selected Works & Case Studies" />
        <AboutSection />
        <SkillsSection />
        <AchievementsArchive initialLimit={4} />
        <JourneyTimeline initialLimit={4} />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
