"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import { Carousel } from "@/components/Carousel";
import SectionHeadline from "@/components/common/SectionHeadline";

const events = [
  {
    title: "PLAST INDIA",
    sections: [
      {
        subtitle: "New Delhi, India (2023)",
        images: [
          "/assets/images/events/p231.jpg",
          "/assets/images/events/p232.jpg",
        ],
        carouselImages: [
          "/assets/images/events/p231.jpg",
          "/assets/images/events/p232.jpg",
          "/assets/images/events/p233.jpg",
          "/assets/images/events/p234.jpg",
        ],
      },
      {
        subtitle: "Gandhinagar, India (2018)",
        images: [
          "/assets/images/events/big03.jpg",
          "/assets/images/events/big06.jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01.jpg",
          "/assets/images/events/big02.jpg",
          "/assets/images/events/big03.jpg",
          "/assets/images/events/big04.jpg",
          "/assets/images/events/big05.jpg",
          "/assets/images/events/big06.jpg",
          "/assets/images/events/big07.jpg",
          "/assets/images/events/big08.jpg",
          "/assets/images/events/big09.jpg",
          "/assets/images/events/big10.jpg",
        ],
      },
      {
        subtitle: "New Delhi, India (2012)",
        images: [
          "/assets/images/events/big02(1).jpg",
          "/assets/images/events/big04(1).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big02(1).jpg",
          "/assets/images/events/big04(1).jpg",
          "/assets/images/events/big05(1).jpg",
          "/assets/images/events/big07(1).jpg",
          "/assets/images/events/big09(1).jpg",
          "/assets/images/events/big10(1).jpg",
          "/assets/images/events/big12(1).jpg",
          "/assets/images/events/big13(1).jpg",
          "/assets/images/events/big18.jpg",
        ],
      },
      {
        subtitle: "New Delhi, India (2010)",
        images: [
          "/assets/images/events/plastindia2010.png",
          "/assets/images/events/big08(2).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(2).jpg",
          "/assets/images/events/big02(2).jpg",
          "/assets/images/events/big03(2).jpg",
          "/assets/images/events/big04(2).jpg",
          "/assets/images/events/big06(2).jpg",
          "/assets/images/events/big07(2).jpg",
          "/assets/images/events/big08(2).jpg",
          "/assets/images/events/big12(2).jpg",
          "/assets/images/events/big16(2).jpg",
          "/assets/images/events/big21.jpg",
          "/assets/images/events/big26.jpg",
          "/assets/images/events/big28.jpg",
        ],
      },
    ],
  },
  {
    title: "K SHOW",
    sections: [
      {
        subtitle: "Dusseldorf, Germany (2019)",
        images: [
          "/assets/images/events/kshow2022a.jpeg",
          "/assets/images/events/kshow2022b.jpeg",
        ],
        carouselImages: [
          "/assets/images/events/kshow2022a.jpeg",
          "/assets/images/events/kshow2022b.jpeg",
          "/assets/images/events/kshow2022c.jpeg",
          "/assets/images/events/kshow2022d.jpeg",
          "/assets/images/events/kshow2022e.jpeg",
          "/assets/images/events/kshow2022f.jpeg",
        ],
      },
      {
        subtitle: "Dusseldorf, Germany (2016)",
        images: [
          "/assets/images/events/big133.jpg",
          "/assets/images/events/big144.jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(3).jpg",
          "/assets/images/events/big144.jpg",
          "/assets/images/events/big16.jpg",
          "/assets/images/events/big144.jpg",
          "/assets/images/events/big15(1).jpg",
          "/assets/images/events/big16(3).jpg",
          "/assets/images/events/big17.jpg",
          "/assets/images/events/big18(1).jpg",
          "/assets/images/events/big19.jpg",
          "/assets/images/events/big20.jpg",
        ],
      },
      {
        subtitle: "Dusseldorf, Germany (2013)",
        images: [
          "/assets/images/events/big04(4).jpg",
          "/assets/images/events/big06(4).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(4).jpg",
          "/assets/images/events/big02(4).jpg",
          "/assets/images/events/big03(4).jpg",
          "/assets/images/events/big04(4).jpg",
          "/assets/images/events/big06(4).jpg",
          "/assets/images/events/big07(4).jpg",
          "/assets/images/events/big08(4).jpg",
          "/assets/images/events/big10(3).jpg",
          "/assets/images/events/big11.jpg",
          "/assets/images/events/big14(2).jpg",
          "/assets/images/events/big15(1).jpg",
          "/assets/images/events/big16(3).jpg",
          "/assets/images/events/big17(1).jpg",
          "/assets/images/events/big18(2).jpg",
        ],
      },
      {
        subtitle: "Dusseldorf, Germany (2010)",
        images: [
          "/assets/images/events/big03(5).jpg",
          "/assets/images/events/big05(3).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(4).jpg",
          "/assets/images/events/big02(5).jpg",
          "/assets/images/events/big03(5).jpg",
          "/assets/images/events/big04(5).jpg",
          "/assets/images/events/big05(3).jpg",
          "/assets/images/events/big06(4).jpg",
          "/assets/images/events/big07(5).jpg",
          "/assets/images/events/big08(4).jpg",
          "/assets/images/events/big10(3).jpg",
        ],
      },
    ],
  },
];

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = ({
    images,
    title,
  }: {
    images: string[];
    title: string;
  }) => {
    setSelectedImages(images);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setModalTitle("");
  };

  return (
    <>
      <section className="growthAdditivesBanner">
        <div>
          <Image
            src="/assets/images/events/hplevent2023.jpg"
            alt="Growth Additives Banner"
            width={1920}
            height={400}
            className="w-full"
          />
        </div>
      </section>
      <SectionHeadline
          description="At HPL Additives, our presence at global events and trade shows reflects our commitment to innovation, collaboration, and excellence These platforms allow us to engage with industry leaders, share breakthroughs, and build lasting relationships that drive progress in the chemical and additive sectors"
          heading="Our Events"
          title="Showcasing Innovation, Strengthening Connections."
          className="my-8 container lg:my-16"
        />
      <div className="container bg-gray-200 rounded mb-8 lg:mb-16 py-12">
        {events.map((event, index) => (
          <div key={index}>
            <div className="plastheading text-center">
              <h4 className="text-2xl lg:text-4xl text-theme font-bold">
                {event.title}
              </h4>
            </div>
            {event.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="mt-8 border-b border-gray-300 pb-12"
              >
                <p className="text-xl mt-16 font-semibold">
                  {section.subtitle}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                  {section.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="rounded-lg hover:scale-105 transition duration-300 overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${event.title} ${section.subtitle}`}
                        width={400}
                        height={300}
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition duration-300 size-full"
                    onClick={() =>
                      openModal({
                        images: section.carouselImages,
                        title: section.subtitle,
                      })
                    }
                  >
                    <div className="size-full relative">
                      <Image
                        src={section.carouselImages[2] || section.images[0]}
                        alt={`${event.title} ${section.subtitle}`}
                        width={400}
                        height={300}
                        className="size-full object-cover"
                      />
                      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-70 font-semibold transition-opacity">
                        <div className="text-white text-lg">View More.....</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        title={modalTitle}
        size="md"
        className="max-w-[95vw] lg:max-w-[60vw]"
        cancelHandler={closeModal}
      >
        <Carousel settings={carouselSettings}>
          {selectedImages.map((img, index) => (
            <div key={index} className="max-h-[80vh]">
              <Image
                src={img}
                alt={`${modalTitle} image ${index + 1}`}
                width={600}
                height={400}
                className="size-full object-contain"
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </>
  );
}
