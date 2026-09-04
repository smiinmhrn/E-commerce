const Summery = () => {
  return (
    <div className="w-full flex flex-col justify-start bg-white! my-10 p-6 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)]">
      <h3 className="font-bold py-2">توضیحات خلاصه</h3>
      <p className="line-clamp-6 text-justify text-zinc-500">
        امروز یک توسعه‌دهنده تصمیم گرفت پروژه‌اش را کمی مرتب‌تر کند و چند خط کد
        قدیمی را بازنویسی کند. بعد از چند ساعت کار، بالاخره همه‌چیز بدون خطا
        اجرا شد و ظاهر سایت هم دقیقاً همان چیزی شد که انتظار داشت. حالا فقط
        مانده بود یک فنجان قهوه و چند دقیقه استراحت قبل از شروع بخش بعدی پروژه.
      </p>
    </div>
  );
};

export default Summery;
