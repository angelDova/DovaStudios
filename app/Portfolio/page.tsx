"use client";

// import FloatingBottomNav from "@/components/FloatingBottomNav";
import LiquidSideNav from "@/app/components/LiquidSideNav";
import { Gallery } from "@/app/components/gallery/gallery";

import { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiHome, FiX, FiInstagram } from "react-icons/fi";
import { BsTiktok } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import GlassNav from "../components/GlassNav";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const FloatingBottomNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[100px] bg-white relative">
      <motion.nav
        animate={open ? "open" : "closed"}
        initial="closed"
        className="bg-transparent text-[#5651e5] shadow-lg flex items-center justify-between absolute bottom-8 left-[35%] -translate-x-[50%]"
      >
        {/* <MenuButton setOpen={setOpen} open={open} /> */}
        <div className="flex gap-6 px-1">
          <Link text="Home" Icon={FiHome} href="/" />
          <Link
            text="Instagram"
            Icon={FiInstagram}
            href="https://www.instagram.com/angeldova_/"
          />
          <Link
            text="TikTok"
            Icon={BsTiktok}
            href="https://www.tiktok.com/en/"
          />
          <Link
            text="Pinterest"
            Icon={FaPinterestP}
            href="https://www.pinterest.com/"
          />
        </div>
        <Menu />
      </motion.nav>
    </div>
  );
};

interface LinkProps {
  text: string;
  Icon: any;
  href: string;
}

const Link: React.FC<LinkProps> = ({ text, Icon, href }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="text-sm w-12 hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center"
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </a>
  );
};

const Page = () => {
  return (
    <div
      id="portfolio"
      className="h-full float-left w-full relative sm:px-4 overflow-auto py-12"
    >
      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10 gap-16">
        <GlassNav />
        {/* <LiquidSideNav /> */}
      </header>
      <Gallery />
      <footer className="relative h-[90px] text-2xl font-medium flex justify-center items-center z-20">
        <FloatingBottomNav />
      </footer>
    </div>
  );
};

export default Page;
