import Image from "next/image";

const SingleCategory = ({ imgurl, title, discript }) => {
  return (
    <article className="w-full min-h-24 flex justify-between items-center rounded-lg p-3 sm:p-4 bg-zinc-200 hover:bg-zinc-300 transition-all duration-300">
      <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
        <h3 className="font-bold text-sm sm:text-base truncate">{title}</h3>

        <p className="text-xs sm:text-sm text-zinc-600">{discript}</p>
      </div>

      <div className="shrink-0 w-12 sm:w-14 md:w-16">
        <Image
          src={imgurl}
          width={70}
          height={70}
          className="object-cover w-full h-auto"
          alt={title}
        />
      </div>
    </article>
  );
};

export default SingleCategory;
