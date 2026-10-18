import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, Activity, Cpu } from "lucide-react";
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

  // Specific bespoke visual treats based on project identity
  const renderProjectVisualIdentity = () => {
    switch (project.slug) {
      case "redevice":
        return (
          <div className="rounded-xl bg-[#0F1412] border border-[#2D4536] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#2D4536]/60">
              <span className="font-code text-[11px] text-[#C6F36A] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C6F36A]" />
                CIRCULAR HARDWARE RECOVERY
              </span>
              <span className="font-code text-[10px] text-[#A8A39A]">
                SUPABASE + POSTGRES
              </span>
            </div>

            {/* Lifecycle Stages */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-code">
              <div className="p-2.5 rounded bg-[#16231D] border border-[#2D4536]">
                <div className="text-[#C6F36A] font-bold">STAGE 01</div>
                <div className="text-[10px] text-[#A8A39A] mt-0.5">Donation Intake</div>
              </div>
              <div className="p-2.5 rounded bg-[#16231D] border border-[#2D4536]">
                <div className="text-[#C6F36A] font-bold">STAGE 02</div>
                <div className="text-[10px] text-[#A8A39A] mt-0.5">Triage & Refurbish</div>
              </div>
              <div className="p-2.5 rounded bg-[#16231D] border border-[#2D4536]">
                <div className="text-[#C6F36A] font-bold">STAGE 03</div>
                <div className="text-[10px] text-[#A8A39A] mt-0.5">School Dispatch</div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#131B17] text-xs font-sans text-[#A8A39A] leading-relaxed">
              <strong className="text-[#F7F5F0]">Architecture Decision:</strong> State-machine validations in PostgreSQL trigger functions ensure zero invalid triage hops.
            </div>
          </div>
        );

      case "banksense-ai":
        return (
          <div className="rounded-xl bg-[#14141E] border border-[#3E3869] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#3E3869]/60">
              <span className="font-code text-[11px] text-[#9A94E8] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#9A94E8]" />
                ML INFERENCE ENGINE
              </span>
              <span className="font-code text-[10px] text-[#C6F36A] font-bold">
                ROC-AUC: 0.892
              </span>
            </div>

            {/* Feature Weight Visualizer */}
            <div className="space-y-2 text-xs font-code">
              <div>
                <div className="flex justify-between text-[11px] text-[#A8A39A] mb-1">
                  <span>euribor3m (Economic Trend)</span>
                  <span className="text-[#9A94E8]">Weight: 0.38</span>
                </div>
                <div className="w-full bg-[#1C1A2E] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#9A94E8] h-full w-[76%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-[#A8A39A] mb-1">
                  <span>poutcome=success (Prior Campaign)</span>
                  <span className="text-[#9A94E8]">Weight: 0.29</span>
                </div>
                <div className="w-full bg-[#1C1A2E] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#9A94E8] h-full w-[58%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-[#A8A39A] mb-1">
                  <span>duration (Contact Duration)</span>
                  <span className="text-[#9A94E8]">Weight: 0.21</span>
                </div>
                <div className="w-full bg-[#1C1A2E] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#9A94E8] h-full w-[42%]" />
                </div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#1A1829] text-xs font-sans text-[#A8A39A] leading-relaxed">
              <strong className="text-[#F7F5F0]">Evaluation:</strong> Addressed ~11% positive class imbalance using SMOTE and threshold calibration for business recall targets.
            </div>
          </div>
        );

      case "janaarogya":
        return (
          <div className="rounded-xl bg-[#10171F] border border-[#26435C] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#26435C]/60">
              <span className="font-code text-[11px] text-[#64B5F6] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#64B5F6]" />
                OFFLINE-FIRST CLINICAL PROTOCOL
              </span>
              <span className="font-code text-[10px] text-[#A8A39A]">
                INDEXEDDB + MYSQL
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-code">
              <div className="p-3 rounded bg-[#152330] border border-[#26435C]">
                <div className="text-[#64B5F6] font-semibold">SYNC LATENCY</div>
                <div className="text-xl text-[#F7F5F0] font-bold mt-1">&lt; 2.1s</div>
                <div className="text-[10px] text-[#A8A39A]">50 Cached Records</div>
              </div>
              <div className="p-3 rounded bg-[#152330] border border-[#26435C]">
                <div className="text-[#64B5F6] font-semibold">CLIENT BUNDLE</div>
                <div className="text-xl text-[#F7F5F0] font-bold mt-1">&lt; 180 KB</div>
                <div className="text-[10px] text-[#A8A39A]">3G Network Target</div>
              </div>
            </div>

            <div className="p-3 rounded bg-[#14202B] text-xs font-sans text-[#A8A39A] leading-relaxed">
              <strong className="text-[#F7F5F0]">Resilience:</strong> Deterministic monotonic timestamp reconciliation prevents lost clinical records during rural cellular blackouts.
            </div>
          </div>
        );

      default:
        return (
          <div className="rounded-xl bg-[#141418] border border-[rgba(168,163,154,0.18)] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(168,163,154,0.12)]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#9A94E8]" />
                <span className="font-code text-xs text-[#F7F5F0] uppercase tracking-wider font-medium">
                  SYSTEM ARCHITECTURE
                </span>
              </div>
              <span className="font-code text-[10px] text-[#A8A39A]">
                {project.teamSize} • {project.timeline}
              </span>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div>
                <span className="font-code text-[10px] text-[#9A94E8] uppercase block mb-0.5">
                  Scope & Role:
                </span>
                <p className="text-[#F7F5F0] font-light">
                  {project.role}
                </p>
              </div>

              <div>
                <span className="font-code text-[10px] text-[#9A94E8] uppercase block mb-0.5">
                  Core Architecture:
                </span>
                <p className="text-[#A8A39A] font-light line-clamp-3">
                  {project.caseStudy.architecture.overview}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[rgba(168,163,154,0.1)] flex items-center justify-between text-[11px] font-code text-[#A8A39A]">
              <span>CASE STUDY AUDIT</span>
              <span className="text-[#9A94E8]">INSPECT BLUEPRINT →</span>
            </div>
          </div>
        );
    }
  };

  if (isFeatured) {
    return (
      <article className="group relative rounded-2xl bg-[#141418] border border-[rgba(168,163,154,0.2)] hover:border-[rgba(154,148,232,0.45)] transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A94E8]/05 rounded-full blur-3xl pointer-events-none group-hover:bg-[#9A94E8]/10 transition-all duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs font-semibold text-[#9A94E8] tracking-widest uppercase">
                [ SPEC // {projectNumber} ]
              </span>
              <Badge variant="status">{project.category}</Badge>
              <Badge variant="muted">{project.status}</Badge>
            </div>

            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F5F0] group-hover:text-[#9A94E8] transition-colors leading-[1.05]">
                <Link href={`/work/${project.slug}`} data-cursor="INSPECT" className="focus:outline-none">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 font-serif italic text-lg sm:text-xl text-[#9A94E8]">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#B5B0A6] leading-relaxed font-light">
              {project.summary}
            </p>

            {/* Key Engineering Metric */}
            {project.caseStudy.resultsAndMetrics.length > 0 && (
              <div className="p-3.5 rounded-lg bg-[#0B0B0D] border border-[rgba(168,163,154,0.15)] flex flex-wrap items-center gap-4 text-xs font-code">
                <span className="text-[#C6F36A] uppercase tracking-wider font-semibold">
                  BENCHMARK:
                </span>
                <span className="text-[#F7F5F0] font-bold">
                  {project.caseStudy.resultsAndMetrics[0].value}
                </span>
                <span className="text-[#A8A39A]">
                  ({project.caseStudy.resultsAndMetrics[0].metric})
                </span>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-1">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-code text-[11px] text-[#A8A39A] bg-[#1C1C22] px-2.5 py-1 rounded border border-[rgba(168,163,154,0.14)]"
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
                data-cursor="CASE STUDY"
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#0B0B0D] bg-[#F7F5F0] hover:bg-[#9A94E8] font-semibold px-5 py-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A94E8]"
              >
                <span>READ CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#F7F5F0] bg-[#1C1C22] hover:bg-[#2E2E35] px-4 py-3 rounded-full border border-[rgba(168,163,154,0.2)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A94E8]"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#9A94E8]" />
                  <span>REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Architectural Blueprint View */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            {renderProjectVisualIdentity()}
          </div>
        </div>
      </article>
    );
  }

  // Compact layout
  return (
    <article className="group rounded-xl bg-[#141418] border border-[rgba(168,163,154,0.18)] hover:border-[rgba(154,148,232,0.4)] p-6 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-code text-xs font-semibold text-[#9A94E8]">
            [ {projectNumber} ]
          </span>
          <Badge variant="status">{project.category}</Badge>
        </div>

        <div>
          <h3 className="font-editorial text-2xl font-medium text-[#F7F5F0] group-hover:text-[#9A94E8] transition-colors">
            <Link href={`/work/${project.slug}`} data-cursor="INSPECT" className="focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="font-serif italic text-sm text-[#9A94E8] mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs text-[#B5B0A6] leading-relaxed line-clamp-3 font-light">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-code text-[10px] text-[#A8A39A] bg-[#0B0B0D] px-2 py-0.5 rounded border border-[rgba(168,163,154,0.12)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-code text-[10px] text-[#A8A39A] px-1 py-0.5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[rgba(168,163,154,0.12)] flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 font-code text-xs text-[#9A94E8] group-hover:text-[#F7F5F0] transition-colors"
        >
          <span>READ CASE STUDY</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8A39A] hover:text-[#F7F5F0] transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
