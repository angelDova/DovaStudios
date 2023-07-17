import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/dovastudios.png";
import Navbar from "@/components/Navbar";
import GlobalStyles from "@/styles/GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dova Studios",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
