import Input from "@/components/blogSidebar/Input";
import Summery from "./Summery";
import MostViewd from "./MostViewd";
import MostViewdProducts from "./MostViewdProducts";

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
