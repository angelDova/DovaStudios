"use client";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import Masonry from "react-masonry-css";
import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import img1 from "@/public/images/1.jpg";
import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import img5 from "@/public/images/5.jpg";
import img6 from "@/public/VacayVibesPics/Arctic Airbnb.webp";
import img7 from "@/public/VacayVibesPics/Barn Airbnb.webp";
import img8 from "@/public/VacayVibesPics/Camping Airbnb.webp";
import img9 from "@/public/VacayVibesPics/Castles Airbnb.webp";
import img10 from "@/public/VacayVibesPics/Caves Airbnb.webp";
import img11 from "@/public/VacayVibesPics/Country Airbnb.webp";
import img12 from "@/public/VacayVibesPics/Desert Airbnb.webp";
import img13 from "@/public/VacayVibesPics/Island Airbnb.jpeg";
import img14 from "@/public/VacayVibesPics/Lake Airbnb.webp";
import img15 from "@/public/VacayVibesPics/Luxury Airbnb.jpeg";
import img16 from "@/public/VacayVibesPics/Modern Airbnb.webp";
import img17 from "@/public/VacayVibesPics/Pool Airbnb.jpeg";
import img18 from "@/public/VacayVibesPics/Skiing Airbnb.jpeg";
import img19 from "@/public/VacayVibesPics/Windmill Airbnb.jpeg";
import img20 from "@/public/VacayVibesPics/beachHouse.webp";
import img21 from "@/public/VacayVibesPics/beachHouse2.webp";
import img22 from "@/public/VacayVibesPics/yosemite cabin.jpeg";
import { useRef } from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Button } from "../ui/button";

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

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

export function Gallery() {
  const lightboxRef = useRef<LightGallery | null>(null);
  return (
    <main className="relative pt-[110px] z-20">
      <div className="flex flex-col items-center h-full uppercase text-6xl text-center font-medium text-indigo-600">
        Studio Portfolio
        <Tab.Group>
          <Tab.List className="flex items-center gap-12">
            {tabs.map((tab) => (
              <Tab key={tab.key} className="p-2 pt-10">
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
                breakpointCols={breakpointColumnsObj}
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
  );
}
