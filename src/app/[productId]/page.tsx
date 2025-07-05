/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { notFound } from "next/navigation";
import HeroSection from "@/page/product/HeroSection";
import Sidebar from "@/page/product/Sidebar";
import { productData } from "@/constants/product/PRODUCT_DETAIL";

interface PageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params;
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#f0f5f8]">
      <HeroSection />
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Sidebar />
          <div className="col-span-2">
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-theme mb-2">
                {product.title}{" "}
                <span className="text-2xl font-semibold">
                  {product.subtitle}
                </span>
              </h1>
              {product.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-semibold text-theme bg-gray-100 p-3 rounded-md mb-4">
                    {section.heading}
                  </h2>
                  {section.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-200">
                            {section.table.headers.map((header, i) => (
                              <th
                                key={i}
                                className="p-3 border-b font-semibold"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              {row.map((cell, j) => (
                                <td key={j} className="p-3 border-b">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.tables &&
                    section.tables.map((table, i) => (
                      <div key={i} className="overflow-x-auto mt-4">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-200">
                              {table.headers.map((header, j) => (
                                <th
                                  key={j}
                                  className="p-3 border-b font-semibold"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, j) => (
                              <tr key={j} className="hover:bg-gray-50">
                                {row.map((cell, k) => (
                                  <td key={k} className="p-3 border-b">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
