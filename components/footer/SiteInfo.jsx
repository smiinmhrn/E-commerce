import Link from "next/link";
import { LiaAngleLeftSolid } from "react-icons/lia";

const SiteInfo = () => {
  return (
    <div className="flex justify-center items-start gap-20">
      <div className="flex flex-col items-start text-zinc-700 gap-8">
        <div className="text-lg">دسترسی سریع</div>

        <ul className="w-full space-y-2">
          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
              <LiaAngleLeftSolid />
              <span>درباره ی ما</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
              <LiaAngleLeftSolid />
              <span>وبلاگ</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
              <LiaAngleLeftSolid />
              <span>حریم خصوصی</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
              <LiaAngleLeftSolid />
              <span>تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start text-zinc-700 gap-8">
        <div className="text-lg">راهنمای خرید</div>

        <ul className="w-full space-y-2">
          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
              <LiaAngleLeftSolid />
              <span>سوالات متداول</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
              <LiaAngleLeftSolid />
              <span>چگونه خرید کنیم؟</span>
            </Link>
          </li>

          <li className="text-zinc-500 hover:text-sky-400 transition-all duration-300">
            <Link href="/" className="flex items-center justify-start">
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
