"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Compass, MousePointer2, ExternalLink, Zap } from "lucide-react";

export default function CursorPreviewPage() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickPos, setLastClickPos] = useState<{ x: number; y: number } | null>(null);

  const handleClickTest = (e: React.MouseEvent) => {
    setClickCount((c) => c + 1);
    setLastClickPos({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
  };

  return (
    <main className="min-h-screen bg-[#07060F] text-[#F0EEF4] px-4 py-12 md:px-8 lg:px-16 selection:bg-[#7136B8]/40 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#B77AFF]/20 pb-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B77AFF] hover:text-white transition-colors mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> RETURN TO PORTFOLIO
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-white flex items-center gap-3">
              <span>A. Echidna&apos;s Witch Seal</span>
              <span className="text-xs font-mono font-normal uppercase px-2.5 py-1 rounded-full border border-[#B77AFF]/40 bg-[#7136B8]/20 text-[#E9D8FF]">
                System Validation
              </span>
            </h1>
            <p className="text-sm font-sans text-[#E9D8FF]/70 mt-2 max-w-2xl">
              Production verification showcase for the custom cursor system inspired by Echidna&apos;s Castle of Dreams.
              Compare live interaction behaviors directly against the authoritative reference specification below.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#B77AFF]/30 bg-[#120F24] text-xs font-mono text-[#E9D8FF]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              PORT 3005 LIVE
            </span>
          </div>
        </div>

        {/* Master Reference Specification Banner */}
        <section className="rounded-2xl border border-[#B77AFF]/30 bg-[#0E0C1C]/80 p-6 backdrop-blur-md overflow-hidden relative shadow-[0_0_30px_rgba(113,54,184,0.15)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#B77AFF]" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E9D8FF]">
                Authoritative Master Visual Specification
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[#B77AFF]/80">RE:ZERO SEASON 2 SPEC</span>
          </div>
          <div className="relative w-full aspect-[1024/341] rounded-xl overflow-hidden border border-[#B77AFF]/20 bg-black/60 shadow-inner">
            <Image
              src="/images/backgrounds/witch-seal-spec.jpg"
              alt="Echidna's Witch Seal Authoritative Specification"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div className="p-2 rounded-lg bg-[#151226]/60 border border-[#B77AFF]/15">
              <span className="text-[10px] font-mono uppercase text-[#B77AFF] block">State 01</span>
              <strong className="text-xs text-white">Default</strong>
              <span className="text-[10px] text-[#E9D8FF]/60 block mt-0.5">Arrow only, clean resting</span>
            </div>
            <div className="p-2 rounded-lg bg-[#151226]/60 border border-[#B77AFF]/15">
              <span className="text-[10px] font-mono uppercase text-[#B77AFF] block">State 02</span>
              <strong className="text-xs text-white">Hover</strong>
              <span className="text-[10px] text-[#E9D8FF]/60 block mt-0.5">Expand + gentle orbit</span>
            </div>
            <div className="p-2 rounded-lg bg-[#151226]/60 border border-[#B77AFF]/15">
              <span className="text-[10px] font-mono uppercase text-[#B77AFF] block">State 03</span>
              <strong className="text-xs text-white">Click</strong>
              <span className="text-[10px] text-[#E9D8FF]/60 block mt-0.5">Temporal shockwave &amp; shards</span>
            </div>
            <div className="p-2 rounded-lg bg-[#151226]/60 border border-[#B77AFF]/15">
              <span className="text-[10px] font-mono uppercase text-[#B77AFF] block">State 04</span>
              <strong className="text-xs text-white">Motion</strong>
              <span className="text-[10px] text-[#E9D8FF]/60 block mt-0.5">Smooth inertia &amp; glow trail</span>
            </div>
            <div className="p-2 rounded-lg bg-[#151226]/60 border border-[#B77AFF]/15 col-span-2 md:col-span-1">
              <span className="text-[10px] font-mono uppercase text-[#B77AFF] block">State 05</span>
              <strong className="text-xs text-white">Active / Link</strong>
              <span className="text-[10px] text-[#E9D8FF]/60 block mt-0.5">Focused radiant seal</span>
            </div>
          </div>
        </section>

        {/* Interactive Validation Arenas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ZONE 1: DEFAULT STATE */}
          <div
            id="zone-default"
            className="rounded-2xl border border-white/10 bg-[#0E0C1C]/60 p-6 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-[#B77AFF]">Zone 01 — Default State</span>
                <span className="text-[10px] font-mono text-white/40">RESTING FORM</span>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Pristine Unobtrusive Pointer</h3>
              <p className="text-xs text-[#E9D8FF]/70 leading-relaxed">
                Move your cursor around this canvas. Notice that the magical seal is completely dormant (opacity: 0).
                Only the bold, luminous white arrow pointer is visible, preventing interface clutter during normal reading.
              </p>
            </div>
            <div className="mt-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-center text-xs font-mono text-white/40">
              [ Neutral Testing Zone — No Hover Triggers ]
            </div>
          </div>

          {/* ZONE 2: HOVER STATE */}
          <div
            id="zone-hover"
            className="rounded-2xl border border-[#B77AFF]/30 bg-[#0E0C1C]/60 p-6 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-[#B77AFF]">Zone 02 — Hover (Expand + Rotate)</span>
                <span className="text-[10px] font-mono text-emerald-400">ACTIVE TRIGGER</span>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Magical Seal Awakening</h3>
              <p className="text-xs text-[#E9D8FF]/70 leading-relaxed">
                Hover over the interactive cards and links below. The Witch Seal smoothly manifests from scale 0.65 to 1.22,
                begins its subtle clockwise rotation, and shimmers with runic markings.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="#zone-hover"
                className="card-interactive p-3 rounded-xl border border-[#B77AFF]/30 bg-[#16122C]/80 hover:border-[#B77AFF] text-center text-xs font-mono text-white transition-all flex items-center justify-center gap-1.5"
                data-cursor="HOVER"
              >
                <span>Interactive Link</span>
                <ExternalLink className="w-3 h-3 text-[#B77AFF]" />
              </a>
              <button
                type="button"
                className="card-interactive p-3 rounded-xl border border-[#B77AFF]/30 bg-[#16122C]/80 hover:border-[#B77AFF] text-center text-xs font-mono text-white transition-all"
                data-cursor="CARD"
              >
                Project Card
              </button>
            </div>
          </div>

          {/* ZONE 3: CLICK TEMPORAL RIPPLE */}
          <div
            id="zone-click"
            className="rounded-2xl border border-[#B77AFF]/30 bg-[#0E0C1C]/60 p-6 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-[#B77AFF]">Zone 03 — Click (Temporal Ripple)</span>
                <span className="text-[10px] font-mono text-[#E9D8FF]">RIPPLE TRIGGER</span>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Concentric Shockwaves &amp; Crystalline Shards</h3>
              <p className="text-xs text-[#E9D8FF]/70 leading-relaxed">
                Click inside this area or click the trigger button. Two concentric temporal rings explode outward
                and 6 crystalline sparkles burst from behind the pointer, dissolving seamlessly over ~520ms.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleClickTest}
                className="btn-fluid px-5 py-3 rounded-xl bg-gradient-to-r from-[#7136B8] to-[#9655E8] hover:from-[#9655E8] hover:to-[#B77AFF] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(183,122,255,0.4)] flex items-center gap-2"
                data-cursor="CLICK ME"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Test Temporal Ripple</span>
              </button>
              <div className="text-right font-mono text-[11px] text-[#E9D8FF]/70">
                <span>Clicks: {clickCount}</span>
                {lastClickPos && (
                  <span className="block text-white/40">
                    Pos: ({lastClickPos.x}, {lastClickPos.y})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* ZONE 4: MOTION (SMOOTH INERTIA) */}
          <div
            id="zone-motion"
            className="rounded-2xl border border-[#B77AFF]/30 bg-[#0E0C1C]/60 p-6 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-[#B77AFF]">Zone 04 — Movement (Smooth Inertia)</span>
                <span className="text-[10px] font-mono text-[#B77AFF]">VELOCITY WISP</span>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Ethereal Soft Glow Trail</h3>
              <p className="text-xs text-[#E9D8FF]/70 leading-relaxed">
                Sweep your mouse swiftly across this arena. The pointer maintains instant tracking while an ethereal
                violet smoke plume streams behind the arrow notch with fluid spring inertia, disappearing when stopped.
              </p>
            </div>
            <div className="mt-4 p-4 rounded-xl border border-dashed border-[#B77AFF]/30 bg-gradient-to-r from-transparent via-[#7136B8]/10 to-transparent text-center font-mono text-xs text-[#E9D8FF]/80 flex items-center justify-center gap-2">
              <MousePointer2 className="w-4 h-4 text-[#B77AFF] animate-bounce" />
              <span>&larr; Sweep Mouse Quickly Side to Side &rarr;</span>
            </div>
          </div>
        </div>

        {/* ZONE 5: ACTIVE / LINK FOCUS (UI FOCUS) */}
        <section
          id="zone-active"
          className="rounded-2xl border border-[#B77AFF]/40 bg-gradient-to-b from-[#140F2E] to-[#0A0718] p-8 shadow-[0_0_40px_rgba(113,54,184,0.2)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B77AFF]">
                Zone 05 — Active / Link (Focused Seal)
              </span>
              <h2 className="text-2xl font-serif text-white mt-1">Peak Magical Seal Illumination</h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#B77AFF]/40 bg-[#7136B8]/30 text-[#FFFFFF] w-fit">
              Scale 1.38 &bull; Radiant Corona &bull; Cardinal Flares
            </span>
          </div>
          <p className="text-sm text-[#E9D8FF]/80 leading-relaxed max-w-3xl mb-8">
            When hovering primary navigation, major action buttons, or elements with{" "}
            <code className="text-xs font-mono text-[#FFFFFF] bg-white/10 px-1.5 py-0.5 rounded">
              data-cursor-active=&quot;true&quot;
            </code>
            , the Witch Seal triggers its most expressive state: outer diamond crown and cardinal markers flare brightly,
            the inner 4-point diamond star illuminates with radiant contrast, and orbital speed accelerates.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="btn-fluid px-8 py-4 rounded-xl bg-gradient-to-r from-[#9655E8] via-[#B77AFF] to-[#FFFFFF] text-[#0A0718] font-mono text-xs font-extrabold uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(183,122,255,0.6)] hover:scale-105 active:scale-95 flex items-center gap-2.5"
              data-cursor="PRIMARY"
              data-cursor-active="true"
            >
              <Sparkles className="w-4 h-4 text-[#0A0718]" />
              <span>Primary Focused Action</span>
            </button>
            <Link
              href="/"
              className="btn-fluid px-6 py-4 rounded-xl border border-[#B77AFF]/60 bg-[#15102E] hover:bg-[#7136B8]/30 text-white font-mono text-xs uppercase tracking-wider transition-all"
              data-cursor="NAVIGATE"
              data-cursor-active="true"
            >
              Major Navigation Link
            </Link>
            <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-[#E9D8FF]/60">
              Form Input Native Cursor Test:{" "}
              <input
                type="text"
                placeholder="Type here..."
                className="ml-2 px-2 py-1 bg-black/40 border border-white/20 rounded text-white text-xs font-sans focus:outline-none focus:border-[#B77AFF]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

