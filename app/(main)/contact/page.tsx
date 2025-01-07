"use client";
import React from "react";
import { useForm } from "react-hook-form";
import ContactInfo from "@/components/Contact/ContactInfo";
import FormFileUpload from "../../../components/Contact/FormFileUpload";
import FormTextArea from "../../../components/Contact/FormTextArea";
import FormSelect from "../../../components/Contact/FormSelect";
import FormField from "../../../components/Contact/FormField";
import Polygon from "@/components/Polygon";
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" mt-[150px] min-h-screen flex items-center justify-center">
      <div className=" w-full p-8">
        <div className="text-center mb-10 ">
          <div className="basis-[50%]  space-y-4">
            <h1 className="flex items-center justify-center gap-2">
              We're Here to
              <div className="relative bg-primary w-fit py-2 px-8">
                <h1>Help!</h1>
                <Polygon className="size-10 bg-white" />
              </div>
            </h1>
          </div>
          <p className=" mt-3 text-[#525252]">
            Get in touch with us for inquiries, support, or partnerships. Our
            team is ready to assist you.
          </p>
        </div>
        <h3 className="mb-4 mt-[80px]">Send Us a Message</h3>
        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 p-6 "
          >
            {/* First Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormField
                label="First Name"
                name="firstName"
                placeholder="Peter Otokini"
                register={register}
                validation={{ required: "First name is required" }}
                error={errors.firstName}
              />
              <FormField
                label="Last Name"
                name="lastName"
                placeholder="Michael Tukur"
                register={register}
                validation={{ required: "Last name is required" }}
                error={errors.lastName}
              />
            </div>

            {/* Email */}
            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="peterotokini@mail.com"
              register={register}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              }}
              error={errors.email}
            />

            {/* Phone */}
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+234 913 508 7152"
              register={register}
              validation={{ required: "Phone number is required" }}
              error={errors.phone}
            />

            {/* Subject */}
            <FormSelect
              label="Subject"
              name="subject"
              register={register}
              options={[
                { value: "", label: "Select a subject" },
                { value: "General Inquiry", label: "General Inquiry" },
                { value: "Sales", label: "Sales" },
                { value: "Technical Support", label: "Technical Support" },
                {
                  value: "Partnership Opportunities",
                  label: "Partnership Opportunities",
                },
              ]}
              validation={{ required: "Subject is required" }}
              error={errors.subject}
            />

            {/* Message */}
            <FormTextArea
              label="Message"
              name="message"
              placeholder="Type your message here..."
              register={register}
              validation={{ required: "Message is required" }}
              error={errors.message}
            />

            {/* File Upload */}
            <FormFileUpload
              label="Upload Content"
              name="file"
              register={register}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
