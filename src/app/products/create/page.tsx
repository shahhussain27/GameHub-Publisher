// pages/steps/page.tsx
import React from "react";
import FileInput from "@/components/Atoms/Inputs/FileInput";
import SelectInput from "@/components/Atoms/Inputs/SelectInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/Stepper";
import Textarea from "@/components/Atoms/Inputs/Textarea";
import MultiSelectInput from "@/components/Atoms/Inputs/MultiSelectInput";
import Step1 from "@/components/Forms/ProductSteps/Step1";
import Step2 from "@/components/Forms/ProductSteps/Step2";
import Step3 from "@/components/Forms/ProductSteps/Step3";

const page = () => {
  const steps = [<Step1 />, <Step2 />, <Step3 />];

  return (
    <DefaultLayout>
      <Stepper steps={steps} />
    </DefaultLayout>
  );
};

export default page;
