"use client";

import { useState } from "react";
import Image from "next/image";
import { downloadPDF } from "@/utils/downloadPDF";
import { isMobile } from "@/constants/COMMON";
import { X } from "feather-icons-react";

// Constant for policy data
const policies = [
  {
    number: 1,
    title: "Circular Economy Policy",
    href: "/assets/images/policies/circular-economy-policy.pdf",
  },
  {
    number: 2,
    title: "Corporate Social Responsibility Policy",
    href: "/assets/images/policies/corporate-social-responsibility-policy.pdf",
  },
  {
    number: 3,
    title: "Corporate Governance Policy",
    href: "/assets/images/policies/corporate-governance-policy.pdf",
  },
  {
    number: 4,
    title: "Anti Bribery and Anti Corruption Policy",
    href: "/assets/images/policies/anti-bribery-and-anti-corruption-policy.pdf",
  },
  {
    number: 5,
    title: "Environmental Management and Compliance Policy",
    href: "/assets/images/policies/environmental-management-and-compliance-policy.pdf",
  },
  {
    number: 6,
    title: "Health & Safety Policy",
    href: "/assets/images/policies/health-and-safety-policy.pdf",
  },
  {
    number: 7,
    title: "Product Safety and Quality Policy",
    href: "/assets/images/policies/product-safety-and-quality-policy.pdf",
  },
  {
    number: 8,
    title: "Stakeholder Engagement Policy",
    href: "/assets/images/policies/stakeholder-engagement-policy.pdf",
  },
  {
    number: 9,
    title: "Sustainable Supply Chain Policy",
    href: "/assets/images/policies/sustainable-supply-chain-policy.pdf",
  },
  {
    number: 10,
    title: "Waste Management Policy",
    href: "/assets/images/policies/waste-management-policy.pdf",
  },
  {
    number: 11,
    title: "Climate Change Policy",
    href: "/assets/images/policies/climate-change-policy.pdf",
  },
  {
    number: 12,
    title: "Human Rights Policy",
    href: "/assets/images/policies/human-rights-policy.pdf",
  },
  {
    number: 13,
    title: "Code of Independent Directors",
    href: "/assets/images/policies/code-for-Independent-directors.pdf",
  },
  {
    number: 14,
    title: "AGM NOTICE",
    href: "/assets/images/policies/AGM-NOTICE-2024.pdf",
  },
  {
    number: 15,
    title: "Energy Efficiency and Management Policy",
    href: "/assets/images/policies/energy-efficiency-and-management-policy.pdf",
  },
  {
    number: 16,
    title: "Water and Wastewater Management Policy",
    href: "/assets/images/policies/water-and-wastewater-management-policy.pdf",
  },
  {
    number: 17,
    title: "Annual Returns",
    href: "/assets/images/policies/annual-return-MGT-7-2024.pdf",
  },
  {
    number: 18,
    title: "ESG Report",
    href: "/assets/images/policies/HPL-Draft-ESG-Report-V4-11022025-Marketing.pdf",
  },
  {
    number: 19,
    title: "CDP Report",
    href: "/assets/images/policies/HPL-Additives-Limited-01-10-2024-CORPORATE-17-35.pdf",
  },
  {
    number: 20,
    title: "GHG Assurance Certificate",
    href: "/assets/images/policies/Independent-Limited-Assurance-Statement-HPL-Additives-Limited-Final-170524.pdf",
  },
];

export default function PoliciesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const openModal = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf("");
  };

  const handleViewPdf = (pdfUrl: string) => {
    if (isMobile) {
      downloadPDF(pdfUrl);
    } else {
      openModal(pdfUrl);
    }
  };

  return (
    <main>
      <div className="relative">
        <Image
          src="/assets/images/about/policies/Banner.jpg"
          alt="Banner Image"
          className="w-full h-auto object-cover"
          width={1920}
          height={500}
        />
        <p className="absolute text-3xl px-4 lg:text-6xl text-white text-center w-full bottom-1/3 lg:bottom-1/2">
          Policies
        </p>
      </div>
      <div className="bg-gradient-to-tl lg:mt-8 pb-8 lg:pb-16 from-blue-200 to-transparent to-50%">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 py-8 lg:py-16">
            <Image
              src="/assets/images/about/policies/Image 1.png"
              alt="About Us"
              width={800}
              height={600}
              className="w-full object-cover"
            />
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-medium text-gray-600 flex items-center gap-2">
                  Our Policies
                  <span className="w-28 h-1 ml-3 bg-theme" />
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Smart Additives for Smarter Solutions
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                At HPL Additives, we are committed to delivering world-class
                chemical additives that enhance product performance across
                industries. With a strong foundation in innovation, compliance,
                and sustainability, our practices are governed by transparency
                and trust. From quality management to ethical operations, every
                step we take reflects our dedication to excellence and
                environmental responsibility.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-20">
            {policies.map((policy) => (
              <div
                key={policy.number}
                className="flex items-center border-b font-medium border-theme"
              >
                <span className="font-medium mr-2 text-gray-600">
                  {policy.number}.
                </span>
                <div className="flex justify-between gap-2 items-center w-full">
                  <span className="font-medium text-gray-800">
                    {policy.title}
                  </span>
                  <button
                    onClick={() => handleViewPdf(policy.href)}
                    className="flex items-center gap-1 bg-theme py-1 px-4 text-white text-lg font-semibold hover:cursor-pointer"
                  >
                    Read
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="size-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3.5 hover:cursor-pointer hover:bg-gray-600 rounded-full transition duration-200 p-1.5 right-32 text-white"
            >
              <X size={20} />
            </button>
            <embed
              width="100%"
              height="100%"
              src={selectedPdf}
              type="application/pdf"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
