"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "@/public/images/contact.jpg";
import ShiftingContactForm from "@/app/components/ShiftingContactForm";
import FlipNavWrapper from "@/app/components/FlipNav";
import FloatingBottomNav from "@/app/components/FloatingBottomNav";

const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-24 md:py-32 w-full ">
          <p className="text-6xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h1 className="py-4">Get In Touch</h1>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2 text-gray-600">Ariana Cordova</h2>
                  <p className="text-gray-600">
                    Creative Director | Stylist | Set Designer
                  </p>
                  <p className="py-4 text-gray-600">
                    I am available for freelance or part-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8 text-gray-600">
                    Connect With Me
                  </p>
                  <FloatingBottomNav />
                  {/* <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.linkedin.com/in/clint-briley-50056920a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/fireclint"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <Link href="/resume">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <ShiftingContactForm />
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/Contact">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
