import FileInput from "@/components/Atoms/Inputs/FileInput";
import Textarea from "@/components/Atoms/Inputs/Textarea";
import React from "react";

const Step2 = () => {
  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Product Poster</h2>
      </div>
      <section className="flex justify-around items-start gap-4 ">
        <div className="grid grid-cols-1 gap-6">
          <FileInput labelText="Poster" w={1920} h={400} />
          <Textarea labelText={"Title"} />
        </div>
      </section>
    </>
  );
};

export default Step2;
