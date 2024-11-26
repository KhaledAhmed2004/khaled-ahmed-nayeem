"use client";
import React, { useState } from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons
import { Table, Button, Input } from "antd"; // Import Ant Design components

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

  // Columns for the Ant Design Table
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1, // Display index as serial number
      align: "center", // Center align
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image} alt="blog" className="w-16 h-16 object-cover rounded" />,
      align: "center", // Center align
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex justify-center space-x-2">
          <Button
            icon={<FaEye />}
            onClick={() => handleView(record.id)}
            type="link"
            title="View Blog"
          />
          <Button
            icon={<FaEdit />}
            onClick={() => handleUpdate(record.id)}
            type="link"
            title="Update Blog"
          />
          <Button
            icon={<FaTrashAlt />}
            onClick={() => handleDelete(record.id)}
            type="link"
            danger
            title="Delete Blog"
          />
        </div>
      ),
      align: "center", // Center align
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Blog Management</h1>

      {/* Add New Blog Button */}
      <div className="mb-4 text-right">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsFormOpen(true)}
        >
          Add New Blog
        </Button>
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
            <Button
              onClick={handleAddBlog}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Add Blog
            </Button>
            <Button
              onClick={() => setIsFormOpen(false)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={filteredBlogs}
        rowKey="id"
        pagination={false} // Disable pagination for now
        className="overflow-x-auto"
      />
    </div>
  );
};

export default BlogManagement;
