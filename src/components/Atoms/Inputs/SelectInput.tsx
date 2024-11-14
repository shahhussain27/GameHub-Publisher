"use client";
import React, { useState, useEffect } from "react";

const SelectInput = ({ labelText, options, defaultOption, onChange }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultOption || ""
  );
  const [isOptionSelected, setIsOptionSelected] =
    useState<boolean>(!!defaultOption);

  useEffect(() => {
    if (defaultOption) {
      setSelectedOption(defaultOption);
      setIsOptionSelected(true);
    }
  }, [defaultOption]);

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
        className={`${
          labelText === null ? "hidden" : ""
        } mb-1 ml-1 block text-body-sm font-medium text-dark dark:text-white`}
      >
        Select {labelText}
      </label>

      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleChange}
          className={`relative w-full h-[46px] appearance-none rounded-[7px] px-3 py-2 outline-none transition border border-primary bg-transparent ${
            isOptionSelected ? "text-dark dark:text-white" : ""
          }`}
        >
          {options.map((item: any, index: any) => (
            <option
              key={index}
              value={item}
              className={`text-dark-5 dark:text-dark-6 ${
                item === selectedOption ? "font-semibold" : ""
              }`}
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
