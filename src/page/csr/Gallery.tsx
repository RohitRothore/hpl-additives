"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  csr: {
    gallery: { src: string; alt: string }[];
  };
}

export default function Gallery({ csr }: GalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);
  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {csr.gallery.map((image, index) => (
          <div key={index} className="relative hover:scale-105 transition-transform duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => openLightbox(image.src)}
            />
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-4xl w-full">
            <span
              className="absolute top-4 right-4 text-4xl cursor-pointer text-theme hover:text-theme/95 rounded-full px-2.5 border-2 border-theme"
              onClick={closeLightbox}
            >
              ×
            </span>
            <Image
              src={lightboxImage}
              alt="Lightbox"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
