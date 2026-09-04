const Info = () => {
  return (
    <div className="w-full flex flex-col justify-start bg-white! mt-10 p-6 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)] gap-6">
      <div className="flex justify-between text-zinc-600">
        <div>تعداد خرید</div>
        <span>30</span>
      </div>

      <div className="flex justify-between text-zinc-600">
        <div>تعداد بازدید</div>
        <span>40</span>
      </div>

      <div className="flex justify-between text-zinc-600">
        <div>تعداد دیدیگاه</div>
        <span>5</span>
      </div>
    </div>
  );
};

export default Info;
