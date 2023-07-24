import FlipNavWrapper from "@/components/FlipNav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <FlipNavWrapper />
        {children}
      </body>
    </html>
  );
}
