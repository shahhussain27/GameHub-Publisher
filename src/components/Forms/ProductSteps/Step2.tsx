"use client";
import FileInput from "@/components/Atoms/Inputs/FileInput";
import Textarea from "@/components/Atoms/Inputs/Textarea";
import React, { useState } from "react";

const Step2 = () => {
  const [poster, setPoster] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setPoster(uploadedFile);
    }
  };

  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">Product Poster</h2>
      </div>
      <section className="flex justify-around items-start gap-4 ">
        <div className="grid grid-cols-1 gap-6">
          <FileInput
            labelText="Poster"
            w={1920}
            h={400}
            onChange={handleFileChange}
          />
          <Textarea
            labelText={"Title"}
            defaultText=""
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
      </section>
    </>
  );
};

export default Step2;
