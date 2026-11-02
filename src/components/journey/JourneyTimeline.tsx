"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, GraduationCap, GitCommit, Trophy, Code } from "lucide-react";
import { journeyData } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

interface JourneyTimelineProps {
  initialLimit?: number;
  showHeader?: boolean;
}

export function JourneyTimeline({
  initialLimit,
  showHeader = true,
}: JourneyTimelineProps) {
  const displayed = initialLimit ? journeyData.slice(0, initialLimit) : journeyData;
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [spineHeight, setSpineHeight] = useState(0);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    // ResizeObserver tracks dimensions asynchronously with 0 forced layout reflows
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSpineHeight(entry.contentRect.height);
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.3,
    restDelta: 0.002,
  });

  const scaleY = shouldReduceMotion ? 1 : smoothProgress;
  // GPU-accelerated translateY in pixels replaces layout-triggering top: "0%" -> "100%"
  const beaconY = useTransform(smoothProgress, [0, 1], [0, spineHeight || 1000]);
  const lightOpacity = useTransform(
    smoothProgress,
    [0, 0.03, 0.97, 1],
    shouldReduceMotion ? [0, 0, 0, 0] : [0, 1, 1, 0.6]
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education":
        return <GraduationCap className="w-4 h-4 text-[#8387C3]" />;
      case "Project":
        return <Code className="w-4 h-4 text-[#8387C3]" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-[#8387C3]" />;
      default:
        return <GitCommit className="w-4 h-4 text-[#8387C3]" />;
    }
  };

  return (
    <section id="journey" className="py-12 lg:py-16 relative bg-[#151720]/95 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              number="[ 04 ]"
              tag="JOURNEY TIMELINE"
              title="A timeline of exploration."
              description="A chronological record of computer science foundations, applied software builds, hackathon sprints, and technical milestones."
              className="mb-0"
            />

            {initialLimit && (
              <Link
                href="/journey"
                className="btn-fluid font-code text-xs uppercase tracking-widest text-[#8387C3] hover:text-[#F0EEF4] transition-colors shrink-0 pb-2"
              >
                EXPLORE FULL TIMELINE →
              </Link>
            )}
          </div>
        )}

        {/* Timeline Stream */}
        <div ref={timelineRef} className="relative ml-4 sm:ml-32 md:ml-40 space-y-12">
          {/* Timeline Spine Line (Base Guide Rail + Active Luminous Beam + Traveling Beacon) */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-3 bottom-6 w-[2px] pointer-events-none"
          >
            {/* 1. Base Guide Rail (Subtle background path) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.12)] via-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.10)] rounded-full" />

            {/* 2. Fluid Active Luminous Energy Beam */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#8387C3] via-[#A5A9E6] to-[#F0EEF4] origin-top rounded-full shadow-[0_0_12px_rgba(131,135,195,0.75)]"
              style={{ scaleY }}
            />

            {/* 3. Traveling Fluid Light Beacon (GPU Compositor TranslateY) */}
            <motion.div
              className="absolute -left-[5px] top-0 w-3 h-3 -translate-y-1/2 rounded-full pointer-events-none z-10"
              style={{
                y: beaconY,
                opacity: lightOpacity,
              }}
            >
              <div className="w-full h-full rounded-full bg-[#F0EEF4] shadow-[0_0_10px_#A5A9E6,0_0_20px_#8387C3]" />
              <div className="absolute -inset-1 rounded-full bg-[#8387C3]/50 blur-xs animate-pulse" />
            </motion.div>
          </div>

          {displayed.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.48,
                delay: Math.min(idx * 0.07, 0.28),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Marker Node (Centered on 2px spine) */}
              <motion.div
                initial={shouldReduceMotion ? false : { scale: 0.7, opacity: 0.4 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-[7px] top-2 z-10 flex items-center justify-center pointer-events-none"
              >
                <div className="relative w-4 h-4 rounded-full bg-[#151720] border-2 border-[#8387C3]/60 group-hover:border-[#F0EEF4] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(131,135,195,0.3)] group-hover:shadow-[0_0_16px_rgba(165,169,230,0.8)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8387C3] group-hover:bg-[#F0EEF4] group-hover:scale-125 transition-all duration-300 shadow-[0_0_6px_rgba(131,135,195,0.9)]" />
                </div>
              </motion.div>

              {/* Date callout (left side on sm/md screens) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 font-code text-xs font-semibold text-[#8387C3] group-hover:text-[#F0EEF4] mb-2 sm:mb-0 transition-colors duration-300">
                <span>{milestone.year}</span>
                {milestone.quarterOrMonth && (
                  <span className="block text-[10px] text-[#8A8CAC] font-normal group-hover:text-[#959BB5] transition-colors duration-300">
                    {milestone.quarterOrMonth}
                  </span>
                )}
              </div>

              {/* Content Card with Fluid Micro-Interaction */}
              <div className="rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(131,135,195,0.32)] group-hover:translate-x-1 p-6 shadow-xl transition-all duration-300 ease-out group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.5),0_0_24px_rgba(131,135,195,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#1E2030] border border-[rgba(255,255,255,0.08)]">
                      {getCategoryIcon(milestone.category)}
                    </div>
                    <Badge variant="status">{milestone.category}</Badge>
                  </div>
                  <span className="font-code text-xs text-[#8A8CAC]">
                    {milestone.organizationOrContext}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-normal text-[#F0EEF4] mt-2 mb-2">
                  {milestone.title}
                </h3>

                <p className="text-sm text-[#959BB5] leading-relaxed font-light mb-4">
                  {milestone.description}
                </p>

                {milestone.technologiesUsed && milestone.technologiesUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(255,255,255,0.08)]">
                    {milestone.technologiesUsed.map((tech) => (
                      <span
                        key={tech}
                        className="font-code text-[10px] text-[#959BB5] bg-[#111218] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {milestone.link && (
                  <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.08)]">
                    <Link
                      href={milestone.link}
                      className="group/link inline-flex items-center gap-1 font-code text-xs text-[#8387C3] hover:text-[#F0EEF4] transition-colors"
                    >
                      <span>{milestone.linkLabel || "Inspect Reference"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
