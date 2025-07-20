"use client";

import { distributorData } from "@/constants/NETWORK";
import Icon from "feather-icons-react";
import Image from "next/image";
import { useState } from "react";

export default function GlobalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100">
      <div className="bg-theme text-white py-8 lg:py-16">
        <div className="container">
          <p className="text-2xl lg:text-5xl font-semibold mb-6">
            HPL Additives | Global Distribution Network – 50+ Countries
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
            <p className="text-2xl lg:text-6xl font-bold">
              Delivering Innovation Globally
            </p>
            <p className="lg:w-1/2 text-lg">
              Discover HPL Additives’ extensive global presence in over 50
              countries, including the USA, Europe, ASEAN, the Middle East,
              LATAM, and beyond. Connect with your nearest regional distributor
              and experience world-class additive solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-8 lg:mt-16 container">
        <Image
          src="/assets/images/mapFullview.jpg"
          alt="HPL Additives"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-4xl border-2 border-theme cursor-pointer"
          onClick={openModal}
        />
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
            <div className="relative bg-white p-4 rounded-lg container w-full">
              <span
                className="absolute top-4 right-4 text-4xl cursor-pointer text-theme hover:text-theme/95 rounded-full px-2.5 border-2 border-theme"
                onClick={closeModal}
              >
                &times;
              </span>
              <Image
                src="/assets/images/mapFullview.jpg"
                alt="HPL Additives Full View"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
      <section className="container py-8 lg:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-theme">
            Distribution <span className="text-gray-600">Network</span>
          </h2>
          <div className="flex justify-center my-4">
            <Icon icon="minus" className="text-theme w-24 h-6" />
          </div>
        </div>

        {/* Americas */}
        <div className="mb-12 bg-white border border-theme p-6 lg:p-12 rounded-2xl">
          <h3 className="text-2xl font-extrabold p-2 text-center bg-theme rounded text-white mb-4">AMERICAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
            {distributorData.americas.map((distributor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl lg:text-2xl font-bold text-theme">
                  {distributor.country}
                </h4>
                <p className="text-gray-600">
                  <strong>{distributor.distributor}</strong>
                  <br />({distributor.products})
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Europe */}
        <div className="mb-12 bg-white border border-theme p-6 lg:p-12 rounded-2xl">
          <h3 className="text-2xl font-extrabold p-2 text-center bg-theme rounded text-white mb-4">EUROPE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
            {distributorData.europe.map((distributor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl lg:text-2xl font-bold text-theme">
                  {distributor.country}
                </h4>
                <p className="text-gray-600">
                  <strong>{distributor.distributor}</strong>
                  <br />({distributor.products})
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pan European */}
        <div className="mb-12 bg-white border border-theme p-6 lg:p-12 rounded-2xl">
          <h3 className="text-2xl font-extrabold p-2 text-center bg-theme rounded text-white mb-4">
            PAN EUROPEAN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
            {distributorData.panEuropean.map((distributor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl lg:text-2xl font-bold text-theme">
                  {distributor.country}
                </h4>
                <p className="text-gray-600">({distributor.products})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Africa */}
        <div className="mb-12 bg-white border border-theme p-6 lg:p-12 rounded-2xl">
          <h3 className="text-2xl font-extrabold p-2 text-center bg-theme rounded text-white mb-4">AFRICA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
            {distributorData.africa.map((distributor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl lg:text-2xl font-bold text-theme">
                  {distributor.country}
                </h4>
                <p className="text-gray-600">({distributor.products})</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
