import React from "react";
import { Hero } from "@/components/hero/Hero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AchievementsArchive } from "@/components/achievements/AchievementsArchive";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { ActivitiesSection } from "@/components/activities/ActivitiesSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectGallery initialLimit={3} title="Selected Works & Case Studies" />
      <AboutSection />
      <SkillsSection />
      <AchievementsArchive initialLimit={3} />
      <JourneyTimeline initialLimit={4} />
      <ActivitiesSection />
      <ContactSection />
    </>
  );
}
