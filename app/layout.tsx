import FlipNavWrapper from "@/components/FlipNav";
import "./globals.css";
import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import Loading from "./loading";

const marker = Permanent_Marker({ subsets: ["latin"], weight: "400" });

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
      <body className={marker.className}>
        <FlipNavWrapper />
        {children}
      </body>
    </html>
  );
}
