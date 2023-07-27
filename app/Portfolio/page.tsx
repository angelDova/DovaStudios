"use client";

import ModernCarousel from "@/components/Carousel";
import LiquidSideNav from "@/components/LiquidSideNav";
import { Tab } from "@headlessui/react";
import React, { useRef } from "react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import img1 from "@/public/images/1.jpg";
import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import img5 from "@/public/images/5.jpg";
import PortfolioBg from "@/public/images/portfolio-bg.jpg";
import Image from "next/image";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

const images = [img1, img2, img3, img4, img5];

const Page = () => {
  const lightboxRef = useRef<LightGallery | null>(null);
  return (
    <div className="h-full overflow-auto">
      <Image
        src={PortfolioBg}
        alt="background-imaget"
        placeholder="blur"
        className="fixed left-0 top-0 z-0"
        priority
      />

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed z-30 w-full flex items-center justify-center h-[90px] px-6">
        <span className="uppercase text-2xl font-medium">Studio Portfolio</span>
      </header>
      <main className="relative pt-[110px] z-20">
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
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="image-content"
                      className="my-4 hover:opacity-90 cursor-pointer"
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
                </Masonry>

                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>Set Photos</Tab.Panel>
              <Tab.Panel>Style Photos</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] text-2xl font-medium flex justify-center items-center z-20">
        <p className="">Studio Portfolio</p>
      </footer>
    </div>
  );
};

export default Page;
