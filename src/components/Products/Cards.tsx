import React, { useState } from "react";
import Card from "./Card";
import { CiGrid41, CiCircleList } from "react-icons/ci";

const Cards = () => {
  const [view, setView] = useState(true);
  return (
    <>
      <section className="flex justify-end items-end gap-1 py-4 w-full text-2xl">
        <button
          onClick={() => setView(true)}
          className={`${view ? "text-primary bg-primary/[.07] dark:bg-slate-800 " : ""} hover:bg-primary/[.07] dark:hover:bg-slate-800 p-1 rounded`}
        >
          <CiGrid41 />
        </button>
        <button
          onClick={() => setView(false)}
          className={`${!view ? "text-primary bg-primary/[.07] dark:bg-slate-800 " : ""} hover:bg-primary/[.07] dark:hover:bg-slate-800 p-1 rounded`}
        >
          <CiCircleList />
        </button>
      </section>
      <section
        className={`grid ${view ? "grid-cols-3 gap-y-10" : "grid-cols-1 gap-y-4"}   max-sm:grid-cols-1 max-md:grid-cols-2`}
      >
        <Card view={view} analyticsPage={`/products/analytics/demo`} />
      </section>
    </>
  );
};

export default Cards;
