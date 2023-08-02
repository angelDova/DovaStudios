import FlipNavWrapper from "@/components/FlipNav";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Loading from "./loading";
import { ThemeProvider } from "@/components/theme-provider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
