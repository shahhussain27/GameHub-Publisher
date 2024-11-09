import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import CardImage from "../../../public/assets/card-img.jpg";
import Image from "next/image";
import { CiShoppingCart, CiWavePulse1, CiSun, CiEdit } from "react-icons/ci";
import Link from "next/link";
import Details from "./UpdateProduct/Details";

const Card = ({
  productImage,
  productImageKey,
  productName,
  productPrice,
  productPublisher,
  productDeveloper,
  productPlatform,
  productDiscount,
  view,
  id,
  analyticsPage,
  settingsPage,
}: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        backdrop="opaque"
        isDismissable={false}
        hideCloseButton={true}
        isOpen={isOpen}
        // size="2xl"
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-blur-sm",
          body: "",
        }}
        style={{ minWidth: "60%" }}
      >
        <ModalContent className="bg-white dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a] rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-extrabold text-2xl">
                Your Product
              </ModalHeader>
              <Details
                onClose={onClose}
                id={id}
                productImage={productImage}
                productImageKey={productImageKey}
                productName={productName}
                productPrice={productPrice}
                productPublisher={productPublisher}
                productDeveloper={productDeveloper}
                productPlatform={productPlatform}
                productDiscount={productDiscount}
              />
            </>
          )}
        </ModalContent>
      </Modal>
      <div
        className={`${view ? "flex flex-col w-[350px] h-[430px] rounded-[10px] dark:bg-gray-dark max-sm:w-full" : "flex w-full h-20 justify-between items-center px-2 rounded dark:bg-[#020D1A] border border-primary/[.07] dark:border-slate-600 hover:hover:bg-primary/[.07] dark:hover:bg-slate-600"}   bg-white shadow-1 text-black dark:text-white  cursor-pointer`}
      >
        <div className={`${view ? "w-auto h-auto" : "flex gap-4 "}`}>
          <Image
            src={productImage || CardImage}
            alt="Card"
            height={view ? 70 : 70}
            width={view ? 350 : 100}
            className={`${view ? "h-[224px] rounded-t-[10px] object-cover" : "w-[100px] h-[70px] rounded object-cover"}`}
            loading="lazy"
          />
          <h2
            className={`${!view ? "font-bold text-xl text-nowrap max-sm:text-sm" : "hidden"}`}
          >
            {productName}
          </h2>
        </div>
        <div className="flex flex-col gap-6 px-6 py-4">
          <h2
            className={`${view ? "flex justify-between items-center font-bold text-xl" : "hidden"}`}
          >
            {productName}
            <span
              onClick={onOpen}
              className="py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiEdit />
            </span>
          </h2>
          {/* Large Screen */}
          <ul
            className={`${view ? "flex flex-col gap-2 justify-center items-start" : "hidden"} `}
          >
            <li className="flex items-center gap-2 font-medium text-center w-full py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded">
              <CiShoppingCart className="text-2xl" />
              GameHub Store
            </li>{" "}
            {/* products/analytics/[slug]  */}
            <Link
              href={analyticsPage}
              className="flex items-center gap-2 font-medium text-center w-full py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiWavePulse1 className="text-2xl" />
              Analytics
            </Link>
            <Link
              href={settingsPage}
              className="flex items-center gap-2 font-medium text-center w-full py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiSun className="text-2xl" />
              Settings
            </Link>
          </ul>
          {/* small screen */}
          <ul
            className={`${!view ? "flex justify-center items-start" : "hidden"} `}
          >
            <span
              onClick={onOpen}
              className=" py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiEdit className="text-2xl max-sm:text-lg" />
            </span>
            <Link
              href={settingsPage}
              className="py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiShoppingCart className="text-2xl max-sm:text-lg" />
            </Link>
            <Link
              href={settingsPage}
              className="py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiWavePulse1 className="text-2xl max-sm:text-lg" />
            </Link>
            <Link
              href={settingsPage}
              className="py-1.5 px-2 hover:bg-primary/[.07] dark:hover:bg-slate-700 rounded"
            >
              <CiSun className="text-2xl max-sm:text-lg" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
