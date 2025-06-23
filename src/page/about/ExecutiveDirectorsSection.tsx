import { TEAM_DATA } from "@/constants/about/TEAM";
import { Linkedin } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

const { executiveDirectors } = TEAM_DATA;

export function ExecutiveDirectorsSection() {
  return (
    <section
      className="bg-[#8ABF45] relative text-white pt-16 lg:mb-64 pb-16 lg:pb-80"
      id="executive-directors"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Our Team Members{" "}
              <span className="h-1 w-28 bg-white inline-block" />
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold">
              Executive Directors
            </h1>
          </div>
          <p className="max-w-2xl">
            At HPL, our Executive Directors play a pivotal role in shaping the
            digital face of our company. With a clear vision and deep
            understanding of user behaviour, they lead the development of
            intuitive and impactful solutions that align perfectly with business
            goals.
          </p>
        </div>

        <div className="overflow-x-auto lg:absolute -bottom-1/4 mt-10 lg:mt-0 lg:-bottom-[45%] left-1/2 lg:-translate-x-1/2 lg:min-h-[450px] lg:flex items-center justify-center no-scrollbar">
          <div className="grid px-4 lg:px-0 grid-cols-3 h-full lg:ml-10 min-w-max gap-6 lg:gap-12">
            {executiveDirectors.map(({ image, linkedin, name, title }) => (
              <div
                key={name}
                className="rounded-2xl min-w-64 shadow lg:shadow-xl overflow-hidden bg-gray-100 hover:scale-110 transition duration-300 text-center"
              >
                <Image
                  src={image}
                  alt={name}
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover object-top"
                />
                <p className="font-bold text-gray-900 mt-5 mb-1 text-base">
                  {name}
                </p>
                <p className="text-sm text-gray-600 mb-2">{title}</p>
                <Link
                  href={linkedin}
                  target="_blank"
                  className="size-12 rounded-full mx-auto bg-[#0a66c2] mb-6 flex items-center justify-center"
                >
                  <Linkedin />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
