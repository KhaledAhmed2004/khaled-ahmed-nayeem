"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import { GoShieldLock } from "react-icons/go";

interface IFormInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // const onSubmit: SubmitHandler<IFormInput> = (data) => {};

  return (
    <section className="flex items-center justify-center min-h-screen py-8 lg:py-10 bg-white">
      <div className="w-full max-w-md p-8 shadow-xl rounded-2xl bg-white bg-opacity-95 border border-gray-200 relative">
        {/* Admin Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg absolute -top-8 left-1/2 transform -translate-x-1/2">
          <GoShieldLock className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-center my-4 text-gray-800">
          Admin Login
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Please sign in to access your dashboard 😎
        </p>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                *{errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-3 transition duration-200"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                *{errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button className="w-full py-2 px-4 text-lg font-semibold text-white transition duration-200 rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 shadow-lg transform">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
