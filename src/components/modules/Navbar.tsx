import React, { useEffect, useState, useCallback } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { VscTools } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import { FaRegUser, FaRegPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {/* Top Navbar */}
      <motion.div
        className={`sticky top-0 z-50 p-5 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-transparent"
        } backdrop-blur-[10px] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-lg lg:hidden font-semibold tracking-[0.08em] cursor-pointer">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Khaled Ahmed
            </Link>
          </h2>
          <h2 className="hidden lg:block text-xl font-semibold tracking-[0.08em] cursor-pointer">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Khaled Ahmed Nayeem
            </Link>
          </h2>

          <ul className="hidden md:flex gap-8 text-lg">
            {[
              { label: "Home", to: "hero" },
              { label: "Skills", to: "skills" },
              { label: "Projects", to: "projects" },
              { label: "Blog", to: "blog" },
              { label: "About Me", to: "about_me" },
              { label: "Contact Me", to: "contact_me" },
            ].map(({ label, to }) => (
              <li
                key={to}
                className="group relative cursor-pointer transition text-gray-700 dark:text-gray-300 hover:text-gray-500"
              >
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-blue-500 transition font-semibold underline underline-offset-[3px] decoration-[1.5px]"
                  className="relative"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

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
      </motion.div>

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
