import BoxSlider from "@/components/BoxSlider/BoxSlider";
import Header from "@/components/headers/Header";
import Swiper from "@/components/swiper/Swiper";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Swiper />
        <BoxSlider
          imgurl={"/applicationslider/applications.png"}
          title={"عنوان محصول"}
          header={"اپلیکیشن ها"}
        />
        <BoxSlider
          imgurl={"/bookslider/ganj.jpg"}
          title={"عنوان محصول"}
          header={"کتاب ها"}
        />
      </main>
    </>
  );
}
