"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import ContactEstimatedForm from "./ContactEstimatedForm";
import ContactPointForm from "./ContactPointForm";
import ContactServiceForm from "./ContactServiceForm";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  role: string;
  resume: File | null;
  message: string;
}

export default function ContactForm() {
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
    <div>
      <div className="bg-white rounded-md border border-lighterGray p-4 md:p-8 flex flex-col gap-10">
        <ContactServiceForm />
        <ContactPointForm />
        <ContactEstimatedForm />
        <div>
          <h2 className="text-lg font-medium mb-5">Contact Details</h2>
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

            <div className="mb-6">
              <label className="block text-sm font-semibold text-black">
                Messages
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
    </div>
  );
}
