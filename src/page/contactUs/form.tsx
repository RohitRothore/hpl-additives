'use client';

import {
  Edit,
  FileText,
  Mail,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  User,
} from "feather-icons-react";
import Link from "next/link";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      console.log("Form data:", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  return (
    <section className="bg-gray-100 py-8 lg:py-16">
      <div className="grid grid-cols-1 container lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
          <ul className="space-y-6">
            <li className="flex items-center space-x-3">
              <div className="p-2.5 rounded-full bg-theme">
                <PhoneCall className="text-white size-6" />
              </div>
              <div>
                <p className="text-lg font-semibold">Phone Number</p>
                <p className="text-gray-600">+91 129-2251300</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-full bg-theme">
                  <Mail className="text-white size-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email Address</p>
                  <p className="text-gray-600">
                    <Link
                      href="mailto:hpla@hpladditives.com"
                      className="text-gray-600 hover:underline hover:text-theme"
                    >
                      hpla@hpladditives.com
                    </Link>
                    <br />
                    <Link
                      href="mailto:careers@hpladditives.com"
                      className="text-gray-600 hover:underline hover:text-theme"
                    >
                      careers@hpladditives.com
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-full bg-theme">
                  <Navigation className="text-white size-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Fax Address</p>
                  <p className="text-gray-600">+91 129-2251304/05</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-2.5 rounded-full bg-theme">
                  <MapPin className="text-white size-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Location</p>
                  <p className="text-gray-600">
                    HPL Additives Limited 5th floor, Block A Vatika Mindscapes
                    12/3, Main Mathura Road
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-xl hover:scale-[1.045] transition-transform duration-300">
          <h2 className="text-2xl font-bold text-theme -mt-3 mb-6 text-center">
            Get in Touch
          </h2>
          <form
            id="contact-form"
            name="contact-form"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <User className="absolute left-3 top-3 text-theme w-5 h-5" />
                <input
                  type="text"
                  id="companyname"
                  name="companyname"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                  placeholder="Company Name"
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
                  placeholder="Contact Details"
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
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="relative md:col-span-2">
                <FileText className="absolute left-3 top-3 text-theme w-5 h-5" />
                <select
                  id="reason"
                  name="reason"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                  required
                >
                  <option value="">Select Reason</option>
                  <option value="1">Want to Apply for a Job</option>
                  <option value="2">Want to Enquire about a Product</option>
                  <option value="3">Want to Become Your Supplier</option>
                  <option value="4">Want to Become Your Partner</option>
                  <option value="5">Want to Offer You Our Services</option>
                  <option value="6">
                    I Have Another Reason to Contact You
                  </option>
                </select>
              </div>
              <div className="relative md:col-span-2">
                <Edit className="absolute left-3 top-3 text-theme w-5 h-5" />
                <textarea
                  id="msg"
                  name="msg"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                  rows={3}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-theme text-white px-6 min-w-2xs text-lg font-medium py-2 rounded-md hover:bg-theme/95 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
