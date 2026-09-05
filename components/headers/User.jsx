import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const User = () => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
      <Link
        href="/login"
        className="bg-zinc-200 p-3! sm:p-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-zinc-300 transition shrink-0"
      >
        <FaUser className="text-lg sm:text-xl md:text-xl" />
      </Link>

      <div className="flex items-center justify-center bg-orange-400 text-white! p-1.5 sm:p-2 md:p-2 gap-1 sm:gap-2 rounded-lg shrink-0">
        <span className="bg-white text-black text-[10px] sm:text-xs px-1.5 sm:px-2 rounded-full">
          0
        </span>

        <p className="hidden md:block text-sm">سبد خرید</p>

        <div className="bg-white p-1 rounded-md">
          <MdOutlineShoppingCart className="text-lg sm:text-xl text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default User;
