import Link from "next/link";
import React from "react";
import { GoDownload } from "react-icons/go";
import { IoEye } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <section className="flex justify-center items-center py-12 px-6">
        <div className="max-w-7xl mx-auto text-center flex items-center space-x-8">
          <div className="flex flex-col items-center text-left max-w-md">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome! my name is
            </h1>
            <h2 className="text-5xl font-extrabold text-blue-700 mt-2">
              Khaled Ahmed Nayeem
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              I build web & mobile apps! I'm a software developer based in
              Bangladesh, specializing in cutting-edge web and mobile
              technologies as well as pixel-perfect designs.
            </p>
            <div className="flex mt-6">
              <div className="flex gap-2 items-center text-purple-600  hover:text-white border border-purple-600 py-2 px-6 rounded-l-full hover:bg-purple-600 border-r-0">
                <GoDownload />
                <Link href="#">GET RESUME</Link>
              </div>

              <div className="flex gap-2 items-center text-purple-600  hover:text-white border border-purple-600 py-2 px-6 rounded-r-full  hover:bg-purple-600">
                <IoEye />
                <Link href="#">VIEW RESUME</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

// import Link from "next/link";
// import React from "react";
// import { GoDownload } from "react-icons/go";
// import { IoEye } from "react-icons/io5";

// const ResumeButton = ({ icon, text, href, rounded }) => (
//   <div
//     className={`flex gap-2 items-center text-purple-600 hover:text-white border border-purple-600 py-2 px-6 ${rounded} hover:bg-purple-600`}
//   >
//     {icon}
//     <Link href={href} aria-label={text}>
//       {text}
//     </Link>
//   </div>
// );

// const Hero = () => {
//   return (
//     <section className="relative flex justify-center items-center py-12 px-6 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
//       <div className="max-w-7xl mx-auto text-center flex items-center space-x-8">
//         <div className="flex flex-col items-center text-left max-w-md">
//           <h1 className="text-4xl font-bold text-gray-900">Welcome! my name is</h1>
//           <h2 className="text-5xl font-extrabold text-blue-700 mt-2">
//             Khaled Ahmed Nayeem
//           </h2>
//           <p className="text-xl text-gray-600 mt-4">
//             I build web & mobile apps! I'm a software developer based in
//             Bangladesh, specializing in cutting-edge web and mobile
//             technologies as well as pixel-perfect designs.
//           </p>
//           <div className="flex mt-6">
//             <ResumeButton
//               icon={<GoDownload />}
//               text="GET RESUME"
//               href="#"
//               rounded="rounded-l-full border-r-0"
//             />
//             <ResumeButton
//               icon={<IoEye />}
//               text="VIEW RESUME"
//               href="#"
//               rounded="rounded-r-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
