import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

// ── Fonts ───────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

// ── Site-wide constants ──────────────────────────────────────

const SITE_URL = "https://mukulyadav.dev";
const SITE_TITLE = "Mukul Yadav — Security Engineer";
const SITE_DESC =
  "Security engineer building automated DAST tooling, defensive sandboxes, and secure backend systems. B.Tech CSE — BML Munjal University.";

// ── Root Metadata ───────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s — Mukul Yadav",
  },
  description: SITE_DESC,
  keywords: [
    "Mukul Yadav",
    "security engineer",
    "appsec",
    "DAST",
    "VulnForge",
    "SandHawk",
    "cybersecurity portfolio",
    "BML Munjal University",
  ],

  // ── Open Graph ─────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mukul Yadav",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mukul Yadav — Security Engineer Portfolio",
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.png"],
  },

  // ── Robots ─────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical / Alternate ───────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Author ─────────────────────────────────────────────────
  authors: [{ name: "Mukul Yadav", url: SITE_URL }],
  creator: "Mukul Yadav",
};

// ── Viewport (separate export as per Next.js 14+) ───────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

// ── Root Layout ─────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={jetbrainsMono.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
