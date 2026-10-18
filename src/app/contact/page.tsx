import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact & Communication",
  description:
    "Get in touch with Aryan Kelkar for software engineering collaborations, technical inquiries, or professional opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-4">
        <SectionHeading
          number="[ ARCHIVE // 06 ]"
          tag="DIRECT INQUIRIES"
          title="Initiate a Conversation"
          description="Whether discussing full-stack web applications, machine-learning architectures, or collaborative technical opportunities, I welcome thoughtful correspondence."
        />
      </div>
      <ContactSection showHeader={false} />
    </div>
  );
}
