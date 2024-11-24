"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { TProject } from "./FeaturedProjects";

type ProjectCardProps = {
  project: TProject;
  index: number;
  range: [number, number];
  targetScale: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
};

const ProjectCard = ({
  project,
  index,
  range,
  targetScale,
  progress,
}: ProjectCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={container}
      key={project.id}
      style={{ scale, top: `calc(10% + ${index * 35}px)` }}
      className="mx-auto sticky bg-gray-50 m-4 border-[3px] rounded-3xl p-4 top-20 max-w-5xl sm:top-10 sm:m-2"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Image Section */}
        <div className="w-full md:w-[50%] h-[200px] md:h-[300px] rounded-lg overflow-hidden flex justify-center items-center mb-4 md:mb-0">
          <motion.div
            style={{ scale: imgScale }}
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={project.imageUrl}
              alt={project.title}
              layout="intrinsic"
              width={500}
              height={300}
            />
          </motion.div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-[50%] px-4 md:px-6 flex flex-col justify-between text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 sm:line-clamp-4 line-clamp-3">
            {project.description}
          </p>

          <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
          <ul className="flex flex-wrap gap-2 text-gray-700 mb-4 justify-center md:justify-start">
            {project.technologies.map((tech, techIndex) => (
              <li
                key={techIndex}
                className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
    </motion.div>
  );
};

export default ProjectCard;
