import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import logoB from "../../../public/assets/gamehubB.png";
import { useSession } from "next-auth/react";
import { CiMenuBurger } from "react-icons/ci";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Sidebar from "../Sidebar";

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // dark:bg-[#020D1A]
    <header
      className={`sticky top-0 z-999 flex w-full  ${scrolled ? "bg-slate-100 shadow-2 dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a]" : "bg-transperent"}`}
    >
      <div className="flex flex-grow items-center justify-between px-4 py-2.5 md:px-5 2xl:px-10">
        <div className="flex items-center gap-2 sm:gap-4 ">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={() => setIsSidebarOpen((pre) => !pre)}
            className="block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-dark-3 dark:bg-dark-2 lg:hidden"
          >
            <CiMenuBurger />
          </button>
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen((pre) => !pre)}
            direction="left"
            size={300}
            className=""
          >
            <aside className="flex flex-col gap-6 h-screen p-6 dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a]">
              <div className="flex justify-start items-center gap-4">
                <Link className="" href="/">
                  <Image
                    width={40}
                    height={40}
                    src={logoB}
                    alt="Logo"
                    priority
                    className="dark:invert"
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
                <h2 className="font-bold text-2xl text-black dark:text-white cursor-pointer">
                  Dev
                </h2>
              </div>

              {pathname === "/" ||
              pathname === "/auth/signin" ||
              pathname === "/auth/signup" || pathname === "/support" ? (
                <nav>
                  <ul className="flex flex-col justify-center items-start gap-4 text-xl">
                    <Link href={"/support"} className="cursor-pointer">
                      Support
                    </Link>
                    <li className="cursor-pointer">Documentation</li>
                  </ul>
                </nav>
              ) : (
                <Sidebar />
              )}
            </aside>
          </Drawer>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="max-sm:hidden" href="/">
            <Image
              width={40}
              height={40}
              src={logoB}
              alt="Logo"
              priority
              className="dark:invert"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <nav>
            <ul className="flex justify-center items-end  gap-4 ">
              <h2 className="font-bold text-2xl text-black dark:text-white cursor-pointer">
                Dev
              </h2>
              <Link href={"/support"} className="cursor-pointer max-sm:hidden">
                Support
              </Link>
              <li className="cursor-pointer max-sm:hidden">Documentation</li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal">
          {session ? (
            <DropdownUser />
          ) : (
            <Link href={"/auth/signin"}>
              <button className="btn-primary py-1.5">LOG IN</button>
            </Link>
          )}
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
