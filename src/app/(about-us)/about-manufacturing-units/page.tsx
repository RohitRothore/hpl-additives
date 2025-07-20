import BannerWithImage from "@/components/common/BannerWithImage";
import SectionHeadline from "@/components/common/SectionHeadline";
import Image from "next/image";

// Constant for manufacturing plant data
const manufacturingPlants = [
  {
    name: "Plant 1",
    location: "Ballabgarh, Haryana",
    products: [
      { name: "MIKROFINE", description: "Chemical Blowing Agents" },
      { name: "POLYAZO", description: "Azo-Initiators" },
      { name: "MIKROFINE", description: "MB ADC & OBSH based Masterbatches" },
      { name: "HALOCOM", description: "Water Treatment Chemical" },
      { name: "Production Capacity", description: "20724 MTA" },
    ],
    image: {
      src: "/assets/images/about/manufacture-unit/manu-pro-4.jpg",
      alt: "top chemical companies",
    },
  },
  {
    name: "Plant 2",
    location: "Ballabgarh, Haryana",
    products: [
      { name: "MIKROFINE", description: "CBA Intermediates" },
      { name: "HIGREN", description: "Oxo-Biodegradable Additives" },
      {
        name: "HALOCOM",
        description: "Water Treatment Chemicals and Pharma Intermediaries",
      },
      { name: "Production Capacity", description: "8578 MTA" },
    ],
    image: {
      src: "/assets/images/about/manufacture-unit/manu-pro-2.jpg",
      alt: "chemical manufacturing companies",
    },
  },
  {
    name: "Plant 3",
    location: "Palwal, Haryana",
    products: [
      { name: "KINOX", description: "Antioxidants" },
      { name: "POLYAZO", description: "Azo-Initiators" },
      { name: "KINOX", description: "OP One Packs" },
      { name: "HICHEM", description: "Speciality Chemicals" },
      {
        name: "Production Capacity",
        description: "7360 MT/YEAR *Core Products",
      },
    ],
    image: {
      src: "/assets/images/about/manufacture-unit/manu-pro-3.jpg",
      alt: "chemical manufacturers india",
    },
  },
  {
    name: "Plant 4",
    location: "Derabassi, Punjab",
    products: [
      { name: "", description: "Hydrazine Hydrate" },
      { name: "Production Capacity", description: "1350 MT/YEAR" },
    ],
    image: {
      src: "/assets/images/about/manufacture-unit/manu-pro-1.jpg",
      alt: "chemical manufacturing-companies-mumbai",
    },
  },
];

export default function ManufacturingUnitsPage() {
  return (
    <main className="pb-8 lg:pb-16">
      <BannerWithImage
        image="/assets/images/about/manufacture-unit/Pasted image.png"
        title=""
      />
      <div className="container bg-white py-8 mt-8 lg:mt-16 rounded-xl">
        <SectionHeadline
          heading="Our Manufacturing Units"
          title="Powering innovation at scale."
          description="HPL Additives has four manufacturing sites in India 3 in Faridabad (Haryana) and 1 in Derabassi (Punjab) and its corporate office is located in Faridabad, Haryana with a combined manufacturing capacity of 49462 MT per annum distributed over 7 different product ranges"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-20">
          {manufacturingPlants.map((plant, index) => (
            <div
              key={index}
              className="rounded-xl border-t-4 border-dashed border-green-600 shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="bg-white text-center py-2">
                <h4 className="text-green-700 font-semibold text-lg">
                  {plant.name}
                </h4>
                <p className="text-gray-700 text-sm">{plant.location}</p>
              </div>

              {/* Image */}
              <div className="bg-white px-4 py-2">
                <Image
                  src={plant.image.src}
                  alt={plant.image.alt}
                  width={300}
                  height={180}
                  className="rounded-md mx-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-gray-800 text-white px-4 py-4 min-h-[260px] flex flex-col text-center justify-between">
                <div>
                  {plant.products.map((product, idx) => (
                    <p key={idx} className="text-sm mt-2">
                      {product.name && (
                        <p className="font-bold">{product.name}: </p>
                      )}
                      {product.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
