import Banner from "@/components/Banner";
import ContactForm from "@/page/contactUs/form";
import Link from "next/link";

// Constant for office data
const officeData = {
  globalOffices: [
    {
      country: "USA",
      address:
        "High Polymer Labs, Inc. 21, Sagamore Lane, Dix Hills, NY 11746, USA",
      mobile: "+1 516 884 7095",
      email: "amar.singh@hpladditives.com",
    },
    {
      country: "CHINA",
      address:
        "HPL Additives Ltd. RM 403, Block 26, Diecuiyuan, HuaNan, Biguiyuan, Nancun Town, Panyu, Guangzhou City, 511440, P.R. China",
      mobile: null,
      email: null,
    },
  ],
  indiaOffices: [
    {
      city: "KOLKATA",
      address: "515 Krishna, 224 A J C Bose Road, Kolkata 700017, India",
    },
    {
      city: "MUMBAI",
      address:
        "802 Sharda Chambers, 15 New Marine Lines, Mumbai 400 020, India",
    },
    {
      city: "Faridabad",
      address: "12/3 Mathura Road, NH2, Sector 27D, Faridabad, Haryana 121003",
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="">
      <Banner title="Contact Us" />
      <ContactForm />
      <div className="container py-8 lg:py-16">
          <div className="flex items-center justify-center mb-2">
            <p className="text-3xl font-bold mb-8 border-b-2 pb-2 border-theme max-h-min text-theme">
            Global <span className="text-gray-600">Offices</span>
          </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {officeData.globalOffices.map((office, index) => (
            <div key={index} className="border-2 border-theme/50 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
              <h3 className="text-xl font-semibold text-theme mb-2">
                {office.country}
              </h3>
              <p className="text-gray-600">{office.address}</p>
              {office.mobile && (
                <p className="text-gray-600 mt-2">
                  <strong>Mobile:</strong> {office.mobile}
                </p>
              )}
              {office.email && (
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <Link
                    href={`mailto:${office.email}`}
                    className="text-gray-600 hover:underline"
                  >
                    {office.email}
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
        <section className="py-12 mt-4">
          <div className="flex items-center justify-center">
            <p className="text-3xl font-bold mb-8 border-b-2 pb-2 border-theme max-h-min text-theme">
            India <span className="text-gray-600">Offices</span>
          </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeData.indiaOffices.map((office, index) => (
              <div key={index} className="border-2 border-theme/50 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
                <h3 className="text-xl font-semibold text-theme mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600">{office.address}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="lg:pt-12 pt-4">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.091266737094!2d77.3029731!3d28.4788595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc093ae899affd4a3!2sVatika%20Mindscapes!5e0!3m2!1sen!2sin!4v1602671532733!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              className="rounded-lg"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
