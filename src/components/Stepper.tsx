"use client";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Stepper = ({
  steps,
  productData,
}: {
  steps: React.ReactNode[];
  productData: any;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  // currentStpe's->input's-> empty->next(disabled)->fill(enabled)
 // form validation - pending
 

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // console.log(productData);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6 gap-2">
        {steps.map((_, index) => (
          <div className="flex-1" key={index}>
            <h3
              className={`flex items-center gap-1 text-lg font-semibold mb-2 ${
                index <= currentStep ? "text-primary" : "text-gray-300"
              }`}
            >
              {currentStep <= index ? (
                index + 1
              ) : (
                <FaCircleCheck className="text-xl font-extrabold" />
              )}{" "}
              {index === 0 && <>Product Details</>}
              {index === 1 && <> Product Poster</>}
              {index === 2 && <> System Requirements</>}
            </h3>
            <div
              className={` h-1 rounded ${
                index <= currentStep ? "bg-primary" : "bg-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="my-18">{steps[currentStep]}</div>
      <div className="flex justify-between mt-8 ">
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          className="disabled:invisible bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200"
        >
          Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={goNext}
            disabled={isDisabled}
            className="disabled:bg-primary/20 bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            // onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
