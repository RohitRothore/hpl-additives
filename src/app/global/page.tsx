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
      <div>
        <div className="relative">
          <Image
            src="/assets/images/homePage/map.jpg"
            alt="HPL Additives"
            width={1200}
            height={600}
            className="w-full h-auto cursor-pointer"
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
          <div className="mb-12 bg-gray-100 p-6 lg:p-12 rounded">
            <h3 className="text-2xl font-semibold text-theme mb-4">AMERICAS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {distributorData.americas.map((distributor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-theme mb-2">
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
          <div className="mb-12 bg-gray-100 p-6 lg:p-12 rounded">
            <h3 className="text-2xl font-semibold text-theme mb-4">EUROPE</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {distributorData.europe.map((distributor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-theme mb-2">
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
          <div className="mb-12 bg-gray-100 p-6 lg:p-12 rounded">
            <h3 className="text-2xl font-semibold text-theme mb-4">
              PAN EUROPEAN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {distributorData.panEuropean.map((distributor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-theme mb-2">
                    {distributor.country}
                  </h4>
                  <p className="text-gray-600">({distributor.products})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Africa */}
          <div className="mb-12 bg-gray-100 p-6 lg:p-12 rounded">
            <h3 className="text-2xl font-semibold text-theme mb-4">AFRICA</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {distributorData.africa.map((distributor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-theme mb-2">
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
