import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#020D1A]">
      <Image
        src={"/assets/loading.gif"}
        alt="loading..."
        height={150}
        width={150}
        className="mix-blend-lighten"
      />
      {/* <div className="h-10 w-10 animate-spin rounded-full border-2 border-solid border-primary border-t-transparent"></div> */}
    </div>
  );
};

export default Loader;
