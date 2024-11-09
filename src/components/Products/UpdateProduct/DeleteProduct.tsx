import React, { useState, useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdError, MdCheckCircle } from "react-icons/md";

const DeleteProduct = ({ id }: any) => {
  const { setProduct } = useContext(ProductContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    isResponse: false,
    status: null,
    success: false,
    statusText: null,
  });
  const router = useRouter();

  const deleteProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/product/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        setLoading(false);
        setResponse({
          isResponse: true,
          status: response.status,
          success: false,
          statusText: response.statusText,
        });
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      setProduct((prevProducts: any[]) =>
        prevProducts.filter((p) => p._id !== id)
      );
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <section>
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
      >
        <ModalContent className="bg-white dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a] rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-extrabold text-2xl">
                Confirm Deletion
              </ModalHeader>
              <ModalBody className="">
                <h2 className="font-bold text-rose-500 text-sm">
                  Are you sure you want to delete your product? This action will
                  begin the deletion process immediately and cannot be undone.
                  All associated data will be permanently removed from the
                  system, with no option for recovery.
                </h2>
              </ModalBody>
              <ModalFooter>
                {response.isResponse && (
                  <>
                    {!response.success && (
                      <div className="flex justify-center items-center gap-2 text-rose-600 mx-4">
                        <MdError className="text-2xl" />{" "}
                        <h2>
                          {response.status} | {response.statusText}
                        </h2>
                      </div>
                    )}
                  </>
                )}
                <button className="btn-primary px-8 py-2.5 " onClick={onClose}>
                  Cancel
                </button>
                <button
                  className="btn-danger px-8 py-2.5 "
                  onClick={deleteProduct}
                >
                  {loading ? (
                    <Image
                      className="w-6 h-6"
                      src={"/assets/loading.svg"}
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                  ) : (
                    "Yes, Delete"
                  )}
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="rounded-[10px] border border-stroke mt-4 bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Delete Product
          </h3>
        </div>
        <div className="p-7">
          <p className="text-sm">
            Click PRODUCT DELETE to permanently delete your product, including
            all associated images, links, and content. Once deleted, your
            product will no longer be available for download on GameHub Store.
          </p>
          <br />
          <h2 className="font-bold text-rose-400 text-sm">
            If you request to delete your product, the process will start
            immediately and cannot be undone. After deletion, your product will
            be gone from the system with no option for recovery.
          </h2>

          <div className="flex justify-end gap-3">
            <button className="btn-danger px-10 py-2.5 " onClick={onOpen}>
              PRODUCT DELETE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteProduct;
