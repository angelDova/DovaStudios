"use client";

import ShiftingContactForm from "@/components/ShiftingContactForm";
import React from "react";
import Image from "next/image";
import LiquidSideNav from "@/components/LiquidSideNav";

const Contact = () => {
  return (
    <div className="bg-slate-100 items-center justify-center h-screen">
      <ShiftingContactForm />
      <LiquidSideNav />
    </div>
  );
};

export default Contact;
