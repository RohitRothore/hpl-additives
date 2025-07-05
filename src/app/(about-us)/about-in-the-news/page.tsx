"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import { useState } from "react";
import { X } from "feather-icons-react";
import { isMobile } from "@/constants/COMMON";
import { downloadPDF } from "@/utils/downloadPDF";

const newsItems = [
  {
    title: "Celebrating the 57th foundation day at HPL Additives!",
    description:
      "Unveiling the statue of our founding father, Late Mr. Harcharan Singh at the HPL Additives Plant Site",
    image: {
      src: "/assets/images/news/Celebrating the 57th foundation day at HPL Additives!.jpg",
      alt: "1",
    },
    pdf: "/assets/images/news/Celebrating the 57th foundation day at HPL Additives!.pdf",
  },
  {
    title: "In Conversation with the Economic Times Polymers",
    description:
      "Investing in the future: Umesh Anand, Managing Director, HPL Additives Limited talks to us about his company and its focus on innovation and sustainability.",
    image: {
      src: "/assets/images/news/polymers.jpg",
      alt: "endothermic",
    },
    pdf: "/assets/images/news/polymers.pdf",
  },
  {
    title: "Celebrating the National Safety Week Across All Plant Sites",
    description:
      "Creating awareness on the importance of safety and ensuring requisite safety measures at all our sites. Safety has always been a core value of HPL Additives and the organisation leaves no stone unturned in ensuring utmost safety across its sites.",
    image: {
      src: "/assets/images/news/Celebrating the National Safety Week at All Sites.jpg",
      alt: "National Safety Week",
    },
    pdf: "/assets/images/news/Celebrating the National Safety Week Across All Plant Locations.pdf",
  },
  {
    title: "Exhibition of Safety & Fire-Fighting Equipment at All Sites",
    description:
      "The first activity was an exhibition of the various safety and fire-fighting equipment used at all sites in times of emergencies. Section-wise competition for best team of firefighters.",
    image: {
      src: "/assets/images/news/Exhibition of safety & fire-fighting equipment at all sites.jpg",
      alt: "Fire safety exhibition",
    },
    pdf: "/assets/images/news/Exhibition of safety & fire-fighting equipment at all sites.pdf",
  },
  {
    title: "Celebrating World Environment Day!",
    description:
      "Like every year, despite the lockdown, HPL Additives made it a point to show its commitment to the planet by observing World Environment Day at the HPLA-D and HPLA-B plant sites on June 5, 2021, in accordance with this year’s theme.",
    image: {
      src: "/assets/images/news/Celebrating The World Environment Day!.jpg",
      alt: "World Environment Day",
    },
    pdf: "/assets/images/news/Celebrating The World Environment Day!.pdf",
  },
  {
    title: "Sponsoring the 12th FIA JCB Annual Golf Tournament 2021",
    description:
      "HPL Additives was proud to sponsor the 12th FIA JCB Annual Golf Tournament in April 2024, held at the Aravali Golf Club in Faridabad, India. The event was inaugurated by Mr. OP Singh, Commissioner of Police, Faridabad, in the presence of Mr. BR Bhatti, President, Faridabad Industries Association. The tournament saw participation from 70 avid golfers across Faridabad who came together for this family-oriented event.",
    image: {
      src: "/assets/images/news/Sponsoring the 12th FIA JCB Annual Golf Tournament 2021.jpg",
      alt: "Golf tournament sponsorship",
    },
    pdf: "/assets/images/news/Sponsoring the 12th FIA JCB Annual Golf Tournament 2021.pdf",
  },
  {
    title: "Economic Times India Leadership Council",
    description:
      "In recognition of his contribution to the industry, Mr. Umesh Anand was nominated to be part of The Economic Times India Leadership Council. The Economic Times India Leadership Council (ILC) is India’s most exclusive peer group initiative that brings together a select group of senior business leaders from across India Inc through a multi-sectoral representation. As a membership-based platform with access reserved only for the CEOs and MDs from Corporations, the Council has a two-pronged objective of enabling “Change” through clearly defined agendas and task-forces; and indeed to “Grow” the Leadership in the country through unique learnings and interactions. As an endeavour to ascertain holistic growth for members and their organisations, ILC offers unique opportunities for business expansion through global outreach programs; knowledge sharing and enhancement avenues; mentorship sessions with India’s senior industry prophets; superlative networking sessions, and experiences of a lifetime where the participation is only by the crème-de-la-crème of the Indian business fraternity.",
    image: {
      src: "/assets/images/news/economic-times-india-leadership-council.jpg",
      alt: "Economic Times India Leadership Council",
    },
    pdf: null,
  },
];

export default function NewsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const openModal = (pdf: string) => {
    setSelectedPdf(pdf);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPdf(null);
    setIsModalOpen(false);
  };
  const handleViewPdf = (pdfUrl: string) => {
    if (isMobile) {
      downloadPDF(pdfUrl);
    } else {
      openModal(pdfUrl);
    }
  };

  return (
    <main className="bg-gray-100">
      <Banner title="Latest News" />
      <div className="container py-8 lg:py-16">
        <div className="space-y-8 lg:space-y-12">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl overflow-hidden"
            >
              {news.pdf ? (
                <button
                  onClick={() => handleViewPdf(news.pdf)}
                  className="flex flex-col hover:cursor-pointer gap-4 md:flex-row w-full text-left"
                >
                  <Image
                    src={news.image.src}
                    alt={news.image.alt}
                    width={400}
                    height={250}
                    className="w-auto lg:min-h-80 h-full object-cover"
                  />
                  <div className="md:w-2/3 p-4">
                    <h5 className="text-lg font-bold text-theme">
                      {news.title}
                    </h5>
                    <div className="h-1 w-16 bg-theme my-2"></div>
                    <h6 className="text-gray-600">{news.description}</h6>
                  </div>
                </button>
              ) : (
                <div className="flex flex-col gap-4 md:flex-row">
                  <Image
                    src={news.image.src}
                    alt={news.image.alt}
                    width={400}
                    height={250}
                    className="h-full w-auto lg:min-h-96 object-cover"
                  />
                  <div className="md:w-2/3 p-4">
                    <h5 className="text-lg font-bold text-theme">
                      {news.title}
                    </h5>
                    <div className="h-1 w-16 bg-theme my-2"></div>
                    <h6 className="text-gray-600">{news.description}</h6>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="size-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3.5 hover:cursor-pointer hover:bg-gray-600 rounded-full transition duration-200 p-1.5 right-32 text-white"
            >
              <X size={20} />
            </button>
            <embed
              width="100%"
              height="100%"
              src={selectedPdf || ""}
              type="application/pdf"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
