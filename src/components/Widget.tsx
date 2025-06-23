"use client";

import { ArrowUp } from "feather-icons-react";
import React from "react";

export default function Widget() {
  const handleScroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to top"
      className="fixed z-50 bottom-8 right-4 md:bottom-10 md:right-6 bg-theme rounded-full p-2 md:p-3 shadow-2xl shadow-black transition-transform hover:scale-110"
    >
      <ArrowUp className="text-white" />
    </button>
  );
}
