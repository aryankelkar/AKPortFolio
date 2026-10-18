import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CosmicBackground } from "@/components/ui/CosmicBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aryankelkar.dev"
  ),
  title: {
    default: "Aryan Kelkar — Personal Portfolio & Technical Archive",
    template: "%s | Aryan Kelkar",
  },
  description:
    "Personal engineering portfolio of Aryan Kelkar, Third Year B.Tech Information Technology student at Vidyalankar Institute of Technology (VIT), Mumbai. Systems builder, Event Head for ALGORYTHM (Technical Council), and ITSA Creatives team member.",
  keywords: [
    "Aryan Kelkar",
    "Vidyalankar Institute of Technology",
    "VIT Mumbai",
    "Information Technology",
    "Technical Council",
    "ALGORYTHM",
    "ITSA",
    "Software Engineer",
    "Full Stack Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Aryan Kelkar" }],
  creator: "Aryan Kelkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryankelkar.dev",
    title: "Aryan Kelkar — Personal Portfolio & Technical Archive",
    description:
      "Third Year B.Tech Information Technology student at Vidyalankar Institute of Technology (VIT), Mumbai.",
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
      suppressHydrationWarning
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#101116] text-[#F0EEF4] font-sans antialiased selection:bg-[#252838] selection:text-[#F0EEF4] flex flex-col relative"
      >
        {/* Living Deep-Space Cosmic Environment */}
        <CosmicBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <CustomCursor />
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
