import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center justify-end gap-2">
        <p className="text-lg">09124466446</p>

        <div className="bg-zinc-200 p-2 -rotate-12 rounded-lg">
          <FiPhone className="text-2xl " />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <p className="text-lg">smiinmhrn@gmail.com</p>

        <div className="bg-zinc-200 p-2 -rotate-12 rounded-lg">
          <IoMailOpenOutline className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
