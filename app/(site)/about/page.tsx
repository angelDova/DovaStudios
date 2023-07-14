import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "@/public/AboutImg.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-32">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-center text-xl tracking-widest text-[#5651e5]">
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

          <Link href="/portfolio">
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
  );
};

export default About;
