import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mukul Yadav — Engineering Student & Builder",
  description:
    "Portfolio of Mukul Yadav, a B.Tech engineering student building software systems and experimenting with technologies across multiple domains.",
  keywords: [
    "Mukul Yadav",
    "Portfolio",
    "Engineering",
    "BMU",
    "Software Engineer",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Mukul Yadav — Engineering Student & Builder",
    description:
      "Exploring software systems, AI, security, and full-stack development.",
    url: "https://mukulyadav.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
