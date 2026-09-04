import Banners from "@/components/banners/Banners";
import BoxSlider from "@/components/boxSlider/BoxSlider";
import Categories from "@/components/categories/Categories";
import GraphicalBox from "@/components/graphical/GraphicalBox";
import GraphicalSlider from "@/components/graphical/GraphicalSlider";
import Header from "@/components/headers/Header";
import Swiper from "@/components/swiper/Swiper";
import WebNews from "@/components/weblognews/WebNews";
import Footer from "@/components/footer/Footer";
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
        <GraphicalSlider header={"فایل های گرافیکی"} />

        <WebNews />

        <Footer/>
      </main>
    </>
  );
}
