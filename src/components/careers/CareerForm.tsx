"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ArrowDownIcon from "../../../public/icons/ArrowDown";
import UploadIcon from "../../../public/icons/Upload";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  role: string;
  resume: File | null;
  message: string;
  location: string;
  years: string;
  linkedin: string;
}

interface Application {
  id: number;
  position: string;
  location: string;
  type: string;
  category: string;
  description: string;
}

interface CareerFormProps {
  data: Application;
}

const CareerForm = (application: CareerFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
    message: "",
    location: "",
    years: "",
    linkedin: "",
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
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/3 flex flex-col gap-5">
        <div
          className="prose prose-sm max-w-none text-black [&>p]:mb-4 [&>h4]:font-medium [&>h4]:text-black [&>h4]:mt-6 [&>h4]:mb-3 [&>ul]:space-y-2 [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:before:content-['•'] [&>ul>li]:before:text-black [&>ul>li]:before:mr-2"
          dangerouslySetInnerHTML={{ __html: application.data.description }}
        />
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
              Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
              placeholder="Manila"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black">
              Desired Department
            </label>

            <div className="mt-[10px] relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="appearance-none block w-full border border-lightGray rounded-sm p-3 pr-10 text-sm"
                required
              >
                <option value="">Select Department</option>
                <option value="Frontend Developer">IT Department</option>
                <option value="Backend Developer">Purchasing Department</option>
                <option value="Full Stack Developer">
                  Human Resource Department
                </option>
                <option value="Designer">Engineering Department</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-lightGray">
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black">
              Years
            </label>
            <input
              name="years"
              value={formData.years}
              onChange={handleChange}
              type="number"
              className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
              placeholder="3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black">
              LinkedIn Profile
            </label>
            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              type="text"
              className="mt-[10px] block w-full border border-lightGray rounded-sm p-3 text-sm"
              placeholder="www.linkedin.com/profile"
              required
            />
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

export default CareerForm;
