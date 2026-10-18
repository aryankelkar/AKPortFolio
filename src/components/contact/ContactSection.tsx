import React from "react";
import { Mail, FileText, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="[ 07 ]"
          tag="COMMUNICATION // DISPATCH"
          title="Good work starts with a conversation."
          description="Have an interesting project, opportunity, or idea? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0D152B] border border-[rgba(131,135,195,0.2)] p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-code text-[11px] text-[#8387C3] uppercase tracking-widest block mb-1">
                  [ REACH OUT DIRECTLY ]
                </span>
                <h3 className="font-editorial text-2xl text-[#E7E7F0] font-medium">
                  Verified Contact Points
                </h3>
                <p className="text-xs text-[#959BB5] mt-2 leading-relaxed font-light">
                  Always receptive to engineering conversations, technical discussions on AI/ML architectures, and purposeful collaborative initiatives.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080E1E] border border-[rgba(131,135,195,0.15)] hover:border-[rgba(131,135,195,0.4)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#162040] text-[#8387C3]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-code text-[10px] uppercase text-[#959BB5] block">
                        Electronic Mail
                      </span>
                      <span className="text-xs sm:text-sm text-[#E7E7F0] font-medium">
                        {profileData.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#959BB5] group-hover:text-[#E7E7F0]" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080E1E] border border-[rgba(131,135,195,0.15)] hover:border-[rgba(131,135,195,0.4)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#162040] text-[#8387C3]">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-code text-[10px] uppercase text-[#959BB5] block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm text-[#E7E7F0] font-medium">
                        github.com/aryankelkar
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#959BB5] group-hover:text-[#E7E7F0]" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080E1E] border border-[rgba(131,135,195,0.15)] hover:border-[rgba(131,135,195,0.4)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#162040] text-[#8387C3]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-code text-[10px] uppercase text-[#959BB5] block">
                        LinkedIn Network
                      </span>
                      <span className="text-xs sm:text-sm text-[#E7E7F0] font-medium">
                        linkedin.com/in/aryankelkar
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#959BB5] group-hover:text-[#E7E7F0]" />
                </a>

                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#162040] border border-[rgba(131,135,195,0.3)] hover:bg-[#3A3E6C] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0A1123] text-[#8387C3]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-code text-[10px] uppercase text-[#8387C3] block font-semibold">
                        Curriculum Vitae
                      </span>
                      <span className="text-xs sm:text-sm text-[#E7E7F0] font-medium">
                        Download Résumé (PDF)
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#E7E7F0]" />
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-code text-[#8A8CAC]">
                <MapPin className="w-3.5 h-3.5 text-[#8387C3]" />
                <span>Location: India (Remote & Collaborative)</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
