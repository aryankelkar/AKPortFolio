import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  layout?: "featured" | "compact";
  index?: number;
}

export function ProjectCard({
  project,
  layout = "featured",
  index = 0,
}: ProjectCardProps) {
  const isFeatured = layout === "featured";
  const projectNumber = String(index + 1).padStart(2, "0");

  if (isFeatured) {
    return (
      <article className="group relative rounded-2xl bg-gradient-to-br from-[#121935] to-[#0A1123] border border-[rgba(131,135,195,0.2)] hover:border-[rgba(131,135,195,0.45)] transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#3A3E6C]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8387C3]/15 transition-all" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs font-semibold text-[#8387C3] tracking-widest uppercase">
                [ PROJECT // {projectNumber} ]
              </span>
              <Badge variant="status">{project.category}</Badge>
              <Badge variant="muted">{project.status}</Badge>
            </div>

            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#E7E7F0] group-hover:text-[#8387C3] transition-colors leading-[1.1]">
                <Link href={`/work/${project.slug}`} className="focus:outline-none">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 font-serif italic text-lg sm:text-xl text-[#8387C3]">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#959BB5] leading-relaxed font-light">
              {project.summary}
            </p>

            {/* Key Engineering Metric / Decision Highlight */}
            {project.caseStudy.resultsAndMetrics.length > 0 && (
              <div className="p-3.5 rounded-lg bg-[#0A1123]/80 border border-[rgba(131,135,195,0.15)] flex flex-wrap items-center gap-4 text-xs font-code">
                <span className="text-[#8387C3] uppercase tracking-wider font-semibold">
                  METRIC BENCHMARK:
                </span>
                <span className="text-[#E7E7F0] font-bold">
                  {project.caseStudy.resultsAndMetrics[0].value}
                </span>
                <span className="text-[#8A8CAC]">
                  ({project.caseStudy.resultsAndMetrics[0].metric})
                </span>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-code text-[11px] text-[#959BB5] bg-[#101830] px-2.5 py-1 rounded border border-[rgba(131,135,195,0.12)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#0A1123] bg-[#8387C3] hover:bg-[#959BB5] font-semibold px-4 py-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7E7F0]"
              >
                <span>READ CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#E7E7F0] bg-[#162040] hover:bg-[#3A3E6C] px-4 py-2.5 rounded-full border border-[rgba(131,135,195,0.25)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#8387C3]" />
                  <span>REPOSITORY</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#8387C3] hover:text-[#E7E7F0] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>
          </div>

          {/* Architectural Blueprint View */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            <div className="rounded-xl bg-[#090F1E] border border-[rgba(131,135,195,0.16)] p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(131,135,195,0.12)]">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#8387C3]" />
                  <span className="font-code text-xs text-[#E7E7F0] uppercase tracking-wider">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <span className="font-code text-[10px] text-[#8A8CAC]">
                  {project.teamSize} • {project.timeline}
                </span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div>
                  <span className="font-code text-[11px] text-[#8387C3] uppercase block mb-1">
                    Role & Scope:
                  </span>
                  <p className="text-[#E7E7F0] font-light leading-snug">
                    {project.role}
                  </p>
                </div>

                <div>
                  <span className="font-code text-[11px] text-[#8387C3] uppercase block mb-1">
                    Architecture Overview:
                  </span>
                  <p className="text-[#959BB5] font-light leading-snug line-clamp-3">
                    {project.caseStudy.architecture.overview}
                  </p>
                </div>

                <div>
                  <span className="font-code text-[11px] text-[#8387C3] uppercase block mb-1">
                    Primary Challenge:
                  </span>
                  <p className="text-[#959BB5] font-light leading-snug line-clamp-3">
                    {project.caseStudy.challengesAndSolutions[0]?.challenge}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[rgba(131,135,195,0.1)] flex items-center justify-between text-[11px] font-code text-[#8A8CAC]">
                <span>CASE STUDY ARCHIVE</span>
                <span className="text-[#8387C3]">READY FOR INSPECTION →</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Compact layout
  return (
    <article className="group rounded-xl bg-[#101830] border border-[rgba(131,135,195,0.18)] hover:border-[rgba(131,135,195,0.4)] p-6 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-code text-xs font-semibold text-[#8387C3]">
            [ {projectNumber} ]
          </span>
          <Badge variant="status">{project.category}</Badge>
        </div>

        <div>
          <h3 className="font-editorial text-2xl font-medium text-[#E7E7F0] group-hover:text-[#8387C3] transition-colors">
            <Link href={`/work/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="font-serif italic text-sm text-[#8387C3] mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs text-[#959BB5] leading-relaxed line-clamp-3 font-light">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-code text-[10px] text-[#959BB5] bg-[#0A1123] px-2 py-0.5 rounded border border-[rgba(131,135,195,0.1)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-code text-[10px] text-[#8A8CAC] px-1 py-0.5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[rgba(131,135,195,0.12)] flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 font-code text-xs text-[#8387C3] group-hover:text-[#E7E7F0] transition-colors"
        >
          <span>READ CASE STUDY</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#959BB5] hover:text-[#E7E7F0] transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
