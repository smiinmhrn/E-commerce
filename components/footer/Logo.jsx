import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex flex-col justify-center items-center text-center w-[30%] p-15"
    >
      <Image
        src="/logo/logo.png"
        width={150}
        height={150}
        alt="logo"
        className="rounded-lg object-cover"
      />

      <p className="text-zinc-600 p-3 text-center">
        لورم ایپسوم فارسی متنی ساختگی برای نمایش نحوه قرارگیری نوشته‌ها در طراحی
        وب است. این متن بدون داشتن مفهوم خاص، برای بررسی فونت، فاصله، اندازه و
        چیدمان عناصر استفاده می‌شود.
      </p>
    </Link>
  );
};

export default Logo;
