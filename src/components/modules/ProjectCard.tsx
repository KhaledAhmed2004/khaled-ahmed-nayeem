// // "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React from "react";
// // import { FaGithub, FaGlobe } from "react-icons/fa";
// // import { motion } from "framer-motion";
// // import { TProject } from "./FeaturedProjects";

// // type ProjectCardProps = {
// //   project: TProject;
// // };

// // const ProjectCard = ({ project }: ProjectCardProps) => {
// //   return (
// //     <div
// //       key={project.id}
// //       className="sticky bg-gray-100 m-4 border-[3px] rounded-3xl flex flex-col md:flex-row p-4 top-20"
// //     >
// //       <motion.div className="min-w-full md:min-w-[50%] mb-4 md:mb-0">
// //         <Image
// //           className="rounded-lg"
// //           src={project.imageUrl}
// //           alt={project.title}
// //           layout="responsive"
// //           width={500}
// //           height={300}
// //         />
// //       </motion.div>

// //       <div className="p-6 flex flex-col justify-between flex-grow">
// //         <h3 className="text-2xl font-semibold text-gray-900 mb-4">
// //           {project.title}
// //         </h3>
// //         <p className="text-gray-600 mb-4">{project.description}</p>
// //         <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
// //         <ul className="list-disc pl-5 text-gray-700 mb-4">
// //           {project.features.map((feature, featureIndex) => (
// //             <li key={featureIndex}>{feature}</li>
// //           ))}
// //         </ul>
// //         {/* Added Technologies section */}
// //         <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
// //         <ul className="flex flex-wrap gap-2 text-gray-700 mb-4">
// //           {project.technologies.map((tech, techIndex) => (
// //             <li
// //               key={techIndex}
// //               className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
// //             >
// //               {tech}
// //             </li>
// //           ))}
// //         </ul>
// //         <div className="flex justify-between items-center">
// //           <button className="flex items-center gap-2 text-blue-600 hover:underline">
// //             <FaGlobe />
// //             <Link
// //               href={project.liveLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               Live Link
// //             </Link>
// //           </button>
// //           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
// //             <FaGithub />
// //             <Link
// //               href={project.codeLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               Code Link
// //             </Link>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectCard;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { TProject } from "./FeaturedProjects";

// type ProjectCardProps = {
//   project: TProject;
//   index: number;
//   range: [number, number];
//   targetScale: number;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   progress: any;
// };

// const ProjectCard = ({
//   project,
//   index,
//   range,
//   targetScale,
//   progress,
// }: ProjectCardProps) => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });
//   const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
//   const scale = useTransform(progress, range, [1, targetScale]);
//   return (
//     // container div
//     <motion.div
//       ref={container}
//       key={project.id}
//       style={{ scale, top: `calc(10% + ${index * 35}px)` }}
//       className="sticky bg-gray-50 m-4 border-[3px] rounded-3xl p-4 top-20"
//     >
//       {/* Card content with  Flex layout  */}
//       <div className="flex flex-col md:flex-row">
//         {/* Left part with Image of the project */}
//         <div className="w-[90%] h-full rounded-lg overflow-hidden flex justify-center items-center">
//           {/* Motion div for image animation */}
//           <motion.div
//             style={{ scale: imgScale }}
//             className="w-full h-full flex justify-center items-center"
//           >
//             {/* Image component with rounded corners and responsive layout */}
//             <Image
//               className="rounded-lg"
//               src={project.imageUrl}
//               alt={project.title}
//               layout="intrinsic" // Use intrinsic to maintain image's aspect ratio
//               width={500}
//               height={300}
//             />
//           </motion.div>
//         </div>

//         {/* Right part with  Text and details about the project */}

//         <div className="w-[50%] p-6 flex flex-col justify-between flex-grow">
//           {/* Project title */}

//           <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//             {project.title}
//           </h3>
//           {/* Project description */}

//           <p className="text-gray-600 mb-4">{project.description}</p>
//           {/* Features list */}

