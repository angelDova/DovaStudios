"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";

const FlipNavWrapper = () => {
  return (
    <div className="bg-white relative">
      <FlipNav />
      {/* <div className="h-72" /> */}
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black p-4 border-b-[1px] border-gray-200 flex items-center justify-between">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    // <Image src="/images/dova.png" alt="logo" width="80" height="40" />
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

interface NavLeftProps {
  setIsOpen: any;
}

const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-white text-2xl"
        onClick={() => setIsOpen((pv: any) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Home" href="/" />
      <NavLink text="Portfolio" href="/Portfolio" />
      <NavLink text="About" href="/About" />
      <NavLink text="Contact" href="/Contact" />
    </div>
  );
};

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium relative"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-clip-text text-white font-medium rounded-md whitespace-nowrap"
      >
        Sign in
      </Button>
      <Button
        variant="outline"
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-black text-white font-medium rounded-md whitespace-nowrap"
      >
        Sign up
      </Button>
    </div>
  );
};

interface NavMenuProps {
  isOpen: any;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Home" href="/" />
      <MenuLink text="Portfolio" href="/Portfolio" />
      <MenuLink text="About" href="/About" />
      <MenuLink text="Contact" href="/Contact" />
    </motion.div>
  );
};

interface MenuLinkProps {
  text: string;
  href: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ text, href }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={href}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
