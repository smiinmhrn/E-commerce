"use client";

import Link from "next/link";
import { useState } from "react";

import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

const Social = ({ logoHover }) => {
  const [hover, setHover] = useState(0);

  const isVisible = logoHover === 1 || hover === 1;

  return (
    <div
      onMouseEnter={() => setHover(1)}
      onMouseLeave={() => setHover(0)}
      className={`
        flex
        justify-around
        items-center
        absolute
        left-0
        right-0
        z-20
        transition-all
        duration-500
        ${isVisible ? "top-full" : "top-[70%]"}
      `}
      style={{
        padding: "0.5rem",
      }}
    >
      <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="text-indigo-500 transition-colors duration-300 hover:text-orange-500 text-[1.5rem]" />
      </Link>

      <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle className="text-indigo-500 transition-colors duration-300 hover:text-orange-500 text-[1.7rem]" />
      </Link>

      <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-indigo-500 transition-colors duration-300 hover:text-orange-500 text-[1.6rem]" />
      </Link>
    </div>
  );
};

export default Social;
