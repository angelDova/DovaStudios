"use client";

import ModernCarousel from "@/app/components/Carousel";
import FlipNavWrapper from "@/app/components/FlipNav";
import FloatingBottomNav from "@/app/components/FloatingBottomNav";
import GradientButton from "@/app/components/GradientShadowButton";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Key, useState } from "react";

const ShuffleHero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <FlipNavWrapper />
      <h1 className="flex w-full items-center justify-center sm:text-6xl text-5xl uppercase font-bold mx-auto sm:p-12 p-8 text-black dark:text-white">
        DovaStudios
      </h1>

      <section className="w-full px-8 py-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 max-w-6xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium ">
            Ariana Cordova
          </span>
          <h3 className="text-black dark:text-white text-4xl md:text-6xl font-semibold">
            Creative Director | Stylist | Set Designer
          </h3>
          <p className="text-base md:text-lg text-black my-4 md:my-6 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
            in error repellat voluptatibus ad.
          </p>
          {/* <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap">
          Contact
        </button> */}

          <GradientButton
          // onClick={handleButtonClick}
          // className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          />
        </div>
        <ModernCarousel />
        <div className="flex items-center justify-center">
          <FloatingBottomNav />
        </div>
      </section>
    </>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/1.jpg",
  },
  {
    id: 2,
    src: "/images/2.jpg",
  },
  {
    id: 3,
    src: "/images/3.jpg",
  },
  {
    id: 4,
    src: "/images/4.jpg",
  },
  {
    id: 5,
    src: "/images/5.jpg",
  },
  {
    id: 6,
    src: "/images/AboutImg.jpg",
  },
  {
    id: 7,
    src: "/images/1.jpg",
  },
  {
    id: 8,
    src: "/images/2.jpg",
  },
  {
    id: 9,
    src: "/images/3.jpg",
  },
  {
    id: 10,
    src: "/images/4.jpg",
  },
  {
    id: 11,
    src: "/images/5.jpg",
  },
  {
    id: 12,
    src: "/images/AboutImg.jpg",
  },
  {
    id: 13,
    src: "/images/1.jpg",
  },
  {
    id: 14,
    src: "/images/2.jpg",
  },
  {
    id: 15,
    src: "/images/3.jpg",
  },
  {
    id: 16,
    src: "/images/4.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map(
    (sq: { id: Key | null | undefined; src: any }) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    )
  );
};

export default ShuffleHero;
