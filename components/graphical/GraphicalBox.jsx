import Image from "next/image";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { FaFileDownload, FaRegBookmark } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

const GraphicalBox = ({ imgurl, title }) => {
  return (
    <article className="pt-1 sm:pt-2 hover:pt-0 transition-all duration-300">
      <div className="sliderItem relative h-80 sm:h-95 md:h-115 w-48 sm:w-60 md:w-72 m-1 sm:m-2 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.5)] bg-white">
        <div>
          <Image
            src={imgurl}
            width={288}
            height={160}
            alt="product image"
            className="object-cover w-full h-auto p-2 sm:p-3 rounded-2xl sm:rounded-3xl"
          />
        </div>

        <h3 className="font-bold text-xs sm:text-sm md:text-base truncate px-3 sm:px-4 mb-2 sm:mb-3 line-clamp-1">
          {title}
        </h3>

        <div className="flex justify-start flex-col px-3 sm:px-4 gap-2 sm:gap-3">
          <div className="flex justify-between items-center w-full gap-2">
            <div className="flex justify-start items-center gap-1 sm:gap-2">
              <MdOutlineModeEdit className="text-zinc-600 text-sm sm:text-base" />
              <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600">
                فرمت
              </p>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600">
              PSD
            </p>
          </div>

          <div className="flex justify-between items-center w-full gap-2">
            <div className="flex justify-start items-center gap-1 sm:gap-2">
              <RxDimensions className="text-zinc-600 text-sm sm:text-base" />
              <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600">
                ابعاد
              </p>
            </div>
            <p className="text-[9px] sm:text-xs md:text-sm text-zinc-600">
              720*1080 px
            </p>
          </div>

          <div className="flex justify-between items-center w-full gap-2">
            <div className="flex justify-start items-center gap-1 sm:gap-2">
              <FaFileDownload className="text-zinc-600 text-sm sm:text-base" />
              <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600">
                حجم
              </p>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm text-zinc-600">
              10 مگ
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-1 sm:gap-2 p-3 sm:p-4 mt-1 sm:mt-2">
          <div className="py-1 px-1.5 sm:px-2 rounded bg-zinc-200 text-[9px] sm:text-xs md:text-sm text-zinc-600 whitespace-nowrap">
            فوتوشاپ
          </div>
          <div className="py-1 px-1.5 sm:px-2 rounded bg-zinc-200 text-[9px] sm:text-xs md:text-sm text-zinc-600 whitespace-nowrap">
            اپلوستریتور
          </div>
        </div>

        <div className="flex justify-between items-center absolute bottom-5 sm:bottom-7 md:bottom-10 right-0 left-0 px-2">
          <div className="flex justify-center items-center">
            <BiSearchAlt className="text-indigo-600 mr-1 sm:mr-2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
            <FaRegBookmark className="text-indigo-600 mr-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
          </div>

          <div className="flex gap-1 sm:gap-2 items-center">
            <RiShoppingBag4Fill className="text-indigo-600 mr-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-1.5 sm:p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
            <div className="bg-zinc-500 text-white p-1.5 sm:p-2 text-[9px] sm:text-xs md:text-sm rounded-tr-md rounded-br-md whitespace-nowrap">
              50000 تومان
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GraphicalBox;
