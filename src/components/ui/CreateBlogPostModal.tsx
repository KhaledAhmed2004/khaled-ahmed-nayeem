"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Modal, Input, Button, message } from "antd"; // Use Ant Design's Modal
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// Define the type for the form data
interface BlogPostData {
  title: string;
  content: string;
  tags: string;
}

interface CreateBlogPostProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateBlogPostModal: React.FC<CreateBlogPostProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  // Initialize useForm with BlogPostData type
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogPostData>();

  // Handle form submission
  const onSubmit: SubmitHandler<BlogPostData> = (data) => {
    console.log("Blog Post Data:", data);
    message.success("Blog post created successfully!");
    reset(); // Reset form fields
    setModalIsOpen(false); // Close the modal
  };

  return (
    <Modal
      title="Create a Blog Post"
      open={modalIsOpen}
      onCancel={() => setModalIsOpen(false)}
      footer={null}
      centered
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <Input
                id="title"
                placeholder="Enter blog title"
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">
              {(errors.title as { message: string }).message}
            </p>
          )}
        </div>

        {/* Content Field */}
        <div>
          <label htmlFor="content" className="block font-medium mb-1">
            Content
          </label>
          <Controller
            name="content"
            control={control}
            rules={{ required: "Content is required" }}
            render={({ field }) => (
              <Input.TextArea
                id="content"
                rows={6}
                placeholder="Write your blog content here..."
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">
              {(errors.content as { message: string }).message}
            </p>
          )}
        </div>

        {/* Tags Field */}
        <div>
          <label htmlFor="tags" className="block font-medium mb-1">
            Tags
          </label>
          <Controller
            name="tags"
            control={control}
            rules={{
              required: "Tags are required",
              validate: (value) =>
                value.split(",").length > 0 || "Provide at least one tag",
            }}
            render={({ field }) => (
              <Input
                id="tags"
                placeholder="Enter tags, separated by commas"
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.tags && (
            <p className="text-red-500 text-sm">
              {(errors.tags as { message: string }).message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" className="w-full">
          Submit Blog Post
        </Button>
      </form>
    </Modal>
  );
};

export default CreateBlogPostModal;
