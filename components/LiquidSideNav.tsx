import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const LiquidSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" grid place-content-center  relative">
      <div className="flex items-center text-white">
        <motion.button
          whileHover={{ rotate: "180deg" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-xl bg-white text-black hover:text-indigo-500 transition-colors p-4 rounded-full"
        >
          <FiMenu />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

interface NavProps {
  isOpen: any;
  setIsOpen: any;
}

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      className="fixed top-0 bottom-0 w-screen bg-white"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-2xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-4 left-4"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <h2 className="items-center justify-center text-center text-black mt-32 text-4xl">
        Dova Studios
      </h2>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-8 left-8"
      >
        <NavLink text="Home" href="/" />
        <NavLink text="Portfolio" href="/Portfolio" />
        <NavLink text="About" href="/About" />
        <NavLink text="Contact" href="Contact" />
      </motion.div>
    </motion.nav>
  );
};

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <motion.a
      className="inline-block z-10 text-slate-800 w-fit font-black text-6xl hover:text-indigo-500 transition-colors "
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      href={href}
    >
      {text}
    </motion.a>
  );
};

export default LiquidSideNav;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
