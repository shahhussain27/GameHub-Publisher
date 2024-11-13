"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import ChartTwo from "@/components/Charts/ChartTwo";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function Page({ params }: { params: { slug: string } }) {
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
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Revenue Analytics" />
        {/* Product Id: {params.slug} */}
        <section>
          <h3 className="font-medium text-wrap w-3/4">
            Analytics provide you with key metrics for your product. Use
            analytics to get insight into the performance of your product and
            integrated services.
          </h3>
        </section>
        <section className="grid gap-4 mt-8 w-full ">
          <section className="w-full ">
            <ChartOne productDownloads={(product as any).productDownloads} />
          </section>

          <section className="grid grid-cols-2 gap-4 w-full max-sm:grid-cols-1">
            <section className="">
              <ChartThree />
            </section>
            <section className=" ">
              <ChartTwo /> {/* Total Downloads - 1) Downloads 2) Revenue */}
            </section>
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
}
