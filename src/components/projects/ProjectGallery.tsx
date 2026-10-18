"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProjectGalleryProps {
  initialLimit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export function ProjectGallery({
  initialLimit,
  showFilters = false,
  title = "Selected Projects & Systems",
  subtitle = "Engineered digital products, predictive machine-learning pipelines, and civic technology initiatives.",
}: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Full Stack Web",
    "AI & Machine Learning",
    "Civic Tech",
    "Systems & Algorithms",
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = initialLimit
    ? filteredProjects.slice(0, initialLimit)
    : filteredProjects;

  return (
    <section id="work" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="[ 01 ]"
            tag="ENGINEERING PORTFOLIO"
            title={title}
            description={subtitle}
            className="mb-0"
          />

          {initialLimit && (
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#8387C3] hover:text-[#E7E7F0] shrink-0 pb-2 transition-colors"
            >
              <span>VIEW FULL ARCHIVE (07)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Category Filters if enabled */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[rgba(131,135,195,0.15)]">
            <div className="flex items-center gap-1.5 text-xs font-code text-[#8A8CAC] mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-code text-xs px-3.5 py-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ${
                  selectedCategory === cat
                    ? "bg-[#8387C3] text-[#0A1123] font-semibold"
                    : "bg-[#101830] text-[#959BB5] hover:text-[#E7E7F0] border border-[rgba(131,135,195,0.15)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Featured Projects Stack */}
        <div className="space-y-8 sm:space-y-12">
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              layout={project.featured ? "featured" : "compact"}
              index={idx}
            />
          ))}
        </div>

        {displayedProjects.length === 0 && (
          <div className="text-center py-16 bg-[#101830] rounded-xl border border-[rgba(131,135,195,0.15)]">
            <p className="font-editorial text-2xl text-[#E7E7F0]">
              No projects found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 font-code text-xs text-[#8387C3] underline"
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
