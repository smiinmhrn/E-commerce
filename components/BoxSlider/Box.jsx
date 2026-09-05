import Image from "next/image";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const Box = ({ imgurl, title }) => {
  return (
    <article className="pt-1 sm:pt-2 hover:pt-0 transition-all duration-300">
      <div className="sliderItem relative h-64 xs:h-72 sm:h-80 md:h-90 w-48 xs:w-52 sm:w-60 md:w-72 m-1 sm:m-2 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_1px_8px_rgba(0,0,0,0.5)] transition-all duration-300 bg-white">
        <div>
          <Image
            src={imgurl}
            width={288}
            height={160}
            alt="product image"
            className="object-cover w-full h-auto p-2 sm:p-3 rounded-2xl sm:rounded-3xl"
          />
        </div>

        <div>
          <h3 className="m-2 text-sm sm:text-base line-clamp-1">{title}</h3>

          <div className="flex justify-start items-center gap-1 sm:gap-2 m-2 text-xs sm:text-sm">
            <div className="py-1 px-1.5 sm:px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
              زمان
            </div>

            <div className="py-1 px-1.5 sm:px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
              دسته بندی
            </div>
          </div>

          <div className="flex justify-between items-center absolute bottom-5 sm:bottom-7 md:bottom-10 right-0 left-0 px-2">
            <div className="flex justify-center items-center">
              <BiSearchAlt className="text-indigo-600 mr-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />

              <FaRegBookmark className="text-indigo-600 mr-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
            </div>

            <div className="flex gap-1 sm:gap-2 items-center">
              <RiShoppingBag4Fill className="text-indigo-600 mr-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />

              <div className="bg-zinc-500 text-white p-1.5 sm:p-2 text-[10px] sm:text-xs md:text-sm rounded-tr-md rounded-br-md whitespace-nowrap">
                50000 تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Box;
