import Image from "next/image";
const Banners = () => {
  return (
    <section className=" container flex justify-between mx-auto my-10 items-center">
      <Image
        src={"/banners/1.jpg"}
        width={600}
        height={200}
        alt="banner"
        className="rounded-3xl"
      />
      <Image
        src={"/banners/2.jpg"}
        width={600}
        height={200}
        alt="banner"
        className="rounded-3xl object-cover"
        layout="fixed"
      />
    </section>
  );
};

export default Banners;
