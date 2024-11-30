// "use client";
// import React from "react";
// import { Table, Space, Button, Popconfirm, Tooltip, Tag, Image } from "antd"; // Import Ant Design components
// import { FaEdit, FaTimes, FaPlus, FaEye } from "react-icons/fa";

// interface Blog {
//   key: string;
//   title: string;
//   category: string;
//   status: string;
//   date: string;
//   image: string;
// }

// const BlogManagementTable: React.FC = () => {
//   const columns = [
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//       render: (text: string, record: Blog) => (
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
//       title: "Category",
//       dataIndex: "category",
//       key: "category",
//       render: (category: string) => <Tag color="blue">{category}</Tag>,
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: string) => (
//         <Tag
//           color={
//             status === "Published"
//               ? "green"
//               : status === "Draft"
//               ? "orange"
//               : "red"
//           }
//         >
//           {status}
//         </Tag>
//       ),
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_: unknown, record: Blog) => (
//         <Space size="middle">
//           <Tooltip title="View Blog">
//             <Button
//               type="link"
//               icon={<FaEye />}
//               onClick={() => handleView(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Edit Blog">
//             <Button
//               type="link"
//               icon={<FaEdit />}
//               onClick={() => handleEdit(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Delete Blog">
//             <Popconfirm
//               title="Are you sure you want to delete this blog?"
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

//   const data: Blog[] = [
//     {
//       key: "1",
//       title: "Mastering React",
//       category: "Frontend Development",
//       status: "Published",
//       date: "2024-11-20",
//       image: "https://i.ibb.co/jf4XKCz/img1.jpg",
//     },
//     {
//       key: "2",
//       title: "Node.js Best Practices",
//       category: "Backend Development",
//       status: "Draft",
//       date: "2024-11-18",
//       image: "https://i.ibb.co/jf4XKCz/img1.jpg",
//     },
//     {
//       key: "3",
//       title: "CSS in 2024",
//       category: "Design",
//       status: "Published",
//       date: "2024-11-15",
//       image: "https://i.ibb.co/jf4XKCz/img1.jpg",
//     },
//   ];

//   const handleView = (record: Blog) => {
//     console.log("View blog:", record);
//   };

//   const handleEdit = (record: Blog) => {
//     console.log("Edit blog:", record);
//   };

//   const handleDelete = (record: Blog) => {
//     console.log("Delete blog:", record);
//   };

//   const handleAddBlog = () => {
//     console.log("Add new blog");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* <h1 className="text-2xl font-bold text-center mb-6"> */}
//       <h1 className="text-4xl font-extrabold text-center  mb-6 text-gray-800">
//         Blog Management
//       </h1>
//       <div className="flex justify-end mb-4">
//         <Button
//           type="primary"
//           icon={<FaPlus />}
//           onClick={handleAddBlog}
//           className="flex items-center"
//         >
//           Add Blog
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

// export default BlogManagementTable;

"use client";
import React, { useState } from "react";
import { Table, Space, Button, Popconfirm, Tooltip, Tag, Image } from "antd"; // Import Ant Design components
import { FaEdit, FaTimes, FaPlus, FaEye } from "react-icons/fa";
import CreateBlogPostModal from "@/components/ui/CreateBlogPostModal";

interface Blog {
  key: string;
  title: string;
  category: string;
  status: string;
  date: string;
  image: string;
}

const BlogManagementTable: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: Blog) => (
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
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={
            status === "Published"
              ? "green"
              : status === "Draft"
              ? "orange"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Blog) => (
        <Space size="middle">
          <Tooltip title="View Blog">
            <Button
              type="link"
              icon={<FaEye />}
              onClick={() => handleView(record)}
            />
          </Tooltip>
          <Tooltip title="Edit Blog">
            <Button
              type="link"
              icon={<FaEdit />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Delete Blog">
            <Popconfirm
              title="Are you sure you want to delete this blog?"
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

  const data: Blog[] = [
    {
      key: "1",
      title: "Mastering React",
      category: "Frontend Development",
      status: "Published",
      date: "2024-11-20",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
    },
    {
      key: "2",
      title: "Node.js Best Practices",
      category: "Backend Development",
      status: "Draft",
      date: "2024-11-18",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
    },
    {
      key: "3",
      title: "CSS in 2024",
      category: "Design",
      status: "Published",
      date: "2024-11-15",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
    },
  ];

  const handleView = (record: Blog) => {
    console.log("View blog:", record);
  };

  const handleEdit = (record: Blog) => {
    console.log("Edit blog:", record);
  };

  const handleDelete = (record: Blog) => {
    console.log("Delete blog:", record);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold text-center mb-6"> */}
      <h1 className="text-4xl font-extrabold text-center  mb-6 text-gray-800">
        Blog Management
      </h1>
      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          icon={<FaPlus />}
          onClick={() => setModalIsOpen(true)}
          className="flex items-center"
        >
          Add Blog
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        rowKey="key"
      />
      <CreateBlogPostModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
};

export default BlogManagementTable;
