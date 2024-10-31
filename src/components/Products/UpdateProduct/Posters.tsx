import React, { useContext, useState } from "react";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { ProductContext } from "@/context/ProductContext";

const Posters = ({
  id,
  productFrontPoster,
  productFrontPosterKey,
  productBackPoster,
  productBackPosterKey,
  productTitle,
}: any) => {
  const { loading, updateProduct } = useContext(ProductContext);
  const [frontPoster, setFrontPoster] = useState(null);
  const [frontPosterPre, setFrontPosterPre] = useState(null);

  const [backPoster, setBackPoster] = useState(null);
  const [backPosterPre, setBackPosterPre] = useState(null);

  const [title, setTitle] = useState("");

  const handleFrontImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFrontPoster(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFrontPosterPre(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setBackPoster(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackPosterPre(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateChanages = () => {
    updateProduct({
      id,
      frontPoster: frontPoster,
      frontPosterKey: productFrontPosterKey,
      backPoster: backPoster,
      backPosterKey: productBackPosterKey,
      title: title,
    });
  };

  

  return (
    <>
      <section>
        <div className="flex gap-6">
          <label
            htmlFor="frontPoster"
            className="flex flex-col justify-center items-center gap-4 bg-slate-100 hover:bg-slate-200  w-[282px] h-[400px] rounded-lg dark:bg-[#061323] dark:hover:bg-[#061323]/60 cursor-pointer"
          >
            {frontPosterPre && (
              <Image
                src={frontPosterPre}
                alt="uplaod"
                height={400}
                width={282}
                className="w-full h-[400px] rounded-lg object-cover hover:opacity-85"
              />
            )}
            {!frontPosterPre && (
              <>
                {productFrontPoster && (
                  <Image
                    src={productFrontPoster}
                    alt="uplaod"
                    height={400}
                    width={282}
                    className="w-full h-[400px] rounded-lg object-cover hover:opacity-85"
                  />
                )}
                {!productFrontPoster && (
                  <>
                    <Image
                      src={"/assets/upload_image.svg"}
                      alt="uplaod"
                      height={200}
                      width={200}
                      className="dark:invert dark:opacity-45"
                    />
                    <h2>Front Poster 282 x 400px</h2>
                  </>
                )}
              </>
            )}
            <input
              type="file"
              id="frontPoster"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleFrontImageChange}
            />
          </label>
          <div>
            <label
              htmlFor="backPoster"
              className="flex flex-col justify-center items-center gap-4 bg-slate-100 hover:bg-slate-200 w-[766px] h-[400px] rounded-lg dark:bg-[#061323] dark:hover:bg-[#061323]/60 cursor-pointer"
            >
              {backPosterPre && (
                <Image
                  src={backPosterPre}
                  alt="uplaod"
                  height={400}
                  width={282}
                  className="w-full h-[400px] rounded-lg object-cover hover:opacity-85"
                />
              )}
              {!backPosterPre && (
                <>
                  {productBackPoster && (
                    <Image
                      src={productBackPoster}
                      alt="uplaod"
                      height={400}
                      width={282}
                      className="w-full h-[400px] rounded-lg object-cover hover:opacity-85"
                    />
                  )}
                  {!productBackPoster && (
                    <>
                      {" "}
                      <Image
                        src={"/assets/upload_image.svg"}
                        alt="uplaod"
                        height={200}
                        width={200}
                        className="dark:invert dark:opacity-45"
                      />
                      <h2>Back Poster 766 x 488px</h2>
                    </>
                  )}
                </>
              )}
              <input
                type="file"
                id="backPoster"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleBackImageChange}
              />
            </label>
            <Input
              type="text"
              label="Title"
              value={title || productTitle}
              placeholder="Enter your product title"
              classNames={{
                label: "absolute top-1 left-3 text-xs",
                inputWrapper:
                  "text-dark bg-slate-100 mt-4 rounded-lg dark:text-white dark:bg-[#061323]",
              }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="btn-primary py-1.5 px-3"
            onClick={handleUpdateChanages}
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
          </button>
        </div>
      </section>
    </>
  );
};

export default Posters;
