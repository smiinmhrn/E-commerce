import { BiSearchAlt } from "react-icons/bi";

const Input = () => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)] focus-within:shadow-[0px_0px_12px_rgba(0,0,0,0.3)] transition-shadow duration-300 w-230">
      <input
        name="productSearch"
        id="productSearch"
        type="text"
        placeholder="جست و جو بین محصولات..."
        className="outline-none"
      />

      <label htmlFor="productSearch">
        <BiSearchAlt className="w-6 h-6" />
      </label>
    </div>
  );
};

export default Input;
