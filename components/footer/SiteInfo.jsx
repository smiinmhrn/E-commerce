import Link from "next/link";
import { LiaAngleLeftSolid } from "react-icons/lia";

const SiteInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 lg:gap-20 w-full lg:w-auto p-6 sm:p-8 lg:p-0">
      {/* دسترسی سریع */}
      <div className="flex flex-col items-start text-zinc-700 gap-6 sm:gap-8">
        <div className="text-lg font-medium">دسترسی سریع</div>

        <ul className="w-full space-y-2">
          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>درباره ی ما</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>وبلاگ</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>حریم خصوصی</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* راهنمای خرید */}
      <div className="flex flex-col items-start text-zinc-700 gap-6 sm:gap-8">
        <div className="text-lg font-medium">راهنمای خرید</div>

        <ul className="w-full space-y-2">
          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>سوالات متداول</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>چگونه خرید کنیم؟</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400">
            <Link
              href="/"
              className="flex items-center justify-start transition-all duration-300 hover:-translate-x-2"
            >
              <LiaAngleLeftSolid />
              <span>قوانین استفاده از محصولات</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteInfo;
