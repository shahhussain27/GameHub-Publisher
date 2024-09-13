"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/Stepper";
import Step1 from "@/components/Forms/ProductSteps/Step1";
import Step2 from "@/components/Forms/ProductSteps/Step2";
import Step3 from "@/components/Forms/ProductSteps/Step3";
import Step4 from "@/components/Forms/ProductSteps/Step4";
import Step5 from "@/components/Forms/ProductSteps/Step5";

const page = () => {
  //step 1
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platform, setPlatform] = useState("");
  const [engine, setEngine] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  //step 2
  const [poster, setPoster] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  //step 3
  const [file, setFile] = useState<File | null>(null);

  //step 4
  const [minOS, setMinOS] = useState<any[]>([]);
  const [RecOS, setRecOS] = useState<any[]>([]);
  const [minCPU, setMinCPU] = useState<any[]>([]);
  const [recCPU, setRecCPU] = useState<any[]>([]);
  const [minRAM, setMinRAM] = useState("");
  const [recRAM, setRecRAM] = useState("");
  const [minStorage, setMinStorage] = useState("");
  const [recStorage, setRecStorage] = useState("");
  const [minGPU, setMinGPU] = useState<any[]>([]);
  const [recGPU, setRecGPU] = useState<any[]>([]);
  const [minSoundCard, setMinSoundCard] = useState("");
  const [recSoundCard, setRecSoundCard] = useState("");
  const [notes, setNotes] = useState("");
  const [accounts, setAccounts] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
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

  if (file) {
    productData.append("file", file);
  }

  productData.append("productMinOS", JSON.stringify(minOS));
  productData.append("productRecOS", JSON.stringify(RecOS));
  productData.append("productMinCPU", JSON.stringify(minCPU));
  productData.append("productRecCPU", JSON.stringify(recCPU));
  productData.append("productMinGPU", JSON.stringify(minGPU));
  productData.append("productRecGPU", JSON.stringify(recGPU));
  productData.append("productAccounts", JSON.stringify(accounts));
  productData.append("productLanguages", JSON.stringify(languages));
  productData.append("productMinRAM", minRAM);
  productData.append("productRecRAM", recRAM);
  productData.append("productMinStorage", minStorage);
  productData.append("productRecStorage", recStorage);
  productData.append("productMinSoundCard", minSoundCard);
  productData.append("productRecSoundCard", recSoundCard);
  productData.append("productNotes", notes);

  const steps = [
    <Step1
      onNameChange={setName}
      onPriceChange={setPrice}
      onPublisherChange={setPublisher}
      onDeveloperChange={setDeveloper}
      onPlatformChange={setPlatform}
      onEngineChange={setEngine}
      onLogoChange={setLogo}
    />,
    <Step2 onPosterChange={setPoster} onTitleChange={setTitle} />,
    <Step3 />,
    <Step4 onFileChange={setFile} />,
    <Step5
      onMinOSChange={setMinOS}
      onRecOSChange={setRecOS}
      onMinCPUChange={setMinCPU}
      onRecCPUChange={setRecCPU}
      onMinRAMChange={setMinRAM}
      onRecRAMChange={setRecRAM}
      onMinStorageChange={setMinStorage}
      onRecStorageChange={setRecStorage}
      onMinGPUChange={setMinGPU}
      onRecGPUChange={setRecGPU}
      onMinSoundCardChange={setMinSoundCard}
      onRecSoundCardChange={setRecSoundCard}
      onNotesChange={setNotes}
      onAccountsChange={setAccounts}
      onLanguageChange={setLanguages}
    />,
  ];

  return (
    <DefaultLayout>
      <Stepper steps={steps} productData={productData} />
    </DefaultLayout>
  );
};

export default page;
