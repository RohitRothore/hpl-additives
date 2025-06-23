"use client";

import { BLOG_SECTION } from "@/constants/HOME_PAGE";
import { ArrowRight } from "feather-icons-react";
import Link from "next/link";

export default function PostSection() {
  const { heading, title, description, buttonText, buttonLink, posts } =
    BLOG_SECTION;

  return (
    <section className="bg-[#f4f4f4] py-16 space-y-10">
      <div className="container space-y-4 md:space-y-0 md:flex justify-between items-start md:items-center">
        <div>
          <p className="text-xl font-medium text-gray-600 flex items-center gap-2">
            {heading}
            <span className="w-24 h-1 bg-theme" />
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 max-w-xl leading-tight">
            {title}
          </h2>
        </div>
        <div className="text-right space-y-3 md:ml-auto">
          <p className="text-gray-600 max-w-sm">{description}</p>
          <Link
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-theme text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            {buttonText}
            <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar">
        <div className="container grid grid-cols-4 min-w-max lg:min-w-min gap-6">
          {posts.map(({ youtubeId, title, link }) => (
            <div
              key={youtubeId}
              className="bg-white rounded-2xl overflow-hidden max-w-2xs lg:max-w-full shadow-2xl hover:scale-110 transition-transform duration-300 flex flex-col"
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-4 flex flex-col flex-1 justify-between space-y-4">
                <p className="text-lg font-semibold text-gray-800">{title}</p>
                <Link
                  href={link}
                  className="inline-flex items-center gap-2 bg-theme text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition w-fit"
                >
                  View Post
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
