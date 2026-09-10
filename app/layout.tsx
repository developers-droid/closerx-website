import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SnowieWidget from "@/components/widgets/SnowieWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.closerx.ai"),
  title: "CloserX.AI | Whitelabel AI Caller For Agency",
  description:
    "Launch your own AI calling agency in minutes. Whitelabel our ultra-realistic AI voice agents, book appointments 24/7 and scale to $30k/mo.",
  keywords: [
    "AI calling",
    "whitelabel AI caller",
    "AI voice agents",
    "appointment booking",
    "AI agency",
  ],
  openGraph: {
    title: "CloserX.AI | Whitelabel AI Caller For Agency",
    description:
      "Start your AI agency. Whitelabel AI voice agents that book appointments 24/7.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#483d8b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-page text-ink antialiased">
        <div className="top-gradient-rule fixed inset-x-0 top-0 z-100 h-[3px]" />
        {children}
        <SnowieWidget />
      </body>
    </html>
  );
}
