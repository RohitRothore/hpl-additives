import Image from "next/image";
import Link from "next/link";

import { HEADER } from "@/constants/HEADER";
import { ChevronDown, PhoneCall } from "feather-icons-react";
import { CONTACT_NUMBER } from "@/constants/COMMON";

const { LOGO, MENU } = HEADER;

export default function HeaderDesktop() {
  return (
    <div className="hidden md:flex container py-3 justify-between items-center">
     <Link href='/'>
      <Image
        src={LOGO}
        alt="Logo"
        width={208}
        height={64}
        className="w-52 h-16"
      />
     </Link>
      <div className="text-lg flex font-medium space-x-8">
        {MENU.map(({ children, url, name }) => (
          <div className="relative" key={name}>
            {children ? (
              <div className="group peer flex cursor-pointer items-center gap-2 transition-all hover:text-theme">
                {name}
                <ChevronDown />
              </div>
            ) : (
              <Link className="hover:text-theme transition-colors" href={url}>
                {name}
              </Link>
            )}
            {children?.length && (
              <div className="invisible absolute left-0 top-10 z-10 box-border max-h-[86vh] w-max translate-y-2 transform overflow-hidden opacity-0 drop-shadow transition-all delay-200 hover:visible hover:translate-y-0 hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 peer-hover:opacity-100">
                <div className="no-scrollbar relative box-border max-h-[81vh] gap-4 overflow-y-auto rounded-xl bg-white p-4">
                  {children.map(({ name, url, icon: Icon }) => (
                    <Link
                      key={name}
                      className="group flex items-center rounded-lg py-2 pr-4 transition-all hover:text-theme"
                      href={url}
                    >
                      <Icon className="group-hover:text-theme transition-colors mr-3" />
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link
        className="flex items-center gap-x-3"
        href={`tel:${CONTACT_NUMBER}`}
      >
        <div className="p-2.5 rounded-full bg-theme">
          <PhoneCall className="text-white size-6" />
        </div>
        <p className="text-lg">
          Call Any Time
          <br />
          <span className="font-bold">{CONTACT_NUMBER}</span>
        </p>
      </Link>
    </div>
  );
}
