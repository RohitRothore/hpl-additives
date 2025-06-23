import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRightCircle,
} from "feather-icons-react";
import { JSX } from "react";

import { FOOTER_LINKS } from "@/constants/FOOTER";
import { HEADER } from "@/constants/HEADER";
const { LOGO } = HEADER;

const ICONS: Record<string, JSX.Element> = {
  Facebook: <Facebook />,
  Twitter: <Twitter />,
  Instagram: <Instagram />,
  Linkedin: <Linkedin />,
};

export default function Footer() {
  const { contact, socialLinks, pages, certificates } = FOOTER_LINKS;

  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="container flex flex-col lg:flex-row justify-between gap-10">
        <div className="space-y-6">
          <Link href="/" >
            <Image
              src={LOGO}
              alt="Logo"
              width={208}
              height={64}
              className="w-52 h-16 mb-6"
            />
          </Link>
          <Link
            href={`tel:${contact.phone}`}
            className="flex items-center hover:text-theme gap-3"
          >
            <Phone className="w-5 h-5" />
            <span>{contact.phone}</span>
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="flex items-center hover:text-theme gap-3"
          >
            <Mail className="w-5 h-5" />
            <span>{contact.email}</span>
          </Link>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ className, icon, url }) => (
              <Link
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`size-12 rounded-full hover:scale-110 ${className} flex items-center justify-center transition`}
              >
                {ICONS[icon]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-gray-200 font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            {pages.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  className="hover:text-theme group transition text-gray-300 text-lg flex gap-x-2"
                >
                  <ArrowRightCircle className="stroke-gray-300 group-hover:stroke-theme size-5 mt-1" />{" "}
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-3xs">
          <h3 className="text-xl text-gray-200 font-semibold mb-4">
            Certificates
          </h3>
          <ul className="space-y-4 text-gray-300  border-gray-600">
            {certificates.map((cert) => (
              <li className="border-b pb-4 w-full min-w-max" key={cert}>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
