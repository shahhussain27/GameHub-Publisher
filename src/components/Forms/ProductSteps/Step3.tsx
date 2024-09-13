import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import FileInput from "@/components/Atoms/Inputs/FileInput";
import Textarea from "@/components/Atoms/Inputs/Textarea";

const Step3 = () => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      //   onPosterChange(uploadedFile);
    }
  };
  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Story Overview</h2>
      </div>
      <section>
        {" "}
        <Carousel responsive={responsive} infinite={true}>
          <div className="flex justify-center items-center w-full h-[350px] border-2 border-primary rounded-xl">
            <FileInput
              labelText="Carousel"
              w={1920}
              h={350}
              onChange={handleFileChange}
            />
          </div>
        </Carousel>
      </section>
      <section className="mt-4">
        <Textarea labelText="Story Heading" defaultText="story" />
        <Textarea labelText="Story Overview" defaultText="story" />
      </section>
    </>
  );
};

export default Step3;
