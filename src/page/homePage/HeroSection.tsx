import { Carousel } from "@/components/Carousel";
import { HERO_SETTINGS } from "@/constants/HOME_PAGE";
import Image from "next/image";

export default function HeroSection() {
  const HERO_SLIDES = [
    {
      title: (
        <>
          A Leader in the&nbsp;
          <span className="text-theme">Polymer Additives Industry!</span>
        </>
      ),
      image: "/assets/images/homePage/Banner1.jpg",
    },
    {
      title: (
        <>
          Founded in&nbsp;
          <span className="text-theme">1964</span>
        </>
      ),
      image: "/assets/images/homePage/Banner2.jpg",
    },
    {
      title: (
        <>
          <span className="text-theme">58 Years</span>&nbsp;&amp; Counting
        </>
      ),
      image: "/assets/images/homePage/Banner3.jpg",
    },
    {
      title: (
        <>
          <span className="text-theme">4 Manufacturing Plants</span>&nbsp;in
          India
        </>
      ),
      image: "/assets/images/homePage/Banner4.jpg",
    },
    {
      title: (
        <>
          <span className="text-theme">7 Major Product</span>&nbsp;categories
          Manufactured
        </>
      ),
      image: "/assets/images/homePage/Banner5.jpg",
    },
  ];
  return (
    <Carousel settings={HERO_SETTINGS}>
      {HERO_SLIDES.map(({ title, image }) => (
        <div key={image} className="relative h-[60dvh] ">
          <Image
            src={image}
            alt={image}
            className="w-full h-full object-cover"
            width={1920}
            height={500}
          />
          <p className="absolute text-3xl px-4 lg:text-6xl text-white text-center w-full bottom-1/2">
            {title}
          </p>
        </div>
      ))}
    </Carousel>
  );
}
