"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Modal, Input, Button, message } from "antd"; // Use Ant Design's Modal
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface CreateProjectProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Define the type for the form data
interface ProjectFormData {
  projectName: string;
  description: string;
  technologies: string;
  projectUrl: string;
}

const CreateProjectModal: React.FC<CreateProjectProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormData>();

  const onSubmit: SubmitHandler<ProjectFormData> = (data) => {
    console.log("Project Data:", data);
    message.success("Project added successfully!");
    reset(); // Reset form fields
    setModalIsOpen(false); // Close the modal
  };

  return (
    <Modal
      title="Add a New Project"
      open={modalIsOpen}
      onCancel={() => setModalIsOpen(false)}
      footer={null}
      centered
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Project Name Field */}
        <div>
          <label htmlFor="projectName" className="block font-medium mb-1">
            Project Name
          </label>
          <Controller
            name="projectName"
            control={control}
            defaultValue=""
            rules={{
              required: "Project name is required",
            }}
            render={({ field }) => (
              <Input
                id="projectName"
                placeholder="Enter project name"
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.projectName && (
            <p className="text-red-500 text-sm">
              {(errors.projectName as { message: string }).message}
            </p>
          )}
        </div>

        {/* Project Description Field */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{
              required: "Description is required",
            }}
            render={({ field }) => (
              <Input.TextArea
                id="description"
                rows={4}
                placeholder="Write a brief description of the project..."
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">
              {(errors.description as { message: string }).message}
            </p>
          )}
        </div>

        {/* Technologies Used Field */}
        <div>
          <label htmlFor="technologies" className="block font-medium mb-1">
            Technologies Used
          </label>
          <Controller
            name="technologies"
            control={control}
            defaultValue=""
            rules={{
              required: "Technologies are required",
              validate: (value) =>
                value.split(",").length > 0 ||
                "Provide at least one technology",
            }}
            render={({ field }) => (
              <Input
                id="technologies"
                placeholder="Enter technologies used (comma separated)"
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.technologies && (
            <p className="text-red-500 text-sm">
              {(errors.technologies as { message: string }).message}
            </p>
          )}
        </div>

        {/* Project URL Field */}
        <div>
          <label htmlFor="projectUrl" className="block font-medium mb-1">
            Project URL
          </label>
          <Controller
            name="projectUrl"
            control={control}
            defaultValue=""
            rules={{
              required: "Project URL is required",
            }}
            render={({ field }) => (
              <Input
                id="projectUrl"
                placeholder="Enter project URL or repository link"
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.projectUrl && (
            <p className="text-red-500 text-sm">
              {(errors.projectUrl as { message: string }).message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" className="w-full">
          Add Project
        </Button>
      </form>
    </Modal>
  );
};

export default CreateProjectModal;
