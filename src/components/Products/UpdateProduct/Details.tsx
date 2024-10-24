import React, { useContext, useState } from "react";
import { ModalBody, ModalFooter } from "@nextui-org/modal";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import Image from "next/image";
import { ProductContext } from "@/context/ProductContext";

const Details = ({
  onClose,
  id,
  productImage,
  productImageKey,
  productName,
  productPrice,
  productPublisher,
  productDeveloper,
  productPlatform,
}: any) => {
  const { loading, updateProduct } = useContext(ProductContext);

  const [image, setImage] = useState(null);
  const [imagePre, setImagePre] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platform, setPlatform] = useState("");

  const onSubmit = () => {
    updateProduct({
      id,
      onClose,
      productImage: image,
      productImageKey: productImageKey,
      productName: name,
      productPrice: price,
      productPublisher: publisher,
      productDeveloper: developer,
      productPlatform: platform,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePre(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ModalBody>
        <div className="flex max-sm:flex-col gap-[26px]">
          <label
            htmlFor="productImage"
            className="flex flex-col justify-center items-center gap-4 bg-slate-100 hover:bg-slate-200 w-[350px] max-sm:w-full h-[224px] rounded-lg dark:bg-gray-dark dark:hover:bg-gray-dark/60 cursor-pointer"
          >
            {productImage && (
              <Image
                src={imagePre || productImage}
                alt="uplaod"
                height={224}
                width={350}
                className="w-full h-[224px] rounded-lg object-cover hover:opacity-85"
              />
            )}
            {!productImage && (
              <>
                <Image
                  src={"/assets/upload_image.svg"}
                  alt="uplaod"
                  height={200}
                  width={200}
                  className="dark:invert dark:opacity-45"
                />
                <h2>Choose Image 350 x 224px</h2>
              </>
            )}
          </label>

          <input
            type="file"
            id="productImage"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleImageChange}
          />

          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
            <TextInput
              labelText="Product Name"
              placeholderText="Product Name"
              defaultText={productName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <TextInput
              labelText="Product Price"
              placeholderText="Product Price"
              defaultText={productPrice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(e.target.value)
              }
            />
            <TextInput
              labelText="Developer"
              placeholderText="Developer Name"
              defaultText={productDeveloper}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDeveloper(e.target.value)
              }
            />
            <TextInput
              labelText="Publisher"
              placeholderText="Publisher Name"
              defaultText={productPublisher}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPublisher(e.target.value)
              }
            />
            <TextInput
              labelText="Platform"
              placeholderText="Platform"
              defaultText={productPlatform}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPlatform(e.target.value)
              }
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button onClick={onClose} className="btn-danger py-2.5">
          Close
        </button>
        <button className="btn-primary py-2.5" onClick={onSubmit}>
          {loading ? (
            <Image
              className="w-6 h-6 dark:invert"
              src={"/assets/loading.svg"}
              alt="Logo"
              width={100}
              height={100}
            />
          ) : (
            "Change"
          )}
        </button>
      </ModalFooter>
    </>
  );
};

export default Details;
