import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4 bg-gradient-to-r from-[#020D1A]  to-[#05162a]">
      <Image
        src={"/assets/loading.gif"}
        alt="loading..."
        unoptimized
        height={150}
        width={150}
        className="mix-blend-lighten"
      />
      <h1 className="text-2xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-700">
        beta {process.env.NEXT_PUBLIC_APP_VERSION}
      </h1>
    </div>
  );
};

export default Loader;
