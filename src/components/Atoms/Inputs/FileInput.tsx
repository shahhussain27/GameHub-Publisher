"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsUpload } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const FileInput = ({ labelText, w, h }: any) => {
  const [file, setFile] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: any) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const fileURL = URL.createObjectURL(uploadedFile);
      setPreview(fileURL);
    }
  };

  const handleDeleteClick = () => {
    setPreview(null);
  };

  return (
    <div className={`col-span-5 xl:col-span-2 w-[${w}px]`}>
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Upload {labelText}
          </h3>
        </div>
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
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded-xl border border-dashed border-gray-4 bg-gray-2 px-4 py-4 hover:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary sm:py-7.5"
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
                    <p className="mt-2.5 text-body-sm font-medium">
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="mt-1 text-body-xs">
                      PNG or JPG (max, {w} X {h}px)
                    </p>
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
