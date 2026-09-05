import Btns from "@/components/productSidebar/Btns";
import Info from "@/components/productSidebar/Info";
import Summery from "@/components/productSidebar/Summery";
import Tags from "@/components/productSidebar/Tags";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Btns />
      <Summery />
      <Info />
      <Tags />
    </div>
  );
};

export default SideBar;
