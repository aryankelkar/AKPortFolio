import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, Activity, Cpu, CheckCircle2 } from "lucide-react";
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
  layout = "compact",
  index = 0,
}: ProjectCardProps) {
  const isFeatured = layout === "featured";
  const projectNumber = String(index + 1).padStart(2, "0");

  // Specific bespoke visual treats based on project identity
  const renderProjectVisualIdentity = () => {
    switch (project.slug) {
      case "redevice":
        return (
          <div className="rounded-xl bg-[#0D152B] border border-[rgba(58,62,108,0.45)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(58,62,108,0.35)]">
              <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#8387C3]" />
                CIRCULAR RECOVERY LIFECYCLE
              </span>
              <span className="font-code text-[10px] text-[#8A8CAC]">
                POSTGRESQL + SUPABASE
              </span>
            </div>

            {/* Lifecycle Stages Matrix */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-code">
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[#8387C3] font-semibold">01. INTAKE</div>
                <div className="text-[10px] text-[#959BB5] mt-0.5">Donation Log</div>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[#8387C3] font-semibold">02. TRIAGE</div>
                <div className="text-[10px] text-[#959BB5] mt-0.5">Sanitize & Test</div>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[#8387C3] font-semibold">03. ALLOCATE</div>
                <div className="text-[10px] text-[#959BB5] mt-0.5">School Dispatch</div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#10182D] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(58,62,108,0.25)]">
              <strong className="text-[#E7E7F0]">Architecture:</strong> State-machine validations in PostgreSQL trigger functions ensure strict deterministic progression across triage stages.
            </div>
          </div>
        );

      case "banksense-ai":
        return (
          <div className="rounded-xl bg-[#0D152B] border border-[rgba(58,62,108,0.45)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(58,62,108,0.35)]">
              <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#8387C3]" />
                ML PROPENSITY EVALUATION
              </span>
              <span className="font-code text-[10px] text-[#E7E7F0] font-semibold">
                41k RECORDS
              </span>
            </div>

            {/* Documented Model Results */}
            <div className="grid grid-cols-2 gap-2 text-xs font-code">
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[10px] text-[#8A8CAC]">RF BASELINE (TEST)</div>
                <div className="text-base text-[#E7E7F0] font-bold mt-0.5">0.7979 ROC-AUC</div>
                <div className="text-[10px] text-[#959BB5]">F1: 0.4766 | Acc: 87.5%</div>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[10px] text-[#8A8CAC]">TUNED ENSEMBLE (CV)</div>
                <div className="text-base text-[#8387C3] font-bold mt-0.5">0.892 ROC-AUC</div>
                <div className="text-[10px] text-[#959BB5]">SMOTE + XGBoost</div>
              </div>
            </div>

            {/* Feature Weight Visualizer */}
            <div className="space-y-1.5 text-xs font-code">
              <div>
                <div className="flex justify-between text-[10px] text-[#959BB5] mb-0.5">
                  <span>euribor3m (Macroeconomic Rate)</span>
                  <span className="text-[#8387C3]">Weight: 0.38</span>
                </div>
                <div className="w-full bg-[#162040] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#8387C3] h-full w-[76%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-[#959BB5] mb-0.5">
                  <span>poutcome=success (Prior Campaign)</span>
                  <span className="text-[#8387C3]">Weight: 0.29</span>
                </div>
                <div className="w-full bg-[#162040] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#8387C3] h-full w-[58%]" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#10182D] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(58,62,108,0.25)]">
              <strong className="text-[#E7E7F0]">Methodology:</strong> Evaluated on UCI benchmark (11% conversion rate) with decision-threshold calibration for financial recall targets.
            </div>
          </div>
        );

      case "janaarogya":
        return (
          <div className="rounded-xl bg-[#0D152B] border border-[rgba(58,62,108,0.45)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(58,62,108,0.35)]">
              <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#8387C3]" />
                OFFLINE-FIRST PRIMARY CARE
              </span>
              <span className="font-code text-[10px] text-[#8A8CAC]">
                INDEXEDDB + REST
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-code">
              <div className="p-3 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[#8387C3] font-semibold text-[10px]">SYNC RESILIENCE</div>
                <div className="text-lg text-[#E7E7F0] font-bold mt-1">&lt; 2.1s Batch</div>
                <div className="text-[10px] text-[#959BB5]">50 Cached Consultations</div>
              </div>
              <div className="p-3 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)]">
                <div className="text-[#8387C3] font-semibold text-[10px]">CLIENT FOOTPRINT</div>
                <div className="text-lg text-[#E7E7F0] font-bold mt-1">&lt; 180 KB</div>
                <div className="text-[10px] text-[#959BB5]">Targeted 2G/3G Network</div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#10182D] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(58,62,108,0.25)]">
              <strong className="text-[#E7E7F0]">Operational Clarity:</strong> Monotonic timestamp reconciliation prevents diagnostic record overwrites during rural cellular outages.
            </div>
          </div>
        );

      case "eklavya":
        return (
          <div className="rounded-xl bg-[#0D152B] border border-[rgba(58,62,108,0.45)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(58,62,108,0.35)]">
              <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8387C3]" />
                ELIGIBILITY MATCH ENGINE
              </span>
              <span className="font-code text-[10px] text-[#8A8CAC]">
                RULE MATRIX V1
              </span>
            </div>

            <div className="space-y-2 text-xs font-code">
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)] flex items-center justify-between">
                <span className="text-[#959BB5]">Income Verification Rule</span>
                <span className="text-[#8387C3] font-semibold">&le; &#8377;2.5L / Annum</span>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(58,62,108,0.3)] flex items-center justify-between">
                <span className="text-[#959BB5]">Academic Threshold Filter</span>
                <span className="text-[#8387C3] font-semibold">&ge; 60% Aggregate</span>
              </div>
            </div>

            <div className="p-3 rounded bg-[#10182D] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(58,62,108,0.25)]">
              <strong className="text-[#E7E7F0]">Civic Architecture:</strong> Multi-parameter deterministic rule engine simplifies complex government scholarship requirements into clean actionable checklists.
            </div>
          </div>
        );

      default:
        return (
          <div className="rounded-xl bg-[#0D152B] border border-[rgba(58,62,108,0.45)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(58,62,108,0.35)]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8387C3]" />
                <span className="font-code text-xs text-[#E7E7F0] uppercase tracking-wider font-medium">
                  SYSTEM BLUEPRINT
                </span>
              </div>
              <span className="font-code text-[10px] text-[#8A8CAC]">
                {project.teamSize} • {project.timeline}
              </span>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div>
                <span className="font-code text-[10px] text-[#8387C3] uppercase block mb-0.5">
                  Scope & Role:
                </span>
                <p className="text-[#E7E7F0] font-light">
                  {project.role}
                </p>
              </div>

              <div>
                <span className="font-code text-[10px] text-[#8387C3] uppercase block mb-0.5">
                  Core Architecture:
                </span>
                <p className="text-[#959BB5] font-light line-clamp-3">
                  {project.caseStudy.architecture.overview}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[rgba(58,62,108,0.25)] flex items-center justify-between text-[11px] font-code text-[#8A8CAC]">
              <span>SPECIFICATION</span>
              <span className="text-[#8387C3]">INSPECT DETAILS →</span>
            </div>
          </div>
        );
    }
  };

  if (isFeatured) {
    return (
      <article className="group relative rounded-2xl bg-[#101830] border border-[rgba(58,62,108,0.4)] hover:border-[rgba(131,135,195,0.45)] transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
        {/* Subtle Ambient Light (Layer 2) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8387C3]/05 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8387C3]/08 transition-all duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs font-semibold text-[#8387C3] tracking-widest uppercase">
                [ ARCHIVE // {projectNumber} ]
              </span>
              <Badge variant="status">{project.category}</Badge>
              <Badge variant="muted">{project.status}</Badge>
            </div>

            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E7E7F0] group-hover:text-[#8387C3] transition-colors leading-[1.05]">
                <Link href={`/work/${project.slug}`} data-cursor="INSPECT" className="focus:outline-none">
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

            {/* Key Engineering Benchmark */}
            {project.caseStudy.resultsAndMetrics.length > 0 && (
              <div className="p-3.5 rounded-lg bg-[#0A1123] border border-[rgba(58,62,108,0.35)] flex flex-wrap items-center gap-3 text-xs font-code">
                <span className="text-[#8387C3] uppercase tracking-wider font-semibold">
                  BENCHMARK:
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
            <div className="pt-1">
              <span className="font-code text-[11px] text-[#8A8CAC] uppercase tracking-wider block mb-2">
                ENGINEERING STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-code text-[11px] text-[#959BB5] bg-[#0A1123] px-2.5 py-1 rounded border border-[rgba(58,62,108,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/work/${project.slug}`}
                data-cursor="INSPECT"
                className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest bg-[#E7E7F0] hover:bg-[#8387C3] text-[#0A1123] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>READ ARCHITECTURAL SPECIFICATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#959BB5] hover:text-[#E7E7F0] px-4 py-2.5 transition-colors focus:outline-none"
                >
                  <GithubIcon className="w-4 h-4 text-[#8387C3]" />
                  <span>SOURCE CODE</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Architectural Mockup */}
          <div className="lg:col-span-5 w-full">
            {renderProjectVisualIdentity()}
          </div>
        </div>
      </article>
    );
  }

  // Compact Layout
  return (
    <article className="group relative rounded-xl bg-[#101830] border border-[rgba(58,62,108,0.35)] hover:border-[rgba(131,135,195,0.45)] transition-all duration-300 p-6 flex flex-col justify-between shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-code text-xs font-semibold text-[#8387C3]">
            [ {projectNumber} ]
          </span>
          <Badge variant="status">{project.category}</Badge>
        </div>

        <div>
          <h3 className="font-editorial text-2xl font-medium text-[#E7E7F0] group-hover:text-[#8387C3] transition-colors">
            <Link href={`/work/${project.slug}`} data-cursor="INSPECT" className="focus:outline-none">
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
              className="font-code text-[10px] text-[#959BB5] bg-[#0A1123] px-2 py-0.5 rounded border border-[rgba(58,62,108,0.25)]"
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

      <div className="pt-6 mt-6 border-t border-[rgba(58,62,108,0.25)] flex items-center justify-between">
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
            className="text-[#8A8CAC] hover:text-[#E7E7F0] transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
