const Comments = () => {
  return (
    <section className="container mx-auto mt-20 px-4">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-800 border-r-4 border-orange-500 pr-3">
          دیدگاه خود را بنویسید
        </h2>

        <p className="text-zinc-500 mt-3 text-sm leading-7">
          نظر شما درباره این مطلب چیست؟ دیدگاه خود را با ما و سایر کاربران به
          اشتراک بگذارید.
        </p>
      </div>

      {/* Form */}
      <div className="bg-zinc-50 rounded-2xl p-6 md:p-8 shadow-sm">
        <form className="flex flex-col gap-5">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-zinc-700"
              >
                نام
              </label>

              <input
                id="name"
                type="text"
                placeholder="نام خود را وارد کنید"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-zinc-700"
              >
                ایمیل
              </label>

              <input
                id="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Comment */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="comment"
              className="text-sm font-semibold text-zinc-700"
            >
              دیدگاه شما
            </label>

            <textarea
              id="comment"
              rows="6"
              placeholder="دیدگاه خود را بنویسید..."
              className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-zinc-800 px-6 py-3 text-white transition-all duration-300 hover:bg-orange-500"
            >
              ارسال دیدگاه
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Comments;
