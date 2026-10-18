import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Architectural Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Architectural Case Study | Aryan Kelkar`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  return (
    <div className="pt-28 pb-20">
      <article className="max-w-[1440px] xl:max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Top Breadcrumb & Return Link */}
          <div className="flex items-center justify-between pb-8 border-b border-[rgba(255,255,255,0.08)] mb-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#8387C3] hover:text-[#F0EEF4] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO WORK ARCHIVE</span>
            </Link>

            <div className="flex items-center gap-2">
              <Badge variant="status">{project.category}</Badge>
              <Badge variant="muted">{project.status}</Badge>
            </div>
          </div>

          {/* Hero Header */}
          <header className="space-y-6 mb-14">
            <span className="font-code text-xs uppercase tracking-widest text-[#8387C3]">
              [ CASE STUDY // ARCHITECTURAL SPECIFICATION ]
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F0EEF4] tracking-tight leading-[1.05]">
              {project.title}
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#8387C3] max-w-4xl leading-relaxed">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg text-[#959BB5] leading-relaxed max-w-4xl font-light">
              {project.tagline}
            </p>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] shadow-lg">
              <div>
                <span className="font-code text-[10px] uppercase text-[#85879B] block">
                  Timeline
                </span>
                <span className="font-code text-xs text-[#F0EEF4] font-medium mt-0.5 block">
                  {project.timeline}
                </span>
              </div>

              <div>
                <span className="font-code text-[10px] uppercase text-[#85879B] block">
                  Team Scope
                </span>
                <span className="font-code text-xs text-[#F0EEF4] font-medium mt-0.5 block">
                  {project.teamSize}
                </span>
              </div>

              <div>
                <span className="font-code text-[10px] uppercase text-[#85879B] block">
                  My Primary Role
                </span>
                <span className="font-code text-xs text-[#8387C3] font-medium mt-0.5 block truncate">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="font-code text-[10px] uppercase text-[#85879B] block">
                  Status
                </span>
                <span className="font-code text-xs text-[#F0EEF4] font-medium mt-0.5 block">
                  {project.status}
                </span>
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#F0EEF4] bg-[#1E2030] hover:bg-[#1E2C58] px-5 py-2.5 rounded-full border border-[rgba(160,170,210,0.18)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#8387C3]" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-wider text-[#101116] bg-[#E7E7F0] hover:bg-[#8387C3] font-semibold px-5 py-2.5 rounded-full transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>OPEN DEPLOYMENT / DEMO</span>
                </a>
              )}
            </div>
          </header>

          {/* Case Study Sections */}
          <div className="space-y-16">
            {/* 1. Problem & Objectives */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  01.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Problem Statement & Objectives
                </h2>
              </div>

              <div className="p-6 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] shadow-md">
                <p className="text-base text-[#959BB5] leading-relaxed font-light">
                  {project.caseStudy.problemStatement}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-code text-xs uppercase tracking-widest text-[#8387C3]">
                  [ KEY OBJECTIVES ]
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {project.caseStudy.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="p-4 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.08)] text-xs text-[#959BB5] leading-relaxed font-light flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8387C3] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 2. My Contributions */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  02.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Direct Engineering Contributions
                </h2>
              </div>

              <div className="space-y-3">
                {project.caseStudy.myContribution.map((contribution, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded bg-[#1E2030] border border-[rgba(255,255,255,0.08)] text-[#8387C3] flex items-center justify-center font-code text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-[#F0EEF4] font-light leading-relaxed">
                      {contribution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. System Architecture */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  03.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  System Architecture & Stack
                </h2>
              </div>

              <div className="p-6 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-5 shadow-lg">
                <div className="flex items-center gap-2 text-[#8387C3]">
                  <Layers className="w-4 h-4" />
                  <span className="font-code text-xs uppercase tracking-wider font-semibold">
                    ARCHITECTURAL BLUEPRINT
                  </span>
                </div>
                <p className="text-sm text-[#F0EEF4] font-light leading-relaxed">
                  {project.caseStudy.architecture.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="p-3.5 rounded-lg bg-[#111218] border border-[rgba(255,255,255,0.08)] space-y-1">
                    <span className="font-code text-[11px] text-[#8387C3] uppercase block">
                      Frontend
                    </span>
                    <p className="text-xs text-[#959BB5] font-light">
                      {project.caseStudy.architecture.frontend}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#111218] border border-[rgba(255,255,255,0.08)] space-y-1">
                    <span className="font-code text-[11px] text-[#8387C3] uppercase block">
                      Backend & API
                    </span>
                    <p className="text-xs text-[#959BB5] font-light">
                      {project.caseStudy.architecture.backend}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#111218] border border-[rgba(255,255,255,0.08)] space-y-1">
                    <span className="font-code text-[11px] text-[#8387C3] uppercase block">
                      Persistence Layer
                    </span>
                    <p className="text-xs text-[#959BB5] font-light">
                      {project.caseStudy.architecture.database}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Engineering Decisions & Trade-offs */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  04.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Key Engineering Decisions & Trade-offs
                </h2>
              </div>

              <div className="space-y-4">
                {project.caseStudy.engineeringDecisions.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 shadow-md"
                  >
                    <div className="flex items-center gap-2 text-[#F0EEF4] font-medium text-sm">
                      <Lightbulb className="w-4 h-4 text-[#8387C3] shrink-0" />
                      <span>{item.decision}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light pt-2">
                      <div className="p-3 rounded bg-[#111218] border border-[rgba(255,255,255,0.08)]">
                        <span className="font-code text-[10px] text-[#8387C3] uppercase block mb-1">
                          Why this choice:
                        </span>
                        <p className="text-[#959BB5]">{item.rationale}</p>
                      </div>

                      <div className="p-3 rounded bg-[#111218] border border-[rgba(255,255,255,0.08)]">
                        <span className="font-code text-[10px] text-[#8A8CAC] uppercase block mb-1">
                          Alternative Considered:
                        </span>
                        <p className="text-[#8A8CAC]">
                          {item.alternativeConsidered}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Challenges & Solutions */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  05.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Technical Challenges & Solutions
                </h2>
              </div>

              <div className="space-y-4">
                {project.caseStudy.challengesAndSolutions.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-2.5 shadow-md"
                  >
                    <div className="flex items-start gap-2.5 text-xs">
                      <AlertTriangle className="w-4 h-4 text-[#8387C3] shrink-0 mt-0.5" />
                      <span className="text-[#F0EEF4] font-medium">
                        {item.challenge}
                      </span>
                    </div>
                    <div className="pl-6 text-xs text-[#959BB5] font-light leading-relaxed">
                      <span className="font-code text-[10px] text-[#8387C3] uppercase block mb-0.5">
                        Solution Implemented:
                      </span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Results & Metrics */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  06.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Measurable Benchmarks & Results
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.caseStudy.resultsAndMetrics.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] text-center space-y-2 shadow-md"
                  >
                    <div className="font-editorial text-2xl sm:text-3xl font-normal text-[#8387C3]">
                      {item.value}
                    </div>
                    <div className="font-code text-xs uppercase tracking-wider text-[#F0EEF4]">
                      {item.metric}
                    </div>
                    <p className="text-[11px] text-[#959BB5] font-light leading-snug">
                      {item.context}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Limitations & Future Roadmap */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[rgba(255,255,255,0.08)]">
                <span className="font-code text-xs font-semibold text-[#8387C3]">
                  07.
                </span>
                <h2 className="font-editorial text-2xl text-[#F0EEF4]">
                  Limitations & Future Roadmap
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 shadow-md">
                  <span className="font-code text-xs uppercase text-[#8387C3] tracking-wider block font-semibold">
                    Known Limitations
                  </span>
                  <ul className="space-y-2 text-xs text-[#959BB5] font-light">
                    {project.caseStudy.limitations.map((lim, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-3 shadow-md">
                  <span className="font-code text-xs uppercase text-[#8387C3] tracking-wider block font-semibold">
                    Planned Technical Improvements
                  </span>
                  <ul className="space-y-2 text-xs text-[#959BB5] font-light">
                    {project.caseStudy.futureImprovements.map((imp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8387C3] shrink-0">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Pagination Links */}
          <div className="pt-16 mt-16 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex items-center gap-3 text-left focus:outline-none"
              >
                <div className="p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(163,154,255,0.4)] text-[#8387C3] transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-code text-[10px] uppercase text-[#85879B] block">
                    PREVIOUS CASE STUDY
                  </span>
                  <span className="font-editorial text-lg text-[#F0EEF4] group-hover:text-[#8387C3] transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex items-center gap-3 text-right focus:outline-none"
              >
                <div>
                  <span className="font-code text-[10px] uppercase text-[#85879B] block">
                    NEXT CASE STUDY
                  </span>
                  <span className="font-editorial text-lg text-[#F0EEF4] group-hover:text-[#8387C3] transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(163,154,255,0.4)] text-[#8387C3] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>
    </div>
  );
}
