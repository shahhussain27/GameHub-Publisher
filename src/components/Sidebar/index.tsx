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
import { CiWavePulse1, CiGlobe, CiCirclePlus } from "react-icons/ci";
import CreateProduct from "../Products/CreateProduct";
import { ProductContext } from "@/context/ProductContext";
import Product from "@/lib/models/Product";

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
          icon: (
            <svg
              className="text- fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00009 17.2498C8.58588 17.2498 8.25009 17.5856 8.25009 17.9998C8.25009 18.414 8.58588 18.7498 9.00009 18.7498H15.0001C15.4143 18.7498 15.7501 18.414 15.7501 17.9998C15.7501 17.5856 15.4143 17.2498 15.0001 17.2498H9.00009Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C11.2749 1.25 10.6134 1.44911 9.88928 1.7871C9.18832 2.11428 8.37772 2.59716 7.36183 3.20233L5.90622 4.06943C4.78711 4.73606 3.89535 5.26727 3.22015 5.77524C2.52314 6.29963 1.99999 6.8396 1.65907 7.55072C1.31799 8.26219 1.22554 9.0068 1.25519 9.87584C1.2839 10.717 1.43105 11.7397 1.61556 13.0219L1.90792 15.0537C2.14531 16.7036 2.33368 18.0128 2.61512 19.0322C2.90523 20.0829 3.31686 20.9169 4.05965 21.5565C4.80184 22.1956 5.68984 22.4814 6.77634 22.6177C7.83154 22.75 9.16281 22.75 10.8423 22.75H13.1577C14.8372 22.75 16.1685 22.75 17.2237 22.6177C18.3102 22.4814 19.1982 22.1956 19.9404 21.5565C20.6831 20.9169 21.0948 20.0829 21.3849 19.0322C21.6663 18.0129 21.8547 16.7036 22.0921 15.0537L22.3844 13.0219C22.569 11.7396 22.7161 10.717 22.7448 9.87584C22.7745 9.0068 22.682 8.26219 22.3409 7.55072C22 6.8396 21.4769 6.29963 20.7799 5.77524C20.1047 5.26727 19.2129 4.73606 18.0938 4.06943L16.6382 3.20233C15.6223 2.59716 14.8117 2.11428 14.1107 1.7871C13.3866 1.44911 12.7251 1.25 12 1.25ZM8.09558 4.51121C9.15309 3.88126 9.89923 3.43781 10.5237 3.14633C11.1328 2.86203 11.5708 2.75 12 2.75C12.4293 2.75 12.8672 2.86203 13.4763 3.14633C14.1008 3.43781 14.8469 3.88126 15.9044 4.51121L17.2893 5.33615C18.4536 6.02973 19.2752 6.52034 19.8781 6.9739C20.4665 7.41662 20.7888 7.78294 20.9883 8.19917C21.1877 8.61505 21.2706 9.09337 21.2457 9.82469C21.2201 10.5745 21.0856 11.5163 20.8936 12.8511L20.6148 14.7884C20.3683 16.5016 20.1921 17.7162 19.939 18.633C19.6916 19.5289 19.3939 20.0476 18.9616 20.4198C18.5287 20.7926 17.9676 21.0127 17.037 21.1294C16.086 21.2486 14.8488 21.25 13.1061 21.25H10.8939C9.15124 21.25 7.91405 21.2486 6.963 21.1294C6.03246 21.0127 5.47129 20.7926 5.03841 20.4198C4.60614 20.0476 4.30838 19.5289 4.06102 18.633C3.80791 17.7162 3.6317 16.5016 3.3852 14.7884L3.10643 12.851C2.91437 11.5163 2.77991 10.5745 2.75432 9.82469C2.72937 9.09337 2.81229 8.61505 3.01167 8.19917C3.21121 7.78294 3.53347 7.41662 4.12194 6.9739C4.72482 6.52034 5.54643 6.02973 6.71074 5.33615L8.09558 4.51121Z"
                fill=""
              />
            </svg>
          ),
          label: "Dashboard",
          route: "/dashboard",
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
          label: item.productName,
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
              route: `/products/analytics/world_analytics/${item._id}`,
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
