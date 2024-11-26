"use client";
import React, { useState } from "react";
import { Table, Button, Input } from "antd";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";

const ManageSkillsPage = () => {
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "React",
      level: "Advanced",
    },
    {
      id: 2,
      name: "Node.js",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "CSS",
      level: "Advanced",
    },
    {
      id: 4,
      name: "JavaScript",
      level: "Expert",
    },
  ]);

  // Add a new skill
  const addSkill = () => {
    const newSkill = {
      id: skills.length + 1,
      name: "New Skill",
      level: "Beginner",
    };
    setSkills([...skills, newSkill]);
  };

  // Delete a skill
  const deleteSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  // Filter skills based on search input
  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  // Define columns for Ant Design table
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1, // Display index
      align: "center", // Center align this column
    },
    {
      title: "Skill Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Proficiency Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Actions",
      key: "actions",
      align: "center", // Center align the actions column
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button
            type="link"
            className="text-blue-600 hover:text-blue-800"
            title="Edit"
          >
            <FaEdit />
          </Button>
          <Button
            type="link"
            className="text-red-600 hover:text-red-800"
            title="Delete"
            onClick={() => deleteSkill(record.id)}
          >
            <FaTrash />
          </Button>
        </div>
      ),
    },
  ];
  

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Page Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Manage Skills</h1>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          <FaPlusCircle />
          Add Skill
        </button>
      </header>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg"
        />
      </div>

      {/* Skills Table */}
      <Table
        columns={columns}
        dataSource={filteredSkills}
        rowKey="id"
        className="bg-white rounded-lg shadow-md"
        pagination={{
          position: ["bottomCenter"],
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default ManageSkillsPage;
