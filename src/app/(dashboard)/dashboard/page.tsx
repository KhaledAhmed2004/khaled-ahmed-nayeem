import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaNode,
} from "react-icons/fa";

const DashboardPage = () => {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">
          Manage your portfolio, track your progress, and stay up to date.
        </p>
      </header>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            🔥 Recent Projects
          </h2>
          <p className="text-sm text-gray-500">Showcase of your latest work.</p>
          <ul className="mt-4">
            <li className="border-b p-2 hover:bg-gray-100 hover:rounded-t-lg">
              <h3 className="text-lg font-medium text-gray-800">
                Project Alpha
              </h3>
              <p className="text-sm text-gray-600">
                A full-stack web application for task management.
              </p>
              <p className="text-xs text-gray-500">Completed • HTML, CSS</p>
            </li>
            <li className="border-b p-2 hover:bg-gray-100">
              <h3 className="text-lg font-medium text-gray-800">UI Revamp</h3>
              <p className="text-sm text-gray-600">
                Redesigned the user interface for an e-commerce app.
              </p>
              <p className="text-xs text-gray-500">Completed • HTML, CSS</p>
            </li>
          </ul>
        </section>
        {/* Portfolio Analytics */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 shadow-lg rounded-lg text-white">
          <h2 className="text-xl font-semibold">📊 Portfolio Analytics</h2>
          <p className="text-sm">See how your portfolio is performing.</p>
          <div className="mt-4 space-y-2">
            <p className="text-sm">
              <strong>Projects Viewed:</strong> 230
            </p>
            <p className="text-sm">
              <strong>Likes:</strong> 78
            </p>
            <p className="text-sm">
              <strong>Comments:</strong> 15
            </p>
          </div>
        </section>
        {/* Skills */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            🛠️ Skills & Technologies
          </h2>

          <p className="text-sm text-gray-500">
            Skills you`&apos;ve mastered and are working on.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <FaReact className="text-blue-500" />
              <p className="text-sm text-gray-700">React</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCss3Alt className="text-yellow-500" />
              <p className="text-sm text-gray-700">Tailwind CSS</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaNodeJs className="text-purple-500" />
              <p className="text-sm text-gray-700">Node.js</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaDatabase className="text-red-500" />
              <p className="text-sm text-gray-700">MongoDB</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaJsSquare className="text-green-500" />
              <p className="text-sm text-gray-700">JavaScript</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaNode className="text-indigo-500" />
              <p className="text-sm text-gray-700">Express.js</p>
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            ✍️ Latest Blogs
          </h2>
          <p className="text-sm text-gray-500">
            Your most recent articles and blog posts.
          </p>
          <ul className="mt-4">
            <li className="border-b hover:bg-gray-100 p-2 hover:rounded-t-lg">
              <h3 className="text-lg font-medium text-gray-800">
                Why React is the Future
              </h3>
              <p className="text-xs text-gray-500">Published on Nov 1, 2024</p>
              <p className="text-sm text-gray-600">
                Insights on why React dominates modern web development.
              </p>
              <button className="text-sm text-blue-600 underline">
                Read More
              </button>
            </li>
            <li className="border-b p-2 hover:bg-gray-100">
              <h3 className="text-lg font-medium text-gray-800">
                Getting Started with Node.js
              </h3>
              <p className="text-xs text-gray-500">Published on Nov 1, 2024</p>
              <p className="text-sm text-gray-600">
                A beginner`&apos;s guide to building scalable applications with
                Node.js.
              </p>
              <button className="text-sm text-blue-600 underline">
                Read More
              </button>
            </li>
          </ul>
        </section>
        {/* Goals Section */}
        <section className="bg-gradient-to-r from-green-500 to-teal-600 p-6 shadow-lg rounded-lg text-white">
          <h2 className="text-xl font-semibold">🎯 Goals for This Month</h2>
          <p className="text-sm">
            Track your personal and professional milestones.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-sm">
              <span className="mr-2">✅</span> Complete Portfolio Redesign
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">✅</span> Publish 2 New Blogs
            </li>
            <li className="flex items-center text-sm">
              <span className="mr-2">⏳</span> Learn TypeScript
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
