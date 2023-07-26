"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, MouseEventHandler, useState } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ModernCarousel from "../Carousel";
import { useRouter } from "next/navigation";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, onClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % images.length);
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opactiy-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <AnimatePresence initial={false} custom={trend}>
                  <motion.img
                    variants={imgVariants}
                    custom={trend}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={images[imageIndex].id}
                    src={images[imageIndex].src}
                    alt={images[imageIndex].title}
                    style={{ y: "-50%", x: "-50%" }}
                    className="aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
                  />
                </AnimatePresence>
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <IconButton onClick={onClose} icon={<X size={15} />} />
                  <div className="absolute right-4 top-4"></div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const imgVariants = {
  initial: (trend: any) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend: any) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const images = [
  {
    id: 1,
    src: "/images/1.jpg",
    title: "A Title",
  },
  {
    id: 2,
    src: "/images/2.jpg",
    title: "A Title",
  },
  {
    id: 3,
    src: "/images/3.jpg",
    title: "A Title",
  },
  {
    id: 4,
    src: "/images/4.jpg",
    title: "A Title",
  },
  {
    id: 5,
    src: "/images/5.jpg",
    title: "A Title",
  },
  {
    id: 6,
    src: "/images/AboutImg.jpg",
    title: "A Title",
  },
];

export default Modal;
