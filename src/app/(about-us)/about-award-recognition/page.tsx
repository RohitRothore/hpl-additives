"use client";

import { AWARD_DATA, AWARD_TABS } from "@/constants/about/AWARD";
import Image from "next/image";
import { useState } from "react";

type AwardTabKey = keyof typeof AWARD_DATA;

export default function AwardRecognition() {
  const [activeTab, setActiveTab] = useState<AwardTabKey>("technology");

  const tabLabel = AWARD_TABS.find((t) => t.value === activeTab)?.label ?? "";
  return (
    <main>
      <Image
        src="/assets/images/about/awards/AwardPageBanner.jpg"
        alt="Award Recognition"
        width={1920}
        height={500}
        className="w-full h-auto"
        priority
      />
      <section className="container py-10">
        {/* Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar lg:justify-center">
          {AWARD_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as AwardTabKey)}
              className={`px-4 py-2 rounded font-semibold text-sm min-w-max md:text-base border transition
              ${
                activeTab === tab.value
                  ? "bg-theme text-white border-theme"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <h2 className="bg-gray-700 text-white text-center font-bold uppercase py-3 text-lg md:text-xl mb-8">
          Awards for Our {tabLabel}
        </h2>

        {/* Awards List */}
        <div className="space-y-10">
          {AWARD_DATA[activeTab].map((award, idx) => (
            <article
              key={idx}
              className="grid md:grid-cols-[220px_1fr] bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="bg-[#8ABF45]/40 flex items-center justify-center p-4 min-h-[200px]">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={180}
                  height={180}
                  className="object-contain max-h-44"
                />
              </div>
              <div className="lg:p-6 p-3 space-y-2 text-gray-500 text-sm md:text-base">
                <p>
                  <span className="font-semibold text-theme">Title: </span>{" "}
                  {award.title}
                </p>
                <p>
                  <span className="font-semibold text-theme">
                    Awarding Institution:
                  </span>{" "}
                  {award.institution}
                </p>
                <p>
                  <span className="font-semibold text-theme">
                    Year of Winning:
                  </span>{" "}
                  {award.year}
                </p>
                <p>
                  <span className="font-semibold text-theme">
                    Reason for Award:
                  </span>{" "}
                  {award.reason}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
