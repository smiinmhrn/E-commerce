import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="container"
      style={{
        marginInline: "auto",
        paddingBlock: "0.5rem",
      }}
    >
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="logo rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] text-center
          transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)]"
          style={{
            padding: "1rem",
          }}
        >
          <Image
            src="/logo/logo.png"
            className="rounded-lg object-cover"
            width={100}
            height={100}
            alt="logo"
          />

          <div>فروشگاه من</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
