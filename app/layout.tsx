import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Broken Shell Docs",
    template: "%s — Broken Shell Docs",
  },
  description:
    "Open-source educational platform with markdown-based roadmaps and developer notes.",
  metadataBase: new URL("https://docs.brokenshell.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-dvh bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
