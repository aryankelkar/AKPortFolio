"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, ArrowUpRight } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus("success");
      if (data.mailtoUrl) {
        setMailtoUrl(data.mailtoUrl);
      }
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="rounded-2xl bg-[#10182D] border border-[rgba(160,170,210,0.16)] p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between pb-6 border-b border-[rgba(160,170,210,0.12)] mb-6">
        <div>
          <span className="font-code text-[11px] text-[#A39AFF] uppercase tracking-widest block">
            [ DIRECT TRANSMISSION ]
          </span>
          <h3 className="font-editorial text-2xl text-[#F0EEF4] font-medium mt-1">
            Send an Inquiry
          </h3>
        </div>
        <div className="p-2 rounded bg-[#162040] text-[#A39AFF] border border-[rgba(160,170,210,0.16)]">
          <Mail className="w-4 h-4" />
        </div>
      </div>

      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#162040] border border-[#A39AFF] flex items-center justify-center mx-auto text-[#A39AFF]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-editorial text-2xl text-[#F0EEF4]">
            Message Received & Staged
          </h4>
          <p className="text-sm text-[#B0AEB8] max-w-md mx-auto leading-relaxed font-light">
            Thank you for reaching out. Your communication has been validated. You can also open your mail client directly to ensure prompt delivery.
          </p>

          {mailtoUrl && (
            <div className="pt-4">
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider text-[#0B1020] bg-[#A39AFF] hover:bg-[#F0EEF4] font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <span>OPEN EMAIL CLIENT TO SEND</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
            className="block mx-auto mt-4 font-code text-xs text-[#85879B] hover:text-[#F0EEF4] underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block font-code text-xs uppercase text-[#B0AEB8] tracking-wider mb-1.5"
              >
                Your Name <span className="text-[#A39AFF]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full rounded-lg bg-[#0B1020] border border-[rgba(160,170,210,0.14)] px-4 py-2.5 text-sm text-[#F0EEF4] placeholder-[#85879B]/50 focus:outline-none focus:border-[#A39AFF] transition-colors font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-code text-xs uppercase text-[#B0AEB8] tracking-wider mb-1.5"
              >
                Email Address <span className="text-[#A39AFF]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full rounded-lg bg-[#0B1020] border border-[rgba(160,170,210,0.14)] px-4 py-2.5 text-sm text-[#F0EEF4] placeholder-[#85879B]/50 focus:outline-none focus:border-[#A39AFF] transition-colors font-sans"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block font-code text-xs uppercase text-[#B0AEB8] tracking-wider mb-1.5"
            >
              Subject / Topic
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Collaboration / Project Inquiry / Engineering Discussion"
              className="w-full rounded-lg bg-[#0B1020] border border-[rgba(160,170,210,0.14)] px-4 py-2.5 text-sm text-[#F0EEF4] placeholder-[#85879B]/50 focus:outline-none focus:border-[#A39AFF] transition-colors font-sans"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-code text-xs uppercase text-[#B0AEB8] tracking-wider mb-1.5"
            >
              Message Details <span className="text-[#A39AFF]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              minLength={10}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, idea, or challenge..."
              className="w-full rounded-lg bg-[#0B1020] border border-[rgba(160,170,210,0.14)] px-4 py-2.5 text-sm text-[#F0EEF4] placeholder-[#85879B]/50 focus:outline-none focus:border-[#A39AFF] transition-colors font-sans resize-y"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 font-code text-xs uppercase tracking-widest text-[#0B1020] bg-[#F0EEF4] hover:bg-[#A39AFF] disabled:opacity-50 font-semibold px-6 py-3 rounded-lg shadow-lg shadow-black/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A39AFF]"
            >
              {status === "submitting" ? (
                <span>PROCESSING...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT MESSAGE</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
