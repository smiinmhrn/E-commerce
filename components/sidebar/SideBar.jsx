import Input from "@/components/sidebar/Input";
import Summery from "./Summery";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Input />
      <Summery />
    </div>
  );
};

export default SideBar;
