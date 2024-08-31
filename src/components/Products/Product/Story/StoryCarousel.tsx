import React from "react";
import Carousel from "./Carousel";

const StoryCarousel = () => {
  return (
    <div className="flex items-start justify-center gap-4">
      <Carousel/>
      <div className="flex flex-col items-start justify-center gap-4 w-2/4 text-wrap">
        <h4 className="text-4xl font-bold text-white">Story Heading</h4>
        <p className="font-medium">
          Story Summary: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolorem, facere. Aut, molestias tempora, natus iste voluptatibus
          reprehenderit culpa excepturi soluta sequi atque rerum cumque! Tempore
          aut vel praesentium atque magnam similique. Nostrum earum eius quidem
          nihil dolore repellat libero amet alias. Provident fugit hic beatae,
          quod a quibusdam officiis consequatur dolorem animi explicabo nihil
          accusamus vitae magni minus maxime quis? Hic dolorem aspernatur,
          cumque, accusamus iusto natus animi eligendi enim, impedit eos a
          labore fugit veritatis doloribus optio eaque facere? Veniam cumque
          amet voluptatibus maiores assumenda provident sequi incidunt dolore!
        </p>
      </div>
    </div>
  );
};

export default StoryCarousel;
