const MostViewdProducts = () => {
  return (
    <div className="w-full flex flex-col justify-start bg-white! mb-10 p-6 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)]">
      <h2 className="font-bold py-2 text-blue-500 mb-4 ">
        پربازدید ترین محصولات
      </h2>
      <div className="text-justify text-zinc-500 flex flex-col gap-3 justify-center items-start">
        <div className="line-clamp-2 border-r-2 border-orange-500 p-2">
          محصول پربازدید اول
        </div>
        <div className="line-clamp-2 border-r-2 border-orange-500 p-2">
          محصول پربازدید دوم
        </div>
        <div className="line-clamp-2 border-r-2 border-orange-500 p-2">
          محصول پربازدید سوم
        </div>
        <div className="line-clamp-2 border-r-2 border-orange-500 p-2">
          محصول پربازدید چهارم
        </div>
      </div>
    </div>
  );
};

export default MostViewdProducts;
