import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightCircle } from "feather-icons-react";
import { OUR_PRODUCTS_INFO } from "@/constants/HOME_PAGE";

const { heading, title, description, points, buttonLink, buttonText, image } =
  OUR_PRODUCTS_INFO;

export default function OurProducts() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-14 lg:py-28">
      <svg
        className="absolute top-0 z-10 left-0 w-full rotate-180"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C400,0 1000,0 1440,100 L1440,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>

      <div className="container flex flex-col lg:flex-row gap-12 px-4">
        {/* Left Content */}
        <div className="space-y-6 lg:ml-10">
          <p className="flex items-center gap-3 text-2xl font-semibold text-gray-600">
            {heading}
            <span className="block h-1 w-28 bg-theme" />
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
            {title}
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">{description}</p>

          <ul className="space-y-4 pt-4">
            {points.map(({ name, subLabel }) => (
              <li key={name} className="flex gap-3">
                <ArrowRightCircle className="mt-1 shrink-0 stroke-[3] stroke-theme" />
                <div className="leading-snug">
                  <p className="font-bold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-600">{subLabel}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href={buttonLink}
            className="mt-6 inline-flex w-max items-center gap-3 rounded-full bg-theme px-7 py-3 font-semibold text-white transition hover:opacity-90"
          >
            {buttonText} <ArrowRight size={20} />
          </Link>
        </div>

        {/* Right: Single Image */}
          <Image
            src={image}
            alt="Our Products"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain mr-10 2xl:mr-0"
          />
      </div>
      <svg
        className="absolute bottom-0 z-10 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C400,0 1000,0 1440,100 L1440,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
