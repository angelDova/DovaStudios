"use client";

import ModernCarousel from "@/components/Carousel";
import LiquidSideNav from "@/components/LiquidSideNav";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-100 items-center justify-center h-screen">
      <ModernCarousel />
      <LiquidSideNav />
    </div>
  );
};

export default page;
