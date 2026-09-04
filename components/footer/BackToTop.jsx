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
    <div className="flex justify-between items-center">
      <p className="text-zinc-600 my-10">
        متن ساختگی برای نمایش و آزمایش طراحی، فونت، فاصله و چیدمان عناصر در
        صفحات وب و رابط‌های کاربری استفاده می‌شود.
      </p>

      <div
        onClick={goTopCtrl}
        className="fixed bottom-15 left-15 z-50 cursor-pointer rounded-2xl bg-yellow-300 p-4 transition-all duration-300 hover:bg-yellow-400 hover:text-white!"
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default BackToTop;
