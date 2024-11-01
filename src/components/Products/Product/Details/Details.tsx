import React from "react";
import Image from "next/image";

const Details = ({ product }: any) => {
  return (
    <>
      <div className="flex max-sm:flex-col items-start gap-4">
        <div className="flex flex-col justify-center gap-4 w-2/4 max-sm:w-full">
          <div className="w-full h-[250px] bg-slate-600 rounded-xl">
            {" "}
            <Image
              src={product.productImage || "/assets/card-img.jpg"}
              alt="Card"
              height={100}
              width={100}
              loading="lazy"
              className="w-full h-[250px] rounded-lg object-cover"
            />
          </div>
          <div className="w-full h-[80px] bg-slate-800 rounded-xl cursor-pointer hover:border-2 border-white">
            Ratings
          </div>
          <div className=" w-full h-1/4 ">
            <table className="w-full">
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Price</td>
                <td className="text-dark dark:text-white">
                  {product.productPrice > 0
                    ? `₹${product.productPrice}`
                    : "Free"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Discount's</td>
                <td className="text-dark dark:text-white">None</td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Developer</td>
                <td className="text-dark dark:text-white">
                  {product.productDeveloper || "GameHub"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Publisher</td>
                <td className="text-dark dark:text-white">
                  {product.productPublisher || "GameHub"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Publish Date</td>
                <td className="text-dark dark:text-white">
                  {product.createdAt
                    ? new Date(product.createdAt).toLocaleDateString("en-US")
                    : "Date not available"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Platform</td>
                <td className="text-dark dark:text-white">
                  {product.productPlatform || "Windows"}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="bg-slate-400 w-full h-[400px] rounded-xl">
            Poster & Video
          </div>
          <div className="w-full text-dark-2 dark:text-white font-medium text-wrap">
            {product.productTitle || "No Title to display"}
            <span className="invisible ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            in? Obcaecati atque neque ipsa eius? Saepe reprehenderit nemo ipsam
            molestiae soluta corporis ab dolore tempore. Molestias vero officiis
            nihil voluptatibus ipsam nostrum aliquid id rem dicta.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
