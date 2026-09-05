import Link from "next/link";
import Input from "@/components/headers/Input";

const Navbar = ({ mobile = false, onClose }) => {
  return (
    <nav className="flex flex-col gap-6 md:gap-8">
      <ul className={`flex gap-3 ${mobile ? "flex-col w-full" : "items-end"}`}>
        {" "}
        <li className="w-full">
          <Link
            href="/"
            onClick={onClose}
            className={`${mobile ? "w-full" : "w-full md:w-32"} h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!`}
          >
            خانه{" "}
          </Link>{" "}
        </li>
        <li className="w-full">
          <Link
            href="/"
            onClick={onClose}
            className={`${mobile ? "w-full" : "w-full md:w-32"} h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!`}
          >
            اپلیکیشن ها
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/"
            onClick={onClose}
            className={`${mobile ? "w-full" : "w-full md:w-32"} h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!`}
          >
            کتاب ها
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/"
            onClick={onClose}
            className={`${mobile ? "w-full" : "w-full md:w-32"} h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!`}
          >
            فایل های گرافیکی
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/"
            onClick={onClose}
            className={`${mobile ? "w-full" : "w-full md:w-32"} h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!`}
          >
            وبلاگ
          </Link>
        </li>
      </ul>

      <Input />
    </nav>
  );
};

export default Navbar;
