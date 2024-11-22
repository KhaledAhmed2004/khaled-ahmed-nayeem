import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex font-neue-machina justify-between sticky top-0 z-50 bg-transparent backdrop-blur-[10px] p-5">
      <h2
        className="text-xl font-semibold tracking-[0.08em]
      "
      >
        Khaled Ahmed Nayeem
      </h2>

      <ul className="flex gap-8 text-xl">
        <li>Home</li>
        <li>skills</li>
        <li>projects</li>
        <li>About Me</li>
        <li>Contact Me</li>
        {/* <li className="bg-gray-200 p-2 rounded-lg">View Resume</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
