import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-[#020D1A] text-center overflow-hidden">
      <Image src={"/assets/404.png"} alt="404" width={150} height={150} />
      <div className="flex flex-col gap-3">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link href="/">
          <button className="bg-white text-[#0E0E1E] hover:bg-gray-200 font-bold text-sm py-1.5 px-4 rounded">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
