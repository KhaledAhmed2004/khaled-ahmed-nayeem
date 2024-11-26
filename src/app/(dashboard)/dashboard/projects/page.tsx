"use client";
import React, { useState } from "react";
import { Space, Table, Image, Button, Modal, Input } from "antd";
import { FaEdit, FaPlusCircle, FaTrashAlt } from "react-icons/fa";

const Page = () => {
  // Example project data
  const [data, setData] = useState([
    {
      key: "1",
      name: "Website Redesign",
      image: "https://i.ibb.co.com/D8R0k86/img2.webp",
    },
    {
      key: "2",
      name: "Mobile App Development",
      image: "https://i.ibb.co.com/D8R0k86/img2.webp",
    },
    {
      key: "3",
      name: "API Integration",
      image: "https://i.ibb.co.com/D8R0k86/img2.webp",
    },
  ]);
  const [filteredData, setFilteredData] = useState(data); // For storing filtered data
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
  });

  const handleAddProject = () => {
    const newProjectData = {
      key: (data.length + 1).toString(),
      name: newProject.name,
      image: newProject.image,
    };
    const updatedData = [...data, newProjectData];
    setData(updatedData);
    setFilteredData(updatedData); // Update filtered data when a new project is added
    setIsModalVisible(false);
    setNewProject({ name: "", image: "" });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = (value: string) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "image",
      key: "image",
      render: (src) => <Image src={src} alt="Project Thumbnail" width={50} />,
    },
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space
          size="middle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <FaTrashAlt />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Project Management</h1>
        <p className="text-lg text-gray-600">
          Track and manage all your projects in one place
        </p>
      </header>

      {/* Add Project Button */}
      <div className="mb-4 text-right">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          <FaPlusCircle />
          Add Project
        </button>
      </div>

      {/* Search Field */}
      <div className="mb-4">
        <Input.Search
          placeholder="Search by project name"
          onSearch={handleSearch}
          enterButton
        />
      </div>

      {/* Project Table */}
      <Table columns={columns} dataSource={filteredData} />

      {/* Add Project Modal */}
      <Modal
        title="Add New Project"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="mb-4">
          <Input
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="mb-4"
          />
          <Input
            placeholder="Project Image URL"
            value={newProject.image}
            onChange={(e) =>
              setNewProject({ ...newProject, image: e.target.value })
            }
            className="mb-4"
          />
          <Button
            type="primary"
            onClick={handleAddProject}
            className="bg-green-500 text-white"
          >
            Add Project
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
