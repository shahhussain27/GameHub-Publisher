"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import {
  CiWavePulse1,
  CiGlobe,
  CiCirclePlus,
  CiHome,
  CiDiscount1,
} from "react-icons/ci";
import CreateProduct from "../Products/CreateProduct";
import { ProductContext } from "@/context/ProductContext";

const Sidebar = () => {
  const { product } = useContext(ProductContext);
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();

  const menuGroups = [
    {
      name: "MAIN MENU",
      menuItems: [
        {
          icon: <CiHome className="text-2xl" />,
          label: "Dashboard",
          route: "/dashboard",
        },
        {
          icon: <CiDiscount1 className="text-2xl" />,
          label: "Special Deals",
          route: "/deals",
          new: true,
        },
      ],
    },
    {
      name: "YOUR PRODUCTS",
      menuItems: [
        {
          icon: <CiCirclePlus className="text-2xl" />,
          label: `Create Product`,
          route: `/products/create`,
        },
        ...product.map((item: any) => ({
          icon: "",
          label:
            item.productName.length > 20
              ? `${item.productName.substring(0, item.productName.length - 8)}...`
              : item.productName,
          route: `/products/${item._id}`,
          children: [
            {
              icon: <CiWavePulse1 />,
              label: "Revenue Analytics",
              route: `/products/analytics/${item._id}`,
            },
            {
              icon: <CiGlobe />,
              label: "World Analytics",
              route: `/products/analytics/world_analtytics/${item._id}`,
            },
          ], // dropdown
        })),
      ],
    },
  ];

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
        }}
      >
        <ModalContent className="bg-white dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a] rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-extrabold text-2xl">
                Create Product
              </ModalHeader>
              <CreateProduct onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
      <aside
        className={`absolute left-0 top-0 z-48 flex h-screen w-72.5 flex-col overflow-y-hidden border-r py-10 border-stroke bg-transparent dark:border-stroke-dark lg:static lg:translate-x-0 max-sm:border-0 `}
      >
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6 max-sm:mt-10">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3
                  className={`mb-5 text-sm font-medium text-dark-4 dark:text-dark-6`}
                >
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <>
                      {menuItem.label !== "Create Product" ? (
                        <SidebarItem
                          key={menuIndex}
                          item={menuItem}
                          pageName={pageName}
                          setPageName={setPageName}
                        />
                      ) : (
                        <button
                          onClick={onOpen}
                          className="btn-primary flex justify-start items-center gap-2 py-2.5"
                        >
                          {menuItem.icon}
                          {menuItem.label}
                        </button>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
