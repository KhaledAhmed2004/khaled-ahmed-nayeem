"use client";
import React, { useState } from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons

const BlogManagement = () => {
  // Sample blog data with images
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "React Basics",
      author: "John Doe",
      date: "2024-01-01",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 2,
      title: "Tailwind Tips",
      author: "Jane Smith",
      date: "2024-02-15",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 3,
      title: "JavaScript Mastery",
      author: "Alice Johnson",
      date: "2024-03-10",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    image: "",
  });

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    alert("Blog deleted!");
  };

  const handleUpdate = (id: number) => {
    alert(`Update functionality for blog ID: ${id}`);
  };

  const handleView = (id: number) => {
    alert(`View functionality for blog ID: ${id}`);
  };

  const handleAddBlog = () => {
    const newBlogData = {
      ...newBlog,
      id: blogs.length + 1,
      date: new Date().toLocaleDateString(),
    };
    setBlogs([...blogs, newBlogData]);
    setIsFormOpen(false);
    setNewBlog({ title: "", author: "", date: "", image: "" });
    alert("New blog added!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Blog Management</h1>

      {/* Add New Blog Button */}
      <div className="mb-4 text-right">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsFormOpen(true)}
        >
          Add New Blog
        </button>
      </div>

      {/* Add New Blog Form */}
      {isFormOpen && (
        <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Author"
              value={newBlog.author}
              onChange={(e) =>
                setNewBlog({ ...newBlog, author: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Image URL"
              value={newBlog.image}
              onChange={(e) =>
                setNewBlog({ ...newBlog, image: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              onClick={handleAddBlog}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Add Blog
            </button>
            <button
              onClick={() => setIsFormOpen(false)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Blog Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Author</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <tr key={blog.id} className="border-t hover:bg-gray-100">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{blog.title}</td>
                  <td className="py-3 px-4">{blog.author}</td>
                  <td className="py-3 px-4">{blog.date}</td>
                  <td className="py-3 px-4 flex space-x-3">
                    {/* Action Icons */}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleView(blog.id)}
                      title="View Blog"
                    >
                      <FaEye size={18} />
                    </button>
                    <button
                      className="text-yellow-500 hover:text-yellow-700"
                      onClick={() => handleUpdate(blog.id)}
                      title="Update Blog"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(blog.id)}
                      title="Delete Blog"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-3 px-4 text-center text-gray-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManagement;
