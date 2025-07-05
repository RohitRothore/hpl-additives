import Banner from "@/components/Banner";
import Image from "next/image";

const sustainabilityPrinciples = [
  {
    title: "Conscious Resource Utilization",
    description:
      "Uses resources required to achieve its legitimate business objectives only.",
    icon: "/assets/images/sustainability/icon1.png",
    alt: "polymer additives",
  },
  {
    title: "Responsible Business Practices",
    description:
      "Conduct all activities with integrity & in the interest of all our stakeholders.",
    icon: "/assets/images/sustainability/icon2.png",
    alt: "compostable plastic",
  },
  {
    title: "In Compliance with all Laws & Regulations",
    description:
      "Comply with and exceeds (where Practicable), all applicable legislation, regulation and codes of practise as per India.",
    icon: "/assets/images/sustainability/icon3.png",
    alt: "speciality chemicals industry",
  },
  {
    title: "Constant Balancing Act",
    description:
      "Strives to strike the right balance between economic progress, environmental protection and social responsibilities.",
    icon: "/assets/images/sustainability/icon4.png",
    alt: "degradable plastic",
  },
  {
    title: "Productive Work Environment",
    description:
      "Creates conductive environment for its employees and community, in and around its business operation.",
    icon: "/assets/images/sustainability/icon5.png",
    alt: "cross linking agent",
  },
  {
    title: "Efficient Utilization of Resources",
    description:
      "Follows innovative approach to deploy sustainable technology for efficient use of natural resources.",
    icon: "/assets/images/sustainability/icon6.png",
    alt: "plastic additives",
  },
  {
    title: "Built on Trust",
    description:
      "Upholds the value of trust, honesty in dealings with all stakeholders.",
    icon: "/assets/images/sustainability/icon7.png",
    alt: "polymer manufacturers",
  },
  {
    title: "Responsible Care",
    description:
      "Completed TfS & Ecovadis Audits of getting registered under Responsible Care.",
    icon: "/assets/images/sustainability/icon8.png",
    alt: "azodicarbonamide",
  },
];

export default function SustainableDevelopmentPage() {
  return (
    <main className="bg-gray-100 pb-8 lg:pb-16">
      <Banner title="Sustainable Development" />
      <div className="container">
        <section className="bg-white pt-8 pb-12 mt-8 lg:mt-16 rounded-xl px-4 lg:px-8">
          <p className="max-w-2xl text-center font-medium mb-12 text-lg lg:text-xl mx-auto">
            HPL Additives stands committed to its responsibility towards
            society.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {sustainabilityPrinciples.map((principle, index) => (
              <div
                key={index}
                className="flex bg-white border border-theme rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl p-4"
              >
                <Image
                  src={principle.icon}
                  alt={principle.alt}
                  width={64}
                  height={64}
                  className="mr-4 shrink-0 size-16"
                />
                <div className="text-justify">
                  <div className={`lg:text-lg font-semibold`}>
                    {principle.title}:{" "}
                    <span className="text-gray-600 font-normal">
                      {principle.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
