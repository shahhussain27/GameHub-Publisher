import FileInput from "@/components/Atoms/Inputs/FileInput";
import SelectInput from "@/components/Atoms/Inputs/SelectInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import React from "react";

const Step1 = () => {
  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Products Details</h2>
      </div>
      <section className="flex justify-between items-start gap-4 ">
        <FileInput labelText="Logo" w={383} h={250} />
        <div className="grid grid-cols-2 gap-6">
          <TextInput
            labelText="Product name"
            placeholderText="Product name"
            defaultText=""
          />

          <TextInput
            labelText="Product price"
            placeholderText="Product price"
            defaultText=""
          />
          <TextInput
            labelText="Publisher"
            placeholderText="Publisher"
            defaultText="GamerHub"
          />
          <TextInput
            labelText="Developer"
            placeholderText="Developer"
            defaultText="GameHub"
          />
          <SelectInput
            labelText="Platform"
            options={["Windows", "Android", "IOS"]}
          />
          <SelectInput
            labelText="Game Engine"
            options={["Unity", "UnReal", "Panda3D"]}
          />
        </div>
      </section>
    </>
  );
};

export default Step1;
