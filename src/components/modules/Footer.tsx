import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Main Heading */}
        <h2 className="text-2xl font-bold text-right">Designed & Developed</h2>
        {/* Copyright Information */}
        <p className="text-sm text-right">
          &copy; {currentYear} Khaled Ahmed Nayeem. All rights reserved.
        </p>
        {/* Additional Note */}
        <p className="text-xs text-gray-400 text-right">
          Crafted with ❤️ using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
