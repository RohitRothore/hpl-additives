'use client';

import { Ref } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  settings: object;
  style?: string;
  carouselRef?: Ref<Slider>;
}

function Carousel({ children, className = '', settings, style = '', carouselRef = null }: CarouselProps) {
  return (
    <Slider ref={carouselRef} {...settings} className={`z-[1] ${className} ${style}`}>
      {children}
    </Slider>
  );
}

export default Carousel;
