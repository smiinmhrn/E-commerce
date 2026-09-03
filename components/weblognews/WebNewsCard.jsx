import Image from "next/image";

const WebNewsCard = () => {
  return (
    <article className="pt-2 hover:pt-0 transition-all duration-300">
      <div className="relative sliderItem  h-105 w-72 m-2 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.5)] bg-white">
        <div>
          <Image
            src={"/news/hacker.png"}
            width={288}
            height={160}
            alt="product image"
            className="object-cover p-3 rounded-3xl"
          />
        </div>

        <div>
          <h3 className="font-bold text-sm sm:text-base truncate px-4 mb-3">
            جلوگیری از کامنت اسپم در سایت
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 px-4 text-justify">
            در دنیای کامپیوتر، هر درخواست کاربر ابتدا به سرور ارسال می‌شود و پس
            از پردازش، نتیجه به سیستم بازگردانده می‌شود. در این میان،
            الگوریتم‌ها وظیفه دارند داده‌ها را با سرعت و دقت مناسب پردازش کنند.
          </p>

          <div className="w-[90%] h-0.5 bg-zinc-300 rounded-lg mx-auto mt-7" />
          <div className="flex justify-between items-center px-4 absolute left-0 right-0 bottom-6">
            <span className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300 text-xs sm:text-sm text-zinc-600">
              12/6/1405
            </span>
            <span className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300 text-xs sm:text-sm text-zinc-600">
              4 دیدگاه
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WebNewsCard;
