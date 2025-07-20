import { ArrowRight } from "feather-icons-react";
import Link from "next/link";

interface SectionHeadlineProps {
  heading: string;
  title: string;
  description: string;
  buttonLink?: string;
  buttonText?: string;
  className?: string;
}

export default function SectionHeadline({
  heading,
  title,
  description,
  buttonLink = '',
  buttonText = '',
  className = '',
}: SectionHeadlineProps) {
  return (
    <div className={`flex px-4 lg:px-0 flex-col lg:flex-row justify-between gap-8 lg:gap-x-20 ${className}`}>
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
        <p className="font-medium">{description}</p>
       {buttonLink && (
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
  );
}
