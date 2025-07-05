import Banner from "@/components/Banner";
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
    ],
    image: {
      src: "/assets/images/about/manufacture-unit/manu-pro-3.jpg",
      alt: "chemical manufacturers india",
    },
  },
  {
    name: "Plant 4",
    location: "Derabassi, Punjab",
    products: [{ name: "", description: "Hydrazine Hydrate" }],
    image: {
      src: "/assets/images/about/manufacture-unit/manu-pro-1.jpg",
      alt: "chemical manufacturing-companies-mumbai",
    },
  },
];

export default function ManufacturingUnitsPage() {
  return (
    <main className="bg-gray-100 pb-8 lg:pb-16">
      <Banner title="Manufacturing Units" />
     <div className="container">
       <div className="container bg-white py-8 mt-8 lg:mt-16 rounded-xl">
        <p className="max-w-2xl text-center font-medium mb-12 text-lg lg:text-xl mx-auto">
          HPL Additives has four manufacturing sites in India - 3 in Faridabad
          (Haryana) and 1 in Derabassi (Punjab).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {manufacturingPlants.map((plant, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border-4 border-theme hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={plant.image.src}
                  alt={plant.image.alt}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute top-2 right-2 text-yellow-500 text-xl">
                  ★
                </span>
              </div>
              <div className="p-4">
                <h5 className="text-lg font-bold text-theme">{plant.name}</h5>
                <h6 className="text-gray-600 mb-4 text-lg font-semibold">
                  {plant.location}
                </h6>
                {plant.products.map((product, idx) => (
                  <p key={idx} className="text-gray-600 mt-2 text-sm">
                    {product.name && (
                      <span className="font-semibold">{product.name}</span>
                    )}
                    {product.name && " "}
                    <span>{product.description}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
    </main>
  );
}
