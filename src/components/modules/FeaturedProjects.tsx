import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";

export type TProject = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  liveLink: string;
  codeLink: string;
  technologies: string[]; // Added technologies field
};

const FeaturedProjects = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/projects.json`);
  const projects = await data.json();

  return (
    <div>
      <div className="grid items-center justify-center text-center">
        <h3 className="text-xl font-semibold text-gray-600">
          Real-World Results
        </h3>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-700 mt-2 mb-8">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      {projects.map((project: TProject) => (
        <div
          key={project.id}
          className="m-4 border rounded-3xl flex flex-col md:flex-row p-4"
        >
          {/* <figure className="min-w-[40%]">
            <Image
              className="rounded-lg"
              src={project.imageUrl}
              alt={project.title}
              width={500}
              height={300}
            />
          </figure> */}
          <figure className="min-w-full md:min-w-[40%] mb-4 md:mb-0">
            <Image
              className="rounded-lg"
              src={project.imageUrl}
              alt={project.title}
              layout="responsive"
              width={500}
              height={300}
            />
          </figure>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            {/* Added Technologies section */}
            <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
            <ul className="flex flex-wrap gap-2 text-gray-700 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaGlobe />
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </Link>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                <FaGithub />
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Link
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
