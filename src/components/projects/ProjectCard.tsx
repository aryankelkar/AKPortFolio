"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Layers,
  Activity,
  Cpu,
  CheckCircle2,
  RefreshCw,
  Navigation,
  Eye,
  CalendarCheck
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  layout?: "featured" | "compact";
  index?: number;
}

/* ==========================================================================
   Project A: ReDevice — Circular Recovery Lifecycle Interactive Exhibit
   DONATE → INSPECT → REFURBISH → MATCH → DELIVER → RECYCLE
   ========================================================================== */
function ReDeviceExhibit() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      name: "DONATE",
      action: "Hardware Intake",
      desc: "Donor registers device specifications, battery state, and serial/IMEI through authenticated intake portal.",
      telemetry: "Postgres Intake Trigger: Verified",
    },
    {
      step: "02",
      name: "INSPECT",
      action: "Diagnostic Triage",
      desc: "Lab technicians execute component triage: thermal tests, screen integrity checks, and battery degradation profiling.",
      telemetry: "Triage State Machine: Pass / Reroute",
    },
    {
      step: "03",
      name: "REFURBISH",
      action: "Hardware Sanitization",
      desc: "Drive wiping under DoD standard, hardware repairs, memory upgrades, and clean lightweight OS image flashing.",
      telemetry: "Sanitization Audit Hash: Generated",
    },
    {
      step: "04",
      name: "MATCH",
      action: "Need Allocation",
      desc: "Relational matching algorithm pairs ready devices with verified educational facilities and non-profit computer labs.",
      telemetry: "Priority Match Queue: Linked",
    },
    {
      step: "05",
      name: "DELIVER",
      action: "Chain of Custody",
      desc: "Physical transfer tracked with digital acknowledgment receipts and verified school institution confirmation.",
      telemetry: "Custody Handover: Signed",
    },
    {
      step: "06",
      name: "RECYCLE",
      action: "Certified Processing",
      desc: "Non-viable components routed to certified e-waste processors for toxic-free metallurgical recycling.",
      telemetry: "E-Waste Disposal Cert: Archived",
    },
  ];

  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <RefreshCw className="w-3.5 h-3.5 text-[#8387C3] animate-spin-slow" />
          CIRCULAR RECOVERY LIFECYCLE
        </span>
        <span className="font-code text-[10px] text-[#8A8CAC]">
          STAGE {stages[activeStage].step} OF 06
        </span>
      </div>

      {/* Interactive Stage Step Pills */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
        {stages.map((st, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={st.name}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-1.5 rounded text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] ${
                isSelected
                  ? "bg-[#8387C3] text-[#101116] font-semibold shadow-md"
                  : "bg-[#171924] text-[#959BB5] hover:text-[#F0EEF4] hover:bg-[#1E2030] border border-[rgba(255,255,255,0.06)]"
              }`}
            >
              <div className="text-[9px] font-code opacity-75">{st.step}</div>
              <div className="text-[10px] font-code tracking-wide truncate">{st.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Details Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="p-3.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.08)] space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-code font-semibold text-[#8387C3]">
              {`PHASE: ${stages[activeStage].name} // ${stages[activeStage].action}`}
            </span>
            <span className="text-[10px] font-code text-[#F0EEF4] bg-[#111218] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]">
              {stages[activeStage].telemetry}
            </span>
          </div>
          <p className="text-xs font-sans text-[#959BB5] leading-relaxed font-light">
            {stages[activeStage].desc}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="pt-2 flex items-center justify-between text-[10px] font-code text-[#8A8CAC] border-t border-[rgba(255,255,255,0.06)]">
        <span>RELATIONAL STATE-MACHINE</span>
        <span className="text-[#8387C3]">POSTGRESQL + ROW LEVEL SECURITY</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   Project B: BankSense AI — Model Evaluation Studio
   ROC-AUC / F1 / Accuracy / Feature Weights
   ========================================================================== */
function BankSenseExhibit() {
  const [viewMode, setViewMode] = useState<"features" | "metrics">("features");

  const features = [
    { name: "euribor3m (Macroeconomic Rate)", weight: 0.38, pct: "76%" },
    { name: "poutcome=success (Prior Campaign)", weight: 0.29, pct: "58%" },
    { name: "age (Client Demographics)", weight: 0.14, pct: "28%" },
    { name: "duration (Contact Duration)", weight: 0.12, pct: "24%" },
  ];

  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <Cpu className="w-3.5 h-3.5 text-[#8387C3]" />
          ML PROPENSITY EVALUATION
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setViewMode("features")}
            className={`font-code text-[10px] px-2 py-0.5 rounded transition-colors ${
              viewMode === "features"
                ? "bg-[#8387C3] text-[#101116] font-semibold"
                : "bg-[#171924] text-[#959BB5] hover:text-[#F0EEF4]"
            }`}
          >
            FEATURES
          </button>
          <button
            type="button"
            onClick={() => setViewMode("metrics")}
            className={`font-code text-[10px] px-2 py-0.5 rounded transition-colors ${
              viewMode === "metrics"
                ? "bg-[#8387C3] text-[#101116] font-semibold"
                : "bg-[#171924] text-[#959BB5] hover:text-[#F0EEF4]"
            }`}
          >
            METRICS
          </button>
        </div>
      </div>

      {viewMode === "features" ? (
        <div className="space-y-2.5">
          <div className="text-[10px] font-code text-[#8A8CAC] flex justify-between">
            <span>FEATURE SIGNAL (UCI BENCHMARK)</span>
            <span>IMPORTANCE WEIGHT</span>
          </div>
          {features.map((f) => (
            <div key={f.name} className="space-y-1">
              <div className="flex justify-between text-xs font-code">
                <span className="text-[#959BB5] truncate max-w-[220px]">{f.name}</span>
                <span className="text-[#8387C3] font-semibold">{f.weight}</span>
              </div>
              <div className="w-full bg-[#171924] h-1.5 rounded-full overflow-hidden border border-[rgba(255,255,255,0.04)]">
                <div
                  className="bg-gradient-to-r from-[#8387C3] to-[#A39AFF] h-full rounded-full"
                  style={{ width: f.pct }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 text-xs font-code">
          <div className="p-3 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)] space-y-1">
            <span className="text-[10px] text-[#8A8CAC] block">RANDOM FOREST BASELINE</span>
            <span className="text-xl font-bold text-[#F0EEF4] block">0.7979</span>
            <span className="text-[10px] text-[#959BB5] block">Test Set ROC-AUC</span>
            <div className="pt-1 text-[10px] text-[#8A8CAC] border-t border-[rgba(255,255,255,0.06)]">
              F1: 0.4766 | Acc: 87.5%
            </div>
          </div>
          <div className="p-3 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)] space-y-1">
            <span className="text-[10px] text-[#8387C3] block">SMOTE + XGBOOST (CV)</span>
            <span className="text-xl font-bold text-[#8387C3] block">0.8920</span>
            <span className="text-[10px] text-[#959BB5] block">Cross-Validation AUC</span>
            <div className="pt-1 text-[10px] text-[#8A8CAC] border-t border-[rgba(255,255,255,0.06)]">
              PR-AUC: 0.5840 (+28% Recall)
            </div>
          </div>
        </div>
      )}

      <div className="p-2.5 rounded bg-[#171924] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(255,255,255,0.06)]">
        <strong className="text-[#F0EEF4]">Imbalanced Strategy:</strong> Decision-threshold tuned to 0.32 to maximize conversion capture without cost blowouts.
      </div>
    </div>
  );
}

/* ==========================================================================
   Project C: EKLAVYA — Scholarship Eligibility Engine Exhibit
   ========================================================================== */
function EklavyaExhibit() {
  const [incomeEligible, setIncomeEligible] = useState(true);
  const [meritEligible, setMeritEligible] = useState(true);

  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#8387C3]" />
          ELIGIBILITY RULE ENGINE
        </span>
        <span className="font-code text-[10px] text-[#8A8CAC]">
          STATE SCHOLARSHIP PORTAL
        </span>
      </div>

      <div className="space-y-2">
        <button
          type="button"
          onClick={() => setIncomeEligible(!incomeEligible)}
          className="w-full p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)] flex items-center justify-between text-left text-xs font-code transition-colors hover:border-[rgba(131,135,195,0.35)]"
        >
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded flex items-center justify-center border text-[9px] ${
              incomeEligible
                ? "bg-[#8387C3] border-[#8387C3] text-[#101116] font-bold"
                : "border-[#8A8CAC]"
            }`}>
              {incomeEligible ? "✓" : ""}
            </span>
            <span className="text-[#F0EEF4]">Annual Family Income</span>
          </div>
          <span className="text-[#8387C3] font-semibold">≤ ₹2.5 Lakhs</span>
        </button>

        <button
          type="button"
          onClick={() => setMeritEligible(!meritEligible)}
          className="w-full p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)] flex items-center justify-between text-left text-xs font-code transition-colors hover:border-[rgba(131,135,195,0.35)]"
        >
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded flex items-center justify-center border text-[9px] ${
              meritEligible
                ? "bg-[#8387C3] border-[#8387C3] text-[#101116] font-bold"
                : "border-[#8A8CAC]"
            }`}>
              {meritEligible ? "✓" : ""}
            </span>
            <span className="text-[#F0EEF4]">Prior Academic Cutoff</span>
          </div>
          <span className="text-[#8387C3] font-semibold">≥ 60% Aggregate</span>
        </button>
      </div>

      <div className="p-3 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.08)] flex items-center justify-between">
        <div>
          <span className="text-[10px] font-code text-[#8A8CAC] block">EVALUATION OUTCOME:</span>
          <span className="text-xs font-code font-bold text-[#F0EEF4]">
            {incomeEligible && meritEligible
              ? "4 Qualified State & Central Schemes"
              : incomeEligible || meritEligible
              ? "1 Partial Merit Fellowship Available"
              : "0 Schemes Matched (Adjust Filters)"}
          </span>
        </div>
        <span className={`text-[10px] font-code px-2 py-0.5 rounded font-semibold ${
          incomeEligible && meritEligible
            ? "bg-[#8387C3]/20 text-[#8387C3] border border-[#8387C3]/40"
            : "bg-[#1E2030] text-[#959BB5]"
        }`}>
          {incomeEligible && meritEligible ? "VERIFIED MATCH" : "CRITERIA PENDING"}
        </span>
      </div>

      <div className="text-[10px] font-code text-[#8A8CAC] flex justify-between border-t border-[rgba(255,255,255,0.06)] pt-2">
        <span>ENGINE: DETERMINISTIC RULES</span>
        <span>DJANGO + POSTGRESQL</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   Project D: JanAarogya — Offline-First Telemetry Exhibit
   ========================================================================== */
function JanAarogyaExhibit() {
  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <Activity className="w-3.5 h-3.5 text-[#8387C3]" />
          OFFLINE-FIRST PRIMARY CARE
        </span>
        <span className="font-code text-[10px] text-[#8A8CAC]">
          INDEXEDDB + REST SYNC
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs font-code">
        <div className="p-3 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)]">
          <div className="text-[#8387C3] font-semibold text-[10px]">SYNC RESILIENCE</div>
          <div className="text-xl text-[#F0EEF4] font-bold mt-1">&lt; 2.1s Batch</div>
          <div className="text-[10px] text-[#959BB5]">50 Consultations Reconciled</div>
        </div>
        <div className="p-3 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)]">
          <div className="text-[#8387C3] font-semibold text-[10px]">CLIENT FOOTPRINT</div>
          <div className="text-xl text-[#F0EEF4] font-bold mt-1">&lt; 180 KB</div>
          <div className="text-[10px] text-[#959BB5]">Targeted 2G/3G Connectivity</div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-[#171924] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(255,255,255,0.06)]">
        <strong className="text-[#F0EEF4]">Operational Robustness:</strong> Monotonic timestamp sorting prevents clinical record collision when remote field workers sync after multi-day network disconnects.
      </div>

      <div className="flex items-center justify-between text-[10px] font-code text-[#8A8CAC] pt-2 border-t border-[rgba(255,255,255,0.06)]">
        <span>LOCAL CACHE: AES-256</span>
        <span className="text-[#8387C3]">FHIR-ALIGNED SCHEMA</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   Project E: Smart Evacuation Router — Graph Pathfinding Exhibit
   ========================================================================== */
function SmartEvacuationExhibit() {
  const [hazardActive, setHazardActive] = useState(false);

  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <Navigation className="w-3.5 h-3.5 text-[#8387C3]" />
          DYNAMIC GRAPH EVACUATION
        </span>
        <button
          type="button"
          onClick={() => setHazardActive(!hazardActive)}
          className={`font-code text-[10px] px-2.5 py-0.5 rounded font-semibold transition-colors ${
            hazardActive
              ? "bg-red-500/20 text-red-300 border border-red-500/40"
              : "bg-[#171924] text-[#8387C3] hover:bg-[#1E2030]"
          }`}
        >
          {hazardActive ? "HAZARD INJECTED" : "TRIGGER HAZARD"}
        </button>
      </div>

      {/* Path Simulation Diagram */}
      <div className="p-3 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)] space-y-2 text-xs font-code">
        <div className="flex items-center justify-between text-[10px] text-[#8A8CAC]">
          <span>START: NODE_A (WING 2)</span>
          <span>LATENCY: &lt; 85ms</span>
        </div>
        <div className="flex items-center gap-2 py-1">
          <span className="px-2 py-1 rounded bg-[#111218] text-[#F0EEF4]">NODE_A</span>
          <span className="text-[#8387C3]">→</span>
          <span className={`px-2 py-1 rounded transition-colors ${
            hazardActive
              ? "bg-red-950/60 text-red-300 line-through border border-red-800"
              : "bg-[#111218] text-[#959BB5]"
          }`}>
            CORRIDOR_B
          </span>
          <span className="text-[#8387C3]">→</span>
          <span className={`px-2 py-1 rounded ${
            hazardActive ? "bg-[#8387C3] text-[#101116] font-bold" : "bg-[#111218] text-[#959BB5]"
          }`}>
            {hazardActive ? "EXIT_WEST (REROUTE)" : "EXIT_NORTH"}
          </span>
        </div>
        <div className="text-[10px] text-[#959BB5]">
          {hazardActive
            ? "Obstacle detected on Node B. Dijkstra graph re-weighted dynamically in 62ms."
            : "Primary shortest path clear. Graph weighted by corridor capacity & exit distance."}
        </div>
      </div>

      <div className="text-[10px] font-code text-[#8A8CAC] flex justify-between border-t border-[rgba(255,255,255,0.06)] pt-2">
        <span>TOPOLOGY: 200 NODES</span>
        <span className="text-[#8387C3]">JAVA + DIJKSTRA / A*</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   Project F: KrishiMitra — Computer Vision Diagnostic Exhibit
   ========================================================================== */
function KrishiMitraExhibit() {
  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <Eye className="w-3.5 h-3.5 text-[#8387C3]" />
          CV CROP DISEASE DIAGNOSTIC
        </span>
        <span className="font-code text-[10px] text-[#8A8CAC]">
          MOBILENET + CNN
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs font-code">
        <div className="p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)]">
          <span className="text-[10px] text-[#8A8CAC] block">DIAGNOSTIC TARGET</span>
          <span className="text-sm font-bold text-[#F0EEF4] block mt-0.5">Tomato Early Blight</span>
          <span className="text-[10px] text-[#8387C3] block">92.4% Softmax Confidence</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)]">
          <span className="text-[10px] text-[#8A8CAC] block">INFERENCE LATENCY</span>
          <span className="text-sm font-bold text-[#F0EEF4] block mt-0.5">&lt; 1.4s Roundtrip</span>
          <span className="text-[10px] text-[#959BB5] block">Flask Inference API</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-[#171924] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(255,255,255,0.06)]">
        <strong className="text-[#F0EEF4]">Prescription Output:</strong> Fungicide advisory (Mancozeb 2.5g/L) with vernacular audio output generated for field farmers.
      </div>
    </div>
  );
}

/* ==========================================================================
   Project G: CampusPLAY — Tournament Concurrency Exhibit
   ========================================================================== */
function CampusPlayExhibit() {
  return (
    <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
          <CalendarCheck className="w-3.5 h-3.5 text-[#8387C3]" />
          CONCURRENT COURT SCHEDULER
        </span>
        <span className="font-code text-[10px] text-[#8A8CAC]">
          MONGODB + EXPRESS
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs font-code">
        <div className="p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)]">
          <span className="text-[10px] text-[#8A8CAC] block">LOCK CONCURRENCY</span>
          <span className="text-sm font-bold text-[#F0EEF4] block mt-0.5">Optimistic Lock</span>
          <span className="text-[10px] text-[#8387C3] block">Zero Double-Bookings</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#171924] border border-[rgba(255,255,255,0.06)]">
          <span className="text-[10px] text-[#8A8CAC] block">BRACKET GENERATOR</span>
          <span className="text-sm font-bold text-[#F0EEF4] block mt-0.5">Double Elimination</span>
          <span className="text-[10px] text-[#959BB5] block">Auto Seed Placement</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-[#171924] text-xs font-sans text-[#959BB5] leading-relaxed border border-[rgba(255,255,255,0.06)]">
        <strong className="text-[#F0EEF4]">Campus Scale:</strong> Coordinated 24 inter-collegiate matches simultaneously across badminton, basketball, and futsal facilities.
      </div>
    </div>
  );
}

/* ==========================================================================
   Main ProjectCard Component
   ========================================================================== */
export function ProjectCard({
  project,
  layout = "compact",
  index = 0,
}: ProjectCardProps) {
  const isFeatured = layout === "featured";
  const projectNumber = String(index + 1).padStart(2, "0");
  const shouldReduceMotion = useReducedMotion();
  const exhibitRectRef = useRef<DOMRect | null>(null);

  const renderProjectVisualIdentity = () => {
    switch (project.slug) {
      case "redevice":
        return <ReDeviceExhibit />;
      case "banksense-ai":
        return <BankSenseExhibit />;
      case "janaarogya":
        return <JanAarogyaExhibit />;
      case "eklavya":
        return <EklavyaExhibit />;
      case "smart-evacuation-router":
        return <SmartEvacuationExhibit />;
      case "krishimitra":
        return <KrishiMitraExhibit />;
      case "campusplay":
        return <CampusPlayExhibit />;
      default:
        return (
          <div className="rounded-xl bg-[#12131A] border border-[rgba(255,255,255,0.08)] p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8387C3]" />
                <span className="font-code text-xs text-[#F0EEF4] uppercase tracking-wider font-medium">
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
                <p className="text-[#F0EEF4] font-light">{project.role}</p>
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
          </div>
        );
    }
  };

  if (isFeatured) {
    return (
      <motion.article
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.45,
          delay: Math.min(index * 0.08, 0.24),
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative rounded-2xl bg-[#171924] border border-[rgba(255,255,255,0.08)] card-interactive p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden"
      >
        {/* Subtle Ambient Light (GPU Radial Gradient) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_70%_30%,rgba(131,135,195,0.08)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs font-semibold text-[#8387C3] tracking-widest uppercase">
                [ ARCHIVE // {projectNumber} ]
              </span>
              <Badge variant="status">{project.category}</Badge>
              <Badge variant="muted">{project.status}</Badge>
            </div>

            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F0EEF4] group-hover:text-[#8387C3] transition-colors leading-[1.05]">
                <Link
                  href={`/work/${project.slug}`}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
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
              <div className="p-3.5 rounded-lg bg-[#12131A] border border-[rgba(255,255,255,0.08)] flex flex-wrap items-center gap-3 text-xs font-code">
                <span className="text-[#8387C3] uppercase tracking-wider font-semibold">
                  VERIFIED BENCHMARK:
                </span>
                <span className="text-[#F0EEF4] font-bold">
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
                    className="font-code text-[11px] text-[#959BB5] bg-[#12131A] px-2.5 py-1 rounded border border-[rgba(255,255,255,0.06)] hover:border-[#8387C3]/30 transition-colors"
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
                className="btn-fluid group/btn inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest bg-[#F0EEF4] hover:bg-[#8387C3] text-[#101116] font-semibold px-5 py-2.5 rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3]"
              >
                <span>READ ARCHITECTURAL SPECIFICATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fluid inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#959BB5] hover:text-[#F0EEF4] px-4 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded-full"
                >
                  <GithubIcon className="w-4 h-4 text-[#8387C3]" />
                  <span>SOURCE CODE</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Architectural Interactive Exhibit with subtle pointer shift */}
          <div
            className="lg:col-span-5 w-full relative group/exhibit"
            onMouseEnter={(e) => {
              exhibitRectRef.current = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.transition = "none";
            }}
            onMouseMove={(e) => {
              if (shouldReduceMotion) return;
              const rect = exhibitRectRef.current || e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
              e.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
            }}
            onMouseLeave={(e) => {
              exhibitRectRef.current = null;
              e.currentTarget.style.transition = "transform 300ms ease-out";
              e.currentTarget.style.transform = "translate3d(0px, 0px, 0px)";
            }}
          >
            {renderProjectVisualIdentity()}
          </div>
        </div>
      </motion.article>
    );
  }

  // Compact Layout for subpages and grid listings
  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.42,
        delay: Math.min(index * 0.06, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-xl bg-[#171924] border border-[rgba(255,255,255,0.08)] card-interactive p-6 flex flex-col justify-between shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-code text-[11px] font-semibold text-[#8387C3] tracking-wider">
            [ SPEC // {projectNumber} ] {project.category.toUpperCase()}
          </span>
          <span
            className={`font-code text-[9px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider ${
              project.slug === "redevice"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : project.slug === "banksense-ai"
                ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                : "bg-[#8387C3]/15 text-[#8387C3] border border-[#8387C3]/30"
            }`}
          >
            {project.slug === "redevice" ? "LIVE" : project.slug === "banksense-ai" ? "RESEARCH" : "IMPACT"}
          </span>
        </div>

        <div>
          <h3 className="font-editorial text-2xl font-medium text-[#F0EEF4] group-hover:text-[#8387C3] transition-colors">
            <Link
              href={`/work/${project.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
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

        {/* Mini Technical Exhibit on Compact Layout */}
        <div className="pt-1">
          {renderProjectVisualIdentity()}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-code text-[10px] text-[#959BB5] bg-[#12131A] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.06)]"
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

      <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="group/link inline-flex items-center gap-1 font-code text-xs text-[#8387C3] group-hover:text-[#F0EEF4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded"
        >
          <span>READ CASE STUDY</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8CAC] hover:text-[#F0EEF4] transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8387C3] rounded"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
