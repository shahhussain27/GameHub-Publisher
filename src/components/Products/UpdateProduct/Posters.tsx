import React, { useContext, useState } from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import Image from "next/image";
import { ProductContext } from "@/context/ProductContext";
import { MdError, MdCheckCircle } from "react-icons/md";
import { genres, features } from "@/lib/utils/gameData";

const Posters = ({
  id,
  productFrontPoster,
  productFrontPosterKey,
  productBackPoster,
  productBackPosterKey,
  productTitle,
  productGenre,
  productFeature,
}: any) => {
  const { loading, response, updateProduct } = useContext(ProductContext);
  const [frontPoster, setFrontPoster] = useState(null);
  const [frontPosterPre, setFrontPosterPre] = useState(null);

  const [backPoster, setBackPoster] = useState(null);
  const [backPosterPre, setBackPosterPre] = useState(null);

  const [title, setTitle] = useState("");

  const [genre, setGenre] = useState([]);
  const [feature, setFeature] = useState([]);

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
      genre: genre,
      feature: feature,
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
              accept="image/png, image/jpeg, image/webp"
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
                accept="image/png, image/jpeg, image/webp"
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
        <div className="">
          <label className="font-bold text-lg">Genre</label>
          <Select
            placeholder="Select an genre"
            selectionMode="multiple"
            className=""
            classNames={{ listbox: "bg-black" }}
            onSelectionChange={(keys) => setGenre(Array.from(keys))}
            selectedKeys={
              productGenre?.[0]?.length > 0
                ? productGenre[0]?.[0]?.split(",")
                : []
            }
          >
            {genres.map((genre) => (
              <SelectItem key={genre.key} value={genre.key}>
                {genre.label}
              </SelectItem>
            ))}
          </Select>
          <label className="font-bold text-lg">Features</label>
          <Select
            placeholder="Select an features"
            selectionMode="multiple"
            className=""
            classNames={{ listbox: "bg-black" }}
            onSelectionChange={(keys) => setFeature(Array.from(keys))}
            selectedKeys={
              productFeature?.[0]?.length > 0
                ? productFeature[0]?.[0]?.split(",")
                : []
            }
          >
            {features.map((features) => (
              <SelectItem key={features.key} value={features.key}>
                {features.label}
              </SelectItem>
            ))}
          </Select>
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
            className="btn-primary py-1.5 px-3"
            disabled={
              !(
                frontPoster ||
                backPoster ||
                title.length > 0 ||
                genre.length > 0 ||
                feature.length > 0
              )
            }
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
