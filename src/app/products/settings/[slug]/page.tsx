"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Posters from "@/components/Products/UpdateProduct/Posters";
import Story from "@/components/Products/UpdateProduct/Story";
import DeleteProduct from "@/components/Products/UpdateProduct/DeleteProduct";

const Page = ({ params }: any) => {
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
          <Tab key="product1" title="Product Poster">
            <Posters />
          </Tab>
          <Tab key="product2" title="Story Overview">
            <Story />
          </Tab>
          <Tab key="product3" title="Upload File">
            3
          </Tab>
          <Tab key="product4" title="Delete Product">
            <DeleteProduct id={params.slug} />
          </Tab>
        </Tabs>
      </div>
      <div className="h-screen lg:hidden">desktop only</div>
    </DefaultLayout>
  );
};

export default Page;
