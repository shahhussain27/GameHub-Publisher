"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/Stepper";
import Step1 from "@/components/Forms/ProductSteps/Step1";
import Step2 from "@/components/Forms/ProductSteps/Step2";
import Step3 from "@/components/Forms/ProductSteps/Step3";
import Step4 from "@/components/Forms/ProductSteps/Step4";

const Page = () => {
  //step 1
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platform, setPlatform] = useState("Windows");
  const [engine, setEngine] = useState("Unity");
  const [logo, setLogo] = useState<File | null>(null);
  //step 2
  const [poster, setPoster] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  //step 3
  const [carouselsImages, setCarouselsImages] = useState<File[]>([]);
  const [storyHeading, setStoryHeading] = useState("");
  const [storyOverview, setStoryOverview] = useState("");

  //step 4
  const [file, setFile] = useState<File | null>(null);

  //useState->props->setStates->StepsComponents->StateValues->Forms->Stepper

  const productData = new FormData();
  productData.append("productName", name);
  productData.append("productPrice", price);
  productData.append("productPublisher", publisher);
  productData.append("productDeveloper", developer);
  productData.append("productPlatform", platform);
  productData.append("productEngine", engine);
  if (logo) {
    productData.append("productLogo", logo);
  }

  if (poster) {
    productData.append("productPoster", poster);
  }
  productData.append("productTitle", title);

  if (carouselsImages) {
    productData.append("carouselImages", carouselsImages);
  }
  productData.append("storyHeading", storyHeading);
  productData.append("storyOverview", storyOverview);

  if (file) {
    productData.append("file", file);
  }

  const steps = [
    <Step1
      key="step1"
      name={name}
      price={price}
      platform={platform}
      engine={engine}
      logo={logo}
      onNameChange={setName}
      onPriceChange={setPrice}
      onPublisherChange={setPublisher}
      onDeveloperChange={setDeveloper}
      onPlatformChange={setPlatform}
      onEngineChange={setEngine}
      onLogoChange={setLogo}
    />,
    <Step2 key="step2" onPosterChange={setPoster} onTitleChange={setTitle} />,
    <Step3
      key="step3"
      onCarouselChange={setCarouselsImages}
      onHeadingChange={setStoryHeading}
      onStoryChange={setStoryOverview}
    />,
    <Step4 key="step4" onFileChange={setFile} />,
  ];

  return (
    <DefaultLayout>
      <Stepper steps={steps} productData={productData} />
    </DefaultLayout>
  );
};

export default Page;
