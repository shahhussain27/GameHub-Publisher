"use client";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProductContext = createContext(null);

const ProductProvider = ({ children }: any) => {
  const [loading, setLoadig] = useState(false);
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

  const updateProduct = async ({
    id,
    onClose,
    productImage,
    productImageKey,
    productName,
    productPrice,
    productPublisher,
    productDeveloper,
    productPlatform,
    frontPoster,
    frontPosterKey,
    backPoster,
    backPosterKey,
    title,
    productCarouselImages,
    deleteIndex,
    productFile,
    productFileURLKey,
  }: any) => {
    setLoadig(true);
    const productData = new FormData();
    productData.append("id", id);
    productData.append("productImage", productImage);
    productData.append("productImageKey", productImageKey);
    productData.append("productName", productName);
    productData.append("productPrice", productPrice);
    productData.append("productPublisher", productPublisher);
    productData.append("productDeveloper", productDeveloper);
    productData.append("productPlatform", productPlatform);
    productData.append("frontPoster", frontPoster);
    productData.append("frontPosterKey", frontPosterKey);
    productData.append("backPoster", backPoster);
    productData.append("backPosterKey", backPosterKey);
    productData.append("title", title);
    // productData.append("productCarouselImages", productCarouselImages);
    productData.append("deleteIndex", deleteIndex);
    productData.append("productFile", productFile);
    productData.append("productFileURLKey", productFileURLKey);

    if (productCarouselImages && productCarouselImages.length > 0) {
      for (const file of productCarouselImages) {
        if (file instanceof File) {
          productData.append("productCarouselImages", file);
        }
      }
    } else {
      productData.append("productCarouselImages", null);
    }

    try {
      const response = await fetch("/api/product/update", {
        method: "PUT",
        body: productData,
      });

      if (!response.ok) {
        setLoadig(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setProduct((prevProducts: any) =>
        prevProducts.map((product: any) =>
          product._id === id ? { ...product, ...json.data } : product
        )
      );
      onClose();
      setLoadig(false);
    } catch (error) {
      console.error(error);
      setLoadig(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        loading,
        product,
        setProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
