"use client";

import { useState } from "react";
import Banner from "@/components/Banner";
import Image from "next/image";
import { File, X } from "feather-icons-react";
import { downloadPDF } from "@/utils/downloadPDF";
import { isMobile } from "@/constants/COMMON";

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
    <main className="bg-gray-100 pb-8 lg:pb-16">
      <Banner title="Policies" />
      <div className="container">
        <div className="rounded-lg mt-8 lg:mt-16 bg-white p-4 lg:p-8">
          <div className="max-w-96 lg:max-w-3xl mx-auto mb-8">
            <Image
              src="/assets/images/policies/index.jpg"
              alt="Industrial facility"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.number}
                className="flex items-center border-b shadow border-gray-200 p-4 rounded-lg hover:scale-105 transition-transform duration-300"
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
                    className="flex items-center gap-1 text-theme hover:cursor-pointer"
                  >
                    Read
                    <File size={13} />
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
