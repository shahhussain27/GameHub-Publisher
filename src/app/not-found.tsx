import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a] text-center overflow-hidden">
      <Image src={"/assets/404.jpg"} alt="404" width={150} height={150} className="mix-blend-darken dark:invert dark:mix-blend-lighten" />
      <div className="flex flex-col gap-3">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link href="/">
          <button className="btn-primary py-1.5">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
