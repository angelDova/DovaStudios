"use client";

import ModernCarousel from "@/components/Carousel";
import LiquidSideNav from "@/components/LiquidSideNav";
import { Tab } from "@headlessui/react";
import React from "react";

// const page = () => {
//   return (
//     <div className="bg-slate-100 items-center justify-center max-w-6xl mx-auto px-8 py-8">
//       {/* <div className="bg-[#181818] items-center justify-center h-screen"> */}
//       <h1 className="flex items-center justify-center font-bold p-24 text-4xl ">
//         Portfolio
//       </h1>
//       <ModernCarousel />
//       {/* <LiquidSideNav /> */}
//     </div>
//   );
// };

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "set photos",
    display: "Set Photos",
  },
  {
    key: "style photos",
    display: "Style Photos",
  },
];

const page = () => {
  return (
    <div className="flex flex-col h-full bg-[url('/images/portfolio-bg.jpg')] bg-top bg-cover">
      <header className="flex items-center justify-center h-[90px]">
        <h1 className="text-white text-2xl font-medium">Studio Portfolio</h1>
      </header>
      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={
                        selected
                          ? "flex items-center h-[30px] font-medium text-indigo-600"
                          : "flex items-center h-[30px] font-medium text-gray-500"
                      }
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 text-indigo-600 font-medium my-6">
              <Tab.Panel className="">All Photos</Tab.Panel>
              <Tab.Panel>Set Photos</Tab.Panel>
              <Tab.Panel>Style Photos</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p className="text-white text-2xl font-medium">Studio Portfolio</p>
      </footer>
    </div>
  );
};

export default page;
