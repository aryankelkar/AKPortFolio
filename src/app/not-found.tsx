import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <span className="font-code text-xs uppercase tracking-widest text-[#8387C3] block">
            [ ERROR // 404 ]
          </span>

          <h1 className="font-editorial text-6xl sm:text-7xl font-normal text-[#E7E7F0] tracking-tight">
            Record Not Located
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#8387C3]">
            The requested document or case study is not indexed in this archive.
          </p>

          <p className="text-sm text-[#959BB5] leading-relaxed font-light">
            You may have followed an outdated link or entered an uncataloged URL path.
            Explore the available engineering projects or return to the main archive.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#0A1123] bg-[#8387C3] hover:bg-[#959BB5] font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>RETURN HOME</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-[#E7E7F0] bg-[#162040] hover:bg-[#3A3E6C] px-6 py-3 rounded-full border border-[rgba(131,135,195,0.25)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#8387C3]" />
              <span>PROJECT ARCHIVE</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
