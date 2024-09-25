import React, { useState, useContext } from "react";
import Image from "next/image";
import TextInput from "../Atoms/Inputs/TextInput";
import { ModalBody, ModalFooter } from "@nextui-org/modal";
import { ProductContext } from "@/context/ProductContext";

const CreateProduct = ({ onClose }: any) => {
  const { setProduct } = useContext(ProductContext);
  const [productName, setProductName] = useState("");
  const [loading, setLoading] = useState(false);

  const addProducts = async (productName: string) => {
    try {
      const response = await fetch("/api/product/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName }),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setProduct((pre: any) => [...pre, json.data]);
      setLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const onSubmit = () => {
    if (productName.length <= 0) {
      return alert("Enter Project Name");
    }
    setLoading(true);
    addProducts(productName);
  };

  return (
    <>
      <ModalBody>
        <p className="mb-3">
          To connect the GameHub Store with the Software Developer Kit, you must
          first create a product in the Developer Portal associated with your
          game.
        </p>
        <TextInput
          labelText={"Product name"}
          placeholderText={"Product Name"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductName(e.target.value)
          }
        />
        <h4 className="text-dark-2 mb-3 dark:text-white">
          https://store.gamehub.com/games/{`${productName}`}
        </h4>
        <p>
          The slug is automatically generated using your product name. This
          cannot be modified.
        </p>
      </ModalBody>
      <ModalFooter>
        <button onClick={onClose} className="btn-danger py-2.5">
          Close
        </button>
        <button onClick={onSubmit} className="btn-primary py-2.5">
          {loading ? (
            <Image
              className="w-6 h-6 dark:invert"
              src={"/assets/loading.svg"}
              alt="Logo"
              width={100}
              height={100}
            />
          ) : (
            "Create"
          )}
        </button>
      </ModalFooter>
    </>
  );
};

export default CreateProduct;
