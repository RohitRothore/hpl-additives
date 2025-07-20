import Image from "next/image";

interface BannerWithImageProps {
  image: string;
  title: string;
}

export default function BannerWithImage({
  image,
  title,
}: BannerWithImageProps) {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
        width={1920}
        height={500}
      />
      <p className="absolute text-3xl px-4 lg:text-6xl text-white text-center w-full bottom-1/3 lg:bottom-1/2">
        {title}
      </p>
    </div>
  );
}
