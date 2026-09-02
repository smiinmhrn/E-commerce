import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="
        logo
        relative
        z-30
        block
        rounded-lg
        bg-white
        text-center
        shadow-[0px_1px_10px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)]
      "
      style={{
        padding: "1rem",
      }}
    >
      <Image
        src="/logo/logo.png"
        width={100}
        height={100}
        alt="logo"
        className="rounded-lg object-cover"
      />

      <div>فروشگاه من</div>
    </Link>
  );
};

export default Logo;
