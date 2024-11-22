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

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
    details: "Markup language",
    level: "expert",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt />,
    details: "Styling language",
    level: "advanced",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
    details: "Programming language",
    level: "advanced",
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
    details: "JavaScript library",
    level: "expert",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    details: "CSS framework",
    level: "advanced",
  },
  {
    id: 7,
    name: "Express.js",
    icon: <SiExpress />,
    details: "Node.js framework",
    level: "intermediate",
  },
  {
    id: 8,
    name: "Node.js",
    icon: <FaNodeJs />,
    details: "JavaScript runtime",
    level: "intermediate",
  },
  {
    id: 9,
    name: "MongoDB",
    icon: <SiMongodb />,
    details: "NoSQL database",
    level: "advanced",
  },
  {
    id: 10,
    name: "Git",
    icon: <FaGit />,
    details: "Version control system",
    level: "expert",
  },
  {
    id: 11,
    name: "GitHub",
    icon: <FaGithub />,
    details: "Version control platform",
    level: "expert",
  },
  {
    id: 12,
    name: "Zod",
    icon: <SiZod />,
    details: "Validation library",
    level: "intermediate",
  },
  {
    id: 13,
    name: "TypeScript",
    icon: <SiTypescript />,
    details: "JavaScript superset",
    level: "advanced",
  },
  {
    id: 14,
    name: "Redux",
    icon: <SiRedux />,
    details: "State management library",
    level: "advanced",
  },
  {
    id: 15,
    name: "Next.js",
    icon: <SiNextdotjs />,
    details: "React framework",
    level: "intermediate",
  },
];

const getSkillLevelWidth = (level: string) => {
  switch (level) {
    case "beginner":
      return 1;
    case "intermediate":
      return 2;
    case "advanced":
      return 4;
    case "expert":
      return 5;
    default:
      return 0;
  }
};

const SkillsList = () => {
  return (
    <div className="py-12 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
        My Skills
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
        A collection of tools and technologies I excel in:
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 px-4 xl:px-0">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative group transform transition-transform duration-500 hover:scale-105 hover:shadow-xl rounded-xl shadow-sm p-4 bg-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
          >
            {/* Tooltip */}
            <div className="absolute top-[-32px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 dark:bg-gray-700 text-white text-xs font-medium rounded-lg px-3 py-1.5 shadow-lg">
              {skill.level}!
            </div>

            {/* Icon and Details */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white text-2xl shadow-lg">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {skill.details}
                </p>
              </div>
            </div>

            {/* Skill Level */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-500 dark:text-gray-300 text-xs font-medium">
                Expertise Level:
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      index < getSkillLevelWidth(skill.level)
                        ? "bg-violet-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    title={skill.level}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
