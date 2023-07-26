"use client";

import ModernCarousel from "@/components/Carousel";
import LiquidSideNav from "@/components/LiquidSideNav";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-100 items-center justify-center">
      {/* <div className="bg-[#181818] items-center justify-center h-screen"> */}
      <h1 className="flex items-center justify-center font-bold p-24 text-4xl ">
        Portfolio
      </h1>
      <ModernCarousel />
      {/* <LiquidSideNav /> */}
    </div>
  );
};

export default page;
