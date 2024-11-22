//This is if add any exprinece

// import React from "react";
// import { GoMortarBoard } from "react-icons/go";
// import { Typewriter } from "react-simple-typewriter";

// const AboutMe = () => {
//   const timelineData = [
//     {
//       year: "2018",
//       title: "JSC",
//       organization: "Shaheen Academy School And College, Feni",
//     },
//     {
//       year: "2021",
//       title: "SSC",
//       organization: "Shaheen Academy School And College, Feni",
//     },
//     {
//       year: "2022 - Running",
//       title: "Diploma in Computer Science And Technology 6th semester",
//       organization: "Feni Polytechnic Institute",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       {/* Header */}
//       {/* <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
//          About Me
//        </h2> */}
//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-extrabold text-gray-800">About Me</h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Discover who I am and my journey in education and development.
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Profile and Intro Section */}
//         <div className="lg:flex items-center justify-between space-x-8">
//           {/* Profile Image and Typewriter */}
//           <div className="relative lg:w-1/3 mb-8 lg:mb-0">
//             <img
//               src="https://i.ibb.co.com/PwJ6Ftf/1704652255283.jpg"
//               alt="Your Name"
//               className="w-60 h-60 object-cover rounded-full mx-auto shadow-lg border-4 border-gray-200"
//             />
//             <div className="absolute bottom-4 left-1/2  bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white font-mono font-normal text-sm uppercase tracking-wider shadow-lg whitespace-nowrap">
//               <div className="w-auto">
//                 <Typewriter
//                   words={["hi There", "I'm Khaled Ahmed"]}
//                   cursor
//                   loop={false}
//                   cursorStyle="_"
//                   typeSpeed={80}
//                   deleteSpeed={70}
//                   delaySpeed={1000}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div className="lg:w-2/3 text-center lg:text-left">
//             <h3 className="text-3xl font-bold text-gray-800 mb-4">
//               Hi, I'm Khaled Ahmed Nayeem
//             </h3>
//             <p className="text-lg text-gray-600 leading-relaxed mb-6">
//               I'm a passionate developer with experience in building responsive,
//               user-friendly, clean, and scalable applications. I specialize in
//               full-stack development, including front-end frameworks like React
//               and back-end technologies like Node.js and MongoDB. I also have a
//               keen interest in UI/UX design. I strive to continuously improve
//               and learn new things in the world of web development.
//             </p>
//           </div>
//         </div>

//         {/* Education Timeline */}
//         <div className="mt-12 flex justify-center">
//           <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
//             {/* <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white border-4 border-gray-100 rounded-full p-3 shadow-lg">
//             <GoMortarBoard size={24} />
//           </div> */}
//             {/* <div className="absolute flex gap-2 items-center justify-center top-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white border-4 border-gray-100 rounded-full p-3 shadow-lg">
//             <GoMortarBoard size={24} />
//             <h3>Education</h3>
//           </div> */}
//             <div className="absolute flex gap-2 items-center justify-center top-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white border-4 border-gray-100 rounded-full p-3 shadow-lg">
//               <GoMortarBoard size={24} />
//             </div>
//             <h3 className="text-center font-semibold text-xl mb-6">
//               Education Timeline
//             </h3>

//             <ul className="list-none m-0 p-0 relative">
//               <div className="absolute top-0 left-1.5 h-full border-l-[1px] border-dashed border-gray-300"></div>

//               {timelineData.map((item, index) => (
//                 <li key={index} className="flex items-start mb-6 relative pl-6">
//                   {/* custom-dot is a coustom css */}
//                   <div className="absolute top-1.5 left-[-3.5px] w-5 h-5 border-4 border-white bg-black rounded-full custom-dot"></div>

//                   <div className="absolute top-6 left-2 w-[1px] h-[calc(100%-20px)] border-dashed border-gray-300"></div>

//                   <div className="pl-4">
//                     <span className="inline-block text-sm text-gray-600 px-2 py-1 border border-dashed border-gray-300 rounded-md mb-2">
//                       {item.year}
//                     </span>
//                     <h3 className="text-lg font-semibold text-gray-800 my-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-gray-500">
//                       @ {item.organization}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

//This is witout exprience
import Image from "next/image";
import React from "react";
import { GoMortarBoard } from "react-icons/go";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  const timelineData = [
    {
      year: "2018",
      title: "JSC",
      organization: "Shaheen Academy School And College, Feni",
    },
    {
      year: "2021",
      title: "SSC",
      organization: "Shaheen Academy School And College, Feni",
    },
    {
      year: "2022 - Present",
      title: "Diploma in Computer Science and Technology",
      organization: "West Bengal University of Technology",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover who I am and my journey in education and development.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-16 px-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-3/5">
          {/* Profile Image and Typewriter */}
          <div className="relative mb-8">
            <Image
              width={500}
              height={500}
              src="https://i.ibb.co/PwJ6Ftf/1704652255283.jpg"
              alt="Your Name"
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg border-4 border-gray-200"
            />
            <div className="absolute bottom-4 left-1/2  bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white font-mono font-normal text-sm uppercase tracking-wider shadow-lg whitespace-nowrap">
              <div className="w-auto">
                <Typewriter
                  words={["hi There", "I'm Khaled Ahmed"]}
                  cursor
                  loop={false}
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </div>
            </div>
          </div>

          {/* <h3 className="text-2xl font-semibold text-gray-800"> */}
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            Hi, I&apos;m Khaled Ahmed Nayeem
          </h3>
          <p className="mt-4 text-gray-600 text-center lg:text-left leading-relaxed">
            I’m a passionate developer specializing in building responsive,
            user-friendly, and scalable applications. I focus on front-end
            frameworks like React and back-end technologies like Node.js and
            MongoDB. With a keen eye for UI/UX design, I’m always learning and
            improving in the exciting field of web development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="w-full lg:w-2/5 mt-12 lg:mt-0">
          <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
            {/* <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white border-4 border-gray-100 rounded-full p-3 shadow-lg">
            <GoMortarBoard size={24} />
          </div> */}
            {/* <div className="absolute flex gap-2 items-center justify-center top-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white border-4 border-gray-100 rounded-full p-3 shadow-lg">
            <GoMortarBoard size={24} />
            <h3>Education</h3>
          </div> */}
            <div className="absolute flex gap-2 items-center justify-center top-[-25px] left-1/2 transform -translate-x-1/2 bg-black text-white border-4 border-gray-100 rounded-full p-3 shadow-lg">
              <GoMortarBoard size={24} />
            </div>
            <h3 className="text-center font-semibold text-xl mb-6">
              Education Timeline
            </h3>

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
                    <p className="text-sm text-gray-500">
                      @ {item.organization}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
