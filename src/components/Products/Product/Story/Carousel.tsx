"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import img from "../../../../../public/assets/card-img.jpg";

const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="relative w-2/4 max-sm:w-full bg-slate-400 h-[350px] rounded-xl overflow-hidden">
      <Carousel responsive={responsive} infinite={true}>
        <Image
          src={img}
          alt="img"
          height={100}
          width={100}
          className="w-full h-[350px] object-cover"
          loading="lazy"
        />
      </Carousel>
    </div>
  );
};

export default Carousels;
