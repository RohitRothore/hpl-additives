import { CSR_SECTION } from "@/constants/HOME_PAGE";
import { ArrowRight } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

const { heading, title, description, image, buttonText, buttonLink } =
  CSR_SECTION;

interface CSRSectionProps {
  className?: string;
}

export default function CSRSection({ className }: CSRSectionProps) {
  return (
    <section className={`container py-14 lg:py-24 space-y-12 ${className}`}>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-2xl text-gray-600 font-medium flex items-center gap-3">
            {heading}
            <span className="h-1 w-28 bg-theme inline-block" />
          </p>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-900">
            {title}
          </p>
        </div>
        <div className="max-w-2xl text-gray-700 text-lg leading-relaxed">
          <p className="text-base">{description}</p>
          {!className && (
            <Link
              href={buttonLink}
              className="mt-4 inline-flex items-center gap-2 bg-theme px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition"
            >
              {buttonText}
              <ArrowRight size={20} />
            </Link>
          )}
        </div>
      </div>

      <Image
        src={image}
        alt="CSR Banner"
        width={900}
        height={600}
        className="w-full h-auto"
      />
    </section>
  );
}
