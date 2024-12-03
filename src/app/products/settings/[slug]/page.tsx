"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Posters from "@/components/Products/UpdateProduct/Posters";
import Story from "@/components/Products/UpdateProduct/Story";
import DeleteProduct from "@/components/Products/UpdateProduct/DeleteProduct";
import UploadFile from "@/components/Products/UpdateProduct/UploadFile";

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
      <Breadcrumb pageName={"Product Settings"} />
      <div className="max-sm:hidden">
        <Tabs
          aria-label="Options"
          fullWidth={true}
          classNames={{
            base: "rounded-lg text-dark text-start bg-white dark:bg-gray-dark dark:text-white",
            tabContent: "",
            cursor: "rounded-lg bg-primary/[.07] dark:bg-white/10",
            panel:
              "flex justify-center p-6 mt-4 rounded-lg bg-primary/[.07] dark:bg-white/10 overflow-scroll",
          }}
        >
          <Tab key="poster" title="Product Poster">
            <Posters
              productFrontPoster={(product as any).productFrontPoster}
              productFrontPosterKey={(product as any).productFrontPosterKey}
              productBackPoster={(product as any).productBackPoster}
              productBackPosterKey={(product as any).productBackPosterKey}
              productTitle={(product as any).productTitle}
              productGenre={(product as any).genres}
              productFeature={(product as any).features}
              id={(product as any)._id}
            />
          </Tab>
          <Tab key="story" title="Story Overview">
            <Story
              id={(product as any)._id}
              productCarouselImages={(product as any).productCarouselImages}
            />
          </Tab>
          <Tab key="file" title="Upload File">
            <UploadFile
              id={(product as any)._id}
              productFileURL={(product as any).productFileURL}
              productFileURLKey={(product as any).productFileURLKey}
              productFileName={(product as any).productFileName}
              productFileSize={(product as any).productFileSize}
              productFileType={(product as any).productFileType}
            />
          </Tab>
          <Tab key="delete" title="Delete Product">
            <DeleteProduct id={params.slug} />
          </Tab>
        </Tabs>
      </div>
      <div className="h-screen lg:hidden">desktop only</div>
    </DefaultLayout>
  );
};

export default Page;
