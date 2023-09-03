import FlipNavWrapper from "@/app/components/FlipNav";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { ThemeProvider } from "@/app/components/theme-provider";
import GlassNav from "./components/GlassNav";

const marker = Nunito({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "DovaStudios",
  description: "DovaStudios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={marker.className}>
        {/* <FlipNavWrapper /> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlassNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
