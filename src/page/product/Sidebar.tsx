"use client";

import { accordionItems } from "@/constants/product/PRODUCT";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="hidden md:block">
      {accordionItems.map((item, index) => (
        <div
          key={item.title}
          className="mb-4 p-4 rounded-2xl bg-white shadow-xl border-t-4 space-y-8 border-theme"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between rounded-md items-center text-theme bg-gray-100 p-4 text-left text-xl font-semibold"
          >
            {item.title}
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openAccordion === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openAccordion === index && (
            <ul className="pl-4 space-y-4 mt-2">
              {item.subItems.map((subItem) => (
                <li key={subItem.category}>
                  <strong className="text-lg">{subItem.category}</strong>
                  <ul className="ml-2 space-y-2 mt-1">
                    {subItem.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-blue-600 hover:underline"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
