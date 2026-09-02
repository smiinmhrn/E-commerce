import Box from "@/components/BoxSlider/Box";

const BoxSlider = () => {
  return (
    <section className="container mx-auto">
      <header>
        <h2 className="text-orange-500 text-2xl border-r-orange-400 border-r-2 pr-2">
          محصولات
        </h2>
      </header>
      <div className="flex justify-between items-center flex-wrap mt-10">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </section>
  );
};

export default BoxSlider;
