import BreadCrump from "@/components/breadCrump/BreadCrump";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { FaFileDownload } from "react-icons/fa";
import GraphicalBox from "@/components/graphical/GraphicalBox";
import Box from "@/components/boxSlider/Box";

const SingleProductPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="flex flex-col gap-8">
      <BreadCrump
        secondTitle={"فروشگاه"}
        secondLink={"/products"}
        title={"تایتل محصول"}
      />

      <section className="flex justify-between items-center rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)] p-10">
        <Image
          src="/bookslider/ganj.jpg"
          className="rounded-xl"
          priority
          width={600}
          height={400}
          alt="product picture"
        />

        <div className="flex flex-col items-start px-6 gap-10 w-90 ">
          <h1 className="text-3xl font-bold text-zinc-800">تایتل محصول</h1>

          <div className="flex flex-col items-start px-6 gap-10 w-72">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-3">
                <MdOutlineModeEdit className="text-zinc-600 text-2xl" />
                <p className="text-lg text-zinc-700 font-medium">فرمت</p>
              </div>

              <p className="text-lg text-zinc-600">PSD</p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-3">
                <RxDimensions className="text-zinc-600 text-2xl" />
                <p className="text-lg text-zinc-700 font-medium">ابعاد</p>
              </div>

              <p className="text-lg text-zinc-600">720 × 1080 px</p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-3">
                <FaFileDownload className="text-zinc-600 text-2xl" />
                <p className="text-lg text-zinc-700 font-medium">حجم</p>
              </div>

              <p className="text-lg text-zinc-600">10 مگ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start gap-5">
        <section className="flex justify-between items-center w-full">
          <div className="bg-zinc-200 flex justify-center items-center p-4 rounded-lg w-[30%]">
            <Image
              src="/icons/trophy.png"
              alt="trophy"
              width={80}
              height={80}
            />

            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-lg font-bold">محصولات اوریجینال</h3>
              <p className="text-sm text-zinc-500">برترین های دنیای وب</p>
            </div>
          </div>

          <div className="bg-zinc-200 flex justify-center items-center p-4 rounded-lg w-[30%]">
            <Image
              src="/icons/feedback.png"
              alt="feedback"
              width={80}
              height={80}
            />

            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-lg font-bold">بالاترین کیفیت</h3>
              <p className="text-sm text-zinc-500">
                تاثیر گذار ترین مورد در موفقیت
              </p>
            </div>
          </div>

          <div className="bg-zinc-200 flex justify-center items-center p-4 rounded-lg w-[30%] gap-3">
            <Image
              src="/icons/target1.png"
              alt="target1"
              width={80}
              height={80}
            />

            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-lg font-bold">پشتیبانی فوق سریع</h3>
              <p className="text-sm text-zinc-500">کمتر از 30 دقیقه</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5 my-5 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)] p-10">
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
          <h2 className="text-2xl font-bold mb-6">مطالب مرتبط</h2>
          <section className="flex justify-between items-center">
            <GraphicalBox
              imgurl="/applicationslider/applications.png"
              title="محصول اول"
            />

            <GraphicalBox
              imgurl="/applicationslider/applications.png"
              title="محصول دوم"
            />

            <GraphicalBox
              imgurl="/applicationslider/applications.png"
              title="محصول سوم"
            />
          </section>

          <section className="flex justify-between items-center">
            <Box imgurl="/bookslider/ganj.jpg" title="مقاله اول" />

            <Box imgurl="/bookslider/ganj.jpg" title="مقاله دوم" />

            <Box imgurl="/bookslider/ganj.jpg" title="مقاله سوم" />
          </section>
        </section>

        <Comments />
      </section>
    </div>
  );
};

export default SingleProductPage;
