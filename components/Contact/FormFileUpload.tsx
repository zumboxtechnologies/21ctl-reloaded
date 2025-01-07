import React from "react";
import { SlCloudUpload } from "react-icons/sl";
interface FormFileUploadProps {
  label: string;
  name: string;
  register: (name: string) => any; // Adjust type if you have a more specific register function signature
}

const FormFileUpload: React.FC<FormFileUploadProps> = ({
  label,
  name,
  register,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="relative border-gray-300 rounded-md bg-gray-100  text-sm cursor-pointer shadow-sm hover:bg-gray-200 focus:ring-2 h-12 flex justify-between items-center focus:ring-yellow-500 group p-4">
        <input
          type="file"
          id={name}
          {...register(name)}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <label htmlFor={name} className=" ">
          Click here to upload content
        </label>
        <label htmlFor="" className="text-base">
          <SlCloudUpload size={15} />
        </label>
      </div>
    </div>
  );
};

export default FormFileUpload;
