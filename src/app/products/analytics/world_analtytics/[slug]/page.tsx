"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import MapOne from "@/components/Maps/MapOne";

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
        <Breadcrumb pageName="World Analytics" />
        {/* Product Id: {params.slug} */}
        <section>
          <h3 className="font-medium text-wrap w-4/4">
            At Real World Analytics, we optimize game download performance and
            user engagement across global markets. By leveraging our insights,
            game distributors and developers can enhance their strategies, drive
            user retention, and maximize profitability.
          </h3>
        </section>
        <section className="grid gap-4 mt-8 w-full ">
          <section className="w-full ">
            <MapOne productDownloads={(product as any).productDownloads} />
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
}
