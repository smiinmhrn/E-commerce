import Image from "next/image";

const loading = () => {
    return (
        <div className="flex justify-center items-center p-12">
            <Image
            src={"/loadingSpinner/Ripple@1x-1.0s-200px-200px.gif"}
            alt="loading"
            width={120}
            height={120}/>
        </div>
    );
}

export default loading;