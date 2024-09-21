"use client";
import FileInput from "@/components/Atoms/Inputs/FileInput";
import SelectInput from "@/components/Atoms/Inputs/SelectInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import React, { useState } from "react";



const Step1 = ({
  name,
  price,
  platform,
  engine,
  logo,
  onNameChange,
  onPriceChange,
  onPublisherChange,
  onDeveloperChange,
  onPlatformChange,
  onEngineChange,
  onLogoChange,
}:any) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      onLogoChange(uploadedFile);
    }
  };

  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Products Details</h2>
      </div>
      <section className="flex justify-between items-start gap-4 ">
        <FileInput
          labelText="poster"
          w={383}
          h={400}
          selectedFile={logo}
          onChange={handleFileChange}
        />
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            labelText="Product name"
            placeholderText="Product name"
            defaultText={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onNameChange(e.target.value)
            }
          />

          <TextInput
            labelText="Product price"
            placeholderText="Product price"
            defaultText={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPriceChange(e.target.value)
            }
          />
          <TextInput
            labelText="Publisher"
            placeholderText="Publisher"
            defaultText="GamerHub"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPublisherChange(e.target.value)
            }
          />
          <TextInput
            labelText="Developer"
            placeholderText="Developer"
            defaultText="GameHub"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onDeveloperChange(e.target.value)
            }
          />
          <SelectInput
            labelText="Platform"
            defaultOption={platform}
            options={["Windows", "Android", "IOS"]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onPlatformChange(e.target.value)
            }
          />
          <SelectInput
            labelText="Game Engine"
            defaultOption={engine}
            options={["Unity", "UnReal", "Panda3D"]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onEngineChange(e.target.value)
            }
          />
        </div>
      </section>
    </>
  );
};

export default Step1;
