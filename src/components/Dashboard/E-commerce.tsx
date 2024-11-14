"use client";
import React, { useContext } from "react";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import Cards from "../Products/Cards";
import { ProductContext } from "@/context/ProductContext";

const ECommerce = () => {
  return (
    <>
      {" "}
      <DataStatsOne />
      <div className="mt-4 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* Ensure the delete all unused files from components */}

        {/* <ChartTwo /> */}

        {/* <MapOne /> */}
        <Cards />
        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
