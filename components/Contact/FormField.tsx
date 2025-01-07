import React from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import Polygon from "../Polygon";
import PolygonBox from "../security/PolygonBox";

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
    <div className="">
      <label className="block  font-semibold mb-2">{label}</label>
      <div className="bg-gray-100">
        <PolygonBox classname="h-6 w-6 bg-white" otherclasses="">
          <div className="relative">
            <input
              type={type}
              {...register(name, validation)}
              placeholder={placeholder}
              className={`w-full p-3 text-black bg-transparent rounded-md  border-none focus:ring-2 focus:ring-yellow-500 focus:outline-none`}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </PolygonBox>
      </div>
    </div>
  );
}
