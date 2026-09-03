import Image from "next/image";

const Banners = () => {
  return (
    <section className="container mx-auto my-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <Image
          src="/banners/1.jpg"
          width={600}
          height={200}
          alt="banner"
          className="w-full h-auto rounded-3xl object-cover"
        />

        <Image
          src="/banners/2.jpg"
          width={600}
          height={200}
          alt="banner"
          className="w-full h-auto rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default Banners;
