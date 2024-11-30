"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaBlog,
  FaUserCircle,
  FaArrowCircleLeft,
} from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route path

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-gray-600">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center">
              <FaUserCircle size={48} />
            </div>
            <h2 className="mt-2 text-lg font-semibold">Khaled Ahmed</h2>
            <p className="text-gray-400 text-sm">Full-Stack Developer</p>

            {/* Go Back to Home Button */}
            <Link
              className="flex items-center gap-4 px-4 py-3 mt-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 rounded-lg"
              href="/"
            >
              <FaArrowCircleLeft size={20} /> Go Back to Home
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-4 p-2 space-y-2">
          <Link
            className={`flex items-center gap-4 px-4 py-3 hover:bg-gray-600 transition-all duration-200 rounded-lg ${
              pathname === "/dashboard" ? "bg-gray-600" : ""
            }`}
            href="/dashboard"
          >
            <FaHome size={20} /> Dashboard
          </Link>
          <Link
            className={`flex items-center gap-4 px-4 py-3 hover:bg-gray-600 transition-all duration-200 rounded-lg ${
              pathname === "/dashboard/projects" ? "bg-gray-600" : ""
            }`}
            href="/dashboard/projects"
          >
            <FaProjectDiagram size={20} /> Projects
          </Link>
          <Link
            className={`flex items-center gap-4 px-4 py-3 hover:bg-gray-600 transition-all duration-200 rounded-lg ${
              pathname === "/dashboard/skills" ? "bg-gray-600" : ""
            }`}
            href="/dashboard/skills"
          >
            <FaCode size={20} /> Skills
          </Link>
          <Link
            className={`flex items-center gap-4 px-4 py-3 hover:bg-gray-600 transition-all duration-200 rounded-lg ${
              pathname === "/dashboard/blogs" ? "bg-gray-600" : ""
            }`}
            href="/dashboard/blogs"
          >
            <FaBlog size={20} /> Blog
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            🚀 Welcome to the Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-3xl text-blue-600" />
            <span className="font-medium text-gray-700">Hello, Khaled!</span>
          </div>
        </header>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
}
