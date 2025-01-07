import React from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import Polygon from "../Polygon";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string; // Defaults to "text"
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  validation?: Record<string, unknown>; // Validation rules
  error?: FieldError | any | unknown; // Error object from react-hook-form
}

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  validation,
  error,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block  font-semibold mb-2">{label}</label>
      <div className="relative">
        <input
          type={type}
          {...register(name, validation)}
          placeholder={placeholder}
          className={`w-full p-3 text-black rounded-md shadow-sm border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-yellow-500 focus:outline-none`}
        />
        {/* Decorative Polygon */}
        <Polygon className="absolute top-0 right-0 h-full w-8 bg-gray-100 pointer-events-none" />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
