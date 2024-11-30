import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { GoDownload } from "react-icons/go";
import { IoEye } from "react-icons/io5";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      {/* Background */}
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" /> */}
      <div id="hero" className="relative max-w-7xl mx-auto">
        {/* Background */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" /> */}
        <div className="absolute top-0 left-0 h-full w-full bg-white z-[-10]">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <section
          style={{ height: "calc(100vh - 68px)" }}
          className="flex flex-col md:flex-row justify-center items-center py-12 px-6 space-y-12 md:space-y-0 h-screen"
        >
          {/* Left Section (Social Icons with Hover Text) */}
          <div className="absolute top-1/2 left-10 xl:left-4 transform -translate-y-1/2 md:flex flex-col items-center gap-4 md:gap-8 hidden">
            {[
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaLinkedin />, label: "LinkedIn" },
              { icon: <FaGithub />, label: "GitHub" },
              { icon: <LuPhone />, label: "Phone" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="relative group overflow-visible transition-all duration-300 transform hover:scale-110 hover:text-blue-500"
              >
                <a
                  href="#"
                  className="text-gray-600 text-3xl group-hover:text-black transition-all"
                >
                  {icon}
                </a>
                <span className="absolute left-8 bottom-2 text-gray-600 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all font-semibold font-jetBrains-Mono">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Center Section (Text Content) */}
          <div className="flex flex-col justify-center items-center text-center md:text-left gap-8 md:gap-8 md:w-1/2">
            <div className="space-y-3">
              <h1 className="text-4xl font-jetBrains-Mono font-bold text-gray-900">
                Hey! I&apos;m Khaled Ahmed
              </h1>
              <div className="w-full overflow-hidden text-left font-jetBrains-Mono">
                ----------
                <Typewriter
                  words={[
                    " Web Developer",
                    " Full Stack Developer",
                    " MERN STACK Developer",
                  ]}
                  cursor
                  loop={false}
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </div>
            </div>

            <p className="text-xl text-center text-gray-600 max-w-md mx-auto md:mx-0">
              {/* <p className="text-xl text-center text-gray-600 max-w-xl mx-auto md:mx-0"> */}
              I build web & mobile apps! I&apos;m a software developer based in
              Bangladesh, specializing in cutting-edge web and mobile
              technologies as well as pixel-perfect designs.
            </p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0], // Keyframes for the floating effect
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                y: {
                  duration: 2, // Duration of one float cycle
                  repeat: Infinity, // Infinite repetition
                  repeatType: "loop", // Loop back and forth
                  ease: "easeInOut", // Smooth easing
                },
                opacity: {
                  duration: 0.5, // Opacity animation duration
                },
              }}
              className="hidden absolute top-[35%] right-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white md:flex items-center gap-2 py-3 px-6 rounded-3xl shadow-2xl text-xl font-semibold font-neue-machina"
            >
              Say Hello
              <motion.span
                animate={{
                  rotate: [0, 8, -8, 8, -8, 0], // Tight rotation for the wave effect
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  transformOrigin: "bottom center", // Rotation point at the bottom
                }}
                className="inline-block"
              >
                <span className="h-10 w-110 text-3xl flex items-center justify-center">
                  👋
                </span>
              </motion.span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.5,
                },
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center gap-2 py-3 px-6 rounded-3xl shadow-2xl text-base sm:text-xl font-semibold md:hidden"
            >
              Say Hello
              <motion.span
                animate={{
                  rotate: [0, 8, -8, 8, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="inline-block"
              >
                <span className="text-3xl">👋</span>
              </motion.span>
            </motion.button>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center md:justify-start font-semibold">
              <div className="flex">
                {/* Resume Buttons */}
                <div className="flex gap-2 items-center text-purple-600 hover:text-white border border-purple-600 py-2 px-6 rounded-l-full hover:bg-purple-600 border-r-0 transition-all">
                  <GoDownload />
                  <Link href="#" className="text-sm sm:text-base">
                    GET RESUME
                  </Link>
                </div>

                <div className="flex gap-2 items-center text-purple-600 hover:text-white border border-purple-600 py-2 px-6 rounded-r-full hover:bg-purple-600 transition-all">
                  <IoEye />
                  <Link href="#" className="text-sm sm:text-base">
                    VIEW RESUME
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform -translate-y-1/2  flex items-center gap-4 md:gap-8 ">
              {[
                { icon: <FaInstagram /> },
                { icon: <FaLinkedin /> },
                { icon: <FaGithub /> },
                { icon: <LuPhone /> },
              ].map(({ icon }, index) => (
                <div
                  key={index}
                  className="relative group overflow-visible transition-all duration-300 transform hover:scale-110 hover:text-blue-500 md:hidden"
                >
                  <Link
                    href="#"
                    className="text-gray-600 text-3xl group-hover:text-black transition-all"
                  >
                    {icon}
                  </Link>
                </div>
              ))}
            </div>
            {/* Scroll Down Button */}
            {/* <button className="flex items-center gap-2 group"> */}
            <button className="flex items-center gap-2 group transform -translate-y-1/2">
              <div className="h-10 w-6 border-2 rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[2px] h-[12px] bg-blue-600 rounded-lg animate-bounce"></div>
                </div>
              </div>
              <span className="text-sm font-medium">Scroll Down</span>
              <AiOutlineArrowDown className="text-xl animate-bounce" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
