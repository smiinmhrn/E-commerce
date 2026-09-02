import Image from "next/image";
import { RiShoppingBag4Fill } from "react-icons/ri";

const Box = () => {
  return (
    <article className="relative h-80 w-72 m-2 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-300">
      <div>
        <Image
          src="/boxslider/ganj.jpg"
          width={288}
          height={160}
          alt="product image"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="m-2">عنوان محصول</h3>

        <div className="flex justify-between items-center absolute bottom-10 right-0 left-0">
          <RiShoppingBag4Fill className="text-indigo-600 mr-1 w-10 h-10 p-2 rounded bg-zinc-200 cursor-pointer transition-all duration-300 hover:bg-orange-300 hover:text-white" />
          <div className="bg-zinc-500 text-white p-2 rounded-tr-md rounded-br-md">
            50000 تومان
          </div>
        </div>
      </div>
    </article>
  );
};

export default Box;
