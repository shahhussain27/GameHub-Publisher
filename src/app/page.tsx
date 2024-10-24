"use client";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import ThreeDScene from "@/components/ThreeDScene";

//import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Home() {
  return (
    <>
      <main style={{ position: "relative", height: "100vh" }}>
        <ThreeDScene />
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Landing />
          <Footer />
        </div>
      </main>
    </>
  );
}
