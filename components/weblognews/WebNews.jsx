import WebNewsCard from "@/components/weblognews/WebNewsCard";
import Link from "next/link";

const WebNews = ({ showHeader = true, showMargin = true, cardCount = 4 }) => {
  return (
    <section
      className={`container mx-auto px-4 mt-10 ${showMargin ? "mt-10" : ""}`}
    >
      {showHeader && (
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-zinc-500 text-xl sm:text-2xl border-r-zinc-400 border-r-2 pr-2">
            اخرین مقالات
          </h2>

          <div className="flex items-center gap-1 text-zinc-800">
            <Link
              href="/shop"
              className="bg-zinc-500 px-3 sm:px-4 py-2 rounded-md transition-all duration-500 hover:bg-orange-600 text-white! text-sm sm:text-base"
            >
              برو به مقالات
            </Link>
          </div>
        </header>
      )}

      <div
        className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 ${showMargin ? "mt-8 sm:mt-10" : ""}`}
      >
        {Array.from({ length: cardCount }).map((_, index) => (
          <WebNewsCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default WebNews;
