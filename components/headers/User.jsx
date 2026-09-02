import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const User = () => {
  return (
    <div className="flex justify-end gap-7">
      <div className="bg-zinc-200 p-2 px-4  rounded-lg flex items-center">
        <FaUser className="text-2xl" />
      </div>
      <div className="flex items-center justify-center bg-orange-400 text-white! p-3 gap-4 rounded-lg">
        <span className="bg-white text-black px-2 rounded-full">0</span>
        <p>سبد خرید</p>
        <div className="bg-white p-1 rounded-lg">
          <MdOutlineShoppingCart className="text-2xl text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default User;
