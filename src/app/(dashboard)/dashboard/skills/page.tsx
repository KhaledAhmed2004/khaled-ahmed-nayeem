// "use client";
// import React from "react";
// import { Table, Space, Button, Popconfirm, Tooltip, Tag } from "antd"; // Import Ant Design components
// import { FaEdit, FaTimes, FaPlus } from "react-icons/fa";

// interface Skill {
//   key: string;
//   skillName: string;
//   proficiency: string;
//   category: string;
// }

// const SkillManagementTable: React.FC = () => {
//   const columns = [
//     {
//       title: "Skill Name",
//       dataIndex: "skillName",
//       key: "skillName",
//       render: (text: string) => <span className="font-semibold">{text}</span>,
//     },
//     {
//       title: "Proficiency",
//       dataIndex: "proficiency",
//       key: "proficiency",
//       render: (proficiency: string) => (
//         <Tag
//           color={
//             proficiency === "Expert"
//               ? "green"
//               : proficiency === "Intermediate"
//               ? "blue"
//               : "red"
//           }
//         >
//           {proficiency}
//         </Tag>
//       ),
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//       key: "category",
//       render: (category: string) => <span>{category}</span>,
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_: unknown, record: Skill) => (
//         <Space size="middle">
//           <Tooltip title="Edit Skill">
//             <Button
//               type="link"
//               icon={<FaEdit />}
//               onClick={() => handleEdit(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Delete Skill">
//             <Popconfirm
//               title="Are you sure you want to delete this skill?"
//               onConfirm={() => handleDelete(record)}
//               okText="Yes"
//               cancelText="No"
//             >
//               <Button type="link" icon={<FaTimes />} danger />
//             </Popconfirm>
//           </Tooltip>
//         </Space>
//       ),
//     },
//   ];

//   const data: Skill[] = [
//     {
//       key: "1",
//       skillName: "React",
//       proficiency: "Expert",
//       category: "Frontend Development",
//     },
//     {
//       key: "2",
//       skillName: "Node.js",
//       proficiency: "Intermediate",
//       category: "Backend Development",
//     },
//     {
//       key: "3",
//       skillName: "Python",
//       proficiency: "Beginner",
//       category: "Data Analysis",
//     },
//   ];

//   const handleEdit = (record: Skill) => {
//     console.log("Edit skill:", record);
//   };

//   const handleDelete = (record: Skill) => {
//     console.log("Delete skill:", record);
//   };

//   const handleAddSkill = () => {
//     console.log("Add new skill");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* <h1 className="text-2xl font-bold text-center mb-6"> */}
//       <h1 className="text-4xl font-extrabold text-center  mb-6 text-gray-800">
//         Skills Management
//       </h1>
//       <div className="flex justify-end mb-4">
//         <Button
//           type="primary"
//           icon={<FaPlus />}
//           onClick={handleAddSkill}
//           className="flex items-center"
//         >
//           Add Skill
//         </Button>
//       </div>
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={{ pageSize: 5 }}
//         rowKey="key"
//       />
//     </div>
//   );
// };

// export default SkillManagementTable;

"use client";
import React, { useState } from "react";
import { Table, Space, Button, Popconfirm, Tooltip, Tag } from "antd"; // Import Ant Design components
import { FaEdit, FaTimes, FaPlus } from "react-icons/fa";
import CreateSkillsModal from "@/components/ui/modal/CreateSkillsModal";

interface Skill {
  key: string;
  skillName: string;
  proficiency: string;
  category: string;
}

const SkillManagementTable: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const columns = [
    {
      title: "Skill Name",
      dataIndex: "skillName",
      key: "skillName",
      render: (text: string) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Proficiency",
      dataIndex: "proficiency",
      key: "proficiency",
      render: (proficiency: string) => (
        <Tag
          color={
            proficiency === "Expert"
              ? "green"
              : proficiency === "Intermediate"
              ? "blue"
              : "red"
          }
        >
          {proficiency}
        </Tag>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => <span>{category}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Skill) => (
        <Space size="middle">
          <Tooltip title="Edit Skill">
            <Button
              type="link"
              icon={<FaEdit />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Delete Skill">
            <Popconfirm
              title="Are you sure you want to delete this skill?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" icon={<FaTimes />} danger />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data: Skill[] = [
    {
      key: "1",
      skillName: "React",
      proficiency: "Expert",
      category: "Frontend Development",
    },
    {
      key: "2",
      skillName: "Node.js",
      proficiency: "Intermediate",
      category: "Backend Development",
    },
    {
      key: "3",
      skillName: "Python",
      proficiency: "Beginner",
      category: "Data Analysis",
    },
  ];

  const handleEdit = (record: Skill) => {
    console.log("Edit skill:", record);
  };

  const handleDelete = (record: Skill) => {
    console.log("Delete skill:", record);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold text-center mb-6"> */}
      <h1 className="text-4xl font-extrabold text-center  mb-6 text-gray-800">
        Skills Management
      </h1>
      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          icon={<FaPlus />}
          onClick={() => setModalIsOpen(true)}
          className="flex items-center"
        >
          Add Skill
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        rowKey="key"
      />
      <CreateSkillsModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
};

export default SkillManagementTable;
