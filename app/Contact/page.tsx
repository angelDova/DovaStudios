"use client";

import ShiftingContactForm from "@/components/ShiftingContactForm";
import React from "react";
import Image from "next/image";
import LiquidSideNav from "@/components/LiquidSideNav";
import FlipNavWrapper from "@/components/FlipNav";

const Contact = () => {
  return (
    <div className="bg-slate-100 items-center justify-center h-screen">
      <FlipNavWrapper />
      <span className="text-black flex items-center justify-center text-4xl sm:p4 pt-10">
        Get In Touch
      </span>
      <div className="pt-28">
        <ShiftingContactForm />
      </div>
    </div>
  );
};

export default Contact;
