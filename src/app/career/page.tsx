"use client";

import Banner from "@/components/Banner";
import { FileText, Mail, Phone, User } from "feather-icons-react";
import { FormEvent } from "react";

const designationOptions = [
  { value: "", label: "Designation" },
  { value: "Manager", label: "Manager" },
  { value: "Engineer", label: "Engineer" },
  { value: "Analyst", label: "Analyst" },
  { value: "Technician", label: "Technician" },
];

export default function CareersPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      console.log("Form data:", data);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <main className="bg-gray-100 pb-8">
      <Banner title="Careers" />
      <div className="container py-12">
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Left Section: Description */}
            <div className="bg-white p-8 transition-transform hover:scale-105 duration-300 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-theme mb-4">
                Career With Us!
              </h2>
              <p className="text-gray-600 mb-6">
                We are looking to hire talents that would fit in the openings we
                have, if you love your work and are looking for a job
                you&apos;re at the right stop. Our work environment is dynamic
                and flexible which helps the team to be comfortable and sustain
                as a family together.
              </p>
              <h3 className="text-xl font-bold text-theme mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-600 mb-6">
                The reason is simple, our first priority is Employee
                satisfaction, and this is the only reason for our rapid growth
                as a business. We are committed to providing you with a stable
                and positive working environment. We provide you with a platform
                to grow and develop. &quot;It&apos;s a beautiful thing when
                career and passion come together&quot;.
              </p>
              <button className="bg-theme text-white hover:cursor-pointer px-6 py-2 rounded-md hover:bg-theme-dark transition">
                Terms & Conditions For Research Writer
              </button>
            </div>
            {/* Right Section: Form */}
            <div className="bg-white p-8 transition-transform hover:scale-105 duration-300 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold text-theme mb-6 text-center">
                Apply Now!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-theme w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-theme w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-theme w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                    placeholder="Phone No."
                    required
                  />
                </div>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-theme w-5 h-5" />
                  <select
                    id="designation"
                    name="designation"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                    required
                  >
                    {designationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <FileText className="mr-2 text-theme w-5 h-5" />
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-theme min-w-xs text-white px-6 py-2 rounded-md hover:bg-theme-dark transition"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
