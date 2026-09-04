import Btns from "./Btns";
import Info from "./Info";
import Summery from "./Summery";
import Tags from "./Tags";

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
