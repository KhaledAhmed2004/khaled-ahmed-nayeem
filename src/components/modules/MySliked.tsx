import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiZod,
} from "react-icons/si";

// List of skills with their respective icons and descriptions
const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 />, details: "Markup language" },
  { id: 2, name: "CSS", icon: <FaCss3Alt />, details: "Styling language" },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
    details: "Programming language",
  },
  { id: 4, name: "React", icon: <FaReact />, details: "JavaScript library" },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    details: "CSS framework",
  },
  {
    id: 7,
    name: "Express.js",
    icon: <SiExpress />,
    details: "Node.js framework",
  },
  { id: 8, name: "Node.js", icon: <FaNodeJs />, details: "JavaScript runtime" },
  { id: 9, name: "MongoDB", icon: <SiMongodb />, details: "NoSQL database" },
  {
    id: 10,
    name: "Mongoose",
    icon: <SiMongodb />,
    details: "MongoDB ODM library",
  },
  { id: 11, name: "Git", icon: <FaGit />, details: "Version control system" },
  {
    id: 12,
    name: "GitHub",
    icon: <FaGithub />,
    details: "Version control platform",
  },
  { id: 13, name: "Zod", icon: <SiZod />, details: "Validation library" },
  {
    id: 14,
    name: "TypeScript",
    icon: <SiTypescript />,
    details: "JavaScript superset",
  },
  {
    id: 15,
    name: "Redux",
    icon: <SiRedux />,
    details: "State management library",
  },
  {
    id: 16,
    name: "Next.js",
    icon: <SiNextdotjs />,
    details: "React framework",
  },
];

const SkillsList = () => {
  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        My Skills
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="transform transition-all duration-300 ease-in-out hover:shadow-md p-6 bg-gray-50 rounded-xl shadow-sm flex items-center justify-between border border-gray-100"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white text-3xl">
              {skill.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{skill.details}</p>
              <div className="flex items-center mt-2">
                {/* Skill level bar */}
                <div className="flex space-x-0.5" title="Mid-level">
                  <div className="h-1.5 w-4 bg-violet-400 rounded-l" />
                  <div className="h-1.5 w-4 bg-violet-400" />
                  <div className="h-1.5 w-4 bg-violet-400" />
                  <div className="h-1.5 w-4 bg-violet-400" />
                  <div className="h-1.5 w-4 bg-stone-300 dark:bg-stone-700" />
                  <div className="h-1.5 w-4 bg-stone-300 dark:bg-stone-700 rounded-r" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
