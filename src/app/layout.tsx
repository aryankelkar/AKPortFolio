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
  themeColor: "#0B1020",
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
      <body className="min-h-screen bg-[#0B1020] text-[#F0EEF4] font-sans antialiased selection:bg-[#3A3E6C] selection:text-[#F0EEF4] flex flex-col relative bg-atmospheric-canvas">
        {/* Layer 3 & Layer 4: Global Architectural Blueprint Dual Grid & Tactile Grain */}
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-blueprint-grid bg-grain opacity-85"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
