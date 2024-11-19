import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between sticky top-0 z-50 bg-transparent backdrop-blur-[10px]">
      <h2 className="font-neue-machina text-2xl">Khaled Ahmed Nayeem</h2>
      <ul className="flex gap-5 text-2xl">
        <li>Home</li>
        <li>skills</li>
        <li>projects</li>
        <li>About Me</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