//           <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
//           <ul className="list-disc pl-5 text-gray-700 mb-4">
//             {project.features.map((feature, featureIndex) => (
//               <li key={featureIndex}>{feature}</li>
//             ))}
//           </ul>
//           {/* Technologies list */}
//           <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
//           <ul className="flex flex-wrap gap-2 text-gray-700 mb-4">
//             {project.technologies.map((tech, techIndex) => (
//               <li
//                 key={techIndex}
//                 className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
//               >
//                 {tech}
//               </li>
//             ))}
//           </ul>
//           {/* Bottom Section for project links */}

//           <div className="flex justify-between items-center">
//             <button className="flex items-center gap-2 text-blue-600 hover:underline">
//               <FaGlobe />
//               <Link
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Live Link
//               </Link>
//             </button>
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
//               <FaGithub />
//               <Link
//                 href={project.codeLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Code Link
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { TProject } from "./FeaturedProjects";

// type ProjectCardProps = {
//   project: TProject;
// };

// const ProjectCard = ({ project }: ProjectCardProps) => {
//   return (
//     <div
//       key={project.id}
//       className="sticky bg-gray-100 m-4 border-[3px] rounded-3xl flex flex-col md:flex-row p-4 top-20"
//     >
//       <motion.div className="min-w-full md:min-w-[50%] mb-4 md:mb-0">
//         <Image
//           className="rounded-lg"
//           src={project.imageUrl}
//           alt={project.title}
//           layout="responsive"
//           width={500}
//           height={300}
//         />
//       </motion.div>

//       <div className="p-6 flex flex-col justify-between flex-grow">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//           {project.title}
//         </h3>
//         <p className="text-gray-600 mb-4">{project.description}</p>
//         <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
//         <ul className="list-disc pl-5 text-gray-700 mb-4">
//           {project.features.map((feature, featureIndex) => (
//             <li key={featureIndex}>{feature}</li>
//           ))}
//         </ul>
//         {/* Added Technologies section */}
//         <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
//         <ul className="flex flex-wrap gap-2 text-gray-700 mb-4">
//           {project.technologies.map((tech, techIndex) => (
//             <li
//               key={techIndex}
//               className="px-3 py-1 border rounded-full text-sm bg-gray-200 text-gray-800"
//             >
//               {tech}
//             </li>
//           ))}
//         </ul>
//         <div className="flex justify-between items-center">
//           <button className="flex items-center gap-2 text-blue-600 hover:underline">
//             <FaGlobe />
//             <Link
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Live Link
//             </Link>
//           </button>
//           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
//             <FaGithub />
//             <Link
//               href={project.codeLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Code Link
//             </Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

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
    // container div
    <motion.div
      ref={container}
      key={project.id}
      style={{ scale, top: `calc(10% + ${index * 35}px)` }}
      className="sticky bg-gray-50 m-4 border-[3px] rounded-3xl p-4 top-20 max-w-5xl mx-auto"
    >
      {/* Card content with  Flex layout  */}
      <div className="flex flex-col md:flex-row">
        {/* Left part with Image of the project */}
        <div className="w-[50%] h-full rounded-lg overflow-hidden flex justify-center items-center">
          {/* Motion div for image animation */}
          <motion.div
            style={{ scale: imgScale }}
            className="w-full h-full flex justify-center items-center"
          >
            {/* Image component with rounded corners and responsive layout */}
            <Image
              className="rounded-lg"
              src={project.imageUrl}
              alt={project.title}
              layout="intrinsic" // Use intrinsic to maintain image's aspect ratio
              width={500}
              height={300}
            />
          </motion.div>
        </div>

        {/* Right part with  Text and details about the project */}

        <div className="w-[50%] p-6 flex flex-col justify-between flex-grow">
          {/* Project title */}

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {project.title}
          </h3>
          {/* Project description */}

          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies list */}
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
          {/* Bottom Section for project links */}

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
    </motion.div>
  );
};

export default ProjectCard;
