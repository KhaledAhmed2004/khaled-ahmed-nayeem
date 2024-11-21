import React from "react";
import { GoMortarBoard } from "react-icons/go";

const App = () => {
  const timelineData = [
    {
      year: "2021 - 2022",
      title: "CutShort Certified React.js - Advanced",
      organization: "CutShort",
    },
    {
      year: "2018 - 2020",
      title: "AWS Certified Developer: Associate",
      organization: "Amazon Web Services (AWS)",
    },
    {
      year: "2012 - 2016",
      title: "Bachelors in Computer Science & Engineering",
      organization: "West Bengal University of Technology",
    },
    {
      year: "2012 - 2016",
      title: "Bachelors in Computer Science & Engineering",
      organization: "West Bengal University of Technology",
    },
    {
      year: "2018 - 2020",
      title: "AWS Certified Developer: Associate",
      organization: "Amazon Web Services (AWS)",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Inline style for the timeline dot's ::before */}

      <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white text-black border-2 border-gray-300 rounded-full p-2 z-10">
          <GoMortarBoard />
        </div>

        <ul className="list-none m-0 p-0 relative">
          <div className="absolute top-0 left-1.5 h-full border-l-[1px] border-dashed border-gray-300"></div>

          {timelineData.map((item, index) => (
            <li key={index} className="flex items-start mb-6 relative pl-6">
              {/* custom-dot is a coustom css */}
              <div className="absolute top-1.5 left-[-3.5px] w-5 h-5 border-4 border-white bg-black rounded-full custom-dot"></div>

              <div className="absolute top-6 left-2 w-[1px] h-[calc(100%-20px)] border-dashed border-gray-300"></div>

              <div className="pl-4">
                <span className="inline-block text-sm text-gray-600 px-2 py-1 border border-dashed border-gray-300 rounded-md mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 my-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">@ {item.organization}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
