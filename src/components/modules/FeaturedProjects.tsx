// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaGlobe, FaGithub } from "react-icons/fa";

// export type TProject = {
//   id: string;
//   title: string;
//   imageUrl: string;
//   description: string;
//   features: string[];
//   liveLink: string;
//   codeLink: string;
//   technologies: string[]; // Added technologies field
// };

// const FeaturedProjects = async () => {
//   const data = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/projects.json`);
//   const projects = await data.json();

//   return (
//     <div>
//       <div className="grid items-center justify-center text-center">
//         <h3 className="text-xl font-semibold text-gray-600">
//           Real-World Results
//         </h3>
//         <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
//           Featured Projects
//         </h2>
//         <p className="text-lg text-gray-700 mt-2 mb-8">
//           See how I transformed concepts into engaging digital experiences.
//         </p>
//       </div>
//       {projects.map((project: TProject, index: number) => (
//         <div
//           key={project.id}
//           className="sticky bg-gray-100 m-4 border-[3px] rounded-3xl flex flex-col md:flex-row p-4"
//           style={{
//             top: `calc(64px + ${index * 40}px`,
//           }}
//         >
//           {/* <figure className="min-w-[40%]">
//             <Image
//               className="rounded-lg"
//               src={project.imageUrl}
//               alt={project.title}
//               width={500}
//               height={300}
//             />
//           </figure> */}
//           <figure className="min-w-full md:min-w-[40%] mb-4 md:mb-0">
//             <Image
//               className="rounded-lg"
//               src={project.imageUrl}
//               alt={project.title}
//               layout="responsive"
//               width={500}
//               height={300}
//             />
//           </figure>
//           <div className="p-6 flex flex-col justify-between flex-grow">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               {project.title}
//             </h3>
//             <p className="text-gray-600 mb-4">{project.description}</p>
//             <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
//             <ul className="list-disc pl-5 text-gray-700 mb-4">
//               {project.features.map((feature, featureIndex) => (
//                 <li key={featureIndex}>{feature}</li>
//               ))}
//             </ul>
//             {/* Added Technologies section */}
//             <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
//             <ul className="flex flex-wrap gap-2 text-gray-700 mb-4">
//               {project.technologies.map((tech, techIndex) => (
//                 <li
//                   key={techIndex}
//                   className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
//                 >
//                   {tech}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-between items-center">
//               <button className="flex items-center gap-2 text-blue-600 hover:underline">
//                 <FaGlobe />
//                 <Link
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Live Link
//                 </Link>
//               </button>
//               <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
//                 <FaGithub />
//                 <Link
//                   href={project.codeLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Code Link
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeaturedProjects;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import { FaGlobe, FaGithub } from "react-icons/fa";
// import { motion, useScroll, useTransform } from "framer-motion";

// export type TProject = {
//   id: string;
//   title: string;
//   imageUrl: string;
//   description: string;
//   features: string[];
//   liveLink: string;
//   codeLink: string;
//   technologies: string[]; // Added technologies field
// };

// const FeaturedProjects = () => {
//   const container = useRef(null);
//   const [projects, setProjects] = useState([]);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

//   useEffect(() => {
//     fetch("/projects.json")
//       .then((res) => res.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error("Error fetching projects:", error));
//   }, []);

//   return (
//     <div>
//       <div className="grid items-center justify-center text-center">
//         <h3 className="text-xl font-semibold text-gray-600">
//           Real-World Results
//         </h3>
//         <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
//           Featured Projects
//         </h2>
//         <p className="text-lg text-gray-700 mt-2 mb-8">
//           See how I transformed concepts into engaging digital experiences.
//         </p>
//       </div>
//       {projects.map((project: TProject) => (
//         <div
//           ref={container}
//           key={project.id}
//           className="sticky bg-gray-100 m-4 border-[3px] rounded-3xl flex flex-col md:flex-row p-4 top-20"
//         >
//           {/* <motion.div
//             style={scale}
//             className="min-w-full md:min-w-[50%] mb-4 md:mb-0"
//           >
//             <Image
//               className="rounded-lg"
//               src={project.imageUrl}
//               alt={project.title}
//               layout="responsive"
//               width={500}
//               height={300}
//             />
//           </motion.div> */}
//           <motion.div className="min-w-full md:min-w-[50%] mb-4 md:mb-0">
//             <motion.div style={{ scale }}>
//               <Image
//                 className="rounded-lg"
//                 src={project.imageUrl}
//                 alt={project.title}
//                 layout="responsive"
//                 width={500}
//                 height={300}
//               />
//             </motion.div>
//           </motion.div>

//           <div className="p-6 flex flex-col justify-between flex-grow">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               {project.title}
//             </h3>
//             <p className="text-gray-600 mb-4">{project.description}</p>
//             <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
//             <ul className="list-disc pl-5 text-gray-700 mb-4">
//               {project.features.map((feature, featureIndex) => (
//                 <li key={featureIndex}>{feature}</li>
//               ))}
//             </ul>
//             {/* Added Technologies section */}
//             <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
//             <ul className="flex flex-wrap gap-2 text-gray-700 mb-4">
//               {project.technologies.map((tech, techIndex) => (
//                 <li
//                   key={techIndex}
//                   className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
//                 >
//                   {tech}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-between items-center">
//               <button className="flex items-center gap-2 text-blue-600 hover:underline">
//                 <FaGlobe />
//                 <Link
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Live Link
//                 </Link>
//               </button>
//               <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
//                 <FaGithub />
//                 <Link
//                   href={project.codeLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Code Link
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeaturedProjects;

"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useScroll } from "framer-motion";

export type TProject = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  liveLink: string;
  codeLink: string;
  technologies: string[];
};

const FeaturedProjects = () => {
  const conatiner = useRef(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const { scrollYProgress } = useScroll({
    target: conatiner,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={conatiner} className="max-w-7xl mx-auto">
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
      {projects.map((project: TProject, index: number) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          range={[index * 0.35, 1]}
          targetScale={1 - (projects.length - index) * 0.05}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;
