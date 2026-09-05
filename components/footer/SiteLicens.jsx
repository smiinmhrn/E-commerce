import Image from "next/image";

const SiteLicens = () => {
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-5 w-full lg:w-auto p-6 sm:p-8 lg:p-15">
      <Image
        src="/Licenses/2.png"
        width={150}
        height={150}
        alt="license"
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-37.5 lg:h-37.5 rounded-lg object-cover"
      />

      <Image
        src="/Licenses/1.png"
        width={150}
        height={150}
        alt="license"
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-37.5 lg:h-37.5 rounded-lg object-cover"
      />
    </div>
  );
};

export default SiteLicens;
