"use client";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProductContext = createContext(null);

const ProductProvider = ({ children }: any) => {
  const [product, setProduct] = useState([]);

  const router = useRouter();

  const fetchProduct = async () => {
    try {
      const response = await fetch("/api/product/fetch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setProduct(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
