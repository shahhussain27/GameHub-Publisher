import React, { useState } from "react";
import DataStatsOne from "../DataStats/DataStatsOne";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import TextInput from "../Atoms/Inputs/TextInput";

const Discounts = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        backdrop="opaque"
        isDismissable={false}
        hideCloseButton={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-blur-sm",
          body: "",
        }}
        style={{ minWidth: "70%", minHeight: "70%" }}
      >
        <ModalContent className="bg-white dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a] rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-extrabold text-2xl">
                Create Deals
              </ModalHeader>
              <ModalBody className="flex justify-center items-center font-extrabold text-4xl">
                Coming Soon
              </ModalBody>
              <ModalFooter>
                <button onClick={onClose} className="btn-danger py-2.5">
                  Close
                </button>
                <button
                  className="disabled:opacity-30 disabled:cursor-not-allowed btn-primary py-2.5"
                  disabled={true}
                >
                  Create
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <DataStatsOne />
      <div className="mt-12 gap-4">
        <div className="flex flex-col justify-center items-center gap-6 ">
          <Image
            src={"/assets/discount.svg"}
            alt="discount"
            height={300}
            width={300}
            className="opacity-70"
          />
          <h2 className="font-extrabold text-2xl text-center">
            You have no active deals yet.
            <br /> Start attracting more customers by creating new deals.
          </h2>
          <button className=" btn-primary py-2.5 px-4" onClick={onOpen}>
            Create Deal
          </button>
        </div>
      </div>
    </>
  );
};

export default Discounts;
