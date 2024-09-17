import Image from "next/image";

const Loader = () => {
  
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4 bg-gradient-to-r from-[#020D1A]  to-[#05162a]">
      <Image
        src={"/assets/loading.gif"}
        alt="loading..."
        height={150}
        width={150}
        className="mix-blend-lighten"
      />
      <h1 className="text-2xl font-extrabold uppercase text-[#313333]">beta 1.0.0</h1>
    </div>
  );
};

export default Loader;
