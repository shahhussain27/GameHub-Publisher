"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import ChartTwo from "@/components/Charts/ChartTwo";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import MapOne from "@/components/Maps/MapOne";

export default function Page({ params }: { params: { slug: string } }) {
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
            <ChartOne />
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
