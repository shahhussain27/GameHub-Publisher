import React from "react";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardImage from "../../../../public/assets/card-img.jpg";
import SystemTable from "@/components/Products/Product/SystemReq/SystemTable";
import Carousel from "@/components/Products/Product/Story/StoryCarousel";
import Details from "@/components/Products/Product/Details/Details";

const page = ({ params }: { params: { slug: string } }) => {
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
          <SystemTable />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default page;
