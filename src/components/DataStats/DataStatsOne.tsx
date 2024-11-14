import React, { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import { dataStats } from "@/types/dataStats";
import { BiSolidOffer } from "react-icons/bi";
import { TbCoinRupeeFilled } from "react-icons/tb";

const DataStatsOne = () => {
  const { product, totalDownloads, totalPayment } = useContext(ProductContext);
  const dataStatsList = [
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5626 13.0002C10.5626 11.654 11.6539 10.5627 13.0001 10.5627C14.3463 10.5627 15.4376 11.654 15.4376 13.0002C15.4376 14.3464 14.3463 15.4377 13.0001 15.4377C11.6539 15.4377 10.5626 14.3464 10.5626 13.0002Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.16675 13.0002C2.16675 14.7762 2.62713 15.3743 3.54788 16.5705C5.38638 18.959 8.4697 21.6668 13.0001 21.6668C17.5305 21.6668 20.6138 18.959 22.4523 16.5705C23.373 15.3743 23.8334 14.7762 23.8334 13.0002C23.8334 11.2242 23.373 10.6261 22.4523 9.42985C20.6138 7.04135 17.5305 4.3335 13.0001 4.3335C8.4697 4.3335 5.38638 7.04135 3.54788 9.42985C2.62713 10.6261 2.16675 11.2242 2.16675 13.0002ZM13.0001 8.93766C10.7564 8.93766 8.93758 10.7565 8.93758 13.0002C8.93758 15.2438 10.7564 17.0627 13.0001 17.0627C15.2437 17.0627 17.0626 15.2438 17.0626 13.0002C17.0626 10.7565 15.2437 8.93766 13.0001 8.93766Z"
            fill="white"
          />
        </svg>
      ),
      color: "#3FD97F",
      title: "Total Downloads",
      value: totalDownloads,
      growthRate: 0.0,
    },
    {
      icon: <TbCoinRupeeFilled className="text-2xl text-white" />,
      color: "#FF9C55",
      title: "Total Income",
      value: `₹${totalPayment.toLocaleString()}`,
      growthRate: 0.0,
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0425 4.80065L16.8758 3.66364C14.9739 2.66555 14.0229 2.1665 13 2.1665C11.977 2.1665 11.026 2.66555 9.12411 3.66363L6.95744 4.80065C5.03588 5.80904 3.90635 6.40179 3.20629 7.1946L13 12.0914L22.7936 7.1946C22.0936 6.40179 20.964 5.80904 19.0425 4.80065Z"
            fill="white"
          />
          <path
            d="M23.5607 8.62788L13.8125 13.502V23.7292C14.5902 23.5355 15.4751 23.0711 16.8758 22.336L19.0425 21.199C21.3734 19.9758 22.5389 19.3642 23.1861 18.2651C23.8333 17.1661 23.8333 15.7984 23.8333 13.0632V12.9365C23.8333 10.8861 23.8333 9.60421 23.5607 8.62788Z"
            fill="white"
          />
          <path
            d="M12.1875 23.7292V13.502L2.43923 8.62788C2.16663 9.60421 2.16663 10.8861 2.16663 12.9365V13.0632C2.16663 15.7984 2.16663 17.1661 2.81381 18.2651C3.46099 19.3642 4.62647 19.9758 6.95744 21.199L9.12411 22.336C10.5248 23.0711 11.4097 23.5355 12.1875 23.7292Z"
            fill="white"
          />
        </svg>
      ),
      color: "#8155FF",
      title: "Total Product",
      value: `${product.length}`,
      growthRate: null,
    },
    {
      icon: <BiSolidOffer className="text-2xl text-white" />,
      color: "#18BFFF",
      title: "Active Offers",
      value: "0",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
          >
            <div
              className="flex h-14.5 w-14.5 items-center justify-center rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  {item.value}
                </h4>
                <span className="text-body-sm font-medium">{item.title}</span>
              </div>

              {item.growthRate != null && (
                <span
                  className={`flex items-center gap-1.5 text-body-sm font-medium ${
                    item.growthRate > 0 ? "text-green" : "text-red"
                  }`}
                >
                  {item.growthRate}%
                  {item.growthRate > 0 ? (
                    <svg
                      className="fill-current"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                        fill=""
                      />
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                        fill=""
                      />
                    </svg>
                  )}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
