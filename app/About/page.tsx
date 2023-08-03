import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "@/public/images/AboutImg.jpg";
import FlipNavWrapper from "@/app/components/FlipNav";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const About = () => {
  return (
    <>
      <FlipNavWrapper />
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-6xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              Ariana Cordova is an LA-based creative that specializes in fashion
              styling and photography. She is pursuing her Bachelor of Arts in
              Apparel Merchandising and Design at California State Polytechnic
              University, Pomona. Her projects reflect personal artistic themes
              through culture, femininity, and identity. Her goal is to connect
              and communicate through fashion.
            </p>
            <p className="py-2 text-gray-600">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nobis in error repellat voluptatibus ad. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Nam nobis in error repellat
              voluptatibus ad. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nam nobis in error repellat voluptatibus ad.
            </p>
            <Link href="/Portfolio">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Link href="/About">
          <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
        </Link>
      </div>
    </>
  );
};

export default About;
