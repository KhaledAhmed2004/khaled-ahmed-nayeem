// "use client";
// import React from "react";
// import { Table, Space, Button, Popconfirm, Tooltip, Image } from "antd"; // Import Ant Design components
// import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";

// interface Project {
//   key: string;
//   projectName: string;
//   status: string;
//   deadline: string;
//   image: string;
// }

// const ProjectManagementTable: React.FC = () => {
//   const columns = [
//     {
//       title: "Project Name",
//       dataIndex: "projectName",
//       key: "projectName",
//       render: (text: string, record: Project) => (
//         <div className="flex items-center gap-2">
//           <Image
//             src={record.image}
//             alt={text}
//             width={60}
//             height={40}
//             className="rounded-xl mr-3 shadow-lg"
//             preview={{ mask: "Preview" }}
//           />
//           <span className="font-semibold">{text}</span>
//         </div>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => (
//         <span
//           className={`font-medium ${
//             status === "In Progress" ? "text-green-600" : "text-red-500"
//           }`}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: "Deadline",
//       dataIndex: "deadline",
//       key: "deadline",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_: unknown, record: Project) => (
//         <Space size="middle">
//           <Tooltip title="Edit Project">
//             <Button
//               type="link"
//               icon={<FaEdit />}
//               onClick={() => handleEdit(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Reject Project">
//             <Popconfirm
//               title="Are you sure you want to reject this project?"
//               onConfirm={() => handleReject(record)}
//               okText="Yes"
//               cancelText="No"
//             >
//               <Button type="link" icon={<FaTimes />} danger />
//             </Popconfirm>
//           </Tooltip>
//           <Tooltip title="Approve Project">
//             <Button
//               type="link"
//               icon={<FaCheck />}
//               onClick={() => handleApprove(record)}
//             />
//           </Tooltip>
//         </Space>
//       ),
//     },
//   ];

//   const data: Project[] = [
//     {
//       key: "1",
//       projectName: "Project Alpha",
//       status: "In Progress",
//       deadline: "2024-12-31",
//       image: "https://i.ibb.co/jf4XKCz/img1.jpg",
//     },
//     {
//       key: "2",
//       projectName: "Project Beta",
//       status: "Not Started",
//       deadline: "2025-01-15",
//       image: "https://i.ibb.co/jf4XKCz/img1.jpg",
//     },
//   ];

//   const handleEdit = (record: Project) => {
//     console.log("Edit project:", record);
//   };

//   const handleApprove = (record: Project) => {
//     console.log("Approve project:", record);
//   };

//   const handleReject = (record: Project) => {
//     console.log("Reject project:", record);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* <h1 className="text-2xl font-bold text-center mb-6"> */}
//       <h1 className="text-4xl font-extrabold text-center  mb-6 text-gray-800">
//         Project Management
//       </h1>
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={false}
//         rowKey="key"
//       />
//     </div>
//   );
// };

// export default ProjectManagementTable;

"use client";
import React, { useState } from "react";
import { Table, Space, Button, Popconfirm, Tooltip, Image } from "antd"; // Import Ant Design components
import { FaCheck, FaTimes, FaEdit, FaPlus } from "react-icons/fa";
import CreateProjectModal from "@/components/ui/modal/CreateProjectModal";

interface Project {
  key: string;
  projectName: string;
  status: string;
  deadline: string;
  image: string;
}

const ProjectManagementTable: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const columns = [
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text: string, record: Project) => (
        <div className="flex items-center gap-2">
          <Image
            src={record.image}
            alt={text}
            width={60}
            height={40}
            className="rounded-xl mr-3 shadow-lg"
            preview={{ mask: "Preview" }}
          />
          <span className="font-semibold">{text}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`font-medium ${
            status === "In Progress" ? "text-green-600" : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Project) => (
        <Space size="middle">
          <Tooltip title="Edit Project">
            <Button
              type="link"
              icon={<FaEdit />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Reject Project">
            <Popconfirm
              title="Are you sure you want to reject this project?"
              onConfirm={() => handleReject(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" icon={<FaTimes />} danger />
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Approve Project">
            <Button
              type="link"
              icon={<FaCheck />}
              onClick={() => handleApprove(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data: Project[] = [
    {
      key: "1",
      projectName: "Project Alpha",
      status: "In Progress",
      deadline: "2024-12-31",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
    },
    {
      key: "2",
      projectName: "Project Beta",
      status: "Not Started",
      deadline: "2025-01-15",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
    },
  ];

  const handleEdit = (record: Project) => {
    console.log("Edit project:", record);
  };

  const handleApprove = (record: Project) => {
    console.log("Approve project:", record);
  };

  const handleReject = (record: Project) => {
    console.log("Reject project:", record);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold text-center mb-6"> */}
      <h1 className="text-4xl font-extrabold text-center  mb-6 text-gray-800">
        Project Management
      </h1>
      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          icon={<FaPlus />}
          onClick={() => setModalIsOpen(true)}
          className="flex items-center"
        >
          Add Project
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
      />
      <CreateProjectModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
};

export default ProjectManagementTable;
