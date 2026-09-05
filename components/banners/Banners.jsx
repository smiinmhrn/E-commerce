import Image from "next/image";

const Banners = () => {
  return (
    <section className="container mx-auto my-6 sm:my-8 lg:my-10 px-2 sm:px-3 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        <Image
          src="/banners/1.jpg"
          width={600}
          height={200}
          alt="banner"
          className="w-full h-auto rounded-2xl sm:rounded-3xl object-cover"
        />

        <Image
          src="/banners/2.jpg"
          width={600}
          height={200}
          alt="banner"
          className="w-full h-auto rounded-2xl sm:rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default Banners;
