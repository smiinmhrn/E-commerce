import Banners from "@/components/banners/Banners";
import BoxSlider from "@/components/boxSlider/BoxSlider";
import Categories from "@/components/categories/Categories";
import GraphicalBox from "@/components/graphical/GraphicalBox";
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
        <Banners />
        <BoxSlider
          imgurl={"/bookslider/ganj.jpg"}
          title={"عنوان محصول"}
          header={"کتاب ها"}
        />

        <Categories />
        {/* <GraphicalBox
          imgurl={"/graphical/Motex-Cover-Image.jpg"}
          title={"نام محصول گرافیکی"}
        /> */}
      </main>
    </>
  );
}
