import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BrokenN Shell Docs",
    template: "%s — BrokenN Shell Docs",
  },
  description:
    "Open-source educational platform with markdown-based roadmaps and developer notes.",
  metadataBase: new URL("https://docs.brokennshell.com"),
};

import GsapProvider from "@/components/GsapProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh bg-bg-primary text-text-primary font-sans antialiased">
        <GsapProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
