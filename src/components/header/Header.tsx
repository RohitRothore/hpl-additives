"use client";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {

  return (
    <header>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}
