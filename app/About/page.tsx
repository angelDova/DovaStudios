"use client";

import BubbleNav from "@/components/BubbleNav";
import FlipNavWrapper from "@/components/FlipNav";
// import GetImages from "@/actions/getImages";

import OppoScroll from "@/components/OppositeScroll";
import React from "react";

const page = () => {
  return (
    <div className="h-full bg-blue-300">
      <FlipNavWrapper />
      {/* <BubbleNav /> */}
      <main className="">
        <h1 className="text-7xl font-bold flex justify-center items-center py-8">
          About
        </h1>
        {/* <GetImages /> */}
        {/* <OppoScroll /> */}
      </main>
    </div>
  );
};

export default page;
