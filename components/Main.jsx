// import { FiInstagram, FiLinkedin } from "react-icons/fi";
// import { AiOutlineMail } from "react-icons/ai";
// import { FaPinterestP } from "react-icons/fa";

// const Main = () => {
//   return (
//     <div id="home" className="relative min-h-[200vh] overflow-hidden">
//       <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
//         <div className="">
//           <p className="uppercase text-sm tracking-widest text-gray-600">
//             Let&apos;s create something together
//           </p>
//           <h1 className="py-4 text-gray-700">
//             Hi, I&apos;m <span className="text-purple-700">Ariana</span>{" "}
//           </h1>
//           <h3 className="py-2 text-gray-700">
//             Creative Director | Stylist | Set Designer
//           </h3>
//           <p className="py-4 text-gray-600 max-w-[70%] m-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           </p>
//           <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <FiInstagram />
//             </div>
//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <FiLinkedin />
//             </div>
//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <AiOutlineMail />
//             </div>
//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <FaPinterestP />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React from "react";
import CoverVideo from "./CoverVideo";

const Main = () => {
  return (
    <div className="relative min-h-[200vh] overflow-hidden">
      <CoverVideo />
      <h1>Logo</h1>
      <h1>NavbarLogo</h1>
    </div>
  );
};

export default Main;
