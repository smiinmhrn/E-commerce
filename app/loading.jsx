import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Image
        src="/loadingSpinner/Ripple@1x-1.0s-200px-200px.gif"
        alt="loading"
        width={120}
        height={120}
      />
    </div>
  );
};

export default Loading;
