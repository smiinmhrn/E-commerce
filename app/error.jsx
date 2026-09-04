"use client";

const Error = ({ reset }) => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center gap-6">
      <div className="flex flex-col items-center gap-3">
        <span className="text-7xl font-extrabold text-red-500">500</span>

        <h1 className="text-3xl font-bold text-zinc-800">مشکلی پیش آمده!</h1>

        <p className="text-zinc-500">
          متأسفانه هنگام بارگذاری این صفحه مشکلی رخ داده است.
        </p>
      </div>

      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
      >
        تلاش مجدد
      </button>
    </div>
  );
};

export default Error;
