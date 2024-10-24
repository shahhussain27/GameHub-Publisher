import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="w-full">
      <Slider {...settings} className="">
        <div>
          <h3 className="bg-yellow-400 text-black h-20">1</h3>
        </div>
        <div>
          <h3 className="bg-yellow-300 text-black h-20 mx-4">2</h3>
        </div>
        <div>
          <h3 className="bg-yellow-200 text-black h-20">3</h3>
        </div>
        <div className="mx-4 h-20">
          <button className="btn-primary py-2.5 ">Add</button>
        </div>
      </Slider>
      <div></div>
    </div>
  );
};

export default Story;
