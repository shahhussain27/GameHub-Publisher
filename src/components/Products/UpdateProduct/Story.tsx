import React, { useState, useContext } from "react";
import Image from "next/image";
import { CiCirclePlus, CiTrash } from "react-icons/ci";
import { ProductContext } from "@/context/ProductContext";
import { IoCheckmark } from "react-icons/io5";
import { MdError, MdCheckCircle } from "react-icons/md";

const Story = ({ id, productCarouselImages }: any) => {
  const { loading, response, updateProduct } = useContext(ProductContext);
  const [content, setContent] = useState([]);
  const [contentPre, setContentPre] = useState(productCarouselImages || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleteIndex, setDeleteIndex] = useState([]);

  const handleAddContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setContent((pre: any) => [...pre, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContentPre((pre: any) => [...pre, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (content.length > 0 || deleteIndex.length > 0) {
      updateProduct({
        id,
        productCarouselImages: content,
        deleteIndex: deleteIndex,
      });
      if (!loading) {
        setContentPre((prev: any) =>
          prev.filter((_: any, idx: number) => !deleteIndex.includes(idx))
        );
        setDeleteIndex([]);
      }
    } else {
      alert("No file selected to save.");
    }
  };

  return (
    <section>
      <div className="">
        <div>
          <div className="flex flex-col justify-between items-center gap-4 bg-slate-100  w-[1080px] h-[480px] p-2 rounded-lg dark:bg-[#061323]">
            <div className="flex flex-col justify-center items-center gap-4 w-full h-[350px] bg-slate-200 dark:bg-dark rounded-lg">
              {contentPre[0] && (
                <Image
                  src={
                    productCarouselImages[currentIndex]?.fileUrl ||
                    contentPre[currentIndex]
                  }
                  alt="uplaod"
                  height={200}
                  width={200}
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              )}
              {!contentPre[0] && (
                <>
                  <Image
                    src={"/assets/upload_image.svg"}
                    alt="uplaod"
                    height={200}
                    width={200}
                    className="dark:invert dark:opacity-45"
                  />
                  <h2>No data to display</h2>
                </>
              )}
            </div>
            <div className="flex gap-2 w-full h-[100px] bg-slate-200 dark:bg-dark rounded-lg p-2 overflow-x-scroll">
              {contentPre.map((src: any, index: any) => (
                <div key={src.fileUrlKey || index} className="relative group">
                  {deleteIndex.includes(index) ? (
                    <IoCheckmark
                      onClick={() =>
                        setDeleteIndex((prev: number[]) =>
                          prev.filter((p) => p !== index)
                        )
                      }
                      className="transition delay-300 duration-300 ease-in-out absolute inset-0 ml-auto my-1 mx-1 p-1 text-white bg-rose-600 hover:bg-rose-700 text-3xl rounded-lg cursor-pointer"
                    />
                  ) : (
                    <CiTrash
                      onClick={() =>
                        setDeleteIndex((prev: number[]) => [...prev, index])
                      }
                      className="transition delay-300 duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 ml-auto my-1 mx-1 p-1 text-white bg-rose-600 hover:bg-rose-700 text-3xl rounded-lg cursor-pointer"
                    />
                  )}

                  <Image
                    src={src.fileUrl || contentPre[index]}
                    alt="upload"
                    height={85}
                    width={150}
                    className={`${currentIndex === index || deleteIndex.includes(index) ? `${deleteIndex.includes(index) ? "outline outline-2 outline-offset-2 outline-rose-700" : "outline outline-2 outline-offset-2 outline-primary"} ` : ""} w-[150px] h-[85px] rounded object-cover cursor-pointer`}
                    onClick={() => setCurrentIndex(index)}
                  />
                </div>
              ))}

              <label
                htmlFor="content"
                className="flex justify-center items-center group bg-slate-50 w-[150px] h-[85px] rounded cursor-pointer dark:bg-[#061323]"
              >
                <CiCirclePlus className="text-3xl group-hover:text-primary" />
              </label>
              <input
                type="file"
                id="content"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleAddContent}
              />
            </div>
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
        <button
          disabled={content.length === 0}
          onClick={handleSave}
          className="btn-primary py-1.5 px-3"
        >
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
        </button>{" "}
      </div>
    </section>
  );
};

export default Story;
