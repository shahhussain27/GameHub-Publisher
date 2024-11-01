"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Carousel from "@/components/Products/Product/Story/StoryCarousel";
import Details from "@/components/Products/Product/Details/Details";

const Page = ({ params }: any) => {
  const [product, setProduct] = useState({});

  const getProductById = async () => {
    try {
      const response = await fetch(`/api/product/${params.slug}`, {
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
    getProductById();
  }, [params.slug]);

  return (
    <DefaultLayout>
      <Breadcrumb
        pageName={`${(product as any).productName || "Product Name"} `}
      />
      <div className="flex flex-col gap-16">
        <section className="flex items-start justify-center gap-4">
          <Details product={product} />
        </section>
        <section className="">
          <Carousel />
        </section>
        <section className="w-full">
          <p>Coming Soon...</p>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Page;
