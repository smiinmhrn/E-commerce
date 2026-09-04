import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-[0px_0px_15px_rgba(249,115,22,0.15)]">
        {/* Back to Home */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-500 transition"
        >
          <span>←</span>
          بازگشت به صفحه اصلی
        </Link>

        <div className="flex flex-col items-center gap-2 mb-8">
          <h1 className="text-3xl font-bold text-orange-600">
            ورود به حساب کاربری
          </h1>

          <p className="text-sm text-zinc-500">برای ادامه وارد حساب خود شوید</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              ایمیل
            </label>

            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-700"
            >
              رمز عبور
            </label>

            <input
              id="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-orange-500 hover:text-orange-600 transition"
            >
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-medium text-white hover:bg-orange-600 transition"
          >
            ورود
          </button>
        </form>

        <div className="mt-7 text-center text-sm text-zinc-500">
          حساب کاربری ندارید؟{" "}
          <Link
            href="/register"
            className="font-medium text-orange-500 hover:text-orange-600 hover:underline transition"
          >
            ثبت نام کنید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
