import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20 px-2">
      <h1 className="text-7xl font-bold">
        Hello, I&apos;m
        <span className="bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text text-transparent">
          &nbsp;Ariana
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Creative Director | Stylist | Set Designer
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            // className="border-2 border-gray-500 rounded-lg p-1"
            className="aspect-square rounded-xl bg-white relative text-center cursor-pointer hover:scale-105 border hover:border-purple-800 transition"
            key={project._id}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                // fill
                className="aspect-square object-cover rounded-md relative"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
