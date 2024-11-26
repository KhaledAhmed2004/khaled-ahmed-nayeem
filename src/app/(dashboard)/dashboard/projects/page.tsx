"use client";
import React from "react";
import { Space, Table,  Image } from "antd";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Page = () => {
  // Example project data
  const data = [
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
  ];

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
        <Space size="middle">
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
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Project Management</h1>
        <p className="text-lg text-gray-600">
          Track and manage all your projects in one place
        </p>
      </header>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Page;
