import Image from "next/image";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { FaFileDownload } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const GraphicalBox = ({ imgurl, title }) => {
  return (
    <article className="pt-2 hover:pt-0 transition-all duration-300">
      <div className="sliderItem relative h-115 w-72 m-2 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.5)] bg-white">
        <div>
          <Image
            // src="/applicationslider/applications.png"
            src={imgurl}
            width={288}
            height={160}
            alt="product image"
            className="object-cover p-3 rounded-3xl"
          />
        </div>

        <div>
          {/* <h3 className="m-2">عنوان محصول</h3> */}
          {
            <h3 className="font-bold text-sm sm:text-base truncate px-4 mb-3">
              {title}
            </h3>
          }

          <div className="flex justify-start flex-col px-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-2">
                <MdOutlineModeEdit className=" text-zinc-600" />
                <p className="text-xs sm:text-sm text-zinc-600">فرمت</p>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600">PSD</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-2">
                <RxDimensions className=" text-zinc-600" />
                <p className="text-xs sm:text-sm text-zinc-600">ابعاد</p>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600">720*1080 px</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-2">
                <FaFileDownload className=" text-zinc-600" />
                <p className="text-xs sm:text-sm text-zinc-600">حجم</p>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600">10 مگ</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 p-4 mt-2">
            <div
              href={"/"}
              className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300 text-xs sm:text-sm text-zinc-600"
            >
              فوتوشاپ
            </div>
            <div
              href={"/"}
              className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300 text-xs sm:text-sm text-zinc-600"
            >
              اپلوستریتور
            </div>
          </div>
          <div className="flex justify-between items-center absolute bottom-10 right-0 left-0">
            <div className="flex justify-center items-center">
              <BiSearchAlt className="text-indigo-600 mr-4 w-10 h-10 p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
              <FaRegBookmark className="text-indigo-600 mr-1 w-10 h-10 p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
            </div>
            <div className="flex gap-2">
              <RiShoppingBag4Fill className="text-indigo-600 mr-1 w-10 h-10 p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
              <div className="bg-zinc-500 text-white p-2 rounded-tr-md rounded-br-md">
                50000 تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GraphicalBox;
