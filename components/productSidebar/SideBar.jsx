import Btns from "./Btns";
import Summery from "./Summery";
import Tags from "./Tags";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Btns />
      <Summery />
      <Tags/>
      {/* <Input /> */}
      {/* <Summery />
      <MostViewd />
      <MostViewdProducts /> */}
    </div>
  );
};

export default SideBar;
