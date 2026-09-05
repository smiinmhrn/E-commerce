import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex flex-col justify-center items-center text-center w-full lg:w-[30%] p-6 sm:p-8 lg:p-15"
    >
      <Image
        src="/logo/images.jpg"
        width={150}
        height={150}
        alt="logo"
        className="w-28 h-28 sm:w-32 sm:h-32 lg:w-37.5 lg:h-37.5 rounded-lg object-cover"
      />

      <p className="text-zinc-600 p-3 text-center text-sm sm:text-base leading-7 max-w-md">
        لورم ایپسوم فارسی متنی ساختگی برای نمایش نحوه قرارگیری نوشته‌ها در طراحی
        وب است. این متن بدون داشتن مفهوم خاص، برای بررسی فونت، فاصله، اندازه و
        چیدمان عناصر استفاده می‌شود.
      </p>
    </Link>
  );
};

export default Logo;
