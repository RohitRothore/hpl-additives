import { csrPrograms } from "@/constants/csr/CSR_LIST";
import CSRSection from "@/page/homePage/CSRSection";
import { ArrowRight } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

export default function CsrPage() {
  return (
    <main className="pb-1">
      <CSRSection className="flex flex-col-reverse !py-8 lg:!py-8 gap-y-8 lg:gap-y-16" />
      <div className="mb-8 container lg:mb-16">
        <section>
          <div className="mb-12 rounded-lg p-4 lg:p-8 bg-gray-200">
            <h4 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Corporate Social Responsibility
            </h4>
            <p className="text-gray-600 text-justify">
              HPL Additives prides itself on its commitment and dedication to
              ensure that it not only fulfills its Corporate Social
              Responsibility but goes above and beyond to do as much as it can
              for the betterment of those less fortunate. HPL Additives has over
              the years provided support to various organizations such as Prayas
              Social Welfare Society, Plan India, PHD Rural Development, Prime
              Minister’s Skill Development Fund etc. Through these
              organizations, HPL has been able to positively impact the lives of
              many women and children by providing them with education,
              launching mobile healthcare drives, financial support, and
              sanitation.
            </p>
            <p className="text-gray-600 text-justify mt-4">
              HPL Additives has now created a separate CSR Trust known as HPL
              Foundation with the mission to ensure quality education,
              healthcare, sanitation and access to clean drinking water to the
              underprivileged communities surrounding our plants and offices
              located in Haryana and Punjab. Under HPL Foundation, we started
              installing RO plants to provide access to clean drinking water,
              building toilets for both men and women to ensure proper hygiene
              and sanitation in over 10 villages that did not have access to
              either.
            </p>
            <p className="text-gray-600 text-justify mt-4">
              Furthermore, prior to this, under HPL Foundation, we have already
              constructed the Pushp Vihar Gurudwara with a Free Diagnostic
              Center (in oratorship with Dr Lal Pathlabs) that will provide the
              underprivileged with free of cost healthcare that includes
              services like X-rays, Ultrasounds, Diagnostic Tests, Dental Care,
              Feminine Care etc.
            </p>
            <p className="text-gray-600 text-justify mt-4">
              Going forward, we are going to continue to serve communities
              around us by ensuring they have access to all the necessary
              services and facilities to better their standard of living. We are
              completely dedicated to ensure that our corporate social
              responsibility goes beyond what is expected of us!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 mb-8 lg:mb-16">
              <p className="text-3xl max-w-md md:text-5xl font-extrabold text-gray-900">
                Providing Access to Clean Drinking Water & Toilets
              </p>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="text-base mb-4">
                “Clean Water Drive” has been launched by the company through its
                charitable trust, HPL Foundation wherein clean drinking water
                facility through installation of RO plants, water coolers and
                other such amenities would be made available in the villages
                near its factories at Faridabad, Ballabgarh and Palwal for the
                underprivileged children, women and men of the villages.
              </p>
              <p>
                Additionally, the company could also construct toilets and
                improve hygiene and sanitization in the schools of the villages,
                apart from their contribution in health and education sector.
              </p>

              <Link
                href="/csr"
                className="mt-4 inline-flex items-center gap-2 bg-theme px-6 py-2 text-white rounded-full font-semibold hover:opacity-90 transition"
              >
                View More
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg p-4 lg:p-8 bg-gray-200 gap-6 lg:gap-8">
            {csrPrograms.map((program, index) => (
              <Link
                key={index}
                href={program.link}
                className="block bg-white rounded-lg hover:scale-105 shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <Image
                  src={program.image}
                  alt={program.alt}
                  width={600}
                  height={345}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="h-1 w-16 bg-theme mb-2"></div>
                  <h3 className="text-lg font-semibold text-theme">
                    {program.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
