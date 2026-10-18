import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101116",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Aryan Kelkar — Personal Portfolio & Technical Archive",
    template: "%s | Aryan Kelkar",
  },
  description:
    "Personal portfolio of Aryan Kelkar, an Information Technology student building digital experiences, intelligent systems, and technology that solves real-world problems.",
  keywords: [
    "Aryan Kelkar",
    "Software Engineer",
    "Full Stack Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Portfolio",
    "Information Technology",
  ],
  authors: [{ name: "Aryan Kelkar" }],
  creator: "Aryan Kelkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryankelkar.dev",
    title: "Aryan Kelkar — Personal Portfolio & Technical Archive",
    description:
      "Information Technology student, full-stack builder, and AI/ML practitioner.",
    siteName: "Aryan Kelkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kelkar — Personal Portfolio & Technical Archive",
    description:
      "Information Technology student, full-stack builder, and AI/ML practitioner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#101116] text-[#F0EEF4] font-sans antialiased selection:bg-[#252838] selection:text-[#F0EEF4] flex flex-col relative">
        {/* Understated Editorial Depth Canvas: Subtle diffused graphite lighting, delicate architectural grid & organic grain */}
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-[#101116]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-graphite-depth opacity-80" />
          <div className="absolute inset-0 bg-blueprint-grid opacity-75" />
          <div className="absolute inset-0 bg-grain opacity-85" />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
