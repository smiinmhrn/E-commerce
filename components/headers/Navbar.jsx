import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3 ">
        <li>
          <Link
            href="/"
            className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
          >
            خانه
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
          >
            اپلیکیشن ها
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
          >
            کتاب ها
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
          >
            فایل های گرافیکی
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
          >
            وبلاگ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
