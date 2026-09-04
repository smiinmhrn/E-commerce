"use client";

import Box from "@/components/boxSlider/Box";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { useRef } from "react";
import Link from "next/link";

const BoxSlider = ({ imgurl, title, header }) => {
  const carouselRef = useRef();

  const carouselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;

      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0,
      );
    }
  };

  return (
    <section className="container mx-auto bg-indigo-200 p-5 rounded-2xl">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h2 className="text-orange-500 text-2xl border-r-orange-400 border-r-2 pr-2">
          {header}
        </h2>

        <div className="flex items-center gap-1 text-zinc-800">
          <FaChevronRight
            onClick={() => {
              carouselSwitcher(1);
            }}
            className="cursor-pointer bg-white! transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded"
          />

          <FaChevronLeft
            onClick={() => {
              carouselSwitcher(-1);
            }}
            className="cursor-pointer bg-white! transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded"
          />

          <Link
            href="/shop"
            className="bg-orange-500 px-4 py-2 rounded-md transition-all duration-500 hover:bg-orange-600 text-white!"
          >
            مشاهده ی همه
          </Link>
        </div>
      </header>

      {/* Slider */}
      <div ref={carouselRef} className="sliderContainer w-full overflow-hidden">
        <div className="flex items-center gap-4 mt-10 w-max mx-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <Link href={`/products/${index + 1}`} key={index}>
              <Box imgurl={imgurl} title={title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxSlider;
