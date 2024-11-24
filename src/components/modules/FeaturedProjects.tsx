// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import ProjectCard from "./ProjectCard";
// import { useScroll } from "framer-motion";

// export type TProject = {
//   id: string;
//   title: string;
//   imageUrl: string;
//   description: string;
//   features: string[];
//   liveLink: string;
//   codeLink: string;
//   technologies: string[];
// };

// const FeaturedProjects = () => {
//   const container = useRef(null);
//   const [projects, setProjects] = useState<TProject[]>([]);

//   useEffect(() => {
//     fetch("/projects.json")
//       .then((res) => res.json())
//       .then((data) => setProjects(data))
//       .catch((error) => console.error("Error fetching projects:", error));
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <div ref={container} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="grid items-center justify-center text-center">
//         <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
//           Real-World Results
//         </h3>
//         <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
//           Featured Projects
//         </h2>
//         <p className="text-sm sm:text-lg text-gray-700 mt-2 mb-8">
//           See how I transformed concepts into engaging digital experiences.
//         </p>
//       </div>
//       {projects.map((project: TProject, index: number) => (
//         <ProjectCard
//           key={project.id}
//           project={project}
//           index={index}
//           range={[index * 0.35, 1]}
//           targetScale={1 - (projects.length - index) * 0.05}
//           progress={scrollYProgress}
//         />
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
  const container = useRef(null);
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center justify-center text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
          Real-World Results
        </h3>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-2 mb-8">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
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
    </div>
  );
};

export default FeaturedProjects;
