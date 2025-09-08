"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import UploadIcon from "../../../public/icons/Upload";
import ArrowDownIcon from "../../../public/icons/ArrowDown";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  role: string;
  resume: File | null;
  message: string;
}

const RoleForm = () => {
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files) {
      setFormData((prev) => ({
        ...prev,
        resume: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/3 flex flex-col gap-5">
        <h1 className="font-medium text-3xl">Didn’t find the right role?</h1>
        <p className="font-medium text-base text-lightGray">
          We welcome passionate and talented individuals to join us. <br />
          <br />
          Complete and submit the required fields. We'd love to hear from you.{" "}
          <br />
          <br />
          We’ll keep your application and reach out when a role that matches
          your skills becomes available.
        </p>
      </div>

      <div className="w-full lg:w-2/3">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-black">
                Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
                placeholder="Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black">
                First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
                placeholder="Jane"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
              placeholder="janedoe@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black">
              Phone No.
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
              placeholder="+639876543210"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black">
              Desired Role
            </label>

            <div className="mt-[10px] relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="appearance-none block w-full border border-lightGray rounded-sm p-3 pr-10 text-sm"
                required
              >
                <option value="">Select Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="Designer">Designer</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-lightGray">
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-1">
              Resume
            </label>

            <div className="inline-flex w-full rounded-sm border border-lightGray overflow-hidden">
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 p-3 bg-lightestGray border-r border-r-lightGray text-black cursor-pointer select-none"
              >
                <UploadIcon height={18} width={18} fill="black" />
                <span className="text-sm font-medium">Choose File</span>
              </label>

              <div className="flex-1 p-3 text-lightGray text-sm truncate">
                {formData.resume ? formData.resume.name : "No File Chosen"}
              </div>

              <input
                id="file-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-black">
              Cover Letter / Short Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
              rows={4}
              placeholder="Type your message here...."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#A30101] to-[#FF0000] text-white py-3 rounded-sm text-base font-semibold hover:from-[#8F0000] hover:to-[#E60000] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
