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
      className={`flex justify-around items-center transition-all duration-500 md:absolute md:left-0 md:right-0 md:z-20 ${isVisible ? "md:top-full" : "md:top-[70%]"} static w-full md:w-auto md:p-2`}
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
