import SectionHeadline from "@/components/common/SectionHeadline";
import Image from "next/image";

const aboutData = {
  bannerTitle: "Overview",
  about: {
    image: {
      src: "/assets/images/homePage/AboutUsImage.png",
      alt: "chemical manufacturers",
    },
    leader: {
      title: "A leader in Polymer Additives Industry",
      description:
        "HPL was founded in 1964. Over the last 5 decades, it has established itself as a leader in the area of Chemical Blowing Agents (Exothermic and Endothermic) and has increased the product range to include Antioxidants, Azo-Initiators, Chain Extenders and Cross-Linking Agents for polymers, Water Treatment Chemicals, Specialty Chemicals, Hydrazine hydrate and Hydrazine derivatives.",
    },
    productRange: {
      title: "Our product range includes:",
      items: [
        {
          name: "Mikrofine®",
          description:
            "Endothermic and Exothermic Chemical Blowing Agents for Rubbers and Plastics.",
        },
        { name: "Mikrocell™", description: "Under Construction." },
        { name: "Kinox®", description: "Antioxidants for Polyolefin." },
        {
          name: "Polyazo®",
          description:
            "Solvent & Water Soluble Azo-Initiators (also used as polymerization catalysts) for Acrylics.",
        },
        {
          name: "Hichem®",
          description: "Chain Extenders and Cross-Linking Agents for polymers.",
        },
        {
          name: "Halocom®",
          description:
            "Water Treatment, Chemicals and Biocides, Specialty Chemicals (used in the manufacture of pharma and agro intermediates).",
        },
        {
          name: "Hiclear®",
          description: "Clarifying agent for Polypropylene (PP).",
        },
        {
          name: "Higren™",
          description:
            "Oxo-biodegradable additive for plastics biodegrading relatively quickly in different disposal environment.",
        },
      ],
    },
    additionalContent: [
      {
        text: "The company has four manufacturing sites: three in Faridabad (Haryana) and one in Derabassi (Punjab). All plants are equipped with state-of-the-art instruments ensuring reliable and safe processes. There is a big focus on ensuring safe operating conditions and environment at all plants.",
      },
      {
        text: "All technologies have been developed in-house and there are no technical know-how transfer agreements, joint ventures or collaborations for any of the products manufactured by the company. The technology development starts from the R&D and progresses through the Technology Development group, the Projects and Engineering Services group, the Manufacturing group, the Environment, Health and Safety (EHS) group before it is finalized and blue-printed. Inter-departmental interface and ratification ensures safety, reliability, efficiency of processes, excellent product quality due to stringent design inputs and reduces development and commercialization time.",
      },
      {
        title: "Built on Research & Development",
        text: "The R&D cell is the fountainhead for all research. It is well equipped with state-of-the-art equipment and instruments. It boasts of highly qualified scientists and chemists from leading academic institutions across the country. The R&D cell at HPL is recognized by the Department of Scientific & Industrial Research, Ministry of Science & Technology, Government of India. There are scale up and Computer Aided Design (CAD) facilities. The validation of the process capabilities is self sufficient from the product design to project commissioning. HPL believes in systems and good manufacturing practices. It is an ISO 9001 certified company since 1997.",
      },
      {
        title: "Environmentally Conscious",
        text: "The QMS ensures job clarity, documented procedure and process control right from raw materials to finished products. Today, HPL has less than 0.2% in-house and less than 0.1% customer non-conformance. Corrective and preventive action systems are in place to continually improve the product, processes and practices.",
      },
      {
        title: "Safety - A priority",
        text: "HPL believes in sustainable and a socially responsible business and has installed an EMS, certified under ISO: 14001 in 2015 by DNV. HPL owes its success to its people and believes that human resource is an important input to its business process. Constant training, skill up-gradation, motivation, transparent policies, clarity of career path, rewards for excellence are some of the tools HPL uses to get the best out of its people. As a step forward in its commitment to provide a safe and healthy work environment to all, HPL has complied with and obtained OHSAS: 18001 certification in 2006.",
      },
      {
        title:
          "Global Reach # Distribution network covering Americas & Europe & Direct supply to Far East Asia and Middle East",
        text: "HPL has established its position in both domestic and international markets and has a growth rate of approximately 20% a year. Exports to the developed markets of Europe and USA account for almost 50% of the company’s turnover. Today HPL has a sales and distribution network in 52 countries across the world. In the Indian market, HPL has over 75% market share for all the products it manufactures. It has been able to maintain this share in-spite of reduction in import tariffs and in the face of global competition. This is due to company's focus on Quality, Delivery and Service.",
      },
      {
        title: "Values Define who we are",
        text: "All of HPLAs interaction whether internally with its employees or externally with its customers, suppliers and other parties are based on its value drivers: Adaptability, Versatility, Teamwork, Caring and Dependability.",
      },
    ],
  },
  history: {
    heading: "Our History",
    title: "Building Success Through Every Milestone",
    description:
      " From a modest start to a remarkable journey, our company has grown through dedication, innovation, and drive. Every challenge we faced served as a foundation for our commitment to excellence and growth. With pride, we look back along the way, as we strengthen our partnerships and embrace new goals and purpose—ready to build every step together.",
    image: {
      src: "/assets/images/about/overview/Journey.png",
      alt: "Journey of HPL Additives",
    },
    buttonLink: "/about-overview",
    buttonText: "Read More",
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="relative">
        <Image
          src="/assets/images/homePage/Banner4.jpg"
          alt="Banner Image"
          className="w-full h-auto object-cover"
          width={1920}
          height={500}
        />
        <p className="absolute text-3xl px-4 lg:text-6xl text-white text-center w-full bottom-1/2">
          {aboutData.bannerTitle}
        </p>
      </div>
      <div className="container mt-8 lg:mt-16">
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <Image
              src={aboutData.about.image.src}
              alt={aboutData.about.image.alt}
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div>
              <span className="text-2xl lg:text-6xl font-extrabold">
                {aboutData.about.leader.title}
              </span>
              <p className="text-gray-600 mt-2">
                {aboutData.about.leader.description}
              </p>
              <div className="mt-6">
                <span className="text-xl font-semibold">
                  {aboutData.about.productRange.title}
                </span>
                {aboutData.about.productRange.items.map((product, index) => (
                  <div key={index} className="mt-2 font-semibold text-gray-600">
                    {index + 1}. {product.name} -{" "}
                    <span className="font-normal">{product.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-justify text-gray-600">
            {aboutData.about.additionalContent.map((section, index) => (
              <div key={index}>
                {section.title && (
                  <div className="text-xl font-semibold mt-6">
                    {section.title}
                  </div>
                )}
                <p className="mt-2">{section.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="bg-gray-100">
       <div className="py-12 mt-8 container">
         <SectionHeadline
          heading={aboutData.history.heading}
          title={aboutData.history.title}
          description={aboutData.history.description}
          buttonLink={aboutData.history.buttonLink}
          buttonText={aboutData.history.buttonText}
        />
        <Image
          src={aboutData.history.image.src}
          alt={aboutData.history.image.alt}
          width={1920}
          height={600}
          className="w-full h-auto"
        />
       </div>
      </section>
    </main>
  );
}
