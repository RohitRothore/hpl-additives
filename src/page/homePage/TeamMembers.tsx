import { TEAM_SECTION } from "@/constants/HOME_PAGE";
import { ArrowRight } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

const { heading, title, description, buttonLink, buttonText, members } =
  TEAM_SECTION;

export default function TeamMembers() {
  return (
    <section className="lg:container py-14 lg:py-20 space-y-12">
      <div className="flex px-4 lg:px-0 flex-col lg:flex-row justify-between gap-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xl text-gray-600 font-medium flex items-center gap-3">
            {heading}
            <span className="h-1 w-28 bg-theme inline-block" />
          </p>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-900">
            {title}
          </p>
        </div>
        <div className="max-w-2xl text-gray-700 text-lg leading-relaxed">
          <p className="text-base">{description}</p>
          <Link
            href={buttonLink}
            className="mt-4 inline-flex items-center gap-2 bg-theme px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition"
          >
            {buttonText}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

     <div className="overflow-x-auto lg:min-h-[400px] lg:flex items-center justify-center no-scrollbar">
       <div className="grid px-4 lg:px-0 grid-cols-5 h-full min-w-max gap-6">
        {members.map(({ name, role, image }) => (
          <div
            key={name}
            className="rounded-2xl shadow lg:shadow-xl overflow-hidden bg-gray-100 hover:scale-110 transition duration-300 text-center"
          >
            <Image
              src={image}
              alt={name}
              width={400}
              height={400}
              className="w-full h-60 object-cover object-top"
            />
            <p className="font-bold text-gray-900 mt-5 mb-1 text-base">{name}</p>
            <p className="text-sm text-gray-600 mb-8">{role}</p>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}
