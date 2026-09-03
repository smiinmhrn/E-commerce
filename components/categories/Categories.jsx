import Link from "next/link";
import SingleCategory from "@/components/categories/SingleCategory";

const categories = [
  {
    imgurl: "/categories/calculator-min.png",
    title: "فایل لایه باز فتوشاپ",
    description: "فایل‌های آماده فتوشاپ",
  },
  {
    imgurl: "/categories/clapperboard-min.png",
    title: "فایل‌های ویدیویی",
    description: "منابع کاربردی ویدیویی",
  },
  {
    imgurl: "/categories/illustrator3-min.png",
    title: "فایل‌های ایلاستریتور",
    description: "طرح‌های آماده وکتور",
  },
  {
    imgurl: "/categories/list1-min.png",
    title: "فایل‌های گرافیکی",
    description: "منابع گرافیکی متنوع",
  },
  {
    imgurl: "/categories/music-min.png",
    title: "موسیقی",
    description: "آهنگ و فایل‌های صوتی",
  },
  {
    imgurl: "/categories/photoshop2-min.png",
    title: "قالب‌های فتوشاپ",
    description: "قالب‌های آماده طراحی",
  },
  {
    imgurl: "/categories/value1-min.png",
    title: "منابع طراحی",
    description: "ابزارهای کاربردی طراحی",
  },
  {
    imgurl: "/categories/view-min.png",
    title: "تصاویر و المان‌ها",
    description: "تصاویر و المان‌های آماده",
  },
];

const Categories = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 my-10 px-4">
      {categories.map((category, index) => (
        <Link href="/categories" key={index} className="w-full">
          <SingleCategory
            imgurl={category.imgurl}
            title={category.title}
            discript={category.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
