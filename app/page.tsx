"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import {
  AiFillApple,
  AiFillFileImage,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { FcCamera } from "react-icons/fc";
import { useRef } from "react";

import LiquidSideNav from "@/components/LiquidSideNav";

const ImageGridHero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <Nav scrollYProgress={scrollYProgress} />
      <section ref={targetRef} className="bg-white h-[350vh]">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />

          <Circles />
        </div>
      </section>

      <LiquidSideNav />
      {/* <div className="h-screen text-white flex items-center justify-center"></div> */}
    </>
  );
};

interface NavProps {
  scrollYProgress: any;
}

const Nav: React.FC<NavProps> = ({ scrollYProgress }) => {
  const background = useTransform(scrollYProgress, (i) =>
    i === 1 ? "rgb(13,10,9)" : "transparent"
  );

  return (
    <motion.nav
      style={{ background }}
      className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
    >
      <div className="flex items-center gap-2 text-lg text-white">
        <FcCamera className="text-xl" />
        <span className="font-bold">DOVASTUDIOS</span>
      </div>
      <button className=" text-sm bg-white text-black hover:opacity-90 transition-opacity font-semibold flex items-center gap-1.5 px-3 py-1.5">
        <a
          className="flex"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="text-lg" />
          <span>&nbsp;Instagram</span>
        </a>
      </button>
      <button className="text-sm bg-white text-black hover:opacity-90 transition-opacity font-semibold flex items-center gap-1.5 px-3 py-1.5">
        <a
          className="flex"
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTiktok className="text-lg" />
          <span>&nbsp;TikTok</span>
        </a>
      </button>
    </motion.nav>
  );
};

interface CopyProps {
  scrollYProgress: any;
}

const Copy: React.FC<CopyProps> = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-stone-950 text-5xl md:text-7xl font-bold text-center max-w-xl">
        Dova
      </h1>
      <p className="text-stone-600 text-sm md:text-base text-center max-w-xl my-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, minus
        nisi? Quod praesentium quaerat possimus.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-600 transition-colors text-white font-medium rounded-full">
          Portfolio
        </button>
        <button className="px-4 py-2 bg-transparent hover:bg-stone-200 transition-colors text-stone-950 font-medium rounded-full">
          Contact Me
        </button>
      </div>
    </motion.div>
  );
};

interface ImagesProps {
  scrollYProgress: any;
}

const Images: React.FC<ImagesProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10"
        style={{
          backgroundImage: "url(../images/2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url(../images/5.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url(../images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(../images/4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(../images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(../images/AboutImg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
  </>
);

export default ImageGridHero;
