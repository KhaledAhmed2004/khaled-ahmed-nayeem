import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { VscTools } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { FaRegPaperPlane } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`sticky top-0 z-50 p-5 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-transparent"
        } backdrop-blur-[10px]`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h2
            className="text-lg lg:hidden font-semibold tracking-[0.08em] cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            Khaled Ahmed
          </h2>
          <h2
            className="hidden lg:block text-xl font-semibold tracking-[0.08em] cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            Khaled Ahmed Nayeem
          </h2>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-lg">
            <li className="cursor-pointer hover:text-gray-500 transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition">
              Skills
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition">
              Projects
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition">
              About Me
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition">
              Contact Me
            </li>
          </ul>

          {/* Dark/Light Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="ml-4 text-2xl text-black dark:text-white transition-colors duration-300 hover:scale-110"
            whileHover={{ rotate: 20 }}
            whileTap={{ rotate: -20 }}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className={`fixed bottom-0 w-full z-50 bg-gray-100 rounded-t-3xl dark:bg-gray-800 text-black dark:text-white md:hidden`}
      >
        <div className="flex justify-around items-center py-3">
          {[
            { icon: <GoHome className="text-xl" />, label: "Home" },
            { icon: <VscTools className="text-xl" />, label: "Skills" },
            { icon: <CgWebsite className="text-xl" />, label: "Projects" },
            { icon: <FaRegUser className="text-xl" />, label: "About" },
            { icon: <FaRegPaperPlane className="text-xl" />, label: "Contact" },
          ].map(({ icon, label }, index) => (
            <motion.button
              key={index}
              className="flex flex-col items-center"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {icon}
              <span className="text-sm">{label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
