"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderFour = () => {
  return (
    <main>
      <section className="container mx-auto py-15">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination
          autoplay={{
            delay: 3000,
          }}
          scrollbar={{
            draggable: true,
          }}
        >
          <SwiperSlide>
            <div className=" flex items-center justify-center">
              <Image
                src={"/slider/slide1.jpg"}
                className="rounded-lg object-cover"
                width={1320}
                height={310}
                alt="slides"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" flex items-center justify-center">
              <Image
                src={"/slider/slide2.jpg"}
                className="rounded-lg object-cover"
                width={1320}
                height={310}
                alt="slides"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" flex items-center justify-center">
              <Image
                src={"/slider/slide3.jpg"}
                className="rounded-lg object-cover"
                width={1320}
                height={310}
                alt="slides"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default SliderFour;
