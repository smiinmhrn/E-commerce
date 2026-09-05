"use client";

import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Footer Text */}
      <p className="text-zinc-600 my-8 sm:my-10 text-sm sm:text-base leading-7 text-center sm:text-right max-w-3xl">
        متن ساختگی برای نمایش و آزمایش طراحی، فونت، فاصله و چیدمان عناصر در
        صفحات وب و رابط‌های کاربری استفاده می‌شود.
      </p>

      {/* Back To Top */}
      <button
        type="button"
        onClick={goTopCtrl}
        aria-label="بازگشت به بالای صفحه"
        className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-50 cursor-pointer rounded-2xl bg-yellow-300 p-3 sm:p-4 transition-all duration-300 hover:bg-yellow-400 hover:text-white! shadow-[0px_2px_10px_rgba(0,0,0,0.15)]"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackToTop;
