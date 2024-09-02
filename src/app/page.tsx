"use client";
import Landing from "@/components/Landing";
import ThreeDScene from "@/components/ThreeDScene";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <main
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <ThreeDScene />
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Landing />
        </div>
      </main>
    </>
  );
}
