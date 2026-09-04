import Image from "next/image";

const SiteLicens = () => {
  return (
    <div className="flex justify-center items-center  p-15">
      <Image
        src="/Licenses/2.png"
        width={150}
        height={150}
        alt="logo"
        className="rounded-lg object-cover"
      />

      <Image
        src="/Licenses/1.png"
        width={150}
        height={150}
        alt="logo"
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default SiteLicens;
