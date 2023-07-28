"use client";

import LiquidSideNav from "@/components/LiquidSideNav";
import { Gallery } from "@/components/gallery/gallery";

const Page = () => {
  return (
    <div className="h-full float-left w-full relative bg-[#000] overflow-auto sm:px-4">
      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10 gap-16">
        <LiquidSideNav />
        <span className="flex uppercase text-lg font-medium">
          Studio Portfolio
        </span>
      </header>
      <Gallery />
      <footer className="relative h-[90px] text-2xl font-medium flex justify-center items-center z-20">
        <p className="">Studio Portfolio</p>
      </footer>
    </div>
  );
};

export default Page;
