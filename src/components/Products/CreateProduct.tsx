import React, { useState } from "react";
import TextInput from "../Atoms/Inputs/TextInput";
import { ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";

const CreateProduct = ({ onClose }: any) => {
  const [productName, setProductName] = useState("");
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
        <button onClick={onClose} className="btn-primary py-2.5">
          Create
        </button>
      </ModalFooter>
    </>
  );
};

export default CreateProduct;
