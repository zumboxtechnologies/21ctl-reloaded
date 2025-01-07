import React, { useState } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface Option {
  value: string | number; // Options can have string or number values
  label: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  options: Option[];
  validation?: Record<string, unknown>; // Validation rules
  error?: FieldError | undefined | any; // Error object from react-hook-form
}

export default function FormSelect({
  label,
  name,
  register,
  options,
  validation,
  error,
}: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false); // Toggle for showing all options
  const [selected, setSelected] = useState<string | number | null>(null); // Selected value

  const handleSelect = (value: string | number) => {
    setSelected(value);
    setIsOpen(false); // Close after selection
  };

  return (
    <div className={`mb-8 ${isOpen ? "h-auto" : "h-16"} transition-all`}>
      <label className="block font-semibold mb-2">{label}</label>
      <div
        className={`w-full p-3 rounded-md border shadow-sm bg-white text-gray-700 cursor-pointer ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-yellow-500`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-center">
          <span>
            {selected
              ? options.find((opt) => opt.value === selected)?.label
              : "Select an option"}
          </span>
          <span className="text-gray-500">
            {isOpen ? "▲" : "▼"} {/* Text-based arrow */}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 ">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="p-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      {/* Hidden input to integrate with react-hook-form */}
      <input
        type="hidden"
        value={selected || ""}
        {...register(name, validation)}
      />
    </div>
  );
}
