import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center gap-6">
      <div className="flex flex-col items-center gap-3">
        <span className="text-8xl font-extrabold text-red-500">404</span>

        <h1 className="text-3xl font-bold text-zinc-800">صفحه پیدا نشد!</h1>

        <p className="text-zinc-500">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
        </p>
      </div>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-zinc-800 text-white! font-medium hover:bg-zinc-700 transition-colors"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
