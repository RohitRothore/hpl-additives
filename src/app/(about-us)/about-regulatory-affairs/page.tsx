// Constant for regulatory compliance data
const regulatoryData = {
  bannerTitle: "Regulatory Compliance",
  intro: [
    {
      text: "HPL Additives stands committed to its responsibility towards society. Complies with all regulatory requirements both domestically and Internationally.",
      style: {
        fontFamily: "gothamMedium",
        fontSize: "!text-2xl !font-extrabold",
        color: "text-black",
      },
    },
  ],
  headings: [
    "REACH IN European Union",
    "REACH In Turkey and Korea",
    "USA - The Toxic Substances Control Act (TSCA)",
  ],
  reachDetails: [
    {
      text: "The European Chemicals Regulation (EC No. 1907/2006) on Registration, Evaluation, Authorisation and Restriction of Chemicals entered into force in June 2007. The REACH regulation requires substances manufactured or imported into the European Union, including substances in preparation, in quantities over one metric tonne per year, to be registered unless exempted. The main aims of REACH are to improve the protection of human health and the environment from the risks that can be posed by chemicals.",
      style: {
        fontFamily: "sans-serif",
        fontSize: "text-base",
        color: "text-gray-600",
      },
    },
    {
      text: "REACH makes the industry responsible for assessing and managing the risks posed by chemicals and providing appropriate safety information to their users.",
      style: {
        fontFamily: "sans-serif",
        fontSize: "text-base",
        color: "text-gray-600",
      },
    },
  ],
  commitment: [
    {
      text: "As a market leader worldwide, HPL is fully committed to Regulatory Affairs and the company invests significant resources to ensuring that its products are 100% compliant with all existing global, as well as emerging regional chemical regulations.",
      style: {
        fontFamily: "gothamBook",
        fontSize: "text-sm",
        color: "text-black",
      },
    },
    {
      text: "As a responsible manufacturer of chemicals, HPL Additives has always been attentive to the way chemical substances are used and is thus continuously focused on developing policies that aim to improve the safety and health of people as well as the environment.",
      style: {
        fontFamily: "sans-serif",
        fontSize: "text-base",
        color: "text-gray-600",
      },
    },
    {
      text: "This is why HPL Additives supports the principle of an effective chemicals regulatory system in order to deliver sustainable health and environmental safety benefits.",
      style: {
        fontFamily: "gothamBook",
        fontSize: "text-sm",
        color: "text-black",
      },
    },
  ],
  regulatoryCell: [
    {
      text: "In order to ensure that HPL Additives is well prepared for REACH, a Regulatory Cell is formed to ensure compliance with, and implementation of the regulation. The organisation has registered all of the eligible substances that it exports to the EU.",
      style: {
        fontFamily: "sans-serif",
        fontSize: "text-base",
        color: "text-gray-600",
      },
    },
  ],
  representative: {
    heading: "HPL Additives has appointed an Only:",
    contact: [
      "Representative (OR) in the European Union: REACHLaw Ltd.",
      "Vänrikinkuja 3 JK 21,",
      "FI-02600 Espoo, Finland",
      "Tel.: +358-(0) 9-4123055",
      "e-mail: info@reachlaw.fi",
    ],
    style: {
      fontFamily: "sans-serif",
      fontSize: "text-base",
      color: "text-gray-600",
    },
  },
  registeredProducts: [
    {
      category: "ANTIOXIDANTS",
      items: [
        "KINOX® -10",
        "KINOX® -76",
        "KINOX® -68",
        "KINOX® -30",
        "KINOX® -34",
        "KINOX® -24",
        "KINOX® -98",
      ],
    },
    {
      category: "MODIFIERS",
      items: [
        "KINOX® -10",
        "KINOX® -76",
        "KINOX® -68",
        "KINOX® -30",
        "KINOX® -34",
        "KINOX® -24",
        "KINOX® -98",
      ],
    },
    {
      category: "AZO-INITIATOR",
      items: ["Polyazo®-AZPH"],
    },
  ],
  partnerRegisteredProducts: [
    {
      category: "CROSS LINKING AGENTS",
      items: ["HICHEM®-ADH"],
    },
    {
      category: "SPECIALTY CHEMICALS",
      items: ["HALOCOM®-DBH"],
    },
  ],
  responsibleCare: [
    {
      text: "Responsible Care: Completed TfS & Ecovadis Audits of getting registered under Responsible Care.",
      style: {
        fontFamily: "sans-serif",
        fontSize: "text-base",
        color: "text-gray-600",
      },
    },
  ],
  contact: {
    text: "For more information regarding a specific product/s, please send your request to: ",
    email: "vijay.nagpal@hpladditives.com",
    emailStyle: {
      fontFamily: "gothamMedium",
      fontSize: "text-sm",
      color: "text-black",
    },
  },
};

