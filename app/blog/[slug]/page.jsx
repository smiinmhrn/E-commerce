import BreadCrump from "@/components/breadCrump/BreadCrump";
import Comments from "@/components/comments/Comments";
import WebNews from "@/components/weblognews/WebNews";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const SingleBlogPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <BreadCrump
        secondTitle={"وبلاگ"}
        secondLink={"/blog"}
        title={"تایتل مقاله"}
      />

      <section className="flex justify-center items-center">
        <Image
          src={"/news/hacker.png"}
          className="rounded-xl"
          priority={true}
          width={800}
          height={400}
          alt={"product picture"}
        />
      </section>

      <section className="flex flex-col items-start gap-5">
        <section className="text-blue-500 text-right">
          امروز یک توسعه‌دهنده تصمیم گرفت کدهایش را مرتب کند و بالاخره پروژه
          بدون هیچ خطایی اجرا شد.
        </section>

        <section className="flex justify-start items-center gap-3">
          <div className="flex justify-center items-center gap-2 bg-zinc-200 p-2 px-4 rounded-2xl">
            <FaRegEye />
            <p>تعداد بازدید: 5</p>
          </div>

          <div className="flex justify-center items-center gap-2  bg-zinc-200 p-2 px-4 rounded-2xl">
            <FaComment />
            <p>تعداد دیدگاه: 5</p>
          </div>

          <div className="flex justify-center items-center gap-2  bg-zinc-200 p-2 px-4 rounded-2xl">
            <MdDateRange />
            <p>تاریخ انتشار: 1405/2/3</p>
          </div>
        </section>

        <section className="flex flex-col gap-5 my-5">
          <h2 className="text-2xl font-bold">توضیحات کامل</h2>
          <p className="text-justify leading-8 text-zinc-600">
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

        <section>
          <h2 className="text-2xl font-bold">مقالات مرتبط</h2>
          <WebNews showHeader={false} showMargin={false} cardCount={3} />
        </section>

        <Comments />
      </section>
    </div>
  );
};

export default SingleBlogPage;
