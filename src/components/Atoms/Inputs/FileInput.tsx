"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsUpload } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const FileInput = ({ labelText, w, h, onChange, selectedFile }: any) => {
  const [file, setFile] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      if (onChange) {
        onChange(e);
      }
      const fileURL = URL.createObjectURL(selectedFile || uploadedFile);
      setPreview(fileURL);
    }
  };

  const handleDeleteClick = () => {
    setPreview(null);
  };


  return (
    <div className={`col-span-5 xl:col-span-2 w-[${w}px]`}>
      <div className=" shadow-1 border-4 border-dotted rounded-xl border-primary/40 dark:shadow-card ">
        <div className="p-7">
          <form>
            {preview ? (
              <div className="relative group">
                <Image
                  src={preview}
                  alt="Uploaded file preview"
                  width={100}
                  height={100}
                  className={`rounded-lg object-fit w-full h-[${h}px]`}
                />
                <button
                  type="button"
                  onClick={handleDeleteClick}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <AiOutlineDelete className="text-white text-4xl hover:bg-rose-500 p-1 rounded-full" />
                </button>
              </div>
            ) : (
              <>
                <div
                  id="FileUpload"
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded-xl  px-4 py-4 sm:py-7.5"
                >
                  <input
                    type="file"
                    name={labelText}
                    id={labelText}
                    accept="image/png, image/jpg, image/jpeg"
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full border border-stroke bg-white dark:border-dark-3 dark:bg-gray-dark">
                      <BsUpload className="text-primary" />
                    </span>

                    <button className="bg-primary hover:bg-primary/90 text-white rounded-full py-1.5 px-2 cursor-pointer mt-4">
                      Browser Computer ({w}x{h}px)
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
