import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="p-1.5 sm:p-2 lg:p-3 xl:p-4 logo relative z-30 block rounded-lg bg-white text-center text-[10px] sm:text-xs lg:text-sm xl:text-base shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)]"
    >
      <Image
        src="/logo/logo.png"
        width={100}
        height={100}
        alt="logo"
        className="rounded-lg object-cover w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-25 xl:h-25"
      />
      <div className="mt-1 sm:mt-1.5 lg:mt-2">فروشگاه من</div>
    </Link>
  );
};

export default Logo;
