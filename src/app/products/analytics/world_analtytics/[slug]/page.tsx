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
            <MapOne />
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
}
