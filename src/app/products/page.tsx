import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/page/product/Sidebar";
import HeroSection from "@/page/product/HeroSection";

const products = [
  {
    href: "/mikrofine-product",
    category: "MODIFIERS",
    title: "MIKROFINE® - Chemical Blowing Agents",
    image: "/assets/images/product/mikrofine.jpg",
    alt: "mikrofine",
    content: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Exothermic Chemical Blowing Agents</strong>
            <ul className="list-disc pl-5">
              <li>Azodicarbonamide</li>
              <li>Azobis (Isobutyronitrile)</li>
              <li>Sulfonyl Hydrazide</li>
              <li>Semicarbazide</li>
              <li>Dinitrosopentamethylene Tetramine</li>
            </ul>
          </li>
          <li>
            <strong>Endex Chemical Blowing Agent</strong>
          </li>
          <li>
            <strong>MasterBatch of OBSH & ADC</strong>
          </li>
        </ul>
        <h4 className="text-theme font-semibold mt-4">
          MIKROFINE® - Activators for Chemical Blowing Agents
        </h4>
        <ul className="list-disc pl-5">
          <li>
            <strong>MIKROFINE® ZBS</strong>
          </li>
        </ul>
      </>
    ),
  },
  {
    href: "/mikrofine-product",
    category: "MODIFIERS",
    title: "MIKROCELL™ Microspheres",
    image: "/assets/images/product/mikrofine.jpg",
    alt: "mikrocell",
    content: (
      <ul className="list-disc pl-5">
        <li>Mikrocell 242</li>
        <li>Mikrocell 252</li>
        <li>Mikrocell 262</li>
        <li>Mikrocell 272</li>
      </ul>
    ),
  },
  {
    href: "/kinox-product",
    category: "PROPERTY EXTENDERS",
    title: "KINOX® Antioxidants",
    image: "/assets/images/product/kinox.jpg",
    alt: "kinox",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <strong>Primary Antioxidants</strong>
        </li>
        <li>
          <strong>Secondary Antioxidants</strong>
        </li>
        <li>
          <strong>Metal Deactivators</strong>
        </li>
        <li>
          <strong>Binary Blends</strong>
        </li>
        <li>
          <strong>One Pack Antioxidants</strong>
        </li>
      </ul>
    ),
  },
  {
    href: "/polyazo-product",
    category: "POLYMERIZATION CATALYST",
    title: "POLYAZO® Polymerization Catalysts",
    image: "/assets/images/product/polyazo.jpg",
    alt: "polyazo",
    content: (
      <>
        <h4 className="text-theme font-semibold">Polyazo® AZDN</h4>
        <ul className="list-disc pl-5">
          <li>Solvent Soluble</li>
          <li>2, 2&apos;-Azobis (Isobutyronitrile)</li>
        </ul>
        <h4 className="text-theme font-semibold mt-4">Polyazo® AZPH</h4>
        <ul className="list-disc pl-5">
          <li>Water Soluble</li>
          <li>2, 2&apos;-Azobis (2-amidinopropane)dihydrochloride</li>
        </ul>
        <h4 className="text-theme font-semibold mt-4">Polyazo® AZIM</h4>
        <ul className="list-disc pl-5">
          <li>Water Soluble</li>
          <li>2, 2&apos;-Azobis (2-amidinopropane)dihydrochloride</li>
        </ul>
      </>
    ),
  },
  {
    href: "/halocom-product",
    category: "SPECIALTY CHEMICALS",
    title: "HALOCOM® Halogenated Compounds",
    image: "/assets/images/product/halocom.jpg",
    alt: "halocom",
    content: (
      <>
        <h4 className="text-theme font-semibold">Product Name</h4>
        <ul className="list-disc pl-5">
          <li>Halocom DBH 1, 3-Dibromo-5, 5-dimethylhydantoin</li>
          <li>Halocom DBC 1-Bromo-3-Chloro-5,5-dimethylhydantoin</li>
          <li>Halocom DCH 1,3-Dichloro-5,5-dimethylhydantoin</li>
        </ul>
      </>
    ),
  },
  {
    href: "/hichem-product",
    category: "CHAIN EXTENDERS & CROSS LINKING AGENT",
    title: "HICHEM® Chain Extender & Cross Linking Agent",
    image: "/assets/images/product/hichem.jpg",
    alt: "hichem",
    content: (
      <>
        <h4 className="text-theme font-semibold">Product & Chemical Name</h4>
        <ul className="list-disc pl-5">
          <li>HICHEM ADH (Adipic dihydrazide)</li>
        </ul>
        <h4 className="text-theme font-semibold mt-4">HICHEM ADH</h4>
        <p>
          Curing agent for epoxy heat curable resins. Suitable for encapsulating
          electronic components, Chain extender and cross-linking agent,
          Stabiliser for fibre grade synthetic resin
        </p>
      </>
    ),
  },
  {
    href: "/oxo-bio-product",
    category: "OXO BIODEGRADABLE ADDITIVES",
    title: "HIGREN™ OXO Biodegradable Additives",
    image: "/assets/images/product/higren.jpg",
    alt: "higren",
    content: (
      <>
        <h4 className="text-theme font-semibold">HIGREN</h4>
        <ul className="list-disc pl-5">
          <li>
            <strong>Flexible Application</strong>
            <ul className="list-disc pl-5">
              <li>Higren OBA-125</li>
              <li>Higren OBA-542</li>
              <li>Higren OBA-381</li>
              <li>Higren OBA-622</li>
            </ul>
          </li>
          <li>
            <strong>Rigid Application</strong>
            <ul className="list-disc pl-5">
              <li>Higren OBA-522</li>
              <li>Higren OBA-680</li>
              <li>Higren OBA-719</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    href: "/hiclear-product",
    category: "CLARIFYING AGENT",
    title: "HICLEAR® Clarifying Agents",
    image: "/assets/images/product/hiclear.jpg",
    alt: "hiclear",
    content: (
      <>
        <h4 className="text-theme font-semibold">Product & Chemical Name</h4>
        <ul className="list-disc pl-5">
          <li>HICLEAR-301 1,3:2,4 Bis (3,4-dimethylbenzylidene) sorbitol</li>
        </ul>
        <h4 className="text-theme font-semibold mt-4">HICLEAR-301</h4>
        <p>
          It is a high performance sorbitol based clarifying agent for PP.
          Particularly useful for polypropylene applications for food packaging,
          medical syringes, and high clarity household and cosmetic containers.
          It also improves surface smoothness of polypropylene.
        </p>
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-[#f0f5f8]">
      {/* Product Section */}
      <HeroSection />
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <Sidebar />
          <div className="col-span-2">
            {products.map((product, index) => (
              <Link
                key={product.title + index}
                href={product.href}
                className="block mb-8 hover:scale-105 transition-transform duration-300 overflow-hidden rounded-2xl lg:p-8 bg-white shadow-lg shadow-theme "
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full lg:w-96 lg:rounded-2xl overflow-hidden mb-4 sm:mb-0 shrink-0">
                    <Image
                      src={product.image}
                      className="h-auto !w-full"
                      alt={product.alt}
                      height={400}
                      width={400}
                    />
                  </div>
                  <div className="sm:ml-6 px-4 mb-4 lg:mb-0 lg:px-0">
                    <h6 className="text-theme text-sm font-semibold">
                      {product.category}
                    </h6>
                    <h4 className="text-lg text-theme font-semibold">
                      {product.title}
                    </h4>
                    <div>{product.content}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
