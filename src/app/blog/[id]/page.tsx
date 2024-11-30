"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaUser } from "react-icons/fa"; // Import icons

const BlogDetails = () => {
  // Demo blog post data
  const blogPost = {
    title: "How to Create a Static Blog Page in React",
    date: "November 27, 2024",
    author: "John Doe",
    image: "https://i.ibb.co/RQ5jLyS/img3.jpg",
    content: [
      "This is a sample blog post that explains how to create a static blog details page in React. We will use demo data to render content dynamically in this page.",
      "The goal is to create a page that displays information like title, content, and author, and it's easy to update the demo data in one place for static content.",
      "You can further enhance this page by adding interactive components, fetching data from an API, or even making the content editable for the user.",
    ],
  };

  // State for like/dislike functionality
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Handlers for like/dislike buttons
  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-8">
      {/* Blog Title */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
        {blogPost.title}
      </h1>

      {/* Blog Meta Information */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>📅 Posted on {blogPost.date}</span>
        <span className="flex items-center">
          <FaUser className="mr-2 text-gray-600" />
          {blogPost.author}
        </span>
      </div>

      {/* Blog Image */}
      <Image
        height={500}
        width={500}
        src={blogPost.image}
        alt="Blog Image"
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        {blogPost.content.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Like/Dislike Buttons */}
      <div className="flex items-center space-x-6">
        <button
          onClick={handleLike}
          className="flex items-center bg-green-100 text-green-700 hover:bg-green-200 py-2 px-4 rounded-lg transition-colors shadow-md"
        >
          <FaThumbsUp className="mr-2" /> Like {likes}
        </button>
        <button
          onClick={handleDislike}
          className="flex items-center bg-red-100 text-red-700 hover:bg-red-200 py-2 px-4 rounded-lg transition-colors shadow-md"
        >
          <FaThumbsDown className="mr-2" /> Dislike {dislikes}
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
