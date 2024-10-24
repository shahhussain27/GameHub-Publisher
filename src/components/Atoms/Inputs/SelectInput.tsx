"use client";
import React, { useState } from "react";

const SelectInput = ({ labelText, options, defaultOption, onChange }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setIsOptionSelected(true);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      <label
        className={`${labelText === null ? "hidden" : ""} block text-body-sm font-medium text-dark dark:text-white `}
      >
        Select {labelText}
      </label>

      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleChange}
          className={`relative  w-[287px] h-[46px] appearance-none rounded-[12px] px-5.5 py-3 outline-none transition focus:border-primary/70 active:border-primary/90 dark:border-primary dark:bg-[#061323] ${
            isOptionSelected ? "text-dark dark:text-white" : ""
          }`}
        >
          {options.map((item: any, index: any) => (
            <option
            key={index}
              value={item}
              className="text-dark-5 dark:text-dark-6"
             
            >
              {item}
            </option>
          ))}
        </select>

      
      </div>
    </div>
  );
};

export default SelectInput;
