"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Modal, Input, Button, message, Select } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// Define the interface for form data
interface SkillFormData {
  skillName: string;
  proficiencyLevel: string;
  description: string;
}

interface CreateSkillsProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateSkillsModal: React.FC<CreateSkillsProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillFormData>(); // Use the interface here for the form data

  const onSubmit: SubmitHandler<SkillFormData> = (data) => {
    console.log("Skill Data:", data);
    message.success("Skill added successfully!");
    reset(); // Reset form fields
    setModalIsOpen(false); // Close the modal
  };

  return (
    <Modal
      title="Add a New Skill"
      open={modalIsOpen}
      onCancel={() => setModalIsOpen(false)}
      footer={null}
      centered
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Skill Name Field */}
        <div>
          <label htmlFor="skillName" className="block font-medium mb-1">
            Skill Name
          </label>
          <Controller
            name="skillName"
            control={control}
            rules={{ required: "Skill name is required" }}
            render={({ field }) => (
              <Input
                id="skillName"
                placeholder="Enter skill name"
                {...field}
                className="w-full"
              />
            )}
          />
          {errors.skillName && (
            <p className="text-red-500 text-sm">
              {(errors.skillName as { message: string }).message}
            </p>
          )}
        </div>

        {/* Proficiency Level Field */}
        <div>
          <label htmlFor="proficiencyLevel" className="block font-medium mb-1">
            Proficiency Level
          </label>
          <Controller
            name="proficiencyLevel"
            control={control}
            rules={{ required: "Proficiency level is required" }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select proficiency level"
                options={[
                  { value: "beginner", label: "Beginner" },
                  { value: "intermediate", label: "Intermediate" },
                  { value: "expert", label: "Expert" },
                ]}
                className="w-full"
              />
            )}
          />
          {errors.proficiencyLevel && (
            <p className="text-red-500 text-sm">
              {(errors.proficiencyLevel as { message: string }).message}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <Input.TextArea
                id="description"
                rows={4}
                placeholder="Write a brief description of the skill..."
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

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" className="w-full">
          Add Skill
        </Button>
      </form>
    </Modal>
  );
};

export default CreateSkillsModal;
