import React from "react";
import { Input } from "@nextui-org/input";
import Image from "next/image";

const Posters = () => {
  return (
    <>
      {" "}
      <div className="flex gap-6">
        <div className="flex flex-col justify-center items-center gap-4 bg-slate-100 hover:bg-slate-200  w-[282px] h-[400px] rounded-lg dark:bg-[#061323] dark:hover:bg-[#061323]/60 cursor-pointer">
          <Image
            src={"/assets/upload_image.svg"}
            alt="uplaod"
            height={200}
            width={200}
            className="dark:invert dark:opacity-45"
          />
          <h2>Front Poster 282 x 400px</h2>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-4 bg-slate-100 hover:bg-slate-200 w-[766px] h-[400px] rounded-lg dark:bg-[#061323] dark:hover:bg-[#061323]/60 cursor-pointer">
            <Image
              src={"/assets/upload_image.svg"}
              alt="uplaod"
              height={200}
              width={200}
              className="dark:invert dark:opacity-45"
            />
            <h2>Back Poster 766 x 488px</h2>
          </div>
          <Input
            type="text"
            label="Title"
            placeholder="Enter your product title"
            classNames={{
              label: "absolute top-1 left-3 text-xs",
              inputWrapper:
                "text-dark bg-slate-100 mt-4 rounded-lg dark:text-white dark:bg-[#061323]",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Posters;
