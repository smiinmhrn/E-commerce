import Input from "@/components/blogSidebar/Input";
import Summery from "@/components/blogSidebar/Summery";
import MostViewd from "@/components/blogSidebar/MostViewd";
import MostViewdProducts from "@/components/blogSidebar/MostViewdProducts";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Input />
      <Summery />
      <MostViewd />
      <MostViewdProducts />
    </div>
  );
};

export default SideBar;
