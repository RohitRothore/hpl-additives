"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import useHeaderLogic from "./headerLogic";
import Image from "next/image";
import { HEADER } from "@/constants/HEADER";
import Link from "next/link";

const DynamicSidebar = dynamic(() => import("./Sidebar"), {
  loading: () => null,
});

const { LOGO } = HEADER;

function HeaderMobile() {
  const pathname = usePathname();
  const { handleSidebarToggle, handleSidebarClose, navbarOpen } =
    useHeaderLogic();

  const handleToggleClick = () => {
    handleSidebarToggle();
  };

  useEffect(() => {
    handleSidebarClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="flex md:hidden py-2.5 px-4 items-center">
      <Link href="/">
        <Image
          src={LOGO}
          alt="Logo"
          width={162}
          height={60}
          className="w-40 h-14"
        />
      </Link>
      <button
        aria-label="nav-toggle"
        className="absolute right-5 top-5  inline-flex items-center size-6 justify-center rounded-md focus:outline-none"
        onClick={handleToggleClick}
        type="button"
      >
        <div className="absolute left-1/2 top-1/2 block w-8 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-8 -translate-y-2.5 transform bg-current transition duration-500 ease-in-out"
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-8 transform bg-current transition duration-500 ease-in-out"
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-8 translate-y-2.5 transform bg-current transition duration-500 ease-in-out"
          />
        </div>
      </button>
      {navbarOpen && (
        <DynamicSidebar
          handleToggleClick={handleToggleClick}
          navbarOpen={navbarOpen}
        />
      )}
    </div>
  );
}

export default HeaderMobile;
