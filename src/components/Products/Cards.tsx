import React, { useState, useEffect, useContext, useMemo } from "react";
import Card from "./Card";
import { CiGrid41, CiCircleList } from "react-icons/ci";
import { ProductContext } from "@/context/ProductContext";
import { setCookie, getCookie } from "cookies-next";

const Cards = () => {
  const { product } = useContext(ProductContext);
  const [view, setView] = useState(() => {
    const initialView = getCookie("View");
    return initialView !== undefined ? JSON.parse(initialView as string) : true;
  });

  useEffect(() => {
    setCookie("View", view);
  }, [view]);

  const renderedProducts = useMemo(() => {
    return product.map((items: any) => (
      <Card
        key={items._id}
        productImage={items.productImage}
        productImageKey={items.productImageKey}
        productName={items.productName}
        productPrice={items.productPrice}
        productPublisher={items.productPublisher}
        productDeveloper={items.productDeveloper}
        productPlatform={items.productPlatform}
        productDiscount={items.productDiscount}
        view={view}
        id={items._id}
        analyticsPage={`/products/analytics/${items._id}`}
        settingsPage={`/products/settings/${items._id}`}
      />
    ));
  }, [product, view]);

  return (
    <>
      <section className="flex justify-end items-end gap-1 py-4 w-full text-2xl">
        <button
          onClick={() => setView(true)}
          className={`${view ? "text-primary bg-primary/[.07] dark:bg-slate-800 " : ""} hover:bg-primary/[.07] dark:hover:bg-slate-800 p-1 rounded`}
        >
          <CiGrid41 />
        </button>
        <button
          onClick={() => setView(false)}
          className={`${!view ? "text-primary bg-primary/[.07] dark:bg-slate-800 " : ""} hover:bg-primary/[.07] dark:hover:bg-slate-800 p-1 rounded`}
        >
          <CiCircleList />
        </button>
      </section>

      {product.length <= 0 && (
        <div className="flex justify-center items-center my-4">
          <h2 className="font-bold text-5xl text-dark dark:text-white uppercase">
            No Data
          </h2>
        </div>
      )}

      <section
        className={`grid ${view ? "grid-cols-3 gap-y-10" : "grid-cols-1 gap-y-4"}   max-sm:grid-cols-1 max-md:grid-cols-2`}
      >
        {renderedProducts}
      </section>
    </>
  );
};

export default Cards;
