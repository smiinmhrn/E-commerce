"use client";

import Social from "./Social";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [logoHover, setLogoHover] = useState(0);

  return (
    <header
      className="container"
      style={{
        marginInline: "auto",
        paddingBlock: "0.5rem",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="relative">
          <Logo
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
          />

          <Social logoHover={logoHover} />
        </div>
      </div>
    </header>
  );
};

export default Header;