export default function RegulatoryCompliancePage() {
  return (
    <main className="bg-theme">
      <div className="container py-8 lg:py-16 flex flex-col lg:flex-row justify-between gap-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xl text-white font-medium flex items-center gap-3">
            Regulatory Affairs
            <span className="h-1 w-28 bg-white inline-block" />
          </p>
          <p className="text-3xl md:text-5xl font-extrabold text-white">
            Ensuring Compliance, Supporting Innovation
          </p>
        </div>
        <p className="max-w-2xl text-white text-base">
          At HPL Additives, our Regulatory Affairs team plays a pivotal role in
          aligning our products with global regulatory standards. With deep
          expertise and a proactive approach, we ensure that all our additives
          meet the evolving environmental, health, and safety regulations across
          regions. Our commitment to compliance not only assures product
          integrity but also empowers our customers to innovate confidently in a
          competitive marketplace.
        </p>
      </div>
      <div className="bg-white py-8 lg:py-16">
        <div className="container">
          {regulatoryData.intro.map((item, index) => (
            <p
              key={index}
              className={`text-justify font-medium lg:text-lg ${item.style.color} ${item.style.fontFamily} ${item.style.fontSize}`}
            >
              {item.text}
            </p>
          ))}
          {regulatoryData.headings.map((heading, index) => (
            <h3 key={index} className="text-xl font-bold text-theme mt-6">
              {heading}
            </h3>
          ))}
          {regulatoryData.reachDetails.map((item, index) => (
            <p
              key={index}
              className={`text-justify ${item.style.color} ${item.style.fontFamily} ${item.style.fontSize} mt-4`}
            >
              {item.text}
            </p>
          ))}
          {regulatoryData.commitment.map((item, index) => (
            <p
              key={index}
              className={`text-justify ${item.style.color} ${item.style.fontFamily} ${item.style.fontSize} mt-4`}
            >
              {item.text}
            </p>
          ))}
          {regulatoryData.regulatoryCell.map((item, index) => (
            <p
              key={index}
              className={`text-justify ${item.style.color} ${item.style.fontFamily} ${item.style.fontSize} mt-4`}
            >
              {item.text}
            </p>
          ))}
          <h3 className="text-xl font-bold text-theme mt-6">
            {regulatoryData.representative.heading}
          </h3>
          {regulatoryData.representative.contact.map((line, index) => (
            <p
              key={index}
              className={`text-justify ${regulatoryData.representative.style.color} ${regulatoryData.representative.style.fontFamily} ${regulatoryData.representative.style.fontSize} mt-1`}
            >
              {line}
            </p>
          ))}
          <p className="font-medium mt-4">
            HPL is already REACH registered for the following products:
          </p>
          {regulatoryData.registeredProducts.map((category, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-bold text-theme">
                {category.category}
              </h3>
              <div className="pl-4">
                {category.items.map((item, idx) => (
                  <p key={idx} className="text-gray-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p className="font-medium mt-4">
            The following products have been REACH registered by our partners:
          </p>
          {regulatoryData.partnerRegisteredProducts.map((category, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-bold text-theme">
                {category.category}
              </h3>
              <div className="pl-4">
                {category.items.map((item, idx) => (
                  <p key={idx} className="text-gray-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
          {regulatoryData.responsibleCare.map((item, index) => (
            <p
              key={index}
              className={`text-justify ${item.style.color} ${item.style.fontFamily} ${item.style.fontSize} mt-4`}
            >
              {item.text}
            </p>
          ))}
          <p className="font-medium mt-4">
            {regulatoryData.contact.text}
            <span
              className={`${regulatoryData.contact.emailStyle.color} ${regulatoryData.contact.emailStyle.fontFamily} ${regulatoryData.contact.emailStyle.fontSize}`}
            >
              {regulatoryData.contact.email}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
