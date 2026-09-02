"use client";

import Social from "./Social";
import Logo from "./Logo";
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [logoHover, setLogoHover] = useState(0);

  return (
    <header
      className="container flex flex-row items-center gap-12"
      style={{
        marginInline: "auto",
        paddingBlock: "0.5rem",
      }}
    >
      {/* Logo + Social */}
      <div
        className="relative"
        onMouseEnter={() => setLogoHover(1)}
        onMouseLeave={() => setLogoHover(0)}
      >
        <Logo />

        <Social logoHover={logoHover} />
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
