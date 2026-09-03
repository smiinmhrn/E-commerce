import WebNewsCard from "./WebNewsCard";
import Link from "next/link";
const WebNews = () => {
  return (
    <div className="flex flex-col container mx-auto mt-10">
      <header className=" flex justify-between items-center">
        <h2 className="text-zinc-500 text-2xl border-r-zinc-400 border-r-2 pr-2">
          اخرین مقالات
        </h2>

        <div className=" flex items-center gap-1 text-zinc-800">
          <Link
            href={"/shop"}
            className="bg-zinc-500 px-4 py-2 rounded-md transition-all duration-500 hover:bg-orange-600 text-white!"
          >
            برو به مفالات
          </Link>
        </div>
      </header>
      <div className="container flex mx-auto justify-between items-center mt-10">
        <WebNewsCard />
        <WebNewsCard />
        <WebNewsCard />
        <WebNewsCard />
      </div>
    </div>
  );
};

export default WebNews;
