import { ABOUT_US_INFO } from "@/constants/HOME_PAGE";
import { ArrowRight, ArrowRightCircle } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

const { buttonLink, buttonText, description, heading, image, points, title } =
  ABOUT_US_INFO;

export default function AboutUs() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10 lg:gap-20 py-8 lg:py-16">
      <Image
        src={image}
        alt="About Us"
        width={800}
        height={600}
        className="w-full object-cover"
      />
      <div className="space-y-6">
        <div>
          <p className="text-2xl font-medium text-gray-600 flex items-center gap-2">
            {heading}
            <span className="w-28 h-1 ml-3 bg-theme" />
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        <div className="w-28 h-1 bg-theme" />
        <ul className="space-y-2 text-lg font-semibold text-gray-800">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <ArrowRightCircle className="stroke-theme" />
              {point}
            </li>
          ))}
        </ul>

        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 bg-theme text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          {buttonText} <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
