"use client";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProductContext = createContext(null);

const ProductProvider = ({ children }: any) => {
  const [loading, setLoadig] = useState(false);
  const [response, setResponse] = useState({
    isResponse: false,
    status: null,
    success: false,
    statusText: null,
  });
  const [product, setProduct] = useState([]);
  const [totalDownloads, setTotalDownloads] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

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
      setTotalDownloads(json.totalDownloads);
      setTotalPayment(json.totalRevenueAmount);
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
    productDiscount,
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
    productData.append("productDiscount", productDiscount);
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
        setResponse({
          isResponse: true,

          status: response.status,
          success: false,
          statusText: response.statusText,
        });
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setProduct((prevProducts: any) =>
        prevProducts.map((product: any) =>
          product._id === id ? { ...product, ...json.data } : product
        )
      );
      setResponse({
        isResponse: true,
        status: response.status,
        success: true,
        statusText: response.statusText,
      });
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
        response,
        product,
        totalDownloads,
        totalPayment,
        setProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
