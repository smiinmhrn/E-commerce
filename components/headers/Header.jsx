"use client";

import Social from "./Social";
import Logo from "./Logo";
import { useState } from "react";
import Navbar from "./Navbar";
import Contacts from "./Contacts";

const Header = () => {
  const [logoHover, setLogoHover] = useState(0);

  return (
    <header
      className="container grid grid-cols-[auto_auto_auto] items-center gap-12 w-fit"
      style={{
        marginInline: "auto",
        paddingBlock: "0.5rem",
      }}
    >
      {/* Logo + Social */}
      <div
        className="relative w-fit"
        onMouseEnter={() => setLogoHover(1)}
        onMouseLeave={() => setLogoHover(0)}
      >
        <Logo />
        <Social logoHover={logoHover} />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Contact */}
      <Contacts />
      {/* <Contact /> */}
    </header>
  );
};

export default Header;
