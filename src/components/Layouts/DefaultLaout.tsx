"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
