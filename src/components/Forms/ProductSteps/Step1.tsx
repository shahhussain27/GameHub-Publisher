"use client";
import FileInput from "@/components/Atoms/Inputs/FileInput";
import SelectInput from "@/components/Atoms/Inputs/SelectInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import React, { useState } from "react";

const Step1 = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platform, setPlatform] = useState("");
  const [engine, setEngine] = useState("");
  const [logo, setLogo] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setLogo(uploadedFile);
    }
  };

  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Products Details</h2>
      </div>
      <section className="flex justify-between items-start gap-4 ">
        <FileInput
          labelText="Logo"
          w={383}
          h={250}
          onChange={handleFileChange}
        />
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            labelText="Product name"
            placeholderText="Product name"
            defaultText=""
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <TextInput
            labelText="Product price"
            placeholderText="Product price"
            defaultText=""
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
          />
          <TextInput
            labelText="Publisher"
            placeholderText="Publisher"
            defaultText="GamerHub"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPublisher(e.target.value)
            }
          />
          <TextInput
            labelText="Developer"
            placeholderText="Developer"
            defaultText="GameHub"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDeveloper(e.target.value)
            }
          />
          <SelectInput
            labelText="Platform"
            options={["Windows", "Android", "IOS"]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setPlatform(e.target.value)
            }
          />
          <SelectInput
            labelText="Game Engine"
            options={["Unity", "UnReal", "Panda3D"]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setEngine(e.target.value)
            }
          />
        </div>
      </section>
    </>
  );
};

export default Step1;
