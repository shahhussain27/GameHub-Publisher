import React, { useContext, useState } from "react";
import Image from "next/image";
import { BsFileEarmarkZip, BsFiletypeExe } from "react-icons/bs";
import { ProductContext } from "@/context/ProductContext";
import { MdError, MdCheckCircle } from "react-icons/md";

const UploadFile = ({
  id,
  productFileURL,
  productFileURLKey,
  productFileName,
  productFileSize,
  productFileType,
}: any) => {
  const { loading, response, updateProduct } = useContext(ProductContext);
  const [file, setFile] = useState({
    name: productFileName || null,
    size: productFileSize || null,
    type: productFileType || null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleClickUpload = () => {
    document.getElementById("fileInput").click();
  };

  // pending: fix file data change after changing fetching file in client-side
  const fileDisplay =
    file?.name !== null ? (
      <div className="flex gap-4 py-2.5 pr-6">
        {file?.type === "application/x-zip-compressed" ? (
          <BsFileEarmarkZip className="text-4xl" />
        ) : (
          <BsFiletypeExe className="text-4xl" />
        )}

        <div className="tracking-wider leading-tight">
          <h2 className="font-bold">{file?.name}</h2>
          <h3 className="font-light">
            {(file?.size / (1024 * 1024)).toFixed(2)} MB
          </h3>
        </div>
        <button
          onClick={() =>
            setFile({
              name: null,
              size: null,
              type: null,
            })
          }
          className="btn-primary py-2.5 px-2 scale-75"
        >
          Update
        </button>
      </div>
    ) : (
      <div
        onClick={handleClickUpload}
        className="flex flex-col justify-center items-center gap-4 text-center cursor-pointer"
      >
        <Image
          src={"/assets/upload_file.svg"}
          alt="upload file"
          height={250}
          width={250}
          className="dark:invert opacity-45"
        />
        <h3>
          <span className="text-primary font-semibold hover:underline dark:invert">
            Click here
          </span>{" "}
          to upload your file or drag and drop.
        </h3>
      </div>
    );

  const handleSave = () => {
    if (file) {
      updateProduct({
        id,
        productFile: file,
        productFileURLKey: productFileURLKey,
      });
    } else {
      alert("No file selected to save.");
    }
  };

  return (
    <>
      <section>
        <div className="flex gap-6">
          <div>
            <div
              onClick={file ? null : handleClickUpload}
              className="flex flex-col justify-center items-center gap-12 bg-slate-100 w-[1080px] h-[480px] rounded-lg dark:bg-[#061323] cursor-pointer"
            >
              {fileDisplay}
              <input
                type="file"
                id="fileInput"
                accept=".zip,.exe, .apk"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          {response.isResponse && (
            <>
              {!response.success ? (
                <div className="flex justify-center items-center gap-2 text-rose-600 mx-4">
                  <MdError className="text-2xl" />{" "}
                  <h2>
                    {response.status} | {response.statusText}
                  </h2>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2 text-green-600 mx-4">
                  <MdCheckCircle className="text-2xl" />{" "}
                  <h2>
                    {response.status} | {response.statusText}
                  </h2>
                </div>
              )}
            </>
          )}
          <button onClick={handleSave} className="btn-primary py-1.5 px-3">
            {loading ? (
              <Image
                className="w-6 h-6 dark:invert"
                src={"/assets/loading.svg"}
                alt="Logo"
                width={100}
                height={100}
              />
            ) : (
              " Save Changes"
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default UploadFile;
