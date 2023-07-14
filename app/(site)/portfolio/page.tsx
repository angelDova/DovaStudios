import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "@/components/ProjectItem";
import BrownSuit from "@/public/Brown-Suit-1.jpeg";
import Latte from "@/public/Iced-Vanilla-Latte.jpeg";
import Macbook from "@/public/Macbook-pro-14.jpeg";
import Msi from "@/public/MSI-laptop.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-32">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Designed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Macbook Finder"
            backgroundImg={Macbook}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Suit App"
            backgroundImg={BrownSuit}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={Latte}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={Msi}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
