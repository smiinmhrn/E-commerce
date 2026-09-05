"use client";

import { useState } from "react";

import Logo from "@/components/headers/Logo";
import Social from "@/components/headers/Social";
import Navbar from "@/components/headers/Navbar";
import Contacts from "@/components/headers/Contacts";
import User from "@/components/headers/User";

const Header = () => {
  const [logoHover, setLogoHover] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative mx-auto container mt-3 sm:mt-4 px-2 sm:px-3 2xl:px-0">
      <div className="flex 2xl:hidden items-center justify-between gap-4">
        <div
          className="relative shrink-0"
          onMouseEnter={() => setLogoHover(1)}
          onMouseLeave={() => setLogoHover(0)}
        >
          <Logo />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <User />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg bg-zinc-200 text-lg sm:text-xl md:text-2xl transition-colors duration-300 hover:bg-zinc-300 shrink-0"
            aria-label="باز کردن منو"
          >
            <span
              className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
            >
              ☰
            </span>
          </button>
        </div>
      </div>

      <div
        className={`2xl:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-250 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
      >
        <div className="flex flex-col gap-5 sm:gap-6 bg-white rounded-2xl p-3 sm:p-5 shadow-[0px_2px_15px_rgba(0,0,0,0.12)]">
          <Navbar mobile onClose={() => setMenuOpen(false)} />

          <Contacts showUser={false} />

          <Social logoHover={1} />
        </div>
      </div>

      <div className="hidden 2xl:grid grid-cols-[auto_1fr_auto] items-end gap-6 2xl:gap-10 py-2">
        <div
          className="relative w-fit shrink-0"
          onMouseEnter={() => setLogoHover(1)}
          onMouseLeave={() => setLogoHover(0)}
        >
          <Logo />

          <Social logoHover={logoHover} />
        </div>

        <div className="flex justify-center min-w-0">
          <Navbar />
        </div>

        <div className="shrink-0">
          <Contacts />
        </div>
      </div>
    </header>
  );
};

export default Header;
