"use client";

import GraphicalBox from "@/components/graphical/GraphicalBox";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";

const GraphicalSlider = ({ header }) => {
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
    <section className="container mx-auto bg-orange-100 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <h2 className="text-orange-500 text-lg sm:text-xl md:text-2xl border-r-orange-400 border-r-2 pr-2">
          {header}
        </h2>

        <div className="flex items-center gap-1 text-zinc-800">
          <FaChevronRight
            onClick={() => carouselSwitcher(1)}
            className="cursor-pointer bg-white! w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded transition-all duration-300 hover:bg-orange-400"
          />

          <FaChevronLeft
            onClick={() => carouselSwitcher(-1)}
            className="cursor-pointer bg-white! w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded transition-all duration-300 hover:bg-orange-400"
          />

          <Link
            href="/shop"
            className="bg-orange-500 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base transition-all duration-500 hover:bg-orange-600 text-white!"
          >
            مشاهده ی همه
          </Link>
        </div>
      </header>

      <div ref={carouselRef} className="sliderContainer w-full overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 w-max mx-1 sm:mx-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <Link href={`/products/${index + 1}`} key={index}>
              <GraphicalBox
                imgurl="/graphical/Motex-Cover-Image.jpg"
                title="نام محصول گرافیکی"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicalSlider;
