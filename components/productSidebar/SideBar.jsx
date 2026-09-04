import Btns from "./Btns";
import Summery from "./Summery";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Btns />
      <Summery />
      {/* <Input /> */}
      {/* <Summery />
      <MostViewd />
      <MostViewdProducts /> */}
    </div>
  );
};

export default SideBar;
