import { TEAM_DATA } from "@/constants/about/TEAM";
import { TEAM_SECTION } from "@/constants/HOME_PAGE";
import Image from "next/image";

export function FounderSection() {
  const { name, title, image, bio } = TEAM_DATA.founder;
  const { heading, title: sectionTitle, description } = TEAM_SECTION;
  return (
    <section className="bg-theme pt-16 space-y-16" id="founder">
      <div className="container flex flex-col lg:flex-row justify-between gap-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xl text-white font-medium flex items-center gap-3">
            {heading}
            <span className="h-1 w-28 bg-white inline-block" />
          </p>
          <p className="text-3xl md:text-5xl font-extrabold text-white">
            {sectionTitle}
          </p>
        </div>
        <p className="max-w-2xl text-white text-base">{description}</p>
      </div>
      <div className="bg-gray-100 py-8 lg:py-16">
        <div className="container flex flex-col lg:flex-row gap-x-20 lg:items-center">
          <Image
            src={image}
            alt={name}
            width={250}
            height={300}
            className="rounded-md object-cover"
          />

          <div>
            <p className="font-bold text-xl md:text-4xl text-gray-800">{name}</p>
          <p className="text-green-800 lg:text-xl font-semibold my-4">{title}</p>
          </div>
        </div>
        <div className="space-y-2 text-gray-800 text-sm md:text-base max-w-none container mt-8">
          {bio.split("\n\n").map((para, idx) => (
            <p key={idx} className="text-justify leading-relaxed">
              {para}
            </p>
          ))}
      </div>
        </div>
    </section>
  );
}
