"use client";

import ModernCarousel from "@/components/Carousel";
import LiquidSideNav from "@/components/LiquidSideNav";
import { Tab } from "@headlessui/react";
import React from "react";
import Masonry from "react-masonry-css";
import classNames from "classnames";
import img1 from "@/public/images/1.jpg";
import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import img5 from "@/public/images/5.jpg";
import Image from "next/image";

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

const images = [];

const page = () => {
  return (
    <div className="h-full bg-[url('/images/portfolio-bg.jpg')] bg-top bg-cover overflow-auto">
      <header className="fixed z-10 w-full flex items-center justify-center h-[90px] px-6">
        <span className="uppercase text-2xl font-medium">Studio Portfolio</span>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg",
                        selected
                          ? "flex items-center h-[30px] font-medium text-indigo-600"
                          : "flex items-center h-[30px] font-medium text-gray-500"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 text-indigo-600 font-medium my-6 ">
              <Tab.Panel className="">
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4 "
                  columnClassName=""
                >
                  <Image src={img1} alt="image1" className="my-4" />
                  <Image src={img2} alt="image1" className="my-4" />
                  <Image src={img3} alt="image1" className="my-4" />
                  <Image src={img4} alt="image1" className="my-4" />
                  <Image src={img5} alt="image1" className="my-4" />
                  {/* <img src="/images/1.jpg" alt="img-1" className="my-4" />
                  <img src="/images/2.jpg" alt="img-2" className="my-4" />
                  <img src="/images/3.jpg" alt="img-3" className="my-4" />
                  <img src="/images/4.jpg" alt="img-4" className="my-4" />
                  <img src="/images/5.jpg" alt="img-5" className="my-4" /> */}
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Set Photos</Tab.Panel>
              <Tab.Panel>Style Photos</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] text-2xl font-medium flex justify-center items-center">
        <p className="">Studio Portfolio</p>
      </footer>
    </div>
  );
};

export default page;
