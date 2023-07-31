"use client";

import LiquidSideNav from "@/components/LiquidSideNav";
import { Gallery } from "@/components/gallery/gallery";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Page = () => {
  return (
    <div
      id="portfolio"
      className="h-full float-left w-full relative bg-[#000] sm:px-4"
    >
      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10 gap-16">
        <LiquidSideNav />
        <span className="flex uppercase text-lg font-medium text-[#5651e5]">
          Studio Portfolio
        </span>
      </header>
      <Gallery />
      <footer className="relative h-[90px] text-2xl font-medium flex justify-center items-center z-20">
        <Link
          href="Portfolio"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
        </Link>
      </footer>
    </div>
  );
};

export default Page;
