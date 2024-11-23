import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mb-[50px] md:mb-0">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Copyright Information */}
        <p className="text-sm text-center sm:text-right">
          &copy; {currentYear} Khaled Ahmed Nayeem. All rights reserved.
        </p>
        {/* Additional Note */}
        {/* <p className="relative text-xs text-gray-400 text-center sm:text-right"> */}
        <p className="relative text-xs text-gray-400 left-[-35px] md:left-[-25px] sm:text-right">
          Crafted with ❤️ using{" "}
          <span className="absolute left-[120px] font-mono font-normal text-sm uppercase tracking-wider whitespace-nowrap">
            <Typewriter
              words={["Next.js", "Tailwind CSS"]}
              cursor
              loop={false}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
