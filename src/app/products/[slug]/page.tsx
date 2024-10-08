"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Carousel from "@/components/Products/Product/Story/StoryCarousel";
import Details from "@/components/Products/Product/Details/Details";

const Page = ({ params }: any) => {
  const [product, setProduct] = useState(null);
  //${params.slug}
  return (
    <DefaultLayout>
      <Breadcrumb pageName={`Product Name`} />
      <div className="flex flex-col gap-16">
        <section className="flex items-start justify-center gap-4">
          <Details />
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
