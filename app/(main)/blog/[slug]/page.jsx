import BreadCrump from "@/components/breadCrump/BreadCrump";
import Comments from "@/components/comments/Comments";
import WebNews from "@/components/weblognews/WebNews";
import Image from "next/image";
import { FaRegEye, FaComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const SingleBlogPage = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Breadcrumb */}
      <BreadCrump
        secondTitle={"وبلاگ"}
        secondLink={"/blog"}
        title={"تایتل مقاله"}
      />

      <section className="flex justify-center items-center w-full">
        <Image
          src="/news/hacker.png"
          className="rounded-xl object-cover w-full max-w-200 h-auto"
          priority
          width={800}
          height={400}
          alt="blog picture"
        />
      </section>

      <section className="flex flex-col items-start gap-4 sm:gap-5 w-full">
        {/* Short Description */}
        <section className="text-blue-500 text-right text-sm sm:text-base leading-7 sm:leading-8 w-full">
          امروز یک توسعه‌دهنده تصمیم گرفت کدهایش را مرتب کند و بالاخره پروژه
          بدون هیچ خطایی اجرا شد.
        </section>

        <section className="flex flex-wrap justify-start items-center gap-2 sm:gap-3 w-full">
          {/* Views */}
          <div className="flex justify-center items-center gap-2 bg-zinc-200 p-2 px-3 sm:px-4 rounded-2xl text-sm sm:text-base">
            <FaRegEye />
            <p>تعداد بازدید: 5</p>
          </div>

          {/* Comments */}
          <div className="flex justify-center items-center gap-2 bg-zinc-200 p-2 px-3 sm:px-4 rounded-2xl text-sm sm:text-base">
            <FaComment />
            <p>تعداد دیدگاه: 5</p>
          </div>

          {/* Date */}
          <div className="flex justify-center items-center gap-2 bg-zinc-200 p-2 px-3 sm:px-4 rounded-2xl text-sm sm:text-base">
            <MdDateRange />
            <p>تاریخ انتشار: 1405/2/3</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 sm:gap-5 my-3 sm:my-5 w-full">
          <h2 className="text-xl sm:text-2xl font-bold">توضیحات کامل</h2>

          <p className="text-justify leading-7 sm:leading-8 text-sm sm:text-base text-zinc-600">
            در دنیای امروز، فناوری تقریباً در تمام بخش‌های زندگی انسان حضور دارد
            و بسیاری از کارهایی که در گذشته به زمان و انرژی زیادی نیاز داشتند،
            امروزه تنها با چند کلیک انجام می‌شوند. از خرید اینترنتی و آموزش
            آنلاین گرفته تا مدیریت اطلاعات، ارتباط با دیگران و حتی سرگرمی،
            همه‌چیز به شکل قابل توجهی به سیستم‌های کامپیوتری و اینترنت وابسته
            شده است. یکی از مهم‌ترین بخش‌های این دنیای دیجیتال، توسعه نرم‌افزار
            و طراحی وب‌سایت است. یک وب‌سایت خوب تنها مجموعه‌ای از صفحات و
            دکمه‌ها نیست؛ بلکه باید بتواند تجربه‌ای ساده، سریع و قابل اعتماد
            برای کاربر ایجاد کند. انتخاب رنگ‌ها، نحوه قرارگیری عناصر، نوع فونت،
            سرعت بارگذاری صفحات و حتی کوچک‌ترین انیمیشن‌ها می‌توانند روی تجربه
            کاربر تأثیر زیادی داشته باشند. در سال‌های اخیر، ابزارها و
            فریم‌ورک‌های مختلفی برای ساده‌تر کردن فرآیند توسعه وب به وجود
            آمده‌اند. فریم‌ورک‌هایی مانند Next.js به توسعه‌دهندگان اجازه می‌دهند
            علاوه بر ساخت رابط کاربری، بخش‌هایی مانند مسیریابی، رندر سمت سرور،
            بهینه‌سازی تصاویر و مدیریت ساختار صفحات را نیز به شکل منظم‌تری انجام
            دهند. همین موضوع باعث شده است که توسعه پروژه‌های مدرن وب نسبت به
            گذشته سریع‌تر و ساختاریافته‌تر شود. با این حال، استفاده از ابزارهای
            جدید به تنهایی باعث ساخت یک پروژه خوب نمی‌شود. یک توسعه‌دهنده باید
            در کنار یادگیری فریم‌ورک‌ها، مفاهیم پایه‌ای مانند HTML، CSS،
            JavaScript و اصول طراحی رابط کاربری را نیز به خوبی بشناسد. درک درست
            این مفاهیم کمک می‌کند هنگام مواجه شدن با یک مشکل، به جای جست‌وجوی یک
            راه‌حل آماده، بتوان علت اصلی مشکل را پیدا و آن را به شکل اصولی برطرف
            کرد. در نهایت، کیفیت یک پروژه نتیجه توجه به جزئیات مختلف است. کد
            تمیز، ساختار مناسب فایل‌ها، طراحی واکنش‌گرا، سرعت مناسب و تجربه
            کاربری خوب، همگی در کنار یکدیگر باعث می‌شوند یک وب‌سایت حرفه‌ای شکل
            بگیرد. شاید هرکدام از این موارد به تنهایی کوچک به نظر برسند، اما
            زمانی که در یک پروژه واقعی کنار هم قرار می‌گیرند، تفاوت میان یک سایت
            معمولی و یک محصول حرفه‌ای را ایجاد می‌کنند.
          </p>
        </section>

        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
            مقالات مرتبط
          </h2>

          <WebNews showHeader={false} showMargin={false} cardCount={3} />
        </section>

        <Comments />
      </section>
    </div>
  );
};

export default SingleBlogPage;
