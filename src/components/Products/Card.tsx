import React from "react";
import CardImage from "../../../public/assets/card-img.jpg";
import Image from "next/image";
import { CiShoppingCart, CiWavePulse1, CiSun } from "react-icons/ci";
import Link from "next/link";

const Card = ({ view, analyticsPage }: any) => {
  return (
    <div
      className={`${view ? "flex flex-col w-[350px] h-[430px] rounded-[10px] dark:bg-gray-dark" : "flex w-full h-20 items-center px-2 rounded dark:bg-[#020D1A] border border-primary/[.07] dark:border-slate-600 hover:hover:bg-primary/[.07] dark:hover:bg-slate-600"}   bg-white shadow-1 text-black dark:text-white  cursor-pointer`}
    >
      <div className={`${view ? "w-auto h-auto" : "w-25 h-auto"}`}>
        <Image
          src={CardImage}
          alt="Card"
          height={view ? 70 : 100}
          width={view ? 350 : 100}
          className={`${view ? "rounded-t-[10px]" : "rounded"}`}
        />
      </div>
      <div className="flex flex-col gap-6 px-6 py-4">
        <h2 className="font-bold text-xl">Product Name</h2>
        <ul
          className={`${view ? "flex flex-col gap-2 justify-center items-start" : "hidden"} `}
        >
          <li className="flex items-center gap-2 font-medium text-center w-full py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded">
            <CiShoppingCart className="text-2xl" />
            GameHub Store
          </li>
          
            {" "}
            {/* products/analytics/[slug] */}
            <Link href={analyticsPage} className="flex items-center gap-2 font-medium text-center w-full py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded">
              <CiWavePulse1 className="text-2xl" />
              Analytics
            </Link>
          
          <li className="flex items-center gap-2 font-medium text-center w-full py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded">
            <CiSun className="text-2xl" />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
