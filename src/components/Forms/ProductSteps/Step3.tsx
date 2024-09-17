import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import FileInput from "@/components/Atoms/Inputs/FileInput";
import Textarea from "@/components/Atoms/Inputs/Textarea";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

interface Step3Props {
  onCarouselChange: (value: File[]) => void;
  onHeadingChange: (value: string) => void;
  onStoryChange: (value: string) => void;
}

const Step3: React.FC<Step3Props> = ({
  onCarouselChange,
  onHeadingChange,
  onStoryChange,
}: any) => {
  const [images, setImages] = useState<File[]>([]);
  const [imagesURL, setImagesURL] = useState<string[]>([]);
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
      changeFileIntoURL(uploadedFile);
      setImages([...images, uploadedFile]);
      onCarouselChange(images);
    }
  };

  const changeFileIntoURL = (file: File) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImagesURL((prevURLs: string[]) => [...prevURLs, fileURL]);
    }
  };

  const handleDeleteClick = (index: any) => {
    setImagesURL(imagesURL.filter((_, i) => i !== index))
  };

  // console.log(images);
  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Story Overview</h2>
      </div>
      <section>
        {" "}
        <Carousel responsive={responsive} infinite={true}>
          {imagesURL.map((img, i) => (
            <div
              className="flex justify-center items-center w-full border-2 border-primary rounded-xl"
              key={i}
            >
              <div className="relative group w-full h-auto">
                <Image
                  src={img}
                  alt="images"
                  height={100}
                  width={100}
                  className="w-full h-[350px] object-cover"
                />

                <button
                  onClick={()=>handleDeleteClick(i)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <AiOutlineDelete className="text-white text-4xl hover:bg-rose-500 p-1 rounded-full" />
                </button>
              </div>
            </div>
          ))}
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
        <Textarea
          labelText="Story Heading"
          defaultText="story"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onHeadingChange(e.target.value)
          }
        />
        <Textarea
          labelText="Story Overview"
          defaultText="story"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onStoryChange(e.target.value)
          }
        />
      </section>
    </>
  );
};

export default Step3;
