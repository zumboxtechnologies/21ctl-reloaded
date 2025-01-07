import React from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface FormTextAreaProps {
  label: string;
  name: string;
  placeholder?: string; // Optional placeholder
  register: UseFormRegister<FieldValues>;
  validation?: Record<string, unknown>; // Validation rules
  error?: FieldError | any | unknown; // Error object from react-hook-form
}

export default function FormTextArea({
  label,
  name,
  placeholder,
  register,
  validation,
  error,
}: FormTextAreaProps) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <textarea
        {...register(name, validation)}
        rows={4}
        placeholder={placeholder}
        className={`w-full p-2 border rounded focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-yellow-500`}
      ></textarea>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
