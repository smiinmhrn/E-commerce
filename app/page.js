import BoxSlider from "@/components/BoxSlider/BoxSlider";
import Header from "@/components/headers/Header";
import Swiper from "@/components/swiper/Swiper";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Swiper />
        <BoxSlider />
      </main>
    </>
  );
}
