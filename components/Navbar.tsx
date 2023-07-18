// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Logo from "../public/dovastudios.png";
// import { getPages } from "@/sanity/sanity-utils";
// import Link from "next/link";
// import { FiInstagram, FiLinkedin } from "react-icons/fi";
// import { AiOutlineMail } from "react-icons/ai";
// import { FaPinterestP } from "react-icons/fa";
// import { Page } from "@/types/Page";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [pages, setPages] = useState<Page[]>([]);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     async function fetchPages() {
//       try {
//         const fetchedPages = await getPages();
//         setPages(fetchedPages);
//       } catch (error) {
//         // Handle error if necessary
//         console.log(error);
//       }
//     }

//     fetchPages();
//   }, []); // Run only once when the component mounts

//   return (
//     <div className="fixed w-full h-20 z-[100]">
//       <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//         <Link href="/">
//           <Image
//             src={Logo}
//             alt="logo"
//             height={95}
//             width={125}
//             className="cursor-pointer"
//           />
//         </Link>

//         <div className="flex items-center gap-3 text-sm text-gray-600">
//           {pages.map((page) => (
//             <Link
//               key={page._id}
//               href={`/${page.slug}`}
//               className="hover:underline uppercase"
//             >
//               {page.title}
//             </Link>
//           ))}
//           <div onClick={handleNav} className="md:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div
//         className={
//           !nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
//         }
//       >
//         <div
//           className={
//             !nav
//               ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
//               : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
//           }
//         >
//           <div className="">
//             <div className="flex w-full items-center justify-between">
//               <Link href="/">
//                 <Image
//                   src={Logo}
//                   alt="/"
//                   width="87"
//                   height="35"
//                   className="cursor-pointer"
//                   onClick={handleNav}
//                 />
//               </Link>
//               <div
//                 onClick={handleNav}
//                 className="rounded-full shadow-sm shadow-gray-400 cursor-pointer"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="border-b border-gray-300 my-4">
//               <p className="w-[85%] md:w-[90%] py-4">
//                 Let&apos;s create something legendary together
//               </p>
//             </div>
//           </div>
//           <div onClick={handleNav} className="flex flex-col py-4 gap-8">
//             {pages.map((page) => (
//               <Link
//                 key={page._id}
//                 href={`/${page.slug}`}
//                 className="hover:underline uppercase"
//               >
//                 {page.title}
//               </Link>
//             ))}
//             <div className="pt-40">
//               <p className="uppercase tracking-widest text-purple-700">
//                 Let&apos;s Connect
//               </p>
//               <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <FiInstagram />
//                 </div>
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <FiLinkedin />
//                 </div>
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <AiOutlineMail />
//                 </div>
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <FaPinterestP />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { useRouter } from "next/router";
import NavLogo from "../public/dovastudios.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 md:px-8 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/portfolio">Porfolio</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  onClick={handleNav}
                  src={NavLogo}
                  width="87"
                  height="35"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s design something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/portfolio">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Portfolio
                </li>
              </Link>
              <Link href="/about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>

              <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.instagram.com/angeldova_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FiInstagram />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/angeldova/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FiLinkedin />
                  </div>
                </a>
                <Link href="/contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://www.pinterest.com/">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaPinterestP />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
