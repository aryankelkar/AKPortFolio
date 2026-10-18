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
          <div className="rounded-xl bg-[#0E1528] border border-[rgba(160,170,210,0.14)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(160,170,210,0.12)]">
              <span className="font-code text-[11px] text-[#A39AFF] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#A39AFF]" />
                CIRCULAR RECOVERY LIFECYCLE
              </span>
              <span className="font-code text-[10px] text-[#85879B]">
                POSTGRESQL + SUPABASE
              </span>
            </div>

            {/* Lifecycle Stages Matrix */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-code">
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[#A39AFF] font-semibold">01. INTAKE</div>
                <div className="text-[10px] text-[#B0AEB8] mt-0.5">Donation Log</div>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[#A39AFF] font-semibold">02. TRIAGE</div>
                <div className="text-[10px] text-[#B0AEB8] mt-0.5">Sanitize & Test</div>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[#A39AFF] font-semibold">03. ALLOCATE</div>
                <div className="text-[10px] text-[#B0AEB8] mt-0.5">School Dispatch</div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#10182D] text-xs font-sans text-[#B0AEB8] leading-relaxed border border-[rgba(160,170,210,0.1)]">
              <strong className="text-[#F0EEF4]">Architecture:</strong> State-machine validations in PostgreSQL trigger functions ensure strict deterministic progression across triage stages.
            </div>
          </div>
        );

      case "banksense-ai":
        return (
          <div className="rounded-xl bg-[#0E1528] border border-[rgba(160,170,210,0.14)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(160,170,210,0.12)]">
              <span className="font-code text-[11px] text-[#A39AFF] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#A39AFF]" />
                ML PROPENSITY EVALUATION
              </span>
              <span className="font-code text-[10px] text-[#F0EEF4] font-semibold">
                41k RECORDS
              </span>
            </div>

            {/* Documented Model Results */}
            <div className="grid grid-cols-2 gap-2 text-xs font-code">
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[10px] text-[#85879B]">RF BASELINE (TEST)</div>
                <div className="text-base text-[#F0EEF4] font-bold mt-0.5">0.7979 ROC-AUC</div>
                <div className="text-[10px] text-[#B0AEB8]">F1: 0.4766 | Acc: 87.5%</div>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[10px] text-[#85879B]">TUNED ENSEMBLE (CV)</div>
                <div className="text-base text-[#A39AFF] font-bold mt-0.5">0.892 ROC-AUC</div>
                <div className="text-[10px] text-[#B0AEB8]">SMOTE + XGBoost</div>
              </div>
            </div>

            {/* Feature Weight Visualizer */}
            <div className="space-y-1.5 text-xs font-code">
              <div>
                <div className="flex justify-between text-[10px] text-[#B0AEB8] mb-0.5">
                  <span>euribor3m (Macroeconomic Rate)</span>
                  <span className="text-[#A39AFF]">Weight: 0.38</span>
                </div>
                <div className="w-full bg-[#162040] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#A39AFF] h-full w-[76%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-[#B0AEB8] mb-0.5">
                  <span>poutcome=success (Prior Campaign)</span>
                  <span className="text-[#A39AFF]">Weight: 0.29</span>
                </div>
                <div className="w-full bg-[#162040] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#A39AFF] h-full w-[58%]" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#10182D] text-xs font-sans text-[#B0AEB8] leading-relaxed border border-[rgba(160,170,210,0.1)]">
              <strong className="text-[#F0EEF4]">Methodology:</strong> Evaluated on UCI benchmark (11% conversion rate) with decision-threshold calibration for financial recall targets.
            </div>
          </div>
        );

      case "janaarogya":
        return (
          <div className="rounded-xl bg-[#0E1528] border border-[rgba(160,170,210,0.14)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(160,170,210,0.12)]">
              <span className="font-code text-[11px] text-[#A39AFF] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#A39AFF]" />
                OFFLINE-FIRST PRIMARY CARE
              </span>
              <span className="font-code text-[10px] text-[#85879B]">
                INDEXEDDB + REST
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-code">
              <div className="p-3 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[#A39AFF] font-semibold text-[10px]">SYNC RESILIENCE</div>
                <div className="text-lg text-[#F0EEF4] font-bold mt-1">&lt; 2.1s Batch</div>
                <div className="text-[10px] text-[#B0AEB8]">50 Cached Consultations</div>
              </div>
              <div className="p-3 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)]">
                <div className="text-[#A39AFF] font-semibold text-[10px]">CLIENT FOOTPRINT</div>
                <div className="text-lg text-[#F0EEF4] font-bold mt-1">&lt; 180 KB</div>
                <div className="text-[10px] text-[#B0AEB8]">Targeted 2G/3G Network</div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#10182D] text-xs font-sans text-[#B0AEB8] leading-relaxed border border-[rgba(160,170,210,0.1)]">
              <strong className="text-[#F0EEF4]">Operational Clarity:</strong> Monotonic timestamp reconciliation prevents diagnostic record overwrites during rural cellular outages.
            </div>
          </div>
        );

      case "eklavya":
        return (
          <div className="rounded-xl bg-[#0E1528] border border-[rgba(160,170,210,0.14)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(160,170,210,0.12)]">
              <span className="font-code text-[11px] text-[#A39AFF] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A39AFF]" />
                ELIGIBILITY MATCH ENGINE
              </span>
              <span className="font-code text-[10px] text-[#85879B]">
                RULE MATRIX V1
              </span>
            </div>

            <div className="space-y-2 text-xs font-code">
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)] flex items-center justify-between">
                <span className="text-[#B0AEB8]">Income Verification Rule</span>
                <span className="text-[#A39AFF] font-semibold">&le; &#8377;2.5L / Annum</span>
              </div>
              <div className="p-2.5 rounded bg-[#10182D] border border-[rgba(160,170,210,0.12)] flex items-center justify-between">
                <span className="text-[#B0AEB8]">Academic Threshold Filter</span>
                <span className="text-[#A39AFF] font-semibold">&ge; 60% Aggregate</span>
              </div>
            </div>

            <div className="p-3 rounded bg-[#10182D] text-xs font-sans text-[#B0AEB8] leading-relaxed border border-[rgba(160,170,210,0.1)]">
              <strong className="text-[#F0EEF4]">Civic Architecture:</strong> Multi-parameter deterministic rule engine simplifies complex government scholarship requirements into clean actionable checklists.
            </div>
          </div>
        );

      default:
        return (
          <div className="rounded-xl bg-[#0E1528] border border-[rgba(160,170,210,0.14)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(160,170,210,0.12)]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#A39AFF]" />
                <span className="font-code text-xs text-[#F0EEF4] uppercase tracking-wider font-medium">
                  SYSTEM BLUEPRINT
                </span>
              </div>
              <span className="font-code text-[10px] text-[#85879B]">
                {project.teamSize} • {project.timeline}
              </span>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div>
                <span className="font-code text-[10px] text-[#A39AFF] uppercase block mb-0.5">
                  Scope & Role:
                </span>
                <p className="text-[#F0EEF4] font-light">
                  {project.role}
                </p>
              </div>

              <div>
                <span className="font-code text-[10px] text-[#A39AFF] uppercase block mb-0.5">
                  Core Architecture:
                </span>
                <p className="text-[#B0AEB8] font-light line-clamp-3">
                  {project.caseStudy.architecture.overview}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[rgba(160,170,210,0.1)] flex items-center justify-between text-[11px] font-code text-[#85879B]">
              <span>SPECIFICATION</span>
              <span className="text-[#A39AFF]">INSPECT DETAILS →</span>
            </div>
          </div>
        );
    }
  };

  if (isFeatured) {
    return (
      <article className="group relative rounded-2xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A39AFF]/05 rounded-full blur-3xl pointer-events-none group-hover:bg-[#A39AFF]/08 transition-all duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs font-semibold text-[#A39AFF] tracking-widest uppercase">
                [ ARCHIVE // {projectNumber} ]
              </span>
              <Badge variant="status">{project.category}</Badge>
              <Badge variant="muted">{project.status}</Badge>
            </div>

            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F0EEF4] group-hover:text-[#A39AFF] transition-colors leading-[1.05]">
                <Link href={`/work/${project.slug}`} data-cursor="INSPECT" className="focus:outline-none">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 font-serif italic text-lg sm:text-xl text-[#A39AFF]">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#B0AEB8] leading-relaxed font-light">
              {project.summary}
            </p>

            {/* Key Engineering Benchmark */}
            {project.caseStudy.resultsAndMetrics.length > 0 && (
              <div className="p-3.5 rounded-lg bg-[#0B1020] border border-[rgba(160,170,210,0.14)] flex flex-wrap items-center gap-3 text-xs font-code">
                <span className="text-[#A39AFF] uppercase tracking-wider font-semibold">
                  BENCHMARK:
                </span>
                <span className="text-[#F0EEF4] font-bold">
                  {project.caseStudy.resultsAndMetrics[0].value}
                </span>
                <span className="text-[#85879B]">
                  ({project.caseStudy.resultsAndMetrics[0].metric})
                </span>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-1">
              <span className="font-code text-[11px] text-[#85879B] uppercase tracking-wider block mb-2">
                ENGINEERING STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-code text-[11px] text-[#B0AEB8] bg-[#0B1020] px-2.5 py-1 rounded border border-[rgba(160,170,210,0.14)]"
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
                className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest bg-[#F0EEF4] hover:bg-[#A39AFF] text-[#0B1020] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A39AFF]"
              >
                <span>READ ARCHITECTURAL SPECIFICATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#B0AEB8] hover:text-[#F0EEF4] px-4 py-2.5 transition-colors focus:outline-none"
                >
                  <GithubIcon className="w-4 h-4 text-[#A39AFF]" />
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
    <article className="group relative rounded-xl bg-[#10182D] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)] transition-all duration-300 p-6 flex flex-col justify-between shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-code text-xs font-semibold text-[#A39AFF]">
            [ {projectNumber} ]
          </span>
          <Badge variant="status">{project.category}</Badge>
        </div>

        <div>
          <h3 className="font-editorial text-2xl font-medium text-[#F0EEF4] group-hover:text-[#A39AFF] transition-colors">
            <Link href={`/work/${project.slug}`} data-cursor="INSPECT" className="focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="font-serif italic text-sm text-[#A39AFF] mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs text-[#B0AEB8] leading-relaxed line-clamp-3 font-light">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-code text-[10px] text-[#B0AEB8] bg-[#0B1020] px-2 py-0.5 rounded border border-[rgba(160,170,210,0.12)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-code text-[10px] text-[#85879B] px-1 py-0.5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[rgba(160,170,210,0.1)] flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 font-code text-xs text-[#A39AFF] group-hover:text-[#F0EEF4] transition-colors"
        >
          <span>READ CASE STUDY</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#85879B] hover:text-[#F0EEF4] transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
