import { TEAM_DATA } from "@/constants/about/TEAM";
import { Linkedin } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

export function CompanyManagementSection() {
  const { blurb, image, linkedin, name, title } = TEAM_DATA.management;
  return (
    <section className="container py-8 lg:py-16 mb-8 lg:mb-16 rounded-2xl bg-gray-100" id="company-management">
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 items-center">
        <div className="rounded-2xl w-80 shadow lg:shadow-xl overflow-hidden bg-gray-100 hover:scale-110 transition duration-300 text-center">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-60 object-cover object-top"
          />
          <p className="font-bold text-gray-900 mt-5 mb-1 text-base">{name}</p>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <Link
            href={linkedin}
            target="_blank"
            className="size-12 rounded-full mx-auto bg-[#0a66c2] mb-6 flex items-center justify-center"
          >
            <Linkedin className="stroke-white" />
          </Link>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800">
            Company Management
          </h2>
          <p className="text-gray-700 max-w-2xl lg:text-lg leading-relaxed">
            {blurb}
          </p>
        </div>
      </div>
    </section>
  );
}
