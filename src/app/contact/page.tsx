import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/contact/ContactSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Contact & Communication",
  description:
    "Get in touch with Aryan Kelkar for software engineering collaborations, technical inquiries, or professional opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-28 pb-16 bg-[#101116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <SectionHeading
            number="[ ARCHIVE // 06 ]"
            tag="DIRECT INQUIRIES"
            title="Initiate a Conversation"
            description="Whether discussing full-stack web applications, machine-learning architectures, or collaborative technical opportunities, I welcome thoughtful correspondence."
          />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
