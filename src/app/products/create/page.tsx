"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Stepper from "@/components/Stepper";
import Step1 from "@/components/Forms/ProductSteps/Step1";
import Step2 from "@/components/Forms/ProductSteps/Step2";
import Step3 from "@/components/Forms/ProductSteps/Step3";

const page = () => {
  //useState->props->setStates->StepsComponents->StateValues->Forms->Stepper
  const steps = [<Step1 />, <Step2 />, <Step3 />];

  return (
    <DefaultLayout>
      <Stepper steps={steps}  />
    </DefaultLayout>
  );
};

export default page;
